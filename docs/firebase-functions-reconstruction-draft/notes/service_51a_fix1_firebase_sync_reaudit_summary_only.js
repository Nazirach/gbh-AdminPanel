const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccountPath = process.argv[2];
const outPath = process.argv[3];

function isEmpty(v) {
  return v === undefined || v === null || v === "";
}

function safe(v) {
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  if (Array.isArray(v)) return JSON.stringify(v);
  if (typeof v === "object") {
    try { return JSON.stringify(v); } catch (_) { return String(v); }
  }
  return String(v);
}

function inc(obj, key) {
  obj[key] = (obj[key] || 0) + 1;
}

async function run() {
  const lines = [];
  lines.push("# SERVICE 51A-FIX1 FIREBASE SYNC REAUDIT SUMMARY ONLY");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: READ ONLY.");
  lines.push("");
  lines.push("Admin normalizers applied:");
  lines.push("- 48E vendor create/edit");
  lines.push("- 49B product create/edit");
  lines.push("- 50B category create/edit");
  lines.push("");

  if (!fs.existsSync(serviceAccountPath)) {
    lines.push("STATUS: SERVICE_51A_FIX1_SERVICE_ACCOUNT_NOT_FOUND");
    fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
    process.exitCode = 1;
    return;
  }

  const serviceAccount = require(serviceAccountPath);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const vendorSnap = await db.collection("vendors").get();
  const productSnap = await db.collection("vendor_products").get();
  const categorySnap = await db.collection("vendor_categories").get();

  const vendorRiskTypes = {};
  const productRiskTypes = {};
  const categoryRiskTypes = {};

  let vendorRiskTotal = 0;
  let productRiskTotal = 0;
  let categoryRiskTotal = 0;

  let vendorsTotal = 0;
  let productsTotal = 0;
  let productsPublishTrue = 0;
  let categoriesTotal = 0;
  let categoriesPublishTrue = 0;

  const vendorExamples = [];
  const productExamples = [];
  const categoryExamples = [];

  vendorSnap.forEach((doc) => {
    vendorsTotal++;
    const d = doc.data();
    const risks = [];

    if (isEmpty(d.section_id)) risks.push("section_id_missing");
    if (isEmpty(d.zoneId)) risks.push("zoneId_missing");
    if (typeof d.latitude !== "number") risks.push("latitude_not_number");
    if (typeof d.longitude !== "number") risks.push("longitude_not_number");
    if (!d.coordinates) risks.push("coordinates_missing");
    if (!d.createdAt) risks.push("createdAt_missing");
    if (!d.updatedAt) risks.push("updatedAt_missing");
    if (d.publish !== true) risks.push("publish_not_true");
    if (d.isActive !== true) risks.push("isActive_not_true");

    if (risks.length > 0) {
      vendorRiskTotal++;
      risks.forEach((r) => inc(vendorRiskTypes, r));
      if (vendorExamples.length < 20) {
        vendorExamples.push("RISK_VENDOR_EXAMPLE | id=" + doc.id + " | title=" + safe(d.title || d.name || d.vendorName) + " | section_id=" + safe(d.section_id) + " | risks=" + risks.join("|"));
      }
    }
  });

  productSnap.forEach((doc) => {
    productsTotal++;
    const d = doc.data();
    if (d.publish === true) productsPublishTrue++;

    const risks = [];
    if (isEmpty(d.vendorID)) risks.push("vendorID_missing");
    if (isEmpty(d.categoryID)) risks.push("categoryID_missing");
    if (d.publish === true && !d.createdAt) risks.push("publish_true_createdAt_missing");
    if (d.publish === true && !d.updatedAt) risks.push("publish_true_updatedAt_missing");
    if (typeof d.takeawayOption !== "boolean") risks.push("takeawayOption_not_boolean");

    if (risks.length > 0) {
      productRiskTotal++;
      risks.forEach((r) => inc(productRiskTypes, r));
      if (productExamples.length < 20) {
        productExamples.push("RISK_PRODUCT_EXAMPLE | id=" + doc.id + " | name=" + safe(d.name) + " | vendorID=" + safe(d.vendorID) + " | risks=" + risks.join("|"));
      }
    }
  });

  categorySnap.forEach((doc) => {
    categoriesTotal++;
    const d = doc.data();
    if (d.publish === true) categoriesPublishTrue++;

    const risks = [];
    if (isEmpty(d.id)) risks.push("id_missing");
    if (isEmpty(d.title)) risks.push("title_missing");
    if (isEmpty(d.section_id)) risks.push("section_id_missing");
    if (d.publish !== true) risks.push("publish_not_true");
    if (isEmpty(d.photo)) risks.push("photo_missing");
    if (d.publish === true && !d.createdAt) risks.push("publish_true_createdAt_missing");
    if (d.publish === true && !d.updatedAt) risks.push("publish_true_updatedAt_missing");

    if (risks.length > 0) {
      categoryRiskTotal++;
      risks.forEach((r) => inc(categoryRiskTypes, r));
      if (categoryExamples.length < 20) {
        categoryExamples.push("RISK_CATEGORY_EXAMPLE | id=" + doc.id + " | title=" + safe(d.title) + " | section_id=" + safe(d.section_id) + " | risks=" + risks.join("|"));
      }
    }
  });

  lines.push("## Summary Counts");
  lines.push("TEXT_START");
  lines.push("VENDORS_TOTAL: " + vendorsTotal);
  lines.push("VENDORS_RISK_TOTAL: " + vendorRiskTotal);
  lines.push("PRODUCTS_TOTAL: " + productsTotal);
  lines.push("PRODUCTS_PUBLISH_TRUE_TOTAL: " + productsPublishTrue);
  lines.push("PRODUCTS_RISK_TOTAL: " + productRiskTotal);
  lines.push("CATEGORIES_TOTAL: " + categoriesTotal);
  lines.push("CATEGORIES_PUBLISH_TRUE_TOTAL: " + categoriesPublishTrue);
  lines.push("CATEGORIES_RISK_TOTAL: " + categoryRiskTotal);
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Risk Type Counts");
  lines.push("TEXT_START");
  lines.push("VENDOR_RISK_TYPES: " + JSON.stringify(vendorRiskTypes));
  lines.push("PRODUCT_RISK_TYPES: " + JSON.stringify(productRiskTypes));
  lines.push("CATEGORY_RISK_TYPES: " + JSON.stringify(categoryRiskTypes));
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Limited Examples");
  lines.push("TEXT_START");
  lines.push(...vendorExamples);
  lines.push(...productExamples);
  lines.push(...categoryExamples);
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Interpretation");
  lines.push("TEXT_START");
  lines.push("Admin Web input path is now patched for new vendor/product/category writes.");
  lines.push("Remaining risks are legacy Firebase data or data created outside the patched Admin Web path.");
  lines.push("Do not globally publish inactive legacy vendors without business decision.");
  lines.push("Safe next step: normalize only records that are already publish=true/isActive=true or Aceh clone/demo target records.");
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Final Status");
  if (vendorRiskTotal > 0 || productRiskTotal > 0 || categoryRiskTotal > 0) {
    lines.push("STATUS: SERVICE_51A_FIX1_FIREBASE_LEGACY_DATA_STILL_NEEDS_TARGETED_NORMALIZATION");
  } else {
    lines.push("STATUS: SERVICE_51A_FIX1_FIREBASE_SYNC_PASS_AFTER_ADMIN_NORMALIZER");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_51A_FIX1_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccountPath = process.argv[2];
const outPath = process.argv[3];

function isEmpty(v) {
  return v === undefined || v === null || v === "";
}

function inc(obj, key) {
  obj[key] = (obj[key] || 0) + 1;
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

async function run() {
  const lines = [];
  lines.push("# SERVICE 51C FIREBASE REAUDIT AFTER 51B TARGETED PATCH");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: READ ONLY.");
  lines.push("");

  if (!fs.existsSync(serviceAccountPath)) {
    lines.push("STATUS: SERVICE_51C_SERVICE_ACCOUNT_NOT_FOUND");
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
  let vendorsActivePublished = 0;
  let activePublishedVendorTimestampRisk = 0;

  let productsTotal = 0;
  let productsPublishTrue = 0;
  let publishedProductTimestampRisk = 0;

  let categoriesTotal = 0;
  let categoriesPublishTrue = 0;
  let publishedCategoryTimestampRisk = 0;

  const examples = [];

  vendorSnap.forEach((doc) => {
    vendorsTotal++;
    const d = doc.data();

    if (d.publish === true && d.isActive === true) {
      vendorsActivePublished++;
      if (!d.createdAt || !d.updatedAt) {
        activePublishedVendorTimestampRisk++;
        examples.push("ACTIVE_VENDOR_TIMESTAMP_RISK | id=" + doc.id + " | title=" + safe(d.title || d.name || d.vendorName));
      }
    }

    const risks = [];
    if (isEmpty(d.section_id)) risks.push("section_id_missing");
    if (isEmpty(d.zoneId)) risks.push("zoneId_missing");
    if (typeof d.latitude !== "number") risks.push("latitude_not_number");
    if (typeof d.longitude !== "number") risks.push("longitude_not_number");
    if (!d.coordinates) risks.push("coordinates_missing");
    if (!d.updatedAt) risks.push("updatedAt_missing");
    if (d.publish !== true) risks.push("publish_not_true");
    if (d.isActive !== true) risks.push("isActive_not_true");

    if (risks.length > 0) {
      vendorRiskTotal++;
      risks.forEach((r) => inc(vendorRiskTypes, r));
    }
  });

  productSnap.forEach((doc) => {
    productsTotal++;
    const d = doc.data();

    const risks = [];
    if (isEmpty(d.vendorID)) risks.push("vendorID_missing");
    if (isEmpty(d.categoryID)) risks.push("categoryID_missing");
    if (typeof d.takeawayOption !== "boolean") risks.push("takeawayOption_not_boolean");

    if (d.publish === true) {
      productsPublishTrue++;
      if (!d.createdAt || !d.updatedAt) {
        publishedProductTimestampRisk++;
        risks.push("published_timestamp_missing_after_51b");
        examples.push("PUBLISHED_PRODUCT_TIMESTAMP_RISK | id=" + doc.id + " | name=" + safe(d.name));
      }
    }

    if (risks.length > 0) {
      productRiskTotal++;
      risks.forEach((r) => inc(productRiskTypes, r));
    }
  });

  categorySnap.forEach((doc) => {
    categoriesTotal++;
    const d = doc.data();

    const risks = [];
    if (isEmpty(d.id)) risks.push("id_missing");
    if (isEmpty(d.title)) risks.push("title_missing");
    if (isEmpty(d.section_id)) risks.push("section_id_missing");
    if (d.publish !== true) risks.push("publish_not_true");
    if (isEmpty(d.photo)) risks.push("photo_missing");

    if (d.publish === true) {
      categoriesPublishTrue++;
      if (!d.createdAt || !d.updatedAt) {
        publishedCategoryTimestampRisk++;
        risks.push("published_timestamp_missing_after_51b");
        examples.push("PUBLISHED_CATEGORY_TIMESTAMP_RISK | id=" + doc.id + " | title=" + safe(d.title));
      }
    }

    if (risks.length > 0) {
      categoryRiskTotal++;
      risks.forEach((r) => inc(categoryRiskTypes, r));
    }
  });

  lines.push("## Summary Counts");
  lines.push("TEXT_START");
  lines.push("VENDORS_TOTAL: " + vendorsTotal);
  lines.push("VENDORS_ACTIVE_PUBLISHED_TOTAL: " + vendorsActivePublished);
  lines.push("ACTIVE_PUBLISHED_VENDOR_TIMESTAMP_RISK: " + activePublishedVendorTimestampRisk);
  lines.push("VENDORS_RISK_TOTAL_GLOBAL_INCLUDING_INACTIVE: " + vendorRiskTotal);
  lines.push("PRODUCTS_TOTAL: " + productsTotal);
  lines.push("PRODUCTS_PUBLISH_TRUE_TOTAL: " + productsPublishTrue);
  lines.push("PUBLISHED_PRODUCT_TIMESTAMP_RISK: " + publishedProductTimestampRisk);
  lines.push("PRODUCTS_RISK_TOTAL_NON_TIMESTAMP_INCLUDED: " + productRiskTotal);
  lines.push("CATEGORIES_TOTAL: " + categoriesTotal);
  lines.push("CATEGORIES_PUBLISH_TRUE_TOTAL: " + categoriesPublishTrue);
  lines.push("PUBLISHED_CATEGORY_TIMESTAMP_RISK: " + publishedCategoryTimestampRisk);
  lines.push("CATEGORIES_RISK_TOTAL_GLOBAL: " + categoryRiskTotal);
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Risk Type Counts");
  lines.push("TEXT_START");
  lines.push("VENDOR_RISK_TYPES: " + JSON.stringify(vendorRiskTypes));
  lines.push("PRODUCT_RISK_TYPES: " + JSON.stringify(productRiskTypes));
  lines.push("CATEGORY_RISK_TYPES: " + JSON.stringify(categoryRiskTypes));
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Limited Timestamp Risk Examples");
  lines.push("TEXT_START");
  if (examples.length === 0) {
    lines.push("NO_TIMESTAMP_RISK_EXAMPLES");
  } else {
    lines.push(...examples.slice(0, 50));
  }
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Final Status");
  if (
    activePublishedVendorTimestampRisk === 0 &&
    publishedProductTimestampRisk === 0 &&
    publishedCategoryTimestampRisk === 0
  ) {
    lines.push("STATUS: SERVICE_51C_TARGETED_TIMESTAMP_SYNC_PASS");
  } else {
    lines.push("STATUS: SERVICE_51C_TARGETED_TIMESTAMP_SYNC_STILL_RISK");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_51C_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
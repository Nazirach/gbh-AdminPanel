const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccountPath = process.argv[2];
const outPath = process.argv[3];

function typeOf(v) {
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  if (v && v.constructor && v.constructor.name) return v.constructor.name;
  return typeof v;
}

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

async function auditVendors(db, lines) {
  const snap = await db.collection("vendors").get();
  let total = 0;
  let risk = 0;
  const fieldTypes = {};

  lines.push("## Vendors Audit");
  lines.push("TEXT_START");

  snap.forEach((doc) => {
    total++;
    const d = doc.data();

    Object.keys(d).forEach((k) => {
      const t = typeOf(d[k]);
      fieldTypes[k] = fieldTypes[k] || {};
      fieldTypes[k][t] = (fieldTypes[k][t] || 0) + 1;
    });

    const risks = [];
    if (isEmpty(d.section_id)) risks.push("section_id_missing");
    if (isEmpty(d.zoneId)) risks.push("zoneId_missing");
    if (typeof d.latitude !== "number") risks.push("latitude_not_number");
    if (typeof d.longitude !== "number") risks.push("longitude_not_number");
    if (!d.coordinates) risks.push("coordinates_missing");
    if (!d.createdAt) risks.push("createdAt_missing");
    if (d.publish !== true) risks.push("publish_not_true");
    if (d.isActive !== true) risks.push("isActive_not_true");

    if (risks.length > 0) {
      risk++;
      lines.push([
        "RISK_VENDOR",
        "id=" + doc.id,
        "title=" + safe(d.title || d.name || d.vendorName),
        "section_id=" + safe(d.section_id),
        "zoneId=" + safe(d.zoneId),
        "risks=" + risks.join("|")
      ].join(" | "));
    }
  });

  lines.push("");
  lines.push("VENDORS_TOTAL: " + total);
  lines.push("VENDORS_RISK_TOTAL: " + risk);
  lines.push("VENDORS_FIELD_TYPE_SUMMARY:");
  Object.keys(fieldTypes).sort().forEach((k) => lines.push(k + " => " + JSON.stringify(fieldTypes[k])));
  lines.push("TEXT_END");
  return { total, risk };
}

async function auditProducts(db, lines) {
  const snap = await db.collection("vendor_products").get();
  let total = 0;
  let risk = 0;
  let publishTrue = 0;
  let missingCreatedAtPublishTrue = 0;
  const fieldTypes = {};

  lines.push("");
  lines.push("## Vendor Products Audit");
  lines.push("TEXT_START");

  snap.forEach((doc) => {
    total++;
    const d = doc.data();

    Object.keys(d).forEach((k) => {
      const t = typeOf(d[k]);
      fieldTypes[k] = fieldTypes[k] || {};
      fieldTypes[k][t] = (fieldTypes[k][t] || 0) + 1;
    });

    if (d.publish === true) publishTrue++;

    const risks = [];
    if (isEmpty(d.vendorID)) risks.push("vendorID_missing");
    if (isEmpty(d.categoryID)) risks.push("categoryID_missing");
    if (d.publish === true && !d.createdAt) {
      risks.push("publish_true_createdAt_missing");
      missingCreatedAtPublishTrue++;
    }
    if (typeof d.takeawayOption !== "boolean") risks.push("takeawayOption_not_boolean");

    if (risks.length > 0) {
      risk++;
      lines.push([
        "RISK_PRODUCT",
        "id=" + doc.id,
        "name=" + safe(d.name),
        "vendorID=" + safe(d.vendorID),
        "categoryID=" + safe(d.categoryID),
        "publish=" + safe(d.publish),
        "createdAtExists=" + Boolean(d.createdAt),
        "takeawayOption=" + safe(d.takeawayOption),
        "risks=" + risks.join("|")
      ].join(" | "));
    }
  });

  lines.push("");
  lines.push("PRODUCTS_TOTAL: " + total);
  lines.push("PRODUCTS_PUBLISH_TRUE_TOTAL: " + publishTrue);
  lines.push("PRODUCTS_RISK_TOTAL: " + risk);
  lines.push("PRODUCTS_PUBLISH_TRUE_MISSING_CREATEDAT: " + missingCreatedAtPublishTrue);
  lines.push("PRODUCTS_FIELD_TYPE_SUMMARY:");
  Object.keys(fieldTypes).sort().forEach((k) => lines.push(k + " => " + JSON.stringify(fieldTypes[k])));
  lines.push("TEXT_END");
  return { total, risk, publishTrue, missingCreatedAtPublishTrue };
}

async function auditCategories(db, lines) {
  const snap = await db.collection("vendor_categories").get();
  let total = 0;
  let risk = 0;
  const fieldTypes = {};

  lines.push("");
  lines.push("## Vendor Categories Audit");
  lines.push("TEXT_START");

  snap.forEach((doc) => {
    total++;
    const d = doc.data();

    Object.keys(d).forEach((k) => {
      const t = typeOf(d[k]);
      fieldTypes[k] = fieldTypes[k] || {};
      fieldTypes[k][t] = (fieldTypes[k][t] || 0) + 1;
    });

    const risks = [];
    if (isEmpty(d.id)) risks.push("id_missing");
    if (isEmpty(d.title)) risks.push("title_missing");
    if (isEmpty(d.section_id)) risks.push("section_id_missing");
    if (d.publish !== true) risks.push("publish_not_true");
    if (isEmpty(d.photo)) risks.push("photo_missing");

    if (risks.length > 0) {
      risk++;
      lines.push([
        "RISK_CATEGORY",
        "id=" + doc.id,
        "title=" + safe(d.title),
        "section_id=" + safe(d.section_id),
        "publish=" + safe(d.publish),
        "risks=" + risks.join("|")
      ].join(" | "));
    }
  });

  lines.push("");
  lines.push("CATEGORIES_TOTAL: " + total);
  lines.push("CATEGORIES_RISK_TOTAL: " + risk);
  lines.push("CATEGORIES_FIELD_TYPE_SUMMARY:");
  Object.keys(fieldTypes).sort().forEach((k) => lines.push(k + " => " + JSON.stringify(fieldTypes[k])));
  lines.push("TEXT_END");
  return { total, risk };
}

async function run() {
  const lines = [];
  lines.push("# SERVICE 47C FIREBASE REAL DATA SYNC AUDIT");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: READ ONLY.");
  lines.push("");

  if (!fs.existsSync(serviceAccountPath)) {
    lines.push("STATUS: SERVICE_47C_SERVICE_ACCOUNT_NOT_FOUND");
    fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
    process.exitCode = 1;
    return;
  }

  const serviceAccount = require(serviceAccountPath);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const vendors = await auditVendors(db, lines);
  const products = await auditProducts(db, lines);
  const categories = await auditCategories(db, lines);

  lines.push("");
  lines.push("## Decision Summary");
  lines.push("TEXT_START");
  lines.push("VENDORS_TOTAL: " + vendors.total);
  lines.push("VENDORS_RISK_TOTAL: " + vendors.risk);
  lines.push("PRODUCTS_TOTAL: " + products.total);
  lines.push("PRODUCTS_RISK_TOTAL: " + products.risk);
  lines.push("PRODUCTS_PUBLISH_TRUE_MISSING_CREATEDAT: " + products.missingCreatedAtPublishTrue);
  lines.push("CATEGORIES_TOTAL: " + categories.total);
  lines.push("CATEGORIES_RISK_TOTAL: " + categories.risk);
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Final Status");
  if (products.missingCreatedAtPublishTrue > 0 || vendors.risk > 0 || categories.risk > 0) {
    lines.push("STATUS: SERVICE_47C_FIREBASE_SYNC_RISK_FOUND");
  } else {
    lines.push("STATUS: SERVICE_47C_FIREBASE_SYNC_PASS");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.slice(-80).join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_47C_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
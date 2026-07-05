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

function safe(v) {
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  if (Array.isArray(v)) return JSON.stringify(v);
  if (typeof v === "object") {
    try { return JSON.stringify(v); } catch (_) { return String(v); }
  }
  return String(v);
}

async function sampleCollection(db, lines, collectionName, limit) {
  const snap = await db.collection(collectionName).limit(limit).get();
  lines.push("");
  lines.push("### Collection: " + collectionName);
  lines.push("DOC_COUNT_SAMPLED: " + snap.size);

  const fieldTypes = {};

  snap.forEach((doc) => {
    const d = doc.data();
    lines.push("");
    lines.push("DOC: " + doc.id);

    Object.keys(d).sort().forEach((k) => {
      const t = typeOf(d[k]);
      fieldTypes[k] = fieldTypes[k] || {};
      fieldTypes[k][t] = (fieldTypes[k][t] || 0) + 1;

      if ([
        "id","title","name","vendorName",
        "section_id","sectionId",
        "categoryID","categoryId","categorys",
        "zoneId","latitude","longitude","coordinates",
        "createdAt","updatedAt",
        "publish","isActive",
        "takeawayOption",
        "item_attribute","itemAttribute",
        "photos","photo","logo","image",
        "adminCommission","subscriptionPlan"
      ].includes(k)) {
        lines.push("FIELD | " + k + " | type=" + t + " | value=" + safe(d[k]));
      }
    });
  });

  lines.push("");
  lines.push("FIELD_TYPE_SUMMARY:");
  Object.keys(fieldTypes).sort().forEach((k) => {
    lines.push(k + " => " + JSON.stringify(fieldTypes[k]));
  });
}

async function run() {
  const lines = [];
  lines.push("");
  lines.push("## 3. Firebase Firestore Field Reality Scan");
  lines.push("TEXT_START");

  if (!fs.existsSync(serviceAccountPath)) {
    lines.push("SERVICE_ACCOUNT_NOT_FOUND: " + serviceAccountPath);
    lines.push("TEXT_END");
    lines.push("");
    lines.push("STATUS: SERVICE_47A_FIX1_SERVICE_ACCOUNT_NOT_FOUND");
    fs.appendFileSync(outPath, "\r\n" + lines.join("\r\n"), "utf8");
    return;
  }

  const serviceAccount = require(serviceAccountPath);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  await sampleCollection(db, lines, "sections", 25);
  await sampleCollection(db, lines, "vendors", 60);
  await sampleCollection(db, lines, "vendor_products", 60);
  await sampleCollection(db, lines, "vendor_categories", 60);

  lines.push("TEXT_END");

  lines.push("");
  lines.push("## 4. Sync Risk Rules");
  lines.push("TEXT_START");
  lines.push("RULE_PRODUCT_CREATEDAT: Customer product query uses orderBy(createdAt). Missing createdAt makes product invisible.");
  lines.push("RULE_VENDOR_LOCATION: Vendor list/nearby fetch needs zoneId, latitude, longitude, coordinates.");
  lines.push("RULE_VENDOR_CATEGORY_ARRAYS: categoryID/categoryId/categorys must be type-safe.");
  lines.push("RULE_PRODUCT_ITEM_ATTRIBUTE: incomplete item_attribute can break product card variant UI.");
  lines.push("RULE_PUBLISH_ACTIVE: Customer app filters publish/isActive.");
  lines.push("RULE_ADMIN_SOURCE: Admin Web must write the same field names/types expected by Customer App.");
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Final Status");
  lines.push("STATUS: SERVICE_47A_FIX1_ADMIN_FIREBASE_CUSTOMER_SYNC_MAP_AUDITED");

  fs.appendFileSync(outPath, "\r\n" + lines.join("\r\n"), "utf8");
  console.log(lines.slice(-80).join("\n"));
}

run().catch((e) => {
  fs.appendFileSync(outPath, "\r\nSTATUS: SERVICE_47A_FIX1_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
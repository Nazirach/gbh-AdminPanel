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
        "id","title","name","vendorName","section_id","sectionId","categoryID","categoryId",
        "categorys","zoneId","latitude","longitude","coordinates","createdAt","updatedAt",
        "publish","isActive","takeawayOption","item_attribute","itemAttribute","photos","photo",
        "logo","image","adminCommission","subscriptionPlan"
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
  const append = [];
  append.push("");
  append.push("## 3. Firebase Firestore Field Reality Scan");
  append.push("TEXT_START");

  if (!fs.existsSync(serviceAccountPath)) {
    append.push("SERVICE_ACCOUNT_NOT_FOUND: " + serviceAccountPath);
    append.push("TEXT_END");
    append.push("");
    append.push("STATUS: SERVICE_47A_SERVICE_ACCOUNT_NOT_FOUND");
    fs.appendFileSync(outPath, "\r\n" + append.join("\r\n"), "utf8");
    return;
  }

  const serviceAccount = require(serviceAccountPath);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  await sampleCollection(db, append, "sections", 25);
  await sampleCollection(db, append, "vendors", 40);
  await sampleCollection(db, append, "vendor_products", 40);
  await sampleCollection(db, append, "vendor_categories", 40);

  append.push("TEXT_END");

  append.push("");
  append.push("## 4. Sync Risk Rules");
  append.push("TEXT_START");
  append.push("RULE_VENDOR_CREATEDAT: customer/orderBy may require createdAt.");
  append.push("RULE_PRODUCT_CREATEDAT: customer product query uses orderBy(createdAt), missing createdAt makes product invisible.");
  append.push("RULE_VENDOR_CATEGORY_ARRAYS: vendor category fields must be array-safe when app expects list.");
  append.push("RULE_PRODUCT_ITEM_ATTRIBUTE: incomplete item_attribute can break product card variant UI.");
  append.push("RULE_VENDOR_LOCATION: zoneId/latitude/longitude/coordinates must be present for nearby vendor fetch.");
  append.push("RULE_PUBLISH_ACTIVE: customer app often filters by publish/isActive.");
  append.push("TEXT_END");

  append.push("");
  append.push("## Final Status");
  append.push("STATUS: SERVICE_47A_ADMIN_FIREBASE_CUSTOMER_SYNC_MAP_AUDITED");

  fs.appendFileSync(outPath, "\r\n" + append.join("\r\n"), "utf8");
  console.log(append.slice(-80).join("\n"));
}

run().catch((e) => {
  fs.appendFileSync(outPath, "\r\nSTATUS: SERVICE_47A_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
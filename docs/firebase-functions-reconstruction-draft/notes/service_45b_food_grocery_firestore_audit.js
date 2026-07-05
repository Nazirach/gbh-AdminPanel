const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccountPath = process.argv[2];
const outPath = process.argv[3];
const sectionId = process.argv[4];

function safe(v) {
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  if (typeof v === "object") {
    try { return JSON.stringify(v); } catch (_) { return String(v); }
  }
  return String(v);
}

async function queryCollection(db, collection, field, value) {
  try {
    const snap = await db.collection(collection).where(field, "==", value).get();
    return { ok: true, snap, error: null };
  } catch (e) {
    return { ok: false, snap: null, error: e };
  }
}

async function run() {
  const lines = [];
  lines.push("# SERVICE 45B FOOD GROCERY FIRESTORE DATA AUDIT");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: READ ONLY.");
  lines.push("SectionId: " + sectionId);
  lines.push("");

  if (!fs.existsSync(serviceAccountPath)) {
    lines.push("STATUS: SERVICE_45B_SERVICE_ACCOUNT_NOT_FOUND");
    lines.push(serviceAccountPath);
    fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
    process.exitCode = 1;
    return;
  }

  const serviceAccount = require(serviceAccountPath);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  lines.push("## Section Lookup");
  const sectionDoc = await db.collection("sections").doc(sectionId).get();
  lines.push("SECTION_DOC_EXISTS: " + sectionDoc.exists);
  if (sectionDoc.exists) {
    const s = sectionDoc.data();
    lines.push("SECTION_NAME: " + safe(s.name));
    lines.push("SECTION_SERVICE_TYPE_FLAG: " + safe(s.serviceTypeFlag));
    lines.push("SECTION_IS_ACTIVE: " + safe(s.isActive));
  }

  lines.push("");
  lines.push("## Vendor Queries");

  const vendorQueries = [
    ["vendors", "section_id", sectionId],
    ["vendors", "sectionId", sectionId],
    ["vendors", "sectionID", sectionId],
    ["vendors", "section_id", [sectionId]],
  ];

  const vendorMap = new Map();

  for (const q of vendorQueries) {
    const [collection, field, value] = q;
    if (Array.isArray(value)) continue;

    const res = await queryCollection(db, collection, field, value);
    lines.push("");
    lines.push("QUERY vendors WHERE " + field + " == " + value);
    if (!res.ok) {
      lines.push("QUERY_ERROR: " + res.error.message);
      continue;
    }

    lines.push("COUNT: " + res.snap.size);

    res.snap.forEach((doc) => {
      const d = doc.data();
      vendorMap.set(doc.id, d);
      lines.push([
        "VENDOR",
        "id=" + doc.id,
        "name=" + safe(d.title || d.name || d.vendorName),
        "section_id=" + safe(d.section_id),
        "sectionId=" + safe(d.sectionId),
        "publish=" + safe(d.publish),
        "isActive=" + safe(d.isActive),
        "zoneId=" + safe(d.zoneId),
        "createdAtExists=" + Boolean(d.createdAt)
      ].join(" | "));
    });
  }

  const vendorIds = Array.from(vendorMap.keys());
  lines.push("");
  lines.push("## Vendor Summary");
  lines.push("VENDOR_UNIQUE_COUNT: " + vendorIds.length);

  lines.push("");
  lines.push("## Product Queries Per Vendor");

  let totalProductsExact = 0;
  let totalProductsPublishTrue = 0;
  let totalProductsOrderByCreatedAt = 0;
  let vendorsWithProducts = 0;
  let vendorsWithOrderByProducts = 0;
  let productsMissingCreatedAt = 0;

  for (const vendorId of vendorIds) {
    lines.push("");
    lines.push("### Vendor " + vendorId);

    const exact = await db.collection("vendor_products")
      .where("vendorID", "==", vendorId)
      .get();

    const publishTrue = await db.collection("vendor_products")
      .where("vendorID", "==", vendorId)
      .where("publish", "==", true)
      .get();

    let orderByCount = 0;
    let orderByError = "";

    try {
      const orderBySnap = await db.collection("vendor_products")
        .where("vendorID", "==", vendorId)
        .where("publish", "==", true)
        .orderBy("createdAt", "asc")
        .get();

      orderByCount = orderBySnap.size;
    } catch (e) {
      orderByError = e.message;
    }

    totalProductsExact += exact.size;
    totalProductsPublishTrue += publishTrue.size;
    totalProductsOrderByCreatedAt += orderByCount;

    if (exact.size > 0) vendorsWithProducts++;
    if (orderByCount > 0) vendorsWithOrderByProducts++;

    lines.push("PRODUCT_EXACT_VENDORID_COUNT: " + exact.size);
    lines.push("PRODUCT_PUBLISH_TRUE_COUNT: " + publishTrue.size);
    lines.push("PRODUCT_ORDERBY_CREATEDAT_COUNT: " + orderByCount);
    if (orderByError) lines.push("PRODUCT_ORDERBY_ERROR: " + orderByError);

    publishTrue.forEach((doc) => {
      const d = doc.data();
      if (!d.createdAt) productsMissingCreatedAt++;
      lines.push([
        "PRODUCT",
        "id=" + doc.id,
        "name=" + safe(d.name),
        "vendorID=" + safe(d.vendorID),
        "publish=" + safe(d.publish),
        "takeawayOption=" + safe(d.takeawayOption),
        "section_id=" + safe(d.section_id),
        "categoryID=" + safe(d.categoryID),
        "createdAtExists=" + Boolean(d.createdAt),
        "itemAttributeExists=" + Boolean(d.item_attribute || d.itemAttribute)
      ].join(" | "));
    });
  }

  lines.push("");
  lines.push("## Totals");
  lines.push("TOTAL_VENDOR_UNIQUE_COUNT: " + vendorIds.length);
  lines.push("TOTAL_PRODUCTS_EXACT_VENDORID_COUNT: " + totalProductsExact);
  lines.push("TOTAL_PRODUCTS_PUBLISH_TRUE_COUNT: " + totalProductsPublishTrue);
  lines.push("TOTAL_PRODUCTS_ORDERBY_CREATEDAT_COUNT: " + totalProductsOrderByCreatedAt);
  lines.push("VENDORS_WITH_PRODUCTS: " + vendorsWithProducts);
  lines.push("VENDORS_WITH_ORDERBY_PRODUCTS: " + vendorsWithOrderByProducts);
  lines.push("PRODUCTS_MISSING_CREATEDAT: " + productsMissingCreatedAt);

  lines.push("");
  lines.push("## Final Status");

  if (vendorIds.length === 0) {
    lines.push("STATUS: SERVICE_45B_FOOD_GROCERY_NO_VENDOR_FOUND");
  } else if (totalProductsPublishTrue === 0) {
    lines.push("STATUS: SERVICE_45B_FOOD_GROCERY_VENDORS_FOUND_PRODUCTS_MISSING");
  } else if (productsMissingCreatedAt > 0 || totalProductsOrderByCreatedAt < totalProductsPublishTrue) {
    lines.push("STATUS: SERVICE_45B_FOOD_GROCERY_PRODUCTS_NEED_CREATEDAT_PATCH");
  } else {
    lines.push("STATUS: SERVICE_45B_FOOD_GROCERY_DATA_QUERYABLE_PASS");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.slice(-90).join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_45B_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
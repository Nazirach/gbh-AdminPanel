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

async function run() {
  const lines = [];
  lines.push("# SERVICE 46A FASHION SOURCE + FIRESTORE DATA AUDIT");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: READ ONLY.");
  lines.push("SectionId: " + sectionId);
  lines.push("");

  if (!fs.existsSync(serviceAccountPath)) {
    lines.push("STATUS: SERVICE_46A_SERVICE_ACCOUNT_NOT_FOUND");
    fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
    process.exitCode = 1;
    return;
  }

  const serviceAccount = require(serviceAccountPath);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const sectionDoc = await db.collection("sections").doc(sectionId).get();
  lines.push("## Section Lookup");
  lines.push("SECTION_DOC_EXISTS: " + sectionDoc.exists);
  if (sectionDoc.exists) {
    const s = sectionDoc.data();
    lines.push("SECTION_NAME: " + safe(s.name));
    lines.push("SECTION_SERVICE_TYPE_FLAG: " + safe(s.serviceTypeFlag));
    lines.push("SECTION_IS_ACTIVE: " + safe(s.isActive));
  }

  const vendorSnap = await db.collection("vendors").where("section_id", "==", sectionId).get();
  lines.push("");
  lines.push("## Vendors");
  lines.push("VENDOR_COUNT: " + vendorSnap.size);

  const vendorIds = [];
  vendorSnap.forEach((doc) => {
    const d = doc.data();
    vendorIds.push(doc.id);
    lines.push([
      "VENDOR",
      "id=" + doc.id,
      "name=" + safe(d.title || d.name || d.vendorName),
      "section_id=" + safe(d.section_id),
      "publish=" + safe(d.publish),
      "zoneId=" + safe(d.zoneId),
      "createdAtExists=" + Boolean(d.createdAt)
    ].join(" | "));
  });

  lines.push("");
  lines.push("## Product Queries Per Vendor");

  let totalExact = 0;
  let totalPublish = 0;
  let totalOrderBy = 0;
  let missingCreatedAt = 0;
  let vendorsWithProducts = 0;
  let vendorsWithOrderBy = 0;

  for (const vendorId of vendorIds) {
    const exactSnap = await db.collection("vendor_products").where("vendorID", "==", vendorId).get();
    const publishSnap = await db.collection("vendor_products")
      .where("vendorID", "==", vendorId)
      .where("publish", "==", true)
      .get();

    let orderBySnapSize = 0;
    let orderByError = "";
    try {
      const orderBySnap = await db.collection("vendor_products")
        .where("vendorID", "==", vendorId)
        .where("publish", "==", true)
        .orderBy("createdAt", "asc")
        .get();
      orderBySnapSize = orderBySnap.size;
    } catch (e) {
      orderByError = e.message;
    }

    totalExact += exactSnap.size;
    totalPublish += publishSnap.size;
    totalOrderBy += orderBySnapSize;

    if (exactSnap.size > 0) vendorsWithProducts++;
    if (orderBySnapSize > 0) vendorsWithOrderBy++;

    if (exactSnap.size > 0 || publishSnap.size > 0 || orderBySnapSize > 0) {
      lines.push("");
      lines.push("### Vendor " + vendorId);
      lines.push("PRODUCT_EXACT_VENDORID_COUNT: " + exactSnap.size);
      lines.push("PRODUCT_PUBLISH_TRUE_COUNT: " + publishSnap.size);
      lines.push("PRODUCT_ORDERBY_CREATEDAT_COUNT: " + orderBySnapSize);
      if (orderByError) lines.push("PRODUCT_ORDERBY_ERROR: " + orderByError);
    }

    publishSnap.forEach((doc) => {
      const d = doc.data();
      if (!d.createdAt) missingCreatedAt++;
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
  lines.push("TOTAL_VENDOR_COUNT: " + vendorIds.length);
  lines.push("TOTAL_PRODUCTS_EXACT_VENDORID_COUNT: " + totalExact);
  lines.push("TOTAL_PRODUCTS_PUBLISH_TRUE_COUNT: " + totalPublish);
  lines.push("TOTAL_PRODUCTS_ORDERBY_CREATEDAT_COUNT: " + totalOrderBy);
  lines.push("VENDORS_WITH_PRODUCTS: " + vendorsWithProducts);
  lines.push("VENDORS_WITH_ORDERBY_PRODUCTS: " + vendorsWithOrderBy);
  lines.push("PRODUCTS_MISSING_CREATEDAT: " + missingCreatedAt);

  lines.push("");
  lines.push("## Final Status");
  if (vendorIds.length === 0) {
    lines.push("STATUS: SERVICE_46A_FASHION_NO_VENDOR_FOUND");
  } else if (totalPublish === 0) {
    lines.push("STATUS: SERVICE_46A_FASHION_VENDORS_FOUND_PRODUCTS_MISSING");
  } else if (missingCreatedAt > 0 || totalOrderBy < totalPublish) {
    lines.push("STATUS: SERVICE_46A_FASHION_PRODUCTS_NEED_CREATEDAT_PATCH");
  } else {
    lines.push("STATUS: SERVICE_46A_FASHION_DATA_QUERYABLE_PASS");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.slice(-120).join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_46A_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
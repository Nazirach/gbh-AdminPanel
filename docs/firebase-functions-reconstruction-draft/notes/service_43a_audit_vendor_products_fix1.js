const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccountPath = process.argv[2];
const outPath = process.argv[3];

if (!fs.existsSync(serviceAccountPath)) {
  fs.writeFileSync(outPath, "STATUS: SERVICE_43A_SERVICE_ACCOUNT_NOT_FOUND\r\n" + serviceAccountPath, "utf8");
  console.error("SERVICE_ACCOUNT_NOT_FOUND:", serviceAccountPath);
  process.exitCode = 1;
  return;
}

const serviceAccount = require(serviceAccountPath);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const vendors = [
  "aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh",
  "aceh_clone_6285ddbfd9598_1ZrcQ4ysrrheSVguUkFF",
  "aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1",
];

async function run() {
  const lines = [];
  lines.push("# SERVICE 43A DIRECT FIRESTORE AUDIT RESTAURANT VENDOR_PRODUCTS FIX1");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: READ ONLY.");
  lines.push("");

  let totalExact = 0;
  let totalExactPublishTrue = 0;

  for (const vendorId of vendors) {
    lines.push("");
    lines.push("## Vendor: " + vendorId);

    const exactSnap = await db.collection("vendor_products")
      .where("vendorID", "==", vendorId)
      .get();

    const exactPublishSnap = await db.collection("vendor_products")
      .where("vendorID", "==", vendorId)
      .where("publish", "==", true)
      .get();

    totalExact += exactSnap.size;
    totalExactPublishTrue += exactPublishSnap.size;

    lines.push("EXACT_VENDORID_COUNT: " + exactSnap.size);
    lines.push("EXACT_VENDORID_PUBLISH_TRUE_COUNT: " + exactPublishSnap.size);

    exactSnap.forEach((doc) => {
      const d = doc.data();
      lines.push([
        "DOC",
        "id=" + doc.id,
        "vendorID=" + d.vendorID,
        "name=" + d.name,
        "publish=" + d.publish,
        "takeawayOption=" + d.takeawayOption,
        "section_id=" + d.section_id,
        "categoryID=" + JSON.stringify(d.categoryID),
        "createdAtType=" + (d.createdAt && d.createdAt.constructor ? d.createdAt.constructor.name : typeof d.createdAt),
        "sourceVendorId=" + d.sourceVendorId,
        "sourceProductId=" + d.sourceProductId,
        "demoSeedBatch=" + d.demoSeedBatch
      ].join(" | "));
    });
  }

  lines.push("");
  lines.push("## Loose scan by demoSeedBatch");

  const looseSnap = await db.collection("vendor_products")
    .where("demoSeedBatch", "==", "STEP46D_20260701")
    .get();

  lines.push("LOOSE_DEMO_SEED_BATCH_COUNT: " + looseSnap.size);

  let related = 0;
  looseSnap.forEach((doc) => {
    const d = doc.data();
    const vendorID = String(d.vendorID || "");
    const sourceVendorId = String(d.sourceVendorId || "");
    const id = String(doc.id || "");

    if (vendorID.includes("6285ddbfd9598") || sourceVendorId.length > 0 || id.includes("6285ddbfd9598")) {
      related++;
      lines.push([
        "LOOSE_DOC",
        "id=" + doc.id,
        "vendorID=" + d.vendorID,
        "name=" + d.name,
        "publish=" + d.publish,
        "takeawayOption=" + d.takeawayOption,
        "section_id=" + d.section_id,
        "categoryID=" + JSON.stringify(d.categoryID),
        "createdAtType=" + (d.createdAt && d.createdAt.constructor ? d.createdAt.constructor.name : typeof d.createdAt),
        "sourceVendorId=" + d.sourceVendorId,
        "sourceProductId=" + d.sourceProductId,
        "demoSeedBatch=" + d.demoSeedBatch
      ].join(" | "));
    }
  });

  lines.push("LOOSE_RESTAURANT_RELATED_PRODUCT_COUNT: " + related);
  lines.push("");
  lines.push("## Totals");
  lines.push("TOTAL_EXACT_VENDORID_COUNT: " + totalExact);
  lines.push("TOTAL_EXACT_VENDORID_PUBLISH_TRUE_COUNT: " + totalExactPublishTrue);
  lines.push("");
  lines.push("## Final Status");

  if (totalExactPublishTrue > 0) {
    lines.push("STATUS: SERVICE_43A_RESTAURANT_VENDOR_PRODUCTS_EXIST_QUERYABLE");
  } else if (totalExact > 0) {
    lines.push("STATUS: SERVICE_43A_RESTAURANT_VENDOR_PRODUCTS_EXIST_BUT_NOT_PUBLISH_TRUE");
  } else if (related > 0) {
    lines.push("STATUS: SERVICE_43A_RESTAURANT_PRODUCTS_EXIST_BUT_VENDORID_MISMATCH");
  } else {
    lines.push("STATUS: SERVICE_43A_RESTAURANT_VENDOR_PRODUCTS_MISSING");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.slice(-90).join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_43A_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
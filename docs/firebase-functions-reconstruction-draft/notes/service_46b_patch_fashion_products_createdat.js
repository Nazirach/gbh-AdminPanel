const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");

const serviceAccountPath = process.argv[2];
const outPath = process.argv[3];
const sectionId = process.argv[4];

function safe(v) {
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  return String(v);
}

async function run() {
  const lines = [];
  lines.push("# SERVICE 46B PATCH FASHION PRODUCTS CREATEDAT");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: FIRESTORE DATA PATCH.");
  lines.push("SectionId: " + sectionId);
  lines.push("");

  if (!fs.existsSync(serviceAccountPath)) {
    lines.push("STATUS: SERVICE_46B_SERVICE_ACCOUNT_NOT_FOUND");
    lines.push(serviceAccountPath);
    fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
    process.exitCode = 1;
    return;
  }

  const serviceAccount = require(serviceAccountPath);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const vendorSnap = await db.collection("vendors")
    .where("section_id", "==", sectionId)
    .get();

  lines.push("VENDOR_COUNT: " + vendorSnap.size);

  let foundProducts = 0;
  let publishTrueProducts = 0;
  let patchedProducts = 0;
  let alreadyHadCreatedAt = 0;
  let skippedNotPublish = 0;

  for (const vendorDoc of vendorSnap.docs) {
    const vendorId = vendorDoc.id;
    const vendor = vendorDoc.data();

    lines.push("");
    lines.push("## Vendor " + vendorId + " | " + safe(vendor.title || vendor.name || vendor.vendorName));

    const productSnap = await db.collection("vendor_products")
      .where("vendorID", "==", vendorId)
      .get();

    lines.push("PRODUCT_EXACT_VENDORID_COUNT: " + productSnap.size);
    foundProducts += productSnap.size;

    for (const productDoc of productSnap.docs) {
      const d = productDoc.data();

      if (d.publish !== true) {
        skippedNotPublish++;
        lines.push("SKIP_NOT_PUBLISH_TRUE: " + productDoc.id + " | name=" + safe(d.name) + " | publish=" + safe(d.publish));
        continue;
      }

      publishTrueProducts++;

      if (d.createdAt) {
        alreadyHadCreatedAt++;
        lines.push("SKIP_ALREADY_HAS_CREATEDAT: " + productDoc.id + " | name=" + safe(d.name));
        continue;
      }

      await productDoc.ref.update({
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        step46bCreatedAtPatch: true,
        step46bCreatedAtPatchAt: Timestamp.now(),
      });

      patchedProducts++;
      lines.push([
        "PATCHED",
        "id=" + productDoc.id,
        "name=" + safe(d.name),
        "vendorID=" + safe(d.vendorID),
        "publish=" + safe(d.publish),
        "takeawayOption=" + safe(d.takeawayOption),
        "section_id=" + safe(d.section_id),
        "categoryID=" + safe(d.categoryID)
      ].join(" | "));
    }
  }

  lines.push("");
  lines.push("## Verify after patch");

  let verifyOrderByTotal = 0;
  let verifyPublishTotal = 0;
  let verifyVendorsWithOrderBy = 0;

  for (const vendorDoc of vendorSnap.docs) {
    const vendorId = vendorDoc.id;

    const publishSnap = await db.collection("vendor_products")
      .where("vendorID", "==", vendorId)
      .where("publish", "==", true)
      .get();

    const orderBySnap = await db.collection("vendor_products")
      .where("vendorID", "==", vendorId)
      .where("publish", "==", true)
      .orderBy("createdAt", "asc")
      .get();

    verifyPublishTotal += publishSnap.size;
    verifyOrderByTotal += orderBySnap.size;

    if (orderBySnap.size > 0) {
      verifyVendorsWithOrderBy++;
    }

    if (publishSnap.size > 0 || orderBySnap.size > 0) {
      lines.push("VERIFY vendor=" + vendorId + " publishTrue=" + publishSnap.size + " orderByCreatedAt=" + orderBySnap.size);
    }
  }

  lines.push("");
  lines.push("## Totals");
  lines.push("FOUND_PRODUCTS_TOTAL: " + foundProducts);
  lines.push("PUBLISH_TRUE_PRODUCTS_TOTAL: " + publishTrueProducts);
  lines.push("PATCHED_PRODUCTS_TOTAL: " + patchedProducts);
  lines.push("ALREADY_HAD_CREATEDAT_TOTAL: " + alreadyHadCreatedAt);
  lines.push("SKIPPED_NOT_PUBLISH_TRUE_TOTAL: " + skippedNotPublish);
  lines.push("VERIFY_PUBLISH_TRUE_TOTAL: " + verifyPublishTotal);
  lines.push("VERIFY_ORDERBY_CREATEDAT_TOTAL: " + verifyOrderByTotal);
  lines.push("VERIFY_VENDORS_WITH_ORDERBY: " + verifyVendorsWithOrderBy);

  lines.push("");
  lines.push("## Final Status");

  if (verifyPublishTotal > 0 && verifyOrderByTotal === verifyPublishTotal) {
    lines.push("STATUS: SERVICE_46B_FASHION_CREATEDAT_PATCH_PASS");
  } else if (patchedProducts > 0 && verifyOrderByTotal > 0) {
    lines.push("STATUS: SERVICE_46B_FASHION_CREATEDAT_PATCH_PARTIAL");
  } else {
    lines.push("STATUS: SERVICE_46B_FASHION_CREATEDAT_PATCH_RISK");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.slice(-120).join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_46B_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
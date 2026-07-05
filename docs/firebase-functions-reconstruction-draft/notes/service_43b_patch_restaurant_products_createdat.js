const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");

const serviceAccountPath = process.argv[2];
const outPath = process.argv[3];

if (!fs.existsSync(serviceAccountPath)) {
  fs.writeFileSync(outPath, "STATUS: SERVICE_43B_SERVICE_ACCOUNT_NOT_FOUND\r\n" + serviceAccountPath, "utf8");
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
  lines.push("# SERVICE 43B PATCH RESTAURANT VENDOR_PRODUCTS CREATEDAT");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: FIRESTORE DATA PATCH ONLY.");
  lines.push("");

  let found = 0;
  let patched = 0;
  let alreadyHadCreatedAt = 0;

  for (const vendorId of vendors) {
    lines.push("");
    lines.push("## Vendor: " + vendorId);

    const snap = await db.collection("vendor_products")
      .where("vendorID", "==", vendorId)
      .where("publish", "==", true)
      .get();

    lines.push("FOUND_PUBLISH_TRUE_COUNT: " + snap.size);
    found += snap.size;

    for (const doc of snap.docs) {
      const d = doc.data();

      if (d.createdAt) {
        alreadyHadCreatedAt++;
        lines.push("SKIP_ALREADY_HAS_CREATEDAT: " + doc.id + " | name=" + d.name);
        continue;
      }

      await doc.ref.update({
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        step43bCreatedAtPatch: true,
        step43bCreatedAtPatchAt: Timestamp.now(),
      });

      patched++;
      lines.push([
        "PATCHED",
        "id=" + doc.id,
        "vendorID=" + d.vendorID,
        "name=" + d.name,
        "publish=" + d.publish,
        "takeawayOption=" + d.takeawayOption,
        "section_id=" + d.section_id
      ].join(" | "));
    }
  }

  lines.push("");
  lines.push("## Verify after patch");

  let verifyCount = 0;

  for (const vendorId of vendors) {
    const verifySnap = await db.collection("vendor_products")
      .where("vendorID", "==", vendorId)
      .where("publish", "==", true)
      .orderBy("createdAt", "asc")
      .get();

    verifyCount += verifySnap.size;
    lines.push("VERIFY_ORDERBY_CREATEDAT_COUNT vendor=" + vendorId + ": " + verifySnap.size);

    verifySnap.forEach((doc) => {
      const d = doc.data();
      lines.push([
        "VERIFY_DOC",
        "id=" + doc.id,
        "vendorID=" + d.vendorID,
        "name=" + d.name,
        "publish=" + d.publish,
        "createdAtExists=" + Boolean(d.createdAt)
      ].join(" | "));
    });
  }

  lines.push("");
  lines.push("## Totals");
  lines.push("FOUND_TOTAL: " + found);
  lines.push("PATCHED_TOTAL: " + patched);
  lines.push("ALREADY_HAD_CREATEDAT_TOTAL: " + alreadyHadCreatedAt);
  lines.push("VERIFY_ORDERBY_CREATEDAT_TOTAL: " + verifyCount);
  lines.push("");
  lines.push("## Final Status");

  if (verifyCount >= 7) {
    lines.push("STATUS: SERVICE_43B_RESTAURANT_VENDOR_PRODUCTS_CREATEDAT_PATCH_PASS");
  } else if (patched > 0 && verifyCount > 0) {
    lines.push("STATUS: SERVICE_43B_RESTAURANT_VENDOR_PRODUCTS_CREATEDAT_PATCH_PARTIAL");
  } else {
    lines.push("STATUS: SERVICE_43B_RESTAURANT_VENDOR_PRODUCTS_CREATEDAT_PATCH_RISK");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.slice(-80).join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_43B_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
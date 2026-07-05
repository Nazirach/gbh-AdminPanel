const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");

const serviceAccountPath = process.argv[2];
const outPath = process.argv[3];

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
  lines.push("# SERVICE 51B TARGETED LEGACY TIMESTAMP NORMALIZATION");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: FIRESTORE DATA PATCH.");
  lines.push("");
  lines.push("Safety rule:");
  lines.push("- Do not globally publish inactive vendors.");
  lines.push("- Do not globally activate inactive vendors.");
  lines.push("- Only add missing timestamps to records already active/published.");
  lines.push("");

  if (!fs.existsSync(serviceAccountPath)) {
    lines.push("STATUS: SERVICE_51B_SERVICE_ACCOUNT_NOT_FOUND");
    fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
    process.exitCode = 1;
    return;
  }

  const serviceAccount = require(serviceAccountPath);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  let patchedVendors = 0;
  let patchedProducts = 0;
  let patchedCategories = 0;

  const now = Timestamp.now();

  lines.push("## Vendor timestamp patch");
  lines.push("TEXT_START");
  const vendorsSnap = await db.collection("vendors").get();

  for (const doc of vendorsSnap.docs) {
    const d = doc.data();

    const isSafeActiveVendor = d.publish === true && d.isActive === true;
    if (!isSafeActiveVendor) continue;

    const patch = {};
    if (!d.updatedAt) patch.updatedAt = now;
    if (!d.createdAt) patch.createdAt = now;

    if (Object.keys(patch).length > 0) {
      patch.service51bTimestampPatch = true;
      patch.service51bTimestampPatchAt = now;
      await doc.ref.update(patch);
      patchedVendors++;
      if (patchedVendors <= 80) {
        lines.push("PATCHED_VENDOR | id=" + doc.id + " | title=" + safe(d.title || d.name || d.vendorName) + " | keys=" + Object.keys(patch).join(","));
      }
    }
  }
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Product timestamp patch");
  lines.push("TEXT_START");
  const productsSnap = await db.collection("vendor_products").get();

  for (const doc of productsSnap.docs) {
    const d = doc.data();

    if (d.publish !== true) continue;

    const patch = {};
    if (!d.createdAt) patch.createdAt = now;
    if (!d.updatedAt) patch.updatedAt = now;

    if (Object.keys(patch).length > 0) {
      patch.service51bTimestampPatch = true;
      patch.service51bTimestampPatchAt = now;
      await doc.ref.update(patch);
      patchedProducts++;
      if (patchedProducts <= 120) {
        lines.push("PATCHED_PRODUCT | id=" + doc.id + " | name=" + safe(d.name) + " | vendorID=" + safe(d.vendorID) + " | keys=" + Object.keys(patch).join(","));
      }
    }
  }
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Category timestamp patch");
  lines.push("TEXT_START");
  const categoriesSnap = await db.collection("vendor_categories").get();

  for (const doc of categoriesSnap.docs) {
    const d = doc.data();

    if (d.publish !== true) continue;

    const patch = {};
    if (!d.createdAt) patch.createdAt = now;
    if (!d.updatedAt) patch.updatedAt = now;

    if (Object.keys(patch).length > 0) {
      patch.service51bTimestampPatch = true;
      patch.service51bTimestampPatchAt = now;
      await doc.ref.update(patch);
      patchedCategories++;
      if (patchedCategories <= 80) {
        lines.push("PATCHED_CATEGORY | id=" + doc.id + " | title=" + safe(d.title) + " | section_id=" + safe(d.section_id) + " | keys=" + Object.keys(patch).join(","));
      }
    }
  }
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Totals");
  lines.push("PATCHED_ACTIVE_VENDORS_TIMESTAMP: " + patchedVendors);
  lines.push("PATCHED_PUBLISHED_PRODUCTS_TIMESTAMP: " + patchedProducts);
  lines.push("PATCHED_PUBLISHED_CATEGORIES_TIMESTAMP: " + patchedCategories);

  lines.push("");
  lines.push("## Final Status");
  if (patchedVendors > 0 || patchedProducts > 0 || patchedCategories > 0) {
    lines.push("STATUS: SERVICE_51B_TARGETED_LEGACY_TIMESTAMP_NORMALIZATION_DONE");
  } else {
    lines.push("STATUS: SERVICE_51B_NO_TARGETED_TIMESTAMP_PATCH_NEEDED");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.slice(-160).join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_51B_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
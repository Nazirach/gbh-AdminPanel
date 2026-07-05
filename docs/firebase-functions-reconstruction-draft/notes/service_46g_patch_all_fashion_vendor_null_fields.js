const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp, GeoPoint } = require("firebase-admin/firestore");

const serviceAccountPath = process.argv[2];
const outPath = process.argv[3];
const sectionId = process.argv[4];
const zoneId = process.argv[5];

function safe(v) {
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  if (Array.isArray(v)) return JSON.stringify(v);
  if (typeof v === "object") {
    try { return JSON.stringify(v); } catch (_) { return String(v); }
  }
  return String(v);
}

function isEmpty(v) {
  return v === undefined || v === null || v === "";
}

async function run() {
  const lines = [];
  lines.push("# SERVICE 46G PATCH ALL FASHION VENDOR NULL FIELDS");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: FIRESTORE DATA PATCH.");
  lines.push("SectionId: " + sectionId);
  lines.push("ZoneId fallback: " + zoneId);
  lines.push("");

  if (!fs.existsSync(serviceAccountPath)) {
    lines.push("STATUS: SERVICE_46G_SERVICE_ACCOUNT_NOT_FOUND");
    fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
    process.exitCode = 1;
    return;
  }

  const serviceAccount = require(serviceAccountPath);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection("vendors")
    .where("section_id", "==", sectionId)
    .get();

  lines.push("FASHION_VENDOR_COUNT: " + snap.size);

  let patchedCount = 0;
  let alreadySafeCount = 0;
  let sourceVendorCount = 0;
  let cloneVendorCount = 0;

  for (const doc of snap.docs) {
    const id = doc.id;
    const d = doc.data();

    if (id.startsWith("aceh_clone_" + sectionId + "_")) {
      cloneVendorCount++;
    } else {
      sourceVendorCount++;
    }

    const patch = {};
    const fallbackLat = 5.5483;
    const fallbackLng = 95.3238;

    if (isEmpty(d.zoneId)) patch.zoneId = zoneId;
    if (d.publish !== true) patch.publish = true;
    if (d.isActive !== true) patch.isActive = true;
    if (!d.createdAt) patch.createdAt = Timestamp.now();

    if (typeof d.latitude !== "number") patch.latitude = fallbackLat;
    if (typeof d.longitude !== "number") patch.longitude = fallbackLng;

    if (!d.coordinates) {
      patch.coordinates = new GeoPoint(
        typeof d.latitude === "number" ? d.latitude : fallbackLat,
        typeof d.longitude === "number" ? d.longitude : fallbackLng
      );
    }

    if (!Array.isArray(d.categoryID)) patch.categoryID = [];
    if (!Array.isArray(d.categoryId)) patch.categoryId = [];
    if (!Array.isArray(d.categorys)) patch.categorys = [];
    if (!Array.isArray(d.photos)) patch.photos = [];

    if (isEmpty(d.photo)) patch.photo = "";
    if (isEmpty(d.logo)) patch.logo = "";
    if (isEmpty(d.image)) patch.image = "";

    if (isEmpty(d.title) && !isEmpty(d.name)) patch.title = d.name;
    if (isEmpty(d.name) && !isEmpty(d.title)) patch.name = d.title;
    if (isEmpty(d.vendorName) && !isEmpty(d.title)) patch.vendorName = d.title;

    if (isEmpty(d.description)) patch.description = "";
    if (isEmpty(d.address)) patch.address = "";

    patch.step46gAllFashionVendorNullFieldPatch = true;
    patch.step46gAllFashionVendorNullFieldPatchAt = Timestamp.now();

    if (Object.keys(patch).length > 2) {
      await doc.ref.update(patch);
      patchedCount++;
      lines.push("");
      lines.push("PATCHED_VENDOR: " + id);
      lines.push("TITLE: " + safe(d.title || d.name || d.vendorName));
      lines.push("PATCH_KEYS: " + Object.keys(patch).join(","));
    } else {
      alreadySafeCount++;
    }
  }

  lines.push("");
  lines.push("## Verify after patch");

  const verifySnap = await db.collection("vendors")
    .where("section_id", "==", sectionId)
    .get();

  let verifyRiskCount = 0;
  let verifyVendorCount = 0;

  verifySnap.forEach((doc) => {
    const id = doc.id;
    const d = doc.data();
    verifyVendorCount++;

    const risks = [];
    if (isEmpty(d.zoneId)) risks.push("zoneId_missing");
    if (typeof d.latitude !== "number") risks.push("latitude_not_number");
    if (typeof d.longitude !== "number") risks.push("longitude_not_number");
    if (!d.coordinates) risks.push("coordinates_missing");
    if (!Array.isArray(d.categoryID)) risks.push("categoryID_not_array");
    if (!Array.isArray(d.categoryId)) risks.push("categoryId_not_array");
    if (!Array.isArray(d.categorys)) risks.push("categorys_not_array");
    if (!Array.isArray(d.photos)) risks.push("photos_not_array");
    if (isEmpty(d.title) && isEmpty(d.name) && isEmpty(d.vendorName)) risks.push("title_name_missing");

    if (risks.length > 0) {
      verifyRiskCount++;
      lines.push([
        "VERIFY_RISK_VENDOR",
        "id=" + id,
        "title=" + safe(d.title || d.name || d.vendorName),
        "risks=" + risks.join("|")
      ].join(" | "));
    }
  });

  lines.push("");
  lines.push("## Totals");
  lines.push("SOURCE_VENDOR_COUNT: " + sourceVendorCount);
  lines.push("CLONE_VENDOR_COUNT: " + cloneVendorCount);
  lines.push("PATCHED_VENDOR_COUNT: " + patchedCount);
  lines.push("ALREADY_SAFE_VENDOR_COUNT: " + alreadySafeCount);
  lines.push("VERIFY_VENDOR_COUNT: " + verifyVendorCount);
  lines.push("VERIFY_VENDOR_RISK_COUNT: " + verifyRiskCount);

  lines.push("");
  lines.push("## Final Status");
  if (verifyVendorCount > 0 && verifyRiskCount === 0) {
    lines.push("STATUS: SERVICE_46G_ALL_FASHION_VENDOR_NULL_FIELDS_PATCH_PASS");
  } else if (patchedCount > 0) {
    lines.push("STATUS: SERVICE_46G_ALL_FASHION_VENDOR_NULL_FIELDS_PATCH_PARTIAL");
  } else {
    lines.push("STATUS: SERVICE_46G_ALL_FASHION_VENDOR_NULL_FIELDS_PATCH_RISK");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.slice(-120).join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_46G_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});
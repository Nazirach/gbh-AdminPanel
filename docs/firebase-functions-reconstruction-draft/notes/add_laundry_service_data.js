const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const fs = require("fs");

const credPath = process.argv[2];
const outPath = process.argv[3];

const serviceAccount = require(credPath);

initializeApp({
  credential: cert(serviceAccount),
  projectId: serviceAccount.project_id,
});

const db = getFirestore();

const SECTION_ID = "custom_laundry_service";
const CATEGORY_ID = "custom_laundry_category";

const laundryVendors = [
  {
    id: "custom_laundry_vendor_gota_clean",
    name: "Gota Clean Laundry",
    description: "Laundry kiloan, express, setrika, dan dry cleaning di area Gota Ahmedabad."
  },
  {
    id: "custom_laundry_vendor_fresh_wash",
    name: "Fresh Wash Laundry",
    description: "Layanan cuci pakaian harian, cuci sepatu, dan setrika rapi."
  },
  {
    id: "custom_laundry_vendor_express_care",
    name: "Express Care Laundry",
    description: "Laundry cepat untuk pakaian, bed cover, karpet kecil, dan kebutuhan keluarga."
  }
];

function safeJson(obj) {
  return JSON.stringify(obj, (k, v) => {
    if (v && typeof v.toDate === "function") return v.toDate().toISOString();
    if (v && v.constructor && v.constructor.name === "GeoPoint") return { latitude: v.latitude, longitude: v.longitude };
    return v;
  }, 2);
}

async function getTemplate(collection, filterField = null, filterValue = null) {
  let q = db.collection(collection).limit(20);
  if (filterField) q = db.collection(collection).where(filterField, "==", filterValue).limit(20);

  const snap = await q.get();
  if (snap.empty) return null;

  let first = null;
  snap.forEach(doc => {
    const data = doc.data() || {};
    if (!first) first = { id: doc.id, data };
  });
  return first;
}

async function main() {
  const report = [];
  const batch = db.batch();

  const sectionSnap = await db.collection("sections").doc(SECTION_ID).get();
  if (!sectionSnap.exists) {
    throw new Error(`Section not found: ${SECTION_ID}. Create menu section first.`);
  }

  const categoryTemplate =
    await getTemplate("vendor_categories", "publish", true) ||
    await getTemplate("vendor_categories");

  const vendorTemplate =
    await getTemplate("vendors", "zoneId", "q8OOxNm1zgyVqggkCibX") ||
    await getTemplate("vendors");

  if (!categoryTemplate) throw new Error("No vendor_categories template found.");
  if (!vendorTemplate) throw new Error("No vendors template found.");

  const baseCategory = { ...categoryTemplate.data };
  const categoryPayload = {
    ...baseCategory,
    id: CATEGORY_ID,
    name: "Laundry Service",
    title: "Laundry Service",
    description: "Laundry kiloan, express, dry cleaning, setrika, cuci sepatu, dan cuci karpet.",
    section_id: SECTION_ID,
    sectionId: SECTION_ID,
    publish: true,
    isActive: true,
    updatedAt: FieldValue.serverTimestamp(),
    createdAt: baseCategory.createdAt || FieldValue.serverTimestamp()
  };

  batch.set(db.collection("vendor_categories").doc(CATEGORY_ID), categoryPayload, { merge: true });

  report.push({
    collection: "vendor_categories",
    id: CATEGORY_ID,
    action: "UPSERT",
    name: "Laundry Service",
    section_id: SECTION_ID
  });

  for (const v of laundryVendors) {
    const baseVendor = { ...vendorTemplate.data };

    const vendorPayload = {
      ...baseVendor,
      id: v.id,
      title: v.name,
      name: v.name,
      restaurantName: v.name,
      description: v.description,
      categoryID: CATEGORY_ID,
      categoryId: CATEGORY_ID,
      section_id: SECTION_ID,
      sectionId: SECTION_ID,
      publish: true,
      isActive: true,
      active: true,
      vendorStatus: "approved",
      status: "approved",
      updatedAt: FieldValue.serverTimestamp(),
      createdAt: baseVendor.createdAt || FieldValue.serverTimestamp()
    };

    batch.set(db.collection("vendors").doc(v.id), vendorPayload, { merge: true });

    report.push({
      collection: "vendors",
      id: v.id,
      action: "UPSERT",
      name: v.name,
      categoryID: CATEGORY_ID,
      section_id: SECTION_ID,
      zoneId: vendorPayload.zoneId || null,
      hasGeo: !!vendorPayload.g
    });
  }

  await batch.commit();

  const verify = {};

  const catSnap = await db.collection("vendor_categories").doc(CATEGORY_ID).get();
  verify.category = catSnap.exists ? catSnap.data() : null;

  const vendorSnaps = await db.collection("vendors").where("section_id", "==", SECTION_ID).get();
  verify.vendors = [];
  vendorSnaps.forEach(doc => {
    const d = doc.data() || {};
    verify.vendors.push({
      id: doc.id,
      name: d.name || d.title || d.restaurantName || null,
      categoryID: d.categoryID || d.categoryId || null,
      section_id: d.section_id || null,
      sectionId: d.sectionId || null,
      zoneId: d.zoneId || null,
      publish: d.publish ?? null,
      isActive: d.isActive ?? null,
      hasGeo: !!d.g
    });
  });

  const md = [];
  md.push("# ADD LAUNDRY SERVICE DATA");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("");
  md.push("Mode: controlled Firebase write. Add/update Laundry category/vendors only. No delete.");
  md.push("");
  md.push(`Project: ${serviceAccount.project_id}`);
  md.push(`Section: ${SECTION_ID}`);
  md.push("");
  md.push("## Write Report");
  md.push("```json");
  md.push(safeJson(report));
  md.push("```");
  md.push("");
  md.push("## Verification");
  md.push("```json");
  md.push(safeJson(verify));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: LAUNDRY_SERVICE_DATA_ADDED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: LAUNDRY_SERVICE_DATA_ADDED");
  for (const r of report) {
    console.log(`${r.collection} | ${r.action} | ${r.id} | ${r.name}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: LAUNDRY_SERVICE_DATA_ADD_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
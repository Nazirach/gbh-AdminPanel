const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const fs = require("fs");

const credPath = process.argv[2];
const outPath = process.argv[3];

const serviceAccount = require(credPath);

initializeApp({
  credential: cert(serviceAccount),
  projectId: serviceAccount.project_id,
});

const db = getFirestore();

const sections = [
  "custom_laundry_service",
  "custom_document_service",
  "custom_hotel_homestay",
  "custom_akap_ticket",
  "custom_technician_service",
  "custom_housemaid_art",
  "custom_motor_delivery",
  "custom_emergency_help"
];

function safeJson(obj) {
  return JSON.stringify(obj, (k, v) => {
    if (v && typeof v.toDate === "function") return v.toDate().toISOString();
    if (v && v.constructor && v.constructor.name === "GeoPoint") return { latitude: v.latitude, longitude: v.longitude };
    return v;
  }, 2);
}

async function getWhere(collection, field, value) {
  const snap = await db.collection(collection).where(field, "==", value).get();
  const rows = [];
  snap.forEach(doc => {
    const d = doc.data() || {};
    rows.push({
      id: doc.id,
      name: d.name || d.title || d.serviceName || d.restaurantName || null,
      sectionId: d.sectionId || null,
      section_id: d.section_id || null,
      categoryID: d.categoryID || d.categoryId || null,
      publish: d.publish ?? null,
      isActive: d.isActive ?? null,
      hasGeo: !!d.g,
      hasPhoto: !!(d.photos || d.photo || d.image || d.sectionImage || d.rental_vehicle_icon)
    });
  });
  return rows;
}

async function main() {
  const result = {
    sections: [],
    vendor_categories: [],
    vendors: [],
    parcel_categories: [],
    rental_vehicle_type: [],
    providers_services: []
  };

  for (const id of sections) {
    const s = await db.collection("sections").doc(id).get();
    result.sections.push({
      id,
      exists: s.exists,
      data: s.exists ? {
        name: s.data().name || s.data().title || null,
        serviceTypeFlag: s.data().serviceTypeFlag || null,
        order: s.data().order ?? null,
        isActive: s.data().isActive ?? null,
        active: s.data().active ?? null
      } : null
    });

    result.vendor_categories.push(...await getWhere("vendor_categories", "section_id", id));
    result.vendors.push(...await getWhere("vendors", "section_id", id));
    result.parcel_categories.push(...await getWhere("parcel_categories", "section_id", id));
    result.rental_vehicle_type.push(...await getWhere("rental_vehicle_type", "sectionId", id));
    result.providers_services.push(...await getWhere("providers_services", "sectionId", id));
  }

  const counts = {
    sectionsFound: result.sections.filter(x => x.exists).length,
    vendor_categories: result.vendor_categories.length,
    vendors: result.vendors.length,
    parcel_categories: result.parcel_categories.length,
    rental_vehicle_type: result.rental_vehicle_type.length,
    providers_services: result.providers_services.length
  };

  const md = [];
  md.push("# FINAL AUDIT ALL NEW FACILITIES DATA");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("Mode: read-only. No Firebase write.");
  md.push(`Project: ${serviceAccount.project_id}`);
  md.push("");
  md.push("## Counts");
  md.push("```json");
  md.push(safeJson(counts));
  md.push("```");
  md.push("");
  md.push("## Full Result");
  md.push("```json");
  md.push(safeJson(result));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: FINAL_NEW_FACILITIES_AUDIT_CREATED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: FINAL_NEW_FACILITIES_AUDIT_CREATED");
  console.log("COUNTS:", JSON.stringify(counts));
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: FINAL_NEW_FACILITIES_AUDIT_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
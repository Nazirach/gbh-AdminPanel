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

const MOTOR_SECTION_ID = "custom_motor_delivery";
const EMERGENCY_SECTION_ID = "custom_emergency_help";

const motorCategories = [
  {
    id: "custom_motor_food_delivery",
    name: "Food Delivery",
    description: "Pengantaran makanan dan minuman menggunakan motor."
  },
  {
    id: "custom_motor_small_package",
    name: "Small Package",
    description: "Pengantaran paket kecil, barang ringan, dan kebutuhan harian."
  },
  {
    id: "custom_motor_document_delivery",
    name: "Document Delivery",
    description: "Pengantaran dokumen cepat menggunakan kurir motor."
  },
  {
    id: "custom_motor_shop_delivery",
    name: "Shop Delivery",
    description: "Pengantaran barang dari toko, pasar, dan merchant lokal."
  },
  {
    id: "custom_motor_express_delivery",
    name: "Express Motor Delivery",
    description: "Pengantaran cepat dalam kota menggunakan armada motor."
  }
];

const emergencyServices = [
  {
    id: "custom_emergency_medical_help",
    name: "Medical Help",
    description: "Bantuan darurat kesehatan awal dan pendampingan menuju fasilitas kesehatan."
  },
  {
    id: "custom_emergency_ambulance_call",
    name: "Ambulance Call",
    description: "Permintaan bantuan ambulans atau kendaraan darurat terdekat."
  },
  {
    id: "custom_emergency_roadside_help",
    name: "Roadside Help",
    description: "Bantuan darurat kendaraan mogok, ban bocor, dan kebutuhan jalan raya."
  },
  {
    id: "custom_emergency_family_help",
    name: "Family Emergency",
    description: "Bantuan cepat untuk kebutuhan keluarga mendesak."
  },
  {
    id: "custom_emergency_disaster_help",
    name: "Disaster Help",
    description: "Bantuan awal saat banjir, kebakaran, evakuasi, dan keadaan darurat lingkungan."
  },
  {
    id: "custom_emergency_security_help",
    name: "Security Help",
    description: "Bantuan keamanan awal dan pelaporan keadaan darurat."
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
  if (!snap.empty) {
    let first = null;
    snap.forEach(doc => { if (!first) first = { id: doc.id, data: doc.data() }; });
    return first;
  }

  const fallback = await db.collection(collection).limit(20).get();
  let first = null;
  fallback.forEach(doc => { if (!first) first = { id: doc.id, data: doc.data() }; });
  return first;
}

async function ensureSection(sectionId) {
  const snap = await db.collection("sections").doc(sectionId).get();
  if (!snap.exists) throw new Error(`Section not found: ${sectionId}`);
}

async function main() {
  const report = [];
  const batch = db.batch();

  await ensureSection(MOTOR_SECTION_ID);
  await ensureSection(EMERGENCY_SECTION_ID);

  const parcelTemplate = await getTemplate("parcel_categories", "publish", true);
  const providerTemplate = await getTemplate("providers_services", "publish", true);

  if (!parcelTemplate) throw new Error("No parcel_categories template found.");
  if (!providerTemplate) throw new Error("No providers_services template found.");

  for (let i = 0; i < motorCategories.length; i++) {
    const item = motorCategories[i];
    const base = { ...parcelTemplate.data };

    const payload = {
      ...base,
      id: item.id,
      name: item.name,
      title: item.name,
      description: item.description,
      section_id: MOTOR_SECTION_ID,
      sectionId: MOTOR_SECTION_ID,
      publish: true,
      isActive: true,
      active: true,
      ordering: i + 1,
      updatedAt: FieldValue.serverTimestamp(),
      createdAt: base.createdAt || FieldValue.serverTimestamp()
    };

    batch.set(db.collection("parcel_categories").doc(item.id), payload, { merge: true });

    report.push({
      collection: "parcel_categories",
      id: item.id,
      action: "UPSERT",
      name: item.name,
      sectionId: MOTOR_SECTION_ID,
      publish: true,
      isActive: true
    });
  }

  for (let i = 0; i < emergencyServices.length; i++) {
    const item = emergencyServices[i];
    const base = { ...providerTemplate.data };

    const payload = {
      ...base,
      id: item.id,
      name: item.name,
      title: item.name,
      serviceName: item.name,
      description: item.description,
      sectionId: EMERGENCY_SECTION_ID,
      section_id: EMERGENCY_SECTION_ID,
      publish: true,
      isActive: true,
      active: true,
      price: base.price || "0",
      discountPrice: base.discountPrice || "0",
      duration: base.duration || "30",
      ordering: i + 1,
      updatedAt: FieldValue.serverTimestamp(),
      createdAt: base.createdAt || FieldValue.serverTimestamp()
    };

    batch.set(db.collection("providers_services").doc(item.id), payload, { merge: true });

    report.push({
      collection: "providers_services",
      id: item.id,
      action: "UPSERT",
      name: item.name,
      sectionId: EMERGENCY_SECTION_ID,
      publish: true,
      isActive: true
    });
  }

  await batch.commit();

  const motorVerifySnap = await db.collection("parcel_categories").where("section_id", "==", MOTOR_SECTION_ID).get();
  const emergencyVerifySnap = await db.collection("providers_services").where("sectionId", "==", EMERGENCY_SECTION_ID).get();

  const verify = {
    motorDelivery: [],
    emergencyHelp: []
  };

  motorVerifySnap.forEach(doc => {
    const d = doc.data() || {};
    verify.motorDelivery.push({
      id: doc.id,
      name: d.name || d.title || null,
      section_id: d.section_id || null,
      sectionId: d.sectionId || null,
      publish: d.publish ?? null,
      isActive: d.isActive ?? null
    });
  });

  emergencyVerifySnap.forEach(doc => {
    const d = doc.data() || {};
    verify.emergencyHelp.push({
      id: doc.id,
      name: d.name || d.title || d.serviceName || null,
      sectionId: d.sectionId || null,
      section_id: d.section_id || null,
      publish: d.publish ?? null,
      isActive: d.isActive ?? null,
      price: d.price ?? null,
      hasPhoto: !!(d.photos || d.photo || d.image)
    });
  });

  const md = [];
  md.push("# ADD REMAINING FACILITIES DATA");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("");
  md.push("Mode: controlled Firebase write. Add/update remaining facilities only. No delete.");
  md.push("");
  md.push(`Project: ${serviceAccount.project_id}`);
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
  md.push("STATUS: REMAINING_FACILITIES_DATA_ADDED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: REMAINING_FACILITIES_DATA_ADDED");
  for (const r of report) {
    console.log(`${r.collection} | ${r.action} | ${r.id} | ${r.name}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: REMAINING_FACILITIES_DATA_ADD_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
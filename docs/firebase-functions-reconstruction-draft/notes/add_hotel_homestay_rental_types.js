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

const SECTION_ID = "custom_hotel_homestay";

const hotelTypes = [
  {
    id: "custom_hotel_room",
    name: "Hotel Room",
    description: "Kamar hotel harian untuk perjalanan bisnis, keluarga, dan transit."
  },
  {
    id: "custom_homestay",
    name: "Homestay",
    description: "Penginapan rumahan untuk keluarga, wisata, dan kebutuhan jangka pendek."
  },
  {
    id: "custom_guest_house",
    name: "Guest House",
    description: "Guest house nyaman dengan harga terjangkau."
  },
  {
    id: "custom_family_stay",
    name: "Family Stay",
    description: "Penginapan keluarga dengan kapasitas lebih besar."
  },
  {
    id: "custom_monthly_room",
    name: "Monthly Room",
    description: "Sewa kamar bulanan untuk pekerja, mahasiswa, dan kebutuhan tinggal sementara."
  }
];

function safeJson(obj) {
  return JSON.stringify(obj, (k, v) => {
    if (v && typeof v.toDate === "function") return v.toDate().toISOString();
    if (v && v.constructor && v.constructor.name === "GeoPoint") return { latitude: v.latitude, longitude: v.longitude };
    return v;
  }, 2);
}

async function getTemplate() {
  const snap = await db.collection("rental_vehicle_type").where("isActive", "==", true).limit(10).get();
  if (!snap.empty) {
    let first = null;
    snap.forEach(doc => { if (!first) first = { id: doc.id, data: doc.data() }; });
    return first;
  }

  const fallback = await db.collection("rental_vehicle_type").limit(10).get();
  let first = null;
  fallback.forEach(doc => { if (!first) first = { id: doc.id, data: doc.data() }; });
  return first;
}

async function main() {
  const report = [];
  const batch = db.batch();

  const sectionSnap = await db.collection("sections").doc(SECTION_ID).get();
  if (!sectionSnap.exists) {
    throw new Error(`Section not found: ${SECTION_ID}. Create menu section first.`);
  }

  const template = await getTemplate();
  if (!template) throw new Error("No rental_vehicle_type template found.");

  for (let i = 0; i < hotelTypes.length; i++) {
    const item = hotelTypes[i];
    const base = { ...template.data };

    const payload = {
      ...base,
      id: item.id,
      name: item.name,
      title: item.name,
      description: item.description,
      sectionId: SECTION_ID,
      section_id: SECTION_ID,
      isActive: true,
      active: true,
      publish: true,
      ordering: i + 1,
      updatedAt: FieldValue.serverTimestamp(),
      createdAt: base.createdAt || FieldValue.serverTimestamp()
    };

    batch.set(db.collection("rental_vehicle_type").doc(item.id), payload, { merge: true });

    report.push({
      collection: "rental_vehicle_type",
      id: item.id,
      action: "UPSERT",
      name: item.name,
      sectionId: SECTION_ID,
      isActive: true,
      ordering: i + 1
    });
  }

  await batch.commit();

  const verifySnap = await db.collection("rental_vehicle_type").where("sectionId", "==", SECTION_ID).get();
  const verify = [];
  verifySnap.forEach(doc => {
    const d = doc.data() || {};
    verify.push({
      id: doc.id,
      name: d.name || d.title || null,
      sectionId: d.sectionId || null,
      section_id: d.section_id || null,
      isActive: d.isActive ?? null,
      publish: d.publish ?? null,
      ordering: d.ordering ?? null,
      hasIcon: !!d.rental_vehicle_icon
    });
  });

  const md = [];
  md.push("# ADD HOTEL HOMESTAY RENTAL TYPES");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("");
  md.push("Mode: controlled Firebase write. Add/update hotel/homestay rental types only. No delete.");
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
  md.push("STATUS: HOTEL_HOMESTAY_RENTAL_TYPES_ADDED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: HOTEL_HOMESTAY_RENTAL_TYPES_ADDED");
  for (const r of report) {
    console.log(`${r.collection} | ${r.action} | ${r.id} | ${r.name}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: HOTEL_HOMESTAY_RENTAL_TYPES_ADD_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
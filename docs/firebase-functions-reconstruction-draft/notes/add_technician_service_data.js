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

const SECTION_ID = "custom_technician_service";

const services = [
  {
    id: "custom_technician_ac_service",
    name: "AC Service",
    description: "Service AC, cuci AC, tambah freon, dan pengecekan unit."
  },
  {
    id: "custom_technician_electrical",
    name: "Electrical Repair",
    description: "Perbaikan listrik rumah, stop kontak, MCB, lampu, dan instalasi ringan."
  },
  {
    id: "custom_technician_plumbing",
    name: "Plumbing Service",
    description: "Perbaikan pipa, kran, saluran air, wastafel, dan kamar mandi."
  },
  {
    id: "custom_technician_electronics",
    name: "Electronics Repair",
    description: "Perbaikan perangkat elektronik rumah tangga dan pengecekan kerusakan."
  },
  {
    id: "custom_technician_home_maintenance",
    name: "Home Maintenance",
    description: "Perawatan rumah, perbaikan kecil, pemasangan, dan kebutuhan teknis harian."
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
  const snap = await db.collection("providers_services").where("publish", "==", true).limit(20).get();
  if (!snap.empty) {
    let first = null;
    snap.forEach(doc => { if (!first) first = { id: doc.id, data: doc.data() }; });
    return first;
  }

  const fallback = await db.collection("providers_services").limit(20).get();
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
  if (!template) throw new Error("No providers_services template found.");

  for (let i = 0; i < services.length; i++) {
    const item = services[i];
    const base = { ...template.data };

    const payload = {
      ...base,
      id: item.id,
      name: item.name,
      title: item.name,
      serviceName: item.name,
      description: item.description,

      sectionId: SECTION_ID,
      section_id: SECTION_ID,

      publish: true,
      isActive: true,
      active: true,

      price: base.price || "100",
      discountPrice: base.discountPrice || "0",
      duration: base.duration || "60",

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
      sectionId: SECTION_ID,
      publish: true,
      isActive: true,
      ordering: i + 1
    });
  }

  await batch.commit();

  const verifySnap = await db.collection("providers_services").where("sectionId", "==", SECTION_ID).get();
  const verify = [];
  verifySnap.forEach(doc => {
    const d = doc.data() || {};
    verify.push({
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
  md.push("# ADD TECHNICIAN SERVICE DATA");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("");
  md.push("Mode: controlled Firebase write. Add/update technician on-demand services only. No delete.");
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
  md.push("STATUS: TECHNICIAN_SERVICE_DATA_ADDED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: TECHNICIAN_SERVICE_DATA_ADDED");
  for (const r of report) {
    console.log(`${r.collection} | ${r.action} | ${r.id} | ${r.name}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: TECHNICIAN_SERVICE_DATA_ADD_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
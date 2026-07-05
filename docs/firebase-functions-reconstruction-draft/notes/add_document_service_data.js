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

const SECTION_ID = "custom_document_service";

const documentCategories = [
  {
    id: "custom_document_legal",
    name: "Legal Document",
    description: "Pengiriman dokumen hukum, kontrak, surat kuasa, dan berkas resmi."
  },
  {
    id: "custom_document_office",
    name: "Office Document",
    description: "Pengiriman dokumen kantor, invoice, arsip, dan surat bisnis."
  },
  {
    id: "custom_document_personal",
    name: "Personal Document",
    description: "Pengiriman dokumen pribadi, ijazah, KTP, kartu keluarga, dan surat penting."
  },
  {
    id: "custom_document_express",
    name: "Express Document",
    description: "Layanan dokumen cepat untuk kebutuhan mendesak dalam kota."
  },
  {
    id: "custom_document_bank",
    name: "Bank / Finance Document",
    description: "Pengiriman dokumen bank, pembiayaan, asuransi, dan dokumen keuangan."
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
  const snap = await db.collection("parcel_categories").where("publish", "==", true).limit(10).get();
  if (!snap.empty) {
    let first = null;
    snap.forEach(doc => { if (!first) first = { id: doc.id, data: doc.data() }; });
    return first;
  }

  const fallback = await db.collection("parcel_categories").limit(10).get();
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
  if (!template) throw new Error("No parcel_categories template found.");

  for (const cat of documentCategories) {
    const base = { ...template.data };

    const payload = {
      ...base,
      id: cat.id,
      name: cat.name,
      title: cat.name,
      description: cat.description,
      section_id: SECTION_ID,
      sectionId: SECTION_ID,
      publish: true,
      isActive: true,
      active: true,
      updatedAt: FieldValue.serverTimestamp(),
      createdAt: base.createdAt || FieldValue.serverTimestamp()
    };

    batch.set(db.collection("parcel_categories").doc(cat.id), payload, { merge: true });

    report.push({
      collection: "parcel_categories",
      id: cat.id,
      action: "UPSERT",
      name: cat.name,
      section_id: SECTION_ID,
      publish: true,
      isActive: true
    });
  }

  await batch.commit();

  const verifySnap = await db.collection("parcel_categories").where("section_id", "==", SECTION_ID).get();
  const verify = [];
  verifySnap.forEach(doc => {
    const d = doc.data() || {};
    verify.push({
      id: doc.id,
      name: d.name || d.title || null,
      section_id: d.section_id || null,
      sectionId: d.sectionId || null,
      publish: d.publish ?? null,
      isActive: d.isActive ?? null
    });
  });

  const md = [];
  md.push("# ADD DOCUMENT SERVICE DATA");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("");
  md.push("Mode: controlled Firebase write. Add/update Document parcel categories only. No delete.");
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
  md.push("STATUS: DOCUMENT_SERVICE_DATA_ADDED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: DOCUMENT_SERVICE_DATA_ADDED");
  for (const r of report) {
    console.log(`${r.collection} | ${r.action} | ${r.id} | ${r.name}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: DOCUMENT_SERVICE_DATA_ADD_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
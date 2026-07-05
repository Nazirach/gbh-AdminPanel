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

const targetIds = [
  "custom_laundry_service",
  "custom_document_service",
  "custom_hotel_homestay",
  "custom_akap_ticket",
  "custom_technician_service",
  "custom_housemaid_art",
  "custom_motor_delivery",
  "custom_emergency_help",
];

async function main() {
  const before = [];
  const after = [];
  const writes = [];

  for (const id of targetIds) {
    const ref = db.collection("sections").doc(id);
    const snap = await ref.get();

    if (!snap.exists) {
      before.push({ id, exists: false });
      continue;
    }

    const d = snap.data() || {};
    const activeValue = d.active === true;

    before.push({
      id,
      name: d.name || null,
      active: d.active ?? null,
      isActive: d.isActive ?? null,
      serviceTypeFlag: d.serviceTypeFlag || null,
    });

    await ref.update({
      isActive: activeValue,
      active: activeValue,
      updatedAt: FieldValue.serverTimestamp(),
    });

    writes.push({ id, isActive: activeValue, active: activeValue });

    const snapAfter = await ref.get();
    const a = snapAfter.data() || {};
    after.push({
      id,
      name: a.name || null,
      active: a.active ?? null,
      isActive: a.isActive ?? null,
      serviceTypeFlag: a.serviceTypeFlag || null,
    });
  }

  const activeQuery = await db.collection("sections")
    .where("isActive", "==", true)
    .orderBy("order", "asc")
    .get();

  const activeSectionsForApk = [];
  activeQuery.forEach(doc => {
    const d = doc.data() || {};
    activeSectionsForApk.push({
      id: doc.id,
      name: d.name || null,
      order: d.order ?? null,
      active: d.active ?? null,
      isActive: d.isActive ?? null,
      serviceTypeFlag: d.serviceTypeFlag || null,
    });
  });

  const md = [];
  md.push("# SYNC CUSTOM SECTIONS isActive FROM active");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("Mode: controlled Firebase write. Collection: sections. Target: custom section docs only.");
  md.push(`Project: ${serviceAccount.project_id}`);
  md.push("");
  md.push("## Before");
  md.push("```json");
  md.push(JSON.stringify(before, null, 2));
  md.push("```");
  md.push("");
  md.push("## Writes");
  md.push("```json");
  md.push(JSON.stringify(writes, null, 2));
  md.push("```");
  md.push("");
  md.push("## After");
  md.push("```json");
  md.push(JSON.stringify(after, null, 2));
  md.push("```");
  md.push("");
  md.push("## APK Active Query Result");
  md.push("```json");
  md.push(JSON.stringify(activeSectionsForApk, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: CUSTOM_SECTIONS_ISACTIVE_SYNCED_FROM_ACTIVE");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: CUSTOM_SECTIONS_ISACTIVE_SYNCED_FROM_ACTIVE");
  console.log("APK_ACTIVE_COUNT:", activeSectionsForApk.length);
  for (const s of activeSectionsForApk) {
    console.log(`${s.order} | ${s.isActive} | ${s.active} | ${s.serviceTypeFlag} | ${s.id} | ${s.name}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: CUSTOM_SECTIONS_ISACTIVE_SYNC_ERROR");
  console.log("ERROR:", e.message);
  process.exitCode = 1;
});
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

async function main() {
  const snap = await db.collection("sections")
    .where("isActive", "==", true)
    .orderBy("order", "asc")
    .get();

  const rows = [];
  snap.forEach(doc => {
    const d = doc.data() || {};
    rows.push({
      id: doc.id,
      name: d.name || null,
      order: d.order ?? null,
      isActive: d.isActive ?? null,
      active: d.active ?? null,
      serviceTypeFlag: d.serviceTypeFlag || null,
      sectionImage: d.sectionImage || null,
    });
  });

  const md = [];
  md.push("# APK VISIBLE SECTIONS COUNT");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("Mode: Firebase read only. No write.");
  md.push("");
  md.push("## Count");
  md.push("```text");
  md.push(`APK_VISIBLE_COUNT: ${rows.length}`);
  md.push("```");
  md.push("");
  md.push("## Sections");
  md.push("```json");
  md.push(JSON.stringify(rows, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: APK_VISIBLE_SECTIONS_COUNT_VERIFIED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: APK_VISIBLE_SECTIONS_COUNT_VERIFIED");
  console.log("APK_VISIBLE_COUNT:", rows.length);
  for (const s of rows) {
    console.log(`${s.order} | ${s.id} | ${s.name} | ${s.serviceTypeFlag} | isActive=${s.isActive} active=${s.active}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: APK_VISIBLE_SECTIONS_COUNT_ERROR");
  console.log("ERROR:", e.message);
  process.exitCode = 1;
});
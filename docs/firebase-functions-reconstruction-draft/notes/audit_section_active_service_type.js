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

function cleanDoc(doc) {
  const d = doc.data() || {};
  return {
    id: doc.id,
    name: d.name || d.title || null,
    order: d.order ?? null,
    isActive: d.isActive ?? null,
    active: d.active ?? null,
    serviceTypeFlag: d.serviceTypeFlag ?? null,
    service_type: d.service_type ?? null,
    serviceType: d.serviceType ?? null,
    sectionImage: d.sectionImage ?? null,
    rawKeys: Object.keys(d).sort()
  };
}

async function main() {
  const snap = await db.collection("sections").get();
  const rows = [];
  snap.forEach(doc => rows.push(cleanDoc(doc)));

  rows.sort((a, b) => Number(a.order ?? 9999) - Number(b.order ?? 9999));

  const activeRows = rows.filter(x => x.isActive === true || x.active === true);
  const undefinedTypeRows = rows.filter(x => !x.serviceTypeFlag && !x.service_type && !x.serviceType);

  const md = [];
  md.push("# AUDIT SECTION ACTIVE AND SERVICE TYPE");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("Mode: Firebase read only. No write.");
  md.push(`Project: ${serviceAccount.project_id}`);
  md.push("");
  md.push("## Summary");
  md.push("```json");
  md.push(JSON.stringify({
    totalSections: rows.length,
    activeSections: activeRows.length,
    undefinedServiceType: undefinedTypeRows.length
  }, null, 2));
  md.push("```");
  md.push("");
  md.push("## Ordered Sections");
  md.push("```json");
  md.push(JSON.stringify(rows, null, 2));
  md.push("```");
  md.push("");
  md.push("## Active Sections Only");
  md.push("```json");
  md.push(JSON.stringify(activeRows, null, 2));
  md.push("```");
  md.push("");
  md.push("## Undefined Service Type Sections");
  md.push("```json");
  md.push(JSON.stringify(undefinedTypeRows, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: SECTION_ACTIVE_SERVICE_TYPE_AUDIT_CREATED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: SECTION_ACTIVE_SERVICE_TYPE_AUDIT_CREATED");
  console.log("TOTAL:", rows.length);
  console.log("ACTIVE:", activeRows.length);
  console.log("UNDEFINED_TYPE:", undefinedTypeRows.length);
  console.log("");
  console.log("ORDER | ACTIVE | TYPE | ID | NAME");
  for (const r of rows) {
    const type = r.serviceTypeFlag || r.service_type || r.serviceType || "BELUM_DIARTIKAN";
    const active = r.isActive === true || r.active === true ? "ON" : "OFF";
    console.log(`${r.order ?? "-"} | ${active} | ${type} | ${r.id} | ${r.name}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: SECTION_ACTIVE_SERVICE_TYPE_AUDIT_ERROR");
  console.log("ERROR:", e.message);
  process.exitCode = 1;
});
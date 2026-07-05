const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const fs = require("fs");

const credPath = process.argv[2];
const outPath = process.argv[3];

function safeJson(obj) {
  return JSON.stringify(obj, (k, v) => {
    if (v && typeof v === "object" && v.constructor && v.constructor.name === "GeoPoint") {
      return { latitude: v.latitude, longitude: v.longitude };
    }
    if (v && typeof v === "object" && typeof v.toDate === "function") {
      return v.toDate().toISOString();
    }
    return v;
  }, 2);
}

async function main() {
  const serviceAccount = require(credPath);

  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const db = getFirestore();

  const snap = await db.collection("sections").get();

  const docs = [];
  snap.forEach(doc => {
    const data = doc.data() || {};
    docs.push({
      id: doc.id,
      name: data.name ?? data.title ?? data.sectionName ?? null,
      title: data.title ?? null,
      sectionName: data.sectionName ?? null,
      serviceTypeFlag: data.serviceTypeFlag ?? null,
      active: data.active ?? data.isActive ?? data.enable ?? null,
      order: data.order ?? null,
      image: data.image ?? data.photo ?? data.sectionImage ?? null,
      raw: data,
    });
  });

  docs.sort((a, b) => {
    const ao = typeof a.order === "number" ? a.order : 9999;
    const bo = typeof b.order === "number" ? b.order : 9999;
    return ao - bo;
  });

  const md = [];
  md.push("# AUDIT HOME MENU SECTIONS");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("");
  md.push("Mode: read-only. No Firebase write.");
  md.push("");
  md.push(`Project: ${serviceAccount.project_id}`);
  md.push(`Total sections: ${docs.length}`);
  md.push("");
  md.push("## Sections Summary");
  md.push("```json");
  md.push(safeJson(docs.map(d => ({
    id: d.id,
    name: d.name,
    title: d.title,
    sectionName: d.sectionName,
    serviceTypeFlag: d.serviceTypeFlag,
    active: d.active,
    order: d.order,
    image: d.image,
  }))));
  md.push("```");
  md.push("");
  md.push("## Full Raw Sections");
  md.push("```json");
  md.push(safeJson(docs));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: HOME_MENU_SECTIONS_AUDIT_CREATED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: HOME_MENU_SECTIONS_AUDIT_CREATED");
  console.log("TOTAL:", docs.length);
  for (const d of docs) {
    console.log(`${d.order ?? "-"} | ${d.id} | ${d.name ?? d.title ?? d.sectionName ?? "-"} | ${d.serviceTypeFlag ?? "-"} | active=${d.active}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: HOME_MENU_SECTIONS_AUDIT_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
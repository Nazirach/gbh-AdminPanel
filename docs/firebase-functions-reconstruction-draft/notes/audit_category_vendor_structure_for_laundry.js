const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const fs = require("fs");

const credPath = process.argv[2];
const outPath = process.argv[3];

const serviceAccount = require(credPath);
initializeApp({ credential: cert(serviceAccount), projectId: serviceAccount.project_id });
const db = getFirestore();

function safe(obj) {
  return JSON.stringify(obj, (k, v) => {
    if (v && typeof v.toDate === "function") return v.toDate().toISOString();
    if (v && v.constructor && v.constructor.name === "GeoPoint") return { latitude: v.latitude, longitude: v.longitude };
    return v;
  }, 2);
}

async function sampleCollection(name, limit = 5) {
  const snap = await db.collection(name).limit(limit).get();
  const rows = [];
  snap.forEach(doc => rows.push({ id: doc.id, data: doc.data() }));
  return rows;
}

async function main() {
  const collections = [
    "vendor_categories",
    "vendors",
    "products",
    "sections",
    "parcel_categories",
    "providers_categories",
    "providers_services",
    "providers"
  ];

  const result = {};
  for (const c of collections) {
    result[c] = await sampleCollection(c, 8);
  }

  const md = [];
  md.push("# AUDIT CATEGORY VENDOR STRUCTURE FOR LAUNDRY");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("Mode: read-only. No Firebase write.");
  md.push(`Project: ${serviceAccount.project_id}`);
  md.push("");
  md.push("## Samples");
  md.push("```json");
  md.push(safe(result));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: CATEGORY_VENDOR_STRUCTURE_AUDIT_CREATED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");
  console.log("STATUS: CATEGORY_VENDOR_STRUCTURE_AUDIT_CREATED");
  for (const c of collections) console.log(`${c}: ${result[c].length}`);
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: CATEGORY_VENDOR_STRUCTURE_AUDIT_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
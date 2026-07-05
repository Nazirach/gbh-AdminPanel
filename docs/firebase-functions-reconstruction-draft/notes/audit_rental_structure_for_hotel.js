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

function safeJson(obj) {
  return JSON.stringify(obj, (k, v) => {
    if (v && typeof v.toDate === "function") return v.toDate().toISOString();
    if (v && v.constructor && v.constructor.name === "GeoPoint") return { latitude: v.latitude, longitude: v.longitude };
    return v;
  }, 2);
}

async function sampleCollection(name, limit = 8) {
  const snap = await db.collection(name).limit(limit).get();
  const rows = [];
  snap.forEach(doc => rows.push({ id: doc.id, data: doc.data() }));
  return rows;
}

async function main() {
  const collections = [
    "sections",
    "rental_vehicle_type",
    "rentalVehicleType",
    "rental_packages",
    "rentalPackages",
    "rental_orders",
    "rentalOrders"
  ];

  const result = {};
  for (const c of collections) {
    try {
      result[c] = await sampleCollection(c, 8);
    } catch (e) {
      result[c] = { error: e.message };
    }
  }

  const md = [];
  md.push("# AUDIT RENTAL STRUCTURE FOR HOTEL HOMESTAY");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("Mode: read-only. No Firebase write.");
  md.push(`Project: ${serviceAccount.project_id}`);
  md.push("");
  md.push("## Samples");
  md.push("```json");
  md.push(safeJson(result));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: RENTAL_STRUCTURE_AUDIT_CREATED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: RENTAL_STRUCTURE_AUDIT_CREATED");
  for (const c of collections) {
    const v = result[c];
    console.log(`${c}: ${Array.isArray(v) ? v.length : "ERR"}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: RENTAL_STRUCTURE_AUDIT_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
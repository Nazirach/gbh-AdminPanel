const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

function safe(v) {
  if (v === undefined) return null;
  return v;
}

function typeOfValue(v) {
  if (v === undefined) return "missing";
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  return typeof v;
}

async function main() {
  const credPath = process.argv[2];
  const serviceAccount = require(credPath);

  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const db = getFirestore();

  console.log("STATUS: FIREBASE_ADMIN_INITIALIZED_READ_ONLY");
  console.log("project_id:", serviceAccount.project_id);
  console.log("");

  const snap = await db.collection("services").get();

  console.log("services_total_count:", snap.size);
  console.log("");

  snap.docs.forEach((doc) => {
    const d = doc.data() || {};
    console.log(JSON.stringify({
      id: doc.id,
      name: safe(d.name ?? d.title ?? d.nameEn),
      title: safe(d.title),
      isActive: safe(d.isActive ?? d.active ?? d.publish),
      section_id: safe(d.section_id),
      sectionId: safe(d.sectionId),
      serviceType: safe(d.serviceType),
      serviceTypeFlag: safe(d.serviceTypeFlag),
      category_id: safe(d.category_id ?? d.categoryId),
      provider_id: safe(d.provider_id ?? d.providerId),
      author: safe(d.author),
      price: safe(d.price),
      duration: safe(d.duration),
      image_present: !!(d.image || d.photo || d.serviceImage || d.categoryImage),
      keys: Object.keys(d).sort(),
      fieldTypes: Object.fromEntries(Object.keys(d).sort().map(k => [k, typeOfValue(d[k])]))
    }));
  });

  console.log("");
  console.log("STATUS: SERVICES_COLLECTION_IDENTITY_AUDIT_FINISHED");
}

main().catch((e) => {
  console.log("STATUS: AUDIT_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const credPath = process.argv[2];
const outPath = process.argv[3];

const ONDEMAND_SECTION_ID = "yJTddzJUxP3cOU5DpJ10";

function slim(id, d) {
  d = d || {};
  return {
    id,
    name: d.name ?? null,
    title: d.title ?? null,
    email: d.email ?? null,
    role: d.role ?? null,
    sectionId: d.sectionId ?? null,
    section_id: d.section_id ?? null,
    serviceType: d.serviceType ?? null,
    serviceTypeFlag: d.serviceTypeFlag ?? null,
    flag: d.flag ?? null,
    author: d.author ?? null,
    providerId: d.providerId ?? null,
    publish: d.publish ?? null,
    isActive: d.isActive ?? null,
    order: d.order ?? null,
    price: d.price ?? null,
    duration: d.duration ?? null,
    image_present: !!(d.image || d.photo || d.sectionImage || d.profilePictureURL),
    keys: Object.keys(d).sort()
  };
}

async function main() {
  const serviceAccount = require(credPath);
  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const db = getFirestore();

  const lines = [];
  lines.push("# VERIFY ONDEMAND MIGRATION FIRESTORE CHAIN");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push("");
  lines.push("Mode: read-only. No patch. No Firebase write.");
  lines.push("");

  const sectionSnap = await db.collection("sections").doc(ONDEMAND_SECTION_ID).get();
  const serviceSnap = await db.collection("services")
    .where("flag", "==", "ondemand-service")
    .get();

  const catSnap = await db.collection("provider_categories")
    .where("sectionId", "==", ONDEMAND_SECTION_ID)
    .get();

  const providerSvcSnap = await db.collection("providers_services")
    .where("sectionId", "==", ONDEMAND_SECTION_ID)
    .get();

  const authorIds = new Set();
  providerSvcSnap.docs.forEach(doc => {
    const d = doc.data();
    if (d.author) authorIds.add(d.author);
    if (d.providerId) authorIds.add(d.providerId);
  });

  const usersFound = [];
  for (const id of authorIds) {
    const snap = await db.collection("users").doc(id).get();
    if (snap.exists) usersFound.push(slim(id, snap.data()));
  }

  const workerSnap = await db.collection("providers_workers").limit(50).get();
  const workers = workerSnap.docs
    .map(doc => slim(doc.id, doc.data()))
    .filter(w => w.section_id === ONDEMAND_SECTION_ID || authorIds.has(w.providerId) || authorIds.has(w.author));

  lines.push("## Summary");
  lines.push("```json");
  lines.push(JSON.stringify({
    ondemandSectionExists: sectionSnap.exists,
    ondemandSection: sectionSnap.exists ? slim(sectionSnap.id, sectionSnap.data()) : null,
    servicesFlagOndemandCount: serviceSnap.size,
    providerCategoriesLinked: catSnap.size,
    providerServicesLinked: providerSvcSnap.size,
    providerAuthorsReferenced: authorIds.size,
    providerUsersFound: usersFound.length,
    workersDetectedSample: workers.length,
    safeToActivateCustomer: sectionSnap.exists && catSnap.size > 0 && providerSvcSnap.size > 0 && usersFound.length > 0
  }, null, 2));
  lines.push("```");
  lines.push("");

  lines.push("## On Demand Categories Sample");
  lines.push("```json");
  lines.push(JSON.stringify(catSnap.docs.slice(0, 20).map(doc => slim(doc.id, doc.data())), null, 2));
  lines.push("```");
  lines.push("");

  lines.push("## On Demand Services Sample");
  lines.push("```json");
  lines.push(JSON.stringify(providerSvcSnap.docs.slice(0, 20).map(doc => slim(doc.id, doc.data())), null, 2));
  lines.push("```");
  lines.push("");

  lines.push("## Provider Users Found");
  lines.push("```json");
  lines.push(JSON.stringify(usersFound, null, 2));
  lines.push("```");
  lines.push("");

  lines.push("## Workers Detected Sample");
  lines.push("```json");
  lines.push(JSON.stringify(workers, null, 2));
  lines.push("```");
  lines.push("");

  lines.push("## Final Status");
  lines.push("STATUS: VERIFY_ONDEMAND_MIGRATION_FIRESTORE_CHAIN_FINISHED");

  require("fs").writeFileSync(outPath, lines.join("\n"), "utf8");

  console.log("STATUS: VERIFY_ONDEMAND_MIGRATION_FIRESTORE_CHAIN_FINISHED");
  console.log("ondemandSectionExists:", sectionSnap.exists);
  console.log("servicesFlagOndemandCount:", serviceSnap.size);
  console.log("providerCategoriesLinked:", catSnap.size);
  console.log("providerServicesLinked:", providerSvcSnap.size);
  console.log("providerAuthorsReferenced:", authorIds.size);
  console.log("providerUsersFound:", usersFound.length);
  console.log("workersDetectedSample:", workers.length);
  console.log("safeToActivateCustomer:", sectionSnap.exists && catSnap.size > 0 && providerSvcSnap.size > 0 && usersFound.length > 0);
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: VERIFY_ONDEMAND_MIGRATION_FIRESTORE_CHAIN_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
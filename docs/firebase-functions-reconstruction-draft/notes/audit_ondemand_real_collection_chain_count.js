const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

function shortDoc(doc) {
  const d = doc.data() || {};
  return {
    id: doc.id,
    name: d.name ?? d.title ?? d.firstName ?? d.fullName ?? null,
    title: d.title ?? null,
    publish: d.publish ?? null,
    isActive: d.isActive ?? null,
    role: d.role ?? null,
    section_id: d.section_id ?? null,
    sectionId: d.sectionId ?? null,
    author: d.author ?? null,
    categoryID: d.categoryID ?? d.categoryId ?? d.category_id ?? null,
    parentCategoryId: d.parentCategoryId ?? null,
    price: d.price ?? null,
    duration: d.duration ?? null,
    image_present: !!(d.image || d.photo || d.profilePictureURL || d.serviceImage),
    keys: Object.keys(d).sort()
  };
}

async function countCollection(db, name) {
  const snap = await db.collection(name).limit(20).get();
  console.log("");
  console.log("COLLECTION:", name);
  console.log("count_sample_limit_20:", snap.size);
  snap.docs.forEach(doc => console.log(JSON.stringify(shortDoc(doc))));
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
  console.log("## ONDEMAND MASTER SECTION");
  const sectionSnap = await db.collection("sections")
    .where("serviceTypeFlag", "==", "ondemand-service")
    .get();

  console.log("ondemand_section_count:", sectionSnap.size);
  sectionSnap.docs.forEach(doc => console.log(JSON.stringify(shortDoc(doc))));

  console.log("");
  console.log("## REAL ONDEMAND COLLECTIONS FROM ADMIN CODE");

  for (const name of [
    "provider_categories",
    "providers_services",
    "providers_workers",
    "users",
    "favorite_service",
    "currencies",
    "settings"
  ]) {
    await countCollection(db, name);
  }

  console.log("");
  console.log("## PROVIDERS ONLY");
  const providerSnap = await db.collection("users")
    .where("role", "==", "provider")
    .limit(30)
    .get();

  console.log("users_role_provider_count_sample_limit_30:", providerSnap.size);
  providerSnap.docs.forEach(doc => console.log(JSON.stringify(shortDoc(doc))));

  console.log("");
  console.log("## DATA SAFETY CONCLUSION");
  console.log(JSON.stringify({
    readyToActivateOndemand: false,
    reason: "Need ondemand section + provider_categories + providers_services + provider users/workers before activation",
    recommendedNext: "Create draft migration plan only, then patch inactive master section first"
  }));

  console.log("");
  console.log("STATUS: ONDEMAND_REAL_COLLECTION_CHAIN_COUNT_AUDIT_FINISHED");
}

main().catch((e) => {
  console.log("STATUS: AUDIT_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
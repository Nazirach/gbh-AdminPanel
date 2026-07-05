const fs = require("fs");

async function main() {
  const credPath = process.argv[2];

  let admin;
  try {
    admin = require("firebase-admin");
  } catch (e) {
    console.log("STATUS: FIREBASE_ADMIN_NODE_MODULE_MISSING");
    console.log("ERROR: " + e.message);
    return;
  }

  const serviceAccount = require(credPath);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const db = admin.firestore();

  console.log("STATUS: FIREBASE_ADMIN_INITIALIZED");
  console.log("project_id: " + serviceAccount.project_id);
  console.log("");

  const allSnap = await db.collection("sections").get();
  console.log("sections_total_count: " + allSnap.size);

  const activeSnap = await db
    .collection("sections")
    .where("isActive", "==", true)
    .orderBy("order", "asc")
    .get();

  console.log("sections_active_ordered_count: " + activeSnap.size);
  console.log("");

  console.log("## ALL SECTIONS SUMMARY");
  allSnap.docs.slice(0, 30).forEach((doc, index) => {
    const d = doc.data();
    console.log(JSON.stringify({
      index,
      id: doc.id,
      isActive: d.isActive,
      order: d.order,
      name: d.name,
      sectionName: d.sectionName,
      serviceType: d.serviceType,
      title: d.title,
      sectionImage: d.sectionImage ? "[HAS_VALUE]" : "",
      image: d.image ? "[HAS_VALUE]" : "",
      photo: d.photo ? "[HAS_VALUE]" : "",
      keys: Object.keys(d).sort()
    }));
  });

  console.log("");
  console.log("## ACTIVE ORDERED SECTIONS SUMMARY");
  activeSnap.docs.slice(0, 30).forEach((doc, index) => {
    const d = doc.data();
    console.log(JSON.stringify({
      index,
      id: doc.id,
      isActive: d.isActive,
      order: d.order,
      name: d.name,
      sectionName: d.sectionName,
      serviceType: d.serviceType,
      title: d.title,
      sectionImage: d.sectionImage ? "[HAS_VALUE]" : "",
      image: d.image ? "[HAS_VALUE]" : "",
      photo: d.photo ? "[HAS_VALUE]" : "",
      keys: Object.keys(d).sort()
    }));
  });
}

main().catch((e) => {
  console.log("STATUS: FIRESTORE_READ_ERROR");
  console.log("ERROR_NAME: " + e.name);
  console.log("ERROR_MESSAGE: " + e.message);
  if (e.code) console.log("ERROR_CODE: " + e.code);
  process.exitCode = 1;
});
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const expectedOrders = {
  "Cosmetic": 1,
  "Fashion": 2,
  "Flowers": 3,
  "Restaurants": 4,
  "Cab Service": 5,
  "Food Grocery": 6,
  "Parcel Service": 7,
  "Rental Service": 8,
};

async function main() {
  const credPath = process.argv[2];
  const serviceAccount = require(credPath);

  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const db = getFirestore();

  console.log("STATUS: FIREBASE_ADMIN_MODULAR_INITIALIZED");
  console.log("project_id: " + serviceAccount.project_id);
  console.log("");

  const beforeAll = await db.collection("sections").get();
  console.log("before_sections_total_count: " + beforeAll.size);

  let beforeActive;
  try {
    beforeActive = await db.collection("sections")
      .where("isActive", "==", true)
      .orderBy("order", "asc")
      .get();

    console.log("before_sections_active_ordered_count: " + beforeActive.size);
  } catch (e) {
    console.log("before_sections_active_ordered_count: QUERY_FAILED");
    console.log("before_query_error: " + e.message);
  }

  console.log("");
  console.log("## PATCH PLAN PER DOCUMENT");

  const batch = db.batch();
  let patchCount = 0;
  let skippedCount = 0;
  let unknownCount = 0;

  beforeAll.docs.forEach((doc) => {
    const d = doc.data();
    const name = d.name;
    const targetOrder = expectedOrders[name];

    if (!targetOrder) {
      unknownCount++;
      console.log(JSON.stringify({
        action: "SKIP_UNKNOWN_SECTION_NAME",
        id: doc.id,
        name,
        currentOrder: d.order,
        isActive: d.isActive,
      }));
      return;
    }

    if (d.order === targetOrder) {
      skippedCount++;
      console.log(JSON.stringify({
        action: "SKIP_ALREADY_CORRECT",
        id: doc.id,
        name,
        order: d.order,
        isActive: d.isActive,
      }));
      return;
    }

    patchCount++;
    batch.update(doc.ref, { order: targetOrder });

    console.log(JSON.stringify({
      action: "PATCH_ORDER_ONLY",
      id: doc.id,
      name,
      previousOrder: d.order === undefined ? "undefined" : d.order,
      newOrder: targetOrder,
      isActive: d.isActive,
      serviceType: d.serviceType,
      sectionImage: d.sectionImage ? "[HAS_VALUE]" : "",
    }));
  });

  console.log("");
  console.log("patch_count: " + patchCount);
  console.log("skipped_count: " + skippedCount);
  console.log("unknown_count: " + unknownCount);

  if (patchCount > 0) {
    await batch.commit();
    console.log("STATUS: PATCH_COMMITTED");
  } else {
    console.log("STATUS: NOTHING_TO_PATCH");
  }

  console.log("");
  console.log("## VERIFY AFTER PATCH");

  const afterActive = await db.collection("sections")
    .where("isActive", "==", true)
    .orderBy("order", "asc")
    .get();

  console.log("after_sections_active_ordered_count: " + afterActive.size);

  afterActive.docs.forEach((doc, index) => {
    const d = doc.data();
    console.log(JSON.stringify({
      index,
      id: doc.id,
      name: d.name,
      order: d.order,
      orderType: typeof d.order,
      isActive: d.isActive,
      serviceType: d.serviceType,
      sectionImage: d.sectionImage ? "[HAS_VALUE]" : "",
    }));
  });
}

main().catch((e) => {
  console.log("STATUS: PATCH_ERROR");
  console.log("ERROR_NAME: " + e.name);
  console.log("ERROR_MESSAGE: " + e.message);
  if (e.code) console.log("ERROR_CODE: " + e.code);
  process.exitCode = 1;
});
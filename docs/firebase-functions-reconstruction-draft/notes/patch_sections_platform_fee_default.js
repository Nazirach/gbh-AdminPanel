const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const defaultPlatformFee = {
  fee: "0.0",
  enable: false,
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

  const snap = await db.collection("sections")
    .where("isActive", "==", true)
    .orderBy("order", "asc")
    .get();

  console.log("sections_active_ordered_count_before_platform_fee_patch: " + snap.size);
  console.log("");

  const batch = db.batch();
  let patchCount = 0;
  let skippedCount = 0;

  console.log("## PLATFORM FEE PATCH PLAN PER DOCUMENT");

  snap.docs.forEach((doc) => {
    const d = doc.data();
    const current = d.platformFee;

    const isValidObject =
      current &&
      typeof current === "object" &&
      !Array.isArray(current);

    if (isValidObject) {
      skippedCount++;
      console.log(JSON.stringify({
        action: "SKIP_PLATFORM_FEE_EXISTS",
        id: doc.id,
        name: d.name,
        order: d.order,
        platformFee: current,
      }));
      return;
    }

    patchCount++;
    batch.update(doc.ref, {
      platformFee: defaultPlatformFee,
    });

    console.log(JSON.stringify({
      action: "PATCH_PLATFORM_FEE_DEFAULT_ONLY",
      id: doc.id,
      name: d.name,
      order: d.order,
      previousPlatformFee: current === undefined ? "undefined" : current,
      newPlatformFee: defaultPlatformFee,
      isActive: d.isActive,
      serviceType: d.serviceType,
      sectionImage: d.sectionImage ? "[HAS_VALUE]" : "",
    }));
  });

  console.log("");
  console.log("patch_count: " + patchCount);
  console.log("skipped_count: " + skippedCount);

  if (patchCount > 0) {
    await batch.commit();
    console.log("STATUS: PLATFORM_FEE_PATCH_COMMITTED");
  } else {
    console.log("STATUS: NOTHING_TO_PATCH");
  }

  console.log("");
  console.log("## VERIFY AFTER PATCH");

  const verifySnap = await db.collection("sections")
    .where("isActive", "==", true)
    .orderBy("order", "asc")
    .get();

  console.log("sections_active_ordered_count_after_platform_fee_patch: " + verifySnap.size);

  verifySnap.docs.forEach((doc, index) => {
    const d = doc.data();
    console.log(JSON.stringify({
      index,
      id: doc.id,
      name: d.name,
      order: d.order,
      orderType: typeof d.order,
      isActive: d.isActive,
      serviceType: d.serviceType,
      platformFee: d.platformFee,
      platformFeeType: typeof d.platformFee,
      sectionImage: d.sectionImage ? "[HAS_VALUE]" : "",
    }));
  });
}

main().catch((e) => {
  console.log("STATUS: PLATFORM_FEE_PATCH_ERROR");
  console.log("ERROR_NAME: " + e.name);
  console.log("ERROR_MESSAGE: " + e.message);
  if (e.code) console.log("ERROR_CODE: " + e.code);
  process.exitCode = 1;
});
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, GeoPoint, FieldValue } = require("firebase-admin/firestore");

const credPath = process.argv[2];
const outPath = process.argv[3];
const targetEmail = process.argv[4];
const lat = Number(process.argv[5]);
const lng = Number(process.argv[6]);
const address = process.argv[7];

function slimUser(id, d) {
  d = d || {};
  return {
    id,
    email: d.email || null,
    name: d.fullName || d.name || d.firstName || null,
    role: d.role || null,
    address: d.address || null,
    location: d.location || null,
    coordinates: d.coordinates || null,
    latitude: d.latitude ?? null,
    longitude: d.longitude ?? null,
    zoneId: d.zoneId || null,
    demoLocationMode: d.demoLocationMode || null,
    keys: Object.keys(d).sort()
  };
}

async function findUserByEmail(db, email) {
  const snap = await db.collection("users").where("email", "==", email).limit(5).get();
  if (!snap.empty) return snap.docs[0];

  const snapLower = await db.collection("users").where("email", "==", email.toLowerCase()).limit(5).get();
  if (!snapLower.empty) return snapLower.docs[0];

  return null;
}

async function main() {
  const serviceAccount = require(credPath);

  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const db = getFirestore();

  const report = {
    generatedAt: new Date().toISOString(),
    mode: "controlled_write_patch_test_customer_location_to_demo_india",
    project_id: serviceAccount.project_id,
    targetEmail,
    selectedCoordinate: { lat, lng, address },
    safety: {
      onlyOneUserDocument: true,
      noDelete: true,
      noFullImport: true,
      noDeviceGpsChange: true
    },
    before: null,
    after: null,
    status: null
  };

  const userDoc = await findUserByEmail(db, targetEmail);

  if (!userDoc) {
    report.status = "ABORTED_TARGET_USER_NOT_FOUND";
    require("fs").writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
    console.log("STATUS: ABORTED_TARGET_USER_NOT_FOUND");
    console.log("targetEmail:", targetEmail);
    process.exitCode = 1;
    return;
  }

  const beforeData = userDoc.data() || {};
  report.before = slimUser(userDoc.id, beforeData);

  const patch = {
    address: address,
    location: new GeoPoint(lat, lng),
    coordinates: {
      latitude: lat,
      longitude: lng
    },
    latitude: lat,
    longitude: lng,
    demoLocationMode: true,
    demoLocationCountry: "India",
    demoLocationSource: {
      collection: "providers_workers",
      docId: "1pkVNTOvlxVDKnr7jpkPNAwivv42",
      reason: "Official eMart demo On Demand worker coordinate"
    },
    updatedAt: FieldValue.serverTimestamp()
  };

  await db.collection("users").doc(userDoc.id).update(patch);

  const afterSnap = await db.collection("users").doc(userDoc.id).get();

  report.after = slimUser(afterSnap.id, afterSnap.data());
  report.status = "TEST_CUSTOMER_LOCATION_PATCHED_TO_DEMO_INDIA";

  const md = [];
  md.push("# PATCH TEST CUSTOMER LOCATION TO DEMO INDIA");
  md.push("");
  md.push(`Generated: ${report.generatedAt}`);
  md.push("");
  md.push("Mode: controlled Firebase write. Only target customer user document updated.");
  md.push("");
  md.push("## Summary");
  md.push("```json");
  md.push(JSON.stringify({
    status: report.status,
    targetEmail,
    userDocId: userDoc.id,
    selectedCoordinate: report.selectedCoordinate,
    before: report.before,
    after: report.after
  }, null, 2));
  md.push("```");
  md.push("");
  md.push("## Full Report");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: TEST_CUSTOMER_LOCATION_PATCHED_TO_DEMO_INDIA");

  require("fs").writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: TEST_CUSTOMER_LOCATION_PATCHED_TO_DEMO_INDIA");
  console.log("targetEmail:", targetEmail);
  console.log("userDocId:", userDoc.id);
  console.log("lat:", lat);
  console.log("lng:", lng);
  console.log("address:", address);
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: PATCH_TEST_CUSTOMER_LOCATION_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
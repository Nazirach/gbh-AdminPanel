const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, GeoPoint, FieldValue } = require("firebase-admin/firestore");

const credPath = process.argv[2];
const outPath = process.argv[3];
const targetEmail = process.argv[4];
const lat = Number(process.argv[5]);
const lng = Number(process.argv[6]);
const address = process.argv[7];
const locality = process.argv[8];

function toPlain(value) {
  if (!value) return value;
  if (typeof value.latitude === "number" && typeof value.longitude === "number") {
    return { latitude: value.latitude, longitude: value.longitude };
  }
  if (Array.isArray(value)) return value.map(toPlain);
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = toPlain(v);
    return out;
  }
  return value;
}

async function findUser(db, email) {
  const snap = await db.collection("users").where("email", "==", email).limit(1).get();
  if (!snap.empty) return snap.docs[0];

  const snapLower = await db.collection("users").where("email", "==", email.toLowerCase()).limit(1).get();
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
    mode: "controlled_write_patch_test_customer_shipping_address_to_demo_india",
    project_id: serviceAccount.project_id,
    targetEmail,
    before: null,
    after: null,
    status: null
  };

  const userDoc = await findUser(db, targetEmail);

  if (!userDoc) {
    report.status = "ABORTED_TARGET_USER_NOT_FOUND";
    require("fs").writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
    console.log("STATUS: ABORTED_TARGET_USER_NOT_FOUND");
    process.exitCode = 1;
    return;
  }

  const beforeData = userDoc.data() || {};
  const beforeShipping = Array.isArray(beforeData.shippingAddress) ? beforeData.shippingAddress : [];

  report.before = {
    userDocId: userDoc.id,
    address: beforeData.address ?? null,
    location: toPlain(beforeData.location ?? null),
    coordinates: toPlain(beforeData.coordinates ?? null),
    latitude: beforeData.latitude ?? null,
    longitude: beforeData.longitude ?? null,
    shippingAddress: toPlain(beforeShipping)
  };

  const oldFirst = beforeShipping[0] || {};

  const newFirst = {
    ...oldFirst,
    isDefault: true,
    address: address,
    addressAs: oldFirst.addressAs || "Home",
    locality: locality,
    location: new GeoPoint(lat, lng),
    landmark: oldFirst.landmark || "",
    id: oldFirst.id || "demo-india-default-address"
  };

  const newShipping = [newFirst, ...beforeShipping.slice(1).map((item) => ({
    ...item,
    isDefault: false
  }))];

  await db.collection("users").doc(userDoc.id).update({
    address: address,
    locality: locality,
    location: new GeoPoint(lat, lng),
    coordinates: {
      latitude: lat,
      longitude: lng
    },
    latitude: lat,
    longitude: lng,
    shippingAddress: newShipping,
    demoLocationMode: true,
    demoLocationCountry: "India",
    updatedAt: FieldValue.serverTimestamp()
  });

  const afterSnap = await db.collection("users").doc(userDoc.id).get();
  const afterData = afterSnap.data() || {};

  report.after = {
    userDocId: userDoc.id,
    address: afterData.address ?? null,
    locality: afterData.locality ?? null,
    location: toPlain(afterData.location ?? null),
    coordinates: toPlain(afterData.coordinates ?? null),
    latitude: afterData.latitude ?? null,
    longitude: afterData.longitude ?? null,
    shippingAddress: toPlain(afterData.shippingAddress ?? null)
  };

  report.status = "TEST_CUSTOMER_SHIPPING_ADDRESS_PATCHED_TO_DEMO_INDIA";

  const md = [];
  md.push("# PATCH TEST CUSTOMER SHIPPING ADDRESS TO DEMO INDIA");
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
    beforeFirstShippingAddress: toPlain(beforeShipping[0] || null),
    afterFirstShippingAddress: report.after.shippingAddress ? report.after.shippingAddress[0] : null,
    afterMainLocation: {
      address: report.after.address,
      locality: report.after.locality,
      location: report.after.location,
      coordinates: report.after.coordinates,
      latitude: report.after.latitude,
      longitude: report.after.longitude
    }
  }, null, 2));
  md.push("```");
  md.push("");
  md.push("## Full Report");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: TEST_CUSTOMER_SHIPPING_ADDRESS_PATCHED_TO_DEMO_INDIA");

  require("fs").writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: TEST_CUSTOMER_SHIPPING_ADDRESS_PATCHED_TO_DEMO_INDIA");
  console.log("targetEmail:", targetEmail);
  console.log("userDocId:", userDoc.id);
  console.log("afterAddress:", report.after.address);
  console.log("afterShippingAddress0:", JSON.stringify(report.after.shippingAddress[0]));
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: PATCH_TEST_CUSTOMER_SHIPPING_ADDRESS_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
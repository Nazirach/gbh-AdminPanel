const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const credPath = process.argv[2];
const outPath = process.argv[3];
const targetEmail = process.argv[4];
const demoLat = Number(process.argv[5]);
const demoLng = Number(process.argv[6]);
const demoWorkerId = process.argv[7];
const ondemandSectionId = process.argv[8];

function toPlain(value) {
  if (!value) return value;
  if (typeof value.latitude === "number" && typeof value.longitude === "number") {
    return { latitude: value.latitude, longitude: value.longitude };
  }
  if (typeof value._latitude === "number" && typeof value._longitude === "number") {
    return { latitude: value._latitude, longitude: value._longitude };
  }
  if (Array.isArray(value)) return value.map(toPlain);
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = toPlain(v);
    return out;
  }
  return value;
}

function distanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function pickLatLngFromUser(d) {
  const candidates = [];

  if (typeof d.latitude === "number" && typeof d.longitude === "number") {
    candidates.push({ source: "user.latitude/longitude", lat: d.latitude, lng: d.longitude });
  }

  if (d.location && typeof d.location.latitude === "number" && typeof d.location.longitude === "number") {
    candidates.push({ source: "user.location GeoPoint", lat: d.location.latitude, lng: d.location.longitude });
  }

  if (d.coordinates && typeof d.coordinates.latitude === "number" && typeof d.coordinates.longitude === "number") {
    candidates.push({ source: "user.coordinates", lat: d.coordinates.latitude, lng: d.coordinates.longitude });
  }

  if (Array.isArray(d.shippingAddress)) {
    d.shippingAddress.forEach((a, idx) => {
      if (a && typeof a.latitude === "number" && typeof a.longitude === "number") {
        candidates.push({ source: `shippingAddress[${idx}].latitude/longitude`, lat: a.latitude, lng: a.longitude, address: a.address || null });
      }
      if (a && a.location && typeof a.location.latitude === "number" && typeof a.location.longitude === "number") {
        candidates.push({ source: `shippingAddress[${idx}].location`, lat: a.location.latitude, lng: a.location.longitude, address: a.address || null });
      }
    });
  }

  return candidates;
}

function summarizeUser(id, d) {
  return {
    id,
    email: d.email ?? null,
    name: d.fullName ?? d.name ?? d.firstName ?? null,
    role: d.role ?? null,
    address: d.address ?? null,
    location: toPlain(d.location ?? null),
    coordinates: toPlain(d.coordinates ?? null),
    latitude: d.latitude ?? null,
    longitude: d.longitude ?? null,
    zoneId: d.zoneId ?? null,
    demoLocationMode: d.demoLocationMode ?? null,
    demoLocationCountry: d.demoLocationCountry ?? null,
    shippingAddressType: Array.isArray(d.shippingAddress) ? "array" : typeof d.shippingAddress,
    shippingAddressCount: Array.isArray(d.shippingAddress) ? d.shippingAddress.length : null,
    shippingAddress: toPlain(d.shippingAddress ?? null),
    selectedLatLngCandidates: pickLatLngFromUser(d),
    keys: Object.keys(d).sort()
  };
}

async function findUser(db, email) {
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

  const userDoc = await findUser(db, targetEmail);
  const report = {
    generatedAt: new Date().toISOString(),
    mode: "read_only_verify_test_customer_location_in_firebase",
    project_id: serviceAccount.project_id,
    targetEmail,
    expectedDemoCoordinate: { lat: demoLat, lng: demoLng },
    userFound: !!userDoc,
    user: null,
    demoWorker: null,
    ondemandSection: null,
    nearbyChecks: {},
    likelyIssue: [],
    status: null
  };

  if (!userDoc) {
    report.status = "TARGET_USER_NOT_FOUND";
  } else {
    const userData = userDoc.data() || {};
    report.user = summarizeUser(userDoc.id, userData);

    for (const c of report.user.selectedLatLngCandidates) {
      c.distanceKmToDemo = Number(distanceKm(c.lat, c.lng, demoLat, demoLng).toFixed(4));
    }

    if (!report.user.address) report.likelyIssue.push("user.address is empty");
    if (!report.user.location) report.likelyIssue.push("user.location is empty");
    if (!report.user.coordinates) report.likelyIssue.push("user.coordinates is empty");
    if (!Array.isArray(userData.shippingAddress) || userData.shippingAddress.length === 0) {
      report.likelyIssue.push("shippingAddress is empty or not array; app may read selected address from shippingAddress");
    }

    const closeCandidate = report.user.selectedLatLngCandidates.find(c => c.distanceKmToDemo <= 1);
    if (!closeCandidate) {
      report.likelyIssue.push("No user coordinate candidate is within 1km of demo India coordinate");
    }
  }

  const workerSnap = await db.collection("providers_workers").doc(demoWorkerId).get();
  if (workerSnap.exists) {
    const d = workerSnap.data() || {};
    report.demoWorker = {
      id: workerSnap.id,
      name: d.name ?? d.fullName ?? d.firstName ?? null,
      email: d.email ?? null,
      section_id: d.section_id ?? null,
      providerId: d.providerId ?? null,
      location: toPlain(d.location ?? null),
      coordinates: toPlain(d.coordinates ?? null),
      latitude: d.latitude ?? null,
      longitude: d.longitude ?? null,
      address: d.address ?? null,
      keys: Object.keys(d).sort()
    };
  }

  const sectionSnap = await db.collection("sections").doc(ondemandSectionId).get();
  if (sectionSnap.exists) {
    const d = sectionSnap.data() || {};
    report.ondemandSection = {
      id: sectionSnap.id,
      name: d.name ?? null,
      serviceTypeFlag: d.serviceTypeFlag ?? null,
      isActive: d.isActive ?? null,
      order: d.order ?? null,
      nearByRadius: d.nearByRadius ?? null,
      keys: Object.keys(d).sort()
    };
  }

  report.nearbyChecks = {
    userHasAddress: !!(report.user && report.user.address),
    userHasLocation: !!(report.user && report.user.location),
    userHasCoordinates: !!(report.user && report.user.coordinates),
    userHasShippingAddress: !!(report.user && report.user.shippingAddressCount > 0),
    ondemandActive: !!(report.ondemandSection && report.ondemandSection.isActive === true),
    nearByRadius: report.ondemandSection ? report.ondemandSection.nearByRadius : null
  };

  report.status = report.likelyIssue.length ? "VERIFY_FINISHED_WITH_POSSIBLE_LOCATION_FIELD_ISSUES" : "VERIFY_LOCATION_DATA_LOOKS_OK";

  const md = [];
  md.push("# VERIFY TEST CUSTOMER LOCATION IN FIREBASE");
  md.push("");
  md.push(`Generated: ${report.generatedAt}`);
  md.push("");
  md.push("Mode: read-only. No patch. No Firebase write.");
  md.push("");
  md.push("## Summary");
  md.push("```json");
  md.push(JSON.stringify({
    status: report.status,
    targetEmail: report.targetEmail,
    userFound: report.userFound,
    expectedDemoCoordinate: report.expectedDemoCoordinate,
    nearbyChecks: report.nearbyChecks,
    likelyIssue: report.likelyIssue,
    userCoordinateCandidates: report.user ? report.user.selectedLatLngCandidates : []
  }, null, 2));
  md.push("```");
  md.push("");
  md.push("## User Document");
  md.push("```json");
  md.push(JSON.stringify(report.user, null, 2));
  md.push("```");
  md.push("");
  md.push("## Demo Worker Document");
  md.push("```json");
  md.push(JSON.stringify(report.demoWorker, null, 2));
  md.push("```");
  md.push("");
  md.push("## On Demand Section");
  md.push("```json");
  md.push(JSON.stringify(report.ondemandSection, null, 2));
  md.push("```");
  md.push("");
  md.push("## Full Report");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: " + report.status);

  require("fs").writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS:", report.status);
  console.log("targetEmail:", targetEmail);
  console.log("userFound:", report.userFound);
  if (report.user) {
    console.log("userDocId:", report.user.id);
    console.log("address:", report.user.address);
    console.log("location:", JSON.stringify(report.user.location));
    console.log("coordinates:", JSON.stringify(report.user.coordinates));
    console.log("latitude:", report.user.latitude);
    console.log("longitude:", report.user.longitude);
    console.log("shippingAddressCount:", report.user.shippingAddressCount);
    console.log("coordinateCandidates:", JSON.stringify(report.user.selectedLatLngCandidates));
  }
  console.log("likelyIssue:", JSON.stringify(report.likelyIssue));
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: VERIFY_TEST_CUSTOMER_LOCATION_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
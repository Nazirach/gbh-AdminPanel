const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const credPath = process.argv[2];
const outPath = process.argv[3];
const targetEmail = process.argv[4];

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

function addressSample(id, d) {
  const shippingAddress = Array.isArray(d.shippingAddress) ? d.shippingAddress : [];
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
    shippingAddressType: Array.isArray(d.shippingAddress) ? "array" : typeof d.shippingAddress,
    shippingAddressCount: shippingAddress.length,
    firstShippingAddress: toPlain(shippingAddress[0] ?? null),
    firstShippingAddressKeys: shippingAddress[0] ? Object.keys(shippingAddress[0]).sort() : [],
    userKeys: Object.keys(d).sort()
  };
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
    mode: "read_only_compare_users_shipping_address_structure",
    project_id: serviceAccount.project_id,
    targetEmail,
    targetUser: null,
    usersWithShippingAddress: [],
    usersWithLocationMain: [],
    shippingAddressKeyFrequency: {},
    conclusion: [],
    status: null
  };

  const targetSnap = await db.collection("users").where("email", "==", targetEmail).limit(1).get();
  if (!targetSnap.empty) {
    const doc = targetSnap.docs[0];
    report.targetUser = addressSample(doc.id, doc.data() || {});
  }

  const usersSnap = await db.collection("users").limit(80).get();

  for (const doc of usersSnap.docs) {
    const d = doc.data() || {};
    const sample = addressSample(doc.id, d);

    if (sample.shippingAddressCount > 0) {
      report.usersWithShippingAddress.push(sample);

      for (const key of sample.firstShippingAddressKeys) {
        report.shippingAddressKeyFrequency[key] = (report.shippingAddressKeyFrequency[key] || 0) + 1;
      }
    }

    if (d.location || d.coordinates || typeof d.latitude === "number") {
      report.usersWithLocationMain.push(sample);
    }
  }

  report.usersWithShippingAddress = report.usersWithShippingAddress.slice(0, 20);
  report.usersWithLocationMain = report.usersWithLocationMain.slice(0, 20);

  if (report.targetUser) {
    const t = report.targetUser;
    const sa = t.firstShippingAddress || {};
    const mainLat = t.latitude ?? (t.location ? t.location.latitude : null);
    const shipLat = sa.location ? sa.location.latitude : sa.latitude;

    if (mainLat !== null && shipLat !== undefined && mainLat !== shipLat) {
      report.conclusion.push("Target user main location differs from shippingAddress location.");
    }

    if (t.shippingAddressCount > 0) {
      report.conclusion.push("Target user has shippingAddress; app may prefer this as selected address.");
    }
  }

  report.status = "COMPARE_USERS_SHIPPING_ADDRESS_STRUCTURE_FINISHED";

  const md = [];
  md.push("# COMPARE USERS SHIPPING ADDRESS STRUCTURE");
  md.push("");
  md.push(`Generated: ${report.generatedAt}`);
  md.push("");
  md.push("Mode: read-only. No Firebase write.");
  md.push("");
  md.push("## Summary");
  md.push("```json");
  md.push(JSON.stringify({
    status: report.status,
    targetEmail,
    targetUser: report.targetUser,
    shippingAddressKeyFrequency: report.shippingAddressKeyFrequency,
    conclusion: report.conclusion,
    usersWithShippingAddressCountSampled: report.usersWithShippingAddress.length,
    usersWithLocationMainCountSampled: report.usersWithLocationMain.length
  }, null, 2));
  md.push("```");
  md.push("");
  md.push("## Other Users With Shipping Address Sample");
  md.push("```json");
  md.push(JSON.stringify(report.usersWithShippingAddress, null, 2));
  md.push("```");
  md.push("");
  md.push("## Other Users With Main Location Sample");
  md.push("```json");
  md.push(JSON.stringify(report.usersWithLocationMain, null, 2));
  md.push("```");
  md.push("");
  md.push("## Full Report");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: COMPARE_USERS_SHIPPING_ADDRESS_STRUCTURE_FINISHED");

  require("fs").writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: COMPARE_USERS_SHIPPING_ADDRESS_STRUCTURE_FINISHED");
  console.log("targetEmail:", targetEmail);
  console.log("targetUserFound:", !!report.targetUser);
  if (report.targetUser) {
    console.log("targetShippingAddressCount:", report.targetUser.shippingAddressCount);
    console.log("targetFirstShippingAddress:", JSON.stringify(report.targetUser.firstShippingAddress));
    console.log("targetMainLocation:", JSON.stringify({
      address: report.targetUser.address,
      location: report.targetUser.location,
      coordinates: report.targetUser.coordinates,
      latitude: report.targetUser.latitude,
      longitude: report.targetUser.longitude
    }));
  }
  console.log("shippingAddressKeyFrequency:", JSON.stringify(report.shippingAddressKeyFrequency));
  console.log("conclusion:", JSON.stringify(report.conclusion));
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: COMPARE_USERS_SHIPPING_ADDRESS_STRUCTURE_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
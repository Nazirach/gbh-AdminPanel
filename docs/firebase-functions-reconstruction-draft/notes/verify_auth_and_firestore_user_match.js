const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore } = require("firebase-admin/firestore");
const fs = require("fs");

const credPath = process.argv[2];
const outPath = process.argv[3];
const email = process.argv[4];

function plain(v) {
  if (!v) return v;
  if (typeof v.latitude === "number" && typeof v.longitude === "number") {
    return { latitude: v.latitude, longitude: v.longitude };
  }
  if (Array.isArray(v)) return v.map(plain);
  if (typeof v === "object") {
    const o = {};
    for (const [k, val] of Object.entries(v)) o[k] = plain(val);
    return o;
  }
  return v;
}

async function main() {
  const serviceAccount = require(credPath);
  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const auth = getAuth();
  const db = getFirestore();

  const report = {
    generatedAt: new Date().toISOString(),
    mode: "read_only_verify_auth_and_firestore_user_match",
    project_id: serviceAccount.project_id,
    email,
    authFound: false,
    authUser: null,
    firestoreByEmailCount: 0,
    firestoreByEmail: [],
    firestoreByAuthUidExists: false,
    firestoreByAuthUid: null,
    likelyIssue: [],
    status: null
  };

  try {
    const user = await auth.getUserByEmail(email);
    report.authFound = true;
    report.authUser = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      disabled: user.disabled,
      providerData: user.providerData
    };
  } catch (e) {
    report.authFound = false;
    report.authErrorCode = e.code;
    report.authErrorMessage = e.message;
    report.likelyIssue.push("Firebase Auth user not found for this email.");
  }

  const byEmail = await db.collection("users").where("email", "==", email).get();
  report.firestoreByEmailCount = byEmail.size;

  byEmail.forEach(doc => {
    const d = doc.data() || {};
    report.firestoreByEmail.push({
      docId: doc.id,
      email: d.email ?? null,
      role: d.role ?? null,
      active: d.active ?? null,
      firstName: d.firstName ?? null,
      fullName: d.fullName ?? null,
      phoneNumber: d.phoneNumber ?? null,
      address: d.address ?? null,
      location: plain(d.location ?? null),
      shippingAddressCount: Array.isArray(d.shippingAddress) ? d.shippingAddress.length : null,
      keys: Object.keys(d).sort()
    });
  });

  if (report.authFound) {
    const authUidDoc = await db.collection("users").doc(report.authUser.uid).get();
    report.firestoreByAuthUidExists = authUidDoc.exists;
    if (authUidDoc.exists) {
      const d = authUidDoc.data() || {};
      report.firestoreByAuthUid = {
        docId: authUidDoc.id,
        email: d.email ?? null,
        role: d.role ?? null,
        active: d.active ?? null,
        firstName: d.firstName ?? null,
        fullName: d.fullName ?? null,
        phoneNumber: d.phoneNumber ?? null,
        address: d.address ?? null,
        location: plain(d.location ?? null),
        shippingAddressCount: Array.isArray(d.shippingAddress) ? d.shippingAddress.length : null,
        keys: Object.keys(d).sort()
      };
    } else {
      report.likelyIssue.push("Firebase Auth exists, but users/{auth.uid} document does not exist.");
    }

    if (report.firestoreByEmailCount > 0) {
      const emailDocIds = report.firestoreByEmail.map(x => x.docId);
      if (!emailDocIds.includes(report.authUser.uid)) {
        report.likelyIssue.push("Firestore user document exists by email, but document ID does not match Firebase Auth UID.");
      }
    }
  }

  if (report.firestoreByEmailCount === 0) {
    report.likelyIssue.push("No Firestore users document found for this email.");
  }

  if (report.firestoreByEmail.some(x => x.role && x.role !== "customer")) {
    report.likelyIssue.push("Firestore user role is not customer.");
  }

  if (report.firestoreByEmail.some(x => x.active === false)) {
    report.likelyIssue.push("Firestore user is inactive.");
  }

  report.status = report.likelyIssue.length
    ? "VERIFY_AUTH_FIRESTORE_MATCH_FINISHED_WITH_ISSUES"
    : "VERIFY_AUTH_FIRESTORE_MATCH_OK";

  const md = [];
  md.push("# VERIFY AUTH AND FIRESTORE USER MATCH");
  md.push("");
  md.push(`Generated: ${report.generatedAt}`);
  md.push("");
  md.push("Mode: read-only. No Firebase write.");
  md.push("");
  md.push("## Summary");
  md.push("```json");
  md.push(JSON.stringify({
    status: report.status,
    email: report.email,
    authFound: report.authFound,
    authUid: report.authUser ? report.authUser.uid : null,
    firestoreByEmailCount: report.firestoreByEmailCount,
    firestoreByEmailDocIds: report.firestoreByEmail.map(x => x.docId),
    firestoreByAuthUidExists: report.firestoreByAuthUidExists,
    likelyIssue: report.likelyIssue
  }, null, 2));
  md.push("```");
  md.push("");
  md.push("## Full Report");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: " + report.status);

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS:", report.status);
  console.log("email:", email);
  console.log("authFound:", report.authFound);
  console.log("authUid:", report.authUser ? report.authUser.uid : null);
  console.log("firestoreByEmailCount:", report.firestoreByEmailCount);
  console.log("firestoreByEmailDocIds:", JSON.stringify(report.firestoreByEmail.map(x => x.docId)));
  console.log("firestoreByAuthUidExists:", report.firestoreByAuthUidExists);
  console.log("likelyIssue:", JSON.stringify(report.likelyIssue));
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: VERIFY_AUTH_FIRESTORE_MATCH_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
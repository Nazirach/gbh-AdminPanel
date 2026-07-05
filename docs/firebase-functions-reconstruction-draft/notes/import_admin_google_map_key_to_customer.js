const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const fs = require("fs");
const path = require("path");

const credPath = process.argv[2];
const customerRoot = process.argv[3];
const outPath = process.argv[4];

function maskKey(key) {
  if (!key || key.length < 12) return "<EMPTY_OR_TOO_SHORT>";
  return key.slice(0, 8) + "..." + key.slice(-6);
}

function getNested(obj, paths) {
  for (const p of paths) {
    const parts = p.split(".");
    let cur = obj;
    let ok = true;
    for (const part of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, part)) {
        cur = cur[part];
      } else {
        ok = false;
        break;
      }
    }
    if (ok && typeof cur === "string" && cur.trim()) return cur.trim();
  }
  return "";
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
    mode: "read_firestore_settings_and_patch_customer_local_code",
    project_id: serviceAccount.project_id,
    searchedLocations: [],
    found: false,
    source: null,
    keyMasked: null,
    patchedFiles: [],
    backups: [],
    status: null
  };

  let apiKey = "";
  let source = "";

  const candidateDocs = [
    { collection: "settings", doc: "googleMapKey", fields: ["key", "value", "googleMapKey", "mapAPIKey", "apiKey"] },
    { collection: "settings", doc: "globalSettings", fields: ["googleMapKey.key", "googleMapKey", "mapAPIKey", "apiKey"] },
    { collection: "settings", doc: "appSettings", fields: ["googleMapKey.key", "googleMapKey", "mapAPIKey", "apiKey"] },
    { collection: "settings", doc: "googleMap", fields: ["key", "value", "googleMapKey", "apiKey"] },
    { collection: "settings", doc: "map_settings", fields: ["key", "value", "googleMapKey", "apiKey"] },
  ];

  for (const c of candidateDocs) {
    const ref = db.collection(c.collection).doc(c.doc);
    const snap = await ref.get();
    report.searchedLocations.push(`${c.collection}/${c.doc}`);
    if (!snap.exists) continue;

    const data = snap.data() || {};
    const found = getNested(data, c.fields);
    if (found) {
      apiKey = found;
      source = `${c.collection}/${c.doc}`;
      break;
    }
  }

  if (!apiKey) {
    report.status = "GOOGLE_MAP_KEY_NOT_FOUND_IN_FIRESTORE_SETTINGS";
    fs.writeFileSync(outPath, "# IMPORT ADMIN GOOGLE MAP KEY TO CUSTOMER\n\n```json\n" + JSON.stringify(report, null, 2) + "\n```\n\nSTATUS: " + report.status, "utf8");
    console.log("STATUS:", report.status);
    console.log("Searched:", JSON.stringify(report.searchedLocations));
    process.exitCode = 1;
    return;
  }

  if (apiKey.includes("YOUR_API_KEY") || apiKey.length < 20) {
    report.status = "GOOGLE_MAP_KEY_FOUND_BUT_LOOKS_INVALID";
    report.source = source;
    report.keyMasked = maskKey(apiKey);
    fs.writeFileSync(outPath, "# IMPORT ADMIN GOOGLE MAP KEY TO CUSTOMER\n\n```json\n" + JSON.stringify(report, null, 2) + "\n```\n\nSTATUS: " + report.status, "utf8");
    console.log("STATUS:", report.status);
    console.log("source:", source);
    console.log("keyMasked:", report.keyMasked);
    process.exitCode = 1;
    return;
  }

  const manifest = path.join(customerRoot, "android", "app", "src", "main", "AndroidManifest.xml");
  const constant = path.join(customerRoot, "lib", "constant", "constant.dart");

  const stamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);

  const manifestBackup = manifest + `.bak_12CZ_${stamp}`;
  const constantBackup = constant + `.bak_12CZ_${stamp}`;

  fs.copyFileSync(manifest, manifestBackup);
  fs.copyFileSync(constant, constantBackup);

  let m = fs.readFileSync(manifest, "utf8");
  m = m.replace(/android:value="YOUR_API_KEY_HERE"/g, `android:value="${apiKey}"`);
  m = m.replace(/android:name="com\.google\.android\.geo\.API_KEY"\s*\n\s*android:value="[^"]*"/g, `android:name="com.google.android.geo.API_KEY"\n            android:value="${apiKey}"`);
  fs.writeFileSync(manifest, m, "utf8");

  let c = fs.readFileSync(constant, "utf8");
  c = c.replace(/static\s+String\s+mapAPIKey\s*=\s*"[^"]*"\s*;/g, `static String mapAPIKey = "${apiKey}";`);
  c = c.replace(/static\s+String\s+mapAPIKey\s*=\s*'[^']*'\s*;/g, `static String mapAPIKey = '${apiKey}';`);
  fs.writeFileSync(constant, c, "utf8");

  report.found = true;
  report.source = source;
  report.keyMasked = maskKey(apiKey);
  report.patchedFiles = [manifest, constant];
  report.backups = [manifestBackup, constantBackup];
  report.status = "ADMIN_GOOGLE_MAP_KEY_IMPORTED_TO_CUSTOMER_LOCAL";

  const md = [];
  md.push("# IMPORT ADMIN GOOGLE MAP KEY TO CUSTOMER");
  md.push("");
  md.push(`Generated: ${report.generatedAt}`);
  md.push("");
  md.push("Mode: read Firebase settings + local code patch only. No Firestore write.");
  md.push("");
  md.push("## Summary");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Verification");
  md.push("```text");
  md.push(`Source: ${source}`);
  md.push(`Key masked: ${report.keyMasked}`);
  md.push(`Manifest patched: ${manifest}`);
  md.push(`Constant patched: ${constant}`);
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: " + report.status);

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS:", report.status);
  console.log("source:", source);
  console.log("keyMasked:", report.keyMasked);
  console.log("manifest:", manifest);
  console.log("constant:", constant);
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: IMPORT_ADMIN_GOOGLE_MAP_KEY_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
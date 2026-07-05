const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const fs = require("fs");

const credPath = process.argv[2];
const outPath = process.argv[3];
const email = process.argv[4];
const newPassword = process.argv[5];

async function main() {
  const serviceAccount = require(credPath);

  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const auth = getAuth();

  const before = await auth.getUserByEmail(email);

  await auth.updateUser(before.uid, {
    password: newPassword,
    disabled: false,
  });

  const after = await auth.getUser(before.uid);

  const report = {
    generatedAt: new Date().toISOString(),
    mode: "controlled_firebase_auth_write_reset_test_customer_password",
    project_id: serviceAccount.project_id,
    email,
    uid: before.uid,
    before: {
      email: before.email,
      emailVerified: before.emailVerified,
      disabled: before.disabled,
      providerData: before.providerData,
    },
    after: {
      email: after.email,
      emailVerified: after.emailVerified,
      disabled: after.disabled,
      providerData: after.providerData,
    },
    status: "TEST_CUSTOMER_AUTH_PASSWORD_RESET_OK"
  };

  const md = [];
  md.push("# RESET TEST CUSTOMER AUTH PASSWORD");
  md.push("");
  md.push(`Generated: ${report.generatedAt}`);
  md.push("");
  md.push("Mode: controlled Firebase Auth write. Only target test account password updated.");
  md.push("");
  md.push("## Summary");
  md.push("```json");
  md.push(JSON.stringify({
    status: report.status,
    email: report.email,
    uid: report.uid,
    disabledAfter: report.after.disabled
  }, null, 2));
  md.push("```");
  md.push("");
  md.push("## Full Report");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: TEST_CUSTOMER_AUTH_PASSWORD_RESET_OK");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: TEST_CUSTOMER_AUTH_PASSWORD_RESET_OK");
  console.log("email:", email);
  console.log("uid:", before.uid);
  console.log("disabledAfter:", after.disabled);
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: TEST_CUSTOMER_AUTH_PASSWORD_RESET_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_CODE:", e.code);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
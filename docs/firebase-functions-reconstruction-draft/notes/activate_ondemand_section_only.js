const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const credPath = process.argv[2];
const outPath = process.argv[3];

const ONDEMAND_SECTION_ID = "yJTddzJUxP3cOU5DpJ10";

function slim(id, d) {
  d = d || {};
  return {
    id,
    name: d.name ?? null,
    serviceType: d.serviceType ?? null,
    serviceTypeFlag: d.serviceTypeFlag ?? null,
    isActive: d.isActive ?? null,
    order: d.order ?? null,
    sectionImage_present: !!d.sectionImage,
    platformFee: d.platformFee ?? null,
    adminCommision: d.adminCommision ?? null,
    keys: Object.keys(d).sort()
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
    mode: "controlled_write_activate_ondemand_section_only",
    project_id: serviceAccount.project_id,
    sectionId: ONDEMAND_SECTION_ID,
    safety: {
      onlyUpdatesOneDocument: true,
      noDelete: true,
      noFullImport: true,
      noOtherCollectionsTouched: true
    }
  };

  const sectionRef = db.collection("sections").doc(ONDEMAND_SECTION_ID);
  const beforeSnap = await sectionRef.get();

  if (!beforeSnap.exists) {
    report.status = "ABORTED_SECTION_NOT_FOUND";
    require("fs").writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
    console.log("STATUS: ABORTED_SECTION_NOT_FOUND");
    process.exitCode = 1;
    return;
  }

  const catSnap = await db.collection("provider_categories")
    .where("sectionId", "==", ONDEMAND_SECTION_ID)
    .get();

  const svcSnap = await db.collection("providers_services")
    .where("sectionId", "==", ONDEMAND_SECTION_ID)
    .get();

  report.before = slim(beforeSnap.id, beforeSnap.data());
  report.linkedCountsBeforeActivation = {
    provider_categories: catSnap.size,
    providers_services: svcSnap.size
  };

  if (catSnap.size < 1 || svcSnap.size < 1) {
    report.status = "ABORTED_LINKED_DATA_NOT_READY";
    require("fs").writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
    console.log("STATUS: ABORTED_LINKED_DATA_NOT_READY");
    process.exitCode = 1;
    return;
  }

  await sectionRef.update({
    isActive: true,
    order: 9,
    serviceTypeFlag: "ondemand-service",
    serviceType: "On Demand Service",
    updatedAt: FieldValue.serverTimestamp()
  });

  const afterSnap = await sectionRef.get();

  const activeSectionsSnap = await db.collection("sections")
    .where("isActive", "==", true)
    .orderBy("order", "asc")
    .get();

  report.after = slim(afterSnap.id, afterSnap.data());
  report.activeSectionsAfter = activeSectionsSnap.docs.map(doc => {
    const d = doc.data();
    return {
      id: doc.id,
      name: d.name ?? null,
      order: d.order ?? null,
      serviceTypeFlag: d.serviceTypeFlag ?? null,
      isActive: d.isActive ?? null
    };
  });

  report.status = "ONDEMAND_SECTION_ACTIVATED";

  const md = [];
  md.push("# ACTIVATE ONDEMAND SECTION ONLY REPORT");
  md.push("");
  md.push(`Generated: ${report.generatedAt}`);
  md.push("");
  md.push("Mode: controlled Firebase write. Only On Demand section activation.");
  md.push("");
  md.push("## Summary");
  md.push("```json");
  md.push(JSON.stringify({
    status: report.status,
    before: report.before,
    after: report.after,
    linkedCountsBeforeActivation: report.linkedCountsBeforeActivation,
    activeSectionsAfterCount: report.activeSectionsAfter.length
  }, null, 2));
  md.push("```");
  md.push("");
  md.push("## Active Sections After");
  md.push("```json");
  md.push(JSON.stringify(report.activeSectionsAfter, null, 2));
  md.push("```");
  md.push("");
  md.push("## Full Report");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: ONDEMAND_SECTION_ACTIVATED");

  require("fs").writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: ONDEMAND_SECTION_ACTIVATED");
  console.log("before_isActive:", report.before.isActive);
  console.log("after_isActive:", report.after.isActive);
  console.log("activeSectionsAfterCount:", report.activeSectionsAfter.length);
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: ACTIVATE_ONDEMAND_SECTION_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
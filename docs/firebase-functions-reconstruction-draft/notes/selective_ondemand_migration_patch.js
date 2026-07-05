const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const collectionsPath = process.argv[2];
const credPath = process.argv[3];
const outPath = process.argv[4];

const ONDEMAND_SECTION_ID = "yJTddzJUxP3cOU5DpJ10";

function clone(obj) {
  return JSON.parse(JSON.stringify(obj || {}));
}

function getDataRoot(raw) {
  if (raw.__collections__) return raw.__collections__;
  if (raw.collections) return raw.collections;
  return raw;
}

function entries(obj) {
  if (!obj || typeof obj !== "object") return [];
  return Object.entries(obj);
}

function hasOnDemandText(d) {
  return JSON.stringify(d || {}).toLowerCase().includes("ondemand-service") ||
         JSON.stringify(d || {}).toLowerCase().includes("on demand service");
}

function linkedBySection(d, sectionId) {
  return d && (d.sectionId === sectionId || d.section_id === sectionId);
}

function summarizeDoc(id, d) {
  d = d || {};
  return {
    id,
    name: d.name ?? null,
    title: d.title ?? null,
    flag: d.flag ?? null,
    serviceType: d.serviceType ?? null,
    serviceTypeFlag: d.serviceTypeFlag ?? null,
    sectionId: d.sectionId ?? null,
    section_id: d.section_id ?? null,
    author: d.author ?? null,
    providerId: d.providerId ?? null,
    publish: d.publish ?? null,
    isActive: d.isActive ?? null,
    order: d.order ?? null,
    keys: Object.keys(d).sort()
  };
}

function cleanForFirestore(obj) {
  const out = clone(obj);

  // Keep original demo image URLs for now. Images may point to old bucket; fixed later.
  // Force On Demand section inactive during migration.
  if (out.serviceTypeFlag === "ondemand-service" || out.serviceType === "On Demand Service") {
    if (out.id === ONDEMAND_SECTION_ID || out.name === "Home/On Demand Service") {
      out.isActive = false;
    }
  }

  out.updatedAt = FieldValue.serverTimestamp();

  return out;
}

async function backupExisting(db, targets) {
  const backup = {};
  for (const [collection, docs] of Object.entries(targets)) {
    backup[collection] = {};
    for (const [id] of docs) {
      const snap = await db.collection(collection).doc(id).get();
      if (snap.exists) {
        backup[collection][id] = snap.data();
      }
    }
  }
  return backup;
}

async function safeCreateIfMissing(db, collection, id, data, report) {
  const ref = db.collection(collection).doc(id);
  const snap = await ref.get();

  if (snap.exists) {
    report.skippedExisting.push({
      collection,
      id,
      reason: "document_exists_not_overwritten",
      existing: summarizeDoc(id, snap.data())
    });
    return;
  }

  await ref.set(cleanForFirestore({ ...data, id }));
  report.created.push({
    collection,
    id,
    summary: summarizeDoc(id, data)
  });
}

async function main() {
  const officialRaw = JSON.parse(fs.readFileSync(collectionsPath, "utf8"));
  const official = getDataRoot(officialRaw);

  const serviceAccount = require(credPath);
  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const db = getFirestore();

  const report = {
    generatedAt: new Date().toISOString(),
    mode: "controlled_write_selective_ondemand_only",
    project_id: serviceAccount.project_id,
    safety: {
      noDelete: true,
      noFullImport: true,
      noOverwriteExistingDocs: true,
      forcedOndemandSectionInactive: true
    },
    officialSource: collectionsPath,
    ondemandSectionId: ONDEMAND_SECTION_ID,
    selectedCounts: {},
    created: [],
    skippedExisting: [],
    missingOfficialDependencies: [],
    backupExistingBeforePatch: {}
  };

  const services = official.services || {};
  const sections = official.sections || {};
  const providerCategories = official.provider_categories || {};
  const providerServices = official.providers_services || {};
  const providerWorkers = official.providers_workers || {};
  const users = official.users || {};

  const targetServices = entries(services).filter(([id, d]) => hasOnDemandText(d));
  const targetSections = entries(sections).filter(([id, d]) => id === ONDEMAND_SECTION_ID || hasOnDemandText(d));
  const targetCategories = entries(providerCategories).filter(([id, d]) => linkedBySection(d, ONDEMAND_SECTION_ID));
  const targetProviderServices = entries(providerServices).filter(([id, d]) => linkedBySection(d, ONDEMAND_SECTION_ID));

  const providerIds = new Set();
  for (const [id, d] of targetProviderServices) {
    if (d.author) providerIds.add(d.author);
    if (d.providerId) providerIds.add(d.providerId);
    if (d.provider_id) providerIds.add(d.provider_id);
  }

  const targetUsers = entries(users).filter(([id, d]) => {
    return providerIds.has(id) || providerIds.has(d.id);
  });

  const targetWorkers = entries(providerWorkers).filter(([id, d]) => {
    return linkedBySection(d, ONDEMAND_SECTION_ID) ||
           providerIds.has(d.providerId) ||
           providerIds.has(d.provider_id) ||
           providerIds.has(d.author);
  });

  const targets = {
    services: targetServices,
    sections: targetSections,
    provider_categories: targetCategories,
    providers_services: targetProviderServices,
    users: targetUsers,
    providers_workers: targetWorkers
  };

  for (const [k, v] of Object.entries(targets)) {
    report.selectedCounts[k] = v.length;
  }

  if (targetServices.length === 0) report.missingOfficialDependencies.push("official services On Demand not found");
  if (targetSections.length === 0) report.missingOfficialDependencies.push("official sections On Demand not found");
  if (targetCategories.length === 0) report.missingOfficialDependencies.push("official provider_categories for On Demand not found");
  if (targetProviderServices.length === 0) report.missingOfficialDependencies.push("official providers_services for On Demand not found");

  if (report.missingOfficialDependencies.length > 0) {
    fs.writeFileSync(outPath, [
      "# SELECTIVE ONDEMAND MIGRATION PATCH REPORT",
      "",
      "STATUS: ABORTED_MISSING_OFFICIAL_DEPENDENCIES",
      "",
      "```json",
      JSON.stringify(report, null, 2),
      "```"
    ].join("\n"), "utf8");

    console.log("STATUS: ABORTED_MISSING_OFFICIAL_DEPENDENCIES");
    console.log(JSON.stringify(report.missingOfficialDependencies));
    process.exitCode = 1;
    return;
  }

  report.backupExistingBeforePatch = await backupExisting(db, targets);

  // Write order matters.
  for (const [id, d] of targetServices) {
    await safeCreateIfMissing(db, "services", id, d, report);
  }

  for (const [id, d] of targetSections) {
    const patched = clone(d);
    patched.isActive = false;
    patched.order = patched.order ?? 9;
    patched.serviceTypeFlag = "ondemand-service";
    patched.serviceType = "On Demand Service";
    patched.platformFee = patched.platformFee || { enable: false, fee: "0.0" };
    patched.adminCommision = patched.adminCommision || { enable: false, type: "fix", commission: "0" };
    await safeCreateIfMissing(db, "sections", id, patched, report);
  }

  for (const [id, d] of targetCategories) {
    await safeCreateIfMissing(db, "provider_categories", id, d, report);
  }

  for (const [id, d] of targetUsers) {
    await safeCreateIfMissing(db, "users", id, d, report);
  }

  for (const [id, d] of targetWorkers) {
    await safeCreateIfMissing(db, "providers_workers", id, d, report);
  }

  for (const [id, d] of targetProviderServices) {
    await safeCreateIfMissing(db, "providers_services", id, d, report);
  }

  // Verification after patch.
  const verify = {};
  for (const col of ["services", "sections", "provider_categories", "providers_services", "providers_workers", "users"]) {
    verify[col] = {};
  }

  const sectionSnap = await db.collection("sections").doc(ONDEMAND_SECTION_ID).get();
  verify.sections[ONDEMAND_SECTION_ID] = sectionSnap.exists ? summarizeDoc(ONDEMAND_SECTION_ID, sectionSnap.data()) : null;

  const catSnap = await db.collection("provider_categories").where("sectionId", "==", ONDEMAND_SECTION_ID).get();
  const svcSnap = await db.collection("providers_services").where("sectionId", "==", ONDEMAND_SECTION_ID).get();

  verify.provider_categories.count_linked_to_ondemand = catSnap.size;
  verify.providers_services.count_linked_to_ondemand = svcSnap.size;

  report.verifyAfterPatch = verify;

  const md = [];
  md.push("# SELECTIVE ONDEMAND MIGRATION PATCH REPORT");
  md.push("");
  md.push(`Generated: ${report.generatedAt}`);
  md.push("");
  md.push("Mode: controlled Firebase write. No delete. No full import. No overwrite existing docs.");
  md.push("");
  md.push("## Summary");
  md.push("```json");
  md.push(JSON.stringify({
    selectedCounts: report.selectedCounts,
    createdCount: report.created.length,
    skippedExistingCount: report.skippedExisting.length,
    ondemandSectionVerify: report.verifyAfterPatch.sections[ONDEMAND_SECTION_ID],
    providerCategoriesLinkedAfter: report.verifyAfterPatch.provider_categories.count_linked_to_ondemand,
    providerServicesLinkedAfter: report.verifyAfterPatch.providers_services.count_linked_to_ondemand
  }, null, 2));
  md.push("```");
  md.push("");
  md.push("## Full Report");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: SELECTIVE_ONDEMAND_MIGRATION_PATCH_FINISHED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: SELECTIVE_ONDEMAND_MIGRATION_PATCH_FINISHED");
  console.log("created:", report.created.length);
  console.log("skippedExisting:", report.skippedExisting.length);
  console.log("provider_categories_linked_after:", verify.provider_categories.count_linked_to_ondemand);
  console.log("providers_services_linked_after:", verify.providers_services.count_linked_to_ondemand);
  console.log("ondemand_section_isActive:", verify.sections[ONDEMAND_SECTION_ID] ? verify.sections[ONDEMAND_SECTION_ID].isActive : null);
  console.log("OUT:", outPath);
}

main().catch((e) => {
  console.log("STATUS: SELECTIVE_ONDEMAND_MIGRATION_PATCH_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const collectionsPath = process.argv[2];
const credPath = process.argv[3];
const outPath = process.argv[4];

const ONDEMAND_SECTION_ID = "yJTddzJUxP3cOU5DpJ10";

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

function stripReservedAndUndefined(value) {
  if (value === undefined) return undefined;
  if (value === null) return null;

  if (Array.isArray(value)) {
    return value
      .map(stripReservedAndUndefined)
      .filter(v => v !== undefined);
  }

  if (typeof value === "object") {
    // Firestore admin sentinels must pass through
    if (value && value.constructor && value.constructor.name && value.constructor.name.includes("FieldValue")) {
      return value;
    }

    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (k === "__collections__") continue;
      if (k.startsWith("__")) continue;

      const cleaned = stripReservedAndUndefined(v);
      if (cleaned !== undefined) {
        out[k] = cleaned;
      }
    }
    return out;
  }

  return value;
}

function cloneClean(obj) {
  return stripReservedAndUndefined(JSON.parse(JSON.stringify(obj || {})));
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
  const out = cloneClean(obj);

  if (out.id === ONDEMAND_SECTION_ID || out.serviceTypeFlag === "ondemand-service" || out.serviceType === "On Demand Service") {
    if (out.id === ONDEMAND_SECTION_ID || out.name === "Home/On Demand Service") {
      out.isActive = false;
      out.order = out.order ?? 9;
      out.serviceTypeFlag = "ondemand-service";
      out.serviceType = "On Demand Service";
      out.platformFee = out.platformFee || { enable: false, fee: "0.0" };
      out.adminCommision = out.adminCommision || { enable: false, type: "fix", commission: "0" };
    }
  }

  out.updatedAt = FieldValue.serverTimestamp();
  return out;
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

  const cleaned = cleanForFirestore({ ...data, id });
  await ref.set(cleaned);

  report.created.push({
    collection,
    id,
    summary: summarizeDoc(id, cleaned)
  });
}

async function countLinked(db) {
  const sectionSnap = await db.collection("sections").doc(ONDEMAND_SECTION_ID).get();

  const catSnap = await db.collection("provider_categories")
    .where("sectionId", "==", ONDEMAND_SECTION_ID)
    .get();

  const svcSnap = await db.collection("providers_services")
    .where("sectionId", "==", ONDEMAND_SECTION_ID)
    .get();

  const workerSnap = await db.collection("providers_workers")
    .where("section_id", "==", ONDEMAND_SECTION_ID)
    .get()
    .catch(() => ({ size: "query_error" }));

  return {
    ondemandSection: sectionSnap.exists ? summarizeDoc(ONDEMAND_SECTION_ID, sectionSnap.data()) : null,
    provider_categories_linked: catSnap.size,
    providers_services_linked: svcSnap.size,
    providers_workers_section_id_linked: workerSnap.size
  };
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

  const targetUsers = entries(users).filter(([id, d]) => providerIds.has(id) || providerIds.has(d.id));

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
    users: targetUsers,
    providers_workers: targetWorkers,
    providers_services: targetProviderServices
  };

  const report = {
    generatedAt: new Date().toISOString(),
    mode: "controlled_write_retry_strip_reserved_keys",
    project_id: serviceAccount.project_id,
    safety: {
      noDelete: true,
      noFullImport: true,
      noOverwriteExistingDocs: true,
      stripReservedDoubleUnderscoreFields: true,
      forcedOndemandSectionInactive: true
    },
    officialSource: collectionsPath,
    ondemandSectionId: ONDEMAND_SECTION_ID,
    selectedCounts: Object.fromEntries(Object.entries(targets).map(([k, v]) => [k, v.length])),
    beforePatch: await countLinked(db),
    created: [],
    skippedExisting: [],
    errors: []
  };

  try {
    for (const [id, d] of targetServices) await safeCreateIfMissing(db, "services", id, d, report);
    for (const [id, d] of targetSections) await safeCreateIfMissing(db, "sections", id, d, report);
    for (const [id, d] of targetCategories) await safeCreateIfMissing(db, "provider_categories", id, d, report);
    for (const [id, d] of targetUsers) await safeCreateIfMissing(db, "users", id, d, report);
    for (const [id, d] of targetWorkers) await safeCreateIfMissing(db, "providers_workers", id, d, report);
    for (const [id, d] of targetProviderServices) await safeCreateIfMissing(db, "providers_services", id, d, report);
  } catch (e) {
    report.errors.push({
      name: e.name,
      message: e.message,
      stack: e.stack
    });
  }

  report.afterPatch = await countLinked(db);

  const md = [];
  md.push("# SELECTIVE ONDEMAND MIGRATION RETRY STRIP RESERVED REPORT");
  md.push("");
  md.push(`Generated: ${report.generatedAt}`);
  md.push("");
  md.push("Mode: controlled Firebase write. No delete. No full import. No overwrite existing docs. Strip reserved keys.");
  md.push("");
  md.push("## Summary");
  md.push("```json");
  md.push(JSON.stringify({
    selectedCounts: report.selectedCounts,
    createdCount: report.created.length,
    skippedExistingCount: report.skippedExisting.length,
    errorCount: report.errors.length,
    beforePatch: report.beforePatch,
    afterPatch: report.afterPatch
  }, null, 2));
  md.push("```");
  md.push("");
  md.push("## Full Report");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push(report.errors.length ? "STATUS: SELECTIVE_ONDEMAND_MIGRATION_RETRY_FINISHED_WITH_ERRORS" : "STATUS: SELECTIVE_ONDEMAND_MIGRATION_RETRY_FINISHED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log(report.errors.length ? "STATUS: SELECTIVE_ONDEMAND_MIGRATION_RETRY_FINISHED_WITH_ERRORS" : "STATUS: SELECTIVE_ONDEMAND_MIGRATION_RETRY_FINISHED");
  console.log("selectedCounts:", JSON.stringify(report.selectedCounts));
  console.log("created:", report.created.length);
  console.log("skippedExisting:", report.skippedExisting.length);
  console.log("errors:", report.errors.length);
  console.log("after_provider_categories_linked:", report.afterPatch.provider_categories_linked);
  console.log("after_providers_services_linked:", report.afterPatch.providers_services_linked);
  console.log("after_ondemand_section_isActive:", report.afterPatch.ondemandSection ? report.afterPatch.ondemandSection.isActive : null);
  console.log("OUT:", outPath);
}

main().catch((e) => {
  console.log("STATUS: SELECTIVE_ONDEMAND_MIGRATION_RETRY_FATAL_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
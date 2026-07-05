const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

function typeOfValue(v) {
  if (v === undefined) return "missing";
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  return typeof v;
}

function summarizeDoc(doc) {
  const d = doc.data() || {};
  return {
    id: doc.id,
    name: d.name ?? d.title ?? d.nameEn ?? null,
    title: d.title ?? null,
    isActive: d.isActive ?? d.active ?? d.publish ?? null,
    order: d.order ?? d.set_order ?? null,
    section_id: d.section_id ?? null,
    sectionId: d.sectionId ?? null,
    serviceType: d.serviceType ?? null,
    serviceTypeFlag: d.serviceTypeFlag ?? null,
    category_id: d.category_id ?? d.categoryId ?? null,
    price: d.price ?? null,
    duration: d.duration ?? null,
    image_present: !!(d.image || d.photo || d.sectionImage || d.categoryImage || d.serviceImage),
    sectionImage_present: !!d.sectionImage,
    platformFee_type: typeOfValue(d.platformFee),
    adminCommision_type: typeOfValue(d.adminCommision),
    keys: Object.keys(d).sort()
  };
}

async function readCollection(db, name, limit = 50) {
  try {
    const snap = await db.collection(name).limit(limit).get();
    return {
      collection: name,
      ok: true,
      count: snap.size,
      docs: snap.docs.map(summarizeDoc)
    };
  } catch (e) {
    return {
      collection: name,
      ok: false,
      error: e.message
    };
  }
}

async function main() {
  const credPath = process.argv[2];
  const serviceAccount = require(credPath);

  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const db = getFirestore();

  console.log("STATUS: FIREBASE_ADMIN_INITIALIZED_READ_ONLY");
  console.log("project_id:", serviceAccount.project_id);
  console.log("");

  console.log("## PART 1 - MASTER SECTIONS");
  const sectionsSnap = await db.collection("sections").get();
  const sections = sectionsSnap.docs.map(summarizeDoc).sort((a, b) => {
    const ao = typeof a.order === "number" ? a.order : 999999;
    const bo = typeof b.order === "number" ? b.order : 999999;
    return ao - bo || String(a.name || "").localeCompare(String(b.name || ""));
  });

  console.log("sections_total_count:", sections.length);
  sections.forEach((s) => console.log(JSON.stringify(s)));

  const ondemandSection = sections.filter((s) => s.serviceTypeFlag === "ondemand-service");
  console.log("");
  console.log("ondemand_section_found_count:", ondemandSection.length);
  ondemandSection.forEach((s) => console.log(JSON.stringify(s)));

  console.log("");
  console.log("## PART 3/4 - ONDEMAND CATEGORY AND SERVICE COLLECTION CANDIDATES");

  const candidateCollections = [
    "provider_categories",
    "provider_service_categories",
    "ondemand_categories",
    "ondemand_service_categories",
    "service_categories",
    "categories",
    "provider_services",
    "providers_services",
    "ondemand_services",
    "services",
    "providers",
    "users"
  ];

  for (const col of candidateCollections) {
    const result = await readCollection(db, col, 30);
    console.log("");
    console.log("COLLECTION_AUDIT:", JSON.stringify({
      collection: result.collection,
      ok: result.ok,
      count: result.count ?? null,
      error: result.error ?? null
    }));

    if (result.ok && result.count > 0) {
      result.docs.forEach((d) => console.log(JSON.stringify({ collection: col, doc: d })));
    }
  }

  console.log("");
  console.log("## DATA CHAIN SUMMARY");

  const summary = {
    hasOndemandSection: ondemandSection.length > 0,
    ondemandSectionActive: ondemandSection.some((s) => s.isActive === true),
    note: ondemandSection.length === 0
      ? "MISSING_MASTER_SECTION_ONDEMAND_SERVICE"
      : "ONDEMAND_SECTION_EXISTS_CHECK_CHILD_DATA_NEXT"
  };

  console.log(JSON.stringify(summary));
  console.log("");
  console.log("STATUS: ONDEMAND_DATA_CHAIN_AUDIT_PART_1_FINISHED");
}

main().catch((e) => {
  console.log("STATUS: AUDIT_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});
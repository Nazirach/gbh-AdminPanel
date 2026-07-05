const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const fs = require("fs");

const credPath = process.argv[2];
const outPath = process.argv[3];
const serviceAccount = require(credPath);

initializeApp({
  credential: cert(serviceAccount),
  projectId: serviceAccount.project_id,
});

const db = getFirestore();

async function all(name) {
  const snap = await db.collection(name).get();
  const rows = [];
  snap.forEach(doc => {
    const d = doc.data() || {};
    rows.push({
      id: doc.id,
      name: d.name || d.title || d.serviceName || d.restaurantName || d.vendorName || null,
      sectionId: d.sectionId || null,
      section_id: d.section_id || null,
      categoryID: d.categoryID || d.categoryId || null,
      categoryId: d.categoryId || null,
      vendorID: d.vendorID || d.vendorId || null,
      vendorId: d.vendorId || null,
      providerId: d.providerId || d.providerID || null,
      publish: d.publish ?? null,
      isActive: d.isActive ?? null,
      active: d.active ?? null,
      serviceTypeFlag: d.serviceTypeFlag || d.service_type || d.serviceType || null,
      rawKeys: Object.keys(d).sort()
    });
  });
  return rows;
}

function matchesSection(row, sectionId) {
  return row.sectionId === sectionId || row.section_id === sectionId;
}

async function main() {
  const collections = [
    "sections",
    "vendor_categories",
    "vendors",
    "vendor_products",
    "items",
    "parcel_categories",
    "rental_vehicle_type",
    "providers_services",
    "providers",
    "orders",
    "provider_orders",
    "parcel_orders",
    "rental_orders"
  ];

  const data = {};
  for (const c of collections) {
    try {
      data[c] = await all(c);
    } catch (e) {
      data[c] = { error: e.message };
    }
  }

  const sections = Array.isArray(data.sections) ? data.sections : [];
  sections.sort((a, b) => Number(a.order ?? 9999) - Number(b.order ?? 9999));

  const map = sections.map(s => {
    const sid = s.id;
    const type = s.serviceTypeFlag || "NO_TYPE";
    return {
      section: {
        id: s.id,
        name: s.name,
        order: s.order,
        isActive: s.isActive,
        active: s.active,
        serviceTypeFlag: type
      },
      childCounts: {
        vendor_categories: Array.isArray(data.vendor_categories) ? data.vendor_categories.filter(x => matchesSection(x, sid)).length : "ERR",
        vendors: Array.isArray(data.vendors) ? data.vendors.filter(x => matchesSection(x, sid)).length : "ERR",
        vendor_products: Array.isArray(data.vendor_products) ? data.vendor_products.filter(x => matchesSection(x, sid)).length : "ERR",
        items: Array.isArray(data.items) ? data.items.filter(x => matchesSection(x, sid)).length : "ERR",
        parcel_categories: Array.isArray(data.parcel_categories) ? data.parcel_categories.filter(x => matchesSection(x, sid)).length : "ERR",
        rental_vehicle_type: Array.isArray(data.rental_vehicle_type) ? data.rental_vehicle_type.filter(x => matchesSection(x, sid)).length : "ERR",
        providers_services: Array.isArray(data.providers_services) ? data.providers_services.filter(x => matchesSection(x, sid)).length : "ERR",
        providers: Array.isArray(data.providers) ? data.providers.filter(x => matchesSection(x, sid)).length : "ERR"
      }
    };
  });

  const md = [];
  md.push("# MASTER FIRESTORE CHILD DATA MAP PER SECTION");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("Mode: Firebase read only. No write.");
  md.push(`Project: ${serviceAccount.project_id}`);
  md.push("");
  md.push("## Collection Counts");
  md.push("```json");
  const counts = {};
  for (const c of collections) counts[c] = Array.isArray(data[c]) ? data[c].length : data[c];
  md.push(JSON.stringify(counts, null, 2));
  md.push("```");
  md.push("");
  md.push("## Section Child Wiring Map");
  md.push("```json");
  md.push(JSON.stringify(map, null, 2));
  md.push("```");
  md.push("");
  md.push("## Console Table");
  md.push("```text");
  md.push("ORDER | ADMIN_ACTIVE_FIELDS | TYPE | ID | NAME | CHILD_COUNTS");
  for (const row of map) {
    const s = row.section;
    md.push(`${s.order} | isActive=${s.isActive} active=${s.active} | ${s.serviceTypeFlag} | ${s.id} | ${s.name} | ${JSON.stringify(row.childCounts)}`);
  }
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: MASTER_FIRESTORE_CHILD_DATA_MAP_CREATED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: MASTER_FIRESTORE_CHILD_DATA_MAP_CREATED");
  console.log("ORDER | isActive | active | type | id | name | childCounts");
  for (const row of map) {
    const s = row.section;
    console.log(`${s.order} | ${s.isActive} | ${s.active} | ${s.serviceTypeFlag} | ${s.id} | ${s.name} | ${JSON.stringify(row.childCounts)}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: MASTER_FIRESTORE_CHILD_DATA_MAP_ERROR");
  console.log("ERROR:", e.message);
  process.exitCode = 1;
});
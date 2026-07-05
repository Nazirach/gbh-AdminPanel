const fs = require("fs");

const collectionsPath = process.argv[2];
const outPath = process.argv[3];

function shortValue(v) {
  if (v === undefined) return "missing";
  if (v === null) return null;
  if (typeof v === "string") {
    if (v.length > 120) return v.slice(0, 120) + "...";
    return v;
  }
  if (typeof v === "object") {
    if (Array.isArray(v)) return `array(${v.length})`;
    return "object";
  }
  return v;
}

function summarizeDoc(id, doc) {
  const d = doc || {};
  return {
    id,
    name: shortValue(d.name),
    title: shortValue(d.title),
    serviceType: shortValue(d.serviceType),
    serviceTypeFlag: shortValue(d.serviceTypeFlag),
    flag: shortValue(d.flag),
    publish: shortValue(d.publish),
    isActive: shortValue(d.isActive),
    sectionId: shortValue(d.sectionId),
    section_id: shortValue(d.section_id),
    parentCategoryId: shortValue(d.parentCategoryId),
    categoryID: shortValue(d.categoryID),
    categoryId: shortValue(d.categoryId),
    author: shortValue(d.author),
    providerId: shortValue(d.providerId),
    price: shortValue(d.price),
    duration: shortValue(d.duration),
    keys: Object.keys(d).sort()
  };
}

function asEntries(collectionObj) {
  if (!collectionObj || typeof collectionObj !== "object") return [];
  return Object.entries(collectionObj);
}

function findOnDemandSections(data) {
  const sections = data.sections || {};
  return asEntries(sections).filter(([id, d]) => {
    const text = JSON.stringify(d).toLowerCase();
    return text.includes("ondemand-service") || text.includes("on demand service");
  });
}

function docsLinkedToSection(data, collectionName, sectionId) {
  const col = data[collectionName] || {};
  return asEntries(col).filter(([id, d]) => {
    return d && (d.sectionId === sectionId || d.section_id === sectionId);
  });
}

function findServicesOnDemand(data) {
  const services = data.services || {};
  return asEntries(services).filter(([id, d]) => {
    const text = JSON.stringify(d).toLowerCase();
    return text.includes("ondemand-service") || text.includes("on demand service");
  });
}

function main() {
  const raw = fs.readFileSync(collectionsPath, "utf8");
  const data = JSON.parse(raw);

  const lines = [];
  lines.push("# OFFICIAL ONDEMAND DEMO CHAIN AUDIT");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push("");
  lines.push("Mode: read-only. No Firebase write. No import. No patch.");
  lines.push("");
  lines.push(`collections.json: ${collectionsPath}`);
  lines.push("");

  const top = Object.keys(data).sort();
  lines.push("## Top Level Collections");
  lines.push("```text");
  lines.push(`collection_count: ${top.length}`);
  top.forEach(k => {
    const count = data[k] && typeof data[k] === "object" ? Object.keys(data[k]).length : 0;
    lines.push(`${k}: ${count}`);
  });
  lines.push("```");
  lines.push("");

  const officialServices = findServicesOnDemand(data);
  lines.push("## Official services On Demand Entries");
  lines.push("```json");
  lines.push(JSON.stringify(officialServices.map(([id, d]) => summarizeDoc(id, d)), null, 2));
  lines.push("```");
  lines.push("");

  const ondemandSections = findOnDemandSections(data);
  lines.push("## Official sections On Demand Entries");
  lines.push("```json");
  lines.push(JSON.stringify(ondemandSections.map(([id, d]) => summarizeDoc(id, d)), null, 2));
  lines.push("```");
  lines.push("");

  const sectionIds = ondemandSections.map(([id]) => id);
  lines.push("## On Demand Section IDs");
  lines.push("```text");
  sectionIds.forEach(id => lines.push(id));
  lines.push("```");
  lines.push("");

  for (const sectionId of sectionIds) {
    lines.push(`## Linked Data For On Demand Section: ${sectionId}`);

    for (const collectionName of [
      "provider_categories",
      "providers_services",
      "providers_workers",
      "users",
      "favorite_service"
    ]) {
      const linked = docsLinkedToSection(data, collectionName, sectionId);
      lines.push("");
      lines.push(`### ${collectionName}`);
      lines.push("```json");
      lines.push(JSON.stringify({
        collection: collectionName,
        sectionId,
        count: linked.length,
        samples: linked.slice(0, 25).map(([id, d]) => summarizeDoc(id, d))
      }, null, 2));
      lines.push("```");
    }
  }

  lines.push("");
  lines.push("## Additional Provider Users Detection");
  lines.push("```json");
  const users = data.users || {};
  const providerUsers = asEntries(users).filter(([id, d]) => {
    const text = JSON.stringify(d).toLowerCase();
    return text.includes('"role":"provider"') ||
           text.includes('"role": "provider"') ||
           text.includes("provider");
  });
  lines.push(JSON.stringify({
    provider_like_users_count: providerUsers.length,
    samples: providerUsers.slice(0, 30).map(([id, d]) => summarizeDoc(id, d))
  }, null, 2));
  lines.push("```");
  lines.push("");

  lines.push("## Final Status");
  lines.push("STATUS: OFFICIAL_ONDEMAND_DEMO_CHAIN_AUDIT_FINISHED");

  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
  console.log(`STATUS: OFFICIAL_ONDEMAND_DEMO_CHAIN_AUDIT_FINISHED`);
  console.log(`OUT: ${outPath}`);
}

main();
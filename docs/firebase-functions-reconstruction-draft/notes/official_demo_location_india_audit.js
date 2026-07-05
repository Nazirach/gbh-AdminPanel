const fs = require("fs");

const collectionsPath = process.argv[2];
const outPath = process.argv[3];

function root(raw) {
  return raw.__collections__ || raw.collections || raw;
}

function entries(obj) {
  if (!obj || typeof obj !== "object") return [];
  return Object.entries(obj);
}

function findCoords(obj, path = "", results = []) {
  if (!obj || typeof obj !== "object") return results;

  const keys = Object.keys(obj);
  const lower = Object.fromEntries(keys.map(k => [k.toLowerCase(), k]));

  const latKey = lower.latitude || lower.lat || lower._latitude;
  const lngKey = lower.longitude || lower.lng || lower.long || lower._longitude;

  if (latKey && lngKey) {
    const lat = obj[latKey];
    const lng = obj[lngKey];
    if (typeof lat === "number" && typeof lng === "number") {
      results.push({ path, lat, lng });
    }
  }

  if (obj.geopoint && typeof obj.geopoint === "object") {
    const g = obj.geopoint;
    if (typeof g._latitude === "number" && typeof g._longitude === "number") {
      results.push({ path: path + ".geopoint", lat: g._latitude, lng: g._longitude });
    }
  }

  if (obj.location && typeof obj.location === "object") {
    const l = obj.location;
    if (typeof l._latitude === "number" && typeof l._longitude === "number") {
      results.push({ path: path + ".location", lat: l._latitude, lng: l._longitude });
    }
    if (typeof l.latitude === "number" && typeof l.longitude === "number") {
      results.push({ path: path + ".location", lat: l.latitude, lng: l.longitude });
    }
  }

  if (obj.g && typeof obj.g === "object" && obj.g.geopoint) {
    const gp = obj.g.geopoint;
    if (typeof gp._latitude === "number" && typeof gp._longitude === "number") {
      results.push({ path: path + ".g.geopoint", lat: gp._latitude, lng: gp._longitude });
    }
  }

  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === "object") {
      findCoords(v, path ? `${path}.${k}` : k, results);
    }
  }

  return results;
}

function looksIndia(lat, lng) {
  return lat >= 6 && lat <= 36 && lng >= 68 && lng <= 98;
}

function slimDoc(id, d) {
  return {
    id,
    name: d.name || d.title || d.storeName || d.firstName || d.fullName || null,
    email: d.email || null,
    role: d.role || null,
    sectionId: d.sectionId || null,
    section_id: d.section_id || null,
    zoneId: d.zoneId || null,
    address: d.address || d.location || d.shippingAddress || null
  };
}

function main() {
  const raw = JSON.parse(fs.readFileSync(collectionsPath, "utf8"));
  const data = root(raw);

  const lines = [];
  lines.push("# OFFICIAL DEMO LOCATION INDIA AUDIT");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push("");
  lines.push("Mode: read-only. No Firebase write. No patch.");
  lines.push("");

  const allCoords = [];

  for (const [collectionName, collection] of entries(data)) {
    if (!collection || typeof collection !== "object") continue;

    for (const [docId, doc] of entries(collection)) {
      const coords = findCoords(doc, `${collectionName}/${docId}`);
      for (const c of coords) {
        allCoords.push({
          collection: collectionName,
          docId,
          ...c,
          india: looksIndia(c.lat, c.lng),
          doc: slimDoc(docId, doc)
        });
      }
    }
  }

  const indiaCoords = allCoords.filter(c => c.india);

  lines.push("## Coordinate Summary");
  lines.push("```json");
  lines.push(JSON.stringify({
    totalCoordinatesFound: allCoords.length,
    indiaCoordinatesFound: indiaCoords.length,
    collectionsWithIndiaCoords: [...new Set(indiaCoords.map(c => c.collection))].sort()
  }, null, 2));
  lines.push("```");
  lines.push("");

  lines.push("## India Coordinates Samples");
  lines.push("```json");
  lines.push(JSON.stringify(indiaCoords.slice(0, 80), null, 2));
  lines.push("```");
  lines.push("");

  const preferred = indiaCoords.find(c =>
    ["users", "vendors", "provider_categories", "providers_services", "providers_workers", "zones"].includes(c.collection)
  ) || indiaCoords[0];

  lines.push("## Recommended Mock Location");
  lines.push("```json");
  lines.push(JSON.stringify(preferred || null, null, 2));
  lines.push("```");
  lines.push("");

  lines.push("## Final Status");
  lines.push("STATUS: OFFICIAL_DEMO_LOCATION_INDIA_AUDIT_FINISHED");

  fs.writeFileSync(outPath, lines.join("\n"), "utf8");

  console.log("STATUS: OFFICIAL_DEMO_LOCATION_INDIA_AUDIT_FINISHED");
  console.log("totalCoordinatesFound:", allCoords.length);
  console.log("indiaCoordinatesFound:", indiaCoords.length);
  if (preferred) {
    console.log("recommended_lat:", preferred.lat);
    console.log("recommended_lng:", preferred.lng);
    console.log("recommended_collection:", preferred.collection);
    console.log("recommended_docId:", preferred.docId);
  }
  console.log("OUT:", outPath);
}

main();
const fs = require('fs');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

if (!credPath || !fs.existsSync(credPath)) {
  console.error('Missing credential file:', credPath);
  process.exit(1);
}

if (!getApps().length) {
  initializeApp({
    credential: cert(require(credPath))
  });
}

const db = getFirestore();

function hasValue(v) {
  return v !== undefined && v !== null && v !== '';
}

function getLatLngFromGeoPoint(gp) {
  if (!gp) return null;
  if (typeof gp.latitude === 'number' && typeof gp.longitude === 'number') {
    return { latitude: gp.latitude, longitude: gp.longitude };
  }
  if (typeof gp._latitude === 'number' && typeof gp._longitude === 'number') {
    return { latitude: gp._latitude, longitude: gp._longitude };
  }
  return null;
}

function pointInPolygon(point, polygon) {
  const x = point.longitude;
  const y = point.latitude;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const pi = polygon[i];
    const pj = polygon[j];

    const xi = pi.longitude;
    const yi = pi.latitude;
    const xj = pj.longitude;
    const yj = pj.latitude;

    const intersect = ((yi > y) !== (yj > y)) &&
      (x < (xj - xi) * (y - yi) / ((yj - yi) || 0.0000000001) + xi);

    if (intersect) inside = !inside;
  }

  return inside;
}

function normalizeZoneArea(zone) {
  const raw = zone.area || zone.zoneArea || zone.coordinates || zone.polygon || [];
  if (!Array.isArray(raw)) return [];

  return raw.map(p => {
    if (!p) return null;
    if (typeof p.latitude === 'number' && typeof p.longitude === 'number') {
      return { latitude: p.latitude, longitude: p.longitude };
    }
    if (typeof p._latitude === 'number' && typeof p._longitude === 'number') {
      return { latitude: p._latitude, longitude: p._longitude };
    }
    return null;
  }).filter(Boolean);
}

(async () => {
  const zonesSnap = await db.collection('zone').get();
  const vendorsSnap = await db.collection('vendors').get();

  const zones = [];
  zonesSnap.forEach(doc => {
    const d = doc.data() || {};
    const area = normalizeZoneArea(d);
    zones.push({
      id: doc.id,
      name: d.name || '',
      publish: d.publish,
      areaCount: area.length,
      area
    });
  });

  let lines = [];
  let totalVendors = 0;
  let missingZoneId = 0;
  let canMap = 0;
  let cannotMap = 0;
  let alreadyHasZoneId = 0;
  let missingCoordinates = 0;
  let multipleMatches = 0;

  lines.push('# FIRESTORE VENDOR ZONEID BACKFILL SIMULATION');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('');
  lines.push('## Zones');
  lines.push('`	ext');

  for (const z of zones) {
    lines.push([
      'zoneId=' + z.id,
      'name=' + z.name,
      'publish=' + z.publish,
      'areaCount=' + z.areaCount
    ].join(' | '));
  }

  lines.push('`');
  lines.push('');
  lines.push('## Vendor Mapping Simulation');
  lines.push('`	ext');

  vendorsSnap.forEach(doc => {
    totalVendors++;
    const d = doc.data() || {};

    if (hasValue(d.zoneId)) {
      alreadyHasZoneId++;
      return;
    }

    missingZoneId++;

    const point = getLatLngFromGeoPoint(d.coordinates);
    if (!point) {
      missingCoordinates++;
      cannotMap++;
      lines.push([
        'NO_COORDINATES',
        'vendorId=' + doc.id,
        'title=' + (d.title || ''),
        'section_id=' + d.section_id
      ].join(' | '));
      return;
    }

    const matches = zones.filter(z => z.areaCount >= 3 && pointInPolygon(point, z.area));

    if (matches.length === 1) {
      canMap++;
      lines.push([
        'CAN_MAP',
        'vendorId=' + doc.id,
        'title=' + (d.title || ''),
        'section_id=' + d.section_id,
        'lat=' + point.latitude,
        'lng=' + point.longitude,
        'zoneId=' + matches[0].id,
        'zoneName=' + matches[0].name
      ].join(' | '));
    } else if (matches.length > 1) {
      multipleMatches++;
      cannotMap++;
      lines.push([
        'MULTIPLE_ZONES',
        'vendorId=' + doc.id,
        'title=' + (d.title || ''),
        'section_id=' + d.section_id,
        'lat=' + point.latitude,
        'lng=' + point.longitude,
        'zoneIds=' + matches.map(z => z.id).join(',')
      ].join(' | '));
    } else {
      cannotMap++;
      lines.push([
        'NO_ZONE_MATCH',
        'vendorId=' + doc.id,
        'title=' + (d.title || ''),
        'section_id=' + d.section_id,
        'lat=' + point.latitude,
        'lng=' + point.longitude
      ].join(' | '));
    }
  });

  lines.push('`');
  lines.push('');
  lines.push('## Counters');
  lines.push('`	ext');
  lines.push('TOTAL_ZONES: ' + zones.length);
  lines.push('TOTAL_VENDORS: ' + totalVendors);
  lines.push('ALREADY_HAS_ZONEID: ' + alreadyHasZoneId);
  lines.push('MISSING_ZONEID: ' + missingZoneId);
  lines.push('CAN_MAP_ZONEID: ' + canMap);
  lines.push('CANNOT_MAP_ZONEID: ' + cannotMap);
  lines.push('MISSING_COORDINATES: ' + missingCoordinates);
  lines.push('MULTIPLE_ZONE_MATCHES: ' + multipleMatches);
  lines.push('`');
  lines.push('');
  lines.push('## Final Status');
  lines.push('STATUS: FIRESTORE_VENDOR_ZONEID_BACKFILL_SIMULATION_CREATED');

  fs.writeFileSync(process.argv[2], lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('SIMULATION_FAILED:', err);
  process.exit(1);
});

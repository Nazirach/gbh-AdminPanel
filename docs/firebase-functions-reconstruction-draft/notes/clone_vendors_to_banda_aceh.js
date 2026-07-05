const fs = require('fs');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, GeoPoint, Timestamp } = require('firebase-admin/firestore');

const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const outPath = process.argv[2];

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

const targetZoneId = 'q8OOxNm1zgyVqggkCibX';
const baseLat = 5.55;
const baseLng = 95.32;

const offsets = [
  [0.0000, 0.0000],
  [0.0030, 0.0030],
  [-0.0030, 0.0030],
  [0.0030, -0.0030],
  [-0.0030, -0.0030],
  [0.0060, 0.0000],
  [0.0000, 0.0060],
  [-0.0060, 0.0000],
  [0.0000, -0.0060],
  [0.0090, 0.0030],
  [0.0030, 0.0090],
  [-0.0090, 0.0030],
  [0.0030, -0.0090],
  [0.0100, -0.0040],
  [-0.0100, -0.0040],
  [0.0040, 0.0100],
  [-0.0040, 0.0100],
  [0.0120, 0.0000],
  [0.0000, 0.0120],
  [-0.0120, 0.0000],
  [0.0000, -0.0120],
  [0.0140, 0.0060],
  [-0.0140, 0.0060],
  [0.0060, -0.0140]
];

function hasValue(v) {
  return v !== undefined && v !== null && v !== '';
}

function safeTitle(d) {
  return d.title || d.name || d.vendorName || '';
}

function hasPhoto(d) {
  return hasValue(d.photo) || (Array.isArray(d.photos) && d.photos.length > 0);
}

function encodeGeohash(latitude, longitude, precision = 9) {
  const base32 = '0123456789bcdefghjkmnpqrstuvwxyz';
  let idx = 0;
  let bit = 0;
  let evenBit = true;
  let geohash = '';

  let latMin = -90;
  let latMax = 90;
  let lonMin = -180;
  let lonMax = 180;

  while (geohash.length < precision) {
    if (evenBit) {
      const lonMid = (lonMin + lonMax) / 2;
      if (longitude >= lonMid) {
        idx = idx * 2 + 1;
        lonMin = lonMid;
      } else {
        idx = idx * 2;
        lonMax = lonMid;
      }
    } else {
      const latMid = (latMin + latMax) / 2;
      if (latitude >= latMid) {
        idx = idx * 2 + 1;
        latMin = latMid;
      } else {
        idx = idx * 2;
        latMax = latMid;
      }
    }

    evenBit = !evenBit;

    if (++bit === 5) {
      geohash += base32.charAt(idx);
      bit = 0;
      idx = 0;
    }
  }

  return geohash;
}

function sanitizeId(value) {
  return String(value || '')
    .replace(/[^a-zA-Z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .slice(0, 80);
}

function cloneVendorData(sourceId, sourceData, index) {
  const offset = offsets[index % offsets.length];
  const lat = baseLat + offset[0];
  const lng = baseLng + offset[1];
  const point = new GeoPoint(lat, lng);
  const geohash = encodeGeohash(lat, lng, 9);

  const sectionId = sourceData.section_id || 'unknown_section';
  const newId = 'aceh_clone_' + sanitizeId(sectionId) + '_' + sanitizeId(sourceId);

  const cloned = {
    ...sourceData,
    id: newId,
    sourceVendorId: sourceId,
    clonedFor: 'Banda Aceh demo vendor display',
    title: safeTitle(sourceData),
    section_id: sectionId,
    zoneId: targetZoneId,
    latitude: lat,
    longitude: lng,
    coordinates: point,
    g: {
      geohash,
      geopoint: point
    },
    publish: true,
    isOpen: true,
    createdAt: sourceData.createdAt || Timestamp.now(),
    updatedAt: Timestamp.now()
  };

  if (!hasValue(cloned.photo)) {
    cloned.photo = 'https://via.placeholder.com/512x512.png?text=' + encodeURIComponent(cloned.title || 'Aceh Vendor');
  }

  if (!Array.isArray(cloned.photos) || cloned.photos.length === 0) {
    cloned.photos = [cloned.photo];
  }

  return { newId, cloned, lat, lng, geohash };
}

(async () => {
  const sectionsSnap = await db.collection('sections')
    .where('isActive', '==', true)
    .get();

  const vendorsSnap = await db.collection('vendors').get();

  const sections = [];
  sectionsSnap.forEach(doc => {
    const d = doc.data() || {};
    sections.push({
      id: doc.id,
      name: d.name || '',
      serviceTypeFlag: d.serviceTypeFlag || d.type || ''
    });
  });

  const vendorsBySection = {};
  const vendorRawById = {};

  vendorsSnap.forEach(doc => {
    const d = doc.data() || {};
    vendorRawById[doc.id] = d;

    const sectionId = d.section_id || '';
    if (!sectionId) return;
    if (!vendorsBySection[sectionId]) vendorsBySection[sectionId] = [];

    vendorsBySection[sectionId].push({
      docId: doc.id,
      data: d,
      title: safeTitle(d),
      hasPhoto: hasPhoto(d),
      hasCoordinates: !!d.coordinates,
      categoryID: d.categoryID || ''
    });
  });

  const selected = [];

  for (const section of sections.sort((a, b) => (a.name || '').localeCompare(b.name || ''))) {
    const list = vendorsBySection[section.id] || [];
    const usable = list
      .filter(v => hasValue(v.title))
      .sort((a, b) => {
        const scoreA = (a.hasPhoto ? 10 : 0) + (a.categoryID ? 5 : 0) + (a.hasCoordinates ? 2 : 0);
        const scoreB = (b.hasPhoto ? 10 : 0) + (b.categoryID ? 5 : 0) + (b.hasCoordinates ? 2 : 0);
        return scoreB - scoreA;
      })
      .slice(0, 3);

    for (const v of usable) {
      selected.push({
        section,
        sourceVendorId: v.docId,
        sourceData: v.data
      });
    }
  }

  const lines = [];
  let createdOrUpdated = 0;
  let skipped = 0;
  let risk = 0;

  lines.push('# FIRESTORE VENDOR CLONE TO BANDA ACEH WRITE');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: CONTROLLED FIREBASE WRITE.');
  lines.push('Old/global vendors are not mutated.');
  lines.push('Target zoneId=' + targetZoneId);
  lines.push('');

  lines.push('## Clone Results');
  lines.push('TEXT_START');

  for (let i = 0; i < selected.length; i++) {
    const item = selected[i];
    const { newId, cloned, lat, lng, geohash } = cloneVendorData(item.sourceVendorId, item.sourceData, i);
    const ref = db.collection('vendors').doc(newId);

    await ref.set(cloned, { merge: true });

    const afterSnap = await ref.get();
    const after = afterSnap.data() || {};

    const ok =
      after.id === newId &&
      after.sourceVendorId === item.sourceVendorId &&
      after.section_id === item.section.id &&
      after.zoneId === targetZoneId &&
      after.coordinates &&
      after.g &&
      after.g.geohash &&
      after.publish === true &&
      after.isOpen === true;

    if (ok) createdOrUpdated++;
    else risk++;

    lines.push([
      ok ? 'CLONED_OK' : 'CLONED_RISK',
      'newVendorId=' + newId,
      'sourceVendorId=' + item.sourceVendorId,
      'sectionId=' + item.section.id,
      'sectionName=' + item.section.name,
      'title=' + (after.title || ''),
      'categoryID=' + (after.categoryID || ''),
      'zoneId=' + after.zoneId,
      'lat=' + lat,
      'lng=' + lng,
      'geohash=' + geohash,
      'publish=' + after.publish,
      'isOpen=' + after.isOpen
    ].join(' | '));
  }

  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Counters');
  lines.push('TEXT_START');
  lines.push('TOTAL_SELECTED_FOR_CLONE: ' + selected.length);
  lines.push('CLONED_OR_UPDATED: ' + createdOrUpdated);
  lines.push('SKIPPED: ' + skipped);
  lines.push('RISK: ' + risk);
  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Final Status');
  lines.push(risk === 0 ? 'STATUS: FIRESTORE_VENDOR_CLONE_TO_BANDA_ACEH_WRITE_PASS' : 'STATUS: FIRESTORE_VENDOR_CLONE_TO_BANDA_ACEH_WRITE_RISK');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('CLONE_VENDORS_FAILED:', err);
  process.exit(1);
});

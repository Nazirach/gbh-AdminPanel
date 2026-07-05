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

(async () => {
  const snap = await db.collection('vendors').get();

  let lines = [];
  let total = 0;
  let ok = 0;

  let missingSectionId = 0;
  let missingZoneId = 0;
  let missingCategoryID = 0;
  let missingCoordinates = 0;
  let missingGeoHash = 0;
  let missingTitle = 0;
  let missingPhoto = 0;
  let missingEnabledDiveInFuture = 0;

  lines.push('# FIRESTORE EXISTING VENDORS CONTRACT AUDIT');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('');
  lines.push('## Vendor Contract Rows');
  lines.push('`	ext');

  snap.forEach(doc => {
    total++;
    const d = doc.data() || {};

    const hasSectionId = hasValue(d.section_id);
    const hasZoneId = hasValue(d.zoneId);
    const hasCategoryID = Array.isArray(d.categoryID) ? d.categoryID.length > 0 : hasValue(d.categoryID);
    const hasCoordinates = hasValue(d.coordinates);
    const hasGeoHash = d.g && hasValue(d.g.geohash);
    const hasTitle = hasValue(d.title);
    const hasPhoto = hasValue(d.photo) || (Array.isArray(d.photos) && d.photos.length > 0);
    const hasEnabledDiveInFuture = d.enabledDiveInFuture !== undefined;

    if (!hasSectionId) missingSectionId++;
    if (!hasZoneId) missingZoneId++;
    if (!hasCategoryID) missingCategoryID++;
    if (!hasCoordinates) missingCoordinates++;
    if (!hasGeoHash) missingGeoHash++;
    if (!hasTitle) missingTitle++;
    if (!hasPhoto) missingPhoto++;
    if (!hasEnabledDiveInFuture) missingEnabledDiveInFuture++;

    const rowOk = hasSectionId && hasZoneId && hasCategoryID && hasCoordinates && hasGeoHash && hasTitle && hasPhoto && hasEnabledDiveInFuture;
    if (rowOk) ok++;

    lines.push([
      'id=' + doc.id,
      'title=' + (d.title || ''),
      'section_id=' + d.section_id,
      'zoneId=' + d.zoneId,
      'categoryID=' + JSON.stringify(d.categoryID),
      'hasCoordinates=' + hasCoordinates,
      'hasGGeohash=' + hasGeoHash,
      'hasPhoto=' + hasPhoto,
      'enabledDiveInFuture=' + d.enabledDiveInFuture,
      'contractOk=' + rowOk
    ].join(' | '));
  });

  lines.push('`');
  lines.push('');
  lines.push('## Counters');
  lines.push('`	ext');
  lines.push('TOTAL_VENDORS: ' + total);
  lines.push('CONTRACT_OK: ' + ok);
  lines.push('MISSING_section_id: ' + missingSectionId);
  lines.push('MISSING_zoneId: ' + missingZoneId);
  lines.push('MISSING_categoryID: ' + missingCategoryID);
  lines.push('MISSING_coordinates: ' + missingCoordinates);
  lines.push('MISSING_g_geohash: ' + missingGeoHash);
  lines.push('MISSING_title: ' + missingTitle);
  lines.push('MISSING_photo_or_photos: ' + missingPhoto);
  lines.push('MISSING_enabledDiveInFuture: ' + missingEnabledDiveInFuture);
  lines.push('`');
  lines.push('');
  lines.push('## Final Status');
  lines.push('STATUS: FIRESTORE_EXISTING_VENDORS_CONTRACT_AUDITED');

  fs.writeFileSync(process.argv[2], lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('AUDIT_FAILED:', err);
  process.exit(1);
});

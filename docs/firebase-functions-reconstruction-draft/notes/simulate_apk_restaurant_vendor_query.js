const fs = require('fs');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

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

(async () => {
  const sectionId = '6285ddbfd9598';
  const zoneId = 'q8OOxNm1zgyVqggkCibX';
  const expectedVendorId = 'custom_banda_aceh_restaurant_demo';

  const lines = [];

  lines.push('# FIRESTORE APK RESTAURANT VENDOR QUERY SIMULATION');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('');
  lines.push('Query contract:');
  lines.push('collection=vendors');
  lines.push('where section_id == ' + sectionId);
  lines.push('where zoneId == ' + zoneId);
  lines.push('');

  const snap = await db.collection('vendors')
    .where('section_id', '==', sectionId)
    .where('zoneId', '==', zoneId)
    .get();

  let total = 0;
  let foundExpected = false;

  lines.push('## Query Results');
  lines.push('`	ext');

  snap.forEach(doc => {
    total++;
    const d = doc.data() || {};
    if (doc.id === expectedVendorId) foundExpected = true;

    lines.push([
      'docId=' + doc.id,
      'title=' + (d.title || ''),
      'section_id=' + d.section_id,
      'zoneId=' + d.zoneId,
      'categoryID=' + d.categoryID,
      'hasCoordinates=' + !!d.coordinates,
      'hasGGeohash=' + !!(d.g && d.g.geohash),
      'publish=' + d.publish,
      'isOpen=' + d.isOpen
    ].join(' | '));
  });

  lines.push('`');
  lines.push('');

  lines.push('## Counters');
  lines.push('`	ext');
  lines.push('TOTAL_MATCHED_VENDORS: ' + total);
  lines.push('EXPECTED_VENDOR_ID: ' + expectedVendorId);
  lines.push('EXPECTED_VENDOR_FOUND: ' + foundExpected);
  lines.push('`');
  lines.push('');

  lines.push('## Final Status');
  lines.push(foundExpected ? 'STATUS: FIRESTORE_APK_RESTAURANT_VENDOR_QUERY_PASS' : 'STATUS: FIRESTORE_APK_RESTAURANT_VENDOR_QUERY_RISK');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('SIMULATE_APK_VENDOR_QUERY_FAILED:', err);
  process.exit(1);
});

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
const zoneId = 'q8OOxNm1zgyVqggkCibX';

(async () => {
  const sectionsSnap = await db.collection('sections')
    .where('isActive', '==', true)
    .get();

  const sections = [];
  sectionsSnap.forEach(doc => {
    const d = doc.data() || {};
    sections.push({
      id: doc.id,
      name: d.name || '',
      type: d.serviceTypeFlag || d.type || ''
    });
  });

  const lines = [];
  let totalSections = 0;
  let sectionsWithAcehVendors = 0;
  let totalAcehVendors = 0;

  lines.push('# FIRESTORE ACEH CLONED VENDOR QUERY BY SECTION');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('zoneId=' + zoneId);
  lines.push('');

  lines.push('## Query Results');
  lines.push('TEXT_START');

  for (const section of sections.sort((a, b) => (a.name || '').localeCompare(b.name || ''))) {
    totalSections++;

    const snap = await db.collection('vendors')
      .where('section_id', '==', section.id)
      .where('zoneId', '==', zoneId)
      .get();

    let count = 0;
    const titles = [];

    snap.forEach(doc => {
      count++;
      const d = doc.data() || {};
      titles.push((d.title || '') + ' [' + doc.id + ']');
    });

    if (count > 0) sectionsWithAcehVendors++;
    totalAcehVendors += count;

    lines.push('');
    lines.push('SECTION_RESULT | sectionId=' + section.id + ' | name=' + section.name + ' | type=' + section.type + ' | matchedVendors=' + count);
    for (const title of titles.slice(0, 10)) {
      lines.push('  VENDOR | ' + title);
    }
  }

  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Counters');
  lines.push('TEXT_START');
  lines.push('TOTAL_ACTIVE_SECTIONS: ' + totalSections);
  lines.push('SECTIONS_WITH_ACEH_VENDORS: ' + sectionsWithAcehVendors);
  lines.push('TOTAL_ACEH_ZONE_VENDORS: ' + totalAcehVendors);
  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Final Status');
  lines.push(totalAcehVendors >= 22 ? 'STATUS: FIRESTORE_ACEH_CLONED_VENDOR_QUERY_BY_SECTION_PASS' : 'STATUS: FIRESTORE_ACEH_CLONED_VENDOR_QUERY_BY_SECTION_RISK');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('VERIFY_ACEH_CLONED_VENDORS_FAILED:', err);
  process.exit(1);
});

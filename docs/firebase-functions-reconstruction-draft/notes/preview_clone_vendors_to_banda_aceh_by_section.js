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

function hasValue(v) {
  return v !== undefined && v !== null && v !== '';
}

function safeTitle(d) {
  return d.title || d.name || d.vendorName || '';
}

function hasPhoto(d) {
  return hasValue(d.photo) || (Array.isArray(d.photos) && d.photos.length > 0);
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
      serviceTypeFlag: d.serviceTypeFlag || d.type || '',
      isActive: d.isActive,
      active: d.active
    });
  });

  const vendorsBySection = {};
  vendorsSnap.forEach(doc => {
    const d = doc.data() || {};
    const sectionId = d.section_id || '';
    if (!sectionId) return;

    if (!vendorsBySection[sectionId]) vendorsBySection[sectionId] = [];

    vendorsBySection[sectionId].push({
      docId: doc.id,
      title: safeTitle(d),
      section_id: sectionId,
      categoryID: d.categoryID || '',
      categoryTitle: d.categoryTitle || '',
      hasCoordinates: !!d.coordinates,
      hasG: !!(d.g && d.g.geohash),
      hasZoneId: hasValue(d.zoneId),
      hasPhoto: hasPhoto(d),
      publish: d.publish,
      isOpen: d.isOpen,
      latitude: d.latitude,
      longitude: d.longitude
    });
  });

  const lines = [];

  lines.push('# FIRESTORE VENDOR CLONE TO BANDA ACEH PREVIEW');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('');
  lines.push('Strategy:');
  lines.push('Do not mutate old/global vendors.');
  lines.push('Clone selected vendor samples into new Banda Aceh demo vendors.');
  lines.push('Target zoneId=q8OOxNm1zgyVqggkCibX.');
  lines.push('Target coordinates around Banda Aceh center lat=5.55 lng=95.32.');
  lines.push('');

  let totalSections = 0;
  let sectionsWithVendors = 0;
  let sectionsWithoutVendors = 0;
  let totalCandidateSamples = 0;

  lines.push('## Section Vendor Samples');
  lines.push('TEXT_START');

  for (const section of sections.sort((a, b) => (a.name || '').localeCompare(b.name || ''))) {
    totalSections++;
    const list = vendorsBySection[section.id] || [];

    const usable = list
      .filter(v => hasValue(v.title))
      .sort((a, b) => {
        const scoreA = (a.hasPhoto ? 10 : 0) + (a.categoryID ? 5 : 0) + (a.hasCoordinates ? 2 : 0);
        const scoreB = (b.hasPhoto ? 10 : 0) + (b.categoryID ? 5 : 0) + (b.hasCoordinates ? 2 : 0);
        return scoreB - scoreA;
      })
      .slice(0, 3);

    if (usable.length > 0) {
      sectionsWithVendors++;
      totalCandidateSamples += usable.length;
    } else {
      sectionsWithoutVendors++;
    }

    lines.push('');
    lines.push('SECTION | id=' + section.id + ' | name=' + section.name + ' | type=' + section.serviceTypeFlag + ' | totalExistingVendors=' + list.length + ' | selectedSamples=' + usable.length);

    for (const v of usable) {
      lines.push([
        'SAMPLE',
        'sourceVendorId=' + v.docId,
        'title=' + v.title,
        'categoryID=' + v.categoryID,
        'categoryTitle=' + v.categoryTitle,
        'hasPhoto=' + v.hasPhoto,
        'oldZoneId=' + v.hasZoneId,
        'oldLat=' + v.latitude,
        'oldLng=' + v.longitude,
        'publish=' + v.publish,
        'isOpen=' + v.isOpen
      ].join(' | '));
    }

    if (usable.length === 0) {
      lines.push('NO_USABLE_VENDOR_SAMPLE_FOR_THIS_SECTION');
    }
  }

  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Counters');
  lines.push('TEXT_START');
  lines.push('TOTAL_ACTIVE_SECTIONS: ' + totalSections);
  lines.push('SECTIONS_WITH_VENDOR_SAMPLES: ' + sectionsWithVendors);
  lines.push('SECTIONS_WITHOUT_VENDOR_SAMPLES: ' + sectionsWithoutVendors);
  lines.push('TOTAL_SELECTED_VENDOR_SAMPLES: ' + totalCandidateSamples);
  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Final Status');
  lines.push('STATUS: FIRESTORE_VENDOR_CLONE_TO_BANDA_ACEH_PREVIEW_CREATED');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('PREVIEW_CLONE_VENDORS_FAILED:', err);
  process.exit(1);
});

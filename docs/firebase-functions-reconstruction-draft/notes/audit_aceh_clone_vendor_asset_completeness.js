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

function hasValue(v) {
  return v !== undefined && v !== null && String(v).trim() !== '';
}

function countArray(v) {
  return Array.isArray(v) ? v.length : 0;
}

async function countByField(collection, field, value) {
  try {
    const snap = await db.collection(collection).where(field, '==', value).get();
    return snap.size;
  } catch (e) {
    return 'ERR:' + e.message;
  }
}

(async () => {
  const vendorsSnap = await db.collection('vendors')
    .where('zoneId', '==', zoneId)
    .get();

  const cloneVendors = [];

  vendorsSnap.forEach(doc => {
    const d = doc.data() || {};
    if ((doc.id || '').startsWith('aceh_clone_') || doc.id === 'custom_banda_aceh_restaurant_demo') {
      cloneVendors.push({
        id: doc.id,
        data: d
      });
    }
  });

  const lines = [];
  let total = 0;
  let hasPhotoCount = 0;
  let hasPhotosCount = 0;
  let hasCategoryCount = 0;
  let hasWorkingHoursCount = 0;
  let missingVisualRisk = 0;

  lines.push('# FIRESTORE ACEH CLONE VENDOR ASSET COMPLETENESS AUDIT');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('Target zoneId=' + zoneId);
  lines.push('');
  lines.push('Purpose:');
  lines.push('Check if cloned vendors preserve real Firebase visual fields and linked data.');
  lines.push('');

  lines.push('## Vendor Asset Results');
  lines.push('TEXT_START');

  for (const item of cloneVendors.sort((a, b) => (a.data.section_id || '').localeCompare(b.data.section_id || ''))) {
    total++;

    const id = item.id;
    const d = item.data || {};
    const sourceVendorId = d.sourceVendorId || '';

    const hasPhoto = hasValue(d.photo);
    const photosCount = countArray(d.photos);
    const hasBanner = hasValue(d.coverImage) || hasValue(d.banner) || hasValue(d.vendorBanner) || hasValue(d.restaurantCoverImage);
    const categoryOk = hasValue(d.categoryID) || countArray(d.categoryID) > 0;
    const workingHoursCount = countArray(d.workingHours);

    if (hasPhoto) hasPhotoCount++;
    if (photosCount > 0) hasPhotosCount++;
    if (categoryOk) hasCategoryCount++;
    if (workingHoursCount > 0) hasWorkingHoursCount++;

    if (!hasPhoto && photosCount === 0) missingVisualRisk++;

    const linkedCounts = {};
    linkedCounts.items_by_vendorID = await countByField('items', 'vendorID', id);
    linkedCounts.items_by_vendorId = await countByField('items', 'vendorId', id);
    linkedCounts.products_by_vendorID = await countByField('products', 'vendorID', id);
    linkedCounts.products_by_vendorId = await countByField('products', 'vendorId', id);

    if (sourceVendorId) {
      linkedCounts.source_items_by_vendorID = await countByField('items', 'vendorID', sourceVendorId);
      linkedCounts.source_items_by_vendorId = await countByField('items', 'vendorId', sourceVendorId);
      linkedCounts.source_products_by_vendorID = await countByField('products', 'vendorID', sourceVendorId);
      linkedCounts.source_products_by_vendorId = await countByField('products', 'vendorId', sourceVendorId);
    }

    lines.push([
      'VENDOR_ASSET',
      'id=' + id,
      'title=' + (d.title || ''),
      'section_id=' + (d.section_id || ''),
      'sourceVendorId=' + sourceVendorId,
      'photo=' + hasPhoto,
      'photosCount=' + photosCount,
      'banner=' + hasBanner,
      'categoryID=' + JSON.stringify(d.categoryID || ''),
      'categoryTitle=' + (d.categoryTitle || ''),
      'workingHoursCount=' + workingHoursCount,
      'publish=' + d.publish,
      'isOpen=' + d.isOpen,
      'items_by_vendorID=' + linkedCounts.items_by_vendorID,
      'items_by_vendorId=' + linkedCounts.items_by_vendorId,
      'products_by_vendorID=' + linkedCounts.products_by_vendorID,
      'products_by_vendorId=' + linkedCounts.products_by_vendorId,
      'source_items_by_vendorID=' + (linkedCounts.source_items_by_vendorID ?? ''),
      'source_items_by_vendorId=' + (linkedCounts.source_items_by_vendorId ?? ''),
      'source_products_by_vendorID=' + (linkedCounts.source_products_by_vendorID ?? ''),
      'source_products_by_vendorId=' + (linkedCounts.source_products_by_vendorId ?? '')
    ].join(' | '));
  }

  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Counters');
  lines.push('TEXT_START');
  lines.push('TOTAL_ACEH_CLONE_VENDORS: ' + total);
  lines.push('VENDORS_WITH_PHOTO: ' + hasPhotoCount);
  lines.push('VENDORS_WITH_PHOTOS_ARRAY: ' + hasPhotosCount);
  lines.push('VENDORS_WITH_CATEGORY: ' + hasCategoryCount);
  lines.push('VENDORS_WITH_WORKING_HOURS: ' + hasWorkingHoursCount);
  lines.push('MISSING_VISUAL_RISK: ' + missingVisualRisk);
  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Final Status');
  lines.push(missingVisualRisk === 0 ? 'STATUS: FIRESTORE_ACEH_CLONE_VENDOR_ASSET_COMPLETENESS_PASS' : 'STATUS: FIRESTORE_ACEH_CLONE_VENDOR_ASSET_COMPLETENESS_RISK');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('AUDIT_ACEH_CLONE_VENDOR_ASSETS_FAILED:', err);
  process.exit(1);
});

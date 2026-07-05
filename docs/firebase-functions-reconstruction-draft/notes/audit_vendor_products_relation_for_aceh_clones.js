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

async function countByField(collection, field, value) {
  try {
    const snap = await db.collection(collection).where(field, '==', value).get();
    return snap.size;
  } catch (e) {
    return 'ERR:' + e.message;
  }
}

async function sampleByField(collection, field, value, limit = 3) {
  try {
    const snap = await db.collection(collection).where(field, '==', value).limit(limit).get();
    const result = [];
    snap.forEach(doc => {
      const d = doc.data() || {};
      result.push({
        id: doc.id,
        name: d.name || d.title || d.productName || '',
        photo: !!(d.photo || d.image || d.photos),
        categoryID: d.categoryID || d.categoryId || '',
        vendorID: d.vendorID || '',
        vendorId: d.vendorId || '',
        vendor_id: d.vendor_id || '',
        restaurant_id: d.restaurant_id || '',
        storeId: d.storeId || ''
      });
    });
    return result;
  } catch (e) {
    return [{ error: e.message }];
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
        title: d.title || '',
        section_id: d.section_id || '',
        sourceVendorId: d.sourceVendorId || ''
      });
    }
  });

  const fields = [
    'vendorID',
    'vendorId',
    'vendor_id',
    'restaurant_id',
    'storeId',
    'store_id',
    'vendor.id',
    'restaurantID'
  ];

  const lines = [];
  let totalCloneVendors = 0;
  let sourceProductsFound = 0;
  let cloneProductsFound = 0;

  lines.push('# FIRESTORE vendor_products RELATION AUDIT');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('Collection checked: vendor_products');
  lines.push('');

  lines.push('## Relation Results');
  lines.push('TEXT_START');

  for (const vendor of cloneVendors.sort((a, b) => (a.section_id || '').localeCompare(b.section_id || ''))) {
    totalCloneVendors++;

    lines.push('');
    lines.push('VENDOR | cloneId=' + vendor.id + ' | title=' + vendor.title + ' | section_id=' + vendor.section_id + ' | sourceVendorId=' + vendor.sourceVendorId);

    for (const field of fields) {
      const cloneCount = await countByField('vendor_products', field, vendor.id);
      let sourceCount = '';

      if (vendor.sourceVendorId) {
        sourceCount = await countByField('vendor_products', field, vendor.sourceVendorId);
      }

      if (typeof cloneCount === 'number') cloneProductsFound += cloneCount;
      if (typeof sourceCount === 'number') sourceProductsFound += sourceCount;

      lines.push('RELATION_COUNT | field=' + field + ' | cloneCount=' + cloneCount + ' | sourceCount=' + sourceCount);

      if (typeof sourceCount === 'number' && sourceCount > 0) {
        const samples = await sampleByField('vendor_products', field, vendor.sourceVendorId, 3);
        for (const s of samples) {
          lines.push('SOURCE_PRODUCT_SAMPLE | field=' + field + ' | productId=' + s.id + ' | name=' + s.name + ' | photo=' + s.photo + ' | categoryID=' + s.categoryID + ' | vendorID=' + s.vendorID + ' | vendorId=' + s.vendorId + ' | vendor_id=' + s.vendor_id + ' | restaurant_id=' + s.restaurant_id + ' | storeId=' + s.storeId);
        }
      }

      if (typeof cloneCount === 'number' && cloneCount > 0) {
        const samples = await sampleByField('vendor_products', field, vendor.id, 3);
        for (const s of samples) {
          lines.push('CLONE_PRODUCT_SAMPLE | field=' + field + ' | productId=' + s.id + ' | name=' + s.name + ' | photo=' + s.photo + ' | categoryID=' + s.categoryID + ' | vendorID=' + s.vendorID + ' | vendorId=' + s.vendorId + ' | vendor_id=' + s.vendor_id + ' | restaurant_id=' + s.restaurant_id + ' | storeId=' + s.storeId);
        }
      }
    }
  }

  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Counters');
  lines.push('TEXT_START');
  lines.push('TOTAL_CLONE_VENDORS_CHECKED: ' + totalCloneVendors);
  lines.push('TOTAL_SOURCE_PRODUCTS_FOUND_ACROSS_FIELDS: ' + sourceProductsFound);
  lines.push('TOTAL_CLONE_PRODUCTS_FOUND_ACROSS_FIELDS: ' + cloneProductsFound);
  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Final Status');
  lines.push(sourceProductsFound > 0 ? 'STATUS: FIRESTORE_VENDOR_PRODUCTS_RELATION_AUDIT_FOUND_SOURCE_PRODUCTS' : 'STATUS: FIRESTORE_VENDOR_PRODUCTS_RELATION_AUDIT_NO_SOURCE_PRODUCTS_FOUND');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('AUDIT_VENDOR_PRODUCTS_RELATION_FAILED:', err);
  process.exit(1);
});

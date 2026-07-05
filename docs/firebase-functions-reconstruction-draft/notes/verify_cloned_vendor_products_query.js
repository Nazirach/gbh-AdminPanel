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
  const vendorsSnap = await db.collection('vendors')
    .where('zoneId', '==', zoneId)
    .get();

  const vendors = [];
  vendorsSnap.forEach(doc => {
    const d = doc.data() || {};
    if ((doc.id || '').startsWith('aceh_clone_') || doc.id === 'custom_banda_aceh_restaurant_demo') {
      vendors.push({
        id: doc.id,
        title: d.title || '',
        section_id: d.section_id || '',
        sourceVendorId: d.sourceVendorId || ''
      });
    }
  });

  const lines = [];
  let totalVendors = 0;
  let vendorsWithProducts = 0;
  let totalProducts = 0;
  let productsWithPhoto = 0;
  let productsWithoutPhoto = 0;

  lines.push('# FIRESTORE CLONED vendor_products QUERY VERIFY');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('Query: vendor_products where vendorID == cloneVendorId');
  lines.push('');

  lines.push('## Query Results');
  lines.push('TEXT_START');

  for (const vendor of vendors.sort((a, b) => (a.section_id || '').localeCompare(b.section_id || ''))) {
    totalVendors++;

    const productSnap = await db.collection('vendor_products')
      .where('vendorID', '==', vendor.id)
      .get();

    if (!productSnap.empty) vendorsWithProducts++;
    totalProducts += productSnap.size;

    lines.push('');
    lines.push('VENDOR_PRODUCT_QUERY | vendorId=' + vendor.id + ' | title=' + vendor.title + ' | section_id=' + vendor.section_id + ' | sourceVendorId=' + vendor.sourceVendorId + ' | productCount=' + productSnap.size);

    productSnap.forEach(doc => {
      const d = doc.data() || {};
      const hasPhoto = !!(d.photo || d.image || d.photos);
      if (hasPhoto) productsWithPhoto++;
      else productsWithoutPhoto++;

      lines.push([
        'PRODUCT',
        'id=' + doc.id,
        'name=' + (d.name || d.title || d.productName || ''),
        'vendorID=' + (d.vendorID || ''),
        'categoryID=' + (d.categoryID || d.categoryId || ''),
        'photo=' + hasPhoto,
        'price=' + (d.price || ''),
        'publish=' + d.publish
      ].join(' | '));
    });
  }

  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Counters');
  lines.push('TEXT_START');
  lines.push('TOTAL_ACEH_VENDORS_CHECKED: ' + totalVendors);
  lines.push('VENDORS_WITH_PRODUCTS: ' + vendorsWithProducts);
  lines.push('TOTAL_CLONED_PRODUCTS_QUERYABLE: ' + totalProducts);
  lines.push('PRODUCTS_WITH_PHOTO: ' + productsWithPhoto);
  lines.push('PRODUCTS_WITHOUT_PHOTO: ' + productsWithoutPhoto);
  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Final Status');
  lines.push(totalProducts >= 47 ? 'STATUS: FIRESTORE_CLONED_VENDOR_PRODUCTS_QUERY_VERIFY_PASS' : 'STATUS: FIRESTORE_CLONED_VENDOR_PRODUCTS_QUERY_VERIFY_RISK');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('VERIFY_CLONED_VENDOR_PRODUCTS_QUERY_FAILED:', err);
  process.exit(1);
});

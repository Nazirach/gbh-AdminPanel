const fs = require('fs');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, Timestamp } = require('firebase-admin/firestore');

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

function sanitizeId(value) {
  return String(value || '')
    .replace(/[^a-zA-Z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .slice(0, 120);
}

function hasValue(v) {
  return v !== undefined && v !== null && String(v).trim() !== '';
}

(async () => {
  const vendorsSnap = await db.collection('vendors')
    .where('zoneId', '==', zoneId)
    .get();

  const cloneVendors = [];

  vendorsSnap.forEach(doc => {
    const d = doc.data() || {};
    if ((doc.id || '').startsWith('aceh_clone_') && hasValue(d.sourceVendorId)) {
      cloneVendors.push({
        cloneId: doc.id,
        title: d.title || '',
        section_id: d.section_id || '',
        sourceVendorId: d.sourceVendorId
      });
    }
  });

  const lines = [];
  let totalCloneVendors = 0;
  let sourceProductsFound = 0;
  let productsWritten = 0;
  let skippedNoSourceProduct = 0;
  let risk = 0;

  lines.push('# FIRESTORE vendor_products CLONE TO ACEH WRITE');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: CONTROLLED FIREBASE WRITE.');
  lines.push('Collection: vendor_products');
  lines.push('Relation field changed: vendorID');
  lines.push('Old products are not mutated.');
  lines.push('');

  lines.push('## Clone Results');
  lines.push('TEXT_START');

  for (const vendor of cloneVendors.sort((a, b) => (a.section_id || '').localeCompare(b.section_id || ''))) {
    totalCloneVendors++;

    const sourceSnap = await db.collection('vendor_products')
      .where('vendorID', '==', vendor.sourceVendorId)
      .get();

    lines.push('');
    lines.push('VENDOR_PRODUCT_CLONE_GROUP | cloneVendorId=' + vendor.cloneId + ' | title=' + vendor.title + ' | sourceVendorId=' + vendor.sourceVendorId + ' | sourceProductCount=' + sourceSnap.size);

    if (sourceSnap.empty) {
      skippedNoSourceProduct++;
      continue;
    }

    for (const productDoc of sourceSnap.docs) {
      sourceProductsFound++;

      const sourceData = productDoc.data() || {};
      const sourceProductId = productDoc.id;
      const newProductId = 'aceh_product_' + sanitizeId(vendor.cloneId) + '_' + sanitizeId(sourceProductId);

      const cloned = {
        ...sourceData,
        id: newProductId,
        vendorID: vendor.cloneId,
        sourceProductId: sourceProductId,
        sourceVendorId: vendor.sourceVendorId,
        clonedFor: 'Banda Aceh demo vendor product display',
        demoSeedBatch: 'STEP46D_20260701',
        updatedAt: Timestamp.now()
      };

      const ref = db.collection('vendor_products').doc(newProductId);
      await ref.set(cloned, { merge: true });

      const afterSnap = await ref.get();
      const after = afterSnap.data() || {};

      const ok =
        after.id === newProductId &&
        after.vendorID === vendor.cloneId &&
        after.sourceProductId === sourceProductId &&
        after.sourceVendorId === vendor.sourceVendorId;

      if (ok) {
        productsWritten++;
      } else {
        risk++;
      }

      lines.push([
        ok ? 'PRODUCT_CLONED_OK' : 'PRODUCT_CLONED_RISK',
        'newProductId=' + newProductId,
        'sourceProductId=' + sourceProductId,
        'cloneVendorId=' + vendor.cloneId,
        'sourceVendorId=' + vendor.sourceVendorId,
        'name=' + (after.name || after.title || after.productName || ''),
        'photo=' + !!(after.photo || after.image || after.photos),
        'categoryID=' + (after.categoryID || after.categoryId || ''),
        'vendorID=' + (after.vendorID || '')
      ].join(' | '));
    }
  }

  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Counters');
  lines.push('TEXT_START');
  lines.push('TOTAL_CLONE_VENDORS_CHECKED: ' + totalCloneVendors);
  lines.push('SOURCE_PRODUCTS_FOUND: ' + sourceProductsFound);
  lines.push('PRODUCTS_WRITTEN_OR_UPDATED: ' + productsWritten);
  lines.push('VENDORS_WITHOUT_SOURCE_PRODUCTS: ' + skippedNoSourceProduct);
  lines.push('RISK: ' + risk);
  lines.push('TEXT_END');
  lines.push('');

  lines.push('## Final Status');
  lines.push(risk === 0 && productsWritten > 0 ? 'STATUS: FIRESTORE_VENDOR_PRODUCTS_CLONE_TO_ACEH_WRITE_PASS' : 'STATUS: FIRESTORE_VENDOR_PRODUCTS_CLONE_TO_ACEH_WRITE_RISK');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('CLONE_VENDOR_PRODUCTS_TO_ACEH_FAILED:', err);
  process.exit(1);
});

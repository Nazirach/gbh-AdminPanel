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

function simplifyVendor(d) {
  if (!d) return null;

  return {
    id: d.id,
    title: d.title,
    section_id: d.section_id,
    zoneId: d.zoneId,
    categoryID: d.categoryID,
    categoryTitle: d.categoryTitle,
    latitude: d.latitude,
    longitude: d.longitude,
    hasCoordinates: !!d.coordinates,
    g: d.g ? {
      geohash: d.g.geohash || null,
      hasGeopoint: !!d.g.geopoint
    } : null,
    publish: d.publish,
    isOpen: d.isOpen,
    enabledDiveInFuture: d.enabledDiveInFuture,
    photo: d.photo
  };
}

(async () => {
  const vendorId = 'custom_banda_aceh_restaurant_demo';
  const latitude = 5.55;
  const longitude = 95.32;
  const point = new GeoPoint(latitude, longitude);
  const geohash = encodeGeohash(latitude, longitude, 9);

  const vendor = {
    id: vendorId,
    title: 'GHALBIT Banda Aceh Food',
    description: 'Demo restaurant vendor inside Banda Aceh service zone for GHALBIT MARITRONIX customer app testing.',
    section_id: '6285ddbfd9598',
    zoneId: 'q8OOxNm1zgyVqggkCibX',
    categoryID: '62cd5926d5186',
    categoryTitle: 'Burger',
    latitude,
    longitude,
    coordinates: point,
    g: {
      geohash,
      geopoint: point
    },
    location: 'Banda Aceh',
    address: 'Banda Aceh, Aceh, Indonesia',
    photo: 'https://via.placeholder.com/512x512.png?text=GHALBIT+Banda+Aceh+Food',
    photos: ['https://via.placeholder.com/512x512.png?text=GHALBIT+Banda+Aceh+Food'],
    restaurantCost: '10',
    enabledDiveInFuture: false,
    specialDiscountEnable: false,
    specialDiscount: [],
    restaurantMenuPhotos: [],
    isOpen: true,
    publish: true,
    reviewsCount: 0,
    reviewsSum: 0,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  };

  const ref = db.collection('vendors').doc(vendorId);
  const beforeSnap = await ref.get();

  const lines = [];
  lines.push('# FIRESTORE BANDA ACEH RESTAURANT VENDOR SEED');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: CONTROLLED FIREBASE WRITE.');
  lines.push('Target: vendors/' + vendorId);
  lines.push('');

  lines.push('## Before');
  lines.push(JSON.stringify(beforeSnap.exists ? simplifyVendor(beforeSnap.data()) : null, null, 2));
  lines.push('');

  await ref.set(vendor, { merge: true });

  const afterSnap = await ref.get();
  const after = afterSnap.data();

  const checks = {
    idOk: after.id === vendorId,
    sectionOk: after.section_id === '6285ddbfd9598',
    zoneOk: after.zoneId === 'q8OOxNm1zgyVqggkCibX',
    categoryOk: after.categoryID === '62cd5926d5186',
    coordinatesOk: !!after.coordinates,
    geohashOk: !!(after.g && after.g.geohash),
    geopointOk: !!(after.g && after.g.geopoint),
    photoOk: !!after.photo,
    openOk: after.isOpen === true,
    publishOk: after.publish === true
  };

  const ok = Object.values(checks).every(Boolean);

  lines.push('## After');
  lines.push(JSON.stringify(simplifyVendor(after), null, 2));
  lines.push('');

  lines.push('## Verification');
  lines.push('VENDOR_ID: ' + vendorId);
  lines.push('ID_OK: ' + checks.idOk);
  lines.push('SECTION_OK: ' + checks.sectionOk);
  lines.push('ZONE_OK: ' + checks.zoneOk);
  lines.push('CATEGORY_OK: ' + checks.categoryOk);
  lines.push('COORDINATES_OK: ' + checks.coordinatesOk);
  lines.push('GEOHASH_OK: ' + checks.geohashOk);
  lines.push('GEOPOINT_OK: ' + checks.geopointOk);
  lines.push('PHOTO_OK: ' + checks.photoOk);
  lines.push('IS_OPEN_OK: ' + checks.openOk);
  lines.push('PUBLISH_OK: ' + checks.publishOk);
  lines.push('GEOHASH: ' + after.g.geohash);
  lines.push('');

  lines.push('## Final Status');
  lines.push(ok ? 'STATUS: FIRESTORE_BANDA_ACEH_RESTAURANT_VENDOR_SEEDED' : 'STATUS: FIRESTORE_BANDA_ACEH_RESTAURANT_VENDOR_SEED_RISK');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('SEED_VENDOR_FAILED:', err);
  process.exit(1);
});

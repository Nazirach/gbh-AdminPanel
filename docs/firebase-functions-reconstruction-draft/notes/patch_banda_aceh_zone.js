const fs = require('fs');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, GeoPoint } = require('firebase-admin/firestore');

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

const patch = {
  id: zoneId,
  name: 'banda aceh',
  latitude: 5.55,
  longitude: 95.32,
  area: [
    new GeoPoint(5.45, 95.20),
    new GeoPoint(5.45, 95.45),
    new GeoPoint(5.70, 95.45),
    new GeoPoint(5.70, 95.20)
  ],
  publish: true
};

function simplifyZone(d) {
  const area = Array.isArray(d.area) ? d.area.map(p => ({
    latitude: p.latitude,
    longitude: p.longitude
  })) : [];

  return {
    id: d.id,
    name: d.name,
    latitude: d.latitude,
    longitude: d.longitude,
    publish: d.publish,
    areaCount: area.length,
    area
  };
}

(async () => {
  const ref = db.collection('zone').doc(zoneId);
  const beforeSnap = await ref.get();

  const lines = [];

  lines.push('# FIRESTORE BANDA ACEH ZONE PATCH');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: CONTROLLED FIREBASE WRITE.');
  lines.push('Target: zone/' + zoneId);
  lines.push('');

  lines.push('## Before');
  lines.push(JSON.stringify(beforeSnap.exists ? simplifyZone(beforeSnap.data()) : null, null, 2));
  lines.push('');

  await ref.set(patch, { merge: true });

  const afterSnap = await ref.get();
  const after = afterSnap.data();

  lines.push('## After');
  lines.push(JSON.stringify(simplifyZone(after), null, 2));
  lines.push('');

  const ok =
    after &&
    after.name === 'banda aceh' &&
    after.latitude === 5.55 &&
    after.longitude === 95.32 &&
    after.publish === true &&
    Array.isArray(after.area) &&
    after.area.length === 4;

  lines.push('## Verification');
  lines.push('ZONE_ID: ' + zoneId);
  lines.push('NAME_OK: ' + (after.name === 'banda aceh'));
  lines.push('LATITUDE_OK: ' + (after.latitude === 5.55));
  lines.push('LONGITUDE_OK: ' + (after.longitude === 95.32));
  lines.push('PUBLISH_OK: ' + (after.publish === true));
  lines.push('AREA_COUNT: ' + (Array.isArray(after.area) ? after.area.length : 0));
  lines.push('AREA_OK: ' + (Array.isArray(after.area) && after.area.length === 4));
  lines.push('');

  lines.push('## Final Status');
  lines.push(ok ? 'STATUS: FIRESTORE_BANDA_ACEH_ZONE_PATCHED' : 'STATUS: FIRESTORE_BANDA_ACEH_ZONE_PATCH_RISK');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('PATCH_ZONE_FAILED:', err);
  process.exit(1);
});

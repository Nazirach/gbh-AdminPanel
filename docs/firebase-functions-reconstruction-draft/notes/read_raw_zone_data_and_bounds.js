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

function simplify(value) {
  if (value === null || value === undefined) return value;

  if (Array.isArray(value)) {
    return value.map(simplify);
  }

  if (typeof value === 'object') {
    if (typeof value.latitude === 'number' && typeof value.longitude === 'number') {
      return { latitude: value.latitude, longitude: value.longitude };
    }
    if (typeof value._latitude === 'number' && typeof value._longitude === 'number') {
      return { latitude: value._latitude, longitude: value._longitude };
    }

    const out = {};
    for (const k of Object.keys(value)) {
      out[k] = simplify(value[k]);
    }
    return out;
  }

  return value;
}

function collectPoints(raw) {
  const points = [];

  function walk(v) {
    if (!v) return;

    if (Array.isArray(v)) {
      v.forEach(walk);
      return;
    }

    if (typeof v === 'object') {
      if (typeof v.latitude === 'number' && typeof v.longitude === 'number') {
        points.push({ latitude: v.latitude, longitude: v.longitude });
        return;
      }

      if (typeof v._latitude === 'number' && typeof v._longitude === 'number') {
        points.push({ latitude: v._latitude, longitude: v._longitude });
        return;
      }

      Object.values(v).forEach(walk);
    }
  }

  walk(raw);
  return points;
}

function bounds(points) {
  if (!points.length) return null;

  const lats = points.map(p => p.latitude);
  const lngs = points.map(p => p.longitude);

  return {
    minLat: Math.min(...lats),
    maxLat: Math.max(...lats),
    minLng: Math.min(...lngs),
    maxLng: Math.max(...lngs),
    latSpan: Math.max(...lats) - Math.min(...lats),
    lngSpan: Math.max(...lngs) - Math.min(...lngs)
  };
}

(async () => {
  const snap = await db.collection('zone').get();

  let lines = [];
  lines.push('# FIRESTORE RAW ZONE DATA AND BOUNDS');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('');

  let total = 0;

  snap.forEach(doc => {
    total++;
    const d = doc.data() || {};
    const simple = simplify(d);
    const points = collectPoints(d);
    const b = bounds(points);

    lines.push('## Zone: ' + doc.id);
    lines.push('');
    lines.push('`	ext');
    lines.push('id=' + doc.id);
    lines.push('name=' + (d.name || ''));
    lines.push('publish=' + d.publish);
    lines.push('pointCount=' + points.length);

    if (b) {
      lines.push('minLat=' + b.minLat);
      lines.push('maxLat=' + b.maxLat);
      lines.push('minLng=' + b.minLng);
      lines.push('maxLng=' + b.maxLng);
      lines.push('latSpan=' + b.latSpan);
      lines.push('lngSpan=' + b.lngSpan);
    } else {
      lines.push('bounds=null');
    }

    lines.push('');
    lines.push('POINTS:');
    points.forEach((p, i) => {
      lines.push((i + 1) + ': lat=' + p.latitude + ' lng=' + p.longitude);
    });

    lines.push('');
    lines.push('RAW_KEYS: ' + Object.keys(d).join(', '));
    lines.push('`');
    lines.push('');

    lines.push('### Simplified JSON');
    lines.push('`json');
    lines.push(JSON.stringify(simple, null, 2));
    lines.push('`');
    lines.push('');
  });

  lines.push('## Counters');
  lines.push('`	ext');
  lines.push('TOTAL_ZONES: ' + total);
  lines.push('`');
  lines.push('');
  lines.push('## Final Status');
  lines.push('STATUS: FIRESTORE_RAW_ZONE_DATA_AND_BOUNDS_READ');

  fs.writeFileSync(process.argv[2], lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('READ_ZONE_FAILED:', err);
  process.exit(1);
});

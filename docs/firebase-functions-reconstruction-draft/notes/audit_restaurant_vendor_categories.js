const fs = require('fs');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const outPath = process.argv[2];
const sectionId = '6285ddbfd9598';

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

(async () => {
  const snap = await db.collection('vendor_categories')
    .where('section_id', '==', sectionId)
    .get();

  let lines = [];
  let total = 0;
  let published = 0;
  let usable = 0;
  let firstUsable = null;

  lines.push('# FIRESTORE RESTAURANT VENDOR CATEGORIES AUDIT');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('');
  lines.push('Target section: Restaurants');
  lines.push('section_id=' + sectionId);
  lines.push('');

  lines.push('## Categories');
  lines.push('`	ext');

  snap.forEach(doc => {
    total++;
    const d = doc.data() || {};
    const isPublished = d.publish === true;
    const hasTitle = hasValue(d.title) || hasValue(d.name);
    const hasId = hasValue(d.id) || hasValue(doc.id);

    if (isPublished) published++;
    if (isPublished && hasTitle && hasId) {
      usable++;
      if (!firstUsable) {
        firstUsable = {
          docId: doc.id,
          id: d.id || doc.id,
          title: d.title || d.name || ''
        };
      }
    }

    lines.push([
      'docId=' + doc.id,
      'id=' + (d.id || ''),
      'title=' + (d.title || d.name || ''),
      'publish=' + d.publish,
      'section_id=' + d.section_id,
      'usable=' + (isPublished && hasTitle && hasId)
    ].join(' | '));
  });

  lines.push('`');
  lines.push('');

  lines.push('## Counters');
  lines.push('`	ext');
  lines.push('TOTAL_RESTAURANT_CATEGORIES: ' + total);
  lines.push('PUBLISHED_RESTAURANT_CATEGORIES: ' + published);
  lines.push('USABLE_RESTAURANT_CATEGORIES: ' + usable);
  lines.push('FIRST_USABLE_CATEGORY_ID: ' + (firstUsable ? firstUsable.id : ''));
  lines.push('FIRST_USABLE_CATEGORY_TITLE: ' + (firstUsable ? firstUsable.title : ''));
  lines.push('`');
  lines.push('');

  lines.push('## Final Status');
  lines.push('STATUS: FIRESTORE_RESTAURANT_VENDOR_CATEGORIES_AUDITED');

  fs.writeFileSync(outPath, lines.join('\r\n'), 'utf8');
  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('AUDIT_RESTAURANT_CATEGORIES_FAILED:', err);
  process.exit(1);
});

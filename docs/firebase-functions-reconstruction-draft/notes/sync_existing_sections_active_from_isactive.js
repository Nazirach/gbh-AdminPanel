const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

if (!credPath || !fs.existsSync(credPath)) {
  console.error('Missing credential file:', credPath);
  process.exit(1);
}

initializeApp({
  credential: cert(require(credPath))
});

const db = getFirestore();

(async () => {
  const snap = await db.collection('sections').orderBy('order').get();

  let lines = [];
  let total = 0;
  let patched = 0;
  let skipped = 0;

  lines.push('# FIRESTORE EXISTING SECTIONS ACTIVE SYNC PATCH');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: CONTROLLED FIREBASE WRITE.');
  lines.push('Rule: only set active = isActive where active is missing and isActive exists.');
  lines.push('');
  lines.push('## Patch Log');
  lines.push('`	ext');

  for (const doc of snap.docs) {
    total++;
    const d = doc.data() || {};
    const activeMissing = d.active === undefined;
    const hasIsActive = d.isActive !== undefined;

    if (activeMissing && hasIsActive) {
      await db.collection('sections').doc(doc.id).update({
        active: d.isActive
      });

      patched++;
      lines.push([
        'PATCHED',
        'id=' + doc.id,
        'name=' + (d.name || ''),
        'order=' + d.order,
        'serviceTypeFlag=' + d.serviceTypeFlag,
        'set active=' + d.isActive
      ].join(' | '));
    } else {
      skipped++;
      lines.push([
        'SKIPPED',
        'id=' + doc.id,
        'name=' + (d.name || ''),
        'active=' + d.active,
        'isActive=' + d.isActive
      ].join(' | '));
    }
  }

  lines.push('`');
  lines.push('');
  lines.push('## Counters');
  lines.push('`	ext');
  lines.push('TOTAL_SECTIONS: ' + total);
  lines.push('PATCHED: ' + patched);
  lines.push('SKIPPED: ' + skipped);
  lines.push('`');
  lines.push('');
  lines.push('## Final Status');
  lines.push('STATUS: FIRESTORE_EXISTING_SECTIONS_ACTIVE_SYNC_PATCHED');

  fs.writeFileSync(process.argv[2], lines.join('\r\n'), 'utf8');

  console.log(lines.join('\n'));
})().catch((err) => {
  console.error('PATCH_FAILED:', err);
  process.exit(1);
});

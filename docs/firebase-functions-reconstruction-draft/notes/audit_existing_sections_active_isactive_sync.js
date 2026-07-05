const admin = require('firebase-admin');
const fs = require('fs');

const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (!credPath || !fs.existsSync(credPath)) {
  console.error('Missing credential file:', credPath);
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(require(credPath))
});

const db = admin.firestore();

(async () => {
  const snap = await db.collection('sections').orderBy('order').get();

  let lines = [];
  let total = 0;
  let ok = 0;
  let mismatch = 0;
  let missingActive = 0;
  let missingIsActive = 0;

  lines.push('# FIRESTORE EXISTING SECTIONS ACTIVE ISACTIVE SYNC AUDIT');
  lines.push('');
  lines.push('Generated: ' + new Date().toISOString());
  lines.push('Mode: READ ONLY. No Firestore write.');
  lines.push('');
  lines.push('## Sections');
  lines.push('`	ext');

  snap.forEach(doc => {
    total++;
    const d = doc.data() || {};
    const active = d.active;
    const isActive = d.isActive;
    const same = active === isActive;

    if (active === undefined) missingActive++;
    if (isActive === undefined) missingIsActive++;
    if (same) ok++; else mismatch++;

    lines.push([
      'id=' + doc.id,
      'name=' + (d.name || ''),
      'order=' + d.order,
      'serviceTypeFlag=' + d.serviceTypeFlag,
      'active=' + active,
      'isActive=' + isActive,
      'same=' + same
    ].join(' | '));
  });

  lines.push('`');
  lines.push('');
  lines.push('## Counters');
  lines.push('`	ext');
  lines.push('TOTAL_SECTIONS: ' + total);
  lines.push('SYNC_OK: ' + ok);
  lines.push('MISMATCH: ' + mismatch);
  lines.push('MISSING_ACTIVE: ' + missingActive);
  lines.push('MISSING_ISACTIVE: ' + missingIsActive);
  lines.push('`');
  lines.push('');
  lines.push('## Final Status');
  lines.push('STATUS: FIRESTORE_EXISTING_SECTIONS_ACTIVE_ISACTIVE_SYNC_AUDITED');

  fs.writeFileSync(process.argv[2], lines.join('\r\n'), 'utf8');

  console.log(lines.join('\n'));
})();

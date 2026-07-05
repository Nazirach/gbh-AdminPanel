# FIRESTORE SECTIONS ADMIN READ ONLY RESULT RERUN

Generated: 06/28/2026 21:13:15

Mode: Firebase Admin SDK read-only rerun after installing firebase-admin. No patch. No deploy. No Firebase manual write. No order creation.

## Credential

- Path: C:\Users\Hp\Downloads\erbete-putra-firebase-adminsdk-zuik0-62f2d0c46c.json
- Important: private_key is not printed.

## Node Read Result

```text
STATUS: FIRESTORE_READ_ERROR
ERROR_NAME: TypeError
ERROR_MESSAGE: Cannot read properties of undefined (reading 'cert')

```

## Meaning

- sections_total_count = total dokumen di collection sections.
- sections_active_ordered_count = jumlah dokumen yang cocok dengan query app: isActive == true + orderBy order.
- Jika active count 0, inilah penyebab Explore Our Services kosong.
- Jika active count lebih dari 0 tetapi app tetap kosong, kita audit SectionModel parse atau field gambar/serviceType.

## Safety Rule

- No write.
- No patch.
- No order creation.
- No driver/vendor app.

## Final Status

STATUS: FIRESTORE_SECTIONS_ADMIN_READ_ONLY_RERUN_DONE
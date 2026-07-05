# ERBETE CLOUD FUNCTION DELETE USER DEPLOY MANUAL PLAN

Generated: 06/28/2026 12:32:57

Mode: deploy-plan-only. No deploy executed. No delete. No commit.

## Target

- Function root: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function
- Functions folder: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions
- Index file: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\index.js
- Index length: 1796
- Index SHA256: EB83A2952FA019650F7C0E7DA952F173F1FBCF93B87CE81330B6DB53ED465204

## Status Lokal

- deleteUser sudah menjadi functions.https.onRequest.
- onCall sudah tidak ada.
- functionsGlobal sudah tidak ada.
- Safe test UID tersedia: __SAFE_TEST_DO_NOT_DELETE__.
- node --check index.js sudah exit code 0.

## Perintah Cek Sebelum Deploy

```powershell
cd "C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function"
firebase projects:list
firebase use
firebase functions:list
node --check .\functions\index.js
```

## Perintah Deploy Manual

Jalankan hanya setelah project Firebase dipastikan benar: erbete-putra.

```powershell
cd "C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function"
firebase deploy --only functions:deleteUser --project erbete-putra
```

## Perintah Safe Test Setelah Deploy

Safe test ini memakai UID dummy dan tidak menghapus Firebase Auth.

```powershell
$body = @{ uid = "__SAFE_TEST_DO_NOT_DELETE__" } | ConvertTo-Json
Invoke-RestMethod -Method Post -Uri "https://us-central1-erbete-putra.cloudfunctions.net/deleteUser" -ContentType "application/json" -Body $body
```

Target response:

```json
{
  "status": true,
  "message": "SAFE_TEST_OK: endpoint reached, Firebase Auth delete bypassed."
}
```

## Larangan

- Jangan deploy sebelum memastikan firebase use/project benar.
- Jangan pakai UID user asli untuk test awal.
- Jangan jalankan delete user dari app dulu.
- Jangan git add .
- Jangan commit/push.
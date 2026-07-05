# ERBETE DELETE USER SOURCE CALL AUDIT

Generated: 06/28/2026 13:41:10

Mode: audit-only. No patch. No delete. No deploy. No commit.

## Tujuan

Mengaudit semua pemanggilan deleteUser / delete-user di source Flutter, Laravel, Firebase Functions, dan konfigurasi terkait.

## Search Roots

- C:\deploy exists: True
- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work exists: True

## Search Patterns

- deleteUser
- delete-user
- httpsCallable
- onCall
- onRequest
- cloudFunctions
- FirebaseFunctions
- functions.httpsCallable
- HttpsCallable
- api/delete-user
- deleteUserFromDb

## Results

### ROOT: C:\deploy

## Summary

- Total matches: 0

## Decision Guide

Jika mayoritas app/panel memakai HTTP POST ke /deleteUser atau /api/delete-user:
- Lebih masuk akal mempertahankan onRequest, tetapi perlu endpoint baru atau delete/recreate function lama.

Jika mayoritas app memakai Firebase callable SDK / httpsCallable('deleteUser'):
- Lebih aman mengembalikan Cloud Function ke onCall agar tidak perlu patch banyak app.

Jika ada campuran callable + HTTP:
- Rekomendasi paling aman biasanya membuat function baru deleteUserHttp dan menjaga deleteUser lama sampai semua app dipatch.

## Status

STATUS: DELETE_USER_CALL_AUDIT_NO_MATCHES

Larangan:
- Belum patch source.
- Belum delete function.
- Belum deploy ulang.
- Belum safe test.
- Jangan test UID user asli.
- Jangan git add .
- Jangan commit/push.
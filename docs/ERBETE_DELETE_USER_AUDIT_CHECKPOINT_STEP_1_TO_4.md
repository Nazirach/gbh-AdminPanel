# ERBETE DELETE USER AUDIT CHECKPOINT STEP 1 TO 4

Generated: 06/28/2026 14:16:05

Mode: checkpoint-only. No patch. No delete. No deploy. No commit.

## Step 1 - Firebase Function Local

- Path: Order Tracking Firebase Function/functions/index.js
- deleteUser: YES
- Trigger local: onRequest HTTP
- onCall local: NO
- safe test UID: YES
- serviceAccountKey: NO
- admin.initializeApp(): YES
- Fungsi utama: hapus Firebase Auth user melalui admin.auth().deleteUser(uid)

## Step 2 - Admin Panel

- Path: C:\deploy\adminpanel
- delete-user route: tidak ditemukan pada quick check route/controller utama
- Kesimpulan sementara: Admin Panel bukan jalur utama delete-user

## Step 3 - Store Panel

- Path: C:\deploy\storepanel
- Route: POST /delete-user
- Controller: ApiController@deleteUserFromDb
- Input: uuid
- Validasi: uuid wajib ada di vendor_users
- Aksi: hapus users berdasarkan user_id, lalu hapus vendor_users
- Safe test: __SAFE_TEST_DO_NOT_DELETE__

## Step 4 - Website Panel

- Path: C:\deploy\websitepanel
- Route: POST /delete-user
- Controller: ApiController@deleteUserFromDb
- Input: uuid
- Validasi: uuid wajib ada di vendor_users
- Aksi: hapus users berdasarkan user_id, lalu hapus vendor_users
- Safe test: __SAFE_TEST_DO_NOT_DELETE__

## Peta Sementara

- Firebase Function deleteUser menghapus Firebase Auth.
- Store Panel / Website Panel /delete-user menghapus MySQL users dan vendor_users.
- Admin Panel belum terlihat memakai delete-user.
- Source Flutter masih perlu dicari untuk memastikan apakah app memanggil callable deleteUser atau HTTP endpoint.

## Status

STATUS: DELETE_USER_AUDIT_STEP_1_TO_4_CHECKPOINT_CREATED

Larangan:
- Belum patch source.
- Belum delete function.
- Belum deploy ulang.
- Belum safe test.
- Jangan test UID user asli.
- Jangan git add .
- Jangan commit/push.
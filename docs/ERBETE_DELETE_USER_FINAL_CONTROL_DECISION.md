# ERBETE DELETE USER FINAL CONTROL DECISION

Generated: 06/28/2026 05:25:42

Mode: audit-only. No patch. No deploy. No delete. No commit.

## Kesimpulan Utama

Delete User pada ekosistem Erbete/eMart saat ini adalah HYBRID tetapi belum terkunci penuh.

Jalur yang ditemukan:

1. Customer App
   - Memanggil websiteUrl/api/delete-user.
   - Lalu memanggil FireStoreUtils.deleteUser.
   - FireStoreUtils.deleteUser mengarah ke Cloud Function deleteUser.

2. Restaurant/Vendor App
   - Memanggil storeUrl/api/delete-user.
   - Lalu memanggil FireStoreUtils.deleteUser.
   - FireStoreUtils.deleteUser mengarah ke Cloud Function deleteUser.

3. Driver App
   - Memiliki jalur FirebaseAuth.instance.currentUser?.delete langsung.
   - Juga memiliki indikasi pemanggilan Cloud Function deleteUser.

4. Store Panel dan Website Panel
   - Memiliki Laravel API POST /api/delete-user.
   - Controller deleteUserFromDb memvalidasi uuid pada vendor_users.
   - Controller menghapus users dan vendor_users di MySQL.

5. Cloud Function
   - Source ditemukan di Order Tracking Firebase Function/functions/index.js.
   - exports.deleteUser memakai functions.https.onCall.
   - Function menjalankan admin.auth().deleteUser(data.uid).

## Masalah Kritis

1. Mismatch pemanggilan Cloud Function
   - App terlihat memanggil endpoint cloudfunctions.net/deleteUser memakai http.post.
   - Source function memakai functions.https.onCall.
   - onCall seharusnya dipanggil dengan Firebase callable client SDK, bukan HTTP POST biasa.

2. Bug pada error handler Cloud Function
   - Source memakai functionsGlobal.https.HttpsError.
   - functionsGlobal tidak terlihat didefinisikan.
   - Jika terjadi error, function bisa gagal karena ReferenceError.

3. Tanggung jawab delete masih terpecah
   - Laravel API menghapus MySQL.
   - App/Firestore menghapus dokumen.
   - Cloud Function menghapus Firebase Auth.
   - Driver App masih memiliki delete Firebase Auth langsung dari client.

## Keputusan Kendali

Jalur final yang disarankan:

1. Client app tidak boleh menjadi penghapus utama Firebase Auth.
2. Laravel API tetap bertugas menghapus relasi MySQL users/vendor_users.
3. Firestore delete harus dikunci berdasarkan role dan collection yang jelas.
4. Firebase Auth harus dihapus oleh Cloud Function resmi.
5. Cloud Function harus dipilih salah satu:
   - Ubah app agar memakai callable SDK sesuai onCall; atau
   - Ubah Cloud Function menjadi onRequest agar cocok dengan http.post.

## Jalur Aman Sementara

HYBRID TERKENDALI:

1. Validasi UID Firebase.
2. Kirim uuid ke Laravel API:
   - Customer ke websiteUrl/api/delete-user.
   - Restaurant/Vendor ke storeUrl/api/delete-user.
3. Laravel API menghapus MySQL users/vendor_users.
4. Firestore menghapus dokumen users/vendors/wallet sesuai role.
5. Cloud Function menghapus Firebase Auth.

## Larangan Sebelum Patch

- Jangan hapus user asli.
- Jangan deploy Cloud Function.
- Jangan ubah app delete-user sebelum memilih onCall atau onRequest.
- Jangan git add .
- Jangan commit/push.

## Patch yang Nantinya Dibutuhkan

1. Perbaiki Cloud Function deleteUser.
2. Samakan cara panggil app dengan tipe function.
3. Hilangkan delete FirebaseAuth langsung dari client, terutama Driver App.
4. Tambahkan fallback/log audit agar kegagalan MySQL, Firestore, atau Auth tidak diam-diam.
5. Buat safe test memakai dummy UUID, bukan user asli.
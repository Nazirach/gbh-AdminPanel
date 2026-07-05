# ERBETE DELETE USER PATCH PLAN

Generated: 06/28/2026 05:26:52

Mode: planning-only. No patch. No deploy. No delete. No commit.

## Dasar Keputusan

Dokumen ini dibuat setelah audit:

- ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
- ERBETE_DELETE_USER_DECISION_MAP.md
- ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
- ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
- ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md

## Masalah yang Harus Diselesaikan

1. App memanggil Cloud Function deleteUser memakai HTTP POST.
2. Source Cloud Function memakai functions.https.onCall.
3. Error handler memakai functionsGlobal yang tidak terlihat didefinisikan.
4. Driver App masih punya jalur FirebaseAuth.instance.currentUser?.delete langsung.
5. Delete user masih terpecah antara Laravel API, Firestore, dan Firebase Auth.

## Pilihan Patch

### Pilihan A: Ubah app memakai callable SDK

Kelebihan:
- Cocok dengan source Cloud Function saat ini.

Kekurangan:
- Harus ubah Customer App, Driver App, dan Restaurant/Vendor App.
- Risiko lebih besar karena menyentuh tiga app mobile.

### Pilihan B: Ubah Cloud Function menjadi onRequest

Kelebihan:
- Cocok dengan pola app saat ini yang memakai http.post.
- Perubahan lebih terpusat di Cloud Function.
- Lebih mudah dibuat safe response JSON.

Kekurangan:
- Harus menambahkan validasi request agar tidak bisa dipanggil sembarang pihak.

## Rekomendasi

Gunakan Pilihan B: Cloud Function deleteUser menjadi functions.https.onRequest.

Alasan:
- Paling sedikit mengubah app.
- Selaras dengan http.post yang sudah ada.
- Bisa dibuat response JSON yang konsisten.

## Desain Jalur Final

1. App mengirim uuid/uid ke Laravel API sesuai app:
   - Customer App ke websiteUrl/api/delete-user.
   - Vendor App ke storeUrl/api/delete-user.

2. Laravel API menghapus MySQL:
   - users
   - vendor_users

3. App menjalankan FireStoreUtils.deleteUser:
   - hapus dokumen Firestore sesuai role.
   - panggil Cloud Function deleteUser.

4. Cloud Function deleteUser menghapus Firebase Auth:
   - validasi method POST.
   - baca uid dari body.
   - jalankan admin.auth().deleteUser(uid).
   - balas JSON status true/false.

## Guard Wajib

- Tidak boleh menerima uid kosong.
- Tidak boleh memakai user asli untuk test.
- Harus ada dummy/safe test.
- Harus log error secara jelas.
- Harus return JSON, bukan silent fail.

## Patch Bertahap

Tahap 1:
- Backup source Cloud Function index.js.
- Buat patch deleteUser onRequest.
- Jangan deploy dulu.

Tahap 2:
- Audit kembali hasil patch secara lokal.
- Pastikan tidak ada functionsGlobal.
- Pastikan response JSON.

Tahap 3:
- Baru siapkan perintah deploy manual.
- Deploy hanya jika sudah disetujui.

Tahap 4:
- Patch Driver App agar tidak memakai currentUser.delete langsung dari client.
- Arahkan Driver App ke Cloud Function resmi.

## Larangan

- Jangan deploy otomatis.
- Jangan hapus user asli.
- Jangan patch app sebelum Cloud Function final dikunci.
- Jangan git add .
- Jangan commit/push.
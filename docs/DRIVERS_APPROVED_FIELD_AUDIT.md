# DRIVERS_APPROVED_FIELD_AUDIT

## Tujuan Audit
Menentukan kenapa route `/drivers/approved` menampilkan `0`, sementara `/drivers` dan `/drivers/pending` menampilkan `31` driver.

## Metode Audit
1. Audit browser cloud dicoba pada:
   - `https://gbh-adminpanel-main-ieebco.laravel.cloud/drivers?v=approved-audit-01`
2. Hasil browser menunjukkan `window.firebaseDb` tidak tersedia pada halaman cloud saat audit, sehingga query console langsung dari browser tidak bisa dieksekusi pada sesi ini.
3. Untuk tetap mendapatkan bukti nyata tanpa mengubah data, dilakukan audit **read-only** langsung ke Firestore memakai service account proyek yang sama.
4. Source code driver page juga dibaca untuk mencocokkan field yang dipakai filter approved.

## Jumlah Driver yang Terbaca
- Driver hasil query `users where role == "driver" limit 31`: **31 dokumen**

## Field Status/Verifikasi yang Ditemukan di Dokumen `users`
Dari 31 driver yang diaudit, field berikut diperiksa:
- `active`
- `isDocumentVerify`
- `isAutoVerify`
- `isVerified`
- `verified`
- `documentVerified`
- `documentVerification`
- `documentStatus`
- `status`
- `isOwner`

### Ringkasan Nilai
- `active === true`: **21 driver**
- `isDocumentVerify === true`: **0 driver**
- `isAutoVerify === true`: **0 driver**
- `isVerified === true`: **0 driver**
- `verified === true`: **0 driver**
- `documentVerified === true`: **0 driver**
- memiliki field `documentVerification`: **0 driver**
- memiliki field `documentStatus`: **0 driver**
- memiliki field `status`: **0 driver**
- `status === "approved"`: **0 driver**
- `status === "active"`: **0 driver**
- `documentStatus === "approved"`: **0 driver**
- `documentVerification === "approved"`: **0 driver**

## Temuan Penting di Source Code
Pada `resources/views/drivers/index.blade.php`:

### Filter approved saat ini
Fungsi `isDriverApproved(driverData)` memeriksa:
- `isDocumentVerify === true`
- `isAutoVerify === true`
- `isVerified === true`
- `verified === true`
- `documentVerified === true`
- `documentVerification === 'approved'`
- `documentStatus === 'approved'`
- `status === 'approved'`

### Sumber verifikasi lain di halaman yang sama
Helper `getDocumentStatusIcon(driverId)` justru membaca collection:
- `documents_verify/{driverId}`
- lalu memeriksa `documents[*].status === 'approved'`

Ini berarti source code sendiri sudah menunjukkan **dua model verifikasi**:
1. field boolean/string di dokumen `users`
2. dokumen terpisah di `documents_verify`

## Audit Tambahan Collection `documents_verify`
Untuk 31 driver yang sama:
- dokumen `documents_verify/{driverId}` yang ditemukan: **0**
- driver dengan semua dokumen berstatus `approved`: **0**
- driver dengan status dokumen `rejected`: **0**
- driver tanpa dokumen verifikasi / collection entry: **31**

## Kesimpulan Teknis
### Apakah approved kosong karena data memang belum approved?
**Ya, berdasarkan 31 driver yang diaudit, tidak ada satu pun tanda approval yang tersimpan**:
- tidak ada flag approved di `users`
- tidak ada dokumen verifikasi di `documents_verify`

### Apakah kode membaca field yang salah?
**Sebagian iya, tapi bukan itu satu-satunya penyebab.**
- Kode `/drivers/approved` saat ini membaca field approval dari `users`
- Namun source yang sama juga mengakui model verifikasi berbasis `documents_verify`
- Masalah utamanya: **data approval memang kosong di kedua tempat** untuk sampel 31 driver

## Rekomendasi Field Paling Aman untuk `/drivers/approved`
### Rekomendasi utama
Gunakan **collection `documents_verify`** sebagai sumber utama status approval, karena itu lebih spesifik untuk verifikasi dokumen driver:
- `documents_verify/{driverId}.documents[*].status === 'approved'`
- Driver dianggap approved bila semua dokumen wajib berstatus `approved`

### Jangan gunakan sebagai pengganti approval
- `active === true`

Alasan:
- `active` menunjukkan status aktif operasional, bukan verifikasi dokumen
- Pada data nyata ada **21 driver active**, tetapi **0 driver approved**
- Mengganti approved dengan active akan menghasilkan false positive

### Fallback yang masih aman bila nanti data mulai terisi
Jika ingin kompatibilitas bertahap, fallback bisa dipertimbangkan dalam urutan ini:
1. `documents_verify` all approved
2. `isAutoVerify === true`
3. `isDocumentVerify === true`

Tetapi untuk audit saat ini, ketiganya masih **0**.

## Rekomendasi Patch (Jangan Diterapkan Dulu)
1. Ubah `/drivers/approved` agar tidak hanya bergantung pada field di `users`
2. Jadikan `documents_verify` sebagai sumber approval utama
3. Pertahankan fallback ke `isAutoVerify` / `isDocumentVerify` untuk kompatibilitas data lama jika nanti muncul
4. Jangan memakai `active` sebagai approval filter kecuali ada keputusan bisnis baru

## Keputusan Audit
- `/drivers/approved` kosong **bukan terutama karena bug filter semata**, tetapi karena **data approval/verifikasi memang belum ada** pada 31 driver yang diaudit
- Field yang paling tepat untuk model approved ke depan adalah:
  - **`documents_verify.documents[].status`**
- Bukan `active`

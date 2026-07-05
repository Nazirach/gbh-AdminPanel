# DELETE_USER URL → RECEIVER MATCHING REPORT

## 1. Tujuan laporan
Menyusun matching final berdasarkan audit read-only:
1) Admin caller mana memakai **storeUrl / websiteUrl / providerUrl**.
2) Receiver mana yang cocok untuk endpoint **/api/delete-user**:
   - storeUrl → Store Panel
   - websiteUrl → Website Panel
   - providerUrl → belum terkonfirmasi (receiver gap)
3) Verifikasi risiko jika URL salah.
4) Verifikasi risiko jika **uuid Firestore/Auth** tidak sama dengan **vendor_users.uuid**.
5) Menyediakan checklist manual untuk membaca Firestore `settings/Version` tanpa mengubah data.
6) Menyediakan rekomendasi patch minimal berikutnya (TIDAK patch dalam tahap ini).

## 2. Mode
- BASELINE-SAFE READ ONLY
- Tidak patch
- Tidak refactor
- Tidak install package
- Tidak install Composer/NPM
- Tidak migration
- Tidak ubah Firebase/database
- Tidak ubah env
- Tidak commit/push
- Tidak hapus file source
- Tidak menyentuh Tax Report dan Module Selector
- Tidak mengubah data Firestore dan SQL/database

## 3. Ringkasan peta sistem
**Admin Panel** → Firestore `settings/Version` → **storeUrl/websiteUrl/providerUrl** → `/api/delete-user` → (Store/Website receiver) → SQL `vendor_users.uuid` → hapus: `users` (via user_id dari vendor_users) + `vendor_users`.

Catatan: Cloud Function `deleteUser` juga dipanggil oleh client (terlihat dari audit flow).

## 4. Caller map (di Admin Panel)
- `employee/index.blade.php` → `settings/Version.storeUrl` → `{storeUrl}/api/delete-user`
- `stores/index.blade.php` → `settings/Version.storeUrl` → `{storeUrl}/api/delete-user`
- `vendors/index.blade.php` → `settings/Version.storeUrl` → `{storeUrl}/api/delete-user`
- `users/index.blade.php` → `settings/Version.websiteUrl` → `{websiteUrl}/api/delete-user`
- `providers/index.blade.php` → `settings/Version.providerUrl` → `{providerUrl}/api/delete-user`

## 5. Receiver map dari ZIP asli (yang terkonfirmasi)
Dari audit konteks sebelumnya (ZIP asli):
- **Store Panel**
  - `routes/api.php` → `Route::post('/delete-user', [ApiController::class, 'deleteUserFromDb'])`
  - `app/Http/Controllers/ApiController.php` → implementasi `deleteUserFromDb`
  - URL efektif: **`/api/delete-user`** (base dari `storeUrl`)
- **Website Panel**
  - `routes/api.php` → `Route::post('/delete-user', [ApiController::class, 'deleteUserFromDb'])`
  - `app/Http/Controllers/ApiController.php` → implementasi `deleteUserFromDb`
  - URL efektif: **`/api/delete-user`** (base dari `websiteUrl`)
- **Provider receiver**
  - belum terkonfirmasi di ZIP asli
  - perlu cocokkan nilai `providerUrl` di Firestore terhadap repo/panel provider yang benar

## 6. Payload matching (uuid/auth → vendor_users.uuid)
Admin mengirim:
- `POST {baseUrl}/api/delete-user`
- body: `{ "uuid": <Firebase user document id / id> }`

Receiver memvalidasi:
- `uuid` wajib ada di **SQL table `vendor_users.uuid`**

Matching condition yang HARUS konsisten:
- nilai yang dikirim oleh Admin (id/uuid dari Firestore/Auth) harus sama persis dengan nilai `vendor_users.uuid`.

Jika mismatch:
- validasi gagal
- SQL user/vendor_users tidak terhapus (atau gagal total)

## 7. Risiko jika URL salah
Jika `settings/Version.*Url` tidak cocok dengan backend yang benar:
- Admin browser mengirim POST ke domain/panel yang salah
- API `/api/delete-user` gagal (4xx/5xx) atau menghapus data di sistem yang tidak diharapkan (tergantung implementasi receiver)
- data Firestore bisa sudah terhapus sebelum external delete berhasil → **data sinkronisasi cross-system rusak**

## 8. Risiko jika uuid Firestore/Auth tidak cocok dengan vendor_users.uuid
Jika payload `{uuid: ...}` tidak match:
- receiver gagal validasi `uuid` di `vendor_users.uuid`
- SQL `users` dan/atau `vendor_users` tidak terhapus
- Cloud Function `deleteUser` (jika dipanggil) tetap dapat menghapus di sistem lain → potensi orphan data / mismatch kondisi

## 9. Provider gap
Terbukti:
- Admin Panel membangun endpoint provider dari `settings/Version.providerUrl`.
Namun:
- receiver `providerUrl/api/delete-user` belum terlihat di ZIP asli yang terkonfirmasi (Store/Website hanya yang ditemukan).

Yang perlu dicari (read-only):
- nilai real `providerUrl` dari Firestore `settings/Version`
- cari repo/deploy target provider yang memiliki route `/api/delete-user`

## 10. Security note (ringkas)
- `settings/Version.*Url` bersifat security-critical karena menentukan host tujuan delete.
- receiver `/api/delete-user` idealnya memakai auth/authorization, bukan hanya percaya `uuid`.
- jangan hanya mengandalkan client-side ordering; karena delete Firestore dilakukan sebelum external delete bisa sukses.

## 11. Rekomendasi patch berikutnya (BELUM dilakukan)
Belum patch sesuai instruksi.
- PATCH 1: Guard URL di caller (blok request bila base URL kosong/invalid)
- PATCH 2: Standard error handler `delete-user` agar semua module mem-parsing response dengan konsisten
- PATCH 3: Validasi/normalisasi URL saat save di `global.blade.php`
- PATCH 4: Audit security receiver Store/Website (auth/authorization & sanitasi input/output)
- PATCH 5: Audit provider receiver setelah providerUrl terkonfirmasi
- PATCH 6: Perbaikan orchestration delete idempotent/deterministic lintas Firestore + external API + Cloud Function

## 12. Checklist manual Firestore (tanpa ubah data)
Checklist link:
- `docs/FIRESTORE_SETTINGS_VERSION_URL_CHECKLIST.md`

## 13. Kesimpulan
- Caller map sudah jelas untuk storeUrl dan websiteUrl.
- Receiver matching Store/Website (ZIP asli) sudah terkonfirmasi untuk endpoint `/api/delete-user`.
- `providerUrl` receiver masih gap.
- Nilai real URL harus diambil manual dari Firestore `settings/Version` untuk memastikan domain yang benar.
- Jangan test POST `/api/delete-user` dengan uuid asli.


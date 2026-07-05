# DELETE USER FLOW CROSS-MODULE AUDIT REPORT

## 1. Tujuan audit
Audit read-only detail flow endpoint **`/api/delete-user`** pada semua file pemakai untuk menghapus user lintas module:
- employee
- providers
- stores
- users
- vendors

Fokus audit:
- endpoint yang dibangun
- base URL yang dipakai: `storeUrl` atau `websiteUrl`
- payload JSON
- field `uuid`/`id` yang dikirim
- kapan dipanggil
- error handling
- apakah ada fallback jika URL kosong
- apakah ada Cloud Function `deleteUser` tambahan
- risiko data tidak sinkron

## 2. Mode read-only
- Tidak patch.
- Tidak refactor.
- Tidak install package.
- Tidak composer install.
- Tidak npm install.
- Tidak migration.
- Tidak ubah Firebase/database.
- Tidak ubah env.
- Tidak commit/push.
- Tidak hapus file source.
- Tidak menyentuh **Tax Report** dan **Module Selector**.

## 3. Git status ringkas
Hasil `git status --porcelain -b` (saat audit):
```text
## main...origin/main [ahead 1]
 M resources/views/layouts/app.blade.php
 M resources/views/reports/tax-reports.blade.php
?? TODO.md
?? docs/GLOBAL_BLADE_WEBSITE_SETTINGS_EXCERPTS.txt
?? docs/GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
?? docs/MODULE_SELECTOR_DARK_THEME_FIX_REPORT.md
?? docs/MODULE_SELECTOR_ICON_FINAL_VERIFY_REPORT.md
?? docs/MODULE_SELECTOR_ICON_VISIBILITY_FIX_REPORT.md
?? docs/MODULE_SELECTOR_IMAGE_FALLBACK_FIX_REPORT.md
?? docs/MODULE_SELECTOR_IMAGE_FALLBACK_VERIFY_REPORT.md
?? docs/MODULE_SELECTOR_UI_VERIFY_REPORT.md
?? docs/POWER_SHELL_DELETE_USER_ENDPOINT_DISCOVERY.ps1
?? docs/STORE_WEBSITE_PANEL_AUDIT_START.md
?? docs/STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
?? docs/TAX_REPORT_DEBUG_FIX_REPORT.md
?? docs/TAX_REPORT_TABLE_AND_DATERANGEPICKER_FIX_REPORT.md
?? docs/TAX_REPORT_TABLE_HEADER_CONTRAST_REPORT.md
?? docs/TAX_REPORT_TABLE_HEADER_FINAL_VISUAL_FIX_REPORT.md
?? docs/TAX_REPORT_UI_DATE_INPUT_VERIFY_REPORT.md
?? docs/WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
?? docs/WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT.md
?? docs/WEBSITE_SETTINGS_FIELD_HITS.csv
?? docs/WEBSITE_SETTINGS_FIELD_MAPPING_REPORT.md
?? docs/WEBSITE_SETTINGS_GIT_STATUS.txt
?? docs/WEBSITE_STORE_URL_USAGE_HITS.csv
?? docs/_bb_tmp_pwsh_wrapper.ps1
?? docs/_bb_tmp_website_settings_audit_final.ps1
?? docs/_bb_tmp_website_settings_field_hits.ps1
?? docs/_bb_tmp_website_store_url_usage_hits.ps1
```

## 4. File yang diaudit
Sesuai mapping task:
1) `resources/views/employee/index.blade.php`
2) `resources/views/stores/index.blade.php`
3) `resources/views/vendors/index.blade.php`
4) `resources/views/users/index.blade.php`
5) `resources/views/providers/index.blade.php`

## 5. Excerpt file
- `docs/DELETE_USER_FLOW_EXCERPTS.txt`

## 6. Tabel per file (endpoint/payload/error)

> Catatan: semua pemanggilan delete-user berjalan dari sisi client (Blade -> JS) dengan `jQuery.ajax` dan juga memanggil Cloud Function `deleteUser`.

| module | file | base URL field | endpoint yang dibangun | payload JSON | field id/uuid | kapan dipanggil | Cloud Function deleteUser | error handling | fallback jika URL kosong |
|---|---|---|---|---|---|---|---|---|---|
| employee | resources/views/employee/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": driverId}` | `driverId` (Firebase doc id untuk user role employee/driver) | dipanggil di `deleteDriverData(driverId)` setelah delete document users (checkbox/Trash) | Ya: `https://us-central1-${projectId}.cloudfunctions.net/deleteUser` payload `{"data":{"uid": driverId}}` | SQL endpoint: `error: console.log('...'+ error.responseJSON.message)`; Cloud Function: parse `xhr.responseText` lalu log `responseText.error` | Tidak ada fallback: request SQL hanya berjalan jika `settingData && settingData.storeUrl` |
| providers | resources/views/providers/index.blade.php | `settings/Version.providerUrl` | `providerUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (users doc id untuk role provider) | dipanggil di `deleteUserData(userId)` setelah delete subcollections + wallet/favorite_provider/etc. | Ya: Cloud Function deleteUser `{"data":{"uid": userId}}` | SQL endpoint: `error.responseJSON.message` log; Cloud Function: parse `xhr.responseText` lalu log `responseText.error` | Tidak ada fallback jika `providerUrl` kosong |
| stores | resources/views/stores/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": item_data.id}` | `item_data.id` (uid user role vendor yang terkait storeId) | dipanggil di `deleteStoreData(storeId)` setelah resolve vendor user (query users where vendorID/storeId role vendor) | Ya: Cloud Function deleteUser `{"data":{"uid": item_data.id}}` | SQL endpoint: `error.responseJSON.message` log; Cloud Function: parse `xhr.responseText` lalu log `responseText.error` | Tidak ada fallback jika `settingData.storeUrl` kosong |
| users | resources/views/users/index.blade.php | `settings/Version.websiteUrl` | `websiteUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase doc id untuk role customer) | dipanggil di `deleteUserData(userId)` setelah delete wallet docs | Ya: Cloud Function deleteUser `{"data":{"uid": userId}}` | SQL endpoint: `error: console.log(error)` (lebih lemah: tidak akses `responseJSON.message`); Cloud Function: parse `xhr.responseText` lalu log `error.responseJSON.message` | Tidak ada fallback jika `settingData.websiteUrl` kosong |
| vendors | resources/views/vendors/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase doc id untuk role vendor) | dipanggil di `deleteUserData(userId, VendorId)` setelah delete relasi wallet/favorite_vendor dan opsional vendor subdocs | Ya: Cloud Function deleteUser `{"data":{"uid": userId}}` | SQL endpoint: `error.responseJSON.message` log; Cloud Function: parse `xhr.responseText` lalu log `responseText.error` | Tidak ada fallback jika `settingData.storeUrl` kosong |

## 7. Flow umum delete user
Urutan umum yang terlihat pada client side:
1) Delete Firestore documents/relasi (dan beberapa delete dengan image cleanup melalui `deleteDocumentWithImage(...)`).
2) Panggil endpoint eksternal delete-user untuk MySQL/server:
   - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`
   - body: `{ "uuid": <firebase_user_doc_id> }`
3) Panggil Cloud Function `deleteUser`:
   - `https://us-central1-${projectId}.cloudfunctions.net/deleteUser`
   - body: `{ "data": { "uid": <firebase_user_doc_id> } }`

## 8. Risiko sinkronisasi (cross-system)
Temuan utama: client melakukan delete Firestore dan request eksternal **secara asynchronous tanpa waiting yang konsisten** antar sistem.

Risiko:
1) **External API gagal** (jQuery.ajax error) tapi Firestore sudah terhapus.
2) **Cloud Function gagal** tapi Firestore sudah terhapus dan endpoint eksternal (jika ada) mungkin sudah gagal/berhasil.
3) **Firestore terhapus lebih dulu**, tidak ada rollback.
4) **Payload uuid/uid mismatch**:
   - Semua modul mengirim `uuid`/`uid` = **`userId`** yang berasal dari Firestore document id.
   - Jika Cloud Function / API backend mengharapkan format uid lain (mis. Firebase Auth UID vs Firestore doc id), maka sinkronisasi gagal.
5) **Base URL kosong/salah**:
   - SQL endpoint hanya dipanggil jika base URL tersedia (`storeUrl/websiteUrl/providerUrl`). Bila kosong, request SQL tidak terkirim.
6) **Partial delete**:
   - Modul vendors/stores/providers menghapus banyak collection berbeda (wallet/favorite/provider_services/etc.) sebelum/di tengah pemanggilan endpoint eksternal.

## 9. Temuan paling berbahaya
1) **Tidak ada guard/verification end-to-end**:
   - Delete Firestore dilakukan sebelum memastikan `delete-user` (API) dan `deleteUser` (Cloud Function) sukses.
2) **Kemungkinan mismatch semantic `uuid` vs `uid`**:
   - Payload MySQL/API menggunakan field `uuid`, payload Cloud Function menggunakan `data.uid`.
   - Keduanya memakai nilai yang sama (`driverId/userId/item_data.id`), namun tidak ada validasi di client.
3) **Error handling tidak seragam**:
   - Modul `users` hanya `console.log(error)` pada SQL endpoint (tanpa mengambil `responseJSON.message`).
   - Akibatnya troubleshooting sinkronisasi sulit.

## 10. Rekomendasi patch tahap berikutnya (tidak dilakukan sekarang)
(Rencana perbaikan; sesuai instruksi audit ini **tidak patch**.)
1) Guard URL yang lebih ketat:
   - jika base URL kosong, tampilkan UI error dan/atau log ke server.
2) Standardize payload:
   - pastikan `uuid` dan `uid` didefinisikan sebagai nilai yang sama (Firebase Auth UID) atau map dari Firestore doc.
3) Standardize error handling:
   - parse error response konsisten di semua modul.
4) Centralize helper delete flow:
   - urutan (Firestore vs API vs Cloud Function) dibuat deterministic dan konsisten.
5) Logging/reporting:
   - kumpulkan success/failure per sistem agar audit berikutnya bisa memvalidasi sinkronisasi.
6) Potential ordering improvement:
   - pertimbangkan jangan hapus Firestore sebelum external/Auth confirmed (jika memungkinkan).

## 11. Konfirmasi kepatuhan terhadap larangan
- Tidak patch.
- Tidak install.
- Tidak migration.
- Tidak commit/push.
- Tidak ubah Firebase/database.

## 12. Lokasi laporan akhir
- `docs/DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md`


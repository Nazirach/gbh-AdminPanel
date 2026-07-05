# DELETE USER SECURITY PATCH PLAN FINAL

## 1. Tujuan
Menjadikan delete-user lintas Admin/Store/Website/Firebase lebih aman, terkendali, dan tidak mudah menyebabkan data pecah.

## 2. Scope
- Admin Panel **caller**
- Store Panel **receiver**
- Website Panel **receiver**
- Firestore settings/Version
- SQL **vendor_users.uuid**
- Cloud Function **deleteUser**

## 3. Non-scope
- Tax Report
- Module Selector
- migrasi database
- perubahan Firebase langsung
- perubahan SQL langsung

## 4. Current architecture map

**Admin Panel**
→ Firestore settings/Version
→ storeUrl / websiteUrl / providerUrl
→ `/api/delete-user` (dibangun client-side)
→ Store/Website receiver
→ SQL vendor_users.uuid
→ `users` + `vendor_users` delete
→ Cloud Function `deleteUser`
→ Firebase Auth delete

Catatan: delete flow terlihat melibatkan kombinasi delete Firestore (client-side) lalu pemanggilan endpoint eksternal (`/api/delete-user` + Cloud Function `deleteUser`) secara async.

## 5. Risk register

| Risk ID | Risiko | Severity | Dampak | Bukti | Patch proposal |
|---|---|---|---|---|---|
| R1 | Dynamic URL dari Firestore settings/Version | High | Request delete bisa diarahkan ke host yang salah / gagal sinkron | Admin Panel membangun `storeUrl/websiteUrl/providerUrl + "/api/delete-user"` | PHASE 1: caller guard (trim, scheme http/https, blok kosong/null) + hentikan UI sukses bila invalid |
| R2 | Receiver tanpa auth/token terlihat | High | Endpoint delete-user dapat dieksekusi tanpa kontrol akses end-to-end | Temuan audit: external /api/delete-user terlihat dipanggil tanpa token/header auth dari client | PHASE 3: receiver wajib auth/authorization (audit & implementasi backend) + rate limit |
| R3 | Partial delete async | High | Firestore terhapus tetapi external API/Cloud Function gagal → data cross-system tidak konsisten | Audit: ordering async dan tidak konsisten, tanpa rollback | PHASE 5: idempotent & status handling yang jelas + (opsional future) orchestrate deterministic |
| R4 | uuid mismatch (uuid/uid semantic) | Medium/High | SQL delete tidak match vendor_users.uuid | Audit: payload `{uuid: ...}` pada `/api/delete-user` vs payload Cloud Function `{data:{uid: ...}}` | PHASE 5: receiver enforce mapping/validation; PHASE 1: caller validasi format uuid/uid |
| R5 | Potensi XSS dari concatenation HTML | Medium | XSS di UI jika field Firestore/response dipasang mentah ke HTML | Audit: string concatenation HTML | PHASE 6: escapeHTML helper + safe render; prioritas file users/vendors/stores/providers/employee |
| R6 | Console log membocorkan error internal | Low/Medium | Kebocoran informasi ke browser/console | Audit: log error internal di client | PHASE 2: standard error parser, jangan tampilkan stack/internal; kurangi console atau gunakan pesan aman |
| R7 | `JSON.parse(xhr.responseText)` tanpa try/catch | Medium | UI crash / flow delete terganggu | Audit: JSON.parse tanpa try/catch | PHASE 2: helper `parseAjaxError(xhr)` + try/catch + fallback message aman |
| R8 | providerUrl receiver gap | Medium | Delete via providerUrl bisa tidak mencapai backend yang benar | Audit: providerUrl receiver belum terkonfirmasi | PHASE 7: konfirmasi mapping providerUrl → receiver; bila belum ada disable & warning jelas |

## 6. Patch phase plan

### PHASE 1 — Caller guard, low risk
- Validasi base URL sebelum request
- Hanya izinkan `http/https`
- Blok kosong/null (jangan build URL seperti `"/api/delete-user"`)
- Tampilkan error yang jelas ke admin user
- Jangan reload/success jika external delete gagal

### PHASE 2 — Standard error parser
- Buat helper `parseAjaxError(xhr)`
- `try/catch` untuk `JSON.parse`
- Fallback message aman (tanpa stack/internal)
- Jangan tampilkan stack/internal error ke user

### PHASE 3 — Receiver security audit/patch
- Store/Website `/api/delete-user` perlu auth
- Opsi token API internal
- Opsi verifikasi Firebase ID token
- Allowlist domain/origin **tidak cukup** sendiri
- Tambahkan rate limiting

### PHASE 4 — URL save validation
- `global.blade.php` harus trim URL
- remove trailing slash
- validasi scheme
- (opsional) allowlist domain
- Jangan simpan URL kosong jika fitur delete-user butuh aktif

### PHASE 5 — Idempotent delete receiver
- Jika uuid tidak ditemukan, response jelas (mis. 404/200+status)
- Hindari 500 untuk input tidak valid
- Rollback tetap aman (server-side)
- Logging server-side untuk audit

### PHASE 6 — XSS mitigation
- `escapeHTML` helper
- Jangan concat Firestore fields langsung ke HTML
- Validasi safe image URL (jika ada)
- Target file prioritas:
  - `users/vendors/stores/providers/employee`

### PHASE 7 — Provider gap decision
- Pastikan providerUrl diarahkan ke receiver yang benar
- Jika belum ada receiver: disable external delete provider sementara atau beri warning jelas
- Jangan biarkan silently skip

## 7. Minimal patch pertama yang direkomendasikan
Pilih patch pertama paling aman (tanpa ubah backend, tanpa ubah payload uuid, tanpa ubah route Laravel):
- **Caller guard** + **standard error parser**
- Tujuan:
  - mencegah request ke URL invalid/kosong
  - mencegah crash akibat `JSON.parse`
  - mencegah UI menganggap sukses ketika receiver gagal

## 8. File kandidat patch PHASE 1
Kandidat caller (tanpa refactor besar):
- `Admin Panel/resources/views/employee/index.blade.php`
- `Admin Panel/resources/views/providers/index.blade.php`
- `Admin Panel/resources/views/stores/index.blade.php`
- `Admin Panel/resources/views/users/index.blade.php`
- `Admin Panel/resources/views/vendors/index.blade.php`

Jika helper global bisa dibuat tanpa risiko (opsional; butuh verifikasi struktur layout):
- `resources/views/layouts/app.blade.php`
atau buat helper lokal per file terlebih dahulu.

## 9. Patch acceptance criteria
Patch dianggap aman jika:
- Tidak mengubah query Firestore utama
- Tidak mengubah `deleteDocumentWithImage`
- Tidak mengubah Cloud Function URL
- Tidak mengubah payload `uuid`/`uid`
- Tidak mengubah route Laravel
- Hanya menambah guard URL dan error handling
- Browser console **tidak crash** saat response bukan JSON
- UI **tidak** menganggap sukses jika receiver gagal

## 10. Test plan manual
Tanpa delete data asli:
- Gunakan base URL mock/invalid lokal (mis. kosong/berubah) **tanpa mengubah Firestore production**
- Review code path:
  - validasi URL sebelum `$.ajax`
  - error handling saat xhr error / response bukan JSON
- Pakai uuid dummy yang tidak ada di environment aman
- Cek console:
  - tidak ada exception `JSON.parse` crash
- Cek UI:
  - alert/error tampil jelas jika URL invalid
  - tidak ada indikasi sukses saat external delete gagal

## 11. Kesimpulan
- Patch pertama sebaiknya: **caller guard + error parser**.
- Receiver auth perlu audit/persiapan lebih lanjut (PHASE 3).
- `providerUrl` receiver gap harus dikonfirmasi sebelum provider delete dianggap aman.
- `C:\project\eMart_V6.7_Source_Code` adalah baseline pengembangan; perubahan harus tetap minimal dan tidak menyentuh komponen non-scope.


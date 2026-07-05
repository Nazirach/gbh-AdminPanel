# DELETE USER SECURITY EXECUTIVE SUMMARY

## Masalah utama
Delete-user lintas sistem (Firestore/Client → endpoint eksternal `/api/delete-user` → SQL `vendor_users.uuid` → Cloud Function `deleteUser` → Firebase Auth) dipicu dari Admin Panel dengan:
- URL tujuan dibangun dinamis dari Firestore `settings/Version` (storeUrl/websiteUrl/providerUrl)
- Endpoint eksternal `/api/delete-user` terlihat dipanggil tanpa kontrol auth/token yang jelas dari sisi client
- Error handling tidak seragam dan ada potensi UI crash (`JSON.parse(xhr.responseText)` tanpa try/catch)
- Ordering async berpotensi membuat hanya sebagian sistem terhapus

## Risiko tertinggi
1) **Dynamic URL** dapat mengarahkan delete ke host yang salah atau tidak aktif
2) **Receiver tanpa auth/token yang memadai** → berisiko akses tidak sah
3) **Partial delete async** → data lintas sistem tidak sinkron
4) Potensi **XSS** & **error leakage** via console

## Patch pertama (paling aman & low risk)
- **Caller guard + standard error parser** di sisi Admin Panel:
  - validasi scheme `http/https`, blok URL kosong/null
  - try/catch untuk parsing error JSON
  - pastikan UI tidak menganggap sukses jika external receiver gagal

## Hal yang tidak boleh dilakukan (sesuai larangan)
- Tidak patch backend receiver, tidak ubah route, tidak ubah payload uuid/uid
- Tidak refactor besar
- Tidak install/migration/npm/composer
- Tidak ubah Firebase/database/env
- Tidak test POST `/api/delete-user` dengan uuid asli
- Tidak menyentuh Tax Report dan Module Selector

## Keputusan yang perlu dari owner
1) Apakah **storeUrl/websiteUrl/providerUrl** di Firestore `settings/Version` sudah benar dan sesuai receiver backend masing-masing?
2) Apakah receiver `/api/delete-user` boleh diberi token auth (internal token) atau verifikasi Firebase ID token?
3) Apakah `providerUrl` memang punya backend/receiver sendiri untuk `/api/delete-user`, atau harus dinonaktifkan sementara?

## Konfirmasi kepatuhan
Dokumen rencana patch ini dibuat tanpa modifikasi code, tanpa melakukan patch, dan mengikuti batasan non-scope.


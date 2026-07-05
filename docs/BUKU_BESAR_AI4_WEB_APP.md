# BUKU BESAR AI-4 — WEB APP / WEBSITE PANEL

## Identitas Pekerjaan
- Worker ID: AI-4
- Fokus: Web App / Website / Landing Page
- Project Root: C:\deploy\adminpanel
- Mode kerja awal: AUDIT_ONLY
- Status awal: Web app ditemukan, patch belum dilakukan.

## Area Kerja AI-4
AI-4 hanya boleh menangani:
- Landing page
- Website panel
- Homepage template
- Footer template
- CMS halaman publik
- Layout tampilan web
- Asset public website
- Gambar, CSS, JS untuk tampilan website

## Area Dilarang Disentuh
AI-4 tidak boleh mengubah:
- Firebase Rules
- Firestore Data
- Firebase credentials
- Flutter app
- Payment gateway
- Cron scheduler
- Admin core logic
- Order calculation
- Tax calculation
- Wallet
- Payout
- Driver dispatch
- Vendor order query
- google-services.json
- firebase_options.dart

## Prinsip Kerja AI-4
1. Tidak patch sebelum audit file target.
2. Tidak menyentuh modul di luar web app.
3. Semua temuan dicatat di Buku Besar.
4. Semua perubahan wajib punya marker.
5. Semua perubahan wajib punya rollback plan.
6. Semua patch harus kecil, terukur, dan tidak mengubah data bisnis.

## Marker Resmi AI-4
- PHP: // AI4_WEB_APP_PATCH
- CSS: /* AI4_WEB_APP_PATCH */
- Blade: {{-- AI4_WEB_APP_PATCH --}}

## Log Pekerjaan

### AI4-0001 — Baseline Audit Web App
- Tanggal: 2026-07-06
- Mode: AUDIT_ONLY
- Status: SELESAI
- Tujuan:
  Membaca struktur awal web app / website / landing page yang belum tersentuh.

### File/folder yang dicek
- composer.json
- artisan
- routes/web.php
- resources/views
- resources/views/cms
- resources/views/homepage_Template
- resources/views/footerTemplate
- resources/views/layouts
- public
- app/Http/Controllers

### Temuan
- Root project valid di C:\deploy\adminpanel.
- routes/web.php ditemukan.
- Route utama / mengarah ke HomeController@index.
- Route homepageTemplate ditemukan dan mengarah ke SettingsController@homepageTemplate.
- View homepage template mengarah ke homepage_Template.index.
- Route CMS ditemukan dan mengarah ke CmsController.
- View CMS ditemukan: cms.index, cms.edit, cms.create.
- Folder footerTemplate ditemukan.
- Public asset ditemukan: assets, css, images, js, scss, storage.
- Buku Besar AI-4 sebelumnya belum ada.

### Risiko
- Web app masih menyatu dengan admin panel dalam satu Laravel project.
- Salah patch pada layouts dapat mempengaruhi admin panel.
- Salah patch pada SettingsController dapat mempengaruhi setting lain.
- Salah patch pada CMS dapat mempengaruhi data publik.
- Harus dilakukan audit lebih dalam sebelum perubahan tampilan.

### Keputusan
- Belum melakukan patch.
- AI-4 hanya mencatat baseline.
- Langkah berikutnya adalah audit file detail HomeController, SettingsController, CmsController, dan Blade terkait.

### Status
SELESAI

## Daftar File Target Prioritas AI-4

| No | File/Folder | Fungsi | Status |
|---|---|---|---|
| 1 | routes/web.php | Peta route web/admin | Sudah terdeteksi |
| 2 | app/Http/Controllers/HomeController.php | Pengendali halaman utama | Perlu audit detail |
| 3 | app/Http/Controllers/SettingsController.php | Pengendali homepage/footer/settings | Perlu audit detail |
| 4 | app/Http/Controllers/CmsController.php | Pengendali CMS | Perlu audit detail |
| 5 | resources/views/homepage_Template | Template homepage | Perlu audit detail |
| 6 | resources/views/footerTemplate | Template footer | Perlu audit detail |
| 7 | resources/views/cms | CMS page | Perlu audit detail |
| 8 | resources/views/layouts | Layout utama | Perlu hati-hati |
| 9 | public/assets | Asset website | Perlu audit detail |
| 10 | public/images | Gambar website | Perlu audit detail |

## Status Akhir Sementara
- Baseline web app: DITEMUKAN
- Buku Besar: DIBUAT
- Patch: BELUM
- Mode berikutnya: DETAIL_AUDIT

---

### AI4-0002 — Detail Audit Web App
- Tanggal: 2026-07-06
- Mode: DETAIL_AUDIT
- Status: RUNNING
- Tujuan:
  Membaca controller dan Blade utama untuk memetakan bagian web app sebelum patch.
- File target:
  - app/Http/Controllers/HomeController.php
  - app/Http/Controllers/SettingsController.php
  - app/Http/Controllers/CmsController.php
  - resources/views/homepage_Template
  - resources/views/footerTemplate
  - resources/views/cms
  - resources/views/layouts
  - public
- Keputusan:
  Belum patch. Audit detail sedang dilakukan.

---

### AI4-0003 — Website Panel Direction Lock
- Tanggal: 2026-07-06
- Mode: ARCHITECTURE_LOCK
- Status: SELESAI
- Keputusan utama:
  AI-4 akan membangun Website Panel sebagai jalur paralel, bukan mengubah admin panel atau vendor panel.

## Arah Website Panel
Website Panel akan dibuat dengan jalur terpisah:
- Route prefix: /website-panel
- Controller baru: WebsitePanelController
- View baru: resources/views/website_panel
- Layout baru: resources/views/layouts/website_panel.blade.php
- Asset baru: public/website-panel

## Area yang Tidak Boleh Diganggu
AI-4 tidak boleh mengubah:
- Admin dashboard
- Vendor panel
- Store panel
- Order module
- Payment module
- Firebase config
- Firestore data
- Flutter app
- Cron scheduler
- Wallet
- Payout
- Tax
- Driver dispatch

## Area Aman Untuk AI-4
AI-4 boleh membuat file baru:
- app/Http/Controllers/WebsitePanelController.php
- resources/views/website_panel/
- resources/views/layouts/website_panel.blade.php
- public/website-panel/
- docs/AI4_WEBSITE_PANEL_*.md

## Prinsip
1. Tidak mengubah route lama.
2. Tidak mengubah controller lama sebelum ada alasan kuat.
3. Tidak memakai layout admin global untuk Website Panel.
4. Tidak menyentuh vendor/store panel.
5. Semua perubahan wajib dicatat di Buku Besar.
6. Semua patch wajib kecil dan bisa rollback.

## Status
ARAH WEBSITE PANEL DIKUNCI.
SIAP LANJUT KE SAFE_TOUCH_MAP.

---

### AI4-0004 — Website Panel Safe Touch Map
- Tanggal: 2026-07-06
- Mode: SAFE_TOUCH_MAP
- Status: SELESAI
- Patch: BELUM
- Dokumen:
  docs/AI4_WEBSITE_PANEL_SAFE_TOUCH_MAP.md
- Keputusan:
  AI-4 boleh membuat Website Panel sebagai jalur baru yang terpisah.
  AI-4 hanya boleh menambah route baru dengan prefix /website-panel.
  AI-4 belum boleh mengubah admin, vendor, order, payment, Firebase, Flutter, cron, wallet, payout, tax, atau dispatch.
- Langkah berikutnya:
  WEBSITE PANEL SCAFFOLDING.

---

### AI4-0005 — Website Panel Scaffolding
- Tanggal: 2026-07-06
- Mode: SCAFFOLDING
- Status: SELESAI
- Patch: TERBATAS DAN TERISOLASI
- File baru:
  - app/Http/Controllers/WebsitePanelController.php
  - resources/views/layouts/website_panel.blade.php
  - resources/views/website_panel/
  - public/website-panel/
- File lama disentuh:
  - routes/web.php
- Marker:
  - AI4_WEBSITE_PANEL_ROUTE
  - AI4_WEB_APP_PATCH
- Keputusan:
  Website Panel dibuat sebagai jalur paralel dengan prefix /website-panel.
  Tidak mengubah admin panel, vendor panel, order, payment, Firebase, Flutter, cron, wallet, payout, tax, atau dispatch.
- Laporan:
  docs/AI4_WEBSITE_PANEL_SCAFFOLDING_REPORT.md
- Langkah berikutnya:
  READ_ONLY_PREVIEW.

---

### AI4-0006 — WebsitePanelController BOM Repair
- Tanggal: 2026-07-06
- Mode: FIX_ONLY
- Status: SELESAI
- Masalah:
  WebsitePanelController.php gagal validasi PHP karena file dibuat dengan UTF-8 BOM oleh PowerShell 5.1.
- Error:
  Namespace declaration statement has to be the very first statement.
- Perbaikan:
  Menulis ulang WebsitePanelController.php memakai UTF-8 tanpa BOM.
- Area terdampak:
  Hanya app/Http/Controllers/WebsitePanelController.php
- Area tidak disentuh:
  Admin panel, vendor panel, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.
- Validasi:
  php -l app/Http/Controllers/WebsitePanelController.php
  php artisan optimize:clear
  php artisan route:list --path=website-panel

---

### AI4-0010 — Website Panel Local Scaffold Isolation
- Tanggal: 2026-07-06
- Mode: ROUTE_ISOLATION_ONLY
- Status: SELESAI
- Masalah:
  Website Panel route sudah ada, tetapi akses lokal tertahan error roleName null dari CheckUserRoleMiddleware untuk userId 6.
- Keputusan:
  Untuk scaffolding lokal, route /website-panel diisolasi dari CheckUserRoleMiddleware.
- File disentuh:
  routes/web.php
- Backup:
  docs/ai4_backups/web.php.before_ai4_local_scaffold_*.bak
- Area tidak disentuh:
  Admin panel, vendor panel, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.
- Catatan:
  Ini hanya untuk validasi scaffolding lokal. Sebelum production, auth/permission Website Panel harus dibuat resmi.

---

### AI4-0011 — Website Panel Route Asset Collision Fix
- Tanggal: 2026-07-06
- Mode: COLLISION_FIX_ONLY
- Status: SELESAI
- Masalah:
  Route /website-panel bentrok dengan folder public/website-panel.
  PHP built-in server membaca public/website-panel sebagai folder fisik sehingga request /website-panel tidak masuk ke Laravel route.
- Perbaikan:
  Memindahkan asset dari public/website-panel ke public/ai4-website-panel.
  Mengubah layout resources/views/layouts/website_panel.blade.php agar memakai asset('ai4-website-panel/...').
- File disentuh:
  - resources/views/layouts/website_panel.blade.php
  - public/ai4-website-panel/
  - public/website-panel/ dihapus setelah dipindah
- Area tidak disentuh:
  Admin panel, vendor panel, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.
- Keputusan:
  Route tetap /website-panel.
  Asset tidak boleh lagi memakai folder public/website-panel agar tidak bentrok dengan route.

---

### AI4-0013 — Website Panel Asset Rebuild
- Tanggal: 2026-07-06
- Mode: ASSET_FIX_ONLY
- Status: SELESAI
- Masalah:
  Halaman Website Panel sudah HTTP 200 OK, tetapi asset CSS/JS /ai4-website-panel masih 404.
- Perbaikan:
  Membuat ulang file:
  - public/ai4-website-panel/css/website-panel.css
  - public/ai4-website-panel/js/website-panel.js
- Area tidak disentuh:
  Admin panel, vendor panel, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.
- Validasi:
  curl.exe -i http://127.0.0.1:8014/ai4-website-panel/css/website-panel.css
  curl.exe -i http://127.0.0.1:8014/ai4-website-panel/js/website-panel.js

---

### AI4-0015 — Website Panel Full Asset Validation
- Tanggal: 2026-07-06
- Mode: FINAL_SCAFFOLD_VALIDATION
- Status: SELESAI
- Hasil:
  Website Panel berhasil berjalan penuh.
- Validasi HTTP:
  - /website-panel = 200 OK
  - /ai4-website-panel/css/website-panel.css = 200 OK
  - /ai4-website-panel/js/website-panel.js = 200 OK
- Komponen aktif:
  - WebsitePanelController
  - routes /website-panel
  - layout website_panel
  - dashboard Website Panel
  - homepage panel
  - footer panel
  - CMS panel
  - preview panel
  - CSS khusus AI-4
  - JS khusus AI-4
- Masalah yang berhasil diselesaikan:
  - Controller UTF-8 BOM error
  - Route /website-panel terbaca Laravel
  - Bentrok folder public/website-panel dengan route /website-panel
  - Asset dipindah ke public/ai4-website-panel
  - Server lokal dijalankan ulang hingga asset terbaca
- Area tidak disentuh:
  - Admin panel
  - Vendor panel
  - Store panel
  - Order
  - Payment
  - Firebase
  - Flutter
  - Cron
  - Wallet
  - Payout
  - Tax
  - Driver dispatch
- Catatan keamanan:
  Website Panel saat ini masih mode scaffolding lokal.
  Sebelum production harus dibuat auth/permission resmi.
- Langkah berikutnya:
  READ_ONLY_PREVIEW.

---

### AI4-0016 — Website Panel Read Only Preview Audit
- Tanggal: 2026-07-06
- Mode: READ_ONLY_AUDIT
- Status: SELESAI
- Output: docs/AI4_WEBSITE_PANEL_READ_ONLY_PREVIEW_AUDIT.md
- Area tidak disentuh: Admin, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.
- Langkah berikutnya: Membuat ringkasan peta data lama untuk ditampilkan di Website Panel secara read-only.

---

### AI4-0017 — Website Panel Legacy Map Read Only
- Tanggal: 2026-07-06
- Mode: READ_ONLY_PANEL
- Status: SELESAI
- Route baru: /website-panel/legacy-map
- Fungsi: Menampilkan peta homepage lama, footer lama, CMS lama, controller lama, dan route terkait secara read-only.
- File disentuh: WebsitePanelController.php, routes/web.php, resources/views/website_panel/legacy_map.blade.php, sidebar.blade.php, public/ai4-website-panel/css/website-panel.css.
- Area tidak disentuh: Admin, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.
- Langkah berikutnya: Membuat preview lama yang tetap read-only.

---

### AI4-0017B — Legacy Map Validation
- Tanggal: 2026-07-06
- Mode: VALIDATION
- Status: SELESAI
- Validasi:
  - resources/views/website_panel/legacy_map.blade.php = ADA
  - /website-panel/legacy-map = 200 OK
- Hasil:
  Legacy Map berhasil membaca controller lama, folder view lama, homepage template lama, footer template lama, CMS lama, layouts lama, dan route terkait secara read-only.
- Catatan:
  Ditemukan dua blok AI4_WEBSITE_PANEL_ROUTE di routes/web.php. Sistem masih berjalan, tetapi nanti perlu dirapikan agar peta kerja AI-4 tidak ganda.
- Area tidak disentuh:
  Admin, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.
- Langkah berikutnya:
  AI4-0018 Read Only Legacy Preview.

---

### AI4-0017C — Website Panel Route Hygiene Audit
- Tanggal: 2026-07-06
- Mode: READ_ONLY_AUDIT
- Status: SELESAI
- Output: docs/AI4_WEBSITE_PANEL_ROUTE_HYGIENE_AUDIT.md
- Tujuan: Memetakan route AI-4 yang ganda sebelum lanjut AI4-0018.
- Area tidak disentuh: Admin, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0017C — Website Panel Route Hygiene Audit
- Tanggal: 2026-07-06
- Mode: READ_ONLY_AUDIT
- Status: SELESAI
- Output: docs/AI4_WEBSITE_PANEL_ROUTE_HYGIENE_AUDIT.md
- Tujuan: Memetakan route AI-4 yang ganda sebelum lanjut AI4-0018.
- Area tidak disentuh: Admin, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0017D — Website Panel Route Cleanup
- Tanggal: 2026-07-06
- Mode: CLEANUP_WITH_BACKUP
- Status: SELESAI
- Masalah: Ditemukan dua blok AI4_WEBSITE_PANEL_ROUTE di routes/web.php.
- Perbaikan: Menghapus blok lama /website-panel yang memakai middleware auth dan mempertahankan blok local scaffolding AI-4 serta legacy-map.
- Backup: docs/ai4_backups/web.php.before_ai4_route_cleanup_*.bak
- Validasi: route:list --path=website-panel dan curl semua endpoint Website Panel.
- Area tidak disentuh: Admin, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.
- Langkah berikutnya: AI4-0018 Read Only Legacy Preview.

---

### AI4-GIT-0001 — Git Read Only Audit
- Tanggal: 2026-07-06
- Mode: READ_ONLY_GIT_AUDIT
- Status: SELESAI
- Branch aktif: main
- Jumlah file berubah menurut git status --short: 174
- Commit terakhir: 0832f52 Support legacy tax scope in tax report

- Output: docs/AI4_GIT_STATUS_REPORT.md
- Tidak ada commit, push, pull, reset, checkout, merge, atau perubahan kode aplikasi.
- Area tidak disentuh: Admin, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-GIT-0001B — Git Report File Check Repair
- Tanggal: 2026-07-06
- Mode: READ_ONLY_REPORT_REPAIR
- Status: SELESAI
- Masalah: Bagian AI-4 Related Files Check pada docs/AI4_GIT_STATUS_REPORT.md gagal karena pipeline foreach PowerShell 5.1.
- Perbaikan: Melengkapi ulang daftar file AI-4 dalam report Git.
- Tidak ada commit, push, pull, reset, checkout, merge, atau perubahan kode aplikasi.
- Area tidak disentuh: Admin, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-GIT-0002 — AI-4 Commit Candidate Audit
- Tanggal: 2026-07-06
- Mode: READ_ONLY_COMMIT_CANDIDATE_AUDIT
- Status: SELESAI
- Output: docs/AI4_GIT_COMMIT_CANDIDATE_AUDIT.md
- Tujuan: Memisahkan kandidat file AI-4 dari 174 perubahan Git sebelum ada keputusan commit.
- Tidak ada git add, commit, push, pull, reset, checkout, atau merge.

---

### AI4-0019 — Website Panel Preview Source Refinement
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Route: /website-panel/preview
- Perbaikan: Preview tidak lagi placeholder kosong; sekarang menampilkan read-only source preview.
- File disentuh: resources/views/website_panel/preview.blade.php, public/ai4-website-panel/css/website-panel.css
- Output: docs/AI4_WEBSITE_PANEL_PREVIEW_SOURCE_REFINEMENT_REPORT.md
- Area tidak disentuh: Admin, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0020 — Website Panel Homepage Refinement
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Route: /website-panel/homepage
- Perbaikan: Homepage tidak lagi scaffold kosong; sekarang menampilkan homepage control draft dan public preview.
- File disentuh: resources/views/website_panel/homepage.blade.php, public/ai4-website-panel/css/website-panel.css
- Output: docs/AI4_WEBSITE_PANEL_HOMEPAGE_REFINEMENT_REPORT.md
- Area tidak disentuh: Admin, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0021 — Project Root Realignment
- Tanggal: 2026-07-06
- Mode: READ_ONLY_ROOT_REALIGNMENT
- Status: SELESAI
- Runtime project root: C:\deploy\adminpanel
- Git ecosystem docs root: C:\Users\Hp\Documents\Codex\2026-06-12\ai04-emart-panel-safe-fresh
- Keputusan: patch Website Panel harus dilakukan di C:\deploy\adminpanel.
- Output: docs/AI4_PROJECT_ROOT_REALIGNMENT_REPORT.md
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0021B — Project Root File Check Repair
- Tanggal: 2026-07-06
- Mode: READ_ONLY_REPORT_REPAIR
- Status: SELESAI
- Runtime project root: C:\deploy\adminpanel
- Perbaikan: Melengkapi ulang File Penting Website Panel pada docs/AI4_PROJECT_ROOT_REALIGNMENT_REPORT.md.
- Tidak ada source code aplikasi yang diubah.
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0022 — Website Panel Visual State Verify
- Tanggal: 2026-07-06
- Mode: VERIFY_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Tujuan: Verifikasi marker dan konten HTML untuk homepage dan preview setelah AI4-0019/AI4-0020.
- Output: docs/AI4_WEBSITE_PANEL_VISUAL_STATE_VERIFY_REPORT.md
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0024 — Ghalbit Maritronix Brand Realignment
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Koreksi: Proyek bukan Mitera Keluarga, melainkan GHALBIT MARITRONIX.
- File disentuh: resources/views/website_panel/homepage.blade.php, resources/views/website_panel/footer.blade.php
- Output: docs/AI4_GHALBIT_MARITRONIX_BRAND_REALIGNMENT_REPORT.md
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0025 — Ghalbit Maritronix CMS Refinement
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Route: /website-panel/cms
- Perbaikan: CMS diarahkan ke halaman publik GHALBIT MARITRONIX.
- File disentuh: resources/views/website_panel/cms.blade.php, public/ai4-website-panel/css/website-panel.css
- Output: docs/AI4_GHALBIT_MARITRONIX_CMS_REFINEMENT_REPORT.md
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0025 — Ghalbit Homepage Function Map
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Route: /website-panel/homepage
- Perbaikan: Menambahkan peta fungsi homepage GHALBIT MARITRONIX.
- File disentuh: resources/views/website_panel/homepage.blade.php, public/ai4-website-panel/css/website-panel.css
- Output: docs/AI4_GHALBIT_HOMEPAGE_FUNCTION_MAP_REPORT.md
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0026 — Ghalbit Integrated Public Preview
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Route: /website-panel/preview
- Perbaikan: Preview menjadi landing page visual GHALBIT MARITRONIX.
- File disentuh: resources/views/website_panel/preview.blade.php, public/ai4-website-panel/css/website-panel.css
- Output: docs/AI4_GHALBIT_INTEGRATED_PUBLIC_PREVIEW_REPORT.md
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0027 — Ghalbit Website Panel Navigation Refinement
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Perbaikan: Sidebar dan topbar diselaraskan dengan GHALBIT MARITRONIX.
- File disentuh: resources/views/website_panel/partials/sidebar.blade.php, resources/views/website_panel/partials/topbar.blade.php, public/ai4-website-panel/css/website-panel.css
- Output: docs/AI4_GHALBIT_WEBSITE_PANEL_NAVIGATION_REFINEMENT_REPORT.md
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0028 — Ghalbit Investor Readiness Section
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Route: /website-panel/preview
- Perbaikan: Menambahkan section Investor Readiness untuk narasi aset teknologi dan kemitraan strategis.
- File disentuh: resources/views/website_panel/preview.blade.php, public/ai4-website-panel/css/website-panel.css
- Output: docs/AI4_GHALBIT_INVESTOR_READINESS_SECTION_REPORT.md
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0029 — Ghalbit Revenue and Partnership Section
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Route: /website-panel/preview
- Perbaikan: Menambahkan Revenue Model dan Strategic Partnership section.
- File disentuh: resources/views/website_panel/preview.blade.php, public/ai4-website-panel/css/website-panel.css
- Output: docs/AI4_GHALBIT_REVENUE_AND_PARTNERSHIP_SECTION_REPORT.md
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0030 — OPI Ghalbit Maritime Service Narrative Lock
- Tanggal: 2026-07-06
- Mode: DOCUMENTATION_LOCK_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Tujuan: Mengunci narasi OPI + GHALBIT MARITRONIX agar Website Panel tidak keluar dari arah awal.
- Output: docs/AI4_OPI_GHALBIT_MARITIME_SERVICE_NARRATIVE_LOCK.md
- Narasi inti: OPI sebagai operator strategis layanan pelayaran; GHALBIT MARITRONIX sebagai platform teknologi, control center, data center, AI, drone, peta, dan integrasi laut-darat.
- Target: Selat Malaka, Aceh, Indonesia, dan koridor pelayaran global.
- Area tidak disentuh: source code, Firebase, Admin core, vendor, order, payment, Flutter, tax, payout, wallet, cron, dispatch.

---

### AI4-0032 — OPI Business Service Layer Realignment
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Route: /website-panel/homepage dan /website-panel/preview
- Dasar: docs/AI4_OPI_GHALBIT_MARITIME_SERVICE_NARRATIVE_LOCK.md
- Perbaikan: Menambahkan 17 pelayanan bisnis OPI, revenue pillars, dan nilai bisnis nyata.
- File disentuh: partial opi_business_services, homepage, preview, CSS Website Panel.
- Output: docs/AI4_OPI_BUSINESS_SERVICE_LAYER_REALIGNMENT_REPORT.md
- Area tidak disentuh: Admin core, vendor, store, order, payment, Firebase, Flutter, cron, wallet, payout, tax, dispatch.

---

### AI4-0034B — OPI Admin Cloud Medium Term Business Mission Lock
- Tanggal: 2026-07-06
- Mode: DOCUMENTATION_LOCK_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Keputusan: Pemetaan struktur Admin Cloud ke bisnis OPI dipertahankan sebagai misi jangka menengah, bukan patch langsung.
- Output: docs/AI4_OPI_ADMIN_CLOUD_MEDIUM_TERM_BUSINESS_MISSION_LOCK.md
- Area tidak disentuh: source code, Firebase, database, Admin core, vendor, store, order, payment, tax, payout, wallet, cron, Flutter.

---

### AI4-0035B — Drone Logistics Business Value Layer
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_AND_DOCS_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Koreksi: Drone Operation ditambahkan sebagai alat angkut logistik cepat, bukan hanya survey/monitoring.
- Nilai bisnis: drone survey fee, visual evidence report, drone logistics delivery fee, emergency delivery service, dan project contract.
- Output: docs/AI4_DRONE_LOGISTICS_BUSINESS_VALUE_LAYER_REPORT.md
- Area tidak disentuh: Admin Cloud produksi, Firebase, database, order, payment, tax, payout, wallet, cron, Flutter.

---

### AI4-0036 — Web Admin Cloud Link
- Tanggal: 2026-07-06
- Mode: PATCH_ALLOWED_WEBSITE_PANEL_ONLY
- Status: SELESAI
- Root: C:\deploy\adminpanel
- Web Admin Cloud URL: https://gbh-adminpanel-main-ieebco.laravel.cloud/
- Perbaikan: Menambahkan link Web Admin Cloud pada sidebar dan topbar Website Panel.
- Output: docs/AI4_WEB_ADMIN_CLOUD_LINK_REPORT.md
- Area tidak disentuh: Admin Cloud produksi, Firebase, database, order, vendor, payment, tax, payout, wallet, cron, Flutter.

---

### AI4-0038 — Cloud Preview Route Publish
- Tanggal: 2026-07-06
- Mode: PATCH_ROUTE_PUBLIC_PREVIEW
- Status awal: Cloud /website-panel/preview masih 404.
- Target cloud: https://gbh-adminpanel-main-ieebco.laravel.cloud/website-panel/preview
- Perbaikan: Menambahkan route public read-only /website-panel/preview ke routes/web.php.
- Output: docs/AI4_CLOUD_PREVIEW_ROUTE_PUBLISH_REPORT.md
- Area tidak disentuh: Firebase, database, order, vendor, payment, tax, payout, wallet, cron, Flutter.

---

### AI4-0038B — Fix routes/web.php Headers Sent
- Tanggal: 2026-07-06
- Mode: HOTFIX_ROUTE_FILE
- Masalah: Deploy Laravel Cloud gagal karena routes/web.php mengirim output sebelum header.
- Penyebab: Blok AI4-0038 sempat berada sebelum <?php atau ada output/BOM di awal file.
- Perbaikan: routes/web.php dibersihkan dan disimpan UTF-8 tanpa BOM.
- Output: docs/AI4_0038B_FIX_ROUTES_WEB_HEADERS_SENT_REPORT.md

---

### AI4-0038C — Fix Cloud Preview View Dependencies
- Tanggal: 2026-07-06
- Mode: HOTFIX_VIEW_DEPENDENCIES
- Masalah: Cloud /website-panel/preview sudah route aktif tetapi 500.
- Dugaan: View/layout/partial/asset Website Panel belum lengkap ikut deploy.
- Perbaikan: Push dependency Website Panel ke Git.
- Output: docs/AI4_0038C_FIX_CLOUD_PREVIEW_VIEW_DEPENDENCIES_REPORT.md

---

### AI4-0038C — Cloud Preview Final PASS
- Tanggal: 2026-07-06
- Status: PASS
- Public URL: https://gbh-adminpanel-main-ieebco.laravel.cloud/website-panel/preview
- HTTP: 200 OK
- Hasil: GHALBIT=True, OPI=True, nilai bisnis=True, 404=False, 500=False, view error=False.
- Kesimpulan: Website Panel Preview sudah dapat diakses dari cloud.
- Output: docs/AI4_0038C_CLOUD_PREVIEW_FINAL_PASS_REPORT.md

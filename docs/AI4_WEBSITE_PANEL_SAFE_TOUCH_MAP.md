# AI-4 WEBSITE PANEL SAFE TOUCH MAP

## Identitas
- Worker ID: AI-4
- Fokus: Website Panel
- Mode: SAFE_TOUCH_MAP
- Status: SELESAI
- Patch: BELUM DILAKUKAN

## Tujuan
Menentukan batas aman pekerjaan AI-4 sebelum membuat file Website Panel baru.

---

## 1. File Baru Yang Boleh Dibuat AI-4

AI-4 boleh membuat file baru berikut:

### Controller Baru
- app/Http/Controllers/WebsitePanelController.php

### View Baru
- resources/views/website_panel/index.blade.php
- resources/views/website_panel/homepage.blade.php
- resources/views/website_panel/footer.blade.php
- resources/views/website_panel/cms.blade.php
- resources/views/website_panel/preview.blade.php
- resources/views/website_panel/partials/sidebar.blade.php
- resources/views/website_panel/partials/topbar.blade.php

### Layout Baru
- resources/views/layouts/website_panel.blade.php

### Asset Baru
- public/website-panel/css/website-panel.css
- public/website-panel/js/website-panel.js
- public/website-panel/images/

### Dokumentasi Baru
- docs/AI4_WEBSITE_PANEL_SAFE_TOUCH_MAP.md
- docs/AI4_WEBSITE_PANEL_SCAFFOLDING_REPORT.md
- docs/AI4_WEBSITE_PANEL_ROUTE_REPORT.md

---

## 2. File Yang Boleh Disentuh Dengan Sangat Terbatas

AI-4 boleh menyentuh file ini hanya untuk menambah route baru:

- routes/web.php

Batasan:
- Hanya menambah route prefix /website-panel.
- Tidak mengubah route lama.
- Tidak menghapus route lama.
- Tidak mengubah route admin.
- Tidak mengubah route vendor.
- Tidak mengubah route order.
- Tidak mengubah route payment.
- Semua tambahan route wajib diberi marker:
  // AI4_WEBSITE_PANEL_ROUTE

---

## 3. File Yang Hanya Boleh Dibaca

AI-4 hanya boleh membaca file berikut untuk referensi:

- app/Http/Controllers/HomeController.php
- app/Http/Controllers/SettingsController.php
- app/Http/Controllers/CmsController.php
- resources/views/homepage_Template/
- resources/views/footerTemplate/
- resources/views/cms/
- resources/views/layouts/app.blade.php
- public/assets/
- public/css/
- public/images/
- public/js/

Tidak boleh patch file di atas tanpa perintah khusus.

---

## 4. File/Area Yang Dilarang Disentuh

AI-4 tidak boleh mengubah:

- app/Http/Controllers/VendorController.php
- app/Http/Controllers/StoreController.php
- app/Http/Controllers/OrderController.php
- app/Http/Controllers/PaymentController.php
- app/Http/Controllers/TaxController.php
- app/Http/Controllers/DriverController.php
- app/Http/Controllers/RideController.php
- app/Http/Controllers/ParcelController.php
- app/Http/Controllers/RentalController.php
- app/Http/Controllers/OnDemandServiceController.php
- app/Http/Controllers/FirebaseController.php
- resources/views/vendors/
- resources/views/stores/
- resources/views/orders/
- resources/views/reports/
- resources/views/settings/payment/
- Firebase config
- Firestore data
- Flutter app
- google-services.json
- firebase_options.dart
- Cron scheduler
- Wallet
- Payout
- Tax
- Driver dispatch
- Vendor order query

---

## 5. Route Baru Yang Direncanakan

Website Panel akan memakai route baru:

- /website-panel
- /website-panel/homepage
- /website-panel/footer
- /website-panel/cms
- /website-panel/preview

Semua route diarahkan ke controller baru:

- WebsitePanelController

---

## 6. Prinsip Rollback

Jika patch Website Panel bermasalah, rollback dilakukan dengan:

1. Hapus route AI4_WEBSITE_PANEL_ROUTE dari routes/web.php.
2. Hapus app/Http/Controllers/WebsitePanelController.php.
3. Hapus folder resources/views/website_panel.
4. Hapus resources/views/layouts/website_panel.blade.php.
5. Hapus folder public/website-panel.
6. Jalankan:
   php artisan optimize:clear

---

## 7. Keputusan

AI-4 boleh lanjut ke tahap SCAFFOLDING hanya dengan membuat file baru dan menambah route baru yang terisolasi.

AI-4 belum boleh membuat fitur simpan/publish data.
AI-4 belum boleh mengubah CMS lama.
AI-4 belum boleh mengubah homepage_Template lama.
AI-4 belum boleh mengubah footerTemplate lama.
AI-4 belum boleh mengubah SettingsController lama.

## Status
SAFE_TOUCH_MAP SELESAI.
SIAP LANJUT KE WEBSITE PANEL SCAFFOLDING.

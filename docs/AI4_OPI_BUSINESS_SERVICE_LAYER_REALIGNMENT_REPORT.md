# AI4-0032 OPI BUSINESS SERVICE LAYER REALIGNMENT

## Mode
PATCH_ALLOWED_WEBSITE_PANEL_ONLY

## Root
C:\deploy\adminpanel

## Dasar
Mengikuti docs/AI4_OPI_GHALBIT_MARITIME_SERVICE_NARRATIVE_LOCK.md

## Tujuan
Menambahkan 17 pelayanan bisnis OPI, nilai bisnis, dan sumber pendapatan nyata ke Homepage dan Preview.

## File Diubah
- resources/views/website_panel/partials/opi_business_services.blade.php
- resources/views/website_panel/homepage.blade.php
- resources/views/website_panel/preview.blade.php
- public/ai4-website-panel/css/website-panel.css

## Backup
- docs/ai4_backups/homepage.blade.php.before_ai4_0032_20260706_042428.bak
- docs/ai4_backups/preview.blade.php.before_ai4_0032_20260706_042428.bak
- docs/ai4_backups/website-panel.css.before_ai4_0032_20260706_042428.bak

## Prinsip
- Website Panel only.
- Tidak membaca/menulis Firebase.
- Tidak ada submit/publish.
- Tidak menyentuh Admin core, vendor, store, order, payment, tax, driver, payout, wallet, cron, atau Flutter.
- Angka finansial belum dikunci; service ini hanya mengunci jenis layanan dan nilai bisnis.

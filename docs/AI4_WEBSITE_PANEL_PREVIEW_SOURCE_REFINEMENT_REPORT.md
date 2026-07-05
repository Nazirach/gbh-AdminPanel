# AI4-0019 WEBSITE PANEL PREVIEW SOURCE REFINEMENT

## Mode
PATCH_ALLOWED_WEBSITE_PANEL_ONLY

## Tujuan
Menyempurnakan /website-panel/preview dari placeholder kosong menjadi read-only source preview.

## File Diubah
- resources/views/website_panel/preview.blade.php
- public/ai4-website-panel/css/website-panel.css

## Backup
- docs/ai4_backups/preview.blade.php.before_ai4_0019_20260706_031325.bak
- docs/ai4_backups/website-panel.css.before_ai4_0019_20260706_031325.bak

## Prinsip
- Read-only source preview.
- Tidak membaca Firebase.
- Tidak menulis database.
- Tidak mengubah Admin core, vendor, order, payment, tax, driver, payout, wallet, cron, atau Flutter.

## Validasi Manual
- Buka http://127.0.0.1:8014/website-panel/preview
- Pastikan muncul Read Only Legacy Preview dan Source Preview.
- Console warning dari extension browser tidak dihitung sebagai error Website Panel.

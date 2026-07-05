# AI4-0028 GHALBIT INVESTOR READINESS SECTION

## Mode
PATCH_ALLOWED_WEBSITE_PANEL_ONLY

## Root
C:\deploy\adminpanel

## Tujuan
Menambahkan Investor Readiness Section ke /website-panel/preview.

## File Diubah
- resources/views/website_panel/preview.blade.php
- public/ai4-website-panel/css/website-panel.css

## Backup
- docs/ai4_backups/preview.blade.php.before_ai4_0028_20260706_034854.bak
- docs/ai4_backups/website-panel.css.before_ai4_0028_20260706_034854.bak

## Prinsip
- Website Panel only.
- Tidak membaca/menulis Firebase.
- Tidak ada submit/publish.
- Tidak menyentuh Admin core, vendor, store, order, payment, tax, driver, payout, wallet, cron, atau Flutter.

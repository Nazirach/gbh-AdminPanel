# AI4-0020 WEBSITE PANEL HOMEPAGE REFINEMENT

## Mode
PATCH_ALLOWED_WEBSITE_PANEL_ONLY

## Tujuan
Menyempurnakan /website-panel/homepage dari scaffold sederhana menjadi homepage control draft dan public preview.

## File Diubah
- resources/views/website_panel/homepage.blade.php
- public/ai4-website-panel/css/website-panel.css

## Backup
- docs/ai4_backups/homepage.blade.php.before_ai4_0020_20260706_031848.bak
- docs/ai4_backups/website-panel.css.before_ai4_0020_20260706_031848.bak

## Prinsip
- Preview-safe.
- Tidak ada submit/publish.
- Tidak membaca/menulis Firebase.
- Tidak menyentuh Admin core, vendor, store, order, payment, tax, driver, payout, wallet, cron, atau Flutter.

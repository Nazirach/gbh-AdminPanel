# AI4-0029 GHALBIT REVENUE AND PARTNERSHIP SECTION

## Mode
PATCH_ALLOWED_WEBSITE_PANEL_ONLY

## Root
C:\deploy\adminpanel

## Tujuan
Menambahkan Revenue Model dan Strategic Partnership section ke /website-panel/preview.

## File Diubah
- resources/views/website_panel/preview.blade.php
- public/ai4-website-panel/css/website-panel.css

## Backup
- docs/ai4_backups/preview.blade.php.before_ai4_0029_20260706_035138.bak
- docs/ai4_backups/website-panel.css.before_ai4_0029_20260706_035138.bak

## Prinsip
- Website Panel only.
- Tidak membaca/menulis Firebase.
- Tidak ada submit/publish.
- Tidak menyentuh Admin core, vendor, store, order, payment, tax, driver, payout, wallet, cron, atau Flutter.
- Angka finansial belum dikunci; akan dibuat pada service khusus estimasi finansial.

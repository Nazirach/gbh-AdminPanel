# AI4-0025 GHALBIT MARITRONIX CMS REFINEMENT

## Mode
PATCH_ALLOWED_WEBSITE_PANEL_ONLY

## Root
C:\deploy\adminpanel

## Tujuan
Menyempurnakan /website-panel/cms agar sesuai GHALBIT MARITRONIX.

## File Diubah
- resources/views/website_panel/cms.blade.php
- public/ai4-website-panel/css/website-panel.css

## Backup
- docs/ai4_backups/cms.blade.php.before_ai4_0025_20260706_033214.bak
- docs/ai4_backups/website-panel.css.before_ai4_0025_20260706_033214.bak

## Prinsip
- Website Panel only.
- Tidak membaca/menulis Firebase.
- Tidak ada submit/publish.
- Tidak mengubah Admin core, vendor, store, order, payment, tax, driver, payout, wallet, cron, atau Flutter.

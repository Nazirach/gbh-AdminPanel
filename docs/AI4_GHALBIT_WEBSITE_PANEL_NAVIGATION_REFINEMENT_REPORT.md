# AI4-0027 GHALBIT WEBSITE PANEL NAVIGATION REFINEMENT

## Mode
PATCH_ALLOWED_WEBSITE_PANEL_ONLY

## Root
C:\deploy\adminpanel

## Tujuan
Menyelaraskan sidebar dan topbar Website Panel agar jelas sebagai workspace GHALBIT MARITRONIX.

## File Diubah
- resources/views/website_panel/partials/sidebar.blade.php
- resources/views/website_panel/partials/topbar.blade.php
- public/ai4-website-panel/css/website-panel.css

## Backup
- docs/ai4_backups/sidebar.blade.php.before_ai4_0027_20260706_034500.bak
- docs/ai4_backups/topbar.blade.php.before_ai4_0027_20260706_034500.bak
- docs/ai4_backups/website-panel.css.before_ai4_0027_20260706_034500.bak

## Prinsip
- Website Panel only.
- Tidak membaca/menulis Firebase.
- Tidak ada submit/publish.
- Tidak menyentuh Admin core, vendor, store, order, payment, tax, driver, payout, wallet, cron, atau Flutter.

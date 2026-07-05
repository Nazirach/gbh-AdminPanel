# AI4-0036 WEB ADMIN CLOUD LINK

## Mode
PATCH_ALLOWED_WEBSITE_PANEL_ONLY

## Root
C:\deploy\adminpanel

## Web Admin Cloud URL
https://gbh-adminpanel-main-ieebco.laravel.cloud/

## Tujuan
Menambahkan tombol/link Web Admin Cloud pada sidebar dan topbar Website Panel agar ketika diklik membuka layar Web Admin Cloud.

## File Diubah
- resources/views/website_panel/partials/sidebar.blade.php
- resources/views/website_panel/partials/topbar.blade.php
- public/ai4-website-panel/css/website-panel.css

## Prinsip
- Hanya menambah link navigasi.
- Tidak mengubah Admin Cloud produksi.
- Tidak membaca/menulis Firebase.
- Tidak mengubah database, order, vendor, payment, tax, payout, wallet, cron, atau Flutter.

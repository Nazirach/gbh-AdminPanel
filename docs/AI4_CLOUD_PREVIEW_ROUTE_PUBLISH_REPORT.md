# AI4-0038 CLOUD PREVIEW ROUTE PUBLISH

## Status Awal
Cloud URL https://gbh-adminpanel-main-ieebco.laravel.cloud/website-panel/preview mengembalikan 404 Not Found.

## Tujuan
Menambahkan route public /website-panel/preview agar halaman preview dapat diakses dari cloud, bukan hanya localhost.

## File Diubah
- routes/web.php

## View Target
- resources/views/website_panel/preview.blade.php

## Prinsip Aman
- Public preview read-only.
- Tidak mengubah Admin Cloud produksi.
- Tidak membaca/menulis Firebase.
- Tidak mengubah database.
- Tidak mencatat credential.

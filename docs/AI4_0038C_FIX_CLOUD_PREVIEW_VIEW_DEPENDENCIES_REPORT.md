# AI4-0038C FIX CLOUD PREVIEW VIEW DEPENDENCIES

## Masalah
Cloud /website-panel/preview sudah tidak 404, tetapi masih 500 Internal Server Error.

## Dugaan Utama
Route sudah terdeploy, tetapi file view/layout/partial/asset Website Panel belum lengkap ikut commit/push.

## Dependency yang harus ikut Git
- routes/web.php
- resources/views/website_panel/
- resources/views/layouts/website_panel.blade.php
- public/ai4-website-panel/css/
- public/ai4-website-panel/js/ jika digunakan

## Prinsip Aman
- Hanya push dependency Website Panel.
- Tidak mengubah Firebase.
- Tidak mengubah database.
- Tidak mengubah Admin Cloud data.
- Tidak mencatat credential.

# AI4-0038D FIX WEBSITE PANEL ROOT ROUTE

## Masalah
Cloud /website-panel menampilkan 500 Server Error, sedangkan /website-panel/preview sudah 200 OK.

## Perbaikan
Menambahkan route /website-panel yang melakukan redirect ke /website-panel/preview.

## Target
- https://gbh-adminpanel-main-ieebco.laravel.cloud/website-panel
- Redirect ke:
- https://gbh-adminpanel-main-ieebco.laravel.cloud/website-panel/preview

## Prinsip Aman
- Hanya route redirect.
- Tidak mengubah Firebase.
- Tidak mengubah database.
- Tidak mengubah Admin Cloud data.
- Tidak mencatat credential.

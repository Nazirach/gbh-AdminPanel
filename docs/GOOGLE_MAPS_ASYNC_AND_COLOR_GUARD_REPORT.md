# Google Maps Async And Color Guard Report

Tanggal: 2026-06-24

File yang diaudit:
- resources/views/layouts/app.blade.php
- resources/views/settings/app/global.blade.php

File yang diubah:
- resources/views/layouts/app.blade.php
- resources/views/settings/app/global.blade.php

Ringkasan patch:
- Loader Google Maps sekarang menambahkan `loading=async` pada URL script Google Maps JavaScript API.
- Sumber key utama tetap dari Firestore `settings/googleMapKey.key`.
- Fallback tetap dari `GOOGLE_MAPS_API_KEY` melalui Laravel config.
- Form Global Settings sekarang memakai helper `safeHexColor(value, fallback)` saat mengisi input warna agar nilai kosong atau tidak valid tidak lagi memicu warning format `#rrggbb`.

Catatan keamanan:
- API key tidak dicetak.
- API key tidak ditulis ke laporan.
- Tidak ada hardcode key baru.

Hasil artisan command:
- `php artisan optimize:clear` berhasil.
- `php artisan config:clear` berhasil.
- `php artisan view:clear` berhasil.
- `php artisan config:cache` berhasil.
- `php artisan view:cache` berhasil.
- `php artisan route:list` berhasil dan menampilkan 348 routes.

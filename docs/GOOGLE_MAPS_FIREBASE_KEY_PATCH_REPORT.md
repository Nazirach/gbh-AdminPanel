# GOOGLE_MAPS_FIREBASE_KEY_PATCH_REPORT

## File yang Diaudit
- `resources/views/layouts/app.blade.php`
- `config/google.php`

## File yang Diubah
- `resources/views/layouts/app.blade.php`
- `config/google.php`
- `docs/GOOGLE_MAPS_FIREBASE_KEY_PATCH_REPORT.md`

## Sumber API Key
- Sumber utama: Firestore `settings/googleMapKey` field `key`
- Fallback: `GOOGLE_MAPS_API_KEY` dari `.env` melalui `config('google.maps_api_key')`

## Ringkasan Patch
- Menambahkan fallback config Laravel di layout dengan `@json(config('google.maps_api_key'))`
- Menambahkan resolver aman yang:
  - mencoba membaca key dari Firestore jika `window.firebaseClientReady` dan `window.firebaseDb` tersedia
  - fallback ke config Laravel jika Firestore kosong/gagal
  - tidak memanggil Google Maps script jika key tetap kosong
- Menambahkan `console.warn` yang aman tanpa mencetak API key
- Menambahkan guard agar script Google Maps tidak di-load ganda
- Menyimpan ulang `config/google.php` tanpa BOM agar tidak memicu output sebelum `setcookie()` saat artisan boot

## Hasil Artisan Command
- `php artisan optimize:clear` -> sukses
- `php artisan config:clear` -> sukses
- `php artisan view:clear` -> sukses
- `php artisan config:cache` -> sukses
- `php artisan view:cache` -> sukses
- `php artisan route:list` -> sukses (`348` routes)

## Catatan Keamanan
- API key tidak dicetak ke console
- API key tidak ditulis ke report
- API key tidak di-hardcode ke source
- Commit hanya membawa logic fallback dan file config wrapper, bukan secret nyata

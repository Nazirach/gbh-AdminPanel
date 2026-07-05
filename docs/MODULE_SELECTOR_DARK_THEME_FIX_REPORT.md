# MODULE_SELECTOR_DARK_THEME_FIX_REPORT

## Masalah yang diperbaiki
- Popup **"Bagian Modul" / module selector** (dropdown di header) tampil dengan background terang dan kartu modul terlihat putih/pucat, teks kurang kontras, sehingga tampak menutupi halaman.
- Target patch: memperbaiki tampilan **dark theme** untuk komponen module selector dengan CSS minimal (tanpa mengubah markup/JS/tax report).

## File yang diedit
- `resources/views/layouts/app.blade.php`

## CSS selector yang ditambahkan
Komentar & rule yang ditambahkan (tepat di dalam blok `<style>` dark theme):
- `/* MODULE_SELECTOR_DARK_THEME_FIX */`
- `.gm-service-switcher__menu.dropdown-menu,
  .dropdown-service,
  .dropdown-service_inner`
- `.gm-service-switcher__menu h2/.h3/p` dan `.dropdown-service_inner h2/.h3/p`
- `.gm-service-switcher__menu .service-list-box,
  .dropdown-service_inner .service-list-box,
  #sections_header .service-list-box`
- `.gm-service-switcher__menu .service-list-box:hover,
  .dropdown-service_inner .service-list-box:hover,
  #sections_header .service-list-box:hover`
- `.gm-service-switcher__menu .service-list-box h3/p,
  #sections_header .service-list-box h3/p`
- `.gm-service-switcher__menu .service-list-box img,
  #sections_header .service-list-box img`
- `.gm-service-switcher__menu .selected-section,
  #sections_header .selected-section`

## Konfirmasi JS/Firebase/tax report tidak diubah
- Tidak ada perubahan pada:
  - `resources/views/layouts/header.blade.php`
  - JavaScript `getServiceSections()` / `buildServiceSectionsHTML()`
  - Section cookie `section_id/service_type`
  - Firebase/database logic
  - tax report

## php artisan optimize:clear sudah dijalankan
- Sudah dijalankan: `php artisan optimize:clear`

## Cara uji manual
1. Buka: `http://127.0.0.1:8000/report/tax`
2. Tekan: **Ctrl+F5**
3. Klik trigger **"Bagian Modul" / module selector** di header.
4. Verifikasi:
   - Popup background menjadi gelap
   - Kartu modul tidak putih/pucat
   - Teks terbaca jelas
   - Hover/selected style terasa konsisten


# MODULE_SELECTOR_ICON_VISIBILITY_FIX_REPORT

## Ringkasan
Patch ini hanya ditujukan untuk meningkatkan visibilitas ikon/gambar pada **module selector** (kartu modul/popup bagian modul) dengan membuat style gambar lebih jelas di dark theme.

## 1) Verifikasi asset fallback
**File:** `public/images/section_image.png`

- Ditemukan: **Ya** (`Test-Path .\public\images\section_image.png` => True)
- Informasi file:
  - FullName: `C:\deploy\adminpanel\public\images\section_image.png`
  - Length: **368 bytes**
  - LastWriteTime: **Friday, April 4, 2025 1:35:52 PM**

**Dugaan penyebab:**
- Ukuran file fallback sangat kecil (368 bytes) sehingga kemungkinan gambar terlalu kecil/berpotensi tampak gelap/kurang kontras pada background dark theme.
- Karena itu, perbaikan dilakukan via CSS untuk memastikan dimensi dan kontras gambar tetap terlihat.

## 2) CSS yang dicek
Sebelum patch, terdapat rule untuk:
- `.gm-service-switcher__menu .service-list-box img`
- `#sections_header .service-list-box img`

Rule tersebut sudah mengatur `max-width/max-height/object-fit/opacity`, namun belum menambahkan background/padding/border-radius yang biasanya diperlukan agar ikon terlihat jelas di kartu dark.

## 3) File yang diedit
- **`resources/views/layouts/app.blade.php`**

## 4) CSS image visibility yang ditambahkan/diperbaiki
Di dalam `<style>` pada `app.blade.php`, rule berikut dipastikan/ditingkatkan:

```css
.gm-service-switcher__menu .service-list-box img,
#sections_header .service-list-box img {
    width: 42px !important;
    height: 42px !important;
    max-width: 42px !important;
    max-height: 42px !important;
    object-fit: contain !important;
    opacity: 1 !important;
    background-color: rgba(255, 255, 255, 0.92) !important;
    padding: 6px !important;
    border-radius: 8px !important;
    display: inline-block !important;
}
```

Tujuan patch CSS:
- Memaksa ukuran konsisten (42x42)
- Menjaga aspect ratio (`object-fit: contain`)
- Meningkatkan kontras melalui background putih lembut
- Tambahkan ruang (`padding`) dan bentuk (`border-radius`) agar ikon tidak “tenggelam” di kartu dark

## 5) Konfirmasi batasan (tidak mengubah area yang dilarang)
- Tidak mengubah **tax report**.
- Tidak mengubah **Firebase/database query**.
- Tidak mengubah cookie `section_id` / `service_type`.
- Tidak mengubah `getServiceSections()` dan `buildServiceSectionsHTML()` (hanya CSS yang diubah).

## 6) Post-patch command
Jalankan:
- `php artisan optimize:clear`

## 7) Verifikasi (Select-String)
Jalankan verifikasi (hasil menunjukkan adanya rule CSS target dengan string/pola yang diminta):
- Pola yang dicek mencakup `section_image.png`, `service-list-box img`, `background-color: rgba`, `width: 42px`, `height: 42px`.

## 8) Cara uji manual
1. Buka: `http://127.0.0.1:8000/report/tax`
2. Tekan **Ctrl+F5** (hard refresh)
3. Buka **Bagian Modul**
4. Pastikan ikon/gambar modul:
   - tidak lagi tampak kecil,
   - tidak lagi gelap,
   - tidak lagi “broken/low-contrast” pada kartu dark.


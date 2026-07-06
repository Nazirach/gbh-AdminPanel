# AI4-0041E MODULE SELECTOR DARK THEME IMAGE FALLBACK REPORT

## Status
KEEP_PATCH_ISOLATED

## File
- resources/views/layouts/app.blade.php
- public/images/section_image.png sebagai fallback asset existing

## Perubahan Utama
- MODULE_SELECTOR_DARK_THEME_FIX untuk memperjelas dropdown module selector pada dark theme.
- MODULE_SELECTOR_IMAGE_FALLBACK_FIX agar section image kosong memakai asset lokal images/section_image.png.
- Ukuran icon module selector dinormalisasi ke 42px agar terlihat.

## Prinsip Aman
- Tidak mengubah Firebase rules.
- Tidak menulis data Firestore.
- Tidak menyentuh tax report.
- Tidak menyentuh Website Panel.
- Patch hanya visual module selector dan fallback image.

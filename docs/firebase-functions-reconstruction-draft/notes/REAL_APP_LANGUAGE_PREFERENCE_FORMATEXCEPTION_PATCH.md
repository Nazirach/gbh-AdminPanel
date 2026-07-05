# STEP 12AZ - LANGUAGE PREFERENCE FORMATEXCEPTION PATCH

Generated: 06/28/2026 22:42:57

Mode:
- Patch kecil defensif
- Hanya file customer/lib/constant/constant.dart
- Tidak ubah Firestore
- Tidak sentuh admin panel
- Tidak buat order
- Tidak jalankan driver/vendor app

Backup:
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart.bak_STEP12AZ_20260628_224254

Patched file:
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart

Marker:
STEP12AZ_LANGUAGE_PREFERENCE_FORMATEXCEPTION_FIX

Reason:
Constant.getLanguage() sebelumnya langsung menjalankan jsonDecode(Preferences.getString(Preferences.languageCodeKey)).
Jika preference bahasa kosong, jsonDecode("") menyebabkan FormatException: Unexpected end of input.
Patch menambahkan guard empty/null-like string dan try/catch fallback LanguageModel default.

Next test:
1. flutter analyze
2. run customer app
3. login customer
4. klik Fashion
5. cek apakah blank hilang dan apakah error FormatException tidak muncul lagi

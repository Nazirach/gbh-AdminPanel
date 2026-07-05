# SERVICE 57D VENDOR APK DEPENDENCY COMPAT PATCH

## Mode
PATCH MINIMAL

## Tujuan
Memperbaiki dependency build risk Vendor APK setelah SERVICE 57C.

## Root Cause
* `google_api_headers 5.2.0` membutuhkan Dart language 3.11.
* Flutter/Dart lokal adalah Dart 3.10.7.
* SERVICE 57C membuktikan `google_api_headers` adalah direct dependency.

## Patch
* `google_api_headers` dipin ke `5.1.2` (exact pin).
* `flutter pub get` dijalankan.
* Error `google_api_headers language version 3.11 too high` tidak lagi menjadi blocker.

## Catatan Asset Bundling
* Sempat muncul `PathExistsException` pada asset bundling.
* `vendor/assets` sempat dibersihkan dan asset source directories dipulihkan:
  * `assets/images`
  * `assets/icons`
  * `assets/fonts`
* Setelah asset source directories kembali ada, asset bundling kemudian lanjut ke tahap berikutnya.

## Build Verification
* `flutter build apk --debug` belum menghasilkan APK.
* Blocking error terbaru:
  `:app:processDebugGoogleServices`
  `No matching client found for package name 'com.emart.store'`.

## Tidak Dipatch
* Admin Web tidak diubah.
* Customer APK tidak diubah.
* Driver APK tidak diubah.
* Vendor Web tidak diubah.
* Firebase tidak diubah.
* Kontrak data tidak diubah.
* `google-services.json` belum dipatch pada service ini.
* Tidak membuat Firebase config palsu.

## Remaining Risk
* `android/app/google-services.json` kemungkinan tidak memiliki client untuk package `com.emart.store`.
* Perlu service khusus untuk audit/patch Google Services config.

## Next Service
SERVICE_57E_VENDOR_APK_GOOGLE_SERVICES_CONFIG_AUDIT

## Final Status
STATUS: SERVICE_57D_VENDOR_APK_DEPENDENCY_COMPAT_PATCH_BUILD_RISK


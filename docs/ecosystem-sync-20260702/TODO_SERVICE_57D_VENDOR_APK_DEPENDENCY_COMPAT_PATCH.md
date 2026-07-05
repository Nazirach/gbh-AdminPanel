# TODO - SERVICE 57D VENDOR APK DEPENDENCY COMPAT PATCH

- [ ] (1) Backup vendor/pubspec.yaml dan vendor/pubspec.lock
- [ ] (2) Edit vendor/pubspec.yaml: pin `google_api_headers: 5.1.2` (exact, di dependencies, tanpa dependency_overrides)
- [ ] (3) Jalankan `flutter pub get` di folder vendor APK
- [ ] (4) Verifikasi di vendor/pubspec.lock resolved `google_api_headers` = 5.1.2
- [ ] (5) Jalankan `flutter analyze` (catat summary/error baru)
- [ ] (6) Jalankan `flutter build apk --debug`
- [ ] (7) Buat/isi laporan `SERVICE_57D_VENDOR_APK_DEPENDENCY_COMPAT_PATCH.md` dengan hasil langkah (3)-(6)
- [ ] (8) Commit & push perubahan (vendor/pubspec.yaml, vendor/pubspec.lock jika berubah, laporan doc)


# AI4-0041A APPSERVICEPROVIDER BOOT GUARD REPORT

## Tujuan
Mengisolasi perubahan kecil AppServiceProvider.php agar boot Laravel lebih tahan ketika Firebase/Firestore bermasalah.

## Perubahan
- Normalisasi FIREBASE_PROJECT_ID ke variable projectId.
- Firestore read settings/openai_settings hanya dijalankan jika projectId tersedia.
- Throwable tetap ditangkap agar boot tidak jatuh karena cURL/SSL/Firestore.

## Prinsip Aman
- Tidak mengubah Firebase.
- Tidak mengubah database.
- Tidak mengubah view admin lain.
- Tidak menyentuh tax report, module selector, vendor, item, category.

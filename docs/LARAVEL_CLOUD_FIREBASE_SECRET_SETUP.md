# LARAVEL_CLOUD_FIREBASE_SECRET_SETUP

## Tujuan

Membuat file runtime:

- `storage/app/firebase/credentials.json`

Dari ENV Laravel Cloud:

- `FIREBASE_CREDENTIALS_JSON_BASE64`

## 1. Buat base64 dari credentials.json lokal

Jalankan di PowerShell lokal tanpa menampilkan isi JSON:

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("PATH_TO_CREDENTIALS_JSON"))
```

Salin hasil base64 dengan hati-hati, lalu simpan sebagai environment variable Laravel Cloud:

```text
FIREBASE_CREDENTIALS_JSON_BASE64
```

## 2. Pastikan ENV Firebase lain ikut diisi

Wajib isi kedua varian lama dan baru bila source masih campuran:

- `FIREBASE_APIKEY`
- `FIREBASE_API_KEY`
- `FIREBASE_MESSAAGING_SENDER_ID`
- `FIREBASE_MESSAGING_SENDER_ID`

Lihat template lengkap pada:

- `docs/LARAVEL_CLOUD_ENV_TEMPLATE_FINAL.md`

## 3. Release / deploy command

Jalankan script materialisasi lebih dulu:

```bash
php scripts/materialize-firebase-credentials.php
```

Lalu bersihkan cache Laravel:

```bash
php artisan optimize:clear
```

## 4. Hasil yang diharapkan

Setelah command di atas sukses, file berikut harus tersedia saat runtime:

- `storage/app/firebase/credentials.json`

## 5. Catatan keamanan

- Jangan commit file `credentials.json` ke Git.
- Jangan menaruh isi JSON di dokumen atau repo.
- Gunakan ENV/secret Laravel Cloud untuk menyimpan base64 credential.

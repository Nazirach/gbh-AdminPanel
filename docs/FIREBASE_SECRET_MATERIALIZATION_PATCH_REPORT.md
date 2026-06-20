# FIREBASE_SECRET_MATERIALIZATION_PATCH_REPORT

## File dibuat

- `docs/LARAVEL_CLOUD_ENV_TEMPLATE_FINAL.md`
- `scripts/materialize-firebase-credentials.php`
- `docs/LARAVEL_CLOUD_FIREBASE_SECRET_SETUP.md`

## ENV final yang perlu diisi

### APP
- `APP_NAME`
- `APP_ENV`
- `APP_KEY`
- `APP_DEBUG`
- `APP_URL`
- `APP_TIMEZONE`
- `APP_LOCALE`
- `APP_FALLBACK_LOCALE`
- `APP_FAKER_LOCALE`

### DB
- `DB_CONNECTION`
- `DB_HOST`
- `DB_PORT`
- `DB_DATABASE`
- `DB_USERNAME`
- `DB_PASSWORD`

### Firebase frontend
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_DATABASE_URL`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `FIREBASE_MEASUREMENT_ID`

### Firebase backend
- `FIREBASE_APIKEY`
- `FIREBASE_PROJECT_DB`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_DATABASE_URL`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `FIREBASE_MEASUREMENT_ID`

### Firebase secret base64
- `FIREBASE_CREDENTIALS_JSON_BASE64`
- `FIREBASE_CREDENTIALS`

### Session / cache / queue
- `BROADCAST_DRIVER`
- `CACHE_DRIVER`
- `FILESYSTEM_DISK`
- `QUEUE_CONNECTION`
- `SESSION_DRIVER`
- `SESSION_LIFETIME`
- `LOG_CHANNEL`
- `LOG_LEVEL`

### Mail
- `MAIL_MAILER`
- `MAIL_HOST`
- `MAIL_PORT`
- `MAIL_USERNAME`
- `MAIL_PASSWORD`
- `MAIL_ENCRYPTION`
- `MAIL_FROM_ADDRESS`
- `MAIL_FROM_NAME`

### Payment
- `STRIPE_KEY`
- `STRIPE_SECRET`
- `PAYPAL_CLIENT_ID`
- `PAYPAL_SECRET`
- `PAYTM_MERCHANT_ID`
- `PAYTM_MERCHANT_KEY`
- `PAYSTACK_SECRET_KEY`
- `RAZORPAY_KEY`
- `RAZORPAY_SECRET`
- `MERCADOPAGO_ACCESS_TOKEN`
- `FLUTTERWAVE_PUBLIC_KEY`
- `FLUTTERWAVE_SECRET_KEY`

### Node / scheduler
- `NODE_PATH`
- `NODE_BINARY`

### OpenAI
- `OPENAI_API_KEY`

## Cara membuat base64 credential

Gunakan PowerShell lokal:

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("PATH_TO_CREDENTIALS_JSON"))
```

## Cara materialize di Laravel Cloud

1. Simpan hasil base64 ke ENV:
   - `FIREBASE_CREDENTIALS_JSON_BASE64`
2. Jalankan saat release/deploy:

```bash
php scripts/materialize-firebase-credentials.php
php artisan optimize:clear
```

## Hasil php -l

- `php -l scripts/materialize-firebase-credentials.php` harus lulus tanpa syntax error.

## Status setelah patch

- **Masih NO-GO** sampai secret asli diisi di Laravel Cloud dan runtime file benar-benar termaterialisasi.
- Setelah secret tersedia dan command release dijalankan, blocker Firebase utama turun signifikan.

# eMart Laravel Cloud Deploy Notes

This is a safe deployment note for preparing the eMart Laravel admin panel for:

- GitHub private repository
- Laravel Cloud
- Firebase-connected runtime

## Required application shape

The Laravel app must keep:

- `public/` as web root
- MySQL connectivity
- Firebase/Firestore client configuration
- server-side Firebase credential file outside public web root

## Required secrets

Do not commit:

- `.env`
- `storage/app/firebase/credentials.json`

## Required environment variables

Set in Laravel Cloud:

- `APP_ENV=production`
- `APP_DEBUG=false`
- `APP_URL=<cloud-or-custom-url>`
- `DB_*`
- `FIREBASE_PROJECT_ID`
- any Firebase web config keys actually used by the app

Recommended additional variable:

- `FIREBASE_CREDENTIALS=storage/app/firebase/credentials.json`

## Firebase credential strategy

The Firebase service account JSON must not be committed.

Use one of these:

1. Laravel Cloud secret/file mount if supported
2. secure runtime upload step
3. post-deploy provisioning to:
   - `storage/app/firebase/credentials.json`

## Build / runtime notes

This app uses:

- Composer
- npm / Laravel Mix
- MySQL
- Laravel scheduler
- Node-based Firebase job scripts in `storage/app/firebase/*.js`

Laravel Cloud readiness must therefore confirm:

1. PHP runtime is supported
2. MySQL service is available
3. build step runs Composer
4. asset step runs npm if needed
5. scheduler / cron strategy exists
6. Firebase credentials can be injected safely

## Safe pre-push checks

Before any GitHub push:

1. confirm `.gitignore` excludes secrets
2. confirm debug markers are removed
3. confirm `.env.example` is sanitized
4. confirm `vendor/` and `node_modules/` are excluded

## Suggested build flow

```bash
composer install --no-dev --optimize-autoloader
npm install
npm run production
php artisan optimize:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Suggested post-deploy checks

- `/`
- `/login`
- `/drivers`
- `/orders`
- `/vendors`
- Firebase-backed pages
- scheduler health

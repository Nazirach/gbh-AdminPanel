# STORE_PANEL_FIRESTORE_BOOT_GUARD_REPORT

## Ringkasan
Saat menjalankan `php artisan --version`, Laravel gagal boot karena aplikasi mencoba membaca Firestore dokumen **`settings/openai_settings`** pada saat boot time. Error awal menunjukkan URL Firestore dengan `projects//...` yang mengindikasikan **Firebase project id kosong / env belum siap**.

Patch minimal dilakukan dengan membuat boot-time Firestore/OpenAI settings **guard/fallback** agar:
- Jika `FIREBASE_PROJECT_ID` kosong/invalid → skip Firestore read.
- Jika Firestore/OpenAI request gagal (SSL/cURL/Firestore error) → **Laravel tetap lanjut boot**.

## Akar masalah
- Boot Laravel memanggil `AppServiceProvider::boot()`.
- Di `AppServiceProvider::boot()` terdapat pemanggilan:
  - `FirestoreHelper::getDocument('settings/openai_settings')`
- `FirestoreHelper::baseUrl()` membangun URL Firestore REST dari `env('FIREBASE_PROJECT_ID')`.
- Saat `FIREBASE_PROJECT_ID` belum siap, terbentuk URL:
  - `https://firestore.googleapis.com/v1/projects//databases/(default)/documents/settings/openai_settings`
- Kegagalan jaringan/SSL cURL (mis. `cURL error 60`) menyebabkan proses boot gagal.

## File yang diperiksa
1. `app/Providers/AppServiceProvider.php`
2. `app/Helpers/FirestoreHelper.php`
3. `bootstrap/app.php`
4. `config/firebase.php`
5. `config/openai.php`
6. `app/Providers/RouteServiceProvider.php`
7. `app/Providers/EventServiceProvider.php`
8. `config/app.php`

## File yang dipatch
### `app/Providers/AppServiceProvider.php`
**Perubahan utama (guard/fallback boot-safe):**
- Membaca dan melakukan `trim()` pada `FIREBASE_PROJECT_ID`.
- Skip Firestore read jika project id kosong.
- Tetap membungkus request Firestore dengan `try/catch (Throwable)` agar error jaringan/SSL tidak menjatuhkan boot.

#### Potongan konsep patch
```php
public function boot()
{
    $openai_settings = [];

    $projectId = trim((string) env('FIREBASE_PROJECT_ID'));

    // Boot guard: if Firebase project id is missing/invalid, skip Firestore read.
    if (!empty($projectId)) {
        try {
            $openai_settings = FirestoreHelper::getDocument('settings/openai_settings') ?? [];
        } catch (Throwable $e) {
            // Boot must be resilient to cURL/SSL/Firestore errors.
            $openai_settings = [];
        }
    }

    // Apply settings only if present
    if (!empty($openai_settings)) {
        if (!empty($openai_settings['api_key'])) {
            Config::set('openai.api_key', $openai_settings['api_key']);
        }
        if (!empty($openai_settings['organization'])) {
            Config::set('openai.organization', $openai_settings['organization']);
        }
    }

    view()->composer('*', function ($view) use ($openai_settings) {
        $view->with('openai_settings', $openai_settings);
    });
}
```

## Hasil pengujian
### 1) `php artisan --version`
Output sukses:
- `Laravel Framework 10.48.29`

### 2) `php artisan route:list --path=api/delete-user`
Output:
- Terlihat redirect ke `http://localhost` (HTML redirect).
- Setelahnya muncul pesan:
  - `ERROR Your application doesn't have any routes matching the given criteria.`

Catatan: Meski berhasil boot (artinya guard berfungsi), route `api/delete-user` tidak cocok dengan kondisi route matching di aplikasi saat ini.

## Konfirmasi batasan perubahan
- ✅ Tidak menjalankan `composer install`.
- ✅ Tidak menghapus `vendor/`.
- ✅ Tidak extract/copy ulang panel.
- ✅ Tidak menjalankan migration.
- ✅ Tidak import SQL.
- ✅ Tidak mengubah database/Firebase production.
- ✅ Tidak menjalankan server.
- ✅ Perubahan hanya pada boot-time guard di `app/Providers/AppServiceProvider.php`.

## Catatan status
Store Panel Composer sudah selesai; error yang terjadi saat ini adalah **boot-time Firestore/OpenAI settings** yang dipanggil saat `artisan`.

---
END OF REPORT


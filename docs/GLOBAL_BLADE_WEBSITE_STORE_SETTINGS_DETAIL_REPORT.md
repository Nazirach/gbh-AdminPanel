# GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md

## 1. Tujuan audit
Audit detail mapping field **Website/Store settings** pada file:
- `resources/views/settings/app/global.blade.php`

Fokus mapping:
1) Nama input HTML
2) ID input HTML
3) Variabel JS
4) Firestore doc yang dibaca
5) Firestore doc yang ditulis
6) Mapping snake_case UI ke camelCase Firestore
7) Risiko jika field kosong/salah
8) Koneksi `storeUrl/websiteUrl` dengan endpoint `/api/delete-user`.

## 2. Mode read-only
- Tidak patch.
- Tidak refactor.
- Tidak install package.
- Tidak composer install.
- Tidak npm install.
- Tidak migration.
- Tidak ubah Firebase/database.
- Tidak ubah env.
- Tidak commit/push.
- Tidak hapus file source.
- Tidak menyentuh **Tax Report** dan **Module Selector**.

## 3. Git status ringkas
Hasil `git status --porcelain -b` (saat audit):
```text
## main...origin/main [ahead 1]
 M resources/views/layouts/app.blade.php
 M resources/views/reports/tax-reports.blade.php
?? TODO.md
?? docs/MODULE_SELECTOR_DARK_THEME_FIX_REPORT.md
?? docs/MODULE_SELECTOR_ICON_FINAL_VERIFY_REPORT.md
?? docs/MODULE_SELECTOR_ICON_VISIBILITY_FIX_REPORT.md
?? docs/MODULE_SELECTOR_IMAGE_FALLBACK_FIX_REPORT.md
?? docs/MODULE_SELECTOR_IMAGE_FALLBACK_VERIFY_REPORT.md
?? docs/MODULE_SELECTOR_UI_VERIFY_REPORT.md
?? docs/POWER_SHELL_DELETE_USER_ENDPOINT_DISCOVERY.ps1
?? docs/STORE_WEBSITE_PANEL_AUDIT_START.md
?? docs/STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
?? docs/TAX_REPORT_DEBUG_FIX_REPORT.md
?? docs/TAX_REPORT_TABLE_AND_DATERANGEPICKER_FIX_REPORT.md
?? docs/TAX_REPORT_TABLE_HEADER_CONTRAST_REPORT.md
?? docs/TAX_REPORT_TABLE_HEADER_FINAL_VISUAL_FIX_REPORT.md
?? docs/TAX_REPORT_UI_DATE_INPUT_VERIFY_REPORT.md
?? docs/WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
?? docs/WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT.md
?? docs/WEBSITE_SETTINGS_FIELD_HITS.csv
?? docs/WEBSITE_SETTINGS_FIELD_MAPPING_REPORT.md
?? docs/WEBSITE_SETTINGS_GIT_STATUS.txt
?? docs/WEBSITE_STORE_URL_USAGE_HITS.csv
?? docs/_bb_tmp_pwsh_wrapper.ps1
?? docs/_bb_tmp_website_settings_audit_final.ps1
?? docs/_bb_tmp_website_settings_field_hits.ps1
?? docs/_bb_tmp_website_store_url_usage_hits.ps1
```

## 4. File utama yang diaudit
- `resources/views/settings/app/global.blade.php`

## 5. Excerpt file yang dibuat
- `docs/GLOBAL_BLADE_WEBSITE_SETTINGS_EXCERPTS.txt`

Excerpt ini dihasilkan oleh:
- `docs/_bb_tmp_global_blade_excerpt_audit.ps1`

## 6. Mapping field HTML (Website/Store settings)
Dari excerpt `HTML fields 470-510`:

### 6.1 Version & URL inputs
| UI label (trans key) | Input HTML (name) | Input HTML (id/name) | Fungsi field |
|---|---|---|---|
| `lang.app_version` | (tidak ada attribute `name` pada input snippet) | class: `app_version` | versi aplikasi (disimpan ke Firestore sebagai `app_version`) |
| `lang.web_version` | (tidak ada attribute `name`) | `id="web_version"` | versi web (disimpan ke Firestore sebagai `web_version`) |
| `lang.setting_website_url` | (tidak ada attribute `name`) | `id="website_url"` | base URL website (disimpan ke Firestore sebagai `websiteUrl`) |
| `lang.setting_store_url` | (tidak ada attribute `name`) | `id="store_url"` | base URL store (disimpan ke Firestore sebagai `storeUrl`) |

> Catatan: field color `website_color/store_color/store_app_color` tidak tampil pada excerpt 470–510, tetapi mapping variabel/Firestore payload terkonfirmasi di section JS lainnya (lihat bagian 8).

## 7. Mapping JS load (Firestore -> UI)
Dari excerpt `Load version to UI 730-750`:

### 7.1 Firestore doc yang dibaca
- `database.collection('settings').doc("Version")`

Variabel yang dipakai:
- `var version = database.collection('settings').doc("Version");`

### 7.2 Variabel JS & field yang diset ke UI
Dalam callback `version.get().then(async function(snapshots) { ... })`:
- `$('#web_version').val(version_data.web_version || "");`
- `$('#store_url').val(version_data.storeUrl || "");`
- `$('#website_url').val(version_data.websiteUrl || "");`
- `$('#provider_url').val(version_data.providerUrl || "");` *(provider termasuk dalam snippet, namun fokus audit ini Website/Store settings)*
- `$('.app_version').val(version_data.app_version || "");`

## 8. Mapping JS save (UI -> Firestore)
Dari excerpt `Read input variables 805-830`:

### 8.1 Variabel dari input UI
- `var web_version = $('#web_version').val();`
- `var website_url = $('#website_url').val();`
- `var store_url = $('#store_url').val();`

Color variables (berdasarkan payload save excerpt):
- `website_color`, `store_color`, `store_app_color` diambil dari input lain (terlihat di excerpt hits sebelumnya pada line seperti `$('#website_color').val(...)` dan payload save di bawah).

### 8.2 Payload Firestore yang ditulis
Dari excerpt `Save payload 910-985`:

Firestore doc yang ditulis:
- `database.collection('settings').doc("Version").update({ ... })`

Field payload yang relevan:
- `'web_version': web_version,`
- `'websiteUrl': website_url,`
- `'storeUrl': store_url,`
- `'app_version': app_version,`

Field color yang terkonfirmasi di payload (di object update yang sama scope-nya dengan document settings global):
- `'website_color': website_color,`
- `'store_panel_color': store_color,`
- `'app_store_color': store_app_color,`

Color/payload di doc lain yang sama file (scope update):
- `database.collection('settings').doc("globalSettings").update({ ... })`

## 9. Mapping snake_case UI ke camelCase Firestore (terkonfirmasi)
Berikut mapping yang terkonfirmasi dari kombinasi:
- load UI (`version.get()`)
- save payload (`Version.update(...)`)

| UI (id/variable) | Variabel JS | Firestore field |
|---|---|---|
| `#website_url` / `website_url` | `website_url` | `websiteUrl` |
| `#store_url` / `store_url` | `store_url` | `storeUrl` |
| `#web_version` / `web_version` | `web_version` | `web_version` |
| `#app_version` / `.app_version` | `app_version` | `app_version` |

Color fields (format snake_case di Firestore, terkonfirmasi):
- `website_color` (snake_case)
- `store_panel_color` (snake_case)
- `app_store_color` (snake_case)

## 10. Hubungan `storeUrl` dengan delete-user
Berdasarkan `docs/WEBSITE_STORE_URL_USAGE_HITS.csv`:

### 10.1 File yang memakai `storeUrl`
1) `resources/views/employee/index.blade.php`
   - line 643: `if (settingData && settingData.storeUrl) {`
   - line 644: `var siteurl = settingData.storeUrl + "/api/delete-user";`

2) `resources/views/stores/index.blade.php`
   - line 698: `if (settingData && settingData.storeUrl) {`
   - line 699: `var siteurl = settingData.storeUrl + "/api/delete-user";`

3) `resources/views/vendors/index.blade.php`
   - line 773: `if(settingData&&settingData.storeUrl) {`
   - line 774: `var siteurl=settingData.storeUrl+"/api/delete-user";`

> Hasil CSV tidak menampilkan isi payload request/UUID secara eksplisit pada baris hit yang tercatat; audit tahap ini berhenti pada pola pembentukan endpoint `siteurl`.

### 10.2 File yang memakai `websiteUrl` (untuk konteks delete-user)
- `resources/views/users/index.blade.php`
  - line 480: `if (settingData && settingData.websiteUrl){`
  - line 481: `var siteurl = settingData.websiteUrl + "/api/delete-user";`

## 11. Risiko jika field kosong/salah
1) **`storeUrl` kosong / salah**
   - Dampak: endpoint delete-user dibangun dari base yang salah, misalnya `"/api/delete-user"` menuju domain yang tidak valid.
   - Potensi: delete-user gagal, UI tetap menampilkan state sukses/gagal tergantung implementasi response handling di luar baris hits.

2) **`websiteUrl` kosong / salah**
   - Dampak: endpoint delete-user untuk konteks pengguna (users panel) gagal.

3) **`web_version` salah**
   - Dampak: UI menampilkan versi web yang salah; bisa mempengaruhi cache-busting/manual behavior bila ada dependensi versi (tidak diverifikasi di tahap ini selain load & save).

4) **Color field kosong** (`website_color`, `store_panel_color`, `app_store_color`)
   - Dampak: tampilan theme/warna tidak konsisten.
   - Risiko UI: jika CSS/JS mengharapkan hex valid, nilai kosong bisa memicu default yang tidak diinginkan atau UI rusak.

5) **Tidak ada validasi URL yang ketat**
   - Dari potongan yang ada, UI langsung `val()` dan disimpan; tidak terlihat validasi format URL pada potongan yang diaudit.

6) **Cross-panel delete-user**
   - Endpoint dibangun lintas panel menggunakan `storeUrl/websiteUrl`. Jika salah, dampak tersebar lintas module (employee/stores/vendors/users).

## 12. Rekomendasi tahap berikutnya
1) Audit lanjutan (read-only) pada area request delete-user di masing-masing file (employee/stores/vendors/users):
   - validasi payload body
   - apakah payload memakai `uuid`
   - mekanisme error handling
2) Audit validasi/normalisasi URL di `global.blade.php` saat save:
   - apakah `website_url/store_url` di-trim, dicek skema (http/https), atau ditolak bila kosong.
3) Audit apakah `web_version` dipakai lebih lanjut (search pemakaian `web_version`/`app_version` di repo).

## 13. Konfirmasi kepatuhan terhadap larangan
- Tidak patch.
- Tidak install.
- Tidak migration.
- Tidak commit/push.
- Tidak ubah Firebase/database.
- Tidak ubah env.
- Tidak menyentuh Tax Report dan Module Selector.


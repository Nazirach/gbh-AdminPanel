# WEBSITE_SETTINGS_FIELD_MAPPING_REPORT

## 1. Tujuan audit
Memetakan field Website Panel / Store URL / version / color setting dari Admin Panel.

## 2. Mode read-only
- Tidak patch.
- Tidak install package.
- Tidak migration.
- Tidak commit/push.
- Tidak ubah Firebase/database.
- Tidak ubah env.
- Hanya membaca file dan membuat laporan/CSV di docs.

## 3. Git status ringkas
```text
$gitStatusText
```

## 4. Target file direct check
- Global file: $globalFile
- Exists: $globalExists

### 4.1. Excerpt global.blade.php (first hits)
$globalText

## 5. Settings field mapping hits
- CSV: $settingsHitsCsv
- Total hits: $($hits.Count)

### 5.1. First hits (up to 80)
$topHitText

## 6. Website/store URL usage & related endpoint hits
- CSV: $usageHitsCsv
- Total hits: $($usageHits.Count)

### 6.1. First hits (up to 80)
$topUsageText

## 7. Notes tentang validasi CSV
Jika CSV kosong, kemungkinan:
- Pattern tidak ada di file yang discan.
- File dikecualikan oleh excludeRegex.
- Script belum dijalankan.

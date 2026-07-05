Set-StrictMode -Version Latest
$ErrorActionPreference = "Continue"

$root = "C:\deploy\adminpanel"
Set-Location $root

$docs = Join-Path $root "docs"
if (!(Test-Path $docs)) {
    New-Item -ItemType Directory -Force -Path $docs | Out-Null
}

$gitStatusPath = Join-Path $docs "WEBSITE_SETTINGS_GIT_STATUS.txt"
$settingsHitsCsv = Join-Path $docs "WEBSITE_SETTINGS_FIELD_HITS.csv"
$usageHitsCsv = Join-Path $docs "WEBSITE_STORE_URL_USAGE_HITS.csv"
$reportPath = Join-Path $docs "WEBSITE_SETTINGS_FIELD_MAPPING_REPORT.md"

Write-Host "=== WEBSITE SETTINGS FIELD AUDIT FINAL ==="
Write-Host "[INFO] Root: $root"

# Git status
try {
    git status --porcelain -b | Out-File -FilePath $gitStatusPath -Encoding UTF8
    Write-Host "[OK] Git status saved: $gitStatusPath"
} catch {
    "GIT_STATUS_FAILED: $($_.Exception.Message)" | Out-File -FilePath $gitStatusPath -Encoding UTF8
    Write-Host "[WARN] Git status failed"
}

# Target file direct check
$globalFile = Join-Path $root "resources\views\settings\app\global.blade.php"
$globalExists = Test-Path $globalFile
Write-Host "[INFO] global.blade.php exists: $globalExists"

# Search roots
$searchRoots = @(
    (Join-Path $root "resources\views"),
    (Join-Path $root "app"),
    (Join-Path $root "routes")
) | Where-Object { Test-Path $_ }

$excludeRegex = "\\(vendor|node_modules|storage|bootstrap\\cache|build|dist|\\.git)\\"

# Field / setting patterns
$patterns = @(
    "website_url",
    "store_url",
    "websiteUrl",
    "storeUrl",
    "web_version",
    "webVersion",
    "website_color",
    "websiteColor",
    "store_panel_color",
    "storePanelColor",
    "app_store_color",
    "appStoreColor",
    "settings/Version",
    "doc('Version')",
    'doc("Version")',
    "Version"
)

# Collect candidate files (only once)
$files = Get-ChildItem -Path $searchRoots -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
        $_.FullName -notmatch $excludeRegex -and
        (
            $_.Name -like "*.php" -or
            $_.Name -like "*.blade.php" -or
            $_.Name -like "*.js"
        )
    }

Write-Host "[INFO] Files scanned: $($files.Count)"

$hits = New-Object System.Collections.Generic.List[Object]

# Settings hits
foreach ($file in $files) {
    try {
        $matches = Select-String -Path $file.FullName -Pattern $patterns -CaseSensitive:$false -SimpleMatch -Context 2,8 -ErrorAction SilentlyContinue
        foreach ($m in $matches) {
            $hits.Add([PSCustomObject]@{
                Path = $m.Path
                LineNumber = $m.LineNumber
                Line = $m.Line.Trim()
            })
        }
    } catch {
        Write-Host "[WARN] Search failed: $($file.FullName)"
    }
}

$hits | Export-Csv -Path $settingsHitsCsv -NoTypeInformation -Encoding UTF8
Write-Host "[OK] Settings hits CSV: $settingsHitsCsv"
Write-Host "[INFO] Settings hits count: $($hits.Count)"

# Usage hits patterns
$patterns2 = @(
    "storeUrl",
    "websiteUrl",
    "store_url",
    "website_url",
    "/api/delete-user",
    "delete-user"
)

$usageHits = New-Object System.Collections.Generic.List[Object]

# Usage hits
foreach ($file in $files) {
    try {
        $matches = Select-String -Path $file.FullName -Pattern $patterns2 -CaseSensitive:$false -SimpleMatch -Context 2,8 -ErrorAction SilentlyContinue
        foreach ($m in $matches) {
            $usageHits.Add([PSCustomObject]@{
                Path = $m.Path
                LineNumber = $m.LineNumber
                Line = $m.Line.Trim()
            })
        }
    } catch {
        Write-Host "[WARN] Usage search failed: $($file.FullName)"
    }
}

$usageHits | Export-Csv -Path $usageHitsCsv -NoTypeInformation -Encoding UTF8
Write-Host "[OK] Usage hits CSV: $usageHitsCsv"
Write-Host "[INFO] Usage hits count: $($usageHits.Count)"

# Console preview
Write-Host ""
Write-Host "=== FIRST SETTINGS HITS ==="
$hits | Select-Object -First 40 | Format-Table -AutoSize

Write-Host ""
Write-Host "=== FIRST USAGE HITS ==="
$usageHits | Select-Object -First 40 | Format-Table -AutoSize

# Analyze global file excerpt if exists
$globalFieldLines = @()
if ($globalExists) {
    $globalMatches = Select-String -Path $globalFile -Pattern $patterns -CaseSensitive:$false -SimpleMatch -Context 3,10 -ErrorAction SilentlyContinue
    foreach ($m in $globalMatches) {
        $globalFieldLines += "Line $($m.LineNumber): $($m.Line.Trim())"
    }
}

# Build report sections
$gitStatusText = ""
if (Test-Path $gitStatusPath) {
    $gitStatusText = Get-Content -Path $gitStatusPath -Raw -Encoding UTF8
}

$topHitText = ""
foreach ($h in ($hits | Select-Object -First 80)) {
    $topHitText += "- $($h.Path):$($h.LineNumber) => $($h.Line)`n"
}

$topUsageText = ""
foreach ($h in ($usageHits | Select-Object -First 80)) {
    $topUsageText += "- $($h.Path):$($h.LineNumber) => $($h.Line)`n"
}

$globalText = ""
if ($globalFieldLines.Count -gt 0) {
    $globalText = ($globalFieldLines -join "`n")
} else {
    $globalText = "Tidak ada hit langsung di global.blade.php atau file tidak ditemukan."
}

$report = @'
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
'@

$report | Out-File -FilePath $reportPath -Encoding UTF8
Write-Host "[OK] Report MD written: $reportPath"

Write-Host "=== DONE ==="



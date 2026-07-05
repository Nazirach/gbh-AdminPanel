Set-StrictMode -Version Latest
$ErrorActionPreference = "Continue"

$root = "C:\deploy\adminpanel"
Set-Location $root

$docs = Join-Path $root "docs"
if (!(Test-Path $docs)) {
    New-Item -ItemType Directory -Force -Path $docs | Out-Null
}

$outCsv = Join-Path $docs "URL_VALUE_SEARCH_HITS.csv"
$outReport = Join-Path $docs "URL_VALUE_DISCOVERY_REPORT.md"

$excludeRegex = "\\(vendor|node_modules|storage|bootstrap\\cache|build|dist|\\.git|public\\assets\\plugins)\\"

$patterns = @(
    "storeUrl",
    "websiteUrl",
    "providerUrl",
    "store_url",
    "website_url",
    "provider_url",
    "setting_store_url",
    "setting_website_url",
    "setting_provider_url",
    "https://",
    "http://",
    "api/delete-user",
    "/api/delete-user"
)

$files = Get-ChildItem -Path $root -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
        $_.FullName -notmatch $excludeRegex -and
        (
            $_.Name -like "*.php" -or
            $_.Name -like "*.blade.php" -or
            $_.Name -like "*.js" -or
            $_.Name -like "*.ts" -or
            $_.Name -like "*.json" -or
            $_.Name -like "*.env" -or
            $_.Name -like "*.example" -or
            $_.Name -like "*.md" -or
            $_.Name -like "*.txt" -or
            $_.Name -like "*.csv"
        )
    }

Write-Host "[INFO] Files scanned: $($files.Count)"

$hits = New-Object System.Collections.Generic.List[Object]

foreach ($file in $files) {
    try {
        $matches = Select-String -Path $file.FullName -Pattern $patterns -CaseSensitive:$false -SimpleMatch -Context 1,4 -ErrorAction SilentlyContinue
        foreach ($m in $matches) {
            $hits.Add([PSCustomObject]@{
                File = $m.Path
                LineNumber = $m.LineNumber
                Line = $m.Line.Trim()
            })
        }
    } catch {
        Write-Host "[WARN] Failed reading: $($file.FullName)"
    }
}

$hits | Export-Csv -Path $outCsv -NoTypeInformation -Encoding UTF8

$important = $hits |
    Where-Object {
        $_.Line -match "storeUrl|websiteUrl|providerUrl|store_url|website_url|provider_url|https?://|api/delete-user|delete-user"
    }

$urlLines = $important |
    Where-Object {
        $_.Line -match "https?://"
    }

$storeLines = $important |
    Where-Object {
        $_.Line -match "storeUrl|store_url|setting_store_url"
    }

$websiteLines = $important |
    Where-Object {
        $_.Line -match "websiteUrl|website_url|setting_website_url"
    }

$providerLines = $important |
    Where-Object {
        $_.Line -match "providerUrl|provider_url|setting_provider_url"
    }

function LinesToText($items, $limit) {
    $text = ""
    foreach ($h in ($items | Select-Object -First $limit)) {
        $text += "- $($h.File):$($h.LineNumber) => $($h.Line)`n"
    }
    if ([string]::IsNullOrWhiteSpace($text)) {
        return "Tidak ditemukan."
    }
    return $text
}

$report = @"
# URL_VALUE_DISCOVERY_REPORT

## 1. Tujuan
Mencari nilai nyata/base URL untuk:
- settings/Version.storeUrl
- settings/Version.websiteUrl
- settings/Version.providerUrl

Agar bisa mengetahui receiver backend untuk /api/delete-user.

## 2. Mode
Read-only. Tidak patch, tidak install, tidak migration, tidak commit/push, tidak ubah Firebase/database/env.

## 3. Files scanned
$($files.Count)

## 4. CSV output
- docs/URL_VALUE_SEARCH_HITS.csv

Total hits: $($hits.Count)
Important hits: $($important.Count)
URL-looking lines: $($urlLines.Count)

## 5. storeUrl / store_url hits
$(LinesToText $storeLines 80)

## 6. websiteUrl / website_url hits
$(LinesToText $websiteLines 80)

## 7. providerUrl / provider_url hits
$(LinesToText $providerLines 80)

## 8. URL-looking lines
$(LinesToText $urlLines 120)

## 9. Kesimpulan awal
Jika nilai URL nyata tidak ditemukan di file lokal, maka nilai tersebut kemungkinan hanya tersimpan di Firestore document settings/Version.

## 10. Rekomendasi
1. Jika URL ditemukan, cocokkan domain dengan repo/backend lokal atau GitHub.
2. Jika URL tidak ditemukan, baca manual Firestore settings/Version dari Firebase Console.
3. Setelah domain diketahui, cari repo/deploy target yang sesuai.
4. Baru audit receiver /api/delete-user pada repo tersebut.
"@

$report | Out-File -FilePath $outReport -Encoding UTF8

Write-Host "[OK] CSV: $outCsv"
Write-Host "[OK] Report: $outReport"
Write-Host "=== DONE ==="


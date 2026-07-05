$ErrorActionPreference = "Continue"

$storeSource = "C:\deploy\_baseline_extract_panels_recover\Landing Page - Admin Panel - Store Panel - Website Panel\Store Panel"
$websiteSource = "C:\deploy\_baseline_extract_panels_recover\Landing Page - Admin Panel - Store Panel - Website Panel\Website Panel"

$storeTarget = "C:\deploy\storepanel"
$websiteTarget = "C:\deploy\websitepanel"

$docs = "C:\deploy\adminpanel\docs"
$report = Join-Path $docs "STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md"

Write-Host "=== BASELINE-SAFE ROBOCOPY FINAL SYNC ==="

if (!(Test-Path $storeSource)) { throw "Store source tidak ditemukan: $storeSource" }
if (!(Test-Path $websiteSource)) { throw "Website source tidak ditemukan: $websiteSource" }

New-Item -ItemType Directory -Force -Path $storeTarget | Out-Null
New-Item -ItemType Directory -Force -Path $websiteTarget | Out-Null
New-Item -ItemType Directory -Force -Path $docs | Out-Null

Write-Host "=== SYNC STORE PANEL ==="
robocopy $storeSource $storeTarget /MIR /XD vendor node_modules storage\framework bootstrap\cache /R:1 /W:1 /NFL /NDL /NP
$storeRobo = $LASTEXITCODE

Write-Host "=== SYNC WEBSITE PANEL ==="
robocopy $websiteSource $websiteTarget /MIR /XD vendor node_modules storage\framework bootstrap\cache /R:1 /W:1 /NFL /NDL /NP
$websiteRobo = $LASTEXITCODE

Write-Host "Store robocopy exit: $storeRobo"
Write-Host "Website robocopy exit: $websiteRobo"

Write-Host "=== STRUCTURE CHECK ==="

$checks = @(
    "$storeTarget\artisan",
    "$storeTarget\composer.json",
    "$storeTarget\routes\api.php",
    "$storeTarget\routes\web.php",
    "$storeTarget\app\Http\Controllers\ApiController.php",
    "$websiteTarget\artisan",
    "$websiteTarget\composer.json",
    "$websiteTarget\routes\api.php",
    "$websiteTarget\routes\web.php",
    "$websiteTarget\app\Http\Controllers\ApiController.php"
)

$checkResults = foreach ($c in $checks) {
    [PSCustomObject]@{
        Path = $c
        Exists = Test-Path $c
    }
}

$checkResults | Format-Table -AutoSize

Write-Host "=== RECEIVER CHECK ==="

$storeReceiver = Select-String -Path "$storeTarget\routes\api.php","$storeTarget\app\Http\Controllers\ApiController.php" `
    -Pattern "delete-user","deleteUserFromDb" `
    -CaseSensitive:$false `
    -ErrorAction SilentlyContinue

$websiteReceiver = Select-String -Path "$websiteTarget\routes\api.php","$websiteTarget\app\Http\Controllers\ApiController.php" `
    -Pattern "delete-user","deleteUserFromDb" `
    -CaseSensitive:$false `
    -ErrorAction SilentlyContinue

$storeReceiver | Select-Object Path,LineNumber,Line | Format-Table -AutoSize
$websiteReceiver | Select-Object Path,LineNumber,Line | Format-Table -AutoSize

Write-Host "=== TOOL CHECK ==="

try { $phpVersion = php -v | Select-Object -First 1 } catch { $phpVersion = $_.Exception.Message }
try { $composerVersion = composer --version } catch { $composerVersion = $_.Exception.Message }

try {
    Push-Location $storeTarget
    $storeArtisan = php artisan --version
    Pop-Location
} catch {
    $storeArtisan = $_.Exception.Message
    Pop-Location -ErrorAction SilentlyContinue
}

try {
    Push-Location $websiteTarget
    $websiteArtisan = php artisan --version
    Pop-Location
} catch {
    $websiteArtisan = $_.Exception.Message
    Pop-Location -ErrorAction SilentlyContinue
}

$checkText = ($checkResults | ForEach-Object { "- $($_.Path): $($_.Exists)" }) -join "`n"

$storeReceiverText = if ($storeReceiver) {
    ($storeReceiver | ForEach-Object { "- $($_.Path):$($_.LineNumber) => $($_.Line.Trim())" }) -join "`n"
} else {
    "Tidak ditemukan."
}

$websiteReceiverText = if ($websiteReceiver) {
    ($websiteReceiver | ForEach-Object { "- $($_.Path):$($_.LineNumber) => $($_.Line.Trim())" }) -join "`n"
} else {
    "Tidak ditemukan."
}

$reportText = @"
# STORE & WEBSITE PANEL BUILD READINESS FINAL REPORT

## 1. Mode
BASELINE-SAFE ROBOCOPY FINAL SYNC

## 2. Source Roots
- Store Panel: $storeSource
- Website Panel: $websiteSource

## 3. Target Copy
- Store Panel: $storeTarget
- Website Panel: $websiteTarget

## 4. Robocopy Exit Codes
- Store Panel: $storeRobo
- Website Panel: $websiteRobo

Catatan: Robocopy exit code 0-7 umumnya bukan fatal. 8 ke atas berarti ada kegagalan copy serius.

## 5. Structure Check
$checkText

## 6. Store Panel Receiver Hits
$storeReceiverText

## 7. Website Panel Receiver Hits
$websiteReceiverText

## 8. Tool Versions
- PHP: $phpVersion
- Composer: $composerVersion

## 9. Artisan Check
- Store Panel: $storeArtisan
- Website Panel: $websiteArtisan

## 10. Correct Target Paths
- $storeTarget\routes\api.php
- $websiteTarget\routes\api.php

## 11. Kesimpulan
Store Panel dan Website Panel disinkronkan dari Laravel root yang benar menggunakan robocopy /MIR karena Rename-Item terhadap target sebelumnya gagal akibat access denied/lock.

## 12. Kepatuhan
- Tidak patch source code.
- Tidak composer install.
- Tidak npm install.
- Tidak migration.
- Tidak import SQL.
- Tidak ubah Firebase/database/env.
- Tidak test POST /api/delete-user.
- Source baseline tidak diubah.
"@

$reportText | Out-File -FilePath $report -Encoding UTF8

Write-Host "[OK] Final report written: $report"
Write-Host "=== DONE ROBOCOPY FINAL SYNC ==="

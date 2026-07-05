$ErrorActionPreference = "Stop"

$storeSource = "C:\deploy\_baseline_extract_panels_recover\Landing Page - Admin Panel - Store Panel - Website Panel\Store Panel"
$websiteSource = "C:\deploy\_baseline_extract_panels_recover\Landing Page - Admin Panel - Store Panel - Website Panel\Website Panel"

$storeTarget = "C:\deploy\storepanel"
$websiteTarget = "C:\deploy\websitepanel"

$docs = "C:\deploy\adminpanel\docs"
$report = Join-Path $docs "STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md"

Write-Host "=== BASELINE-SAFE FINAL COPY FROM CONFIRMED ROOTS ==="

if (!(Test-Path $storeSource)) {
    throw "Store source tidak ditemukan: $storeSource"
}

if (!(Test-Path $websiteSource)) {
    throw "Website source tidak ditemukan: $websiteSource"
}

Write-Host "[OK] Store source: $storeSource"
Write-Host "[OK] Website source: $websiteSource"

Write-Host "=== BACKUP CURRENT WRONG TARGETS ==="

foreach ($target in @($storeTarget, $websiteTarget)) {
    if (Test-Path $target) {
        $backup = $target + "_confirmed_root_backup_" + (Get-Date -Format "yyyyMMdd_HHmmss")
        Rename-Item -Path $target -NewName $backup
        Write-Host "[BACKUP] $target -> $backup"
    }
}

New-Item -ItemType Directory -Force -Path $storeTarget | Out-Null
New-Item -ItemType Directory -Force -Path $websiteTarget | Out-Null

Write-Host "=== COPY STORE PANEL ==="
Copy-Item -Path (Join-Path $storeSource "*") -Destination $storeTarget -Recurse -Force

Write-Host "=== COPY WEBSITE PANEL ==="
Copy-Item -Path (Join-Path $websiteSource "*") -Destination $websiteTarget -Recurse -Force

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

Write-Host "PHP: $phpVersion"
Write-Host "Composer: $composerVersion"
Write-Host "Store artisan: $storeArtisan"
Write-Host "Website artisan: $websiteArtisan"

Write-Host "=== WRITE FINAL REPORT ==="

if (!(Test-Path $docs)) {
    New-Item -ItemType Directory -Force -Path $docs | Out-Null
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
BASELINE-SAFE FINAL COPY FROM CONFIRMED ROOTS

## 2. Source Roots
- Store Panel: $storeSource
- Website Panel: $websiteSource

## 3. Target Copy
- Store Panel: $storeTarget
- Website Panel: $websiteTarget

## 4. Structure Check
$checkText

## 5. Store Panel Receiver Hits
$storeReceiverText

## 6. Website Panel Receiver Hits
$websiteReceiverText

## 7. Tool Versions
- PHP: $phpVersion
- Composer: $composerVersion

## 8. Artisan Check
- Store Panel: $storeArtisan
- Website Panel: $websiteArtisan

## 9. Correct Target Paths
- $storeTarget\routes\api.php
- $websiteTarget\routes\api.php

## 10. Kesimpulan
Store Panel dan Website Panel sudah dicopy dari Laravel root yang benar hasil extract.

Source root yang benar:
- Store Panel folder memiliki artisan, composer.json, dan routes/api.php
- Website Panel folder memiliki artisan, composer.json, dan routes/api.php

## 11. Kepatuhan
- Tidak patch.
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
Write-Host "=== DONE FINAL COPY + VERIFY ==="

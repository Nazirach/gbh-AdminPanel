Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# BASELINE-SAFE COPY + VERIFY
# - No waiting loops
# - No patching baseline code
# - No composer/npm install
# - No migrations / SQL import
# - No Firebase/database changes

$zip = "C:\project\eMart_V6.7_Source_Code\Landing Page - Admin Panel - Store Panel - Website Panel.zip"
$extract = "C:\deploy\_baseline_extract_panels"
$storeTarget = "C:\deploy\storepanel"
$websiteTarget = "C:\deploy\websitepanel"
$docs = "C:\deploy\adminpanel\docs"
$report = Join-Path $docs "STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md"

# Ensure docs folder
if (!(Test-Path $docs)) {
    New-Item -ItemType Directory -Force -Path $docs | Out-Null
}

# Verify ZIP
if (!(Test-Path $zip)) {
    throw "ZIP tidak ditemukan: $zip"
}

# Backup intended targets only (no other folders)
foreach ($target in @($storeTarget, $websiteTarget)) {
    if (Test-Path $target) {
        $backup = $target + "_backup_" + (Get-Date -Format "yyyyMMdd_HHmmss")
        Rename-Item -Path $target -NewName $backup | Out-Null
        Write-Host "[BACKUP] $target -> $backup"
    }
}

# Prepare extract folder
if (Test-Path $extract) {
    # keep existing extract as safety backup
    $extractBackup = $extract + "_backup_" + (Get-Date -Format "yyyyMMdd_HHmmss")
    Rename-Item -Path $extract -NewName $extractBackup | Out-Null
    Write-Host "[BACKUP] $extract -> $extractBackup"
}
New-Item -ItemType Directory -Force -Path $extract | Out-Null

# Extract
Expand-Archive -Path $zip -DestinationPath $extract -Force
Write-Host "[OK] Extracted to: $extract"

# Find exact folders by name (case-insensitive by default on Windows)
$storeSource = Get-ChildItem -Path $extract -Recurse -Directory |
    Where-Object { $_.Name -eq "Store Panel" } |
    Select-Object -First 1

$websiteSource = Get-ChildItem -Path $extract -Recurse -Directory |
    Where-Object { $_.Name -eq "Website Panel" } |
    Select-Object -First 1

if ($null -eq $storeSource) {
    throw "Folder 'Store Panel' tidak ditemukan di hasil extract."
}

if ($null -eq $websiteSource) {
    throw "Folder 'Website Panel' tidak ditemukan di hasil extract."
}

Write-Host "[FOUND] Store Source: $($storeSource.FullName)"
Write-Host "[FOUND] Website Source: $($websiteSource.FullName)"

# Copy to targets
New-Item -ItemType Directory -Force -Path $storeTarget | Out-Null
New-Item -ItemType Directory -Force -Path $websiteTarget | Out-Null

Copy-Item -Path (Join-Path $storeSource.FullName "*") -Destination $storeTarget -Recurse -Force
Copy-Item -Path (Join-Path $websiteSource.FullName "*") -Destination $websiteTarget -Recurse -Force

Write-Host "[OK] Store Panel copied to: $storeTarget"
Write-Host "[OK] Website Panel copied to: $websiteTarget"

# Structure checks
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

# Receiver verification: look for delete-user receiver route & handler hints
# Note: We only read files; no test/HTTP calls.
$storeReceiverHits = @()
$websiteReceiverHits = @()

$storeApi = Join-Path $storeTarget "routes\api.php"
$storeCtrl = Join-Path $storeTarget "app\Http\Controllers\ApiController.php"

$websiteApi = Join-Path $websiteTarget "routes\api.php"
$websiteCtrl = Join-Path $websiteTarget "app\Http\Controllers\ApiController.php"

$patterns = @("Route::post\(\s*'/?delete-user'","delete-user","deleteUserFromDb")

function Get-ReceiverHits {
    param(
        [Parameter(Mandatory=$true)][string]$FilePath,
        [Parameter(Mandatory=$true)][string[]]$Patterns
    )

    if (!(Test-Path $FilePath)) { return @() }

    $hits = Select-String -Path $FilePath -Pattern $Patterns -CaseSensitive:$false -ErrorAction SilentlyContinue
    if ($null -eq $hits) { return @() }

    # normalize to simple objects
    $hits | ForEach-Object {
        [PSCustomObject]@{
            Path = $_.Path
            LineNumber = $_.LineNumber
            Line = $_.Line.Trim()
        }
    }
}

$storeReceiverHits = @(
    (Get-ReceiverHits -FilePath $storeApi -Patterns $patterns),
    (Get-ReceiverHits -FilePath $storeCtrl -Patterns $patterns)
) | ForEach-Object { $_ } | Where-Object { $_ -ne $null }

$websiteReceiverHits = @(
    (Get-ReceiverHits -FilePath $websiteApi -Patterns $patterns),
    (Get-ReceiverHits -FilePath $websiteCtrl -Patterns $patterns)
) | ForEach-Object { $_ } | Where-Object { $_ -ne $null }

# Tool versions (best-effort)
$phpVersion = ""
$composerVersion = ""
$storeArtisan = ""
$websiteArtisan = ""

try { $phpVersion = (php -v | Select-Object -First 1) } catch { $phpVersion = $_.Exception.Message }
try { $composerVersion = (composer --version) } catch { $composerVersion = $_.Exception.Message }

try {
    Push-Location $storeTarget
    $storeArtisan = (php artisan --version)
    Pop-Location
} catch {
    $storeArtisan = $_.Exception.Message
    Pop-Location -ErrorAction SilentlyContinue
}

try {
    Push-Location $websiteTarget
    $websiteArtisan = (php artisan --version)
    Pop-Location
} catch {
    $websiteArtisan = $_.Exception.Message
    Pop-Location -ErrorAction SilentlyContinue
}

# Build report
$checkText = ($checkResults | ForEach-Object { "- $($_.Path): $($_.Exists)" }) -join "`n"

$storeReceiverText = if ($storeReceiverHits -and $storeReceiverHits.Count -gt 0) {
    ($storeReceiverHits | ForEach-Object { "- $($_.Path):$($_.LineNumber) => $($_.Line)" }) -join "`n"
} else {
    "Tidak ditemukan."
}

$websiteReceiverText = if ($websiteReceiverHits -and $websiteReceiverHits.Count -gt 0) {
    ($websiteReceiverHits | ForEach-Object { "- $($_.Path):$($_.LineNumber) => $($_.Line)" }) -join "`n"
} else {
    "Tidak ditemukan."
}

$reportText = @"
# STORE & WEBSITE PANEL BUILD READINESS FINAL REPORT

## 1. Source ZIP
$zip

## 2. Extract Folder
$extract

## 3. Source Panel (exact-named folders)
- Store Panel: $($storeSource.FullName)
- Website Panel: $($websiteSource.FullName)

## 4. Target Copy
- Store Panel: $storeTarget
- Website Panel: $websiteTarget

## 5. Structure Check (must exist)
$checkText

## 6. Store Panel Receiver Hits (read-only grep in files)
$storeReceiverText

## 7. Website Panel Receiver Hits (read-only grep in files)
$websiteReceiverText

## 8. Tool Versions (best-effort, no installs)
- PHP: $phpVersion
- Composer: $composerVersion

## 9. Artisan Check
- Store Panel artisan --version: $storeArtisan
- Website Panel artisan --version: $websiteArtisan

## 10. Kesimpulan
Target path yang benar:
- $storeTarget\routes\api.php
- $websiteTarget\routes\api.php

Tidak diperiksa (sesuai requirement, untuk mencegah salah target):
- C:\deploy\websitepanel\Admin Panel\routes\api.php

## 11. Kepatuhan
- Tidak patch baseline.
- Tidak composer install.
- Tidak npm install.
- Tidak migration.
- Tidak import SQL.
- Tidak ubah Firebase/database.
- Tidak test POST /api/delete-user.
- Source baseline tidak diubah.
"@

$reportText | Out-File -FilePath $report -Encoding UTF8
Write-Host "[OK] Report written: $report"
Write-Host "=== DONE (BASELINE-SAFE) ==="


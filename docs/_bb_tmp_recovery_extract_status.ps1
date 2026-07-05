$ErrorActionPreference = "Continue"

$extract = "C:\deploy\_baseline_extract_panels_recover"
$docs = "C:\deploy\adminpanel\docs"
$out = Join-Path $docs "RECOVERY_EXTRACT_STATUS_REPORT.txt"

"=== RECOVERY EXTRACT STATUS ===" | Out-File $out -Encoding UTF8
"Extract path: $extract" | Out-File $out -Append -Encoding UTF8
"Exists: $(Test-Path $extract)" | Out-File $out -Append -Encoding UTF8

"`n=== TOP LEVEL ===" | Out-File $out -Append -Encoding UTF8
if (Test-Path $extract) {
    Get-ChildItem $extract -Force |
        Select-Object Name,FullName,Mode,Length,LastWriteTime |
        Format-Table -AutoSize |
        Out-String |
        Out-File $out -Append -Encoding UTF8
}

"`n=== PANEL FOLDER SEARCH ===" | Out-File $out -Append -Encoding UTF8
if (Test-Path $extract) {
    Get-ChildItem $extract -Recurse -Directory -ErrorAction SilentlyContinue |
        Where-Object {
            $_.Name -eq "Admin Panel" -or
            $_.Name -eq "Store Panel" -or
            $_.Name -eq "Website Panel" -or
            $_.Name -eq "Landing Panel"
        } |
        Select-Object Name,FullName,LastWriteTime |
        Format-Table -AutoSize |
        Out-String |
        Out-File $out -Append -Encoding UTF8
}

"`n=== LARAVEL ROOT CANDIDATES ===" | Out-File $out -Append -Encoding UTF8
if (Test-Path $extract) {
    Get-ChildItem $extract -Recurse -Directory -ErrorAction SilentlyContinue |
        Where-Object {
            $_.FullName -notmatch "\\vendor\\|\\node_modules\\|\\storage\\framework\\|\\bootstrap\\cache\\" -and
            (Test-Path (Join-Path $_.FullName "artisan")) -and
            (Test-Path (Join-Path $_.FullName "composer.json")) -and
            (Test-Path (Join-Path $_.FullName "routes\api.php"))
        } |
        Select-Object FullName |
        Format-Table -AutoSize |
        Out-String |
        Out-File $out -Append -Encoding UTF8
}

"`n=== TARGET CHECK ===" | Out-File $out -Append -Encoding UTF8
$targets = @(
    "C:\deploy\storepanel\artisan",
    "C:\deploy\storepanel\routes\api.php",
    "C:\deploy\storepanel\app\Http\Controllers\ApiController.php",
    "C:\deploy\websitepanel\artisan",
    "C:\deploy\websitepanel\routes\api.php",
    "C:\deploy\websitepanel\app\Http\Controllers\ApiController.php",
    "C:\deploy\adminpanel\docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md"
)

foreach ($t in $targets) {
    "$t = $(Test-Path $t)" | Out-File $out -Append -Encoding UTF8
}

Write-Host "[OK] Status report written: $out"
Get-Content $out -Tail 120

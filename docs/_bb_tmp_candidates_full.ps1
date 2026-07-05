$extract = "C:\deploy\_baseline_extract_panels_recover"
$out = "C:\deploy\adminpanel\docs\LARAVEL_ROOT_CANDIDATES_FULL.txt"

"=== LARAVEL ROOT CANDIDATES FULL ===" | Out-File $out -Encoding UTF8

Get-ChildItem $extract -Recurse -Directory -ErrorAction SilentlyContinue |
    Where-Object {
        $_.FullName -notmatch "\\vendor\\|\\node_modules\\|\\storage\\framework\\|\\bootstrap\\cache\\" -and
        (Test-Path (Join-Path $_.FullName "artisan")) -and
        (Test-Path (Join-Path $_.FullName "composer.json")) -and
        (Test-Path (Join-Path $_.FullName "routes\api.php"))
    } |
    ForEach-Object {
        $_.FullName | Out-File $out -Append -Encoding UTF8
    }

Get-Content $out

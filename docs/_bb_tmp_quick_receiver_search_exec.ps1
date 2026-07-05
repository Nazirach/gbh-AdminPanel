Set-StrictMode -Version Latest
$ErrorActionPreference = 'Continue'

$root = 'C:\deploy\adminpanel'
Set-Location $root

$docs = Join-Path $root 'docs'
if (!(Test-Path $docs)) { New-Item -ItemType Directory -Force -Path $docs | Out-Null }

$outTxt = Join-Path $docs '_bb_tmp_quick_receiver_search_findings.txt'
$outCsv = Join-Path $docs 'DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv'
$outImportantCsv = Join-Path $docs 'DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv'
$outReport = Join-Path $docs 'DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md'

$excludeRegex = "\\(vendor|node_modules|storage|bootstrap\\cache|build|dist|\\.git|public\\assets\\plugins)\\"

# Search only source-like folders/files (fast-ish baseline)
$files = Get-ChildItem -Path $root -Recurse -File -ErrorAction SilentlyContinue | Where-Object {
    $_.FullName -notmatch $excludeRegex -and (
        $_.FullName -match "\\routes\\" -or
        $_.FullName -match "\\app\\" -or
        $_.FullName -match "\\src\\" -or
        $_.FullName -match "\\pages\\" -or
        $_.FullName -match "\\api\\" -or
        $_.FullName -match "\\server\\" -or
        $_.FullName -match "\\controllers\\" -or
        $_.FullName -match "\\resources\\views\\"
    ) -and (
        $_.Name -like "*.php" -or
        $_.Name -like "*.blade.php" -or
        $_.Name -like "*.js" -or
        $_.Name -like "*.ts" -or
        $_.Name -like "*.tsx" -or
        $_.Name -like "*.jsx"
    )
}

"[INFO] Files scanned: $($files.Count)" | Out-File -FilePath $outTxt -Encoding UTF8 -Append

$patterns = @(
    'delete-user',
    '/api/delete-user',
    'api/delete-user',
    'deleteUser',
    'delete_user',
    'Route::post',
    'router.post',
    'app.post',
    'function deleteUser',
    'uuid'
)

$hits = New-Object System.Collections.Generic.List[object]

foreach ($file in $files) {
    try {
        $content = Get-Content -LiteralPath $file.FullName -Raw -ErrorAction SilentlyContinue
        if ($null -eq $content) { continue }

        foreach ($p in $patterns) {
            if ($content -match [regex]::Escape($p)) {
                # get first matching line
                $lines = $content -split "`r?`n"
                $idx = 0
                $foundLine = $null
                for ($i=0; $i -lt $lines.Count; $i++) {
                    if ($lines[$i] -match [regex]::Escape($p)) {
                        $idx = $i + 1
                        $foundLine = $lines[$i].Trim()
                        break
                    }
                }

                $hits.Add([PSCustomObject]@{
                    File = $file.FullName
                    LineNumber = $idx
                    Line = $foundLine
                    Pattern = $p
                }) | Out-Null
                break
            }
        }
    } catch {
        Write-Host "[WARN] Failed reading: $($file.FullName)"
    }
}


$hits | Export-Csv -Path $outCsv -NoTypeInformation -Encoding UTF8

$important = $hits | Where-Object {
    $_.Line -match 'delete-user|/api/delete-user|api/delete-user|Route::post|router.post|app.post'
}

$important | Export-Csv -Path $outImportantCsv -NoTypeInformation -Encoding UTF8

Write-Host "[OK] Hits CSV: $outCsv"
Write-Host "[INFO] Total hits: $($hits.Count)"
Write-Host "[OK] Important CSV: $outImportantCsv"
Write-Host "[INFO] Important hits: $($important.Count)"

$receiverCandidates = $important | Where-Object {
    $_.Line -match 'Route::post|router.post|app.post' -and
    $_.Line -match 'delete-user|api/delete-user'
}

$callerCandidates = $important | Where-Object {
    $_.Line -match 'delete-user|/api/delete-user|api/delete-user' -and
    $_.Line -notmatch 'Route::post|router.post|app.post'
}

$receiverText = ''
foreach ($h in ($receiverCandidates | Select-Object -First 80)) {
    $receiverText += "- $($h.File):$($h.LineNumber) => $($h.Line)`n"
}
if ([string]::IsNullOrWhiteSpace($receiverText)) {
    $receiverText = 'Tidak ada receiver route yang terkonfirmasi di scan lokal ini.'
}

$callerText = ''
foreach ($h in ($callerCandidates | Select-Object -First 120)) {
    $callerText += "- $($h.File):$($h.LineNumber) => $($h.Line)`n"
}
if ([string]::IsNullOrWhiteSpace($callerText)) {
    $callerText = 'Tidak ada caller hit yang relevan.'
}

$report = @"
# DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT

## 1. Tujuan
Mencari receiver endpoint /api/delete-user secara cepat di project lokal, dengan exclude vendor/node_modules/build/dist/.git.

## 2. Mode
Read-only. Tidak patch, tidak install, tidak migration, tidak commit/push, tidak ubah env.

## 3. Files scanned
$($files.Count)

## 4. CSV output
- docs/DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv
- docs/DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv

Total hits: $($hits.Count)
Important hits: $($important.Count)

## 5. Receiver route candidates
$receiverText

## 6. Caller candidates
$callerText

## 7. Kesimpulan awal
Jika receiver route candidates kosong, maka di project lokal ini belum ditemukan definisi route penerima /api/delete-user. Yang ditemukan kemungkinan hanya caller.

"@

$report | Out-File -FilePath $outReport -Encoding UTF8

"[OK] Report: $outReport" | Out-File -FilePath $outTxt -Encoding UTF8 -Append
Write-Host "[OK] Report: $outReport"
Write-Host "=== DONE ==="


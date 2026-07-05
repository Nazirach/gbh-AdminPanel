Set-StrictMode -Version Latest
$ErrorActionPreference = 'Continue'

$pat = '(?i)delete-user|/api/delete-user|api/delete-user|deleteUser|delete_user'

$files = Get-ChildItem -Path (Join-Path $PWD '.') -Recurse -File -ErrorAction SilentlyContinue | Where-Object {
    $_.FullName -match '\.(php|js|ts|tsx|jsx|blade\.php)$'
}

$hits = New-Object System.Collections.Generic.List[object]

foreach ($f in $files) {
    $content = Get-Content -LiteralPath $f.FullName -Raw -ErrorAction SilentlyContinue
    if ($null -eq $content) { continue }

    if ($content -match $pat) {
        $m = [regex]::Matches($content, $pat)
        if ($m.Count -gt 0) {
            $hits.Add([PSCustomObject]@{ File = $f.FullName; Match = $m[0].Value }) | Out-Null
        }
    }
}

$outCsv = Join-Path $PWD 'docs/DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv'
$hits | Select-Object -First 500 | Export-Csv -Path $outCsv -NoTypeInformation -Encoding UTF8

Write-Host "[OK] Hits CSV: $outCsv"
Write-Host "[INFO] Total hits: $($hits.Count)"


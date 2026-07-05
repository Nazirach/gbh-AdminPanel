param()
$ErrorActionPreference = 'Stop'

$patterns2 = @(
  'storeUrl',
  'websiteUrl',
  'store_url',
  'website_url',
  '/api/delete-user',
  'delete-user'
)

$searchRoot = @('.\resources\views', '.\app', '.\routes')

$items = Get-ChildItem -Path $searchRoot -Recurse -File -ErrorAction SilentlyContinue |
  Where-Object {
    $_.FullName -notmatch '\\(vendor|node_modules|storage|bootstrap\\cache|build|dist|.git)\\' -and
    $_.Extension -match '\\.(php|blade\\.php|js)$'
  }

$hits2 = $items | Select-String -Pattern $patterns2 -CaseSensitive:$false -Context 2,8 | ForEach-Object {
  [PSCustomObject]@{
    Path = $_.Path
    LineNumber = $_.LineNumber
    Line = $_.Line.Trim()
  }
}

$outPath2 = '.\docs\WEBSITE_STORE_URL_USAGE_HITS.csv'
$hits2 | Export-Csv -Path $outPath2 -NoTypeInformation -Encoding UTF8

$hits2 | Select-Object -First 120 | Format-Table -AutoSize
Write-Host ('CSV_SAVED=' + $outPath2)


param()
$ErrorActionPreference = 'Stop'

$patterns = @(
  'website_url',
  'store_url',
  'websiteUrl',
  'storeUrl',
  'web_version',
  'webVersion',
  'website_color',
  'websiteColor',
  'store_panel_color',
  'storePanelColor',
  'app_store_color',
  'appStoreColor',
  'settings/Version',
  "doc('Version')",
  'doc("Version")',
  'Version'
)

$searchRoot = @('.\resources\views', '.\app', '.\routes')

$items = Get-ChildItem -Path $searchRoot -Recurse -File -ErrorAction SilentlyContinue |
  Where-Object {
    $_.FullName -notmatch '\\(vendor|node_modules|storage|bootstrap\\cache|build|dist|.git)\\' -and
    $_.Extension -match '\\.(php|blade\\.php|js)$'
  }

$hits = $items | Select-String -Pattern $patterns -CaseSensitive:$false -Context 2,8 | ForEach-Object {
  [PSCustomObject]@{
    Path = $_.Path
    LineNumber = $_.LineNumber
    Line = $_.Line.Trim()
  }
}

$outPath = '.\docs\WEBSITE_SETTINGS_FIELD_HITS.csv'
$hits | Export-Csv -Path $outPath -NoTypeInformation -Encoding UTF8

$hits | Select-Object -First 120 | Format-Table -AutoSize
Write-Host ('CSV_SAVED=' + $outPath)


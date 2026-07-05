param(
  [string[]]$Roots = @(
    'C:\deploy',
    'C:\Users\Hp\Desktop',
    'C:\Users\Hp\Documents',
    'C:\Users\Hp\Downloads'
  ),
  [string]$OutputCsv = '',
  [switch]$RunFullSearch
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'SilentlyContinue'

$keywords = 'emart|store|website|web|panel|safe|customer|vendor|restaurant|delivery|admin'

function Get-CandidateFolders {
  $found = @()
  foreach($root in $Roots){
    if(Test-Path $root){
      $dirs = Get-ChildItem -Path $root -Directory -Recurse -ErrorAction SilentlyContinue | 
        Where-Object { $_.FullName -match $keywords } |
        Select-Object -ExpandProperty FullName
      $found += $dirs
    }
  }
  $found | Sort-Object -Unique
}

function Is-ProjectCandidate {
  param([string]$Path)
  if(-not (Test-Path $Path)){ return $false }

  $hasComposer = Test-Path (Join-Path $Path 'composer.json')
  $hasPackage = Test-Path (Join-Path $Path 'package.json')
  $hasRoutes = (Test-Path (Join-Path $Path 'routes\api.php')) -or (Test-Path (Join-Path $Path 'routes\web.php'))
  $hasApp = Test-Path (Join-Path $Path 'app\Http\Controllers')
  $hasSrcOrPages = (Test-Path (Join-Path $Path 'src')) -or (Test-Path (Join-Path $Path 'pages'))

  return ($hasComposer -or $hasPackage -or $hasRoutes -or $hasApp -or $hasSrcOrPages)
}

function Search-DeleteUserEndpoint {
  param([string]$Target)

  if(-not (Test-Path $Target)){ return }

  $patterns = @(
    'delete-user',
    '/api/delete-user',
    'api/delete-user',
    'deleteUser',
    'delete_user',
    'destroyUser',
    'removeUser',
    'uuid',
    'Route::post',
    'router.post',
    'app.post'
  )

  $patternRegex = ($patterns | ForEach-Object { [regex]::Escape($_) }) -join '|'

  $extOk = '(php|js|ts|tsx|jsx|json|yaml|yml|txt)$'
  $dirOk = '(routes|app|src|pages|api|server|controllers)\\'

  Get-ChildItem -Path $Target -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
      $_.Extension -match '^\.((php)|(js)|(ts)|(tsx)|(jsx)|(json)|(ya?ml)|(txt))$' -and
      $_.FullName -match $dirOk
    } |
    Select-String -Pattern $patternRegex -CaseSensitive:$false -Context 2,8 |
    ForEach-Object {
      [pscustomobject]@{
        Path = $_.Path
        LineNumber = $_.LineNumber
        MatchedLine = ($_.Line -replace '\s+', ' ').Trim()
        Context = (($_.Context.PreContext + $_.Line + $_.Context.PostContext) -join ' || ').Trim()
      }
    }
}

# ---------------- MAIN ----------------
Write-Output "[INFO] Starting discovery (read-only) ..."

$candidates = Get-CandidateFolders

# Reduce noise: keep only candidates that look like actual app roots
# (heuristic)
$projectRoots = @()
foreach($c in $candidates){
  if(Is-ProjectCandidate -Path $c){
    $projectRoots += $c
  }
}

$projectRoots = $projectRoots | Sort-Object -Unique
Write-Output ("[INFO] Candidate project roots: {0}" -f $projectRoots.Count)

# Limit number to avoid huge runs unless explicitly requested
$limit = if($RunFullSearch){ 50 } else { 15 }
$projectRoots = $projectRoots | Select-Object -First $limit

$resultObjects = @()
foreach($p in $projectRoots){
  Write-Output ("[INFO] Searching: {0}" -f $p)
  $hits = Search-DeleteUserEndpoint -Target $p
  if($hits){
    $resultObjects += $hits
  }
}

if($OutputCsv -and $OutputCsv.Trim().Length -gt 0){
  $resultObjects | Export-Csv -NoTypeInformation -Encoding UTF8 -Path $OutputCsv
}

# Always output to console (top 200)
$resultObjects | Select-Object -First 200 | Format-Table -AutoSize

Write-Output "[INFO] Done. Results count: $($resultObjects.Count)"


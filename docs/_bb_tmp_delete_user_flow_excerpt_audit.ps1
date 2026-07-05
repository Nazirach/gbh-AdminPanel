Set-StrictMode -Version Latest
$ErrorActionPreference = "Continue"

$root = "C:\deploy\adminpanel"
Set-Location $root

$docs = Join-Path $root "docs"
if (!(Test-Path $docs)) {
    New-Item -ItemType Directory -Force -Path $docs | Out-Null
}

$out = Join-Path $docs "DELETE_USER_FLOW_EXCERPTS.txt"

$targets = @(
    @{ File = "resources\views\employee\index.blade.php"; Start = 620; End = 675 },
    @{ File = "resources\views\providers\index.blade.php"; Start = 570; End = 625 },
    @{ File = "resources\views\stores\index.blade.php"; Start = 675; End = 725 },
    @{ File = "resources\views\users\index.blade.php"; Start = 455; End = 510 },
    @{ File = "resources\views\vendors\index.blade.php"; Start = 750; End = 805 }
)

$result = "# DELETE USER FLOW EXCERPTS`n"

foreach ($t in $targets) {
    $path = Join-Path $root $t.File
    $result += "`n===== $($t.File) lines $($t.Start)-$($t.End) =====`n"

    if (!(Test-Path $path)) {
        $result += "FILE_NOT_FOUND: $path`n"
        continue
    }

    $lines = Get-Content -Path $path -Encoding UTF8
    for ($i = $t.Start; $i -le $t.End; $i++) {
        if ($i -lt $lines.Count) {
            $lineNumber = $i + 1
            $result += "$lineNumber`t$($lines[$i])`n"
        }
    }
}

$result | Out-File -FilePath $out -Encoding UTF8

Write-Host "[OK] Excerpts written: $out"

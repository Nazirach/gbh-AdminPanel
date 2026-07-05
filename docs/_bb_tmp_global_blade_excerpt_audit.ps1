Set-StrictMode -Version Latest
$ErrorActionPreference = "Continue"

$root = "C:\deploy\adminpanel"
Set-Location $root

$file = Join-Path $root "resources\views\settings\app\global.blade.php"
$out = Join-Path $root "docs\GLOBAL_BLADE_WEBSITE_SETTINGS_EXCERPTS.txt"

$lines = Get-Content -Path $file -Encoding UTF8

$sections = @(
    @{ Name = "HTML fields 470-510"; Start = 470; End = 510 },
    @{ Name = "Version var/load 535-550"; Start = 535; End = 550 },
    @{ Name = "Load version to UI 730-750"; Start = 730; End = 750 },
    @{ Name = "Read input variables 805-830"; Start = 805; End = 830 },
    @{ Name = "Save payload 910-985"; Start = 910; End = 985 }
)

$result = ""

foreach ($s in $sections) {
    $result += "`n===== $($s.Name) =====`n"
    for ($i = $s.Start; $i -le $s.End; $i++) {
        if ($i -lt $lines.Count) {
            $lineNumber = $i + 1
            $result += "$lineNumber`t$($lines[$i])`n"
        }
    }
}

$result | Out-File -FilePath $out -Encoding UTF8

Write-Host "[OK] Excerpts written: $out"


param(
    [string]$Label = "Manual Git Snapshot"
)

$ErrorActionPreference = "Continue"

$root = "C:\deploy\adminpanel"
Set-Location $root

$now = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$stamp = Get-Date -Format "yyyyMMdd_HHmmss"

$buku = ".\docs\BUKU_BESAR_AI4_WEB_APP.md"
$latestReport = ".\docs\AI4_GIT_LATEST_SNAPSHOT.md"
$archiveReport = ".\docs\AI4_GIT_SNAPSHOT_$stamp.md"

function Add-Line {
    param(
        [string]$Path,
        [string]$Text = ""
    )
    Add-Content -Path $Path -Encoding UTF8 -Value $Text
}

function Run-GitText {
    param(
        [string[]]$Args
    )

    try {
        $out = & git @Args 2>&1 | Out-String
        return $out.TrimEnd()
    } catch {
        return "ERROR: $($_.Exception.Message)"
    }
}

function Count-NonEmptyLines {
    param([string]$Text)

    if ([string]::IsNullOrWhiteSpace($Text)) {
        return 0
    }

    return (($Text -split "`r?`n") | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }).Count
}

$isGitText = Run-GitText @("rev-parse", "--is-inside-work-tree")
$isGit = ($isGitText.Trim() -eq "true")

Set-Content -Path $latestReport -Encoding UTF8 -Value "# AI-4 GIT LATEST SNAPSHOT"
Add-Line $latestReport ""
Add-Line $latestReport "## Label"
Add-Line $latestReport $Label
Add-Line $latestReport ""
Add-Line $latestReport "## Tanggal"
Add-Line $latestReport $now
Add-Line $latestReport ""
Add-Line $latestReport "## Mode"
Add-Line $latestReport "READ_ONLY_GIT_TO_BUKU_BESAR"

if (-not $isGit) {
    Add-Line $latestReport ""
    Add-Line $latestReport "## Status"
    Add-Line $latestReport "Folder ini tidak terdeteksi sebagai Git repository."

    Copy-Item $latestReport $archiveReport -Force

    Add-Line $buku ""
    Add-Line $buku "---"
    Add-Line $buku ""
    Add-Line $buku "### AI4-GIT-SNAPSHOT-$stamp — $Label"
    Add-Line $buku "- Tanggal: $now"
    Add-Line $buku "- Mode: READ_ONLY_GIT_TO_BUKU_BESAR"
    Add-Line $buku "- Status: SELESAI"
    Add-Line $buku "- Hasil: Folder belum terdeteksi sebagai Git repository."
    Add-Line $buku "- Output terbaru: docs/AI4_GIT_LATEST_SNAPSHOT.md"
    Add-Line $buku "- Arsip: docs/AI4_GIT_SNAPSHOT_$stamp.md"
    Add-Line $buku "- Tidak ada git add, commit, push, pull, reset, checkout, atau merge."

    Write-Host "Folder belum terdeteksi sebagai Git repository." -ForegroundColor Yellow
    exit
}

$branch = Run-GitText @("branch", "--show-current")
$latestCommit = Run-GitText @("log", "--oneline", "-1")
$remote = Run-GitText @("remote", "-v")
$statusShort = Run-GitText @("status", "--short")
$statusFull = Run-GitText @("status")
$diffStat = Run-GitText @("diff", "--stat")
$diffNameOnly = Run-GitText @("diff", "--name-only")
$last10 = Run-GitText @("log", "--oneline", "-10")

$changedCount = Count-NonEmptyLines $statusShort

$ai4Candidates = @(
    "routes/web.php",
    "app/Http/Controllers/WebsitePanelController.php",
    "resources/views/layouts/website_panel.blade.php",
    "resources/views/website_panel/index.blade.php",
    "resources/views/website_panel/homepage.blade.php",
    "resources/views/website_panel/footer.blade.php",
    "resources/views/website_panel/cms.blade.php",
    "resources/views/website_panel/preview.blade.php",
    "resources/views/website_panel/legacy_map.blade.php",
    "resources/views/website_panel/partials/sidebar.blade.php",
    "resources/views/website_panel/partials/topbar.blade.php",
    "public/ai4-website-panel/css/website-panel.css",
    "public/ai4-website-panel/js/website-panel.js",
    "docs/BUKU_BESAR_AI4_WEB_APP.md",
    "docs/AI4_GIT_STATUS_REPORT.md",
    "docs/AI4_GIT_COMMIT_CANDIDATE_AUDIT.md",
    "docs/AI4_GIT_LATEST_SNAPSHOT.md",
    "docs/AI4_WEBSITE_PANEL_READ_ONLY_PREVIEW_AUDIT.md",
    "docs/AI4_WEBSITE_PANEL_ROUTE_HYGIENE_AUDIT.md",
    "docs/AI4_WEBSITE_PANEL_READ_ONLY_LEGACY_PREVIEW_REPORT.md"
)

$ai4StatusLines = New-Object System.Collections.Generic.List[string]

foreach ($file in $ai4Candidates) {
    $status = Run-GitText @("status", "--short", "--", $file)

    if (-not [string]::IsNullOrWhiteSpace($status)) {
        $ai4StatusLines.Add($status)
    } elseif (Test-Path $file) {
        $ai4StatusLines.Add("CLEAN/ADA       $file")
    } else {
        $ai4StatusLines.Add("TIDAK ADA       $file")
    }
}

$ai4StatusText = ($ai4StatusLines -join "`r`n")
$ai4ChangedCount = ($ai4StatusLines | Where-Object { $_ -notmatch "^CLEAN/ADA" -and $_ -notmatch "^TIDAK ADA" }).Count
$ai4DiffStat = Run-GitText (@("diff", "--stat", "--") + $ai4Candidates)

Add-Line $latestReport ""
Add-Line $latestReport "## Git Identity"
Add-Line $latestReport '```text'
Add-Line $latestReport "Branch: $branch"
Add-Line $latestReport "Latest Commit: $latestCommit"
Add-Line $latestReport '```'

Add-Line $latestReport ""
Add-Line $latestReport "## Remote"
Add-Line $latestReport '```text'
Add-Line $latestReport $remote
Add-Line $latestReport '```'

Add-Line $latestReport ""
Add-Line $latestReport "## Git Status Short"
Add-Line $latestReport '```text'
Add-Line $latestReport $statusShort
Add-Line $latestReport '```'

Add-Line $latestReport ""
Add-Line $latestReport "## Git Status Full"
Add-Line $latestReport '```text'
Add-Line $latestReport $statusFull
Add-Line $latestReport '```'

Add-Line $latestReport ""
Add-Line $latestReport "## Diff Stat Semua File Tracked"
Add-Line $latestReport '```text'
Add-Line $latestReport $diffStat
Add-Line $latestReport '```'

Add-Line $latestReport ""
Add-Line $latestReport "## Diff Name Only Semua File Tracked"
Add-Line $latestReport '```text'
Add-Line $latestReport $diffNameOnly
Add-Line $latestReport '```'

Add-Line $latestReport ""
Add-Line $latestReport "## AI-4 Candidate Status"
Add-Line $latestReport '```text'
Add-Line $latestReport $ai4StatusText
Add-Line $latestReport '```'

Add-Line $latestReport ""
Add-Line $latestReport "## AI-4 Candidate Diff Stat"
Add-Line $latestReport '```text'
Add-Line $latestReport $ai4DiffStat
Add-Line $latestReport '```'

Add-Line $latestReport ""
Add-Line $latestReport "## Last 10 Commits"
Add-Line $latestReport '```text'
Add-Line $latestReport $last10
Add-Line $latestReport '```'

Add-Line $latestReport ""
Add-Line $latestReport "## Prinsip"
Add-Line $latestReport "- Snapshot ini hanya membaca Git."
Add-Line $latestReport "- Tidak ada git add."
Add-Line $latestReport "- Tidak ada commit."
Add-Line $latestReport "- Tidak ada push."
Add-Line $latestReport "- Tidak ada pull."
Add-Line $latestReport "- Tidak ada reset."
Add-Line $latestReport "- Tidak ada checkout."
Add-Line $latestReport "- Tidak ada merge."

Copy-Item $latestReport $archiveReport -Force

Add-Line $buku ""
Add-Line $buku "---"
Add-Line $buku ""
Add-Line $buku "### AI4-GIT-SNAPSHOT-$stamp — $Label"
Add-Line $buku "- Tanggal: $now"
Add-Line $buku "- Mode: READ_ONLY_GIT_TO_BUKU_BESAR"
Add-Line $buku "- Status: SELESAI"
Add-Line $buku "- Branch aktif: $branch"
Add-Line $buku "- Commit terakhir: $latestCommit"
Add-Line $buku "- Jumlah perubahan menurut git status --short: $changedCount"
Add-Line $buku "- Jumlah kandidat file AI-4 yang berubah/terdeteksi Git: $ai4ChangedCount"
Add-Line $buku "- Output terbaru: docs/AI4_GIT_LATEST_SNAPSHOT.md"
Add-Line $buku "- Arsip: docs/AI4_GIT_SNAPSHOT_$stamp.md"
Add-Line $buku "- Catatan kerja bersama: AI lain harus membaca Buku Besar dan snapshot Git terbaru sebelum patch agar tidak menimpa area kerja AI-4."
Add-Line $buku "- Tidak ada git add, commit, push, pull, reset, checkout, atau merge."
Add-Line $buku "- Area AI-4: Website Panel, landing page, public website view, preview, legacy map, asset public/ai4-website-panel."

Write-Host "`n=== AI-4 GIT SNAPSHOT WRITTEN TO BUKU BESAR ===" -ForegroundColor Green
Write-Host "Latest: docs/AI4_GIT_LATEST_SNAPSHOT.md" -ForegroundColor Green
Write-Host "Archive: docs/AI4_GIT_SNAPSHOT_$stamp.md" -ForegroundColor Green
Write-Host 'PWsh wrapper running';
$ErrorActionPreference = 'Stop';
$patterns = @('website_url');
Write-Host ('patterns_count=' + $patterns.Count);


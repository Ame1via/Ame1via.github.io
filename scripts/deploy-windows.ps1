param(
  [string]$Domain = "amema.tokyo",
  [string]$SiteRoot = "C:\sites\amema.tokyo",
  [string]$RepoUrl = "https://github.com/Ame1via/Ame1via.github.io.git",
  [switch]$SkipInstall,
  [switch]$SkipVpn,
  [switch]$ServeLocalOnly
)

$ErrorActionPreference = "Stop"

function Assert-Admin {
  $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
  $principal = New-Object Security.Principal.WindowsPrincipal($identity)
  if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    throw "Please run PowerShell as Administrator."
  }
}

function Ensure-Command {
  param(
    [string]$Command,
    [string]$WingetId
  )

  if (Get-Command $Command -ErrorAction SilentlyContinue) {
    return
  }

  if ($SkipInstall) {
    throw "$Command is not installed. Re-run without -SkipInstall or install $WingetId manually."
  }

  Write-Host "Installing $WingetId ..."
  winget install --id $WingetId --exact --accept-package-agreements --accept-source-agreements
}

function Refresh-Path {
  $machine = [Environment]::GetEnvironmentVariable("Path", "Machine")
  $user = [Environment]::GetEnvironmentVariable("Path", "User")
  $env:Path = "$machine;$user"
}

Assert-Admin
New-Item -ItemType Directory -Force -Path $SiteRoot | Out-Null

if (-not $SkipInstall) {
  Ensure-Command -Command "git" -WingetId "Git.Git"
  Ensure-Command -Command "ruby" -WingetId "RubyInstallerTeam.RubyWithDevKit"
  Ensure-Command -Command "caddy" -WingetId "CaddyServer.Caddy"
  if (-not $SkipVpn) {
    Ensure-Command -Command "tailscale" -WingetId "Tailscale.Tailscale"
  }
  Refresh-Path
}

$SourceDir = Join-Path $SiteRoot "source"
$PublicDir = Join-Path $SiteRoot "public"
$CaddyRoot = $PublicDir -replace "\\", "/"
$Caddyfile = Join-Path $SiteRoot "Caddyfile"

if (Test-Path $SourceDir) {
  Write-Host "Updating repository ..."
  git -C $SourceDir fetch origin
  git -C $SourceDir checkout main
  git -C $SourceDir pull --ff-only origin main
} else {
  Write-Host "Cloning repository ..."
  git clone $RepoUrl $SourceDir
}

Push-Location $SourceDir
try {
  if (-not (Get-Command bundle -ErrorAction SilentlyContinue)) {
    gem install bundler
    Refresh-Path
  }

  bundle install
  bundle exec jekyll build --destination $PublicDir
} finally {
  Pop-Location
}

if ($ServeLocalOnly) {
  $caddySite = @"
:8080 {
  root * "$CaddyRoot"
  encode gzip zstd
  try_files {path} {path}/ =404
  file_server

  handle_errors {
    rewrite * /404.html
    file_server
  }
}
"@
} else {
  $caddySite = @"
$Domain {
  root * "$CaddyRoot"
  encode gzip zstd
  try_files {path} {path}/ =404
  file_server

  handle_errors {
    rewrite * /404.html
    file_server
  }
}
"@
}

Set-Content -Path $Caddyfile -Value $caddySite -Encoding UTF8

New-NetFirewallRule -DisplayName "Caddy HTTP 80" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 80 -ErrorAction SilentlyContinue | Out-Null
New-NetFirewallRule -DisplayName "Caddy HTTPS 443" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 443 -ErrorAction SilentlyContinue | Out-Null

$service = Get-Service caddy -ErrorAction SilentlyContinue
if ($service) {
  caddy reload --config $Caddyfile
  Restart-Service caddy
} else {
  caddy service install --config $Caddyfile
  caddy service start
}

if (-not $SkipVpn) {
  Write-Host ""
  Write-Host "Tailscale is installed for private VPN access."
  Write-Host "A browser login may open. After login, this machine can be reached from your own devices through Tailscale."
  Write-Host "If you want this Windows server to be an exit-node VPN, approve it in the Tailscale admin console after the next command."
  tailscale up --advertise-exit-node --accept-routes
}

Write-Host ""
Write-Host "Done."
Write-Host "Site source: $SourceDir"
Write-Host "Built site:  $PublicDir"
Write-Host "Caddyfile:   $Caddyfile"
if ($ServeLocalOnly) {
  Write-Host "Local URL:    http://localhost:8080"
} else {
  Write-Host "Public URL:   https://$Domain"
}

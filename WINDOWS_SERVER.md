# Windows Server Deployment

This repository is a GitHub Pages / Jekyll site. On a private Windows server, serve the generated `_site`-style output, not the raw repository folder. The PowerShell script below installs the needed tools, clones or updates the repository, builds it with Jekyll, serves it with Caddy, and installs Tailscale for private VPN access.

## One-command setup

Open PowerShell as Administrator and run:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
iwr https://raw.githubusercontent.com/Ame1via/Ame1via.github.io/main/scripts/deploy-windows.ps1 -OutFile "$env:TEMP\deploy-amema.ps1"
& "$env:TEMP\deploy-amema.ps1"
```

The default domain is `amema.tokyo`, and the default install path is:

```text
C:\sites\amema.tokyo
```

## Local-only test

If DNS is not ready yet, test on port `8080`:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
iwr https://raw.githubusercontent.com/Ame1via/Ame1via.github.io/main/scripts/deploy-windows.ps1 -OutFile "$env:TEMP\deploy-amema.ps1"
& "$env:TEMP\deploy-amema.ps1" -ServeLocalOnly
```

Then open:

```text
http://localhost:8080
```

## Updating the site later

After pushing changes to GitHub, run:

```powershell
& "C:\sites\amema.tokyo\source\scripts\deploy-windows.ps1" -SkipInstall
```

## DNS and router

For public hosting, point `amema.tokyo` to the Windows server public IP:

- `A` record: `amema.tokyo` -> server IPv4
- Optional `AAAA` record: `amema.tokyo` -> server IPv6

If the server is at home behind a router, forward these ports to the Windows server:

- TCP `80`
- TCP `443`

Do not expose Remote Desktop `3389` directly to the public internet. Use Tailscale to reach the server privately.

## VPN

The script installs Tailscale and runs:

```powershell
tailscale up --advertise-exit-node --accept-routes
```

Use normal Tailscale mode for private access to the Windows server. If you want all client traffic to exit through this server, approve the machine as an exit node in the Tailscale admin console, then select it as the exit node on your client device.

## Notes

- Caddy automatically requests HTTPS certificates when DNS points to the server and ports `80`/`443` are reachable.
- Jekyll/Liquid pages such as `/blog/`, `/archive/`, and post pages require the build step.
- The raw repository contains project notes that `_config.yml` excludes from the generated site.

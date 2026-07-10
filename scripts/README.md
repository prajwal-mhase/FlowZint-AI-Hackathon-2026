# Scripts

This folder contains helper scripts for local development, previewing, and hackathon demos.

## Current Scripts

```text
dev.ps1                     Placeholder developer helper
static-preview-server.mjs   Tiny Node server for preview.html
start-preview.cmd           Windows shortcut for the static preview server
```

## Run The Static Preview

From the repository root:

```powershell
node scripts/static-preview-server.mjs
```

Open:

```text
http://127.0.0.1:3003
```

On Windows, you can also run:

```powershell
scripts\start-preview.cmd
```

Keep the terminal open while viewing the preview.

## GitHub Notes

Scripts should be deterministic, small, and safe for reviewers to run. Avoid committing machine-specific paths unless the script is explicitly Windows-only and documented.


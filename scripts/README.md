# Scripts

Helper scripts for local development, previews, and hackathon demos.

## Available scripts

```text
dev.ps1                       Developer helper (placeholder; expand in later phases)
static-preview-server.mjs   Static server for `preview.html`
start-preview.cmd            Windows shortcut for the static preview server
```

## Run the static preview

From the repository root:

```powershell
node scripts/static-preview-server.mjs
```

Open:

```text
http://127.0.0.1:3003
```

On Windows you can also run:

```powershell
scripts\start-preview.cmd
```

Keep the terminal open while viewing the preview.


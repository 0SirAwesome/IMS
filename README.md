website html file

Refer to `SPEC.md` before making changes.

## Cloudflare Pages auth runtime

This project now uses **Pages advanced mode** with root `_worker.js` routing auth/API requests through shared `runtime-handler.js` logic (also used by `worker.js`).

### Required Pages environment variables / secrets

Set these in the Pages project settings, then redeploy:
- `DISCORD_CLIENT_ID`
- `DISCORD_CLIENT_SECRET`
- `DISCORD_REDIRECT_URI` (Pages callback URL, e.g. `https://indianmedicalserver.pages.dev/api/auth/discord/callback`)
- `DISCORD_SESSION_SECRET` (or compatible auth secret)
- Any Firebase/session variables required by callback/session flows

Worker secrets are not automatically inherited by Pages.

# CLAUDE.md – IMS (Indian Medical Server)

This file documents the codebase structure, development conventions, and workflows for AI assistants working in this repository.

---

## Project Overview

**IMS** is a single-page web application for Indian MBBS medical students. It provides:
- A 4-year MBBS study guide with subject resources
- A daily medical word game (MedWordle)
- A spaced-repetition flashcard system (Daily Clinical Pearls)
- A Pomodoro-style study timer with P2P squad rooms (The Ward)
- A progress tracker with streaks, achievements, and leaderboards

**Current version:** `IMS v0.5.9` (see top of `index.html`)

**Live deployment:** Cloudflare Workers / Pages (`indianmedicalserver.pages.dev`)

---

## Repository Structure

```
IMS/
├── index.html                          # Main app (HTML + CSS + JS, ~6,978 lines)
├── sections/                           # Modular section scripts loaded by index.html
│   ├── study-deck.section.js           # MBBS Study Guide (4-year curriculum)
│   ├── the-ward.section.js             # Pomodoro timer + PeerJS squad rooms
│   ├── daily-clinical-pearls.section.js # Flashcard/spaced-repetition system
│   ├── medwordle.section.js            # Daily medical Wordle game
│   └── progress-tracker.section.js    # Subject progress tracking UI
├── wrangler.jsonc                      # Cloudflare Workers deployment config
├── .gitignore                          # Excludes .wrangler, .dev.vars, .env
├── README.md                           # Minimal project description
└── CLAUDE.md                           # This file
```

### Key Architectural Pattern
Sections in `sections/` are loaded into `index.html` at runtime via `document.write()`. Each section file exports its UI HTML as a string and defines its JavaScript functions directly on the `window` object.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Language | Vanilla JavaScript (ES6+), HTML5, CSS3 |
| Framework | None – no build step, no bundler |
| P2P Networking | PeerJS v1.5.2 (squad rooms) |
| Database | Firebase Realtime Database v10.12.2 |
| Offline storage | `localStorage` (offline-first cache) |
| Fonts | Google Fonts: Lora, DM Sans, JetBrains Mono |
| Deployment | Cloudflare Workers (static asset hosting) |
| External APIs | Discord (community stats), Firebase |

---

## Pages / Features

| Page ID | Route Trigger | Section File | Description |
|---|---|---|---|
| `page-home` | default | `index.html` | Landing, Discord stats, featured resources |
| `page-guide` | `showPage('guide')` | `study-deck.section.js` | 4-year MBBS curriculum |
| `page-medwordle` | `showPage('medwordle')` | `medwordle.section.js` | Daily medical Wordle + flashcard |
| `page-pearls` | `showPage('pearls')` | `daily-clinical-pearls.section.js` | Spaced-repetition flashcards |
| `page-ward` | `showPage('ward')` | `the-ward.section.js` | Pomodoro timer + squad rooms |
| `page-progress` | `showPage('progress')` | `progress-tracker.section.js` | Subject progress tracking |

Navigation is handled by `showPage(pageId)` — this shows/hides `.page` divs and updates the active nav link.

---

## Global Window API

69 functions are exported to `window` for use in inline HTML event handlers. Key functions:

**Navigation / Auth**
- `showPage(id)` — navigate between pages
- `setYear(year)` — switch study guide year
- `navLogin()`, `navSignup()`, `navContinueAsGuest()` — authentication modals

**Squad Rooms (PeerJS)**
- `wardCreateRoom()` — create a P2P study room
- `wardJoinRoom()` — join an existing room by code
- `wardLeaveRoom()` — disconnect from current room

**Timer**
- `tickTimer()` — called each second by `setInterval`
- `wardEndSession()` — end a Pomodoro session and save stats

**Flashcards**
- `pearlsFlip()` — flip the current card
- `pearlsRate(rating)` — rate card difficulty (spaced repetition)

**Admin**
- `runWeeklyReset()` — resets `weeklyMins` for all users (use with caution)
- Accessible at `/testing/123` in the browser

---

## Data Layer

### Storage Strategy (Offline-First)
1. `localStorage` is the primary read/write target and acts as an offline cache.
2. Firebase Realtime Database is the authoritative store for registered users.
3. On load, data is fetched from Firebase; if unavailable, `localStorage` fallback is used.
4. Saves are debounced (2-second delay) to avoid excessive Firebase writes.
5. Conflict resolution uses `_savedAt` timestamp — whichever is newer wins.
6. **Guest users** are stored in `localStorage` only (never written to Firebase).

### DB Abstraction (`DB` object in `index.html`)
```js
DB.getUser(name)      // Async fetch; falls back to localStorage sync
DB.saveUser(u)        // Async write with localStorage backup
saveUserSafely(user)  // Debounced wrapper — use this for incremental updates
```

### Firebase User Schema
```
users/{username}/
  username         string
  displayName      string
  passwordHash     string    (FNV-1a 32-bit hash — NOT bcrypt)
  totalMins        number
  weeklyMins       number
  dailyMins        { "YYYY-MM-DD": minutes }
  sessions         array
  streak           number
  longestStreak    number
  hourlyActivity   array[24]
  achievements     array
  friends          array
  lastStudyDate    string
  createdAt        timestamp
  isGuest          boolean
  _savedAt         timestamp  (conflict resolution key)
```

### Firebase Config
Firebase credentials are embedded directly in `index.html` (standard practice for Firebase web projects). The config includes:
- `apiKey`, `authDomain`, `databaseURL`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`

---

## CSS Design System

CSS custom properties are defined in `:root` at the top of `index.html`:

```css
--bg: #e6edf7           /* page background */
--surface: #f2f6fc      /* card/panel background */
--surface-2: #dce7f5    /* secondary surface */
--ink: #1c2333          /* primary text */
--ink-2: #44546a        /* secondary text (IMS steel blue) */
--ink-3: #7a8fa6        /* muted text */
--accent: #44546a       /* primary accent */
--accent-light: #4472c4 /* secondary accent (IMS medium blue) */
--gold: #ffc000         /* badges/achievements */
--orange: #ed7d31       /* warnings/accents */
--green: #166534        /* success states */
--purple: #5b21b6       /* special states */
--border: #c8d6eb       /* borders */
--radius: 12px          /* default border radius */
--radius-sm: 8px        /* small border radius */
```

Always use these tokens instead of hardcoded colours.

---

## Development Workflow

### Local Development
```bash
# Install Wrangler if not present
npm install -g wrangler

# Start local dev server (serves from repo root)
wrangler dev
```
There is no `package.json` — Wrangler is the only required tooling.

### Deployment
```bash
wrangler deploy
```
Deploys all static assets from the repo root to Cloudflare Workers.

### No Build Step
This project has no compilation, transpilation, or bundling. Edit files directly and reload the browser. Cloudflare Workers serves the root directory as-is.

### Environment / Secrets
- `.dev.vars` — local secrets for Wrangler (excluded from git)
- `.env` — environment variables (excluded from git)
- See `.dev.vars.example` / `.env.example` for required keys

---

## Testing

There is no automated test suite. Verification is manual:
- Open the app in a browser and exercise each feature
- Use `runWeeklyReset()` via the browser console (or `/testing/123`) for admin testing
- Firebase writes can be inspected in the Firebase console

When adding or modifying features, manually verify:
1. The feature works for guest users (localStorage only)
2. The feature works for registered users (Firebase sync)
3. The feature degrades gracefully offline

---

## Git Conventions

### Branches
- `master` — stable production branch
- Feature branches are merged via Pull Requests
- Claude agent branches follow the pattern: `claude/<task-id>`

### Commit Messages
Write clear, imperative commit messages:
```
Add spaced repetition scoring to Daily Clinical Pearls
Fix squad room reconnection bug on mobile Safari
Update MBBS Year 3 Surgery resource links
```

### PR Workflow
1. Branch from `master`
2. Implement changes
3. Open a PR with a descriptive title
4. Merge to `master` after review

---

## Code Conventions

### File Organisation
- All global state and shared utilities live in `index.html`
- Each page's HTML and JS logic belongs in its corresponding `sections/*.section.js` file
- New pages should follow the existing section file pattern

### JavaScript Style
- Vanilla ES6+ only — no TypeScript, no transpiler
- Functions used in HTML `onclick=` attributes must be assigned to `window`
- Use `const` for functions; use `let` only where reassignment is needed
- Prefer `async/await` over raw `.then()` chains

### Adding a New Page / Section
1. Create `sections/my-feature.section.js`
2. Export the page HTML as a string and call `document.write()` to inject it
3. Define all JS functions on `window`
4. Add a nav link in `index.html`
5. Register the page ID in the `showPage()` handler in `index.html`

### Authentication Notes
- Passwords are hashed with **FNV-1a 32-bit** before storage — this is a fast hash, not a password hash (no salt, no stretching). Do not add sensitive data to user profiles.
- Guest mode requires no credentials; data is lost if `localStorage` is cleared.
- Username constraints: max 14 characters, alphanumeric + underscore only.

### PeerJS / Squad Rooms
- Room codes are short alphanumeric strings converted to deterministic Peer IDs via `peerIdFromCode()`
- The host creates a `Peer` with a fixed ID derived from the room code
- Clients create anonymous `Peer` instances then call `peer.connect(hostId)`
- Message protocol uses typed objects: `{type, ...payload}`

---

## Known Limitations / TODOs

- No automated tests — manual testing only
- Password hashing uses FNV-1a (weak for security; upgrade to bcrypt/Argon2 if auth becomes critical)
- `index.html` is large (~7k lines); further modularisation would improve maintainability
- No CI/CD pipeline; deployments are manual via `wrangler deploy`
- No rate limiting on authentication or Firebase writes

---

## Quick Reference

| Task | How |
|---|---|
| Run locally | `wrangler dev` |
| Deploy | `wrangler deploy` |
| Add a new page | Create `sections/*.section.js`, register in `showPage()` |
| Save user data | Use `saveUserSafely(user)` (debounced) |
| Read user data | Use `await DB.getUser(name)` |
| Reset weekly stats | `runWeeklyReset()` in browser console |
| Inspect data | Firebase console → `imsdata-2cc1b` project |
| Change colours | Edit CSS variables in `:root` block in `index.html` |

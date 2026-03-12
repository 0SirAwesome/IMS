# IMS Project Spec (Single Source of Truth)

## Purpose
This spec is the baseline reference for all future changes in this repository.
Before making edits, review this file and keep implementation aligned with these rules.

## Current Structure
- `index.html` is the **main file** and contains the Home Page shell.
- Non-home page markup is split into section modules loaded by `index.html`:
  - `sections/study-deck.section.js`
  - `sections/the-ward.section.js`
  - `sections/medwordle.section.js`
  - `sections/daily-clinical-pearls.section.js`
  - `sections/progress-tracker.section.js`

## Functional Invariants (Do Not Break)
1. Keep all existing page IDs unchanged:
   - `page-home`, `page-guide`, `page-ward`, `page-medwordle`, `page-pearls`, `page-progress`
2. Keep existing global function names and event handlers unchanged unless explicitly requested.
3. Preserve current design language (styles, spacing, typography, color intent).
4. Prefer minimal, targeted edits over full rewrites.
5. Maintain compatibility with static hosting (e.g., Cloudflare Pages).

## Section Injection Rule
- Section files should inject HTML using safe DOM insertion (not `document.write`).
- Use the current pattern:
  - `const scriptTag = document.currentScript`
  - `scriptTag.insertAdjacentHTML('beforebegin', html)`

## Change Workflow
When updating the UI or page structure:
1. Modify only the relevant section file(s) and/or `index.html` include lines.
2. Verify no accidental renames of IDs, classes used by JS hooks, or function calls.
3. Run quick checks:
   - Ensure `index.html` still includes all required section scripts.
   - Ensure no `document.write(` remains in section modules.
   - Ensure section files are valid JavaScript.

## Validation Commands
Use these commands for quick validation:

```bash
rg -n "sections/.*section\\.js" index.html
rg -n "document\\.write\\(" index.html sections/*.js
node -e "const fs=require('fs');for(const f of fs.readdirSync('sections')){if(f.endsWith('.js')){new Function(fs.readFileSync('sections/'+f,'utf8'));console.log('ok',f)}}"
```

## Notes
- If future requirements conflict with this file, update this spec in the same change set so it remains authoritative.

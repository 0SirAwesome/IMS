document.write(`\n<!-- ════════════════════════ BRANCH: Recall Flashcards ════════════════════════ -->
<div class="page" id="page-recall">

<style>
/* ── RECALL FLASHCARDS PAGE STYLES ── */

/* Dark theme variable overrides — scoped to this page.
   The site's :root uses light tokens; all feature pages override
   them with dark values exactly as Ward and Pearls do. */
#page-recall {
  /* Page */
  --bg:          #070f1d;
  --surface:     rgba(12,24,48,0.92);
  --surface-2:   rgba(8,16,36,0.80);
  /* Text */
  --ink:         #c8dff8;
  --ink-2:       rgba(160,195,240,0.78);
  --ink-3:       rgba(140,175,220,0.44);
  /* Borders & accents */
  --border:      rgba(68,114,196,0.22);
  --accent:      #2a3a56;
  --accent-light: #4472c4;
  /* Status colours — override the light-theme values */
  --green:       #2d9e57;
  --orange:      #ed7d31;
  --purple:      #7c5cbf;
  --gold:        #ffc000;
  --radius:      12px;
  --radius-sm:   8px;

  min-height: 100vh;
  background: linear-gradient(160deg, #06101e 0%, #0d1e35 40%, #112540 70%, #071325 100%);
  font-family: 'DM Sans', sans-serif;
  color: #c8dff8;
}

/* Hero */
.rc-hero {
  background: linear-gradient(135deg, #0d1628 0%, #111e35 60%, #0a1220 100%);
  border-bottom: 1px solid rgba(68,114,196,0.2);
  padding: 3rem 2rem 2.5rem;
  text-align: center;
}
.rc-hero-eyebrow {
  font-size: 0.78rem; font-weight: 600; letter-spacing: 0.12em;
  color: rgba(160,195,240,0.55); text-transform: uppercase; margin-bottom: 0.5rem;
}
.rc-hero-title {
  font-family: 'Lora', serif; font-size: 2rem; font-weight: 700;
  color: #c8dff8; margin-bottom: 0.4rem;
}
.rc-hero-sub { font-size: 0.9rem; color: rgba(160,195,240,0.5); }

/* Tab Bar */
.rc-tabs {
  display: flex; gap: 0; border-bottom: 1px solid rgba(68,114,196,0.18);
  background: rgba(10,18,32,0.6); backdrop-filter: blur(8px);
  position: sticky; top: 64px; z-index: 100;
  padding: 0 2rem;
}
.rc-tab {
  background: none; border: none; border-bottom: 2px solid transparent;
  font-family: 'DM Sans', sans-serif; font-size: 0.88rem; font-weight: 600;
  color: rgba(160,195,240,0.5); padding: 0.9rem 1.2rem;
  cursor: pointer; transition: all 0.2s; margin-bottom: -1px;
}
.rc-tab:hover { color: #a0c8f0; }
.rc-tab.active { color: #c8dff8; border-bottom-color: #4472c4; }

/* Main content area */
.rc-content { max-width: 1100px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }

/* ── PANEL visibility ── */
.rc-panel { display: none; }
.rc-panel.active { display: block; }

/* ── AUTH GATE ── */
.rc-gate {
  text-align: center; padding: 3rem 1.5rem;
  background: rgba(255,255,255,0.02); border: 1px solid rgba(68,114,196,0.15);
  border-radius: var(--radius); margin: 2rem auto; max-width: 480px;
}
.rc-gate-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.rc-gate-title {
  font-family: 'Lora', serif; font-size: 1.25rem; font-weight: 700;
  color: #c8dff8; margin-bottom: 0.4rem;
}
.rc-gate-sub { font-size: 0.84rem; color: rgba(160,195,240,0.5); margin-bottom: 1.5rem; line-height: 1.6; }
.rc-gate-btns { display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; }

/* ── CREATOR PANEL ── */
.rc-creator-grid {
  display: grid; grid-template-columns: 1fr 280px; gap: 1.5rem;
  align-items: start;
}
@media(max-width:768px){ .rc-creator-grid { grid-template-columns: 1fr; } }

.rc-card-form {
  background: linear-gradient(145deg, rgba(12,24,50,0.92), rgba(8,16,36,0.95));
  border: 1px solid rgba(68,114,196,0.22);
  border-radius: var(--radius); padding: 1.5rem;
}
.rc-form-title {
  font-family: 'Lora', serif; font-size: 1.1rem; font-weight: 700;
  color: #c8dff8; margin-bottom: 1.25rem;
}
.rc-field { margin-bottom: 1.1rem; }
.rc-label {
  display: block; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.04em;
  color: rgba(160,195,240,0.6); text-transform: uppercase; margin-bottom: 0.4rem;
}
.rc-label span { color: rgba(140,175,220,0.38); font-weight: 400; text-transform: none; font-size: 0.76rem; }
.rc-textarea {
  width: 100%; padding: 0.7rem 0.9rem; border-radius: var(--radius-sm);
  border: 1px solid rgba(68,114,196,0.25); background: rgba(4,10,22,0.7);
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: #c8dff8;
  resize: vertical; transition: border-color 0.2s;
  min-height: 80px;
}
.rc-textarea:focus { outline: none; border-color: var(--accent-light); }
.rc-textarea::placeholder { color: rgba(140,175,220,0.35); }
.rc-char-count { text-align: right; font-size: 0.72rem; color: rgba(140,175,220,0.38); margin-top: 0.2rem; }
.rc-char-count.warn { color: #ed7d31; }

/* Tag input */
.rc-tag-input-wrap {
  display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center;
  padding: 0.5rem 0.7rem; border-radius: var(--radius-sm);
  border: 1px solid rgba(68,114,196,0.25); background: rgba(4,10,22,0.7);
  cursor: text; transition: border-color 0.2s; min-height: 42px;
}
.rc-tag-input-wrap:focus-within { border-color: var(--accent-light); }
.rc-tag-chip {
  display: inline-flex; align-items: center; gap: 0.3rem;
  background: rgba(68,114,196,0.15); border: 1px solid rgba(68,114,196,0.3);
  color: var(--accent-light); border-radius: 99px;
  font-size: 0.78rem; font-weight: 600; padding: 0.2rem 0.6rem;
}
.rc-tag-chip button {
  background: none; border: none; color: rgba(68,114,196,0.6);
  cursor: pointer; font-size: 0.85rem; padding: 0; line-height: 1;
  transition: color 0.15s;
}
.rc-tag-chip button:hover { color: #e53e3e; }
.rc-tag-input {
  border: none; outline: none; background: transparent;
  font-family: 'DM Sans', sans-serif; font-size: 0.88rem; color: #c8dff8;
  min-width: 120px; flex: 1;
}
.rc-tag-input::placeholder { color: rgba(140,175,220,0.35); }

/* Image upload */
.rc-img-upload-area {
  border: 2px dashed rgba(68,114,196,0.3); border-radius: var(--radius-sm);
  padding: 1rem; text-align: center; cursor: pointer;
  transition: all 0.2s; color: rgba(140,175,220,0.45); font-size: 0.84rem;
  background: rgba(4,10,22,0.5);
}
.rc-img-upload-area:hover { border-color: var(--accent-light); color: rgba(160,195,240,0.75); }
.rc-img-upload-area.drag-over { border-color: var(--accent-light); background: rgba(68,114,196,0.08); }
.rc-img-previews {
  display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 0.75rem;
}
.rc-img-thumb {
  position: relative; width: 72px; height: 72px; border-radius: var(--radius-sm);
  overflow: hidden; border: 1px solid rgba(68,114,196,0.25);
}
.rc-img-thumb img { width: 100%; height: 100%; object-fit: cover; }
.rc-img-thumb button {
  position: absolute; top: 2px; right: 2px;
  background: rgba(0,0,0,0.65); border: none; color: #fff;
  border-radius: 50%; width: 18px; height: 18px; cursor: pointer;
  font-size: 0.65rem; display: flex; align-items: center; justify-content: center;
  transition: background 0.15s;
}
.rc-img-thumb button:hover { background: rgba(229,62,62,0.85); }

/* Save button */
.rc-btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.6rem 1.4rem; border-radius: 99px;
  font-family: 'DM Sans', sans-serif; font-size: 0.88rem; font-weight: 600;
  cursor: pointer; transition: all 0.2s; border: none;
}
.rc-btn-primary {
  background: #4472c4; color: #fff;
}
.rc-btn-primary:hover { background: #3561b0; transform: translateY(-1px); }
.rc-btn-primary:disabled { background: rgba(140,175,220,0.25); cursor: not-allowed; transform: none; opacity: 0.6; }
.rc-btn-ghost {
  background: transparent; color: rgba(160,195,240,0.65);
  border: 1px solid rgba(68,114,196,0.3);
}
.rc-btn-ghost:hover { background: rgba(68,114,196,0.12); color: #c8dff8; }
.rc-btn-danger {
  background: transparent; color: #e05c5c;
  border: 1px solid rgba(224,92,92,0.3);
}
.rc-btn-danger:hover { background: rgba(224,92,92,0.1); }
.rc-btn-sm { padding: 0.35rem 0.9rem; font-size: 0.8rem; }

/* Sidebar */
.rc-sidebar { display: flex; flex-direction: column; gap: 1rem; }
.rc-sidebar-card {
  background: linear-gradient(145deg, rgba(12,24,50,0.85), rgba(8,16,36,0.9));
  border: 1px solid rgba(68,114,196,0.2);
  border-radius: var(--radius); padding: 1.25rem;
}
.rc-sidebar-card h4 {
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.06em;
  color: rgba(160,195,240,0.55); text-transform: uppercase; margin-bottom: 0.75rem;
}
.rc-limit-bar-bg {
  height: 6px; background: rgba(68,114,196,0.15); border-radius: 99px; margin: 0.5rem 0;
}
.rc-limit-bar-fill {
  height: 100%; border-radius: 99px;
  background: linear-gradient(90deg, #4472c4, #5b9bd5);
  transition: width 0.4s ease;
}
.rc-limit-bar-fill.warn { background: linear-gradient(90deg, #ed7d31, #ffc000); }
.rc-limit-bar-fill.full { background: linear-gradient(90deg, #e05c5c, #c53030); }
.rc-limit-text { font-size: 0.82rem; color: rgba(160,195,240,0.6); }

/* Tips list */
.rc-tips { list-style: none; font-size: 0.82rem; color: rgba(140,175,220,0.5); line-height: 1.8; }
.rc-tips li::before { content: "→ "; color: #4472c4; }

/* ── MY CARDS LIBRARY ── */
.rc-library-header {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;
}
.rc-library-title { font-family:'Lora',serif; font-size:1rem; font-weight:700; color:#c8dff8; }
.rc-library-controls {
  display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;
}
.rc-search {
  padding: 0.45rem 0.85rem; border-radius: 99px;
  border: 1px solid rgba(68,114,196,0.25); background: rgba(4,10,22,0.7);
  font-family: 'DM Sans', sans-serif; font-size: 0.84rem; color: #c8dff8;
  width: 200px; transition: border-color 0.2s;
}
.rc-search:focus { outline: none; border-color: #4472c4; }
.rc-search::placeholder { color: rgba(140,175,220,0.35); }
.rc-select {
  padding: 0.45rem 0.75rem; border-radius: 99px;
  border: 1px solid rgba(68,114,196,0.25); background: rgba(4,10,22,0.7);
  font-family: 'DM Sans', sans-serif; font-size: 0.82rem; color: rgba(160,195,240,0.75);
  cursor: pointer;
}
.rc-select:focus { outline: none; }

/* Card table */
.rc-card-table { width: 100%; border-collapse: collapse; margin-top: 0.5rem; }
.rc-card-table th {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
  color: rgba(140,175,220,0.45); text-transform: uppercase; text-align: left;
  padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(68,114,196,0.18);
}
.rc-card-table td {
  padding: 0.65rem 0.75rem; border-bottom: 1px solid rgba(68,114,196,0.1);
  font-size: 0.85rem; color: #c8dff8; vertical-align: middle;
}
.rc-card-table tr:hover td { background: rgba(68,114,196,0.07); }
.rc-card-table .rc-q-cell {
  max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.rc-badge {
  display: inline-block; padding: 0.15rem 0.55rem; border-radius: 99px;
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.04em;
}
.rc-badge-new { background: rgba(68,114,196,0.18); color: #5b9bd5; }
.rc-badge-learning { background: rgba(255,192,0,0.12); color: #ffc000; }
.rc-badge-review { background: rgba(45,158,87,0.15); color: #2d9e57; }
.rc-badge-relearning { background: rgba(237,125,49,0.15); color: #ed7d31; }
.rc-badge-suspended { background: rgba(122,143,166,0.12); color: rgba(140,175,220,0.5); }
.rc-badge-buried { background: rgba(91,33,182,0.18); color: #9d7fd4; }
.rc-badge-easy { background: rgba(45,158,87,0.12); color: #2d9e57; }
.rc-badge-medium { background: rgba(255,192,0,0.1); color: #ffc000; }
.rc-badge-hard { background: rgba(224,92,92,0.12); color: #e05c5c; }
.rc-badge-due { background: rgba(237,125,49,0.15); color: #ed7d31; }
.rc-badge-leech { background: rgba(224,92,92,0.18); color: #e05c5c; border: 1px solid rgba(224,92,92,0.35); }
.rc-star { cursor: pointer; font-size: 1rem; transition: transform 0.15s; user-select:none; }
.rc-star:hover { transform: scale(1.25); }

/* Empty state */
.rc-empty { text-align: center; padding: 3rem 1.5rem; color: rgba(140,175,220,0.44); }
.rc-empty-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.rc-empty-msg { font-size: 0.95rem; margin-bottom: 0.5rem; color: rgba(160,195,240,0.6); }
.rc-empty-sub { font-size: 0.82rem; }

/* Pagination */
.rc-pagination { display:flex; gap:0.5rem; align-items:center; justify-content:center; margin-top:1rem; }
.rc-page-btn {
  background: rgba(12,24,50,0.8); border: 1px solid rgba(68,114,196,0.22);
  border-radius: var(--radius-sm); padding: 0.3rem 0.65rem;
  font-family: 'DM Sans', sans-serif; font-size: 0.82rem; cursor: pointer;
  color: rgba(160,195,240,0.65); transition: all 0.15s;
}
.rc-page-btn:hover { background: rgba(68,114,196,0.15); color: #c8dff8; }
.rc-page-btn.active { background: #4472c4; color: #fff; border-color: #4472c4; }
.rc-page-btn:disabled { opacity: 0.35; cursor: not-allowed; }

/* ── REVISE PANEL ── */
.rc-revise-tabs { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
.rc-revise-tab {
  padding: 0.5rem 1.2rem; border-radius: 99px;
  border: 1px solid rgba(68,114,196,0.25);
  background: rgba(12,24,50,0.7); font-family:'DM Sans',sans-serif;
  font-size: 0.85rem; font-weight: 600; color: rgba(160,195,240,0.6);
  cursor: pointer; transition: all 0.2s;
}
.rc-revise-tab.active { background: #4472c4; color: #fff; border-color: #4472c4; }
.rc-revise-tab:hover:not(.active) { background: rgba(68,114,196,0.15); color: #c8dff8; }

/* Stats row */
.rc-stats-grid {
  display: grid; grid-template-columns: repeat(5,1fr); gap: 0.75rem; margin-bottom: 1.5rem;
}
@media(max-width:640px){ .rc-stats-grid { grid-template-columns: repeat(3,1fr); } }
@media(max-width:420px){ .rc-stats-grid { grid-template-columns: repeat(2,1fr); } }
.rc-stat-tile {
  background: linear-gradient(145deg, rgba(12,24,50,0.85), rgba(8,16,36,0.9));
  border: 1px solid rgba(68,114,196,0.2); border-radius: var(--radius);
  padding: 0.85rem 0.75rem; text-align: center;
}
.rc-stat-val { font-family:'Lora',serif; font-size:1.5rem; font-weight:700; color:#c8dff8; }
.rc-stat-label { font-size:0.7rem; color:rgba(140,175,220,0.44); text-transform:uppercase; letter-spacing:0.06em; margin-top:0.15rem; }

/* Review card - use consistent spacing so buttons stay visible */
.rc-review-wrap { max-width: 660px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }
.rc-review-answer-layout { display:flex; flex-direction:column; gap:20px; }
.rc-review-answer-panel {
  background: linear-gradient(145deg, rgba(13,28,58,0.25), rgba(8,18,38,0.15));
  border: 1px solid rgba(68,114,196,0.2);
  border-radius: var(--radius);
  padding: 0.7rem;
}
.rc-review-controls-panel { display:flex; flex-direction:column; }
/* Scene height is synced in JS so the revealed answer never overlaps controls. */
.rc-card-scene { perspective: 1200px; width: 100%; min-height: 220px; position: relative; }
.rc-review-progress-bar-bg { height: 4px; background: rgba(68,114,196,0.15); border-radius: 99px; }
.rc-review-progress-bar-fill {
  height: 100%; border-radius: 99px;
  background: linear-gradient(90deg,#4472c4,#5b9bd5);
  transition: width 0.4s ease;
}
.rc-card-scene { perspective: 1200px; width: 100%; min-height: 200px; }
.rc-card-inner {
  position: relative; width: 100%; height: 100%; min-height: 200px;
  transform-style: preserve-3d; transition: transform 0.5s;
}
.rc-card-inner.flipped { transform: rotateY(180deg); }
/* Both faces use position:absolute so they stack; inner height is kept by min-height */
.rc-card-face {
  position: absolute; width: 100%; backface-visibility: hidden;
  background:
    radial-gradient(circle at 18% 16%, rgba(140, 218, 255, 0.2) 0%, rgba(140, 218, 255, 0) 48%),
    radial-gradient(circle at 82% 85%, rgba(150, 232, 193, 0.22) 0%, rgba(150, 232, 193, 0) 54%),
    linear-gradient(145deg, rgba(20,42,78,0.9), rgba(16,34,63,0.95));
  border: 1px solid rgba(68,114,196,0.25);
  border-radius: var(--radius); padding: 1.75rem;
  min-height: 200px; height: 100%; display: flex; flex-direction: column; justify-content: center;
  box-shadow: 0 8px 40px rgba(0,0,0,0.4);
  box-sizing: border-box;
}
/* Back face: align top, allow content to grow, cap height and scroll */
.rc-card-back {
  transform: rotateY(180deg);
  background:
    radial-gradient(circle at 14% 14%, rgba(156, 224, 255, 0.24) 0%, rgba(156, 224, 255, 0) 46%),
    radial-gradient(circle at 84% 82%, rgba(171, 236, 199, 0.26) 0%, rgba(171, 236, 199, 0) 58%),
    linear-gradient(145deg, rgba(25,50,88,0.94), rgba(18,39,72,0.98));
  border-color: rgba(68,114,196,0.35);
  justify-content: flex-start;
  max-height: 340px;
  overflow-y: auto;
}
/* Keep inner min-height in sync with whatever the back grows to, max 340px */
.rc-card-inner.flipped { transform: rotateY(180deg); }
.rc-card-front-label {
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
  color: rgba(140,175,220,0.4); text-transform: uppercase; margin-bottom: 0.75rem;
}
.rc-card-question {
  font-family: 'Lora', serif; font-size: 1.15rem; font-weight: 600; color: #ddeeff;
  line-height: 1.55;
}
.rc-card-show-hint {
  margin-top: auto; padding-top: 1rem;
  font-size: 0.78rem; color: rgba(140,175,220,0.35); text-align: center;
  display: flex; align-items: center; justify-content: center; gap: 0.35rem;
}
.rc-card-answer-label {
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
  color: rgba(100,180,255,0.45); text-transform: uppercase; margin-bottom: 0.75rem;
}
.rc-card-answer { font-size: 0.95rem; color: #b8d8f8; line-height: 1.7; white-space: pre-wrap; }
.rc-card-images { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
.rc-card-images img {
  height: 80px; border-radius: var(--radius-sm); cursor: pointer;
  transition: opacity 0.2s; border: 1px solid rgba(68,114,196,0.25);
}
.rc-card-images img:hover { opacity: 0.85; }
.rc-card-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.85rem; }
.rc-card-tag-pill {
  background: rgba(68,114,196,0.15); color: #5b9bd5;
  border-radius: 99px; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.55rem;
}

/* Rating row */
.rc-rating-row {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 0.6rem;
  opacity: 0; pointer-events: none; transition: opacity 0.3s;
}
.rc-rating-row.visible { opacity: 1; pointer-events: auto; }
.rc-rate-btn {
  display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
  padding: 0.6rem 0.5rem; border-radius: var(--radius-sm);
  border: 1px solid rgba(68,114,196,0.2);
  background: rgba(12,24,50,0.8);
  font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s;
}
/* Rating button sub-label: hidden by default, reveal on hover/focus (spec #6) */
.rc-rate-btn .rc-rate-sub {
  font-size: 0.68rem; color: rgba(140,175,220,0.44);
  opacity: 0; transition: opacity 0.15s;
}
.rc-rate-btn:hover .rc-rate-sub,
.rc-rate-btn:focus-within .rc-rate-sub { opacity: 1; }
.rc-rate-btn:hover { transform: translateY(-2px); }
.rc-rate-again  { border-color: rgba(224,92,92,0.3); }
.rc-rate-again:hover  { background: rgba(224,92,92,0.12); border-color: rgba(224,92,92,0.6); }
.rc-rate-again .rc-rate-label  { color: #e05c5c; }
.rc-rate-hard   { border-color: rgba(237,125,49,0.3); }
.rc-rate-hard:hover   { background: rgba(237,125,49,0.12); border-color: rgba(237,125,49,0.6); }
.rc-rate-hard .rc-rate-label   { color: #ed7d31; }
.rc-rate-good   { border-color: rgba(68,114,196,0.3); }
.rc-rate-good:hover   { background: rgba(68,114,196,0.15); border-color: rgba(68,114,196,0.6); }
.rc-rate-good .rc-rate-label   { color: #5b9bd5; }
.rc-rate-easy   { border-color: rgba(45,158,87,0.3); }
.rc-rate-easy:hover   { background: rgba(45,158,87,0.12); border-color: rgba(45,158,87,0.6); }
.rc-rate-easy .rc-rate-label   { color: #2d9e57; }

/* Show answer button */
.rc-show-answer-btn {
  display: block; width: 100%; padding: 0.85rem;
  background: rgba(68,114,196,0.25); color: #a0c8f0;
  border: 1px solid rgba(68,114,196,0.4); border-radius: var(--radius);
  font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 600;
  cursor: pointer; transition: all 0.2s; text-align: center;
}
.rc-show-answer-btn:hover { background: rgba(68,114,196,0.4); color: #c8dff8; }

/* Review session summary */
.rc-session-summary {
  background: linear-gradient(145deg, rgba(13,28,58,0.9), rgba(8,18,38,0.95));
  border: 1px solid rgba(68,114,196,0.25); border-radius: var(--radius);
  padding: 2rem; text-align: center; max-width: 480px; margin: 0 auto;
}
.rc-summary-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.rc-summary-title { font-family:'Lora',serif; font-size:1.3rem; font-weight:700; color:#c8dff8; margin-bottom:0.4rem; }
.rc-summary-sub { font-size:0.85rem; color:rgba(140,175,220,0.5); margin-bottom:1.5rem; }
.rc-summary-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:0.75rem; margin-bottom:1.5rem; }
.rc-summary-item { background:rgba(68,114,196,0.1); border:1px solid rgba(68,114,196,0.18); border-radius:var(--radius-sm); padding:0.75rem; }
.rc-summary-item .val { font-size:1.35rem; font-weight:700; color:#c8dff8; font-family:'Lora',serif; }
.rc-summary-item .lbl { font-size:0.72rem; color:rgba(140,175,220,0.44); text-transform:uppercase; letter-spacing:0.06em; }

/* Undo bar */
.rc-undo-bar {
  display: none; background: rgba(42,58,86,0.95); color: #a0c8f0;
  border: 1px solid rgba(68,114,196,0.3); border-radius: var(--radius);
  padding: 0.6rem 1rem; font-size: 0.83rem; align-items: center;
  gap: 0.75rem; justify-content: space-between;
}
.rc-undo-bar.visible { display: flex; }
.rc-undo-bar button {
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
  color: #c8dff8; border-radius: 99px; padding: 0.25rem 0.85rem;
  font-family:'DM Sans',sans-serif; font-size:0.8rem; font-weight:600;
  cursor:pointer; transition: background 0.15s;
}
.rc-undo-bar button:hover { background: rgba(255,255,255,0.2); }

/* ── CUSTOM DECKS PANEL ── */
.rc-deck-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start; }
@media(max-width:640px){ .rc-deck-grid { grid-template-columns: 1fr; } }
.rc-deck-card {
  background: linear-gradient(145deg, rgba(12,24,50,0.88), rgba(8,16,36,0.92));
  border: 1px solid rgba(68,114,196,0.22);
  border-radius: var(--radius); padding: 1.5rem;
}
.rc-deck-card h3 { font-family:'Lora',serif; font-size:1rem; font-weight:700; color:#c8dff8; margin-bottom:1rem; }
.rc-tag-selector { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 1rem; }
.rc-tag-select-pill {
  padding: 0.3rem 0.75rem; border-radius: 99px;
  border: 1px solid rgba(68,114,196,0.22); background: rgba(8,16,36,0.7);
  font-family: 'DM Sans', sans-serif; font-size: 0.8rem; font-weight: 600;
  color: rgba(160,195,240,0.6); cursor: pointer; transition: all 0.18s;
}
.rc-tag-select-pill.selected {
  background: rgba(68,114,196,0.22); border-color: rgba(68,114,196,0.55); color: #5b9bd5;
}
.rc-match-toggle { display: flex; gap: 0.4rem; margin-bottom: 1rem; }
.rc-match-btn {
  flex: 1; padding: 0.45rem; border-radius: var(--radius-sm);
  border: 1px solid rgba(68,114,196,0.22); background: rgba(8,16,36,0.7);
  font-family:'DM Sans',sans-serif; font-size: 0.82rem; font-weight: 600;
  color: rgba(160,195,240,0.6); cursor: pointer; transition: all 0.18s; text-align: center;
}
.rc-match-btn.active { background: #4472c4; color: #fff; border-color: #4472c4; }
.rc-preview-count {
  font-size: 0.83rem; color: rgba(160,195,240,0.65); margin-bottom: 1rem;
  padding: 0.5rem 0.75rem; background: rgba(68,114,196,0.1);
  border-radius: var(--radius-sm); border-left: 3px solid #4472c4;
}
.rc-saved-deck-display {
  background: rgba(68,114,196,0.1); border: 1px solid rgba(68,114,196,0.25);
  border-radius: var(--radius); padding: 1.25rem; margin-bottom: 1rem;
}
.rc-saved-deck-name { font-family:'Lora',serif; font-size:1rem; font-weight:700; color:#c8dff8; margin-bottom:0.3rem; }
.rc-saved-deck-meta { font-size:0.8rem; color:rgba(140,175,220,0.44); }
.rc-deck-name-input {
  width: 100%; padding: 0.55rem 0.85rem; border-radius: var(--radius-sm);
  border: 1px solid rgba(68,114,196,0.25); background: rgba(4,10,22,0.7);
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: #c8dff8;
  margin-bottom: 0.75rem; transition: border-color 0.2s;
}
.rc-deck-name-input:focus { outline: none; border-color: #4472c4; }

/* ── TOAST ── */
.rc-toast-wrap {
  position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999;
  display: flex; flex-direction: column; gap: 0.5rem; pointer-events: none;
}
.rc-toast {
  pointer-events: auto; min-width: 220px; max-width: 340px;
  padding: 0.7rem 1rem; border-radius: var(--radius);
  font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 500;
  animation: rcToastIn 0.2s ease;
  display: flex; align-items: center; gap: 0.6rem;
}
.rc-toast-success { background: #1a3a28; color: #6ee7a8; border: 1px solid rgba(45,158,87,0.4); }
.rc-toast-error   { background: #3a1a1a; color: #fca5a5; border: 1px solid rgba(224,92,92,0.4); }
.rc-toast-info    { background: #0d1e3a; color: #93c5fd; border: 1px solid rgba(68,114,196,0.4); }
@keyframes rcToastIn { from { opacity:0; transform:translateX(20px); } to { opacity:1; transform:translateX(0); } }

/* ── MODAL ── */
.rc-modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.7);
  backdrop-filter: blur(6px); z-index: 1000;
  display: none; align-items: center; justify-content: center; padding: 1rem;
}
.rc-modal-overlay.open { display: flex; }
.rc-modal {
  background: linear-gradient(145deg, rgba(10,22,46,0.98), rgba(6,14,32,0.99));
  border: 1px solid rgba(68,114,196,0.28);
  border-radius: var(--radius); padding: 2rem; width: 100%; max-width: 540px;
  max-height: 90vh; overflow-y: auto;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
}
.rc-modal-title { font-family:'Lora',serif; font-size:1.15rem; font-weight:700; color:#c8dff8; margin-bottom:1rem; }
.rc-modal-actions { display:flex; gap:0.6rem; justify-content:flex-end; margin-top:1.5rem; }

/* ── IMAGE LIGHTBOX ── */
.rc-lightbox {
  position: fixed; inset: 0; background: rgba(0,0,0,0.92);
  z-index: 2000; display: none; align-items: center; justify-content: center;
  cursor: pointer;
}
.rc-lightbox.open { display: flex; }
.rc-lightbox img { max-width: 92vw; max-height: 88vh; border-radius: var(--radius); }

/* Section divider */
.rc-section-gap { margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(68,114,196,0.18); }

/* Loading spinner */
.rc-spinner {
  width: 28px; height: 28px; border: 3px solid rgba(68,114,196,0.15);
  border-top-color: #4472c4; border-radius: 50%;
  animation: rcSpin 0.7s linear infinite; margin: 2rem auto;
}
@keyframes rcSpin { to { transform: rotate(360deg); } }

/* ── v2 NEW STYLES ── */
.rc-badge-buried { background: rgba(91,33,182,0.18); color: #9d7fd4; }

/* Bulk bar */
.rc-bulk-bar {
  display:none; align-items:center; gap:0.4rem; flex-wrap:wrap;
  padding:0.55rem 0.85rem; background:rgba(68,114,196,0.1);
  border:1px solid rgba(68,114,196,0.25); border-radius:var(--radius-sm);
  margin-bottom:0.5rem; font-size:0.82rem; color:rgba(160,195,240,0.7);
}
.rc-bulk-bar.visible { display:flex; }
.rc-bulk-count { font-weight:700; color:#5b9bd5; margin-right:0.2rem; }

/* Review card quick actions */
.rc-review-card-actions {
  display:flex; gap:0.4rem; flex-wrap:wrap; justify-content:center; margin-top:12px;
  opacity:0; pointer-events:none; transition:opacity 0.3s;
}
.rc-review-card-actions.visible { opacity:1; pointer-events:auto; }
.rc-rev-action-btn {
  padding:0.28rem 0.7rem; border-radius:99px;
  border:1px solid rgba(68,114,196,0.22); background:rgba(8,16,36,0.8);
  font-family:'DM Sans',sans-serif; font-size:0.75rem; font-weight:600;
  color:rgba(140,175,220,0.6); cursor:pointer; transition:all 0.18s;
}
.rc-rev-action-btn:hover { background:rgba(68,114,196,0.15); color:#c8dff8; }

/* Card back extras */
.rc-card-extra-divider { border:none; border-top:1px solid rgba(68,114,196,0.15); margin:0.65rem 0 0.45rem; }
.rc-card-extra-label { font-size:0.64rem; font-weight:700; letter-spacing:0.1em; color:rgba(140,175,220,0.4); text-transform:uppercase; margin-bottom:0.2rem; }
.rc-card-extra-text  { font-size:0.85rem; color:rgba(160,195,240,0.75); line-height:1.6; }
.rc-card-pearl-text  { font-size:0.84rem; color:#ffc000; background:rgba(255,192,0,0.08); border-left:3px solid rgba(255,192,0,0.35); padding:0.35rem 0.6rem; border-radius:0 var(--radius-sm) var(--radius-sm) 0; line-height:1.5; }
.rc-card-source-text { font-size:0.73rem; color:rgba(140,175,220,0.38); font-style:italic; margin-top:0.2rem; }

/* Advanced fields toggle */
.rc-adv-toggle {
  width:100%; text-align:left; background:none;
  border:1px dashed rgba(68,114,196,0.2); border-radius:var(--radius-sm);
  padding:0.42rem 0.85rem; font-family:'DM Sans',sans-serif;
  font-size:0.79rem; font-weight:600; color:rgba(140,175,220,0.45); cursor:pointer; transition:all 0.2s;
}
.rc-adv-toggle:hover { border-color:rgba(68,114,196,0.45); color:rgba(160,195,240,0.75); }
.rc-adv-toggle.open  { color:rgba(160,195,240,0.75); border-color:rgba(68,114,196,0.38); }
.rc-adv-fields       { display:none; margin-top:0.7rem; }
.rc-adv-fields.open  { display:block; }

/* Single-line input */
.rc-input {
  width:100%; padding:0.58rem 0.88rem; border-radius:var(--radius-sm);
  border:1px solid rgba(68,114,196,0.25); background:rgba(4,10,22,0.7);
  font-family:'DM Sans',sans-serif; font-size:0.88rem; color:#c8dff8; transition:border-color 0.2s;
}
.rc-input:focus { outline:none; border-color:#4472c4; }
.rc-input::placeholder { color:rgba(140,175,220,0.35); }

/* Medical preset chips */
.rc-presets-wrap { background:rgba(68,114,196,0.06); border:1px solid rgba(68,114,196,0.12); border-radius:var(--radius-sm); padding:0.7rem; margin-bottom:0.5rem; }
.rc-preset-group { margin-bottom:0.45rem; }
.rc-preset-group:last-child { margin-bottom:0; }
.rc-preset-group-label { font-size:0.63rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:rgba(140,175,220,0.38); margin-bottom:0.3rem; }
.rc-preset-chips { display:flex; flex-wrap:wrap; gap:0.28rem; }
.rc-preset-chip {
  padding:0.16rem 0.55rem; border-radius:99px;
  background:rgba(68,114,196,0.1); border:1px solid rgba(68,114,196,0.2);
  color:rgba(160,195,240,0.65); font-family:'DM Sans',sans-serif; font-size:0.73rem; font-weight:600; cursor:pointer; transition:all 0.15s;
}
.rc-preset-chip:hover { background:rgba(68,114,196,0.22); border-color:rgba(68,114,196,0.45); color:#a0c8f0; }

/* Tag manager */
.rc-tagmgr-row { display:flex; align-items:center; gap:0.55rem; padding:0.48rem 0.2rem; border-bottom:1px solid rgba(68,114,196,0.12); font-size:0.85rem; flex-wrap:wrap; }
.rc-tagmgr-row:last-child { border-bottom:none; }
.rc-tagmgr-name    { flex:1; font-weight:600; color:#5b9bd5; min-width:80px; }
.rc-tagmgr-count   { font-size:0.73rem; color:rgba(140,175,220,0.44); min-width:50px; }
.rc-tagmgr-actions { display:flex; gap:0.3rem; flex-shrink:0; }
.rc-tagmgr-edit-wrap { display:none; width:100%; margin-top:0.35rem; }
.rc-tagmgr-edit-wrap.open { display:flex; gap:0.35rem; }

/* Search hint */
.rc-search-wrap { position:relative; }
.rc-search-hint {
  display:none; position:absolute; top:calc(100% + 6px); left:0; min-width:340px;
  background:linear-gradient(145deg, rgba(10,22,46,0.99), rgba(6,14,32,0.99));
  border:1px solid rgba(68,114,196,0.28); border-radius:var(--radius-sm);
  padding:0.7rem 0.85rem; font-size:0.75rem; color:rgba(140,175,220,0.55); line-height:1.9;
  z-index:200; box-shadow:0 8px 32px rgba(0,0,0,0.5);
}
.rc-search-hint.open { display:block; }

/* Mobile */
@media(max-width:640px){
  .rc-card-table th:nth-child(4),.rc-card-table td:nth-child(4),
  .rc-card-table th:nth-child(6),.rc-card-table td:nth-child(6) { display:none; }
  .rc-rating-row { grid-template-columns:repeat(2,1fr); }
  .rc-rate-btn { padding:0.72rem 0.4rem; }
  .rc-rev-action-btn { font-size:0.72rem; padding:0.25rem 0.55rem; }
  .rc-review-answer-layout { gap:16px; }
}
</style>

<!-- ══ TOAST CONTAINER ══ -->
<div class="rc-toast-wrap" id="rc-toasts"></div>

<!-- ══ IMAGE LIGHTBOX ══ -->
<div class="rc-lightbox" id="rc-lightbox" onclick="rcCloseLightbox()">
  <img id="rc-lightbox-img" src="" alt="card image">
</div>

<!-- ══ CONFIRM MODAL ══ -->
<div class="rc-modal-overlay" id="rc-confirm-modal">
  <div class="rc-modal">
    <div class="rc-modal-title" id="rc-confirm-title">Confirm</div>
    <div id="rc-confirm-body" style="font-size:0.9rem;color:var(--ink-2);line-height:1.6;"></div>
    <div class="rc-modal-actions">
      <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcConfirmCancel()">Cancel</button>
      <button class="rc-btn rc-btn-danger rc-btn-sm" id="rc-confirm-ok-btn" onclick="rcConfirmOk()">Confirm</button>
    </div>
  </div>
</div>

<!-- ══ TAG MANAGER MODAL ══ -->
<div class="rc-modal-overlay" id="rc-tagmgr-modal">
  <div class="rc-modal" style="max-width:460px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.85rem;">
      <div class="rc-modal-title" style="margin:0;">🏷️ Tag Manager</div>
      <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcCloseTagManager()">✕</button>
    </div>
    <div style="font-size:0.78rem;color:var(--ink-3);margin-bottom:0.85rem;">Rename or delete tags across all cards instantly.</div>
    <div id="rc-tagmgr-list"><div class="rc-spinner"></div></div>
  </div>
</div>

<!-- ══ EDIT CARD MODAL ══ -->
<div class="rc-modal-overlay" id="rc-edit-modal">
  <div class="rc-modal" style="max-width:600px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
      <div class="rc-modal-title" style="margin:0;">Edit Flashcard</div>
      <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcCloseEditModal()">✕</button>
    </div>
    <div class="rc-field">
      <label class="rc-label">Question <span>(required)</span></label>
      <textarea class="rc-textarea" id="rc-edit-question" maxlength="500" rows="3" oninput="rcUpdateCharCount('rc-edit-question','rc-edit-q-count',500)"></textarea>
      <div class="rc-char-count" id="rc-edit-q-count">0 / 500</div>
    </div>
    <div class="rc-field">
      <label class="rc-label">Answer <span>(required)</span></label>
      <textarea class="rc-textarea" id="rc-edit-answer" maxlength="2000" rows="5" oninput="rcUpdateCharCount('rc-edit-answer','rc-edit-a-count',2000)"></textarea>
      <div class="rc-char-count" id="rc-edit-a-count">0 / 2000</div>
    </div>
    <div class="rc-field">
      <label class="rc-label">Tags <span>Press Enter or comma to save</span></label>
      <div class="rc-tag-input-wrap" id="rc-edit-tag-wrap" onclick="document.getElementById('rc-edit-tag-input').focus()">
        <input type="text" class="rc-tag-input" id="rc-edit-tag-input" placeholder="Add tag..." onkeydown="rcEditTagKeydown(event)" oninput="rcEditTagInput(event)">
      </div>
    </div>
    <div class="rc-field">
      <label class="rc-label">Images <span>(click × to remove existing)</span></label>
      <div class="rc-img-previews" id="rc-edit-existing-imgs"></div>
      <div class="rc-img-upload-area" style="margin-top:0.5rem;" onclick="document.getElementById('rc-edit-file-input').click()">📎 Add more images</div>
      <input type="file" id="rc-edit-file-input" accept="image/jpeg,image/png,image/webp" multiple style="display:none" onchange="rcEditHandleFiles(this.files)">
      <div class="rc-img-previews" id="rc-edit-new-imgs"></div>
    </div>
    <div class="rc-field" style="display:flex;gap:1.25rem;flex-wrap:wrap;">
      <div style="flex:1;min-width:180px;display:flex;gap:1rem;align-items:flex-end;flex-wrap:wrap;">
        <label style="display:flex;align-items:center;gap:0.4rem;cursor:pointer;font-size:0.85rem;color:var(--ink-2);">
          <input type="checkbox" id="rc-edit-starred"   style="accent-color:var(--gold);"> ⭐ Starred
        </label>
        <label style="display:flex;align-items:center;gap:0.4rem;cursor:pointer;font-size:0.85rem;color:var(--ink-2);">
          <input type="checkbox" id="rc-edit-suspended" style="accent-color:var(--orange);"> ⏸ Suspended
        </label>
      </div>
    </div>
    <button class="rc-adv-toggle" id="rc-edit-adv-toggle" onclick="rcToggleEditAdvanced()">
      ↓ Advanced fields — hint, mnemonic, clinical pearl, source, chapter
    </button>
    <div class="rc-adv-fields" id="rc-edit-adv-fields">
      <div class="rc-field" style="margin-top:0.7rem;">
        <label class="rc-label">Hint <span>(memory hook)</span></label>
        <input type="text" class="rc-input" id="rc-edit-hint" maxlength="200" placeholder="e.g. Think of MUDPILES...">
      </div>
      <div class="rc-field">
        <label class="rc-label">Mnemonic</label>
        <input type="text" class="rc-input" id="rc-edit-mnemonic" maxlength="300" placeholder="e.g. ABCDE for trauma primary survey">
      </div>
      <div class="rc-field">
        <label class="rc-label">Clinical Pearl</label>
        <textarea class="rc-textarea" id="rc-edit-pearl" maxlength="500" rows="2" placeholder="Clinical significance, exam tip, applied anatomy..."></textarea>
      </div>
      <div class="rc-field">
        <label class="rc-label">Source / Reference</label>
        <input type="text" class="rc-input" id="rc-edit-source" maxlength="120" placeholder="e.g. Gray's Anatomy p.342 / Harrison's 20e Ch.23">
      </div>
      <div class="rc-field">
        <label class="rc-label">Chapter / Topic</label>
        <input type="text" class="rc-input" id="rc-edit-chapter" maxlength="80" placeholder="e.g. Brachial Plexus / Shock">
      </div>
    </div>
    <div class="rc-modal-actions">
      <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcCloseEditModal()">Cancel</button>
      <button class="rc-btn rc-btn-primary rc-btn-sm" id="rc-edit-save-btn" onclick="rcSaveEditCard()">Save Changes</button>
    </div>
  </div>
</div>

<!-- ══ HERO ══ -->
<div class="rc-hero">
  <div class="rc-hero-eyebrow">🧠 Personal Recall System</div>
  <div class="rc-hero-title">Recall Flashcards</div>
  <div class="rc-hero-sub">Save the facts that slip through the cracks.</div>
</div>

<!-- ══ MAIN TABS ══ -->
<div class="rc-tabs">
  <button class="rc-tab active" id="rc-tab-creator" onclick="rcShowTab('creator')">✏️ Creator</button>
  <button class="rc-tab" id="rc-tab-revise" onclick="rcShowTab('revise')">🔁 Revise</button>
</div>

<!-- ══ CONTENT ══ -->
<div class="rc-content">

  <!-- ── CREATOR PANEL ── -->
  <div class="rc-panel active" id="rc-panel-creator">

    <!-- Auth gate -->
    <div id="rc-creator-gate" style="display:none;">
      <div class="rc-gate">
        <div class="rc-gate-icon">🔒</div>
        <div class="rc-gate-title">Log in to create flashcards</div>
        <div class="rc-gate-sub">Your cards are saved to your account and synced across devices.</div>
        <div class="rc-gate-btns">
          <button class="rc-btn rc-btn-ghost" onclick="navAuthOpen('login')">Log In</button>
          <button class="rc-btn rc-btn-primary" onclick="navAuthOpen('signup')">Sign Up</button>
        </div>
      </div>
    </div>

    <!-- Creator main -->
    <div id="rc-creator-main" style="display:none;">
      <div class="rc-creator-grid">

        <!-- Form -->
        <div>
          <div class="rc-card-form">
            <div class="rc-form-title">New Flashcard</div>

            <div class="rc-field">
              <label class="rc-label" for="rc-question">Question <span>(required · max 500 chars)</span></label>
              <textarea class="rc-textarea" id="rc-question" maxlength="500" rows="3"
                placeholder="e.g. What nerve supplies the deltoid muscle?"
                oninput="rcUpdateCharCount('rc-question','rc-q-count',500);rcCheckDupWarning()"></textarea>
              <div class="rc-char-count" id="rc-q-count">0 / 500</div>
            </div>

            <div class="rc-field">
              <label class="rc-label" for="rc-answer">Answer <span>(required · max 2000 chars)</span></label>
              <textarea class="rc-textarea" id="rc-answer" maxlength="2000" rows="5"
                placeholder="e.g. Axillary nerve (C5, C6). Arises from the posterior cord of the brachial plexus."
                oninput="rcUpdateCharCount('rc-answer','rc-a-count',2000)"></textarea>
              <div class="rc-char-count" id="rc-a-count">0 / 2000</div>
            </div>

            <div class="rc-field">
              <label class="rc-label">Tags <span>Press Enter or comma to save · max 10</span></label>
              <div class="rc-tag-input-wrap" id="rc-tag-wrap" onclick="document.getElementById('rc-tag-input').focus()">
                <input type="text" class="rc-tag-input" id="rc-tag-input"
                  placeholder="Add a tag..."
                  onkeydown="rcTagKeydown(event)"
                  oninput="rcTagInput(event)">
              </div>
              <div class="rc-presets-wrap" style="margin-top:0.55rem;">
                <div class="rc-preset-group">
                  <div class="rc-preset-group-label">Subject</div>
                  <div class="rc-preset-chips">
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('anatomy')">anatomy</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('physiology')">physiology</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('biochemistry')">biochemistry</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('pathology')">pathology</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('pharmacology')">pharmacology</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('microbiology')">microbiology</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('psm')">psm</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('medicine')">medicine</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('surgery')">surgery</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('obgy')">obgy</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('pediatrics')">pediatrics</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('fmt')">fmt</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('radiology')">radiology</span>
                  </div>
                </div>
                <div class="rc-preset-group">
                  <div class="rc-preset-group-label">Year / Exam</div>
                  <div class="rc-preset-chips">
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('1st_year')">1st year</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('2nd_year')">2nd year</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('3rd_year')">3rd year</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('final_year')">final year</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('next')">NExT</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('neet_pg')">NEET PG</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('ini_cet')">INI-CET</span>
                  </div>
                </div>
                <div class="rc-preset-group">
                  <div class="rc-preset-group-label">Type</div>
                  <div class="rc-preset-chips">
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('high_yield')">high yield</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('viva')">viva</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('must_know')">must know</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('one_liner')">one liner</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('image_based')">image based</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('classification')">classification</span>
                    <span class="rc-preset-chip" onclick="rcAddPresetTag('drug_dosage')">drug dosage</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="rc-field">
              <label class="rc-label">Images <span>(optional · max 5 · jpg/png/webp · 10MB each)</span></label>
              <div class="rc-img-upload-area" id="rc-drop-zone"
                onclick="document.getElementById('rc-file-input').click()"
                ondragover="rcDragOver(event)" ondragleave="rcDragLeave(event)" ondrop="rcDrop(event)">
                📎 Click to upload or drag & drop images here
              </div>
              <input type="file" id="rc-file-input" accept="image/jpeg,image/png,image/webp" multiple style="display:none" onchange="rcHandleFiles(this.files)">
              <div class="rc-img-previews" id="rc-img-previews"></div>
            </div>

            <div class="rc-field">
              <button class="rc-adv-toggle" id="rc-create-adv-toggle" onclick="rcToggleCreateAdvanced()">
                ↓ Advanced — hint, mnemonic, clinical pearl, source, chapter
              </button>
              <div class="rc-adv-fields" id="rc-create-adv-fields">
                <div class="rc-field" style="margin-top:0.7rem;">
                  <label class="rc-label">Hint <span>(memory hook shown on front)</span></label>
                  <input type="text" class="rc-input" id="rc-hint" maxlength="200" placeholder="e.g. Think of MUDPILES...">
                </div>
                <div class="rc-field">
                  <label class="rc-label">Mnemonic</label>
                  <input type="text" class="rc-input" id="rc-mnemonic" maxlength="300" placeholder="e.g. ABCDE for trauma primary survey">
                </div>
                <div class="rc-field">
                  <label class="rc-label">Clinical Pearl</label>
                  <textarea class="rc-textarea" id="rc-pearl" maxlength="500" rows="2" placeholder="Clinical significance, exam tip, applied anatomy..."></textarea>
                </div>
                <div class="rc-field">
                  <label class="rc-label">Source / Reference</label>
                  <input type="text" class="rc-input" id="rc-source" maxlength="120" placeholder="e.g. Gray's Anatomy p.342">
                </div>
                <div class="rc-field">
                  <label class="rc-label">Chapter / Topic</label>
                  <input type="text" class="rc-input" id="rc-chapter" maxlength="80" placeholder="e.g. Brachial Plexus / Shock">
                </div>
              </div>
            </div>

            <div id="rc-limit-warning" style="display:none;font-size:0.83rem;color:#c53030;margin-bottom:0.75rem;padding:0.6rem 0.85rem;background:rgba(229,62,62,0.08);border-radius:var(--radius-sm);border:1px solid rgba(229,62,62,0.2);">
              You've reached your flashcard limit. Delete old cards or wait for the site owner to raise the limit.
            </div>

            <div id="rc-dup-warning" style="display:none;font-size:0.83rem;color:#b8860b;margin-bottom:0.75rem;padding:0.6rem 0.85rem;background:rgba(255,192,0,0.08);border-radius:var(--radius-sm);border:1px solid rgba(255,192,0,0.2);">
              ⚠️ A similar question already exists. You can still save if this is a different card.
            </div>

            <button class="rc-btn rc-btn-primary" id="rc-save-btn" onclick="rcSaveCard()" style="width:100%;">
              ✓ Save Card
            </button>
          </div>

          <!-- My Cards Library -->
          <div class="rc-section-gap">
            <div class="rc-library-header">
              <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
                <div class="rc-library-title">📚 My Cards</div>
                <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcOpenTagManager()">🏷️ Tags</button>
              </div>
              <div class="rc-library-controls">
                <div class="rc-search-wrap">
                  <input type="text" class="rc-search" id="rc-search"
                    placeholder="Search · tag:anatomy · status:new…"
                    oninput="rcRenderLibrary()"
                    onfocus="rcShowSearchHint(true)" onblur="rcHideSearchHintDelayed()">
                  <div class="rc-search-hint" id="rc-search-hint">
                    <strong style="color:var(--ink-2);">Search syntax:</strong><br>
                    tag:anatomy · tag:anatomy.upper_limb · tag:untagged<br>
                    status:new · status:learning · status:review · status:suspended · status:buried<br>
                    is:due · is:buried · is:untagged · starred:true<br>
                    "exact phrase" · plain text searches all fields
                  </div>
                </div>
                <select class="rc-select" id="rc-filter-tag" onchange="rcRenderLibrary()">
                  <option value="">All tags</option>
                </select>
                <select class="rc-select" id="rc-filter-status" onchange="rcRenderLibrary()">
                  <option value="">All status</option>
                  <option value="new">New</option>
                  <option value="learning">Learning</option>
                  <option value="review">Review</option>
                  <option value="relearning">Relearning</option>
                  <option value="suspended">Suspended</option>
                  <option value="buried">Buried</option>
                  <option value="starred">Starred</option>
                </select>
                <select class="rc-select" id="rc-sort" onchange="rcRenderLibrary()">
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="due">Due soon</option>
                  <option value="hardest">Hardest</option>
                  <option value="lapses">Most lapses</option>
                  <option value="edited">Recently edited</option>
                  <option value="alpha">A–Z</option>
                </select>
              </div>
            </div>
            <!-- Bulk bar -->
            <div class="rc-bulk-bar" id="rc-bulk-bar">
              <span class="rc-bulk-count" id="rc-bulk-count">0</span> selected —
              <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcBulkSuspend()">Suspend</button>
              <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcBulkUnsuspend()">Unsuspend</button>
              <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcBulkBury()">Bury</button>
              <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcBulkReset()">Reset</button>
              <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcBulkAddTag()">+ Tag</button>
              <button class="rc-btn rc-btn-danger rc-btn-sm" onclick="rcBulkDelete()">Delete</button>
              <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcClearBulkSelect()">✕</button>
            </div>
            <div id="rc-library-body">
              <div class="rc-spinner"></div>
            </div>
            <div class="rc-pagination" id="rc-pagination"></div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="rc-sidebar">
          <div class="rc-sidebar-card">
            <h4>Card Usage</h4>
            <div class="rc-limit-text" id="rc-limit-text">0 / 50 cards used</div>
            <div class="rc-limit-bar-bg">
              <div class="rc-limit-bar-fill" id="rc-limit-bar" style="width:0%"></div>
            </div>
          </div>

          <div class="rc-sidebar-card">
            <h4>Quick Tips</h4>
            <ul class="rc-tips">
              <li>Use dots: anatomy.upper_limb</li>
              <li>Click preset chips to tag fast</li>
              <li>One fact per card works best</li>
              <li>Review daily for best retention</li>
              <li>Use images for anatomy & diagrams</li>
            </ul>
          </div>

          <div class="rc-sidebar-card">
            <h4>Your Tags</h4>
            <div id="rc-all-tags-cloud" style="display:flex;flex-wrap:wrap;gap:0.4rem;font-size:0.78rem;">
              <span style="color:var(--ink-3);">No tags yet.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- ── REVISE PANEL ── -->
  <div class="rc-panel" id="rc-panel-revise">

    <!-- Auth gate -->
    <div id="rc-revise-gate" style="display:none;">
      <div class="rc-gate">
        <div class="rc-gate-icon">🔒</div>
        <div class="rc-gate-title">Log in to start revising</div>
        <div class="rc-gate-sub">Track your review progress, streaks, and spaced repetition schedule.</div>
        <div class="rc-gate-btns">
          <button class="rc-btn rc-btn-ghost" onclick="navAuthOpen('login')">Log In</button>
          <button class="rc-btn rc-btn-primary" onclick="navAuthOpen('signup')">Sign Up</button>
        </div>
      </div>
    </div>

    <!-- Revise main -->
    <div id="rc-revise-main" style="display:none;">
      <div class="rc-revise-tabs" style="margin-bottom:1rem;">
        <button class="rc-revise-tab active" id="rc-rtab-general" onclick="rcShowReviseTab('general')">📖 General Revision</button>
        <button class="rc-revise-tab" id="rc-rtab-deck" onclick="rcShowReviseTab('deck')">🗂️ Custom Deck</button>
      </div>
      <!-- General Revision -->
      <div id="rc-rev-general">

        <!-- Stats -->
        <div class="rc-stats-grid">
          <div class="rc-stat-tile">
            <div class="rc-stat-val" id="rc-stat-due">0</div>
            <div class="rc-stat-label">Due Today</div>
          </div>
          <div class="rc-stat-tile">
            <div class="rc-stat-val" id="rc-stat-new">0</div>
            <div class="rc-stat-label">New</div>
          </div>
          <div class="rc-stat-tile">
            <div class="rc-stat-val" id="rc-stat-learning">0</div>
            <div class="rc-stat-label">Learning</div>
          </div>
          <div class="rc-stat-tile">
            <div class="rc-stat-val" id="rc-stat-reviewed">0</div>
            <div class="rc-stat-label">Done Today</div>
          </div>
          <div class="rc-stat-tile">
            <div class="rc-stat-val" id="rc-stat-streak">0🔥</div>
            <div class="rc-stat-label">Streak</div>
          </div>
        </div>

        <!-- Review area -->
        <div id="rc-review-area">
          <div class="rc-review-wrap">
            <!-- Undo bar -->
            <div class="rc-undo-bar" id="rc-undo-bar">
              <span>↩ Last rating undone</span>
              <button onclick="rcUndoRating()">Undo</button>
            </div>

            <!-- Progress bar -->
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div class="rc-review-progress-bar-bg" style="flex:1;">
                <div class="rc-review-progress-bar-fill" id="rc-rev-prog-fill" style="width:0%"></div>
              </div>
              <div style="font-size:0.78rem;color:var(--ink-3);white-space:nowrap;" id="rc-rev-prog-label">0 / 0</div>
            </div>

            <!-- Upcoming-soon context banner (shown when no cards are due yet) -->
            <div id="rc-upcoming-banner" style="display:none;padding:0.5rem 0.85rem;background:rgba(68,114,196,0.1);border:1px solid rgba(68,114,196,0.22);border-radius:var(--radius-sm);font-size:0.8rem;color:rgba(160,195,240,0.7);text-align:center;">
              ⏳ No cards due right now — showing cards returning within the next 6 hours
            </div>

            <div class="rc-review-answer-layout">
              <div class="rc-review-answer-panel">
                <!-- Card -->
                <div class="rc-card-scene" id="rc-card-scene">
                  <div class="rc-card-inner" id="rc-card-inner">
                    <!-- Front -->
                    <div class="rc-card-face" id="rc-card-front">
                      <div class="rc-card-front-label">Question</div>
                      <div class="rc-card-question" id="rc-card-question"></div>
                      <div id="rc-card-hint-row" style="display:none;margin-top:0.65rem;padding:0.35rem 0.6rem;background:rgba(68,114,196,0.06);border-radius:var(--radius-sm);font-size:0.81rem;color:rgba(140,175,220,0.5);border-left:2px solid rgba(68,114,196,0.3);">
                        <span style="font-size:0.62rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-right:0.3rem;">Hint</span>
                        <span id="rc-card-hint-text"></span>
                      </div>
                      <div class="rc-card-show-hint">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
                        Tap to reveal
                      </div>
                    </div>
                    <!-- Back: scrollable content area -->
                    <div class="rc-card-face rc-card-back" id="rc-card-back" style="overflow-y:auto;max-height:340px;justify-content:flex-start;">
                      <div class="rc-card-answer-label">Answer</div>
                      <div class="rc-card-answer" id="rc-card-answer"></div>
                      <div class="rc-card-images" id="rc-card-images"></div>
                      <div id="rc-card-mnemonic-row" style="display:none;">
                        <hr class="rc-card-extra-divider">
                        <div class="rc-card-extra-label">Mnemonic</div>
                        <div class="rc-card-extra-text" id="rc-card-mnemonic-text"></div>
                      </div>
                      <div id="rc-card-pearl-row" style="display:none;">
                        <hr class="rc-card-extra-divider">
                        <div class="rc-card-extra-label">💡 Clinical Pearl</div>
                        <div class="rc-card-pearl-text" id="rc-card-pearl-text"></div>
                      </div>
                      <div id="rc-card-source-row" style="display:none;">
                        <div class="rc-card-source-text" id="rc-card-source-text"></div>
                      </div>
                      <div class="rc-card-tags" id="rc-card-tags"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rc-review-controls-panel">
                <!-- Show answer / rating -->
                <button class="rc-show-answer-btn" id="rc-show-answer-btn" onclick="rcFlipCard()">Show Answer</button>

                <div class="rc-rating-row" id="rc-rating-row">
              <button class="rc-rate-btn rc-rate-again" onclick="rcRate('again')">
                <span class="rc-rate-label">Again</span>
                <span class="rc-rate-sub" id="rc-lbl-again">1 min</span>
              </button>
              <button class="rc-rate-btn rc-rate-hard" onclick="rcRate('hard')">
                <span class="rc-rate-label">Hard</span>
                <span class="rc-rate-sub" id="rc-lbl-hard">5 min</span>
              </button>
              <button class="rc-rate-btn rc-rate-good" onclick="rcRate('good')">
                <span class="rc-rate-label">Good</span>
                <span class="rc-rate-sub" id="rc-lbl-good">1 day</span>
              </button>
              <button class="rc-rate-btn rc-rate-easy" onclick="rcRate('easy')">
                <span class="rc-rate-label">Easy</span>
                <span class="rc-rate-sub" id="rc-lbl-easy">4 days</span>
              </button>
                </div>

                <!-- Quick actions from review screen (appear after flip) -->
                <div class="rc-review-card-actions" id="rc-review-card-actions">
                  <button class="rc-rev-action-btn" onclick="rcBuryFromReview()" title="Hide until tomorrow">⌛ Bury</button>
                  <button class="rc-rev-action-btn" id="rc-rev-suspend-btn" onclick="rcSuspendFromReview()">⏸ Suspend</button>
                  <button class="rc-rev-action-btn" onclick="rcResetFromReview()" title="Reset to new">↺ Reset</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Empty states -->
        <div id="rc-rev-empty-no-cards" class="rc-empty" style="display:none;">
          <div class="rc-empty-icon">✨</div>
          <div class="rc-empty-msg">No flashcards yet. Build your first recall card.</div>
          <button class="rc-btn rc-btn-primary" style="margin-top:1rem;" onclick="rcShowTab('creator')">Create a card →</button>
        </div>

        <div id="rc-rev-empty-done" class="rc-empty" style="display:none;">
          <div class="rc-empty-icon">🎉</div>
          <div class="rc-empty-msg">You're caught up. Nothing is due right now.</div>
          <div class="rc-empty-sub">Come back later or review your custom deck.</div>
        </div>

        <!-- Session summary -->
        <div id="rc-session-summary" style="display:none;">
          <div class="rc-session-summary">
            <div class="rc-summary-icon">🏆</div>
            <div class="rc-summary-title">Session Complete!</div>
            <div class="rc-summary-sub" id="rc-summary-sub">Great work today.</div>
            <div class="rc-summary-grid">
              <div class="rc-summary-item"><div class="val" id="rc-sum-reviewed">0</div><div class="lbl">Reviewed</div></div>
              <div class="rc-summary-item"><div class="val" id="rc-sum-again">0</div><div class="lbl">Again</div></div>
              <div class="rc-summary-item"><div class="val" id="rc-sum-hard">0</div><div class="lbl">Hard</div></div>
              <div class="rc-summary-item"><div class="val" id="rc-sum-next">—</div><div class="lbl">Next Due</div></div>
            </div>
            <button class="rc-btn rc-btn-primary" onclick="rcInitReviewSession()">Continue Today's Reviews</button>
          </div>
        </div>

      </div>

      <!-- Custom Deck -->
      <div id="rc-rev-deck" style="display:none;">
        <div class="rc-deck-grid">

          <!-- Deck builder -->
          <div class="rc-deck-card">
            <h3>Build Custom Deck</h3>

            <div style="font-size:0.8rem;color:var(--ink-3);margin-bottom:0.6rem;">Select tags to include:</div>
            <div class="rc-tag-selector" id="rc-deck-tag-selector">
              <span style="font-size:0.82rem;color:var(--ink-3);">No tags yet. Create cards with tags first.</span>
            </div>

            <div class="rc-match-toggle">
              <button class="rc-match-btn active" id="rc-match-any" onclick="rcSetMatchMode('any')">Match Any Tag</button>
              <button class="rc-match-btn" id="rc-match-all" onclick="rcSetMatchMode('all')">Match All Tags</button>
            </div>

            <div class="rc-preview-count" id="rc-deck-preview">Select tags to preview matching cards.</div>

            <div class="rc-field">
              <label class="rc-label" for="rc-deck-name">Deck Name</label>
              <input type="text" class="rc-deck-name-input" id="rc-deck-name" placeholder="e.g. Upper Limb Rapid Recall" maxlength="60">
            </div>

            <button class="rc-btn rc-btn-primary" style="width:100%;" onclick="rcSaveCustomDeck()">Save Custom Deck</button>
          </div>

          <!-- Saved deck -->
          <div class="rc-deck-card">
            <h3>Saved Deck</h3>
            <div id="rc-no-saved-deck" class="rc-empty" style="padding:1.5rem 0.5rem;">
              <div class="rc-empty-icon" style="font-size:1.8rem;">📋</div>
              <div class="rc-empty-msg" style="font-size:0.85rem;">No custom deck saved yet.</div>
              <div class="rc-empty-sub">Build one using the tag selector.</div>
            </div>
            <div id="rc-saved-deck-display" style="display:none;">
              <div class="rc-saved-deck-display">
                <div class="rc-saved-deck-name" id="rc-saved-deck-name">—</div>
                <div class="rc-saved-deck-meta" id="rc-saved-deck-meta"></div>
              </div>
              <div style="display:flex;flex-direction:column;gap:0.6rem;">
                <button class="rc-btn rc-btn-primary" style="width:100%;" onclick="rcStartDeckReview()">▶ Review Deck</button>
                <button class="rc-btn rc-btn-ghost rc-btn-sm" style="width:100%;" onclick="rcRegenDeck()">↻ Regenerate Deck</button>
                <button class="rc-btn rc-btn-danger rc-btn-sm" style="width:100%;" onclick="rcDeleteDeck()">✕ Delete Deck</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Deck review area -->
        <div id="rc-deck-review-area" style="display:none;margin-top:1.5rem;">
          <div class="rc-review-wrap">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.25rem;">
              <span style="font-size:0.82rem;color:var(--ink-2);font-weight:600;" id="rc-deck-review-name"></span>
              <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcEndDeckReview()">✕ End</button>
            </div>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div class="rc-review-progress-bar-bg" style="flex:1;">
                <div class="rc-review-progress-bar-fill" id="rc-deck-prog-fill" style="width:0%"></div>
              </div>
              <div style="font-size:0.78rem;color:var(--ink-3);white-space:nowrap;" id="rc-deck-prog-label">0 / 0</div>
            </div>
            <div class="rc-review-answer-layout">
              <div class="rc-review-answer-panel">
                <div class="rc-card-scene" id="rc-deck-card-scene">
                  <div class="rc-card-inner" id="rc-deck-card-inner">
                <div class="rc-card-face" id="rc-deck-card-front">
                  <div class="rc-card-front-label">Question</div>
                  <div class="rc-card-question" id="rc-deck-card-question"></div>
                  <div class="rc-card-show-hint">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
                    Tap to reveal
                  </div>
                </div>
                <div class="rc-card-face rc-card-back" id="rc-deck-card-back" style="overflow-y:auto;max-height:340px;justify-content:flex-start;">
                  <div class="rc-card-answer-label">Answer</div>
                  <div class="rc-card-answer" id="rc-deck-card-answer"></div>
                  <div class="rc-card-images" id="rc-deck-card-images"></div>
                  <div id="rc-deck-card-pearl-row" style="display:none;">
                    <hr class="rc-card-extra-divider">
                    <div class="rc-card-extra-label">💡 Clinical Pearl</div>
                    <div class="rc-card-pearl-text" id="rc-deck-card-pearl"></div>
                  </div>
                  <div class="rc-card-tags" id="rc-deck-card-tags"></div>
                  </div>
                </div>
              </div>
              <div class="rc-review-controls-panel">
                <button class="rc-show-answer-btn" id="rc-deck-show-btn" onclick="rcDeckFlipCard()">Show Answer</button>
                <div class="rc-rating-row" id="rc-deck-rating-row">
              <button class="rc-rate-btn rc-rate-again" onclick="rcDeckRate('again')"><span class="rc-rate-label">Again</span><span class="rc-rate-sub">1 min</span></button>
              <button class="rc-rate-btn rc-rate-hard" onclick="rcDeckRate('hard')"><span class="rc-rate-label">Hard</span><span class="rc-rate-sub">5 min</span></button>
              <button class="rc-rate-btn rc-rate-good" onclick="rcDeckRate('good')"><span class="rc-rate-label">Good</span><span class="rc-rate-sub">1 day</span></button>
              <button class="rc-rate-btn rc-rate-easy" onclick="rcDeckRate('easy')"><span class="rc-rate-label">Easy</span><span class="rc-rate-sub">4 days</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</div><!-- /.rc-content -->

<footer class="blossom-footer">
  <div style="display:flex;align-items:center;gap:0.85rem;">
    <span>Made by medical students, for medical students</span>
    <a href="https://discord.gg/eKevY6F2pa" target="_blank" class="blossom-footer-link">Join Discord ↗</a>
  </div>
  <span style="font-size:0.72rem;opacity:0.38;font-family:'DM Sans',sans-serif;">Recall Flashcards · IMS v0.6.3</span>
</footer>

</div><!-- /#page-recall -->
`);

// ═══════════════════════════════════════════════════════════════════
//  RECALL FLASHCARDS – JavaScript Engine
// ═══════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ── CLOUDINARY CONFIG ──────────────────────────────────────────
  const RC_CLOUDINARY_CLOUD  = 'dt2bxjok1';
  const RC_CLOUDINARY_PRESET = 'ims_flashcards';

  // ── CONSTANTS ──────────────────────────────────────────────────
  const RC_LS_KEY           = 'ims_recall_cards';
  const RC_DB_PATH          = 'users/{uid}/recall';
  const MAX_CARDS_DEFAULT   = 50;
  const MAX_INTERVAL_DAYS   = 60;
  const LEARNING_STEPS_MIN  = [1, 10];
  const GRADUATING_INTERVAL = 1;
  const EASY_INTERVAL       = 4;
  const STARTING_EASE       = 2.5;
  const MIN_EASE            = 1.3;
  const DAILY_NEW_CAP       = 20;
  const CARDS_PER_PAGE      = 20;

  // ── STATE ──────────────────────────────────────────────────────
  let _state = {
    cards: {},
    customDeck: null,
    stats: { streakDays: 0, totalReviews: 0, lastStudyDate: null, reviewedTodayCount: 0 },
    settings: { cardLimit: MAX_CARDS_DEFAULT, maxIntervalDays: MAX_INTERVAL_DAYS, dailyNewCardLimit: DAILY_NEW_CAP }
  };

  let _currentUser = null;
  let _pageActive  = false;
  let _saveTimeout = null;

  // Creator state
  let _pendingTags   = [];
  let _pendingImages = [];   // { dataUrl (blob URL), file }

  // Edit modal state
  let _editCardId         = null;
  let _editTags           = [];
  let _editExistingImages = [];
  let _editNewImages      = [];

  // Review state
  let _reviewQueue   = [];
  let _reviewIndex   = 0;
  let _reviewFlipped = false;
  let _sessionStats  = { reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };
  let _undoSnapshot  = null;
  let _undoTimer     = null;
  let _reviewMode    = 'general';
  let _deckQueue     = [];
  let _deckIndex     = 0;
  let _deckFlipped   = false;

  // Library state
  let _libPage      = 1;
  let _libFiltered  = [];
  let _bulkSelected = new Set();

  // Deck builder
  let _deckSelectedTags = [];
  let _deckMatchMode    = 'any';

  // ── SCHEMA MIGRATION ──────────────────────────────────────────
  function defaultReviewData() {
    return { status:'new', dueDate:Date.now(), lastReviewedAt:null, lastRating:null,
      intervalDays:0, easeFactor:STARTING_EASE, stepIndex:0, lapses:0, reviewCount:0, graduated:false };
  }

  function normalizeCard(card) {
    if (!card) return card;
    card.hint        = card.hint        ?? '';
    card.mnemonic    = card.mnemonic    ?? '';
    card.pearl       = card.pearl       ?? '';
    card.source      = card.source      ?? '';
    card.chapter     = card.chapter     ?? '';
    card.buriedUntil = card.buriedUntil ?? null;
    card.lastEditedAt= card.lastEditedAt?? null;
    card.tags        = card.tags        ?? [];
    card.images      = card.images      ?? [];
    card.suspended   = card.suspended   ?? false;
    card.starred     = card.starred     ?? false;
    if (!card.reviewData) card.reviewData = defaultReviewData();
    return card;
  }

  function _migrateAllCards() { Object.values(_state.cards || {}).forEach(normalizeCard); }

  function _unburyExpired() {
    const now = nowMs();
    Object.values(_state.cards || {}).forEach(c => { if (c.buriedUntil && c.buriedUntil <= now) c.buriedUntil = null; });
  }

  // ── UTILITY ───────────────────────────────────────────────────
  function uid() {
    return 'rc_' + Math.random().toString(36).slice(2, 11) + '_' + Date.now().toString(36);
  }

  function nowMs()      { return Date.now(); }
  function todayStr()   { return new Date().toISOString().split('T')[0]; }
  function tomorrowMs() { return nowMs() + 86400000; }
  function daysFromNow(d) { return nowMs() + d * 86400000; }
  function minsFromNow(m) { return nowMs() + m * 60000; }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function roundDays(d)     { return Math.round(clamp(d, 1, MAX_INTERVAL_DAYS)); }

  function sanitize(s) {
    if (typeof s !== 'string') return '';
    return s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // FIXED: dots allowed for hierarchical tags (anatomy.upper_limb)
  // Spaces become underscores. Max 40 chars.
  function normalizeTag(t) {
    return String(t || '').trim().toLowerCase()
      .replace(/\s+/g, '_').replace(/[^a-z0-9\-_.]/g, '').slice(0, 40);
  }

  function normalizeTags(arr) {
    const seen = new Set();
    return (arr || []).map(normalizeTag).filter(t => t && !seen.has(t) && seen.add(t));
  }

  function isBuried(card)  { return !!(card && card.buriedUntil && card.buriedUntil > nowMs()); }

  function isDue(card) {
    if (!card || !card.reviewData) return false;
    if (card.suspended) return false;
    if (isBuried(card)) return false;
    const rd = card.reviewData;
    if (rd.status === 'new') return true;
    return rd.dueDate <= nowMs();
  }

  function getDifficultyLabel(card) {
    if (!card || !card.reviewData) return 'new';
    const { lapses, easeFactor } = card.reviewData;
    if (lapses >= 3 || easeFactor < 1.8) return 'hard';
    if (lapses <= 0 && easeFactor >= 2.3) return 'easy';
    return 'medium';
  }

  function getStatusBadgeClass(status) {
    const map = { new:'rc-badge-new', learning:'rc-badge-learning', review:'rc-badge-review',
      relearning:'rc-badge-relearning', suspended:'rc-badge-suspended', buried:'rc-badge-buried' };
    return map[status] || 'rc-badge-new';
  }

  function formatDue(card) {
    if (!card || !card.reviewData) return '—';
    if (card.suspended) return 'Suspended';
    if (isBuried(card)) return 'Buried';
    const { status, dueDate } = card.reviewData;
    if (status === 'new') return 'New';
    const diff = Math.round((dueDate - nowMs()) / 86400000);
    if (diff < 0)  return Math.abs(diff) + 'd overdue';
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Tomorrow';
    return 'In ' + diff + 'd';
  }

  function allCards()  { return Object.values(_state.cards || {}); }
  function cardCount() { return allCards().filter(c => !c._deleted).length; }

  function allTags() {
    const tags = new Set();
    allCards().forEach(c => (c.tags || []).forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }

  function allTagsWithCounts() {
    const map = {};
    allCards().filter(c => !c._deleted).forEach(c => {
      (c.tags || []).forEach(t => { map[t] = (map[t] || 0) + 1; });
    });
    return map;
  }

  // ── ADVANCED SEARCH ───────────────────────────────────────────
  function parseCardSearchQuery(raw) {
    const q = (raw || '').trim();
    if (!q) return {};
    const result = {};
    let remaining = q.replace(/(\w+):(\S+)/g, (_, key, val) => { result[key.toLowerCase()] = val.toLowerCase(); return ''; });
    remaining = remaining.replace(/"([^"]+)"/g, (_, phrase) => { result.exact = phrase.toLowerCase(); return ''; });
    const plain = remaining.trim();
    if (plain) result.text = plain.toLowerCase();
    return result;
  }

  function filterCards(cards, parsed, opts) {
    const filterTag    = (opts && opts.filterTag)    || '';
    const filterStatus = (opts && opts.filterStatus) || '';
    return cards.filter(c => {
      if (c._deleted) return false;
      if (filterTag) {
        if (filterTag === '__untagged__') { if ((c.tags || []).length) return false; }
        else if (!(c.tags || []).includes(filterTag)) return false;
      }
      if (filterStatus) {
        if (filterStatus === 'starred'   && !c.starred)   return false;
        if (filterStatus === 'suspended' && !c.suspended)  return false;
        if (filterStatus === 'buried'    && !isBuried(c)) return false;
        if (!['starred','suspended','buried'].includes(filterStatus)) {
          if (!c.reviewData || c.reviewData.status !== filterStatus) return false;
        }
      }
      if (!Object.keys(parsed).length) return true;
      if (parsed.tag) {
        const t = parsed.tag;
        if (t === 'untagged') { if ((c.tags || []).length) return false; }
        else if (!(c.tags || []).some(ct => ct === t || ct.startsWith(t + '.'))) return false;
      }
      if (parsed.status) {
        if (parsed.status === 'suspended' && !c.suspended)  return false;
        else if (parsed.status === 'buried' && !isBuried(c)) return false;
        else if (!['suspended','buried'].includes(parsed.status)) {
          if (!c.reviewData || c.reviewData.status !== parsed.status) return false;
        }
      }
      if (parsed.starred === 'true' && !c.starred) return false;
      if (parsed.is === 'due'       && !isDue(c))             return false;
      if (parsed.is === 'suspended' && !c.suspended)          return false;
      if (parsed.is === 'untagged'  && (c.tags || []).length) return false;
      if (parsed.is === 'buried'    && !isBuried(c))          return false;
      if (parsed.is === 'starred'   && !c.starred)            return false;
      const needle = parsed.exact || parsed.text;
      if (needle) {
        const hay = [c.question||'', c.answer||'', (c.tags||[]).join(' '),
          c.hint||'', c.mnemonic||'', c.pearl||'', c.source||'', c.chapter||''].join(' ').toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }

  // ── CLOUDINARY UPLOAD ─────────────────────────────────────────
  async function _uploadOneToCloudinary(file) {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', RC_CLOUDINARY_PRESET);
    const res = await fetch('https://api.cloudinary.com/v1_1/' + RC_CLOUDINARY_CLOUD + '/image/upload', { method:'POST', body:form });
    if (!res.ok) {
      let detail = 'HTTP ' + res.status;
      try { const j = await res.json(); if (j.error && j.error.message) detail = j.error.message; } catch(_) {}
      throw new Error('Cloudinary upload failed: ' + detail);
    }
    const data = await res.json();
    if (!data.secure_url) throw new Error('Cloudinary returned no URL.');
    return data.secure_url;
  }

  async function _uploadFiles(files) {
    const urls = [];
    for (const f of files) urls.push(await _uploadOneToCloudinary(f.file));
    return urls;
  }

  // ── LOCAL STORAGE PERSISTENCE ─────────────────────────────────
  function _lsKey() {
    return _currentUser ? RC_LS_KEY + '_' + _currentUser : null;
  }

  function _loadFromLS() {
    const k = _lsKey();
    if (!k) return null;
    try {
      const d = localStorage.getItem(k);
      return d ? JSON.parse(d) : null;
    } catch(e) { return null; }
  }

  function _saveToLS(data) {
    const k = _lsKey();
    if (!k) return;
    try { localStorage.setItem(k, JSON.stringify(data)); } catch(e) {}
  }

  // ── FIREBASE PERSISTENCE ──────────────────────────────────────
  function _fbPath() {
    if (!_currentUser || !window._rtdb) return null;
    return 'users/' + _currentUser + '/recall';
  }

  async function _loadFromFB() {
    const path = _fbPath();
    if (!path) return null;
    try {
      const snap = await window._rtdb.ref(path).once('value');
      return snap.val();
    } catch(e) { console.warn('RC Firebase load error:', e); return null; }
  }

  async function _saveToFB(data) {
    const path = _fbPath();
    if (!path) return;
    try {
      await window._rtdb.ref(path).set(data);
    } catch(e) { console.warn('RC Firebase save error:', e); }
  }

  function _scheduleAutoSave() {
    if (_saveTimeout) clearTimeout(_saveTimeout);
    _saveTimeout = setTimeout(() => {
      _saveTimeout = null;
      const data = { cards: _state.cards, customDeck: _state.customDeck, stats: _state.stats, settings: _state.settings, _savedAt: nowMs() };
      _saveToLS(data);
      _saveToFB(data);
    }, 800);
  }

  async function _loadState() {
    if (!_currentUser) return;
    const local = _loadFromLS();
    const remote = await _loadFromFB();
    let chosen = null;
    if (local && remote) {
      chosen = (local._savedAt || 0) > (remote._savedAt || 0) ? local : remote;
    } else {
      chosen = local || remote;
    }
    if (chosen) {
      _state.cards    = chosen.cards    || {};
      _state.customDeck = chosen.customDeck || null;
      _state.stats    = { ...{ streakDays:0, totalReviews:0, lastStudyDate:null, reviewedTodayCount:0 }, ...(chosen.stats || {}) };
      _state.settings = { ...{ cardLimit:MAX_CARDS_DEFAULT, maxIntervalDays:MAX_INTERVAL_DAYS, dailyNewCardLimit:DAILY_NEW_CAP }, ...(chosen.settings || {}) };
    }
    // Migrate schema + daily maintenance
    _migrateAllCards();
    _unburyExpired();
    // Daily reset of reviewedTodayCount
    if (_state.stats.lastStudyDate !== todayStr()) {
      _state.stats.reviewedTodayCount = 0;
    }
  }

  // ── PAGE ACTIVATION ───────────────────────────────────────────
  window.recallPageActivated = async function() {
    const username = window.DB ? window.DB.getCurrentUser() : null;
    if (_pageActive && username === _currentUser) { _refreshUI(); return; }
    _pageActive = true;
    _currentUser = username;
    if (!_currentUser) { _showAuthGates(); return; }
    _hideAuthGates();
    await _loadState();
    _refreshUI();
  };

  function _showAuthGates() {
    _el('rc-creator-gate').style.display = '';
    _el('rc-creator-main').style.display = 'none';
    _el('rc-revise-gate').style.display  = '';
    _el('rc-revise-main').style.display  = 'none';
  }

  function _hideAuthGates() {
    _el('rc-creator-gate').style.display = 'none';
    _el('rc-creator-main').style.display = '';
    _el('rc-revise-gate').style.display  = 'none';
    _el('rc-revise-main').style.display  = '';
  }

  // Call after any operation that changes tag data
  function _refreshAllTagUI() {
    _updateTagsCloud();
    _renderDeckTagSelector();
    _updateDeckPreview();
  }

  function _refreshUI() {
    _updateLimitUI();
    _refreshAllTagUI();
    rcRenderLibrary();
    _updateStatsUI();
    _updateDeckUI();
    if (_reviewQueue.length > 0 && _reviewIndex < _reviewQueue.length) {
      _renderCurrentCard();
    } else {
      rcInitReviewSession();
    }
    setTimeout(_syncAllReviewSceneHeights, 0);
  }

  function _el(id) { return document.getElementById(id); }

  function _syncReviewCardSceneHeight(sceneId, frontId, backId, flipped) {
    const scene = _el(sceneId), front = _el(frontId), back = _el(backId);
    if (!scene || !front || !back) return;
    const minH = 200;
    const frontH = Math.max(minH, Math.ceil(front.scrollHeight));
    const backH = Math.max(minH, Math.ceil(back.scrollHeight));
    const target = flipped ? Math.min(340, backH) : frontH;
    scene.style.height = target + 'px';
    scene.style.minHeight = target + 'px';
  }

  function _syncAllReviewSceneHeights() {
    _syncReviewCardSceneHeight('rc-card-scene', 'rc-card-front', 'rc-card-back', _reviewFlipped);
    _syncReviewCardSceneHeight('rc-deck-card-scene', 'rc-deck-card-front', 'rc-deck-card-back', _deckFlipped);
  }

  // ── TOAST ──────────────────────────────────────────────────────
  function rcToast(msg, type = 'success') {
    const wrap = _el('rc-toasts');
    if (!wrap) return;
    const t = document.createElement('div');
    t.className = 'rc-toast rc-toast-' + type;
    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    t.innerHTML = '<span>' + (icons[type] || '') + '</span><span>' + sanitize(msg) + '</span>';
    wrap.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 350); }, 2800);
  }
  window.rcToast = rcToast;

  // ── CONFIRM MODAL ─────────────────────────────────────────────
  let _confirmResolve = null;
  function rcConfirm(title, body, okLabel = 'Confirm', dangerOk = true) {
    return new Promise(resolve => {
      _confirmResolve = resolve;
      const modal = _el('rc-confirm-modal');
      _el('rc-confirm-title').textContent = title;
      _el('rc-confirm-body').textContent = body;
      const okBtn = _el('rc-confirm-ok-btn');
      okBtn.textContent = okLabel;
      okBtn.className = 'rc-btn rc-btn-sm ' + (dangerOk ? 'rc-btn-danger' : 'rc-btn-primary');
      modal.classList.add('open');
    });
  }
  window.rcConfirmOk = function() {
    _el('rc-confirm-modal').classList.remove('open');
    if (_confirmResolve) { _confirmResolve(true); _confirmResolve = null; }
  };
  window.rcConfirmCancel = function() {
    _el('rc-confirm-modal').classList.remove('open');
    if (_confirmResolve) { _confirmResolve(false); _confirmResolve = null; }
  };

  // ── LIGHTBOX ──────────────────────────────────────────────────
  window.rcOpenLightbox = function(src) {
    _el('rc-lightbox-img').src = src;
    _el('rc-lightbox').classList.add('open');
  };
  window.rcCloseLightbox = function() {
    _el('rc-lightbox').classList.remove('open');
  };

  // ── TAB NAVIGATION ────────────────────────────────────────────
  window.rcShowTab = function(tab) {
    ['creator','revise'].forEach(t => {
      _el('rc-panel-' + t).classList.toggle('active', t === tab);
      _el('rc-tab-' + t).classList.toggle('active', t === tab);
    });
    if (tab === 'revise') {
      const username = window.DB ? window.DB.getCurrentUser() : null;
      if (username && username !== _currentUser) {
        _currentUser = username;
        _pageActive = false;
        window.recallPageActivated();
      } else if (!_currentUser) {
        _showAuthGates();
      }
    }
  };

  window.rcShowReviseTab = function(tab) {
    const isGeneral = tab === 'general';
    _el('rc-rtab-general').classList.toggle('active', isGeneral);
    _el('rc-rtab-deck').classList.toggle('active', !isGeneral);
    _el('rc-rev-general').style.display = isGeneral ? '' : 'none';
    _el('rc-rev-deck').style.display = isGeneral ? 'none' : '';
  };

  // ── CHAR COUNT ────────────────────────────────────────────────
  window.rcUpdateCharCount = function(inputId, countId, max) {
    const input = _el(inputId);
    const count = _el(countId);
    if (!input || !count) return;
    const len = input.value.length;
    count.textContent = len + ' / ' + max;
    count.classList.toggle('warn', len > max * 0.85);
  };

  // ── TAG INPUT ─────────────────────────────────────────────────
  function _addPendingTag(raw) {
    const tag = normalizeTag(raw);
    if (!tag || _pendingTags.includes(tag) || _pendingTags.length >= 10) return;
    _pendingTags.push(tag);
    _renderPendingTags();
  }

  function _removePendingTag(tag) {
    _pendingTags = _pendingTags.filter(t => t !== tag);
    _renderPendingTags();
    _checkDupWarning();
  }

  function _renderPendingTags() {
    const wrap = _el('rc-tag-wrap');
    const input = _el('rc-tag-input');
    // Remove existing chips
    wrap.querySelectorAll('.rc-tag-chip').forEach(c => c.remove());
    _pendingTags.forEach(tag => {
      const chip = document.createElement('span');
      chip.className = 'rc-tag-chip';
      chip.innerHTML = sanitize(tag) + '<button onclick="rcRemovePendingTag(\'' + tag + '\')">×</button>';
      wrap.insertBefore(chip, input);
    });
  }
  window.rcRemovePendingTag = function(tag) { _removePendingTag(tag); };

  window.rcTagKeydown = function(e) {
    const input = _el('rc-tag-input');
    if ((e.key === 'Enter' || e.key === ',') && input.value.trim()) {
      e.preventDefault();
      _addPendingTag(input.value);
      input.value = '';
    } else if (e.key === 'Backspace' && !input.value && _pendingTags.length) {
      _removePendingTag(_pendingTags[_pendingTags.length - 1]);
    }
  };

  window.rcTagInput = function(e) {
    const input = _el('rc-tag-input');
    if (input.value.endsWith(',')) { _addPendingTag(input.value.slice(0, -1)); input.value = ''; }
    window.rcCheckDupWarning();
  };

  // ── IMAGE HANDLING (CREATOR) ──────────────────────────────────
  window.rcDragOver  = function(e) { e.preventDefault(); _el('rc-drop-zone').classList.add('drag-over'); };
  window.rcDragLeave = function(e) { _el('rc-drop-zone').classList.remove('drag-over'); };
  window.rcDrop      = function(e) {
    e.preventDefault(); _el('rc-drop-zone').classList.remove('drag-over'); rcHandleFiles(e.dataTransfer.files);
  };

  window.rcHandleFiles = function(files) {
    if (!files) return;
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    Array.from(files).forEach(file => {
      if (_pendingImages.length >= 5)      { rcToast('Max 5 images per card', 'error'); return; }
      if (!allowed.includes(file.type))   { rcToast('Unsupported format: ' + file.name, 'error'); return; }
      if (file.size > 10 * 1024 * 1024)  { rcToast('File too large (max 10 MB): ' + file.name, 'error'); return; }
      _pendingImages.push({ dataUrl: URL.createObjectURL(file), file });
      _renderImagePreviews();
    });
  };

  function _renderImagePreviews() {
    const wrap = _el('rc-img-previews');
    if (!wrap) return;
    wrap.innerHTML = '';
    _pendingImages.forEach((img, i) => {
      const thumb = document.createElement('div');
      thumb.className = 'rc-img-thumb';
      thumb.innerHTML = '<img src="' + img.dataUrl + '" alt="preview"><button onclick="rcRemoveImage(' + i + ')">×</button>';
      wrap.appendChild(thumb);
    });
  }

  window.rcRemoveImage = function(idx) {
    const e = _pendingImages[idx];
    if (e && e.dataUrl && e.dataUrl.startsWith('blob:')) URL.revokeObjectURL(e.dataUrl);
    _pendingImages.splice(idx, 1);
    _renderImagePreviews();
  };

  // ── IMAGE HANDLING (EDIT MODAL) ────────────────────────────────
  window.rcEditHandleFiles = function(files) {
    if (!files) return;
    const allowed = ['image/jpeg','image/png','image/webp'];
    Array.from(files).forEach(file => {
      const total = _editExistingImages.length + _editNewImages.length;
      if (total >= 5)                    { rcToast('Max 5 images per card', 'error'); return; }
      if (!allowed.includes(file.type)) { rcToast('Unsupported format: ' + file.name, 'error'); return; }
      if (file.size > 10*1024*1024)     { rcToast('File too large', 'error'); return; }
      _editNewImages.push({ dataUrl: URL.createObjectURL(file), file });
      _renderEditNewImages();
    });
  };

  function _renderEditExistingImages() {
    const wrap = _el('rc-edit-existing-imgs');
    if (!wrap) return;
    if (!_editExistingImages.length) { wrap.innerHTML = '<span style="font-size:0.78rem;color:var(--ink-3);">No existing images.</span>'; return; }
    wrap.innerHTML = '';
    _editExistingImages.forEach((url, i) => {
      const thumb = document.createElement('div');
      thumb.className = 'rc-img-thumb';
      thumb.innerHTML = '<img src="' + sanitize(url) + '" alt="image"><button onclick="rcRemoveEditExisting(' + i + ')">×</button>';
      wrap.appendChild(thumb);
    });
  }

  function _renderEditNewImages() {
    const wrap = _el('rc-edit-new-imgs');
    if (!wrap) return;
    wrap.innerHTML = '';
    _editNewImages.forEach((img, i) => {
      const thumb = document.createElement('div');
      thumb.className = 'rc-img-thumb';
      thumb.innerHTML = '<img src="' + img.dataUrl + '" alt="new"><button onclick="rcRemoveEditNew(' + i + ')">×</button>';
      wrap.appendChild(thumb);
    });
  }

  window.rcRemoveEditExisting = function(idx) { _editExistingImages.splice(idx, 1); _renderEditExistingImages(); };
  window.rcRemoveEditNew = function(idx) {
    const e = _editNewImages[idx];
    if (e && e.dataUrl && e.dataUrl.startsWith('blob:')) URL.revokeObjectURL(e.dataUrl);
    _editNewImages.splice(idx, 1);
    _renderEditNewImages();
  };

  // ── CARD SAVE ─────────────────────────────────────────────────
  let _saving = false;

  window.rcSaveCard = async function() {
    if (!_currentUser) { rcToast('Please log in first', 'error'); return; }
    if (_saving) return;
    const questionEl = _el('rc-question'), answerEl = _el('rc-answer');
    const question = questionEl ? questionEl.value.trim() : '';
    const answer   = answerEl   ? answerEl.value.trim()   : '';
    if (!question) { rcToast('Question is required', 'error'); questionEl && questionEl.focus(); return; }
    if (!answer)   { rcToast('Answer is required',   'error'); answerEl   && answerEl.focus();   return; }
    if (question.length > 500)  { rcToast('Question too long (max 500)',  'error'); return; }
    if (answer.length   > 2000) { rcToast('Answer too long (max 2000)',   'error'); return; }
    const limit = _state.settings.cardLimit || MAX_CARDS_DEFAULT;
    if (cardCount() >= limit) { rcToast('Card limit reached (' + limit + ')', 'error'); return; }

    _saving = true;
    const btn = _el('rc-save-btn');
    if (btn) { btn.disabled = true; btn.textContent = _pendingImages.length ? 'Uploading…' : 'Saving…'; }

    let hostedUrls = [];
    if (_pendingImages.length > 0) {
      try {
        rcToast('Uploading ' + _pendingImages.length + ' image' + (_pendingImages.length > 1 ? 's' : '') + '…', 'info');
        hostedUrls = await _uploadFiles(_pendingImages);
      } catch(err) {
        rcToast('Image upload failed — card not saved. ' + err.message, 'error');
        _saving = false;
        if (btn) { btn.disabled = false; btn.textContent = '✓ Save Card'; }
        return;
      }
    }

    const now    = nowMs();
    const cardId = uid();
    const card   = normalizeCard({
      id: cardId, question, answer,
      images: hostedUrls,
      tags: normalizeTags(_pendingTags),
      hint:     _el('rc-hint')     ? _el('rc-hint').value.trim()     : '',
      mnemonic: _el('rc-mnemonic') ? _el('rc-mnemonic').value.trim() : '',
      pearl:    _el('rc-pearl')    ? _el('rc-pearl').value.trim()    : '',
      source:   _el('rc-source')   ? _el('rc-source').value.trim()   : '',
      chapter:  _el('rc-chapter')  ? _el('rc-chapter').value.trim()  : '',
      starred: false, suspended: false,
      createdAt: now, updatedAt: now, lastEditedAt: now,
      reviewData: defaultReviewData()
    });

    _state.cards[cardId] = card;
    _scheduleAutoSave();

    // Revoke blob URLs
    _pendingImages.forEach(img => { if (img.dataUrl && img.dataUrl.startsWith('blob:')) URL.revokeObjectURL(img.dataUrl); });

    // Reset form
    if (questionEl) questionEl.value = '';
    if (answerEl)   answerEl.value   = '';
    _pendingTags = []; _pendingImages = [];
    _renderPendingTags(); _renderImagePreviews();
    if (_el('rc-create-adv-fields')) { _el('rc-create-adv-fields').classList.remove('open'); }
    if (_el('rc-create-adv-toggle')) { _el('rc-create-adv-toggle').classList.remove('open'); _el('rc-create-adv-toggle').textContent = '↓ Advanced — hint, mnemonic, clinical pearl, source, chapter'; }
    ['rc-hint','rc-mnemonic','rc-pearl','rc-source','rc-chapter'].forEach(id => { const el = _el(id); if(el) el.value = ''; });
    _el('rc-dup-warning').style.display = 'none';
    ['rc-q-count','rc-a-count'].forEach(id => { const el = _el(id); if(el) el.textContent = '0 / ' + (id.includes('q') ? '500' : '2000'); });

    rcToast('Card saved!');
    _updateLimitUI(); _refreshAllTagUI(); rcRenderLibrary(); rcInitReviewSession();
    _saving = false;
    if (btn) { btn.disabled = false; btn.textContent = '✓ Save Card'; }
  };

  // ── LIMIT UI ──────────────────────────────────────────────────
  function _updateLimitUI() {
    const limit = _state.settings.cardLimit || MAX_CARDS_DEFAULT;
    const count = cardCount();
    const pct = Math.min(100, (count / limit) * 100);
    const textEl = _el('rc-limit-text');
    if (textEl) textEl.textContent = count + ' / ' + limit + ' cards used';
    const bar = _el('rc-limit-bar');
    if (bar) {
      bar.style.width = pct + '%';
      bar.className = 'rc-limit-bar-fill' + (pct >= 100 ? ' full' : pct >= 80 ? ' warn' : '');
    }
    const warn = _el('rc-limit-warning');
    if (warn) warn.style.display = count >= limit ? '' : 'none';
    const btn = _el('rc-save-btn');
    if (btn) btn.disabled = count >= limit;
  }

  // ── TAGS CLOUD ────────────────────────────────────────────────
  function _updateTagsCloud() {
    const cloud = _el('rc-all-tags-cloud');
    const tags  = allTags();
    if (cloud) {
      cloud.innerHTML = tags.length
        ? tags.map(t => '<span class="rc-tag-chip" style="cursor:pointer;" onclick="rcFilterByTag(\'' + sanitize(t) + '\')">' + sanitize(t) + '</span>').join('')
        : '<span style="color:var(--ink-3);">No tags yet.</span>';
    }
    const filterTag = _el('rc-filter-tag');
    if (filterTag) {
      const cur = filterTag.value;
      filterTag.innerHTML = '<option value="">All tags</option>' + tags.map(t => '<option value="' + sanitize(t) + '">' + sanitize(t) + '</option>').join('');
      filterTag.value = cur;
    }
    _renderDeckTagSelector();
  }
  window.rcFilterByTag = function(tag) {
    const el = _el('rc-filter-tag');
    if (el) { el.value = tag; rcRenderLibrary(); }
    rcShowTab('creator');
  };

  // ── LIBRARY RENDER ────────────────────────────────────────────
  window.rcRenderLibrary = function() {
    if (!_currentUser) return;
    const searchVal    = _el('rc-search')        ? _el('rc-search').value        : '';
    const filterTag    = _el('rc-filter-tag')    ? _el('rc-filter-tag').value    : '';
    const filterStatus = _el('rc-filter-status') ? _el('rc-filter-status').value : '';
    const sort         = _el('rc-sort')          ? _el('rc-sort').value          : 'newest';
    const parsed       = parseCardSearchQuery(searchVal);

    let cards = filterCards(allCards(), parsed, { filterTag, filterStatus });

    cards.sort((a, b) => {
      if (sort === 'newest')  return (b.createdAt || 0) - (a.createdAt || 0);
      if (sort === 'oldest')  return (a.createdAt || 0) - (b.createdAt || 0);
      if (sort === 'due')     return (a.reviewData ? a.reviewData.dueDate : 0) - (b.reviewData ? b.reviewData.dueDate : 0);
      if (sort === 'hardest') return (a.reviewData ? a.reviewData.easeFactor : 99) - (b.reviewData ? b.reviewData.easeFactor : 99);
      if (sort === 'lapses')  return (b.reviewData ? b.reviewData.lapses : 0) - (a.reviewData ? a.reviewData.lapses : 0);
      if (sort === 'edited')  return (b.lastEditedAt || b.updatedAt || 0) - (a.lastEditedAt || a.updatedAt || 0);
      if (sort === 'alpha')   return (a.question || '').localeCompare(b.question || '');
      return 0;
    });

    _libFiltered = cards;
    const total      = cards.length;
    const totalPages = Math.max(1, Math.ceil(total / CARDS_PER_PAGE));
    _libPage         = Math.min(_libPage, totalPages);
    const pageCards  = cards.slice((_libPage - 1) * CARDS_PER_PAGE, _libPage * CARDS_PER_PAGE);

    const body = _el('rc-library-body');
    if (!body) return;

    if (!total) {
      const msg = (searchVal || filterTag || filterStatus) ? 'No cards match your search or filter.' : 'No flashcards yet. Build your first recall card.';
      body.innerHTML = '<div class="rc-empty"><div class="rc-empty-icon">📭</div><div class="rc-empty-msg">' + sanitize(msg) + '</div></div>';
      if (_el('rc-pagination')) _el('rc-pagination').innerHTML = '';
      _updateBulkBar(); return;
    }

    body.innerHTML = '<table class="rc-card-table"><thead><tr>' +
      '<th style="width:22px"><input type="checkbox" id="rc-select-all" onchange="rcToggleSelectAll(this.checked)" title="Select all"></th>' +
      '<th style="width:18px"></th><th>Question</th><th>Tags</th><th>Status</th><th>Due</th><th>Actions</th>' +
      '</tr></thead><tbody>' + pageCards.map(c => _cardRow(c)).join('') + '</tbody></table>';

    const pag = _el('rc-pagination');
    if (pag) {
      let html = '<button class="rc-page-btn" onclick="rcLibPage(' + (_libPage - 1) + ')" ' + (_libPage <= 1 ? 'disabled' : '') + '>‹</button>';
      for (let i = 1; i <= totalPages; i++) html += '<button class="rc-page-btn' + (i === _libPage ? ' active' : '') + '" onclick="rcLibPage(' + i + ')">' + i + '</button>';
      html += '<button class="rc-page-btn" onclick="rcLibPage(' + (_libPage + 1) + ')" ' + (_libPage >= totalPages ? 'disabled' : '') + '>›</button>';
      pag.innerHTML = html;
    }
    _updateBulkBar();
  };
  window.rcLibPage = function(p) { _libPage = p; rcRenderLibrary(); };

  function _cardRow(card) {
    const rd       = card.reviewData || {};
    const isDueNow = isDue(card);
    const starIcon = card.starred ? '⭐' : '☆';
    const isChkd   = _bulkSelected.has(card.id);
    const tagHtml  = (card.tags || []).slice(0, 2).map(t => '<span class="rc-badge rc-badge-new" style="margin:1px;">' + sanitize(t) + '</span>').join('') +
      ((card.tags || []).length > 2 ? '<span style="font-size:0.68rem;color:var(--ink-3);">+' + ((card.tags||[]).length-2) + '</span>' : '');
    let statusDisplay = rd.status || 'new';
    if (card.suspended) statusDisplay = 'suspended';
    else if (isBuried(card)) statusDisplay = 'buried';
    const due = formatDue(card);

    return '<tr>' +
      '<td><input type="checkbox" onchange="rcToggleCardSelect(\'' + card.id + '\',this.checked)" ' + (isChkd ? 'checked' : '') + '></td>' +
      '<td><span class="rc-star" onclick="rcToggleStar(\'' + card.id + '\')">'+starIcon+'</span></td>' +
      '<td class="rc-q-cell" title="' + sanitize(card.question) + '">' + sanitize(card.question.slice(0,72)) + (card.question.length>72?'…':'') + '</td>' +
      '<td>' + (tagHtml || '<span style="color:var(--ink-3);font-size:0.74rem;">—</span>') + '</td>' +
      '<td><span class="rc-badge ' + getStatusBadgeClass(statusDisplay) + '">' + sanitize(statusDisplay) + '</span></td>' +
      '<td style="' + (isDueNow ? 'color:var(--orange);font-weight:600;' : '') + '">' + due + '</td>' +
      '<td><div style="display:flex;gap:0.28rem;flex-wrap:nowrap;">' +
        '<button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcOpenEditModal(\'' + card.id + '\')">Edit</button>' +
        '<button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcToggleSuspend(\'' + card.id + '\')">' + (card.suspended ? 'Unsuspend' : 'Suspend') + '</button>' +
        '<button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcBuryCard(\'' + card.id + '\')" title="Bury until tomorrow">Bury</button>' +
        '<button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcResetProgress(\'' + card.id + '\')" title="Reset to new">↺</button>' +
        '<button class="rc-btn rc-btn-danger rc-btn-sm" onclick="rcDeleteCard(\'' + card.id + '\')">✕</button>' +
      '</div></td>' +
    '</tr>';
  }

  // ── CARD ACTIONS ──────────────────────────────────────────────
  window.rcToggleStar = function(id) {
    const c = _state.cards[id]; if (!c) return;
    c.starred = !c.starred; c.updatedAt = nowMs();
    _scheduleAutoSave(); rcRenderLibrary();
  };

  window.rcToggleSuspend = async function(id) {
    const c = _state.cards[id]; if (!c) return;
    c.suspended = !c.suspended; c.updatedAt = nowMs();
    _scheduleAutoSave(); rcToast(c.suspended ? 'Card suspended' : 'Card unsuspended', 'info');
    rcRenderLibrary(); rcInitReviewSession();
  };

  window.rcBuryCard = function(id) {
    const c = _state.cards[id]; if (!c) return;
    c.buriedUntil = tomorrowMs(); c.updatedAt = nowMs();
    _scheduleAutoSave(); rcToast('Buried until tomorrow', 'info');
    rcRenderLibrary(); rcInitReviewSession();
  };

  window.rcResetProgress = async function(id) {
    const c = _state.cards[id]; if (!c) return;
    const ok = await rcConfirm('Reset card?', 'Reset this card to New. Review history will be cleared.', 'Reset');
    if (!ok) return;
    c.reviewData = defaultReviewData(); c.updatedAt = nowMs();
    _scheduleAutoSave(); rcToast('Progress reset', 'info');
    rcRenderLibrary(); rcInitReviewSession();
  };

  window.rcDeleteCard = async function(id) {
    const ok = await rcConfirm('Delete flashcard?', 'Delete this flashcard? This cannot be undone.', 'Delete');
    if (!ok) return;
    delete _state.cards[id];
    if (_state.customDeck && _state.customDeck.cardIds) {
      _state.customDeck.cardIds = _state.customDeck.cardIds.filter(cid => cid !== id);
    }
    _bulkSelected.delete(id);
    _scheduleAutoSave(); rcToast('Card deleted');
    _updateLimitUI(); _refreshAllTagUI(); rcRenderLibrary(); rcInitReviewSession();
  };

  // ── BULK SELECTION ────────────────────────────────────────────
  window.rcToggleCardSelect = function(id, checked) {
    if (checked) _bulkSelected.add(id); else _bulkSelected.delete(id);
    _updateBulkBar();
  };
  window.rcToggleSelectAll = function(checked) {
    if (checked) _libFiltered.forEach(c => _bulkSelected.add(c.id));
    else         _libFiltered.forEach(c => _bulkSelected.delete(c.id));
    rcRenderLibrary();
  };
  function _updateBulkBar() {
    const bar = _el('rc-bulk-bar'), cnt = _el('rc-bulk-count');
    if (!bar) return;
    const n = _bulkSelected.size;
    bar.classList.toggle('visible', n > 0);
    if (cnt) cnt.textContent = n;
  }
  window.rcClearBulkSelect = function() { _bulkSelected.clear(); rcRenderLibrary(); };
  function _bulkIds() { return Array.from(_bulkSelected).filter(id => _state.cards[id]); }

  window.rcBulkSuspend = function() {
    _bulkIds().forEach(id => { const c = _state.cards[id]; if(c){ c.suspended=true; c.updatedAt=nowMs(); }});
    _scheduleAutoSave(); rcToast('Suspended ' + _bulkIds().length + ' cards','info'); _bulkSelected.clear(); rcRenderLibrary(); rcInitReviewSession();
  };
  window.rcBulkUnsuspend = function() {
    _bulkIds().forEach(id => { const c = _state.cards[id]; if(c){ c.suspended=false; c.updatedAt=nowMs(); }});
    _scheduleAutoSave(); rcToast('Unsuspended','info'); _bulkSelected.clear(); rcRenderLibrary(); rcInitReviewSession();
  };
  window.rcBulkBury = function() {
    _bulkIds().forEach(id => { const c = _state.cards[id]; if(c){ c.buriedUntil=tomorrowMs(); c.updatedAt=nowMs(); }});
    _scheduleAutoSave(); rcToast('Buried until tomorrow','info'); _bulkSelected.clear(); rcRenderLibrary(); rcInitReviewSession();
  };
  window.rcBulkReset = async function() {
    const ids = _bulkIds(); if (!ids.length) return;
    const ok = await rcConfirm('Reset progress?', 'Reset ' + ids.length + ' card(s) to New. Review history will be cleared.','Reset');
    if (!ok) return;
    ids.forEach(id => { const c = _state.cards[id]; if(c){ c.reviewData=defaultReviewData(); c.updatedAt=nowMs(); }});
    _scheduleAutoSave(); rcToast('Progress reset','info'); _bulkSelected.clear(); rcRenderLibrary(); rcInitReviewSession();
  };
  window.rcBulkDelete = async function() {
    const ids = _bulkIds(); if (!ids.length) return;
    const ok = await rcConfirm('Delete ' + ids.length + ' cards?','This cannot be undone.','Delete All');
    if (!ok) return;
    ids.forEach(id => { delete _state.cards[id]; if(_state.customDeck && _state.customDeck.cardIds) _state.customDeck.cardIds = _state.customDeck.cardIds.filter(cid => cid !== id); });
    _scheduleAutoSave(); rcToast('Deleted ' + ids.length + ' cards'); _bulkSelected.clear();
    _updateLimitUI(); _refreshAllTagUI(); rcRenderLibrary(); rcInitReviewSession();
  };
  window.rcBulkAddTag = async function() {
    const ids = _bulkIds(); if (!ids.length) return;
    const raw = prompt('Enter tag to add to ' + ids.length + ' card(s):');
    if (!raw) return;
    const tag = normalizeTag(raw);
    if (!tag) { rcToast('Invalid tag', 'error'); return; }
    ids.forEach(id => { const c = _state.cards[id]; if(!c) return; c.tags=c.tags||[]; if(!c.tags.includes(tag) && c.tags.length<10){c.tags.push(tag);c.updatedAt=nowMs();} });
    _scheduleAutoSave(); rcToast('Added tag "' + tag + '"', 'info'); _refreshAllTagUI(); rcRenderLibrary();
  };

  // ── TAG MANAGER ───────────────────────────────────────────────
  window.rcOpenTagManager = function() { _renderTagManagerList(); _el('rc-tagmgr-modal').classList.add('open'); };
  window.rcCloseTagManager = function() { _el('rc-tagmgr-modal').classList.remove('open'); };

  function _renderTagManagerList() {
    const list   = _el('rc-tagmgr-list'); if (!list) return;
    const counts = allTagsWithCounts();
    const tags   = Object.keys(counts).sort();
    if (!tags.length) { list.innerHTML = '<div style="color:var(--ink-3);font-size:0.84rem;text-align:center;padding:1.5rem 0;">No tags yet.</div>'; return; }
    list.innerHTML = tags.map((tag, i) =>
      '<div class="rc-tagmgr-row" id="rc-tm-row-' + i + '">' +
        '<span class="rc-tagmgr-name">' + sanitize(tag) + '</span>' +
        '<span class="rc-tagmgr-count">' + counts[tag] + ' card' + (counts[tag]!==1?'s':'') + '</span>' +
        '<div class="rc-tagmgr-actions">' +
          '<button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcTmFilter(\'' + sanitize(tag) + '\')">Browse</button>' +
          '<button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcTmStartRename(\'' + sanitize(tag) + '\',' + i + ')">Rename</button>' +
          '<button class="rc-btn rc-btn-danger rc-btn-sm" onclick="rcTmDelete(\'' + sanitize(tag) + '\')">Delete</button>' +
        '</div>' +
        '<div class="rc-tagmgr-edit-wrap" id="rc-tm-edit-' + i + '">' +
          '<input type="text" class="rc-input" style="flex:1;" id="rc-tm-input-' + i + '" value="' + sanitize(tag) + '">' +
          '<button class="rc-btn rc-btn-primary rc-btn-sm" onclick="rcTmConfirmRename(\'' + sanitize(tag) + '\',' + i + ')">Save</button>' +
          '<button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcTmCancelRename(' + i + ')">Cancel</button>' +
        '</div>' +
      '</div>'
    ).join('');
  }

  window.rcTmFilter = function(tag) { rcCloseTagManager(); const el = _el('rc-filter-tag'); if(el){el.value=tag;rcRenderLibrary();} rcShowTab('creator'); };
  window.rcTmStartRename = function(tag, i) {
    const w = _el('rc-tm-edit-' + i); if(w) w.classList.add('open');
    const inp = _el('rc-tm-input-' + i); if(inp){inp.value=tag;inp.focus();inp.select();}
  };
  window.rcTmCancelRename = function(i) { const w = _el('rc-tm-edit-' + i); if(w) w.classList.remove('open'); };
  window.rcTmConfirmRename = function(oldTag, i) {
    const inp = _el('rc-tm-input-' + i); if(!inp) return;
    const newTag = normalizeTag(inp.value);
    if (!newTag) { rcToast('Invalid tag name', 'error'); return; }
    if (newTag === oldTag) { rcTmCancelRename(i); return; }
    allCards().filter(c => !c._deleted && (c.tags||[]).includes(oldTag)).forEach(c => {
      c.tags = Array.from(new Set(c.tags.map(t => t === oldTag ? newTag : t)));
      c.updatedAt = nowMs();
    });
    if (_state.customDeck && _state.customDeck.selectedTags) {
      _state.customDeck.selectedTags = _state.customDeck.selectedTags.map(t => t === oldTag ? newTag : t);
    }
    _scheduleAutoSave(); rcToast('Renamed "' + oldTag + '" → "' + newTag + '"', 'info');
    _refreshAllTagUI(); rcRenderLibrary(); _renderTagManagerList();
  };
  window.rcTmDelete = async function(tag) {
    const n = (allTagsWithCounts()[tag] || 0);
    const ok = await rcConfirm('Delete tag "' + tag + '"?', 'Removes the tag from ' + n + ' card(s). Cards are not deleted.', 'Delete Tag');
    if (!ok) return;
    allCards().filter(c => !c._deleted && (c.tags||[]).includes(tag)).forEach(c => { c.tags=c.tags.filter(t=>t!==tag); c.updatedAt=nowMs(); });
    _scheduleAutoSave(); rcToast('Tag deleted from ' + n + ' card(s)', 'info');
    _refreshAllTagUI(); rcRenderLibrary(); _renderTagManagerList();
  };

  // ── EDIT MODAL ────────────────────────────────────────────────
  window.rcOpenEditModal = function(id) {
    const c = _state.cards[id]; if (!c) return;
    _editCardId         = id;
    _editTags           = [...(c.tags || [])];
    _editExistingImages = [...(c.images || [])];
    _editNewImages      = [];
    const qEl = _el('rc-edit-question'), aEl = _el('rc-edit-answer');
    if (qEl) { qEl.value = c.question || ''; rcUpdateCharCount('rc-edit-question','rc-edit-q-count',500); }
    if (aEl) { aEl.value = c.answer   || ''; rcUpdateCharCount('rc-edit-answer','rc-edit-a-count',2000); }
    _renderEditTags();
    _renderEditExistingImages();
    if (_el('rc-edit-new-imgs')) _el('rc-edit-new-imgs').innerHTML = '';

    const sc = _el('rc-edit-starred'),   sp = _el('rc-edit-suspended');
    if (sc) sc.checked = !!c.starred;
    if (sp) sp.checked = !!c.suspended;

    const advFields = ['hint','mnemonic','pearl','source','chapter'];
    advFields.forEach(f => { const el = _el('rc-edit-' + f); if(el) el.value = c[f] || ''; });

    const hasAdv = advFields.some(f => c[f]);
    if (hasAdv) {
      const af = _el('rc-edit-adv-fields'), at = _el('rc-edit-adv-toggle');
      if(af) af.classList.add('open');
      if(at) { at.classList.add('open'); at.textContent = '↑ Advanced fields — hint, mnemonic, clinical pearl, source, chapter'; }
    }
    _el('rc-edit-modal').classList.add('open');
  };

  window.rcCloseEditModal = function() {
    _el('rc-edit-modal').classList.remove('open');
    _editNewImages.forEach(img => { if(img.dataUrl && img.dataUrl.startsWith('blob:')) URL.revokeObjectURL(img.dataUrl); });
    _editCardId = null; _editTags = []; _editExistingImages = []; _editNewImages = [];
    const af = _el('rc-edit-adv-fields'), at = _el('rc-edit-adv-toggle');
    if(af) af.classList.remove('open');
    if(at) { at.classList.remove('open'); at.textContent = '↓ Advanced fields — hint, mnemonic, clinical pearl, source, chapter'; }
  };

  function _renderEditTags() {
    const wrap = _el('rc-edit-tag-wrap'), input = _el('rc-edit-tag-input');
    if (!wrap || !input) return;
    wrap.querySelectorAll('.rc-tag-chip').forEach(c => c.remove());
    _editTags.forEach(tag => {
      const chip = document.createElement('span');
      chip.className = 'rc-tag-chip';
      chip.innerHTML = sanitize(tag) + '<button onclick="rcRemoveEditTag(\'' + sanitize(tag) + '\')">×</button>';
      wrap.insertBefore(chip, input);
    });
  }
  window.rcRemoveEditTag = function(tag) { _editTags = _editTags.filter(t => t !== tag); _renderEditTags(); };

  window.rcEditTagKeydown = function(e) {
    const input = _el('rc-edit-tag-input');
    if ((e.key === 'Enter' || e.key === ',') && input.value.trim()) {
      e.preventDefault();
      const tag = normalizeTag(input.value);
      if (tag && !_editTags.includes(tag) && _editTags.length < 10) _editTags.push(tag);
      input.value = ''; _renderEditTags();
    } else if (e.key === 'Backspace' && !input.value && _editTags.length) {
      _editTags.pop(); _renderEditTags();
    }
  };
  window.rcEditTagInput = function(e) {
    const input = _el('rc-edit-tag-input');
    if (input.value.endsWith(',')) { const tag=normalizeTag(input.value.slice(0,-1)); if(tag&&!_editTags.includes(tag)&&_editTags.length<10)_editTags.push(tag); input.value=''; _renderEditTags(); }
  };

  window.rcSaveEditCard = async function() {
    if (!_editCardId) return;
    const c = _state.cards[_editCardId]; if (!c) return;
    const qEl = _el('rc-edit-question'), aEl = _el('rc-edit-answer');
    const q = qEl ? qEl.value.trim() : '', a = aEl ? aEl.value.trim() : '';
    if (!q) { rcToast('Question required', 'error'); return; }
    if (!a) { rcToast('Answer required',   'error'); return; }
    if (q.length > 500)  { rcToast('Question too long', 'error'); return; }
    if (a.length > 2000) { rcToast('Answer too long',   'error'); return; }

    const saveBtn = _el('rc-edit-save-btn');
    if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = _editNewImages.length ? 'Uploading…' : 'Saving…'; }

    let newUrls = [];
    if (_editNewImages.length > 0) {
      try {
        newUrls = await _uploadFiles(_editNewImages);
      } catch(err) {
        rcToast('Image upload failed. ' + err.message, 'error');
        if(saveBtn){saveBtn.disabled=false;saveBtn.textContent='Save Changes';} return;
      }
    }

    // Atomic update — reviewData is NOT touched
    c.question = q; c.answer = a;
    c.tags      = normalizeTags(_editTags);
    c.images    = _editExistingImages.concat(newUrls);
    c.starred   = !!(_el('rc-edit-starred')   ? _el('rc-edit-starred').checked   : false);
    c.suspended = !!(_el('rc-edit-suspended') ? _el('rc-edit-suspended').checked : false);
    ['hint','mnemonic','pearl','source','chapter'].forEach(f => { const el = _el('rc-edit-' + f); c[f] = el ? el.value.trim() : ''; });
    c.updatedAt    = nowMs();
    c.lastEditedAt = nowMs();

    _scheduleAutoSave(); rcToast('Card updated');
    rcCloseEditModal(); _refreshAllTagUI(); rcRenderLibrary(); rcInitReviewSession();
    if(saveBtn){saveBtn.disabled=false;saveBtn.textContent='Save Changes';}
  };

  // ── STATS UI ──────────────────────────────────────────────────
  function _updateStatsUI() {
    const active  = allCards().filter(c => !c._deleted && !c.suspended && !isBuried(c));
    const due     = active.filter(c => isDue(c) && c.reviewData && (c.reviewData.status==='review'||c.reviewData.status==='relearning')).length;
    const newCards= active.filter(c => c.reviewData && c.reviewData.status==='new').length;
    const learning= active.filter(c => c.reviewData && c.reviewData.status==='learning').length;
    const setTxt  = (id, val) => { const el=_el(id); if(el) el.textContent=val; };
    setTxt('rc-stat-due',      due);
    setTxt('rc-stat-new',      newCards);
    setTxt('rc-stat-learning', learning);
    setTxt('rc-stat-reviewed', _state.stats.reviewedTodayCount || 0);
    setTxt('rc-stat-streak',   (_state.stats.streakDays||0) + '🔥');
  }

  // ── SPACED REPETITION ENGINE ──────────────────────────────────
  function _computeNextDue(rd, rating) {
    const now = nowMs();
    const next = Object.assign({}, rd);
    next.lastReviewedAt = now;
    next.lastRating = rating;
    next.reviewCount = (rd.reviewCount || 0) + 1;

    if (rd.status === 'new' || rd.status === 'learning') {
      if (rating === 'again') {
        next.stepIndex = 0;
        next.status = 'learning';
        next.dueDate = minsFromNow(LEARNING_STEPS_MIN[0]);
      } else if (rating === 'hard') {
        next.stepIndex = Math.max(0, (rd.stepIndex || 0));
        next.status = 'learning';
        next.dueDate = minsFromNow(5);
      } else if (rating === 'good') {
        const nextStep = (rd.stepIndex || 0) + 1;
        if (nextStep >= LEARNING_STEPS_MIN.length) {
          // Graduate
          next.status = 'review';
          next.graduated = true;
          next.intervalDays = GRADUATING_INTERVAL;
          next.dueDate = daysFromNow(GRADUATING_INTERVAL);
        } else {
          next.stepIndex = nextStep;
          next.status = 'learning';
          next.dueDate = minsFromNow(LEARNING_STEPS_MIN[nextStep]);
        }
      } else if (rating === 'easy') {
        // Graduate immediately
        next.status = 'review';
        next.graduated = true;
        next.intervalDays = EASY_INTERVAL;
        next.dueDate = daysFromNow(EASY_INTERVAL);
        next.easeFactor = Math.min(next.easeFactor + 0.15, 4.0);
      }
    } else if (rd.status === 'review') {
      if (rating === 'again') {
        next.status = 'relearning';
        next.lapses = (rd.lapses || 0) + 1;
        next.intervalDays = 1;
        next.dueDate = daysFromNow(1);
        next.easeFactor = Math.max(MIN_EASE, (rd.easeFactor || STARTING_EASE) - 0.2);
        next.stepIndex = 0;
      } else if (rating === 'hard') {
        next.intervalDays = roundDays((rd.intervalDays || 1) * 1.2);
        next.dueDate = daysFromNow(next.intervalDays);
        next.easeFactor = Math.max(MIN_EASE, (rd.easeFactor || STARTING_EASE) - 0.15);
      } else if (rating === 'good') {
        next.intervalDays = roundDays((rd.intervalDays || 1) * (rd.easeFactor || STARTING_EASE));
        next.dueDate = daysFromNow(next.intervalDays);
      } else if (rating === 'easy') {
        next.intervalDays = roundDays((rd.intervalDays || 1) * (rd.easeFactor || STARTING_EASE) * 1.3);
        next.dueDate = daysFromNow(next.intervalDays);
        next.easeFactor = Math.min(4.0, (rd.easeFactor || STARTING_EASE) + 0.15);
      }
    } else if (rd.status === 'relearning') {
      if (rating === 'again') {
        next.dueDate = minsFromNow(LEARNING_STEPS_MIN[0]);
      } else if (rating === 'hard') {
        next.dueDate = minsFromNow(5);
      } else if (rating === 'good') {
        next.status = 'review';
        next.intervalDays = 1;
        next.dueDate = daysFromNow(1);
      } else if (rating === 'easy') {
        next.status = 'review';
        next.intervalDays = EASY_INTERVAL;
        next.dueDate = daysFromNow(EASY_INTERVAL);
        next.easeFactor = Math.min(4.0, (rd.easeFactor || STARTING_EASE) + 0.15);
      }
    }
    return next;
  }

  // ── TIME CONSTANTS ────────────────────────────────────────────
  const MINUTE_MS    = 60 * 1000;
  const HOUR_MS      = 60 * MINUTE_MS;
  const SIX_HOURS_MS = 6 * HOUR_MS;

  // Shared bucketed interval label — durations ≤ 6 hr use threshold buckets
  function formatIntervalLabel(ms) {
    if (ms <= 1  * MINUTE_MS) return '< 1 min';
    if (ms <= 5  * MINUTE_MS) return '< 5 min';
    if (ms <= 10 * MINUTE_MS) return '< 10 min';
    if (ms <= 30 * MINUTE_MS) return '< 30 min';
    if (ms <= 1  * HOUR_MS)   return '< 1 hr';
    if (ms <= 3  * HOUR_MS)   return '< 3 hr';
    if (ms <= SIX_HOURS_MS)   return '< 6 hr';
    const days = ms / 86400000;
    if (days < 1) return Math.round(ms / HOUR_MS) + ' hr';
    return Math.round(days) + 'd';
  }

  function _ratingLabel(rd, rating) {
    if (!rd) return '';
    const status = rd.status || 'new';
    let ms = 0;
    if (status === 'new' || status === 'learning') {
      if (rating === 'again') ms = LEARNING_STEPS_MIN[0] * MINUTE_MS;
      else if (rating === 'hard') ms = 5 * MINUTE_MS;
      else if (rating === 'good') {
        const ns = (rd.stepIndex || 0) + 1;
        ms = ns >= LEARNING_STEPS_MIN.length ? GRADUATING_INTERVAL * 86400000 : LEARNING_STEPS_MIN[ns] * MINUTE_MS;
      }
      else if (rating === 'easy') ms = EASY_INTERVAL * 86400000;
    } else if (status === 'review') {
      if (rating === 'again') ms = 86400000;
      else if (rating === 'hard') ms = roundDays((rd.intervalDays || 1) * 1.2) * 86400000;
      else if (rating === 'good') ms = roundDays((rd.intervalDays || 1) * (rd.easeFactor || STARTING_EASE)) * 86400000;
      else if (rating === 'easy') ms = roundDays((rd.intervalDays || 1) * (rd.easeFactor || STARTING_EASE) * 1.3) * 86400000;
    } else if (status === 'relearning') {
      if (rating === 'again') ms = LEARNING_STEPS_MIN[0] * MINUTE_MS;
      else if (rating === 'hard') ms = 5 * MINUTE_MS;
      else if (rating === 'good') ms = 86400000;
      else if (rating === 'easy') ms = EASY_INTERVAL * 86400000;
    }
    return ms > 0 ? formatIntervalLabel(ms) : '';
  }

  // ── SHARED QUEUE BUILDER ──────────────────────────────────────
  let _reviewQueueMode = 'empty';

  function _buildReviewQueue(scopedCards) {
    const now    = nowMs();
    const newCap = _state.settings.dailyNewCardLimit || DAILY_NEW_CAP;
    const todayNewCount = allCards().filter(c =>
      !c._deleted && !c.suspended && c.reviewData &&
      c.reviewData.status !== 'new' && c.reviewData.lastReviewedAt &&
      c.reviewData.lastReviewedAt > (now - 86400000) && c.reviewData.reviewCount === 1
    ).length;

    const eligible = scopedCards.filter(c => !c._deleted && !c.suspended && !isBuried(c) && c.reviewData);

    const overdueReview = eligible.filter(c => (c.reviewData.status === 'review' || c.reviewData.status === 'relearning') && c.reviewData.dueDate < now - 86400000).sort((a,b) => a.reviewData.dueDate - b.reviewData.dueDate);
    const dueToday      = eligible.filter(c => (c.reviewData.status === 'review' || c.reviewData.status === 'relearning') && c.reviewData.dueDate >= now - 86400000 && c.reviewData.dueDate <= now).sort((a,b) => a.reviewData.dueDate - b.reviewData.dueDate);
    const learning      = eligible.filter(c => c.reviewData.status === 'learning' && c.reviewData.dueDate <= now).sort((a,b) => a.reviewData.dueDate - b.reviewData.dueDate);
    const newC          = eligible.filter(c => c.reviewData.status === 'new').slice(0, Math.max(0, newCap - todayNewCount));

    const dueNow = [...overdueReview, ...dueToday, ...learning, ...newC];
    if (dueNow.length) return { mode: 'due', items: dueNow };

    // Fallback: cards returning within 6 hours (not new cards)
    const upcoming = eligible
      .filter(c => c.reviewData.status !== 'new' && c.reviewData.dueDate > now && c.reviewData.dueDate <= now + SIX_HOURS_MS)
      .sort((a,b) => a.reviewData.dueDate - b.reviewData.dueDate || (a.createdAt||0) - (b.createdAt||0));
    if (upcoming.length) return { mode: 'upcoming_short', items: upcoming };

    return { mode: 'empty', items: [] };
  }

  // ── REVIEW SESSION ─────────────────────────────────────────────
  window.rcInitReviewSession = function() {
    _reviewFlipped = false;
    _sessionStats  = { reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };
    _undoSnapshot  = null;
    _hideUndo();

    const result     = _buildReviewQueue(allCards());
    _reviewQueueMode = result.mode;
    _reviewQueue     = result.items;
    _reviewIndex     = 0;

    _updateStatsUI();
    _showReviewUI(_reviewQueue.length > 0, _reviewQueueMode);
    if (_reviewQueue.length > 0) _renderCurrentCard();
  };

  function _showReviewUI(hasCards, mode) {
    const area         = _el('rc-review-area');
    const emptyNoCards = _el('rc-rev-empty-no-cards');
    const emptyDone    = _el('rc-rev-empty-done');
    const summary      = _el('rc-session-summary');
    const banner       = _el('rc-upcoming-banner');
    if (!area) return;
    const totalCards = allCards().filter(c => !c._deleted).length;
    if (summary) summary.style.display = 'none';
    if (hasCards) {
      area.style.display = '';
      if (emptyNoCards) emptyNoCards.style.display = 'none';
      if (emptyDone)    emptyDone.style.display    = 'none';
      if (banner) banner.style.display = (mode === 'upcoming_short') ? '' : 'none';
    } else if (!totalCards) {
      area.style.display = 'none';
      if (emptyNoCards) emptyNoCards.style.display = '';
      if (emptyDone)    emptyDone.style.display    = 'none';
      if (banner) banner.style.display = 'none';
    } else {
      area.style.display = 'none';
      if (emptyNoCards) emptyNoCards.style.display = 'none';
      if (emptyDone)    emptyDone.style.display    = '';
      if (banner) banner.style.display = 'none';
    }
  }

  function _renderCurrentCard() {
    const card = _reviewQueue[_reviewIndex];
    if (!card) return;
    _reviewFlipped = false;
    const inner = _el('rc-card-inner');
    if (inner) inner.classList.remove('flipped');

    // Front
    const qEl = _el('rc-card-question');
    if (qEl) qEl.textContent = card.question || '';
    // Hint
    const hintRow = _el('rc-card-hint-row'), hintText = _el('rc-card-hint-text');
    if (hintRow && hintText) { if(card.hint){hintRow.style.display='';hintText.textContent=card.hint;}else hintRow.style.display='none'; }

    // Back
    const aEl = _el('rc-card-answer'), imgEl = _el('rc-card-images'), tagsEl = _el('rc-card-tags');
    if (aEl)    aEl.textContent = card.answer || '';
    if (imgEl)  imgEl.innerHTML = (card.images||[]).map(src => '<img src="'+sanitize(src)+'" alt="card image" onclick="rcOpenLightbox(\''+src.replace(/'/g,"\\'")+'\')">').join('');
    if (tagsEl) tagsEl.innerHTML = (card.tags||[]).map(t => '<span class="rc-card-tag-pill">'+sanitize(t)+'</span>').join('');

    // Mnemonic
    const mnRow = _el('rc-card-mnemonic-row'), mnTxt = _el('rc-card-mnemonic-text');
    if (mnRow && mnTxt) { if(card.mnemonic){mnRow.style.display='';mnTxt.textContent=card.mnemonic;}else mnRow.style.display='none'; }
    // Pearl
    const prRow = _el('rc-card-pearl-row'), prTxt = _el('rc-card-pearl-text');
    if (prRow && prTxt) { if(card.pearl){prRow.style.display='';prTxt.textContent=card.pearl;}else prRow.style.display='none'; }
    // Source / chapter
    const srcRow = _el('rc-card-source-row'), srcTxt = _el('rc-card-source-text');
    if (srcRow && srcTxt) { const s=[card.chapter,card.source].filter(Boolean).join(' · '); if(s){srcRow.style.display='';srcTxt.textContent=s;}else srcRow.style.display='none'; }

    // Rating labels
    const rd = card.reviewData || {};
    ['again','hard','good','easy'].forEach(r => { const lbl = _el('rc-lbl-'+r); if(lbl) lbl.textContent=_ratingLabel(rd,r); });

    // Progress
    const pct = _reviewQueue.length ? (_reviewIndex/_reviewQueue.length*100) : 0;
    const pf = _el('rc-rev-prog-fill'), pl = _el('rc-rev-prog-label');
    if (pf) pf.style.width = pct + '%';
    if (pl) pl.textContent = _reviewIndex + ' / ' + _reviewQueue.length;

    // Button state
    const showBtn = _el('rc-show-answer-btn'), rateRow = _el('rc-rating-row'), actRow = _el('rc-review-card-actions');
    if (showBtn) showBtn.style.display = '';
    if (rateRow) rateRow.classList.remove('visible');
    if (actRow)  actRow.classList.remove('visible');

    // Suspend button label
    const suspBtn = _el('rc-rev-suspend-btn');
    if (suspBtn) suspBtn.textContent = card.suspended ? '▶ Unsuspend' : '⏸ Suspend';

    _reviewMode = 'general';
    _syncReviewCardSceneHeight('rc-card-scene', 'rc-card-front', 'rc-card-back', false);
  }

  window.rcFlipCard = function() {
    if (_reviewFlipped) return;
    _reviewFlipped = true;
    const inner = _el('rc-card-inner'), showBtn = _el('rc-show-answer-btn'),
          rateRow = _el('rc-rating-row'), actRow = _el('rc-review-card-actions');
    if (inner)   inner.classList.add('flipped');
    if (showBtn) showBtn.style.display = 'none';
    if (rateRow) rateRow.classList.add('visible');
    if (actRow)  actRow.classList.add('visible');
    _syncReviewCardSceneHeight('rc-card-scene', 'rc-card-front', 'rc-card-back', true);
  };

  window.rcRate = function(rating) {
    if (!_reviewFlipped) return;
    const card = _reviewQueue[_reviewIndex];
    if (!card) return;

    _undoSnapshot = { cardId: card.id, prevReviewData: Object.assign({}, card.reviewData) };
    _showUndoBar();

    const newRD = _computeNextDue(card.reviewData, rating);
    _state.cards[card.id].reviewData = newRD;
    _state.cards[card.id].updatedAt  = nowMs();

    _sessionStats.reviewed++;
    if (rating === 'again') _sessionStats.again++;
    else if (rating === 'hard') _sessionStats.hard++;
    else if (rating === 'good') _sessionStats.good++;
    else if (rating === 'easy') _sessionStats.easy++;

    _state.stats.totalReviews       = (_state.stats.totalReviews       || 0) + 1;
    _state.stats.reviewedTodayCount = (_state.stats.reviewedTodayCount || 0) + 1;
    _updateStreak();
    _scheduleAutoSave();
    _updateStatsUI();

    // Rebuild queue so mode auto-shifts due->upcoming_short->empty
    const refreshed  = _buildReviewQueue(allCards());
    _reviewQueueMode = refreshed.mode;

    _reviewIndex++;
    if (_reviewIndex >= _reviewQueue.length) {
      // If 'Again' put card back in due range, seamlessly continue
      if (refreshed.mode === 'due' && refreshed.items.length > 0) {
        _reviewQueue = refreshed.items; _reviewIndex = 0; _renderCurrentCard();
      } else { _showSessionSummary(); }
    } else { _renderCurrentCard(); }
  };

  // ── QUICK ACTIONS FROM REVIEW ─────────────────────────────────
  window.rcBuryFromReview = function() {
    const card = _reviewQueue[_reviewIndex]; if (!card) return;
    _state.cards[card.id].buriedUntil = tomorrowMs(); _state.cards[card.id].updatedAt = nowMs();
    _scheduleAutoSave(); rcToast('Buried until tomorrow', 'info');
    _reviewIndex++;
    if (_reviewIndex >= _reviewQueue.length) _showSessionSummary(); else _renderCurrentCard();
  };

  window.rcSuspendFromReview = function() {
    const card = _reviewQueue[_reviewIndex]; if (!card) return;
    const c = _state.cards[card.id]; if (!c) return;
    c.suspended = !c.suspended; c.updatedAt = nowMs();
    _scheduleAutoSave(); rcToast(c.suspended ? 'Card suspended' : 'Card unsuspended', 'info');
    const btn = _el('rc-rev-suspend-btn'); if (btn) btn.textContent = c.suspended ? '▶ Unsuspend' : '⏸ Suspend';
    if (c.suspended) { _reviewIndex++; if (_reviewIndex >= _reviewQueue.length) _showSessionSummary(); else _renderCurrentCard(); }
  };

  window.rcResetFromReview = async function() {
    const card = _reviewQueue[_reviewIndex]; if (!card) return;
    const ok = await rcConfirm('Reset card?', 'Reset this card to New status?', 'Reset');
    if (!ok) return;
    _state.cards[card.id].reviewData = defaultReviewData(); _state.cards[card.id].updatedAt = nowMs();
    _scheduleAutoSave(); rcToast('Progress reset', 'info');
    _reviewIndex++; if (_reviewIndex >= _reviewQueue.length) _showSessionSummary(); else _renderCurrentCard();
  };

  // ── SEARCH HINT ───────────────────────────────────────────────
  window.rcShowSearchHint = function(show) { const h=_el('rc-search-hint'); if(h) h.classList.toggle('open',!!show); };
  window.rcHideSearchHintDelayed = function() { setTimeout(() => rcShowSearchHint(false), 200); };

  // ── ADVANCED FIELDS TOGGLES ───────────────────────────────────
  window.rcToggleCreateAdvanced = function() {
    const btn=_el('rc-create-adv-toggle'), fields=_el('rc-create-adv-fields'); if(!btn||!fields) return;
    const open = fields.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.textContent = (open ? '↑' : '↓') + ' Advanced — hint, mnemonic, clinical pearl, source, chapter';
  };
  window.rcToggleEditAdvanced = function() {
    const btn=_el('rc-edit-adv-toggle'), fields=_el('rc-edit-adv-fields'); if(!btn||!fields) return;
    const open = fields.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.textContent = (open ? '↑' : '↓') + ' Advanced fields — hint, mnemonic, clinical pearl, source, chapter';
  };

  // ── FLAG SETTERS ──────────────────────────────────────────────

  // ── PRESET TAGS ───────────────────────────────────────────────
  window.rcAddPresetTag = function(raw) {
    const tag = normalizeTag(raw);
    if (!tag) return;
    if (_pendingTags.includes(tag) || _pendingTags.length >= 10) { rcToast('Tag already added or limit reached', 'info'); return; }
    _pendingTags.push(tag); _renderPendingTags();
  };

  // ── DUP WARNING ───────────────────────────────────────────────
  window.rcCheckDupWarning = function() {
    const q = (_el('rc-question') ? _el('rc-question').value : '').trim().toLowerCase();
    if (!q) { _el('rc-dup-warning').style.display = 'none'; return; }
    const dup = allCards().find(c => !c._deleted && c.question && c.question.trim().toLowerCase() === q);
    _el('rc-dup-warning').style.display = dup ? '' : 'none';
  };

  // ── UNDO ──────────────────────────────────────────────────────
  function _showUndoBar() {
    const bar = _el('rc-undo-bar');
    if (!bar) return;
    bar.classList.add('visible');
    if (_undoTimer) clearTimeout(_undoTimer);
    _undoTimer = setTimeout(_hideUndo, 8000);
  }

  function _hideUndo() {
    const bar = _el('rc-undo-bar');
    if (bar) bar.classList.remove('visible');
  }

  window.rcUndoRating = function() {
    if (!_undoSnapshot) return;
    const { cardId, prevReviewData } = _undoSnapshot;
    if (_state.cards[cardId]) {
      _state.cards[cardId].reviewData = prevReviewData;
      _state.cards[cardId].updatedAt = nowMs();
    }
    _undoSnapshot = null;
    _hideUndo();

    // Revert session stats
    _sessionStats.reviewed = Math.max(0, _sessionStats.reviewed - 1);
    _state.stats.totalReviews = Math.max(0, (_state.stats.totalReviews || 0) - 1);
    _state.stats.reviewedTodayCount = Math.max(0, (_state.stats.reviewedTodayCount || 0) - 1);

    _reviewIndex = Math.max(0, _reviewIndex - 1);
    _reviewFlipped = false;
    const inner = _el('rc-card-inner');
    if (inner) inner.classList.remove('flipped');

    // Reshow session area
    _el('rc-session-summary') && (_el('rc-session-summary').style.display = 'none');
    _el('rc-review-area') && (_el('rc-review-area').style.display = '');

    _scheduleAutoSave();
    _updateStatsUI();
    _renderCurrentCard();
    rcToast('Rating undone', 'info');
  };

  // ── STREAK ────────────────────────────────────────────────────
  function _updateStreak() {
    const today = todayStr();
    const last = _state.stats.lastStudyDate;
    if (last === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (last === yesterday) {
      _state.stats.streakDays = (_state.stats.streakDays || 0) + 1;
    } else if (last !== today) {
      _state.stats.streakDays = 1;
    }
    _state.stats.lastStudyDate = today;
  }

  // ── SESSION SUMMARY ───────────────────────────────────────────
  function _showSessionSummary() {
    const area = _el('rc-review-area');
    const summary = _el('rc-session-summary');
    if (area) area.style.display = 'none';
    if (!summary) return;
    summary.style.display = '';

    const setTxt = (id, val) => { const el = _el(id); if (el) el.textContent = val; };
    setTxt('rc-sum-reviewed', _sessionStats.reviewed);
    setTxt('rc-sum-again', _sessionStats.again);
    setTxt('rc-sum-hard', _sessionStats.hard);

    // Next due
    const upcoming = allCards()
      .filter(c => !c._deleted && !c.suspended && c.reviewData && c.reviewData.dueDate > nowMs())
      .sort((a, b) => a.reviewData.dueDate - b.reviewData.dueDate);
    if (upcoming.length) {
      const ms = upcoming[0].reviewData.dueDate - nowMs();
      const mins = Math.round(ms / 60000);
      setTxt('rc-sum-next', mins < 60 ? mins + ' min' : Math.round(mins / 60) + 'h');
    } else {
      setTxt('rc-sum-next', '—');
    }

    const subEl = _el('rc-summary-sub');
    if (subEl) {
      subEl.textContent = _sessionStats.again === 0
        ? 'Perfect session! No cards needed repeating.'
        : _sessionStats.again + ' card' + (_sessionStats.again > 1 ? 's' : '') + ' will come back for review.';
    }
  }

  // ── CUSTOM DECK ───────────────────────────────────────────────
  function _updateDeckUI() {
    _renderDeckTagSelector();
    _updateDeckPreview();
    _renderSavedDeck();
  }

  function _renderDeckTagSelector() {
    const sel = _el('rc-deck-tag-selector');
    if (!sel) return;
    const tags = allTags();
    if (!tags.length) { sel.innerHTML = '<span style="font-size:0.82rem;color:var(--ink-3);">No tags yet. Create cards with tags first.</span>'; return; }
    sel.innerHTML = tags.map(t =>
      '<button class="rc-tag-select-pill ' + (_deckSelectedTags.includes(t) ? 'selected' : '') + '" onclick="rcToggleDeckTag(\'' + sanitize(t) + '\')">' + sanitize(t) + '</button>'
    ).join('');
  }

  window.rcToggleDeckTag = function(tag) {
    const idx = _deckSelectedTags.indexOf(tag);
    if (idx >= 0) _deckSelectedTags.splice(idx, 1);
    else _deckSelectedTags.push(tag);
    _renderDeckTagSelector();
    _updateDeckPreview();
  };

  window.rcSetMatchMode = function(mode) {
    _deckMatchMode = mode;
    _el('rc-match-any') && _el('rc-match-any').classList.toggle('active', mode === 'any');
    _el('rc-match-all') && _el('rc-match-all').classList.toggle('active', mode === 'all');
    _updateDeckPreview();
  };

  function _getDeckMatchingCards() {
    if (!_deckSelectedTags.length) return [];
    return allCards().filter(c => {
      if (c._deleted || c.suspended) return false;
      const cardTags = c.tags || [];
      if (_deckMatchMode === 'any') return _deckSelectedTags.some(t => cardTags.includes(t));
      return _deckSelectedTags.every(t => cardTags.includes(t));
    });
  }

  function _updateDeckPreview() {
    const preview = _el('rc-deck-preview');
    if (!preview) return;
    if (!_deckSelectedTags.length) { preview.textContent = 'Select tags to preview matching cards.'; return; }
    const count = _getDeckMatchingCards().length;
    preview.textContent = count + ' card' + (count !== 1 ? 's' : '') + ' match' + (count === 1 ? 'es' : '') + ' your selection.';
  }

  function _renderSavedDeck() {
    const noSaved = _el('rc-no-saved-deck');
    const savedDisplay = _el('rc-saved-deck-display');
    if (!noSaved || !savedDisplay) return;
    if (!_state.customDeck) {
      noSaved.style.display = '';
      savedDisplay.style.display = 'none';
    } else {
      noSaved.style.display = 'none';
      savedDisplay.style.display = '';
      const nameEl = _el('rc-saved-deck-name');
      const metaEl = _el('rc-saved-deck-meta');
      if (nameEl) nameEl.textContent = _state.customDeck.name || 'Custom Deck';
      if (metaEl) {
        const cnt = (_state.customDeck.cardIds || []).length;
        const tags = (_state.customDeck.selectedTags || []).join(', ');
        metaEl.textContent = cnt + ' cards · Tags: ' + (tags || '—') + ' · Match: ' + (_state.customDeck.matchMode || 'any');
      }
    }
  }

  window.rcSaveCustomDeck = async function() {
    if (!_deckSelectedTags.length) { rcToast('Select at least one tag', 'error'); return; }
    const matchingCards = _getDeckMatchingCards();
    if (!matchingCards.length) { rcToast('No cards match selected tags', 'error'); return; }

    if (_state.customDeck) {
      const ok = await rcConfirm('Replace custom deck?', 'This will erase your current saved custom deck and replace it with a new one.', 'Replace Deck');
      if (!ok) return;
    }

    const nameEl = _el('rc-deck-name');
    const name = (nameEl ? nameEl.value.trim() : '') || 'Custom Deck';

    _state.customDeck = {
      id: uid(),
      name,
      selectedTags: [..._deckSelectedTags],
      matchMode: _deckMatchMode,
      cardIds: matchingCards.map(c => c.id),
      createdAt: nowMs(),
      updatedAt: nowMs(),
    };

    _scheduleAutoSave();
    rcToast('Custom deck saved: ' + name);
    _renderSavedDeck();
  };

  window.rcRegenDeck = function() {
    if (!_state.customDeck) return;
    const matching = allCards().filter(c => {
      if (c._deleted || c.suspended) return false;
      const cardTags = c.tags || [];
      const sel = _state.customDeck.selectedTags || [];
      if (_state.customDeck.matchMode === 'any') return sel.some(t => cardTags.includes(t));
      return sel.every(t => cardTags.includes(t));
    });
    _state.customDeck.cardIds = matching.map(c => c.id);
    _state.customDeck.updatedAt = nowMs();
    _scheduleAutoSave();
    rcToast('Deck regenerated: ' + matching.length + ' cards', 'info');
    _renderSavedDeck();
  };

  window.rcDeleteDeck = async function() {
    const ok = await rcConfirm('Delete custom deck?', 'This will delete your saved custom deck. Cards will not be affected.', 'Delete');
    if (!ok) return;
    _state.customDeck = null;
    _scheduleAutoSave();
    rcToast('Deck deleted');
    _renderSavedDeck();
  };

  // ── DECK REVIEW ───────────────────────────────────────────────
  window.rcStartDeckReview = function() {
    if (!_state.customDeck || !_state.customDeck.cardIds || !_state.customDeck.cardIds.length) {
      rcToast('Deck is empty', 'error'); return;
    }
    const scopedCards = _state.customDeck.cardIds
      .map(id => _state.cards[id])
      .filter(c => c && !c._deleted && !c.suspended && !isBuried(c));
    if (!scopedCards.length) { rcToast('No reviewable cards in deck', 'error'); return; }

    // Use shared queue builder scoped to deck cards
    const result = _buildReviewQueue(scopedCards);
    _deckQueue   = result.items.length ? result.items : scopedCards; // fallback: show all deck cards
    _deckIndex   = 0;
    _deckFlipped = false;

    const area = _el('rc-deck-review-area');
    if (area) area.style.display = '';
    const nameEl = _el('rc-deck-review-name');
    if (nameEl) nameEl.textContent = _state.customDeck.name || 'Custom Deck';

    _renderCurrentDeckCard();
  };

  window.rcEndDeckReview = function() {
    const area = _el('rc-deck-review-area');
    if (area) area.style.display = 'none';
  };

  function _renderCurrentDeckCard() {
    const card = _deckQueue[_deckIndex];
    if (!card) return;

    _deckFlipped = false;
    const inner = _el('rc-deck-card-inner');
    if (inner) inner.classList.remove('flipped');

    const qEl    = _el('rc-deck-card-question');
    const aEl    = _el('rc-deck-card-answer');
    const imgEl  = _el('rc-deck-card-images');
    const tagsEl = _el('rc-deck-card-tags');

    if (qEl)    qEl.textContent = card.question || '';
    if (aEl)    aEl.textContent = card.answer   || '';
    if (imgEl)  imgEl.innerHTML = (card.images || []).map(src => '<img src="' + sanitize(src) + '" alt="card image" onclick="rcOpenLightbox(\'' + src.replace(/'/g, "\\'") + '\')">').join('');
    if (tagsEl) tagsEl.innerHTML = (card.tags || []).map(t => '<span class="rc-card-tag-pill">' + sanitize(t) + '</span>').join('');

    // Pearl
    const prRow = _el('rc-deck-card-pearl-row'), prTxt = _el('rc-deck-card-pearl');
    if (prRow && prTxt) { if(card.pearl){prRow.style.display='';prTxt.textContent=card.pearl;}else prRow.style.display='none'; }

    // Bucketed rating labels
    const rd = card.reviewData || {};
    ['again','hard','good','easy'].forEach(r => {
      const btn = document.querySelector('#rc-deck-rating-row .rc-rate-' + r + ' .rc-rate-sub');
      if (btn) btn.textContent = _ratingLabel(rd, r);
    });

    // Progress
    const total = _deckQueue.length, done = _deckIndex;
    const pf = _el('rc-deck-prog-fill'), pl = _el('rc-deck-prog-label');
    if (pf) pf.style.width = (total ? (done / total * 100) : 0) + '%';
    if (pl) pl.textContent = done + ' / ' + total;

    const showBtn = _el('rc-deck-show-btn'), rateRow = _el('rc-deck-rating-row');
    if (showBtn) showBtn.style.display = '';
    if (rateRow) rateRow.classList.remove('visible');
    _syncReviewCardSceneHeight('rc-deck-card-scene', 'rc-deck-card-front', 'rc-deck-card-back', false);
  }

  window.rcDeckFlipCard = function() {
    if (_deckFlipped) return;
    _deckFlipped = true;
    const inner = _el('rc-deck-card-inner'), showBtn = _el('rc-deck-show-btn'), rateRow = _el('rc-deck-rating-row');
    if (inner)   inner.classList.add('flipped');
    if (showBtn) showBtn.style.display = 'none';
    if (rateRow) rateRow.classList.add('visible');
    _syncReviewCardSceneHeight('rc-deck-card-scene', 'rc-deck-card-front', 'rc-deck-card-back', true);
  };

  window.rcDeckRate = function(rating) {
    if (!_deckFlipped) return;
    const card = _deckQueue[_deckIndex];
    if (!card) return;

    const newRD = _computeNextDue(card.reviewData, rating);
    _state.cards[card.id].reviewData = newRD;
    _state.cards[card.id].updatedAt  = nowMs();
    _state.stats.totalReviews        = (_state.stats.totalReviews       || 0) + 1;
    _state.stats.reviewedTodayCount  = (_state.stats.reviewedTodayCount || 0) + 1;
    _updateStreak();
    _scheduleAutoSave();
    _updateStatsUI();

    _deckIndex++;
    if (_deckIndex >= _deckQueue.length) {
      rcToast('Deck review complete! 🎉');
      rcEndDeckReview();
    } else {
      _deckFlipped = false;
      _renderCurrentDeckCard();
    }
  };

  // ── KEYBOARD SHORTCUTS ────────────────────────────────────────
  document.addEventListener('keydown', function(e) {
    const page = document.getElementById('page-recall');
    if (!page || !page.classList.contains('active')) return;

    // Space = flip
    if (e.code === 'Space' && !e.target.matches('input,textarea,select,button')) {
      e.preventDefault();
      if (_reviewMode === 'general' && !_reviewFlipped) rcFlipCard();
      else if (_reviewMode === 'deck' && !_deckFlipped) rcDeckFlipCard();
    }
    // 1-4 = rate (after flip)
    if (_reviewFlipped && _reviewMode === 'general') {
      if (e.key === '1') rcRate('again');
      else if (e.key === '2') rcRate('hard');
      else if (e.key === '3') rcRate('good');
      else if (e.key === '4') rcRate('easy');
    }
  });

  // Also make card tappable
  document.addEventListener('click', function(e) {
    const scene = document.getElementById('rc-card-scene');
    if (scene && scene.contains(e.target)) { rcFlipCard(); }
  });

  // ── INIT HOOK ─────────────────────────────────────────────────
  // Called when user logs in/out
  // ── CARD SCENE CLICK-TO-REVEAL ────────────────────────────────
  window.addEventListener('resize', _syncAllReviewSceneHeights);

  // General review: click card face to flip (not buttons/links)
  document.addEventListener('click', function(e) {
    const scene = _el('rc-card-scene');
    if (!scene || !scene.contains(e.target)) return;
    if (e.target.matches('button,a,input,img')) return;
    if (!_reviewFlipped) rcFlipCard();
  });
  // Custom deck: click card face to flip
  document.addEventListener('click', function(e) {
    const scene = _el('rc-deck-card-scene');
    if (!scene || !scene.contains(e.target)) return;
    if (e.target.matches('button,a,input,img')) return;
    if (!_deckFlipped) rcDeckFlipCard();
  });

  window.addEventListener('ims-auth-change', async function() {
    _pageActive = false;
    _currentUser = null;
    const page = document.getElementById('page-recall');
    if (page && page.classList.contains('active')) {
      window.recallPageActivated();
    }
  });

})();

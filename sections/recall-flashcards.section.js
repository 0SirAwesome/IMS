document.write(`\n<!-- ════════════════════════ BRANCH: Recall Flashcards ════════════════════════ -->
<div class="page" id="page-recall">

<style>
/* ── RECALL FLASHCARDS PAGE STYLES ── */
#page-recall {
  --bg-main: #0A2A47;
  --bg-panel: #0F3558;
  --bg-panel-hover: #154167;
  --border-soft: rgba(255,255,255,0.16);
  --border-strong: rgba(255,255,255,0.28);

  --text-primary: #F4F8FC;
  --text-secondary: #B8C7D9;
  --text-muted: #88A0B8;

  --accent-blue: #6EA8FF;
  --accent-cyan: #7FD4FF;

  --success-bg: rgba(34, 197, 94, 0.18);
  --success-text: #4ADE80;

  --info-bg: rgba(59, 130, 246, 0.18);
  --info-text: #7CB7FF;

  --warning-bg: rgba(251, 146, 60, 0.18);
  --warning-text: #FDBA74;

  --danger-bg: rgba(239, 68, 68, 0.14);
  --danger-text: #FF6B6B;

  --input-bg: rgba(255,255,255,0.08);
  --input-text: #F4F8FC;
  --input-placeholder: #88A0B8;

  min-height: 100vh;
  background:
    radial-gradient(circle at 12% 18%, rgba(255, 212, 122, 0.22) 0%, rgba(255, 212, 122, 0) 34%),
    radial-gradient(circle at 86% 8%, rgba(98, 204, 255, 0.22) 0%, rgba(98, 204, 255, 0) 38%),
    linear-gradient(160deg, #081321 0%, #11263c 46%, #0f3857 100%);
  font-family: 'DM Sans', sans-serif;
  color: var(--ink);
}

/* Hero */
.rc-hero {
  background:
    radial-gradient(circle at 12% 18%, rgba(255, 221, 149, 0.28) 0%, rgba(255, 221, 149, 0) 42%),
    radial-gradient(circle at 86% 16%, rgba(124, 214, 255, 0.24) 0%, rgba(124, 214, 255, 0) 38%),
    linear-gradient(132deg, #12304a 0%, #1f4a6f 52%, #2f6b8d 100%);
  border-bottom: 1px solid rgba(135,195,255,0.24);
  padding: 3rem 2rem 2.5rem;
  text-align: center;
}
.rc-hero-eyebrow {
  font-size: 0.78rem; font-weight: 600; letter-spacing: 0.12em;
  color: rgba(229, 245, 255, 0.8); text-transform: uppercase; margin-bottom: 0.5rem;
}
.rc-hero-title {
  font-family: 'Lora', serif; font-size: 2rem; font-weight: 700;
  color: #f4fbff; margin-bottom: 0.4rem;
}
.rc-hero-sub { font-size: 0.9rem; color: rgba(230, 246, 255, 0.74); }

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
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(120, 190, 255, 0.16);
  border-radius: var(--radius); padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(8px);
}
.rc-form-title {
  font-family: 'Lora', serif; font-size: 1.1rem; font-weight: 700;
  color: #eaf4ff; margin-bottom: 1.25rem;
}
.rc-field { margin-bottom: 1.1rem; }
.rc-label {
  display: block; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.04em;
  color: rgba(210, 230, 255, 0.78); text-transform: uppercase; margin-bottom: 0.4rem;
}
.rc-label span { color: rgba(170, 195, 225, 0.62); font-weight: 400; text-transform: none; font-size: 0.76rem; }
.rc-textarea {
  width: 100%; padding: 0.7rem 0.9rem; border-radius: var(--radius-sm);
  border: 1px solid rgba(120, 190, 255, 0.18); background: rgba(11, 19, 32, 0.9);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: #eaf4ff;
  resize: vertical; transition: border-color 0.2s;
  min-height: 80px;
}
.rc-textarea:focus {
  outline: none;
  border-color: rgba(103, 208, 255, 0.55);
  box-shadow: 0 0 0 3px rgba(70, 170, 255, 0.14);
}
.rc-textarea::placeholder { color: rgba(170, 195, 225, 0.52); }
.rc-char-count { text-align: right; font-size: 0.72rem; color: rgba(170, 195, 225, 0.62); margin-top: 0.2rem; }
.rc-char-count.warn { color: var(--orange); }

/* Tag input */
.rc-tag-input-wrap {
  display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center;
  padding: 0.5rem 0.7rem; border-radius: var(--radius-sm);
  border: 1px solid rgba(120, 190, 255, 0.18); background: rgba(11, 19, 32, 0.9);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
  cursor: text; transition: border-color 0.2s; min-height: 42px;
}
.rc-tag-input-wrap:focus-within {
  border-color: rgba(103, 208, 255, 0.55);
  box-shadow: 0 0 0 3px rgba(70, 170, 255, 0.14);
}
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
  font-family: 'DM Sans', sans-serif; font-size: 0.88rem; color: #eaf4ff;
  min-width: 120px; flex: 1;
}
.rc-tag-input::placeholder { color: rgba(170, 195, 225, 0.52); }

/* Image upload */
.rc-img-upload-area {
  border: 1px dashed rgba(120, 190, 255, 0.28); border-radius: var(--radius-sm);
  padding: 1rem; text-align: center; cursor: pointer;
  transition: all 0.2s; color: rgba(210, 230, 255, 0.72); font-size: 0.84rem;
  background: rgba(10, 18, 30, 0.75);
}
.rc-img-upload-area:hover {
  border-color: rgba(120, 210, 255, 0.48);
  background: rgba(14, 24, 40, 0.9);
  color: rgba(210, 230, 255, 0.82);
}
.rc-img-upload-area.drag-over { border-color: rgba(120, 210, 255, 0.48); background: rgba(14, 24, 40, 0.9); }
.rc-img-previews {
  display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 0.75rem;
}
.rc-img-thumb {
  position: relative; width: 72px; height: 72px; border-radius: var(--radius-sm);
  overflow: hidden; border: 1px solid var(--border);
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
  background: linear-gradient(135deg, #4d7fe0 0%, #3d6fd1 100%);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 8px 22px rgba(61, 111, 209, 0.28);
}
.rc-btn-primary:hover {
  background: linear-gradient(135deg, #588bea 0%, #4778d9 100%);
  transform: translateY(-1px);
  box-shadow: 0 10px 26px rgba(61, 111, 209, 0.34);
}
.rc-btn-primary:disabled { background: var(--ink-3); cursor: not-allowed; transform: none; opacity: 0.6; }
.rc-btn-ghost {
  background: transparent; color: var(--ink-2);
  border: 1px solid var(--border);
}
.rc-btn-ghost:hover { background: var(--surface-2); }
.rc-btn-danger {
  background: transparent; color: #e53e3e;
  border: 1px solid rgba(229,62,62,0.3);
}
.rc-btn-danger:hover { background: rgba(229,62,62,0.08); }
.rc-btn-sm { padding: 0.35rem 0.9rem; font-size: 0.8rem; }

/* Sidebar */
.rc-sidebar { display: flex; flex-direction: column; gap: 1rem; }
.rc-sidebar-card {
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(120, 190, 255, 0.16);
  border-radius: var(--radius); padding: 1.25rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(8px);
}
.rc-sidebar-card h4 {
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.06em;
  color: #eaf4ff; text-transform: uppercase; margin-bottom: 0.75rem;
}
.rc-limit-bar-bg {
  height: 6px; background: var(--surface-2); border-radius: 99px; margin: 0.5rem 0;
}
.rc-limit-bar-fill {
  height: 100%; border-radius: 99px;
  background: linear-gradient(90deg, #4472c4, #5b9bd5);
  transition: width 0.4s ease;
}
.rc-limit-bar-fill.warn { background: linear-gradient(90deg, var(--orange), #ffc000); }
.rc-limit-bar-fill.full { background: linear-gradient(90deg, #e53e3e, #c53030); }
.rc-limit-text { font-size: 0.82rem; color: rgba(210, 230, 255, 0.78); }

/* Tips list */
.rc-tips { list-style: none; font-size: 0.82rem; color: rgba(210, 230, 255, 0.78); line-height: 1.8; }
.rc-tips li::before { content: "→ "; color: var(--accent-light); }

/* ── MY CARDS LIBRARY ── */
.rc-library-header {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;
}
.rc-library-title {
  font-family:'Lora',serif;
  font-size:1rem;
  font-weight:600;
  color:var(--text-primary);
}
.rc-library-controls {
  display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;
}
.rc-search {
  padding: 0.45rem 0.85rem; border-radius: 99px;
  border: 1px solid var(--border-soft); background: var(--input-bg);
  font-family: 'DM Sans', sans-serif; font-size: 0.84rem; color: var(--input-text);
  width: 200px; transition: border-color 0.2s, background 0.2s;
}
.rc-search:focus {
  outline: none;
  border-color: var(--accent-cyan);
  box-shadow: 0 0 0 3px rgba(127, 212, 255, 0.15);
}
.rc-search::placeholder { color: var(--input-placeholder); }
.rc-select {
  padding: 0.45rem 0.75rem; border-radius: 99px;
  border: 1px solid var(--border-soft); background: var(--input-bg);
  font-family: 'DM Sans', sans-serif; font-size: 0.82rem; color: var(--input-text);
  cursor: pointer;
}
.rc-select:focus {
  outline: none;
  border-color: var(--accent-cyan);
  box-shadow: 0 0 0 3px rgba(127, 212, 255, 0.15);
}

/* Card table */
.rc-card-table { width: 100%; border-collapse: collapse; margin-top: 0.5rem; }
.rc-card-table th {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
  color: var(--text-secondary); text-transform: uppercase; text-align: left;
  padding: 0.5rem 0.75rem; border-bottom: 1px solid var(--border-strong);
}
.rc-card-table td {
  padding: 0.65rem 0.75rem; border-bottom: 1px solid var(--border-soft);
  font-size: 0.85rem; color: var(--text-primary); vertical-align: middle;
}
.rc-card-table tr:hover td { background: rgba(255,255,255,0.03); }
.rc-card-table .rc-q-cell {
  max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.rc-muted-cell { color: var(--text-muted); font-size: 0.75rem; }
.rc-badge {
  display: inline-block; padding: 0.15rem 0.55rem; border-radius: 99px;
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.04em;
  border: 1px solid transparent;
}
.rc-badge-new { background: var(--info-bg); color: var(--info-text); border-color: rgba(124, 183, 255, 0.22); }
.rc-badge-learning { background: rgba(255,192,0,0.15); color: #b8860b; }
.rc-badge-review { background: rgba(22,101,52,0.15); color: var(--green); }
.rc-badge-relearning { background: rgba(237,125,49,0.15); color: var(--orange); }
.rc-badge-suspended { background: rgba(122,143,166,0.15); color: var(--ink-3); }
.rc-badge-easy { background: var(--success-bg); color: var(--success-text); border-color: rgba(74, 222, 128, 0.2); }
.rc-badge-medium { background: rgba(255,192,0,0.12); color: #b8860b; }
.rc-badge-hard { background: rgba(229,62,62,0.12); color: #c53030; }
.rc-badge-due {
  background: var(--warning-bg);
  color: var(--warning-text);
  border-color: rgba(253, 186, 116, 0.2);
}
.rc-star { cursor: pointer; font-size: 1rem; transition: transform 0.15s; user-select:none; }
.rc-star:hover { transform: scale(1.25); }

/* Empty state */
.rc-empty {
  text-align: center; padding: 3rem 1.5rem; color: var(--ink-3);
}
.rc-empty-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.rc-empty-msg { font-size: 0.95rem; margin-bottom: 0.5rem; color: rgba(210, 230, 255, 0.9); }
.rc-empty-sub { font-size: 0.82rem; color: rgba(170, 195, 225, 0.78); }

/* Pagination */
.rc-pagination { display:flex; gap:0.5rem; align-items:center; justify-content:center; margin-top:1rem; }
.rc-page-btn {
  background: rgba(255,255,255,0.12); border: 1px solid transparent;
  border-radius: var(--radius-sm); padding: 0.3rem 0.65rem;
  font-family: 'DM Sans', sans-serif; font-size: 0.82rem; cursor: pointer;
  color: var(--text-secondary); transition: all 0.15s;
}
.rc-page-btn:hover { background: rgba(255,255,255,0.18); color: var(--text-primary); }
.rc-page-btn.active { background: var(--accent-blue); color: #fff; border-color: var(--accent-blue); font-weight: 600; }
.rc-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.rc-action-btn-secondary {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-strong);
}
.rc-action-btn-secondary:hover {
  background: rgba(255,255,255,0.06);
  color: var(--text-primary);
  border-color: rgba(255,255,255,0.38);
}
.rc-action-btn-danger {
  background: transparent;
  color: var(--danger-text);
  border: 1px solid rgba(255, 107, 107, 0.4);
}
.rc-action-btn-danger:hover {
  background: rgba(255, 107, 107, 0.08);
  border-color: rgba(255, 107, 107, 0.65);
}

/* ── REVISE PANEL ── */
.rc-revise-tabs {
  display: flex; gap: 0.5rem; margin-bottom: 1.5rem;
}
.rc-revise-tab {
  padding: 0.5rem 1.2rem; border-radius: 99px;
  border: 1px solid rgba(120, 190, 255, 0.22);
  background: rgba(15, 23, 42, 0.78); font-family:'DM Sans',sans-serif;
  font-size: 0.85rem; font-weight: 600; color: rgba(210, 230, 255, 0.9);
  cursor: pointer; transition: all 0.2s;
}
.rc-revise-tab.active {
  background: linear-gradient(135deg, #4d7fe0 0%, #3d6fd1 100%);
  color: #fff; border-color: rgba(120, 190, 255, 0.4);
}
.rc-revise-tab:hover:not(.active) {
  background: rgba(15, 23, 42, 0.92);
  border-color: rgba(120, 190, 255, 0.35);
}

/* Stats row */
.rc-stats-grid {
  display: grid; grid-template-columns: repeat(5,1fr); gap: 0.75rem; margin-bottom: 1.5rem;
}
@media(max-width:640px){ .rc-stats-grid { grid-template-columns: repeat(3,1fr); } }
@media(max-width:420px){ .rc-stats-grid { grid-template-columns: repeat(2,1fr); } }
.rc-stat-tile {
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(120, 190, 255, 0.16);
  border-radius: var(--radius);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  padding: 0.85rem 0.75rem; text-align: center;
}
.rc-stat-val { font-family:'Lora',serif; font-size:1.5rem; font-weight:700; color:#eaf4ff; }
.rc-stat-label { font-size:0.7rem; color:rgba(170, 195, 225, 0.78); text-transform:uppercase; letter-spacing:0.06em; margin-top:0.15rem; }

/* Review card */
.rc-review-wrap {
  max-width: 660px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;
}
.rc-review-progress-bar-bg {
  height: 4px; background: var(--surface-2); border-radius: 99px;
}
.rc-review-progress-bar-fill {
  height: 100%; border-radius: 99px;
  background: linear-gradient(90deg,#4472c4,#5b9bd5);
  transition: width 0.4s ease;
}
.rc-card-scene {
  perspective: 1200px; width: 100%; min-height: 200px;
}
.rc-card-inner {
  position: relative; width: 100%; min-height: 200px;
  transform-style: preserve-3d; transition: transform 0.5s;
}
.rc-card-inner.flipped { transform: rotateY(180deg); }
.rc-card-face {
  position: absolute; width: 100%; backface-visibility: hidden;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(120, 190, 255, 0.16);
  border-radius: var(--radius); padding: 1.75rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
  min-height: 200px; display: flex; flex-direction: column; justify-content: center;
}
.rc-card-back { transform: rotateY(180deg); }
.rc-card-front-label {
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
  color: rgba(170, 195, 225, 0.78); text-transform: uppercase; margin-bottom: 0.75rem;
}
.rc-card-question {
  font-family: 'Lora', serif; font-size: 1.15rem; font-weight: 600; color: #eaf4ff;
  line-height: 1.55;
}
.rc-card-show-hint {
  margin-top: auto; padding-top: 1rem;
  font-size: 0.78rem; color: rgba(170, 195, 225, 0.78); text-align: center;
  display: flex; align-items: center; justify-content: center; gap: 0.35rem;
}
.rc-card-answer-label {
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
  color: rgba(170, 195, 225, 0.78); text-transform: uppercase; margin-bottom: 0.75rem;
}
.rc-card-answer {
  font-size: 0.95rem; color: #eaf4ff; line-height: 1.7; white-space: pre-wrap;
}
.rc-card-images {
  display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;
}
.rc-card-images img {
  height: 80px; border-radius: var(--radius-sm); cursor: pointer;
  transition: opacity 0.2s; border: 1px solid var(--border);
}
.rc-card-images img:hover { opacity: 0.85; }
.rc-card-tags {
  display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.85rem;
}
.rc-card-tag-pill {
  background: rgba(68,114,196,0.1); color: var(--accent-light);
  border-radius: 99px; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.55rem;
}

/* Rating row */
.rc-rating-row {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 0.6rem;
  opacity: 0; pointer-events: none; transition: opacity 0.3s;
}
.rc-rating-row.visible { opacity: 1; pointer-events: auto; }
.rc-rate-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 68px;
  padding: 0.7rem 0.8rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(120, 190, 255, 0.2);
  background: rgba(17, 32, 52, 0.88);
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
  overflow: hidden;
}
.rc-rate-btn .rc-rate-label {
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.1;
}
.rc-rate-btn .rc-rate-sub {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  margin-top: 0;
  font-size: 0.76rem;
  line-height: 1.1;
  transform: translateY(-4px);
  transition:
    max-height 0.18s ease,
    opacity 0.18s ease,
    transform 0.18s ease,
    margin-top 0.18s ease;
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .rc-rate-btn:hover .rc-rate-sub {
    max-height: 20px;
    opacity: 1;
    margin-top: 0.2rem;
    transform: translateY(0);
  }
}
.rc-rate-btn:focus-visible .rc-rate-sub {
  max-height: 20px;
  opacity: 1;
  margin-top: 0.2rem;
  transform: translateY(0);
}
.rc-rate-btn:hover,
.rc-rate-btn:focus-visible { transform: translateY(-2px); }
.rc-rate-again {
  border-color: rgba(229,62,62,0.38);
  background: rgba(229,62,62,0.13);
}
.rc-rate-again:hover { background: rgba(229,62,62,0.08); border-color: rgba(229,62,62,0.6); }
.rc-rate-again .rc-rate-label { color: #c53030; }
.rc-rate-again .rc-rate-sub { color: #c53030; }
.rc-rate-hard {
  border-color: rgba(237,125,49,0.42);
  background: rgba(237,125,49,0.13);
}
.rc-rate-hard:hover { background: rgba(237,125,49,0.08); border-color: rgba(237,125,49,0.6); }
.rc-rate-hard .rc-rate-label { color: var(--orange); }
.rc-rate-hard .rc-rate-sub { color: var(--orange); }
.rc-rate-good {
  border-color: rgba(68,114,196,0.42);
  background: rgba(68,114,196,0.13);
}
.rc-rate-good:hover { background: rgba(68,114,196,0.08); border-color: rgba(68,114,196,0.6); }
.rc-rate-good .rc-rate-label { color: var(--accent-light); }
.rc-rate-good .rc-rate-sub { color: var(--accent-light); }
.rc-rate-easy {
  border-color: rgba(22,101,52,0.45);
  background: rgba(22,101,52,0.16);
}
.rc-rate-easy:hover { background: rgba(22,101,52,0.08); border-color: rgba(22,101,52,0.6); }
.rc-rate-easy .rc-rate-label { color: var(--green); }
.rc-rate-easy .rc-rate-sub { color: var(--green); }
@media (hover: none) {
  .rc-rate-btn .rc-rate-sub {
    max-height: 0;
    opacity: 0;
    margin-top: 0;
    transform: translateY(-4px);
  }
}

/* Show answer button */
.rc-show-answer-btn {
  display: block; width: 100%; padding: 0.85rem;
  background: var(--accent-light); color: #fff; border: none; border-radius: var(--radius);
  font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 600;
  cursor: pointer; transition: all 0.2s; text-align: center;
}
.rc-show-answer-btn:hover { background: #3561b0; }

/* Review session summary */
.rc-session-summary {
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 2rem; text-align: center; max-width: 480px; margin: 0 auto;
}
.rc-summary-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.rc-summary-title { font-family:'Lora',serif; font-size:1.3rem; font-weight:700; color:var(--ink); margin-bottom:0.4rem; }
.rc-summary-sub { font-size:0.85rem; color:var(--ink-3); margin-bottom:1.5rem; }
.rc-summary-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:0.75rem; margin-bottom:1.5rem; }
.rc-summary-item { background:var(--surface-2); border-radius:var(--radius-sm); padding:0.75rem; }
.rc-summary-item .val { font-size:1.35rem; font-weight:700; color:var(--ink); font-family:'Lora',serif; }
.rc-summary-item .lbl { font-size:0.72rem; color:var(--ink-3); text-transform:uppercase; letter-spacing:0.06em; }

/* Undo bar */
.rc-undo-bar {
  display: none; background: var(--accent); color: #e0eeff;
  border-radius: var(--radius); padding: 0.6rem 1rem;
  font-size: 0.83rem; align-items: center; gap: 0.75rem;
  justify-content: space-between;
}
.rc-undo-bar.visible { display: flex; }
.rc-undo-bar button {
  background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3);
  color: #fff; border-radius: 99px; padding: 0.25rem 0.85rem;
  font-family:'DM Sans',sans-serif; font-size:0.8rem; font-weight:600;
  cursor:pointer; transition: background 0.15s;
}
.rc-undo-bar button:hover { background: rgba(255,255,255,0.25); }

/* ── CUSTOM DECKS PANEL ── */
.rc-deck-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start; }
@media(max-width:640px){ .rc-deck-grid { grid-template-columns: 1fr; } }
.rc-deck-card {
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(120, 190, 255, 0.16);
  border-radius: var(--radius); padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
.rc-deck-card h3 { font-family:'Lora',serif; font-size:1rem; font-weight:700; color:#eaf4ff; margin-bottom:1rem; }
.rc-tag-selector { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 1rem; }
.rc-tag-select-pill {
  padding: 0.3rem 0.75rem; border-radius: 99px;
  border: 1px solid var(--border); background: var(--surface-2);
  font-family: 'DM Sans', sans-serif; font-size: 0.8rem; font-weight: 600;
  color: var(--ink-2); cursor: pointer; transition: all 0.18s;
}
.rc-tag-select-pill.selected {
  background: rgba(68,114,196,0.2); border-color: rgba(68,114,196,0.5); color: var(--accent-light);
}
.rc-match-toggle {
  display: flex; gap: 0.4rem; margin-bottom: 1rem;
}
.rc-match-btn {
  flex: 1; padding: 0.45rem; border-radius: var(--radius-sm);
  border: 1px solid rgba(120, 190, 255, 0.2); background: rgba(11, 19, 32, 0.9);
  font-family:'DM Sans',sans-serif; font-size: 0.82rem; font-weight: 600;
  color: rgba(210, 230, 255, 0.88); cursor: pointer; transition: all 0.18s; text-align: center;
}
.rc-match-btn.active {
  background: linear-gradient(135deg, #4d7fe0 0%, #3d6fd1 100%);
  color: #fff; border-color: rgba(120, 190, 255, 0.42);
}
.rc-preview-count {
  font-size: 0.83rem; color: rgba(210, 230, 255, 0.86); margin-bottom: 1rem;
  padding: 0.5rem 0.75rem; background: rgba(11, 19, 32, 0.88);
  border-radius: var(--radius-sm); border-left: 3px solid var(--accent-light);
}
.rc-saved-deck-display {
  background: rgba(68,114,196,0.06); border: 1px solid rgba(68,114,196,0.2);
  border-radius: var(--radius); padding: 1.25rem; margin-bottom: 1rem;
}
.rc-saved-deck-name { font-family:'Lora',serif; font-size:1rem; font-weight:700; color:#eaf4ff; margin-bottom:0.3rem; }
.rc-saved-deck-meta { font-size:0.8rem; color:rgba(170, 195, 225, 0.78); }
.rc-deck-name-input {
  width: 100%; padding: 0.55rem 0.85rem; border-radius: var(--radius-sm);
  border: 1px solid rgba(120, 190, 255, 0.2); background: rgba(11, 19, 32, 0.9);
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: #eaf4ff;
  margin-bottom: 0.75rem; transition: border-color 0.2s;
}
.rc-deck-name-input:focus { outline: none; border-color: var(--accent-light); }

/* ── TOAST ── */
.rc-toast-wrap {
  position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999;
  display: flex; flex-direction: column; gap: 0.5rem; pointer-events: none;
}
.rc-toast {
  pointer-events: auto; min-width: 220px; max-width: 340px;
  padding: 0.7rem 1rem; border-radius: var(--radius);
  font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 500;
  box-shadow: var(--shadow-lg); animation: rcToastIn 0.2s ease;
  display: flex; align-items: center; gap: 0.6rem;
}
.rc-toast-success { background: #1a3a28; color: #6ee7a8; border: 1px solid rgba(22,101,52,0.4); }
.rc-toast-error { background: #3a1a1a; color: #fca5a5; border: 1px solid rgba(229,62,62,0.4); }
.rc-toast-info { background: #1a2a3a; color: #93c5fd; border: 1px solid rgba(68,114,196,0.4); }
@keyframes rcToastIn { from { opacity:0; transform:translateX(20px); } to { opacity:1; transform:translateX(0); } }

/* ── MODAL ── */
.rc-modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px); z-index: 1000;
  display: none; align-items: center; justify-content: center; padding: 1rem;
}
.rc-modal-overlay.open { display: flex; }
.rc-modal {
  background: rgba(15, 23, 42, 0.96);
  border: 1px solid rgba(120, 190, 255, 0.2);
  border-radius: var(--radius); padding: 2rem; width: 100%; max-width: 540px;
  max-height: 90vh; overflow-y: auto;
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.45);
}
.rc-modal-title { font-family:'Lora',serif; font-size:1.15rem; font-weight:700; color:#eaf4ff; margin-bottom:1rem; }
.rc-modal-actions { display:flex; gap:0.6rem; justify-content:flex-end; margin-top:1.5rem; }

/* ── IMAGE LIGHTBOX ── */
.rc-lightbox {
  position: fixed; inset: 0; background: rgba(0,0,0,0.88);
  z-index: 2000; display: none; align-items: center; justify-content: center;
  cursor: pointer;
}
.rc-lightbox.open { display: flex; }
.rc-lightbox img { max-width: 92vw; max-height: 88vh; border-radius: var(--radius); }

/* Section divider */
.rc-section-gap { margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border); }

/* Loading spinner */
.rc-spinner {
  width: 28px; height: 28px; border: 3px solid var(--surface-2);
  border-top-color: var(--accent-light); border-radius: 50%;
  animation: rcSpin 0.7s linear infinite; margin: 2rem auto;
}
@keyframes rcSpin { to { transform: rotate(360deg); } }
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

<!-- ══ EDIT CARD MODAL ══ -->
<div class="rc-modal-overlay" id="rc-edit-modal">
  <div class="rc-modal">
    <div class="rc-modal-title">Edit Flashcard</div>
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
      <label class="rc-label">Tags <span>(optional, press Enter or comma)</span></label>
      <div class="rc-tag-input-wrap" id="rc-edit-tag-wrap" onclick="document.getElementById('rc-edit-tag-input').focus()">
        <input type="text" class="rc-tag-input" id="rc-edit-tag-input" placeholder="Add tag..." onkeydown="rcEditTagKeydown(event)" oninput="rcEditTagInput(event)">
      </div>
    </div>
    <div class="rc-modal-actions">
      <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcCloseEditModal()">Cancel</button>
      <button class="rc-btn rc-btn-primary rc-btn-sm" onclick="rcSaveEditCard()">Save Changes</button>
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
                oninput="rcUpdateCharCount('rc-question','rc-q-count',500)"></textarea>
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
              <label class="rc-label">Tags <span>(optional · press Enter or comma · max 10)</span></label>
              <div class="rc-tag-input-wrap" id="rc-tag-wrap" onclick="document.getElementById('rc-tag-input').focus()">
                <input type="text" class="rc-tag-input" id="rc-tag-input"
                  placeholder="Add a tag..."
                  onkeydown="rcTagKeydown(event)"
                  oninput="rcTagInput(event)">
              </div>
            </div>

            <div class="rc-field">
              <label class="rc-label">Images <span>(optional · max 5 · jpg/png/webp · 5MB each)</span></label>
              <div class="rc-img-upload-area" id="rc-drop-zone"
                onclick="document.getElementById('rc-file-input').click()"
                ondragover="rcDragOver(event)" ondragleave="rcDragLeave(event)" ondrop="rcDrop(event)">
                📎 Click to upload or drag & drop images here
              </div>
              <input type="file" id="rc-file-input" accept="image/jpeg,image/png,image/webp" multiple style="display:none" onchange="rcHandleFiles(this.files)">
              <div class="rc-img-previews" id="rc-img-previews"></div>
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
              <div class="rc-library-title">📚 My Cards</div>
              <div class="rc-library-controls">
                <input type="text" class="rc-search" id="rc-search" placeholder="Search cards…" oninput="rcRenderLibrary()">
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
                  <option value="starred">Starred</option>
                </select>
                <select class="rc-select" id="rc-sort" onchange="rcRenderLibrary()">
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="due">Due soon</option>
                  <option value="hardest">Hardest</option>
                  <option value="alpha">A–Z</option>
                </select>
              </div>
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
              <li>Keep questions specific</li>
              <li>Use tags consistently</li>
              <li>One fact per card works best</li>
              <li>Review daily for best results</li>
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
      <div class="rc-revise-tabs">
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
              <div id="rc-review-queue-note" style="display:none;font-size:0.82rem;color:rgba(210,230,255,0.82);background:rgba(59,130,246,0.12);border:1px solid rgba(125,180,255,0.25);border-radius:10px;padding:0.45rem 0.65rem;margin-top:0.6rem;"></div>

            <!-- Card -->
            <div class="rc-card-scene" id="rc-card-scene">
              <div class="rc-card-inner" id="rc-card-inner">
                <!-- Front -->
                <div class="rc-card-face" id="rc-card-front">
                  <div class="rc-card-front-label">Question</div>
                  <div class="rc-card-question" id="rc-card-question"></div>
                  <div class="rc-card-show-hint">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
                    Tap to reveal
                  </div>
                </div>
                <!-- Back -->
                <div class="rc-card-face rc-card-back" id="rc-card-back">
                  <div class="rc-card-answer-label">Answer</div>
                  <div class="rc-card-answer" id="rc-card-answer"></div>
                  <div class="rc-card-images" id="rc-card-images"></div>
                  <div class="rc-card-tags" id="rc-card-tags"></div>
                </div>
              </div>
            </div>

            <!-- Show answer / rating -->
            <button class="rc-show-answer-btn" id="rc-show-answer-btn" onclick="rcFlipCard()">Show Answer</button>

            <div class="rc-rating-row" id="rc-rating-row">
              <button class="rc-rate-btn rc-rate-again" onclick="rcRate('again')">
                <span class="rc-rate-label">Again</span>
                <span class="rc-rate-sub" id="rc-lbl-again">&lt; 1 min</span>
              </button>
              <button class="rc-rate-btn rc-rate-hard" onclick="rcRate('hard')">
                <span class="rc-rate-label">Hard</span>
                <span class="rc-rate-sub" id="rc-lbl-hard">&lt; 5 min</span>
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
          <div class="rc-empty-msg">No cards due right now.</div>
          <div class="rc-empty-sub">Nothing in this review set is returning within the next 6 hours.</div>
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

            <div style="font-size:0.8rem;color:rgba(170, 195, 225, 0.78);margin-bottom:0.6rem;">Select tags to include:</div>
            <div class="rc-tag-selector" id="rc-deck-tag-selector">
              <span style="font-size:0.82rem;color:rgba(170, 195, 225, 0.72);">No tags yet. Create cards with tags first.</span>
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
              <span style="font-size:0.82rem;color:rgba(210, 230, 255, 0.88);font-weight:600;" id="rc-deck-review-name"></span>
              <button class="rc-btn rc-btn-ghost rc-btn-sm" onclick="rcEndDeckReview()">✕ End</button>
            </div>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div class="rc-review-progress-bar-bg" style="flex:1;">
                <div class="rc-review-progress-bar-fill" id="rc-deck-prog-fill" style="width:0%"></div>
              </div>
              <div style="font-size:0.78rem;color:rgba(170, 195, 225, 0.78);white-space:nowrap;" id="rc-deck-prog-label">0 / 0</div>
            </div>
            <div id="rc-deck-review-queue-note" style="display:none;font-size:0.82rem;color:rgba(210,230,255,0.82);background:rgba(59,130,246,0.12);border:1px solid rgba(125,180,255,0.25);border-radius:10px;padding:0.45rem 0.65rem;margin-top:0.6rem;"></div>
            <div class="rc-card-scene">
              <div class="rc-card-inner" id="rc-deck-card-inner">
                <div class="rc-card-face" id="rc-deck-card-front">
                  <div class="rc-card-front-label">Question</div>
                  <div class="rc-card-question" id="rc-deck-card-question"></div>
                  <div class="rc-card-show-hint">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
                    Tap to reveal
                  </div>
                </div>
                <div class="rc-card-face rc-card-back" id="rc-deck-card-back">
                  <div class="rc-card-answer-label">Answer</div>
                  <div class="rc-card-answer" id="rc-deck-card-answer"></div>
                  <div class="rc-card-images" id="rc-deck-card-images"></div>
                  <div class="rc-card-tags" id="rc-deck-card-tags"></div>
                </div>
              </div>
            </div>
            <button class="rc-show-answer-btn" id="rc-deck-show-btn" onclick="rcDeckFlipCard()">Show Answer</button>
            <div class="rc-rating-row" id="rc-deck-rating-row">
              <button class="rc-rate-btn rc-rate-again" onclick="rcDeckRate('again')"><span class="rc-rate-label">Again</span><span class="rc-rate-sub" id="rc-deck-lbl-again">&lt; 1 min</span></button>
              <button class="rc-rate-btn rc-rate-hard" onclick="rcDeckRate('hard')"><span class="rc-rate-label">Hard</span><span class="rc-rate-sub" id="rc-deck-lbl-hard">&lt; 5 min</span></button>
              <button class="rc-rate-btn rc-rate-good" onclick="rcDeckRate('good')"><span class="rc-rate-label">Good</span><span class="rc-rate-sub" id="rc-deck-lbl-good">1 day</span></button>
              <button class="rc-rate-btn rc-rate-easy" onclick="rcDeckRate('easy')"><span class="rc-rate-label">Easy</span><span class="rc-rate-sub" id="rc-deck-lbl-easy">4 days</span></button>
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
  <span style="font-size:0.72rem;opacity:0.38;font-family:'DM Sans',sans-serif;">Recall Flashcards · IMS v0.6.13</span>
</footer>

</div><!-- /#page-recall -->
`);

// ═══════════════════════════════════════════════════════════════════
//  RECALL FLASHCARDS – JavaScript Engine
// ═══════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ── CONSTANTS ──────────────────────────────────────────────────
  const RC_LS_KEY  = 'ims_recall_cards';
  const RC_DB_PATH = 'users/{uid}/recall';
  const MAX_CARDS_DEFAULT = 50;
  const MAX_INTERVAL_DAYS = 60;
  const LEARNING_STEPS_MIN = [1, 10];
  const GRADUATING_INTERVAL = 1;
  const EASY_INTERVAL = 4;
  const STARTING_EASE = 2.5;
  const MIN_EASE = 1.3;
  const DAILY_NEW_CAP = 20;
  const CARDS_PER_PAGE = 20;
  const MINUTE_MS = 60 * 1000;
  const HOUR_MS = 60 * MINUTE_MS;
  const SIX_HOURS_MS = 6 * HOUR_MS;

  // ── STATE ──────────────────────────────────────────────────────
  let _state = {
    cards: {},           // { cardId: {...} }
    customDeck: null,    // { id, name, selectedTags, matchMode, cardIds, ... }
    stats: {
      streakDays: 0,
      totalReviews: 0,
      lastStudyDate: null,
      reviewedTodayCount: 0,
    },
    settings: {
      cardLimit: MAX_CARDS_DEFAULT,
      maxIntervalDays: MAX_INTERVAL_DAYS,
      dailyNewCardLimit: DAILY_NEW_CAP,
    }
  };

  let _currentUser = null;
  let _pageActive = false;
  let _saveTimeout = null;

  // Creator state
  let _pendingTags = [];
  let _pendingImages = [];   // { dataUrl, file }
  let _editTags = [];
  let _editCardId = null;

  // Review state
  let _reviewQueue = [];
  let _reviewIndex = 0;
  let _reviewFlipped = false;
  let _sessionStats = { reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };
  let _undoSnapshot = null;  // { cardId, prevReviewData }
  let _undoTimer = null;
  let _reviewMode = 'general'; // 'general' | 'deck'
  let _reviewQueueMode = 'empty'; // 'due' | 'upcoming_short' | 'empty'
  let _deckQueueMode = 'empty'; // 'due' | 'upcoming_short' | 'empty'
  let _deckQueue = [];
  let _deckIndex = 0;
  let _deckFlipped = false;

  // Library pagination
  let _libPage = 1;
  let _libFiltered = [];

  // Deck builder
  let _deckSelectedTags = [];
  let _deckMatchMode = 'any';

  // ── UTILITY ───────────────────────────────────────────────────
  function uid() {
    return 'rc_' + Math.random().toString(36).slice(2, 11) + '_' + Date.now().toString(36);
  }

  function nowMs() { return Date.now(); }
  function todayStr() { return new Date().toISOString().split('T')[0]; }
  function daysFromNow(d) { return nowMs() + d * 86400000; }
  function minsFromNow(m) { return nowMs() + m * 60000; }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function roundDays(d) { return Math.round(clamp(d, 1, MAX_INTERVAL_DAYS)); }

  function sanitize(s) {
    if (typeof s !== 'string') return '';
    return s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function normalizeTag(t) {
    return t.trim().toLowerCase().replace(/[^a-z0-9\-_\s]/g, '').trim().slice(0, 24);
  }

  function isDue(card) {
    if (!card || !card.reviewData) return false;
    if (card.suspended) return false;
    const rd = card.reviewData;
    if (rd.status === 'new') return true;
    const dueAtMs = _dueAtMsFromCard(card);
    return Number.isFinite(dueAtMs) && dueAtMs <= nowMs();
  }

  function getDifficultyLabel(card) {
    if (!card || !card.reviewData) return 'new';
    const { lapses, easeFactor } = card.reviewData;
    if (lapses >= 3 || easeFactor < 1.8) return 'hard';
    if (lapses <= 0 && easeFactor >= 2.3) return 'easy';
    return 'medium';
  }

  function getStatusBadgeClass(status) {
    const map = { new: 'rc-badge-new', learning: 'rc-badge-learning', review: 'rc-badge-review', relearning: 'rc-badge-relearning', suspended: 'rc-badge-suspended' };
    return map[status] || 'rc-badge-new';
  }

  function formatDue(card) {
    if (!card || !card.reviewData) return '—';
    const status = card.reviewData.status;
    const dueDate = _dueAtMsFromCard(card);
    if (status === 'new') return 'New';
    if (card.suspended) return 'Suspended';
    const diff = Math.round((dueDate - nowMs()) / 86400000);
    if (diff < 0) return `${Math.abs(diff)}d overdue`;
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Tomorrow';
    return `In ${diff}d`;
  }

  function _formatLongInterval(durationMs) {
    const mins = Math.round(durationMs / MINUTE_MS);
    if (mins < 60) return mins + ' min';
    const hours = Math.round(durationMs / HOUR_MS);
    if (hours < 24) return hours + ' hr';
    const days = Math.round(durationMs / 86400000);
    if (days === 1) return '1 day';
    return days + ' days';
  }

  function formatReviewIntervalLabel(durationMs) {
    if (durationMs <= 1 * MINUTE_MS) return '< 1 min';
    if (durationMs <= 5 * MINUTE_MS) return '< 5 min';
    if (durationMs <= 10 * MINUTE_MS) return '< 10 min';
    if (durationMs <= 30 * MINUTE_MS) return '< 30 min';
    if (durationMs <= 1 * HOUR_MS) return '< 1 hr';
    if (durationMs <= 3 * HOUR_MS) return '< 3 hr';
    if (durationMs <= 6 * HOUR_MS) return '< 6 hr';
    return _formatLongInterval(durationMs);
  }

  function _dueAtMsFromCard(card) {
    if (!card || !card.reviewData) return NaN;
    const dueAt = card.reviewData.dueAt != null ? card.reviewData.dueAt : card.reviewData.dueDate;
    if (dueAt == null) return NaN;
    const ms = typeof dueAt === 'number' ? dueAt : new Date(dueAt).getTime();
    return Number.isFinite(ms) ? ms : NaN;
  }

  function _normalizeDueAt(card) {
    if (!card || !card.reviewData) return;
    if (card.reviewData.dueAt == null && card.reviewData.dueDate != null) {
      card.reviewData.dueAt = card.reviewData.dueDate;
    }
  }

  function _buildReviewQueue(cards, now) {
    const eligible = cards.filter(card => {
      if (!card || card._deleted || card.suspended || card.buried) return false;
      if (!card.reviewData || card.reviewData.status === 'new') return false;
      const dueAtMs = _dueAtMsFromCard(card);
      if (!Number.isFinite(dueAtMs)) return false;
      return true;
    }).map(card => ({ card, dueAtMs: _dueAtMsFromCard(card), createdAtMs: card.createdAt || 0 }));

    const dueNow = eligible
      .filter(item => item.dueAtMs <= now)
      .sort((a, b) => a.dueAtMs - b.dueAtMs || a.createdAtMs - b.createdAtMs || String(a.card.id).localeCompare(String(b.card.id)))
      .map(item => item.card);

    if (dueNow.length > 0) return { mode: 'due', items: dueNow };

    const upcomingShort = eligible
      .filter(item => item.dueAtMs > now && item.dueAtMs <= now + SIX_HOURS_MS)
      .sort((a, b) => a.dueAtMs - b.dueAtMs || a.createdAtMs - b.createdAtMs || String(a.card.id).localeCompare(String(b.card.id)))
      .map(item => item.card);

    if (upcomingShort.length > 0) return { mode: 'upcoming_short', items: upcomingShort };

    return { mode: 'empty', items: [] };
  }

  function allCards() { return Object.values(_state.cards || {}); }

  function cardCount() { return allCards().filter(c => !c._deleted).length; }

  function allTags() {
    const tags = new Set();
    allCards().forEach(c => (c.tags || []).forEach(t => tags.add(t)));
    return Array.from(tags).sort();
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
    // Daily reset of reviewedTodayCount
    if (_state.stats.lastStudyDate !== todayStr()) {
      _state.stats.reviewedTodayCount = 0;
    }
  }

  // ── PAGE ACTIVATION ───────────────────────────────────────────
  window.recallPageActivated = async function() {
    if (_pageActive) {
      _refreshUI();
      return;
    }
    _pageActive = true;
    const username = window.DB ? window.DB.getCurrentUser() : null;
    _currentUser = username;
    if (!_currentUser) {
      _showAuthGates();
      return;
    }
    _hideAuthGates();
    await _loadState();
    _refreshUI();
  };

  function _showAuthGates() {
    _el('rc-creator-gate').style.display = '';
    _el('rc-creator-main').style.display = 'none';
    _el('rc-revise-gate').style.display = '';
    _el('rc-revise-main').style.display = 'none';
  }

  function _hideAuthGates() {
    _el('rc-creator-gate').style.display = 'none';
    _el('rc-creator-main').style.display = '';
    _el('rc-revise-gate').style.display = 'none';
    _el('rc-revise-main').style.display = '';
  }

  function _refreshUI() {
    _updateLimitUI();
    _updateTagsCloud();
    rcRenderLibrary();
    _updateStatsUI();
    _updateDeckUI();
    if (_reviewQueue.length > 0 && _reviewIndex < _reviewQueue.length) {
      _renderCurrentCard();
    } else {
      rcInitReviewSession();
    }
  }

  function _el(id) { return document.getElementById(id); }

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
      } else if (_currentUser) {
        rcInitReviewSession();
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
    if (input.value.endsWith(',')) {
      _addPendingTag(input.value.slice(0, -1));
      input.value = '';
    }
    _checkDupWarning();
  };

  // ── DUPLICATE CHECK ───────────────────────────────────────────
  function _checkDupWarning() {
    const q = (_el('rc-question') ? _el('rc-question').value : '').trim().toLowerCase();
    if (!q) { _el('rc-dup-warning').style.display = 'none'; return; }
    const dup = allCards().find(c => !c._deleted && c.question && c.question.trim().toLowerCase() === q);
    _el('rc-dup-warning').style.display = dup ? '' : 'none';
  }

  // ── CLOUDINARY CONFIG ─────────────────────────────────────────
  // To activate image uploads:
  //   1. Sign up free at https://cloudinary.com
  //   2. Copy your Cloud Name from the dashboard home page
  //   3. Go to Settings → Upload → Upload Presets → Add upload preset
  //      Set Mode = Unsigned
  //      (Optional) Add incoming transformation: c_limit,w_1200/q_auto,f_auto
  //      to auto-compress and resize server-side before storage
  //   4. Paste both values below and deploy.
  //
  // The cloud name and unsigned preset name are safe in client-side code —
  // this is Cloudinary's official browser-upload pattern. No secrets exposed.
  const RC_CLOUDINARY_CLOUD  = 'dt2bxjok1';
  const RC_CLOUDINARY_PRESET = 'ims_flashcards';
  const RC_CLOUDINARY_CONFIGURED = (
    RC_CLOUDINARY_CLOUD  !== 'YOUR_CLOUD_NAME' &&
    RC_CLOUDINARY_PRESET !== 'YOUR_UPLOAD_PRESET'
  );

  // ── IMAGE HANDLING ────────────────────────────────────────────
  // _pendingImages entries: { dataUrl, file }
  //   dataUrl — local blob URL used only for the preview thumbnail
  //   file    — original File object, sent as FormData to Cloudinary on save

  window.rcDragOver = function(e) { e.preventDefault(); _el('rc-drop-zone').classList.add('drag-over'); };
  window.rcDragLeave = function(e) { _el('rc-drop-zone').classList.remove('drag-over'); };
  window.rcDrop = function(e) {
    e.preventDefault();
    _el('rc-drop-zone').classList.remove('drag-over');
    rcHandleFiles(e.dataTransfer.files);
  };

  window.rcHandleFiles = function(files) {
    if (!files) return;
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    Array.from(files).forEach(function(file) {
      if (_pendingImages.length >= 5) { rcToast('Max 5 images per card', 'error'); return; }
      if (!allowed.includes(file.type)) { rcToast('Unsupported format: ' + file.name, 'error'); return; }
      if (file.size > 10 * 1024 * 1024) { rcToast('File too large (max 10 MB): ' + file.name, 'error'); return; }

      // Show a local preview instantly without reading the whole file as base64
      const previewUrl = URL.createObjectURL(file);
      _pendingImages.push({ dataUrl: previewUrl, file: file });
      _renderImagePreviews();
    });
  };

  function _renderImagePreviews() {
    const wrap = _el('rc-img-previews');
    if (!wrap) return;
    wrap.innerHTML = '';
    _pendingImages.forEach(function(img, i) {
      const thumb = document.createElement('div');
      thumb.className = 'rc-img-thumb';
      thumb.innerHTML = '<img src="' + img.dataUrl + '" alt="preview"><button onclick="rcRemoveImage(' + i + ')">×</button>';
      wrap.appendChild(thumb);
    });
  }

  window.rcRemoveImage = function(idx) {
    // Revoke the object URL to free memory
    const entry = _pendingImages[idx];
    if (entry && entry.dataUrl && entry.dataUrl.startsWith('blob:')) {
      URL.revokeObjectURL(entry.dataUrl);
    }
    _pendingImages.splice(idx, 1);
    _renderImagePreviews();
  };

  // Upload a single File object to Cloudinary using an unsigned preset.
  // Returns the secure_url string. Throws on failure.
  async function _uploadOneToCloudinary(file) {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', RC_CLOUDINARY_PRESET);

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/' + RC_CLOUDINARY_CLOUD + '/image/upload',
      { method: 'POST', body: form }
    );

    if (!res.ok) {
      let detail = 'HTTP ' + res.status;
      try { const j = await res.json(); detail = j.error && j.error.message ? j.error.message : detail; } catch(_) {}
      throw new Error('Cloudinary upload failed: ' + detail);
    }

    const data = await res.json();
    if (!data.secure_url) throw new Error('Cloudinary returned no URL.');
    return data.secure_url; // always https://res.cloudinary.com/...
  }

  // Upload all pending images sequentially. Returns array of hosted URLs.
  // Throws on first failure so rcSaveCard can abort before writing to Firebase.
  async function _uploadPendingImages() {
    const urls = [];
    for (let i = 0; i < _pendingImages.length; i++) {
      urls.push(await _uploadOneToCloudinary(_pendingImages[i].file));
    }
    return urls;
  }

  // ── CARD SAVE ─────────────────────────────────────────────────
  let _saving = false;

  window.rcSaveCard = async function() {
    if (!_currentUser) { rcToast('Please log in first', 'error'); return; }
    if (_saving) return;

    const questionEl = _el('rc-question');
    const answerEl = _el('rc-answer');
    const question = questionEl ? questionEl.value.trim() : '';
    const answer = answerEl ? answerEl.value.trim() : '';

    if (!question) { rcToast('Question is required', 'error'); questionEl && questionEl.focus(); return; }
    if (!answer)   { rcToast('Answer is required', 'error'); answerEl && answerEl.focus(); return; }
    if (question.length > 500) { rcToast('Question too long (max 500)', 'error'); return; }
    if (answer.length > 2000)  { rcToast('Answer too long (max 2000)', 'error'); return; }

    const limit = _state.settings.cardLimit || MAX_CARDS_DEFAULT;
    if (cardCount() >= limit) { rcToast('Card limit reached (' + limit + ')', 'error'); return; }

    // Guard: if images selected but Cloudinary not configured, warn and abort
    if (_pendingImages.length > 0 && !RC_CLOUDINARY_CONFIGURED) {
      rcToast('Image hosting not set up. Add your Cloudinary config or remove images.', 'error');
      return;
    }

    _saving = true;
    const btn = _el('rc-save-btn');
    if (btn) { btn.disabled = true; btn.textContent = _pendingImages.length ? 'Uploading…' : 'Saving…'; }

    // Upload images first. If any fail, abort — never save a card with broken image refs.
    let hostedImageUrls = [];
    if (_pendingImages.length > 0) {
      try {
        rcToast('Uploading ' + _pendingImages.length + ' image' + (_pendingImages.length > 1 ? 's' : '') + '…', 'info');
        hostedImageUrls = await _uploadPendingImages();
      } catch(err) {
        rcToast('Image upload failed — card not saved. ' + err.message, 'error');
        _saving = false;
        if (btn) { btn.disabled = false; btn.textContent = 'Save Card'; }
        return;
      }
    }

    const cardId = uid();
    const now = nowMs();
    const card = {
      id: cardId,
      question,
      answer,
      images: hostedImageUrls,  // always hosted URLs from Cloudinary CDN
      tags: [..._pendingTags],
      createdAt: now,
      updatedAt: now,
      suspended: false,
      starred: false,
      reviewData: {
        status: 'new',
        dueAt: now,
        dueDate: now,
        lastReviewedAt: null,
        lastRating: null,
        intervalDays: 0,
        easeFactor: STARTING_EASE,
        stepIndex: 0,
        lapses: 0,
        reviewCount: 0,
        graduated: false,
      }
    };

    _state.cards[cardId] = card;
    _scheduleAutoSave();

    // Free blob URLs and reset form
    _pendingImages.forEach(function(img) {
      if (img.dataUrl && img.dataUrl.startsWith('blob:')) URL.revokeObjectURL(img.dataUrl);
    });
    if (questionEl) questionEl.value = '';
    if (answerEl) answerEl.value = '';
    _pendingTags = [];
    _pendingImages = [];
    _renderPendingTags();
    _renderImagePreviews();
    _el('rc-dup-warning').style.display = 'none';
    ['rc-q-count','rc-a-count'].forEach(function(id) { const el = _el(id); if(el) el.textContent = '0 / ' + (id.includes('q') ? '500' : '2000'); });

    rcToast('Card saved!');
    _updateLimitUI();
    _updateTagsCloud();
    rcRenderLibrary();
    rcInitReviewSession();

    _saving = false;
    if (btn) { btn.disabled = false; btn.textContent = 'Save Card'; }
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
    if (!cloud) return;
    const tags = allTags();
    if (!tags.length) { cloud.innerHTML = '<span style="color:var(--ink-3);">No tags yet.</span>'; return; }
    cloud.innerHTML = tags.map(t =>
      '<span class="rc-tag-chip" style="cursor:pointer;" onclick="rcFilterByTag(\'' + sanitize(t) + '\')">' + sanitize(t) + '</span>'
    ).join('');
    // Update filter dropdowns
    const filterTag = _el('rc-filter-tag');
    const deckTagSel = _el('rc-deck-tag-selector');
    if (filterTag) {
      const current = filterTag.value;
      filterTag.innerHTML = '<option value="">All tags</option>' + tags.map(t => '<option value="' + sanitize(t) + '">' + sanitize(t) + '</option>').join('');
      filterTag.value = current;
    }
    if (deckTagSel) { _renderDeckTagSelector(); }
  }
  window.rcFilterByTag = function(tag) {
    const el = _el('rc-filter-tag');
    if (el) { el.value = tag; rcRenderLibrary(); }
    rcShowTab('creator');
  };

  // ── LIBRARY RENDER ────────────────────────────────────────────
  window.rcRenderLibrary = function() {
    if (!_currentUser) return;
    const searchVal = (_el('rc-search') ? _el('rc-search').value : '').toLowerCase();
    const filterTag = _el('rc-filter-tag') ? _el('rc-filter-tag').value : '';
    const filterStatus = _el('rc-filter-status') ? _el('rc-filter-status').value : '';
    const sort = _el('rc-sort') ? _el('rc-sort').value : 'newest';
    const now = nowMs();

    let cards = allCards().filter(c => !c._deleted);

    if (searchVal) cards = cards.filter(c => c.question && c.question.toLowerCase().includes(searchVal));
    if (filterTag) cards = cards.filter(c => (c.tags || []).includes(filterTag));
    if (filterStatus === 'starred') cards = cards.filter(c => c.starred);
    else if (filterStatus === 'suspended') cards = cards.filter(c => c.suspended);
    else if (filterStatus) cards = cards.filter(c => c.reviewData && c.reviewData.status === filterStatus);

    cards.sort((a, b) => {
      if (sort === 'newest')  return b.createdAt - a.createdAt;
      if (sort === 'oldest')  return a.createdAt - b.createdAt;
      if (sort === 'due')     return (a.reviewData ? a.reviewData.dueDate : 0) - (b.reviewData ? b.reviewData.dueDate : 0);
      if (sort === 'hardest') return (a.reviewData ? a.reviewData.easeFactor : 99) - (b.reviewData ? b.reviewData.easeFactor : 99);
      if (sort === 'alpha')   return (a.question || '').localeCompare(b.question || '');
      return 0;
    });

    _libFiltered = cards;
    const total = cards.length;
    const totalPages = Math.max(1, Math.ceil(total / CARDS_PER_PAGE));
    _libPage = Math.min(_libPage, totalPages);
    const start = (_libPage - 1) * CARDS_PER_PAGE;
    const pageCards = cards.slice(start, start + CARDS_PER_PAGE);

    const body = _el('rc-library-body');
    if (!body) return;

    if (!total) {
      body.innerHTML = '<div class="rc-empty"><div class="rc-empty-icon">📭</div><div class="rc-empty-msg">No flashcards yet. Build your first recall card.</div></div>';
      _el('rc-pagination').innerHTML = '';
      return;
    }

    body.innerHTML = '<table class="rc-card-table">' +
      '<thead><tr><th style="width:30px"></th><th>Question</th><th>Tags</th><th>Status</th><th>Difficulty</th><th>Due</th><th>Actions</th></tr></thead>' +
      '<tbody>' + pageCards.map(card => _cardRow(card)).join('') + '</tbody></table>';

    // Pagination
    const pag = _el('rc-pagination');
    if (pag) {
      let html = '<button class="rc-page-btn" onclick="rcLibPage(' + (_libPage - 1) + ')" ' + (_libPage <= 1 ? 'disabled' : '') + '>‹</button>';
      for (let i = 1; i <= totalPages; i++) {
        html += '<button class="rc-page-btn' + (i === _libPage ? ' active' : '') + '" onclick="rcLibPage(' + i + ')">' + i + '</button>';
      }
      html += '<button class="rc-page-btn" onclick="rcLibPage(' + (_libPage + 1) + ')" ' + (_libPage >= totalPages ? 'disabled' : '') + '>›</button>';
      pag.innerHTML = html;
    }
  };
  window.rcLibPage = function(p) { _libPage = p; rcRenderLibrary(); };

  function _cardRow(card) {
    const rd = card.reviewData || {};
    const diff = getDifficultyLabel(card);
    const due = formatDue(card);
    const isDueNow = isDue(card);
    const starIcon = card.starred ? '⭐' : '☆';
    const tagHtml = (card.tags || []).slice(0, 3).map(t => '<span class="rc-badge rc-badge-new" style="margin:1px;">' + sanitize(t) + '</span>').join('') + ((card.tags || []).length > 3 ? '<span class="rc-muted-cell">+' + ((card.tags || []).length - 3) + '</span>' : '');

    return '<tr>' +
      '<td><span class="rc-star" onclick="rcToggleStar(\'' + card.id + '\')" title="Star">' + starIcon + '</span></td>' +
      '<td class="rc-q-cell" title="' + sanitize(card.question) + '">' + sanitize(card.question.slice(0, 80)) + (card.question.length > 80 ? '…' : '') + (card.suspended ? ' <span class="rc-badge rc-badge-suspended">Suspended</span>' : '') + '</td>' +
      '<td>' + (tagHtml || '<span class="rc-muted-cell">—</span>') + '</td>' +
      '<td><span class="rc-badge ' + getStatusBadgeClass(rd.status || 'new') + '">' + (rd.status || 'new') + '</span></td>' +
      '<td><span class="rc-badge rc-badge-' + diff + '">' + diff + '</span></td>' +
      '<td>' + (isDueNow ? '<span class="rc-badge rc-badge-due">' + due + '</span>' : '<span class="rc-muted-cell">' + due + '</span>') + '</td>' +
      '<td style="white-space:nowrap;display:flex;gap:0.35rem;align-items:center;">' +
        '<button class="rc-btn rc-btn-sm rc-action-btn-secondary" onclick="rcOpenEditModal(\'' + card.id + '\')">Edit</button>' +
        '<button class="rc-btn rc-btn-sm rc-action-btn-secondary" onclick="rcToggleSuspend(\'' + card.id + '\')">' + (card.suspended ? 'Unsuspend' : 'Suspend') + '</button>' +
        '<button class="rc-btn rc-btn-sm rc-action-btn-danger" onclick="rcDeleteCard(\'' + card.id + '\')">Delete</button>' +
      '</td>' +
    '</tr>';
  }

  // ── CARD ACTIONS ──────────────────────────────────────────────
  window.rcToggleStar = function(id) {
    const c = _state.cards[id];
    if (!c) return;
    c.starred = !c.starred;
    c.updatedAt = nowMs();
    _scheduleAutoSave();
    rcRenderLibrary();
  };

  window.rcToggleSuspend = async function(id) {
    const c = _state.cards[id];
    if (!c) return;
    c.suspended = !c.suspended;
    c.updatedAt = nowMs();
    _scheduleAutoSave();
    rcToast(c.suspended ? 'Card suspended' : 'Card unsuspended', 'info');
    rcRenderLibrary();
    rcInitReviewSession();
  };

  window.rcDeleteCard = async function(id) {
    const ok = await rcConfirm('Delete flashcard?', 'Delete this flashcard? This cannot be undone.', 'Delete');
    if (!ok) return;
    delete _state.cards[id];
    // Remove from custom deck if present
    if (_state.customDeck && _state.customDeck.cardIds) {
      _state.customDeck.cardIds = _state.customDeck.cardIds.filter(cid => cid !== id);
    }
    _scheduleAutoSave();
    rcToast('Card deleted');
    _updateLimitUI();
    _updateTagsCloud();
    rcRenderLibrary();
    rcInitReviewSession();
  };

  // ── EDIT MODAL ────────────────────────────────────────────────
  window.rcOpenEditModal = function(id) {
    const c = _state.cards[id];
    if (!c) return;
    _editCardId = id;
    _editTags = [...(c.tags || [])];
    const qEl = _el('rc-edit-question');
    const aEl = _el('rc-edit-answer');
    if (qEl) { qEl.value = c.question || ''; rcUpdateCharCount('rc-edit-question', 'rc-edit-q-count', 500); }
    if (aEl) { aEl.value = c.answer || ''; rcUpdateCharCount('rc-edit-answer', 'rc-edit-a-count', 2000); }
    _renderEditTags();
    _el('rc-edit-modal').classList.add('open');
  };

  window.rcCloseEditModal = function() {
    _el('rc-edit-modal').classList.remove('open');
    _editCardId = null;
    _editTags = [];
  };

  function _renderEditTags() {
    const wrap = _el('rc-edit-tag-wrap');
    const input = _el('rc-edit-tag-input');
    if (!wrap || !input) return;
    wrap.querySelectorAll('.rc-tag-chip').forEach(c => c.remove());
    _editTags.forEach(tag => {
      const chip = document.createElement('span');
      chip.className = 'rc-tag-chip';
      chip.innerHTML = sanitize(tag) + '<button onclick="rcRemoveEditTag(\'' + tag + '\')">×</button>';
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
      input.value = '';
      _renderEditTags();
    } else if (e.key === 'Backspace' && !input.value && _editTags.length) {
      _editTags.pop();
      _renderEditTags();
    }
  };
  window.rcEditTagInput = function(e) {
    const input = _el('rc-edit-tag-input');
    if (input.value.endsWith(',')) {
      const tag = normalizeTag(input.value.slice(0, -1));
      if (tag && !_editTags.includes(tag) && _editTags.length < 10) _editTags.push(tag);
      input.value = '';
      _renderEditTags();
    }
  };

  window.rcSaveEditCard = function() {
    if (!_editCardId) return;
    const c = _state.cards[_editCardId];
    if (!c) return;
    const q = (_el('rc-edit-question') ? _el('rc-edit-question').value : '').trim();
    const a = (_el('rc-edit-answer') ? _el('rc-edit-answer').value : '').trim();
    if (!q) { rcToast('Question required', 'error'); return; }
    if (!a) { rcToast('Answer required', 'error'); return; }
    c.question = q;
    c.answer = a;
    c.tags = [..._editTags];
    c.updatedAt = nowMs();
    _scheduleAutoSave();
    rcToast('Card updated');
    rcCloseEditModal();
    _updateTagsCloud();
    rcRenderLibrary();
  };

  // ── STATS UI ──────────────────────────────────────────────────
  function _updateStatsUI() {
    const now = nowMs();
    const cards = allCards().filter(c => !c._deleted && !c.suspended);
    const due = cards.filter(c => isDue(c) && c.reviewData && (c.reviewData.status === 'review' || c.reviewData.status === 'relearning')).length;
    const newCards = cards.filter(c => c.reviewData && c.reviewData.status === 'new').length;
    const learning = cards.filter(c => c.reviewData && (c.reviewData.status === 'learning')).length;
    const streak = _state.stats.streakDays || 0;
    const reviewed = _state.stats.reviewedTodayCount || 0;

    const setTxt = (id, val) => { const el = _el(id); if (el) el.textContent = val; };
    setTxt('rc-stat-due', due);
    setTxt('rc-stat-new', newCards);
    setTxt('rc-stat-learning', learning);
    setTxt('rc-stat-reviewed', reviewed);
    setTxt('rc-stat-streak', streak + '🔥');
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
    if (next.dueDate != null) next.dueAt = next.dueDate;
    return next;
  }

  function _nextIntervalMs(rd, rating) {
    if (!rd) return null;
    const status = rd.status || 'new';
    if (status === 'new' || status === 'learning') {
      if (rating === 'again') return LEARNING_STEPS_MIN[0] * MINUTE_MS;
      if (rating === 'hard') return 5 * MINUTE_MS;
      if (rating === 'good') {
        const nextStep = (rd.stepIndex || 0) + 1;
        return nextStep >= LEARNING_STEPS_MIN.length ? GRADUATING_INTERVAL * 86400000 : LEARNING_STEPS_MIN[nextStep] * MINUTE_MS;
      }
      if (rating === 'easy') return EASY_INTERVAL * 86400000;
    } else if (status === 'review') {
      if (rating === 'again') return 1 * 86400000;
      if (rating === 'hard') return roundDays((rd.intervalDays || 1) * 1.2) * 86400000;
      if (rating === 'good') return roundDays((rd.intervalDays || 1) * (rd.easeFactor || STARTING_EASE)) * 86400000;
      if (rating === 'easy') return roundDays((rd.intervalDays || 1) * (rd.easeFactor || STARTING_EASE) * 1.3) * 86400000;
    } else if (status === 'relearning') {
      if (rating === 'again') return LEARNING_STEPS_MIN[0] * MINUTE_MS;
      if (rating === 'hard') return 5 * MINUTE_MS;
      if (rating === 'good') return 1 * 86400000;
      if (rating === 'easy') return EASY_INTERVAL * 86400000;
    }
    return null;
  }

  function _ratingLabel(rd, rating) {
    const intervalMs = _nextIntervalMs(rd, rating);
    return intervalMs == null ? '' : formatReviewIntervalLabel(intervalMs);
  }

  // ── REVIEW SESSION ─────────────────────────────────────────────
  window.rcInitReviewSession = function() {
    _reviewFlipped = false;
    _sessionStats = { reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };
    _undoSnapshot = null;
    _hideUndo();

    const now = nowMs();
    const scoped = allCards();
    scoped.forEach(_normalizeDueAt);
    const queueResult = _buildReviewQueue(scoped, now);
    _reviewQueueMode = queueResult.mode;
    _reviewQueue = queueResult.items;
    _reviewIndex = 0;

    _updateStatsUI();
    _showReviewUI(_reviewQueue.length > 0, _reviewQueueMode);

    if (_reviewQueue.length > 0) {
      _renderCurrentCard();
    }
  };

  function _showReviewUI(hasCards, queueMode) {
    const area = _el('rc-review-area');
    const emptyNoCards = _el('rc-rev-empty-no-cards');
    const emptyDone = _el('rc-rev-empty-done');
    const summary = _el('rc-session-summary');
    const queueNote = _el('rc-review-queue-note');

    if (!area) return;

    const totalCards = allCards().filter(c => !c._deleted).length;

    if (summary) summary.style.display = 'none';
    if (hasCards) {
      area.style.display = '';
      if (emptyNoCards) emptyNoCards.style.display = 'none';
      if (emptyDone) emptyDone.style.display = 'none';
      if (queueNote) {
        if (queueMode === 'upcoming_short') {
          queueNote.style.display = '';
          queueNote.textContent = 'No cards are due right now. Showing cards returning within the next 6 hours.';
        } else {
          queueNote.style.display = 'none';
          queueNote.textContent = '';
        }
      }
    } else if (!totalCards) {
      area.style.display = 'none';
      if (emptyNoCards) emptyNoCards.style.display = '';
      if (emptyDone) emptyDone.style.display = 'none';
      if (queueNote) { queueNote.style.display = 'none'; queueNote.textContent = ''; }
    } else {
      area.style.display = 'none';
      if (emptyNoCards) emptyNoCards.style.display = 'none';
      if (emptyDone) emptyDone.style.display = '';
      if (queueNote) { queueNote.style.display = 'none'; queueNote.textContent = ''; }
    }
  }

  function _renderCurrentCard() {
    const card = _reviewQueue[_reviewIndex];
    if (!card) return;

    _reviewFlipped = false;
    const inner = _el('rc-card-inner');
    if (inner) inner.classList.remove('flipped');

    const qEl = _el('rc-card-question');
    const aEl = _el('rc-card-answer');
    const imgEl = _el('rc-card-images');
    const tagsEl = _el('rc-card-tags');

    if (qEl) qEl.textContent = card.question || '';
    if (aEl) aEl.textContent = card.answer || '';
    if (imgEl) {
      imgEl.innerHTML = (card.images || []).map(src =>
        '<img src="' + src + '" alt="card image" onclick="rcOpenLightbox(\'' + src.replace(/'/g, "\\'") + '\')">'
      ).join('');
    }
    if (tagsEl) {
      tagsEl.innerHTML = (card.tags || []).map(t => '<span class="rc-card-tag-pill">' + sanitize(t) + '</span>').join('');
    }

    // Rating labels
    const rd = card.reviewData || {};
    ['again','hard','good','easy'].forEach(r => {
      const lbl = _el('rc-lbl-' + r);
      if (lbl) lbl.textContent = _ratingLabel(rd, r);
    });

    // Progress
    const total = _reviewQueue.length;
    const done = _reviewIndex;
    const pct = total ? (done / total * 100) : 0;
    const progFill = _el('rc-rev-prog-fill');
    const progLabel = _el('rc-rev-prog-label');
    if (progFill) progFill.style.width = pct + '%';
    if (progLabel) progLabel.textContent = done + ' / ' + total;

    // Show/hide buttons
    const showBtn = _el('rc-show-answer-btn');
    const rateRow = _el('rc-rating-row');
    if (showBtn) showBtn.style.display = '';
    if (rateRow) rateRow.classList.remove('visible');

    // Keyboard
    _reviewMode = 'general';
  }

  window.rcFlipCard = function() {
    if (_reviewFlipped) return;
    _reviewFlipped = true;
    const inner = _el('rc-card-inner');
    if (inner) inner.classList.add('flipped');
    const showBtn = _el('rc-show-answer-btn');
    const rateRow = _el('rc-rating-row');
    if (showBtn) showBtn.style.display = 'none';
    if (rateRow) rateRow.classList.add('visible');
  };

  window.rcRate = function(rating) {
    if (!_reviewFlipped) return;
    const card = _reviewQueue[_reviewIndex];
    if (!card) return;

    // Save undo snapshot
    _undoSnapshot = { cardId: card.id, prevReviewData: Object.assign({}, card.reviewData) };
    _showUndoBar();

    // Apply SRS
    const newRD = _computeNextDue(card.reviewData, rating);
    _state.cards[card.id].reviewData = newRD;
    _state.cards[card.id].updatedAt = nowMs();

    // Session stats
    _sessionStats.reviewed++;
    if (rating === 'again') _sessionStats.again++;
    else if (rating === 'hard') _sessionStats.hard++;
    else if (rating === 'good') _sessionStats.good++;
    else if (rating === 'easy') _sessionStats.easy++;

    // Global stats
    _state.stats.totalReviews = (_state.stats.totalReviews || 0) + 1;
    _state.stats.reviewedTodayCount = (_state.stats.reviewedTodayCount || 0) + 1;
    _updateStreak();
    _scheduleAutoSave();
    _updateStatsUI();

    const queueResult = _buildReviewQueue(allCards(), nowMs());
    _reviewQueueMode = queueResult.mode;
    _reviewQueue = queueResult.items;
    _reviewIndex = 0;

    if (_reviewQueue.length === 0) {
      _showReviewUI(false, _reviewQueueMode);
      _showSessionSummary();
    } else {
      _showReviewUI(true, _reviewQueueMode);
      _renderCurrentCard();
    }
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
      .filter(c => !c._deleted && !c.suspended && c.reviewData && _dueAtMsFromCard(c) > nowMs())
      .sort((a, b) => _dueAtMsFromCard(a) - _dueAtMsFromCard(b));
    if (upcoming.length) {
      const ms = _dueAtMsFromCard(upcoming[0]) - nowMs();
      setTxt('rc-sum-next', formatReviewIntervalLabel(ms));
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
    if (!tags.length) { sel.innerHTML = '<span style="font-size:0.82rem;color:rgba(170, 195, 225, 0.72);">No tags yet. Create cards with tags first.</span>'; return; }
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
    const cards = _state.customDeck.cardIds
      .map(id => _state.cards[id])
      .filter(c => c && !c._deleted && !c.suspended);
    if (!cards.length) { rcToast('No reviewable cards in deck', 'error'); return; }

    cards.forEach(_normalizeDueAt);
    const deckQueueResult = _buildReviewQueue(cards, nowMs());
    _deckQueueMode = deckQueueResult.mode;
    _deckQueue = deckQueueResult.items;
    _deckIndex = 0;
    _deckFlipped = false;

    if (!_deckQueue.length) {
      rcToast('No cards due right now. Nothing is returning within the next 6 hours.', 'info');
      return;
    }

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

    const qEl = _el('rc-deck-card-question');
    const aEl = _el('rc-deck-card-answer');
    const imgEl = _el('rc-deck-card-images');
    const tagsEl = _el('rc-deck-card-tags');

    if (qEl) qEl.textContent = card.question || '';
    if (aEl) aEl.textContent = card.answer || '';
    if (imgEl) imgEl.innerHTML = (card.images || []).map(src => '<img src="' + src + '" alt="card image" onclick="rcOpenLightbox(\'' + src.replace(/'/g, "\\'") + '\')">').join('');
    if (tagsEl) tagsEl.innerHTML = (card.tags || []).map(t => '<span class="rc-card-tag-pill">' + sanitize(t) + '</span>').join('');

    const queueNote = _el('rc-deck-review-queue-note');
    if (queueNote) {
      if (_deckQueueMode === 'upcoming_short') {
        queueNote.style.display = '';
        queueNote.textContent = 'No cards are due right now. Showing cards returning within the next 6 hours.';
      } else {
        queueNote.style.display = 'none';
        queueNote.textContent = '';
      }
    }

    const rd = card.reviewData || {};
    ['again','hard','good','easy'].forEach(r => {
      const lbl = _el('rc-deck-lbl-' + r);
      if (lbl) lbl.textContent = _ratingLabel(rd, r);
    });

    const total = _deckQueue.length;
    const done = _deckIndex;
    const pct = total ? (done / total * 100) : 0;
    const pf = _el('rc-deck-prog-fill');
    const pl = _el('rc-deck-prog-label');
    if (pf) pf.style.width = pct + '%';
    if (pl) pl.textContent = done + ' / ' + total;

    const showBtn = _el('rc-deck-show-btn');
    const rateRow = _el('rc-deck-rating-row');
    if (showBtn) showBtn.style.display = '';
    if (rateRow) rateRow.classList.remove('visible');
  }

  window.rcDeckFlipCard = function() {
    if (_deckFlipped) return;
    _deckFlipped = true;
    const inner = _el('rc-deck-card-inner');
    if (inner) inner.classList.add('flipped');
    const showBtn = _el('rc-deck-show-btn');
    const rateRow = _el('rc-deck-rating-row');
    if (showBtn) showBtn.style.display = 'none';
    if (rateRow) rateRow.classList.add('visible');
  };

  window.rcDeckRate = function(rating) {
    if (!_deckFlipped) return;
    const card = _deckQueue[_deckIndex];
    if (!card) return;

    const newRD = _computeNextDue(card.reviewData, rating);
    _state.cards[card.id].reviewData = newRD;
    _state.cards[card.id].updatedAt = nowMs();
    _state.stats.totalReviews = (_state.stats.totalReviews || 0) + 1;
    _state.stats.reviewedTodayCount = (_state.stats.reviewedTodayCount || 0) + 1;
    _updateStreak();
    _scheduleAutoSave();
    _updateStatsUI();

    const cards = _state.customDeck && _state.customDeck.cardIds ? _state.customDeck.cardIds.map(id => _state.cards[id]).filter(c => c && !c._deleted && !c.suspended) : [];
    cards.forEach(_normalizeDueAt);
    const deckQueueResult = _buildReviewQueue(cards, nowMs());
    _deckQueueMode = deckQueueResult.mode;
    _deckQueue = deckQueueResult.items;
    _deckIndex = 0;

    if (!_deckQueue.length) {
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
  window.addEventListener('ims-auth-change', async function() {
    _pageActive = false;
    _currentUser = null;
    const page = document.getElementById('page-recall');
    if (page && page.classList.contains('active')) {
      window.recallPageActivated();
    }
  });

})();

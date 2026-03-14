document.write(`\n<!-- ════════════════════════ BRANCH: MedWordle ════════════════════════ -->
<div class="page" id="page-medwordle">
<div class="play-page-wrap">

  <!-- ── FLAIR PANEL (rotates every 5 min) ──────────────────── -->
  <div class="flair-panel" id="flair-panel">
    <div class="flair-inner" id="flair-inner">
      <!-- populated by JS -->
    </div>
    <div class="flair-dots" id="flair-dots"></div>
  </div>

  <!-- ── GAMES STACK ─────────────────────────────────────────── -->
  <div class="play-games-grid">

    <!-- TOP: Wordle -->
    <div class="play-card">
      <div class="play-card-header">
        <div class="wordle-eyebrow">🩺 Daily Medical Wordle</div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;">
          <div>
            <h2 class="wordle-title" style="margin:0 0 0.15rem;">Medical Wordle</h2>
            <p class="wordle-tagline" id="wordle-tagline" style="margin:0;"></p>
          </div>
          <button class="wordle-new-btn" onclick="wordleShowStats()">Stats 📊</button>
        </div>
      </div>
      <div class="wordle-grid" id="wordle-grid"></div>
      <div class="wordle-status" id="wordle-status"></div>
      <div class="wordle-kb" id="wordle-kb">
        <div class="wordle-kb-row" data-row="qwertyuiop"></div>
        <div class="wordle-kb-row" data-row="asdfghjkl"></div>
        <div class="wordle-kb-row" data-row="↵zxcvbnm⌫"></div>
      </div>
      <div class="wordle-hint" id="wordle-hint"></div>

      <!-- POST-GAME PANEL -->
      <div class="wordle-postgame" id="wordle-postgame" style="display:none;">
        <div class="wordle-pg-result" id="wordle-pg-result"></div>
        <div class="wordle-pg-word" id="wordle-pg-word"></div>
        <div class="wordle-pg-def" id="wordle-pg-def"></div>
        <div class="wordle-pg-feedback" id="wordle-pg-feedback"></div>
        <div class="wordle-pg-share-row">
          <button class="wordle-share-btn" onclick="wordleCopyShare()">📋 Share result</button>
          <span class="wordle-share-copied" id="wordle-share-copied">Copied! ✓</span>
        </div>
        <div class="wordle-countdown-wrap">
          <div class="wordle-countdown-label">Next puzzle in</div>
          <div class="wordle-countdown" id="wordle-countdown">00:00:00</div>
        </div>
      </div>
    </div>

    <!-- BOTTOM: Flashcard -->
    <div class="play-card" style="border-right:none;">
      <div class="play-card-header">
        <div class="wordle-eyebrow">📚 Medical Pearl</div>
        <h2 class="wordle-title" style="margin:0 0 0.15rem;">Quick Recall</h2>
      </div>
      <div class="fc-card" id="fc-card" onclick="fcFlip()">
        <div class="fc-inner" id="fc-inner">
          <div class="fc-face fc-front">
            <div class="fc-subject-tag" id="fc-subject-tag"></div>
            <div class="fc-question" id="fc-question"></div>
            <div class="fc-tap-hint">tap to reveal</div>
          </div>
          <div class="fc-face fc-back">
            <div class="fc-subject-tag fc-subject-tag-back" id="fc-subject-tag-back"></div>
            <div class="fc-answer" id="fc-answer"></div>
            <div class="fc-source">📖 High Yield Pearl</div>
          </div>
        </div>
      </div>
      <div class="fc-footer">
        <button class="fc-btn fc-btn-skip" onclick="fcNext()">Skip →</button>
        <span class="fc-counter" id="fc-counter"></span>
        <button class="fc-btn fc-btn-know" onclick="fcKnow()">Got it ✓</button>
      </div>
      <p class="wordle-tagline" style="text-align:center;margin-top:0.6rem;" id="fc-tagline"></p>
    </div>

  </div><!-- /play-games-grid -->

  <!-- STATS MODAL -->
  <div class="wordle-stats-overlay" id="wordle-stats-overlay" onclick="wordleCloseStats()" style="display:none;"></div>
  <div class="wordle-stats-modal" id="wordle-stats-modal" style="display:none;">
    <button class="wordle-stats-close" onclick="wordleCloseStats()">✕</button>
    <h3 class="wordle-stats-title">📊 Your Stats</h3>
    <div class="wordle-stats-grid">
      <div class="wordle-stat-box"><div class="wordle-stat-num" id="ws-played">0</div><div class="wordle-stat-lbl">Played</div></div>
      <div class="wordle-stat-box"><div class="wordle-stat-num" id="ws-winrate">0%</div><div class="wordle-stat-lbl">Win Rate</div></div>
      <div class="wordle-stat-box"><div class="wordle-stat-num" id="ws-streak">0</div><div class="wordle-stat-lbl">Current Streak</div></div>
      <div class="wordle-stat-box"><div class="wordle-stat-num" id="ws-maxstreak">0</div><div class="wordle-stat-lbl">Best Streak</div></div>
    </div>
    <div class="wordle-dist-title">Guess Distribution</div>
    <div class="wordle-dist" id="wordle-dist"></div>
  </div>

  <section class="home-suggestions-section">
    <div class="home-suggestions-inner">
      <h3 class="home-sug-title">🐛 Is something not working?</h3>
      <p class="home-sug-sub">Tell us here — we read every message and fix things fast.</p>
      <div class="home-sug-form">
        <textarea class="home-sug-textarea" id="suggest-medwordle" placeholder="Describe the issue or share feedback about MedWordle…"></textarea>
        <button class="home-sug-btn" onclick="sendSuggestion('suggest-medwordle','success-medwordle','MedWordle')">Send Report</button>
        <div class="suggestions-success" id="success-medwordle">✅ Thanks! Your message has been sent to the Discord channel.</div>
      </div>
    </div>
  </section>

  <footer class="blossom-footer" style="position:relative;z-index:2;">
    <div style="display:flex;align-items:center;gap:0.85rem;">
      <span>Made by medical students, for medical students</span>
      <a href="https://discord.gg/eKevY6F2pa" target="_blank" class="blossom-footer-link">Join Discord ↗</a>
    </div>
    <span style="font-size:0.72rem;opacity:0.38;font-family:'DM Sans',sans-serif;">Made with 🩵 by 0SirAwesome · v0.5.18</span>
  </footer>
</div>
</div>
<!-- ══════════════════════ /PLAY PAGE ═══════════════════════ -->

<!-- ══════════════════════ DAILY PEARLS PAGE ══════════════════════ -->
`);

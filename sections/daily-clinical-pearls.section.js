document.write(`\n<!-- ════════════════════════ BRANCH: Daily Clinical Pearls ════════════════════════ -->
<div class="page" id="page-pearls">
  <div class="pearls-wrap" id="pearls-wrap">

    <!-- Header -->
    <div style="text-align:center;">
      <div class="pearls-hero-eyebrow">🩺 Daily Clinical Pearls</div>
      <div class="pearls-hero-title" id="pearls-title">Today's Pack</div>
      <div class="pearls-hero-sub" id="pearls-sub">5 cards · Flip to reveal · Rate to track</div>
    </div>

    <!-- Login gate (shown when not logged in) -->
    <div class="pearls-gate" id="pearls-gate" style="display:none;">
      <div style="font-size:2rem;margin-bottom:0.6rem;">🔒</div>
      <div style="font-family:'Lora',serif;font-size:1.2rem;font-weight:700;color:#c8dff8;margin-bottom:0.4rem;">Log in to access Daily Clinical Pearls</div>
      <div style="font-size:0.82rem;color:rgba(140,175,220,0.5);margin-bottom:1.25rem;line-height:1.6;">Track your streaks, ratings and review history across all your devices.</div>
      <div style="display:flex;gap:0.6rem;justify-content:center;flex-wrap:wrap;">
        <button onclick="navAuthOpen('login')" style="padding:0.5rem 1.2rem;border-radius:99px;background:rgba(68,114,196,0.2);border:1px solid rgba(68,114,196,0.35);color:#a0c8f0;font-family:'DM Sans',sans-serif;font-size:0.85rem;font-weight:600;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(68,114,196,0.35)'" onmouseout="this.style.background='rgba(68,114,196,0.2)'">Log In</button>
        <button onclick="navAuthOpen('signup')" style="padding:0.5rem 1.2rem;border-radius:99px;background:rgba(255,192,0,0.12);border:1px solid rgba(255,192,0,0.3);color:#ffd966;font-family:'DM Sans',sans-serif;font-size:0.85rem;font-weight:600;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,192,0,0.22)'" onmouseout="this.style.background='rgba(255,192,0,0.12)'">Sign Up</button>
        <button onclick="navContinueAsGuest()" style="padding:0.5rem 1.2rem;border-radius:99px;background:rgba(140,170,220,0.07);border:1px solid rgba(140,170,220,0.22);color:rgba(160,195,240,0.65);font-family:'DM Sans',sans-serif;font-size:0.85rem;font-weight:600;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(140,170,220,0.14)';this.style.borderColor='rgba(140,170,220,0.38)';this.style.color='rgba(160,195,240,0.9)'" onmouseout="this.style.background='rgba(140,170,220,0.07)';this.style.borderColor='rgba(140,170,220,0.22)';this.style.color='rgba(160,195,240,0.65)'">Continue as Guest</button>
      </div>
    </div>

    <!-- Main card UI -->
    <div id="pearls-main" style="width:100%;display:none;flex-direction:column;align-items:center;gap:1.25rem;">

      <!-- Progress -->
      <div class="pearls-progress-row">
        <div class="pearls-progress-label" id="pearls-count-label">Card 1 of 5</div>
        <div class="pearls-progress-track">
          <div class="pearls-progress-fill" id="pearls-fill" style="width:0%"></div>
        </div>
        <div class="pearls-progress-label" id="pearls-pct-label">0%</div>
      </div>
      <div class="pearls-pip-row" id="pearls-pips"></div>

      <!-- Flashcard -->
      <div class="pearls-scene" id="pearls-scene" onclick="pearlsFlip()">
        <div class="pearls-card-inner" id="pearls-card-inner">
          <!-- Front -->
          <div class="pearls-card-face" id="pearls-front">
            <div class="pearls-tag-row">
              <span class="pearls-subject-tag" id="pearls-subject-tag"></span>
              <span class="pearls-diff-tag" id="pearls-diff-tag"></span>
            </div>
            <div class="pearls-question" id="pearls-question"></div>
            <div class="pearls-tap-hint">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
              Tap to reveal answer
            </div>
          </div>
          <!-- Back -->
          <div class="pearls-card-face pearls-card-back-face" id="pearls-back">
            <div class="pearls-tag-row">
              <span class="pearls-subject-tag" id="pearls-subject-tag-back"></span>
            </div>
            <div class="pearls-answer-label">Answer</div>
            <div class="pearls-answer" id="pearls-answer"></div>
          </div>
        </div>
      </div>

      <!-- Rating buttons (appear after flip) -->
      <div class="pearls-rate-row" id="pearls-rate-row">
        <button class="pearls-rate-btn prb-easy"   onclick="pearlsRate('easy')">😌 Easy<span>Got it</span></button>
        <button class="pearls-rate-btn prb-medium" onclick="pearlsRate('medium')">🤔 Medium<span>Almost</span></button>
        <button class="pearls-rate-btn prb-hard"   onclick="pearlsRate('hard')">😅 Hard<span>Need more</span></button>
      </div>

    </div>

    <!-- Completion screen -->
    <div class="pearls-complete" id="pearls-complete" style="display:none;">
      <div class="pearls-complete-emoji">🏆</div>
      <div class="pearls-complete-title">Pack Complete!</div>
      <div class="pearls-complete-sub">You've reviewed all 5 cards for today.</div>
      <div class="pearls-streak-badge" id="pearls-streak-badge">🔥 1 day streak</div>
      <div class="pearls-complete-breakdown" id="pearls-breakdown"></div>
      <div class="pearls-comeback">Come back <strong>tomorrow</strong> for a fresh pack.</div>
    </div>

  </div>
</div>
`);

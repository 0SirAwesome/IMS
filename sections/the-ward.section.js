document.write(`\n<!-- ════════════════════════ BRANCH: The Ward ════════════════════════ -->
<div class="page" id="page-ward">
<div class="ward-wrap">

  <!-- AUTH SCREEN (placeholder — login is in the nav header) -->
  <div id="ward-auth-screen" style="display:flex;align-items:center;justify-content:center;min-height:60vh;">
    <div style="text-align:center;padding:2.5rem 2rem;background:rgba(255,255,255,0.03);border:1px solid rgba(68,114,196,0.2);border-radius:18px;max-width:360px;">
      <div style="font-size:2.5rem;margin-bottom:0.75rem;">🏥</div>
      <div style="font-family:'Lora',serif;font-size:1.4rem;font-weight:700;color:#c8dff8;margin-bottom:0.4rem;">The Ward (Pomodoro)</div>
      <div style="font-size:0.85rem;color:rgba(140,170,220,0.55);margin-bottom:1.5rem;line-height:1.6;">Track your hours. Build your hospital.<br>Log in to get started.</div>
      <div style="display:flex;gap:0.6rem;justify-content:center;flex-wrap:wrap;">
        <button onclick="navAuthOpen('login')" style="padding:0.55rem 1.4rem;border-radius:99px;background:rgba(68,114,196,0.2);border:1px solid rgba(68,114,196,0.35);color:#a0c8f0;font-family:'DM Sans',sans-serif;font-size:0.85rem;font-weight:600;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(68,114,196,0.35)'" onmouseout="this.style.background='rgba(68,114,196,0.2)'">Log In</button>
        <button onclick="navAuthOpen('signup')" style="padding:0.55rem 1.4rem;border-radius:99px;background:rgba(255,192,0,0.12);border:1px solid rgba(255,192,0,0.3);color:#ffd966;font-family:'DM Sans',sans-serif;font-size:0.85rem;font-weight:600;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,192,0,0.22)'" onmouseout="this.style.background='rgba(255,192,0,0.12)'">Sign Up</button>
        <button onclick="navContinueAsGuest()" style="padding:0.55rem 1.4rem;border-radius:99px;background:rgba(140,170,220,0.07);border:1px solid rgba(140,170,220,0.22);color:rgba(160,195,240,0.65);font-family:'DM Sans',sans-serif;font-size:0.85rem;font-weight:600;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(140,170,220,0.14)';this.style.borderColor='rgba(140,170,220,0.38)';this.style.color='rgba(160,195,240,0.9)'" onmouseout="this.style.background='rgba(140,170,220,0.07)';this.style.borderColor='rgba(140,170,220,0.22)';this.style.color='rgba(160,195,240,0.65)'">Continue as Guest</button>
      </div>
    </div>
  </div>
  <!-- MAIN APP (hidden until logged in) -->
  <div id="ward-app" style="display:none;flex-direction:column;flex:1;">
    <div id="ward-sync-bar" style="display:none;width:100%;text-align:center;font-size:0.62rem;font-family:'DM Sans',sans-serif;padding:0.22rem 0;background:rgba(192,57,43,0.2);color:rgba(224,92,110,0.9);letter-spacing:0.03em;">
      ⚠️ Offline — changes saved locally, will sync when reconnected
    </div>

    <!-- TOPBAR -->
    <div class="ward-topbar">
      <div style="display:flex;align-items:center;gap:0.55rem;flex-wrap:wrap;">
        <div class="ward-user-pill">
          <div class="ward-user-avatar" id="ward-user-avatar"></div>
          <span class="ward-user-name" id="ward-user-name-display"></span>
        </div>
        <div class="ward-tier-badge" id="ward-tier-badge">🚪 Reception</div>
        <span id="ward-streak-pill" class="ward-streak-pill"></span>
      </div>
      <div class="ward-topbar-right">
        <div id="ward-room-active-badge" style="display:none;align-items:center;gap:0.3rem;font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:#57f287;">
          <span class="ward-room-dot"></span><span id="ward-room-code-display"></span>
        </div>
        <button class="ward-top-btn ward-btn-share" id="ward-share-btn" style="display:none;" onclick="wardShareRoom()">🔗 <span class="wbtn-txt">Invite</span></button>
        <button class="ward-top-btn ward-btn-logout" onclick="wardLogout()">← <span class="wbtn-txt">Log out</span></button>
      </div>
    </div>

    <!-- TOP INFO BAR -->
    <div class="ward-top-info-bar">
      <div class="ward-next-banner-inline" id="ward-next-banner"></div>
      <div class="ward-room-quick-btns">
        <span id="ward-room-active-inline" style="display:none;align-items:center;gap:0.35rem;font-family:'JetBrains Mono',monospace;font-size:0.62rem;color:#57f287;">
          <span class="ward-room-dot"></span><span id="ward-room-code-inline"></span>
        </span>
        <button class="ward-room-quick-btn ward-rqb-create" id="ward-topbar-create-btn" onclick="wardQuickCreateRoom()">🏥 Create room</button>
        <button class="ward-room-quick-btn ward-rqb-join"   id="ward-topbar-join-btn"   onclick="wardQuickJoinRoom()">🔑 Join room</button>
        <button class="ward-room-quick-btn ward-rqb-leave"  id="ward-topbar-leave-btn"  style="display:none;" onclick="wardLeaveRoom()">✕ Leave</button>
      </div>
    </div>

    <!-- MAIN LAYOUT -->
    <div class="ward-main">

      <!-- ═══ TIMER HERO ═══════════════════════════════════════ -->
      <div class="ward-timer-hero">

        <!-- Notification banners -->
        <div style="width:100%;max-width:660px;display:flex;flex-direction:column;gap:0.4rem;margin-bottom:0.75rem;">
          <div class="ward-resume-banner" id="ward-resume-banner" style="display:none;">
            <span class="ward-resume-text" id="ward-resume-text">Interrupted session detected!</span>
            <button class="ward-resume-btn" onclick="wardResumeSession()">Resume</button>
            <button class="ward-resume-btn" style="background:rgba(224,92,110,0.14);border-color:rgba(224,92,110,0.28);color:#f08090;" onclick="wardDismissResume()">Dismiss</button>
          </div>
          <div class="ward-reminder-banner" id="ward-reminder-banner"><span>💡</span><span id="ward-reminder-text"></span></div>
          <div class="ward-burnout-banner" id="ward-burnout-banner">🛑 90+ minutes continuous — rest to consolidate memory!</div>
          <div id="ward-guest-nudge" style="display:none;background:rgba(68,114,196,0.09);border:1px solid rgba(68,114,196,0.22);border-radius:10px;padding:0.55rem 0.8rem;">
            <div style="font-size:0.72rem;color:#a0c8f0;margin-bottom:0.38rem;">💾 Guest mode — progress saved on this device only.</div>
            <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
              <button onclick="wardPromptSaveAccount('signup')" style="flex:1;background:rgba(68,114,196,0.2);border:1px solid rgba(68,114,196,0.35);border-radius:7px;padding:0.28rem 0.6rem;font-size:0.68rem;font-weight:700;color:#7ab3e0;cursor:pointer;font-family:'DM Sans',sans-serif;">Sign up →</button>
              <button onclick="wardPromptSaveAccount('login')"  style="flex:1;background:rgba(255,192,0,0.1);border:1px solid rgba(255,192,0,0.25);border-radius:7px;padding:0.28rem 0.6rem;font-size:0.68rem;font-weight:700;color:#ffd966;cursor:pointer;font-family:'DM Sans',sans-serif;">Log in →</button>
            </div>
          </div>
        </div>

        <!-- Timer core -->
        <div style="width:100%;max-width:660px;display:flex;flex-direction:column;align-items:center;gap:0.6rem;">

          <!-- Mode tabs + quick-starts on same row -->
          <div style="display:flex;align-items:center;gap:0.55rem;flex-wrap:wrap;justify-content:center;">
            <div class="ward-mode-tabs">
              <button class="ward-mode-tab active" id="ward-tab-pomo"      onclick="wardSetMode('pomo')">Pomodoro</button>
              <button class="ward-mode-tab"        id="ward-tab-custom"    onclick="wardSetMode('custom')">Custom</button>
              <button class="ward-mode-tab"        id="ward-tab-stopwatch" onclick="wardSetMode('stopwatch')">Stopwatch</button>
            </div>
            <div style="width:1px;height:20px;background:rgba(68,114,196,0.15);"></div>
            <button class="ward-quick-btn ward-quick-2min"  onclick="wardQuickStart2()"  style="padding:0.3rem 0.65rem;font-size:0.7rem;">⚡ 2-min</button>
            <button class="ward-quick-btn ward-quick-pomo"  onclick="wardQuickStart25()" style="padding:0.3rem 0.65rem;font-size:0.7rem;">🍅 25-min</button>
          </div>

          <!-- Pomo preset buttons -->
          <div class="ward-duration-row" id="ward-dur-row">
            <span class="ward-dur-label">FOCUS</span>
            <button class="ward-dur-btn active" onclick="wardSetFocus(25)" id="wdf-25">25m</button>
            <button class="ward-dur-btn"        onclick="wardSetFocus(45)" id="wdf-45">45m</button>
            <button class="ward-dur-btn"        onclick="wardSetFocus(60)" id="wdf-60">60m</button>
            <span class="ward-dur-label" style="margin-left:0.35rem;">BREAK</span>
            <button class="ward-dur-btn active" onclick="wardSetBreak(5)"  id="wdb-5">5m</button>
            <button class="ward-dur-btn"        onclick="wardSetBreak(10)" id="wdb-10">10m</button>
            <button class="ward-dur-btn"        onclick="wardSetBreak(15)" id="wdb-15">15m</button>
          </div>

          <!-- Custom number inputs (hidden by default) -->
          <div id="ward-custom-row" style="display:none;align-items:center;gap:0.6rem;flex-wrap:wrap;justify-content:center;">
            <span class="ward-dur-label">FOCUS</span>
            <input id="ward-custom-focus" type="number" min="1" max="240" value="45"
              style="width:58px;background:rgba(255,255,255,0.06);border:1px solid rgba(68,114,196,0.28);border-radius:7px;padding:0.28rem 0.5rem;color:#e0eeff;font-family:'JetBrains Mono',monospace;font-size:0.84rem;text-align:center;outline:none;"
              oninput="wardCustomFocusChange()"/>
            <span class="ward-dur-label">min</span>
            <span class="ward-dur-label" style="margin-left:0.4rem;">BREAK</span>
            <input id="ward-custom-break" type="number" min="1" max="60" value="10"
              style="width:52px;background:rgba(255,255,255,0.06);border:1px solid rgba(68,114,196,0.28);border-radius:7px;padding:0.28rem 0.5rem;color:#e0eeff;font-family:'JetBrains Mono',monospace;font-size:0.84rem;text-align:center;outline:none;"
              oninput="wardCustomBreakChange()"/>
            <span class="ward-dur-label">min</span>
          </div>

          <!-- Clock display -->
          <div class="ward-time" id="ward-time-display">25:00</div>
          <div class="ward-phase-label" id="ward-phase-label">READY</div>

          <!-- Big start button -->
          <div style="display:flex;align-items:center;gap:0.9rem;">
            <button class="ward-start-btn" id="ward-start-btn" onclick="wardToggleTimer()">
              <span class="ward-btn-icon"  id="ward-btn-icon">▶</span>
              <span class="ward-btn-label" id="ward-btn-label">START</span>
            </button>
            <button id="ward-reset-btn" onclick="wardResetTimer()" title="Reset timer"
              style="display:none;width:44px;height:44px;border-radius:50%;border:1px solid rgba(224,92,110,0.28);background:rgba(224,92,110,0.08);color:rgba(224,92,110,0.6);font-size:1.2rem;cursor:pointer;transition:all 0.2s;flex-shrink:0;align-items:center;justify-content:center;line-height:1;padding:0;"
              onmouseover="this.style.background='rgba(224,92,110,0.18)';this.style.color='#f08090'"
              onmouseout="this.style.background='rgba(224,92,110,0.08)';this.style.color='rgba(224,92,110,0.6)'">↺</button>
            <button id="ward-end-btn" onclick="wardEndSession()" title="End session early"
              style="display:none;align-items:center;gap:0.35rem;border-radius:20px;border:1px solid rgba(255,192,0,0.25);background:rgba(255,192,0,0.07);color:rgba(255,192,0,0.6);font-size:0.7rem;font-weight:700;font-family:'DM Sans',sans-serif;cursor:pointer;transition:all 0.2s;flex-shrink:0;padding:0.35rem 0.85rem;letter-spacing:0.04em;"
              onmouseover="this.style.background='rgba(255,192,0,0.15)';this.style.color='#ffc000'"
              onmouseout="this.style.background='rgba(255,192,0,0.07)';this.style.color='rgba(255,192,0,0.6)'"><span style="display:flex;flex-direction:column;align-items:center;gap:0.1rem;"><span>✓ End Session</span><span style="font-size:0.58rem;opacity:0.45;font-weight:400;letter-spacing:0;">(at least five minutes to count)</span></span></button>
          </div>

          <!-- Session dots -->
          <div class="ward-session-dots" id="ward-session-dots"></div>

          <!-- Today stats strip -->
          <div class="ward-today-strip">
            <div class="ward-today-stat"><span class="ward-today-num">1.2× points</span><span class="ward-today-lbl">if studying together</span></div>
            <div class="ward-today-stat"><span class="ward-today-num" id="ward-today-mins">0</span><span class="ward-today-lbl">min today</span></div>
            <div class="ward-today-stat"><span class="ward-today-num" id="ward-streak-display">0</span><span class="ward-today-lbl">day streak</span></div>
          </div>

          <!-- Tier progress bar -->
          <div class="ward-progress-bar-wrap" style="width:100%;max-width:420px;">
            <div class="ward-progress-label">
              <span id="ward-tier-progress-label">Progress to next ward</span>
              <span id="ward-tier-progress-pct">0%</span>
            </div>
            <div class="ward-progress-bar-bg"><div class="ward-progress-bar-fill" id="ward-tier-progress-bar" style="width:0%"></div></div>
          </div>

        </div>
      </div><!-- /timer hero -->

      <!-- ═══ BOTTOM PANEL ═════════════════════════════════════ -->
      <div class="ward-bottom-panel">
        <div class="ward-panel-tabs">
          <button class="ward-panel-tab active" onclick="wardPanelTab('map')"          id="ward-ptab-map">🏥 Map</button>
          <button class="ward-panel-tab"        onclick="wardPanelTab('stats')"        id="ward-ptab-stats">📊 Stats</button>
          <button class="ward-panel-tab"        onclick="wardPanelTab('leaderboard')"  id="ward-ptab-leaderboard">🏆 Leaderboard</button>
          <button class="ward-panel-tab"        onclick="wardPanelTab('achievements')" id="ward-ptab-achievements">🏅 Badges</button>
          <button class="ward-panel-tab"        onclick="wardPanelTab('squad')"        id="ward-ptab-squad">👥 Study Together</button>
        </div>
        <div class="ward-panel-content">

          <!-- MAP -->
          <div class="ward-panel-section active" id="ward-section-map">
            <div class="ward-hospital-wrap">
              <svg id="ward-hospital-svg" viewBox="0 0 360 520" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="hg-gold" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffc000" stop-opacity="0.35"/><stop offset="100%" stop-color="#ffc000" stop-opacity="0"/></radialGradient>
                  <radialGradient id="hg-blue" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#4472c4" stop-opacity="0.3"/><stop offset="100%" stop-color="#4472c4" stop-opacity="0"/></radialGradient>
                  <radialGradient id="hg-red"  cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#e05c6e" stop-opacity="0.3"/><stop offset="100%" stop-color="#e05c6e" stop-opacity="0"/></radialGradient>
                  <radialGradient id="hg-green" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#2d9e57" stop-opacity="0.28"/><stop offset="100%" stop-color="#2d9e57" stop-opacity="0"/></radialGradient>
                  <radialGradient id="hg-purple" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#7a5aab" stop-opacity="0.28"/><stop offset="100%" stop-color="#7a5aab" stop-opacity="0"/></radialGradient>
                </defs>

                <!-- GROUND / ROAD -->
                <rect x="0" y="490" width="360" height="30" fill="rgba(20,30,55,0.8)" rx="0"/>
                <rect x="140" y="490" width="80" height="6" fill="rgba(68,114,196,0.25)" rx="2"/>
                <text x="180" y="512" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(140,170,220,0.3)" letter-spacing="2">ENTRANCE</text>

                <!-- RECEPTION — base of hospital -->
                <g id="hb-reception" class="hbuild">
                  <defs>
                    <!-- Base shell -->
                    <linearGradient id="rec-shell" x1="180" y1="430" x2="180" y2="496" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#14233A"/>
                      <stop offset="0.55" stop-color="#0E1A2C"/>
                      <stop offset="1" stop-color="#09111E"/>
                    </linearGradient>

                    <!-- Cyan neon edge -->
                    <linearGradient id="rec-edge" x1="102" y1="438" x2="258" y2="490" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#59D8FF"/>
                      <stop offset="0.5" stop-color="#8FF3FF"/>
                      <stop offset="1" stop-color="#4CA8FF"/>
                    </linearGradient>

                    <!-- Purple aura -->
                    <radialGradient id="rec-purple-aura" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(180 470) rotate(90) scale(54 108)">
                      <stop offset="0" stop-color="#7C5CFF" stop-opacity="0.24"/>
                      <stop offset="0.55" stop-color="#4E37B8" stop-opacity="0.12"/>
                      <stop offset="1" stop-color="#1A103D" stop-opacity="0"/>
                    </radialGradient>

                    <!-- Gold core -->
                    <radialGradient id="rec-gold-core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(180 466) rotate(90) scale(24 24)">
                      <stop offset="0" stop-color="#FFE39A" stop-opacity="0.95"/>
                      <stop offset="0.45" stop-color="#FFC857" stop-opacity="0.58"/>
                      <stop offset="1" stop-color="#FFC857" stop-opacity="0"/>
                    </radialGradient>

                    <!-- Cyan glass fill -->
                    <linearGradient id="rec-panel" x1="126" y1="446" x2="234" y2="478" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#17314B" stop-opacity="0.9"/>
                      <stop offset="1" stop-color="#102235" stop-opacity="0.9"/>
                    </linearGradient>

                    <!-- Roof beam -->
                    <linearGradient id="rec-roof" x1="122" y1="438" x2="238" y2="438" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#50CFFF"/>
                      <stop offset="0.5" stop-color="#A1F7FF"/>
                      <stop offset="1" stop-color="#50CFFF"/>
                    </linearGradient>

                    <!-- Gold door -->
                    <linearGradient id="rec-door" x1="171" y1="455" x2="189" y2="485" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#E9B96E"/>
                      <stop offset="1" stop-color="#8A5B33"/>
                    </linearGradient>

                    <!-- Ground glow -->
                    <radialGradient id="rec-ground" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(180 497) rotate(90) scale(18 78)">
                      <stop offset="0" stop-color="#3ACDFF" stop-opacity="0.32"/>
                      <stop offset="0.45" stop-color="#7C5CFF" stop-opacity="0.16"/>
                      <stop offset="1" stop-color="#3ACDFF" stop-opacity="0"/>
                    </radialGradient>

                    <!-- Filters -->
                    <filter id="rec-shadow" x="92" y="430" width="176" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#020713" flood-opacity="0.72"/>
                    </filter>

                    <filter id="rec-cyan-glow" x="112" y="432" width="136" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feGaussianBlur stdDeviation="3.2" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>

                    <filter id="rec-outer-neon" x="96" y="434" width="168" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feGaussianBlur stdDeviation="4.8" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>

                    <filter id="rec-gold-glow" x="161" y="449" width="38" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feGaussianBlur stdDeviation="3.8" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  <!-- ambient aura -->
                  <ellipse cx="180" cy="470" rx="108" ry="54" fill="url(#rec-purple-aura)"/>
                  <ellipse cx="180" cy="497" rx="78" ry="18" fill="url(#rec-ground)"/>

                  <!-- outer neon silhouette -->
                  <g filter="url(#rec-outer-neon)">
                    <rect x="102" y="440" width="156" height="52" rx="16" fill="none" stroke="url(#rec-edge)" stroke-opacity="0.18" stroke-width="2"/>
                  </g>

                  <!-- main building -->
                  <g filter="url(#rec-shadow)">
                    <rect x="102" y="440" width="156" height="52" rx="16" fill="url(#rec-shell)" stroke="url(#rec-edge)" stroke-opacity="0.42" stroke-width="1.4"/>

                    <!-- top beam -->
                    <rect x="122" y="437" width="116" height="6" rx="3" fill="url(#rec-roof)"/>
                    <rect x="122" y="437" width="116" height="6" rx="3" filter="url(#rec-cyan-glow)" fill="url(#rec-roof)" fill-opacity="0.62"/>

                    <!-- side pylons -->
                    <rect x="114" y="448" width="10" height="34" rx="5" fill="#0E2134" stroke="rgba(116,228,255,0.20)" stroke-width="1"/>
                    <rect x="236" y="448" width="10" height="34" rx="5" fill="#0E2134" stroke="rgba(116,228,255,0.20)" stroke-width="1"/>

                    <!-- central glass panel -->
                    <rect x="128" y="448" width="104" height="26" rx="10" fill="url(#rec-panel)" stroke="rgba(143,241,255,0.22)" stroke-width="1"/>

                    <!-- circuitry lines -->
                    <path d="M134 456H152" stroke="rgba(117,228,255,0.22)" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M208 456H226" stroke="rgba(117,228,255,0.22)" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M136 468H150" stroke="rgba(117,228,255,0.18)" stroke-width="1" stroke-linecap="round"/>
                    <path d="M210 468H224" stroke="rgba(117,228,255,0.18)" stroke-width="1" stroke-linecap="round"/>

                    <!-- lower platform -->
                    <rect x="146" y="475" width="68" height="4" rx="2" fill="rgba(67,176,255,0.16)"/>
                  </g>

                  <!-- active golden hub core -->
                  <ellipse cx="180" cy="466" rx="24" ry="24" fill="url(#rec-gold-core)"/>

                  <!-- main door -->
                  <g filter="url(#rec-gold-glow)">
                    <rect x="171" y="455" width="18" height="30" rx="4.5" fill="url(#rec-door)" stroke="rgba(255,231,171,0.40)" stroke-width="1"/>
                  </g>
                  <line x1="180" y1="456.5" x2="180" y2="483.5" stroke="rgba(255,241,214,0.22)" stroke-width="1"/>
                  <circle cx="184.8" cy="470" r="1.1" fill="#FFE5A8"/>

                  <!-- reception icon / terminal -->
                  <g transform="translate(152 452)">
                    <rect x="0" y="0" width="12" height="15" rx="2.8" fill="#10263A" stroke="rgba(130,238,255,0.22)" stroke-width="0.9"/>
                    <rect x="2.2" y="2.2" width="7.6" height="10.2" rx="1.6" fill="rgba(219,168,103,0.52)"/>
                    <path d="M3.8 6H8.4" stroke="rgba(255,232,200,0.28)" stroke-width="0.8" stroke-linecap="round"/>
                    <path d="M3.8 8.7H8.4" stroke="rgba(255,232,200,0.28)" stroke-width="0.8" stroke-linecap="round"/>
                  </g>

                  <!-- map connector stubs -->
                  <path d="M180 438V422" stroke="rgba(110,230,255,0.34)" stroke-width="1.4" stroke-linecap="round"/>
                  <path d="M102 466H88" stroke="rgba(110,230,255,0.22)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M258 466H272" stroke="rgba(110,230,255,0.22)" stroke-width="1.2" stroke-linecap="round"/>

                  <!-- label -->
                  <text x="180" y="463" text-anchor="middle" fill="#DDF5FF"
                        font-family="Inter, DM Sans, Arial, sans-serif"
                        font-size="8.2" font-weight="700" letter-spacing="0.25">
                    Reception
                  </text>
                  <text x="180" y="474" text-anchor="middle" fill="rgba(158,203,241,0.78)"
                        font-family="JetBrains Mono, monospace"
                        font-size="4.8" font-weight="500" letter-spacing="0.8">
                    ALWAYS OPEN
                  </text>
                </g>

                <!-- CASUALTY — left wing ground floor -->
                <g id="hb-casualty" class="hbuild locked">
                  <defs>
                    <!-- Base shell -->
                    <linearGradient id="cas-shell" x1="58" y1="314" x2="58" y2="390" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#18263D"/>
                      <stop offset="0.56" stop-color="#101A2D"/>
                      <stop offset="1" stop-color="#09111D"/>
                    </linearGradient>

                    <!-- Cyan edge -->
                    <linearGradient id="cas-edge" x1="-8" y1="320" x2="124" y2="388" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#58DAFF"/>
                      <stop offset="0.5" stop-color="#93F5FF"/>
                      <stop offset="1" stop-color="#519BFF"/>
                    </linearGradient>

                    <!-- Emergency amber-red accent -->
                    <linearGradient id="cas-alert" x1="22" y1="330" x2="96" y2="382" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#FFB45A"/>
                      <stop offset="0.52" stop-color="#FF7A59"/>
                      <stop offset="1" stop-color="#E14D56"/>
                    </linearGradient>

                    <!-- Purple aura -->
                    <radialGradient id="cas-purple-aura" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(58 360) rotate(90) scale(66 96)">
                      <stop offset="0" stop-color="#7D5CFF" stop-opacity="0.22"/>
                      <stop offset="0.56" stop-color="#4B35B6" stop-opacity="0.11"/>
                      <stop offset="1" stop-color="#1A103C" stop-opacity="0"/>
                    </radialGradient>

                    <!-- Alert glow -->
                    <radialGradient id="cas-alert-core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(20 364) rotate(0) scale(42 24)">
                      <stop offset="0" stop-color="#FFD18C" stop-opacity="0.72"/>
                      <stop offset="0.42" stop-color="#FF9A63" stop-opacity="0.34"/>
                      <stop offset="1" stop-color="#FF7A59" stop-opacity="0"/>
                    </radialGradient>

                    <!-- Cross glow -->
                    <radialGradient id="cas-cross-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(22 350) rotate(90) scale(22 22)">
                      <stop offset="0" stop-color="#FFD976" stop-opacity="0.9"/>
                      <stop offset="0.5" stop-color="#FFAF55" stop-opacity="0.42"/>
                      <stop offset="1" stop-color="#FFAF55" stop-opacity="0"/>
                    </radialGradient>

                    <!-- Glass panel -->
                    <linearGradient id="cas-panel" x1="16" y1="330" x2="94" y2="374" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#16314C" stop-opacity="0.88"/>
                      <stop offset="1" stop-color="#0F2135" stop-opacity="0.88"/>
                    </linearGradient>

                    <!-- Roof beam -->
                    <linearGradient id="cas-roof" x1="8" y1="322" x2="108" y2="322" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#50CFFF"/>
                      <stop offset="0.5" stop-color="#A4F8FF"/>
                      <stop offset="1" stop-color="#50CFFF"/>
                    </linearGradient>

                    <!-- Ground glow -->
                    <radialGradient id="cas-ground" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(58 394) rotate(90) scale(18 68)">
                      <stop offset="0" stop-color="#39D0FF" stop-opacity="0.28"/>
                      <stop offset="0.46" stop-color="#7C5CFF" stop-opacity="0.12"/>
                      <stop offset="1" stop-color="#39D0FF" stop-opacity="0"/>
                    </radialGradient>

                    <!-- Filters -->
                    <filter id="cas-shadow" x="-12" y="312" width="144" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#020713" flood-opacity="0.72"/>
                    </filter>

                    <filter id="cas-cyan-glow" x="0" y="316" width="116" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feGaussianBlur stdDeviation="3.2" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>

                    <filter id="cas-outer-neon" x="-6" y="318" width="128" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feGaussianBlur stdDeviation="4.8" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>

                    <filter id="cas-alert-glow" x="0" y="332" width="44" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feGaussianBlur stdDeviation="3.4" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  <!-- ambient aura -->
                  <ellipse cx="58" cy="360" rx="96" ry="66" fill="url(#cas-purple-aura)"/>
                  <ellipse cx="58" cy="394" rx="68" ry="18" fill="url(#cas-ground)"/>

                  <!-- left emergency aura -->
                  <ellipse cx="20" cy="364" rx="42" ry="24" fill="url(#cas-alert-core)"/>

                  <!-- outer silhouette -->
                  <g filter="url(#cas-outer-neon)">
                    <rect x="0" y="324" width="116" height="64" rx="16" fill="none" stroke="url(#cas-edge)" stroke-opacity="0.16" stroke-width="2"/>
                  </g>

                  <!-- main building -->
                  <g filter="url(#cas-shadow)">
                    <rect x="0" y="324" width="116" height="64" rx="16" fill="url(#cas-shell)" stroke="url(#cas-edge)" stroke-opacity="0.4" stroke-width="1.4"/>

                    <!-- roof beam -->
                    <rect x="8" y="321" width="100" height="6" rx="3" fill="url(#cas-roof)"/>
                    <rect x="8" y="321" width="100" height="6" rx="3" filter="url(#cas-cyan-glow)" fill="url(#cas-roof)" fill-opacity="0.62"/>

                    <!-- structural side rails -->
                    <rect x="8" y="336" width="9" height="38" rx="4.5" fill="#0C1D2F" stroke="rgba(118,228,255,0.18)" stroke-width="1"/>
                    <rect x="99" y="336" width="9" height="38" rx="4.5" fill="#0C1D2F" stroke="rgba(118,228,255,0.18)" stroke-width="1"/>

                    <!-- central glass -->
                    <rect x="18" y="336" width="78" height="30" rx="10" fill="url(#cas-panel)" stroke="rgba(144,241,255,0.2)" stroke-width="1"/>

                    <!-- lower platform -->
                    <rect x="28" y="370" width="58" height="4" rx="2" fill="rgba(64,177,255,0.14)"/>

                    <!-- subtle panel lines -->
                    <path d="M24 344H40" stroke="rgba(117,228,255,0.2)" stroke-width="1.1" stroke-linecap="round"/>
                    <path d="M74 344H90" stroke="rgba(117,228,255,0.2)" stroke-width="1.1" stroke-linecap="round"/>
                    <path d="M26 356H38" stroke="rgba(117,228,255,0.14)" stroke-width="1" stroke-linecap="round"/>
                    <path d="M78 356H90" stroke="rgba(117,228,255,0.14)" stroke-width="1" stroke-linecap="round"/>
                  </g>

                  <!-- emergency cross beacon -->
                  <ellipse cx="22" cy="350" rx="22" ry="22" fill="url(#cas-cross-glow)"/>
                  <g filter="url(#cas-alert-glow)">
                    <rect x="17.5" y="338" width="9" height="24" rx="3" fill="url(#cas-alert)"/>
                    <rect x="10" y="345.5" width="24" height="9" rx="3" fill="url(#cas-alert)"/>
                  </g>

                  <!-- medical node / signal panel -->
                  <circle cx="88" cy="350" r="6.5" fill="#0D2134" stroke="rgba(136,240,255,0.28)" stroke-width="1"/>
                  <circle cx="88" cy="350" r="2.2" fill="#8EF6FF"/>

                  <!-- map connector stub -->
                  <path d="M116 356H130" stroke="rgba(110,230,255,0.28)" stroke-width="1.2" stroke-linecap="round"/>

                  <!-- label -->
                  <text x="58" y="372" text-anchor="middle" fill="#E8F4FF"
                        font-family="Inter, DM Sans, Arial, sans-serif"
                        font-size="8.5" font-weight="700" letter-spacing="0.2">
                    Casualty
                  </text>
                  <text x="58" y="384" text-anchor="middle" fill="rgba(255,198,131,0.88)"
                        font-family="JetBrains Mono, monospace"
                        font-size="5.2" font-weight="600" letter-spacing="0.5">
                    1h
                  </text>
                </g>

                <!-- EMERGENCY — right wing ground floor -->
                <g id="hb-emergency" class="hbuild locked">
                  <defs>
                    <!-- Base shell -->
                    <linearGradient id="em-shell" x1="308" y1="300" x2="308" y2="388" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#182740"/>
                      <stop offset="0.54" stop-color="#101A2E"/>
                      <stop offset="1" stop-color="#09111D"/>
                    </linearGradient>

                    <!-- Cyan edge -->
                    <linearGradient id="em-edge" x1="236" y1="306" x2="380" y2="390" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#58DAFF"/>
                      <stop offset="0.5" stop-color="#96F6FF"/>
                      <stop offset="1" stop-color="#4F9EFF"/>
                    </linearGradient>

                    <!-- Emergency alert accent -->
                    <linearGradient id="em-alert" x1="268" y1="326" x2="350" y2="382" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#FFC46B"/>
                      <stop offset="0.46" stop-color="#FF8D5B"/>
                      <stop offset="1" stop-color="#E54A55"/>
                    </linearGradient>

                    <!-- Purple aura -->
                    <radialGradient id="em-purple-aura" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(308 352) rotate(90) scale(74 110)">
                      <stop offset="0" stop-color="#7E5DFF" stop-opacity="0.22"/>
                      <stop offset="0.55" stop-color="#4A35B6" stop-opacity="0.11"/>
                      <stop offset="1" stop-color="#1A103C" stop-opacity="0"/>
                    </radialGradient>

                    <!-- Alert core -->
                    <radialGradient id="em-alert-core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(308 352) rotate(90) scale(28 40)">
                      <stop offset="0" stop-color="#FFE09D" stop-opacity="0.92"/>
                      <stop offset="0.42" stop-color="#FFB05A" stop-opacity="0.46"/>
                      <stop offset="1" stop-color="#FF7B59" stop-opacity="0"/>
                    </radialGradient>

                    <!-- Ground glow -->
                    <radialGradient id="em-ground" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(308 394) rotate(90) scale(18 74)">
                      <stop offset="0" stop-color="#38D0FF" stop-opacity="0.28"/>
                      <stop offset="0.46" stop-color="#7E5DFF" stop-opacity="0.12"/>
                      <stop offset="1" stop-color="#38D0FF" stop-opacity="0"/>
                    </radialGradient>

                    <!-- Glass panel -->
                    <linearGradient id="em-panel" x1="256" y1="328" x2="360" y2="374" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#16314C" stop-opacity="0.9"/>
                      <stop offset="1" stop-color="#0E2135" stop-opacity="0.9"/>
                    </linearGradient>

                    <!-- Roof beam -->
                    <linearGradient id="em-roof" x1="250" y1="320" x2="366" y2="320" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#52D1FF"/>
                      <stop offset="0.5" stop-color="#A8F9FF"/>
                      <stop offset="1" stop-color="#52D1FF"/>
                    </linearGradient>

                    <!-- Beacon strip -->
                    <linearGradient id="em-beacon" x1="280" y1="318" x2="336" y2="318" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#FFD06C"/>
                      <stop offset="0.5" stop-color="#FF9060"/>
                      <stop offset="1" stop-color="#FFD06C"/>
                    </linearGradient>

                    <!-- Filters -->
                    <filter id="em-shadow" x="230" y="300" width="156" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feDropShadow dx="0" dy="9" stdDeviation="8" flood-color="#020713" flood-opacity="0.74"/>
                    </filter>

                    <filter id="em-cyan-glow" x="242" y="314" width="132" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feGaussianBlur stdDeviation="3.2" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>

                    <filter id="em-outer-neon" x="234" y="306" width="148" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feGaussianBlur stdDeviation="4.8" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>

                    <filter id="em-alert-glow" x="286" y="330" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feGaussianBlur stdDeviation="3.8" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  <!-- ambient aura -->
                  <ellipse cx="308" cy="352" rx="110" ry="74" fill="url(#em-purple-aura)"/>
                  <ellipse cx="308" cy="394" rx="74" ry="18" fill="url(#em-ground)"/>

                  <!-- outer silhouette -->
                  <g filter="url(#em-outer-neon)">
                    <path
                      d="M246 322
                         H370
                         C375.523 322 380 326.477 380 332
                         V382
                         C380 387.523 375.523 392 370 392
                         H246
                         C240.477 392 236 387.523 236 382
                         V340
                         C236 334.477 240.477 330 246 330
                         H250
                         V326
                         C250 323.791 251.791 322 254 322
                         Z"
                      fill="none"
                      stroke="url(#em-edge)"
                      stroke-opacity="0.16"
                      stroke-width="2"/>
                  </g>

                  <!-- main building -->
                  <g filter="url(#em-shadow)">
                    <path
                      d="M246 322
                         H370
                         C375.523 322 380 326.477 380 332
                         V382
                         C380 387.523 375.523 392 370 392
                         H246
                         C240.477 392 236 387.523 236 382
                         V340
                         C236 334.477 240.477 330 246 330
                         H250
                         V326
                         C250 323.791 251.791 322 254 322
                         Z"
                      fill="url(#em-shell)"
                      stroke="url(#em-edge)"
                      stroke-opacity="0.42"
                      stroke-width="1.4"/>

                    <!-- cyan roof beam -->
                    <rect x="250" y="319" width="116" height="6" rx="3" fill="url(#em-roof)"/>
                    <rect x="250" y="319" width="116" height="6" rx="3" filter="url(#em-cyan-glow)" fill="url(#em-roof)" fill-opacity="0.62"/>

                    <!-- emergency beacon -->
                    <rect x="281" y="315" width="54" height="4" rx="2" fill="url(#em-beacon)"/>

                    <!-- side pylons -->
                    <rect x="248" y="336" width="10" height="42" rx="5" fill="#0C1D2F" stroke="rgba(118,228,255,0.18)" stroke-width="1"/>
                    <rect x="358" y="336" width="10" height="42" rx="5" fill="#0C1D2F" stroke="rgba(118,228,255,0.18)" stroke-width="1"/>

                    <!-- central glass -->
                    <rect x="260" y="336" width="96" height="32" rx="10" fill="url(#em-panel)" stroke="rgba(144,241,255,0.2)" stroke-width="1"/>

                    <!-- lower platform -->
                    <rect x="270" y="372" width="76" height="4" rx="2" fill="rgba(64,177,255,0.14)"/>

                    <!-- circuit accents -->
                    <path d="M268 344H286" stroke="rgba(117,228,255,0.2)" stroke-width="1.1" stroke-linecap="round"/>
                    <path d="M330 344H348" stroke="rgba(117,228,255,0.2)" stroke-width="1.1" stroke-linecap="round"/>
                    <path d="M270 357H282" stroke="rgba(117,228,255,0.14)" stroke-width="1" stroke-linecap="round"/>
                    <path d="M334 357H346" stroke="rgba(117,228,255,0.14)" stroke-width="1" stroke-linecap="round"/>
                  </g>

                  <!-- central alert core -->
                  <ellipse cx="308" cy="352" rx="28" ry="40" fill="url(#em-alert-core)"/>

                  <!-- emergency icon -->
                  <g filter="url(#em-alert-glow)">
                    <rect x="303.5" y="337" width="9" height="30" rx="3" fill="url(#em-alert)"/>
                    <rect x="293" y="347.5" width="30" height="9" rx="3" fill="url(#em-alert)"/>
                  </g>

                  <!-- side monitoring nodes -->
                  <circle cx="274" cy="352" r="6.5" fill="#0D2134" stroke="rgba(136,240,255,0.28)" stroke-width="1"/>
                  <circle cx="274" cy="352" r="2.2" fill="#8EF6FF"/>

                  <circle cx="342" cy="352" r="6.5" fill="#0D2134" stroke="rgba(136,240,255,0.28)" stroke-width="1"/>
                  <circle cx="342" cy="352" r="2.2" fill="#8EF6FF"/>

                  <!-- connector stubs -->
                  <path d="M236 358H222" stroke="rgba(110,230,255,0.26)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M380 358H394" stroke="rgba(110,230,255,0.30)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M308 322V308" stroke="rgba(110,230,255,0.30)" stroke-width="1.2" stroke-linecap="round"/>

                  <!-- label -->
                  <text x="308" y="382" text-anchor="middle" fill="#EAF6FF"
                        font-family="Inter, DM Sans, Arial, sans-serif"
                        font-size="8.6" font-weight="700" letter-spacing="0.22">
                    Emergency
                  </text>
                  <text x="308" y="394" text-anchor="middle" fill="rgba(255,198,131,0.90)"
                        font-family="JetBrains Mono, monospace"
                        font-size="5.2" font-weight="600" letter-spacing="0.5">
                    2h
                  </text>
                </g>

                <!-- CONNECTING CORRIDORS ground -->
                <rect x="108" y="445" width="52" height="8" fill="rgba(68,114,196,0.15)" rx="2"/>
                <rect x="200" y="445" width="52" height="8" fill="rgba(68,114,196,0.15)" rx="2"/>

                <!-- MAIN BUILDING BODY — floor 1 -->
                <g class="hbuild locked" id="hb-general">
                  <rect x="80" y="360" width="200" height="45" rx="4" fill="rgba(91,155,213,0.35)" stroke="rgba(91,155,213,0.55)" stroke-width="1.2"/>
                  <!-- windows -->
                  <rect x="95"  y="370" width="14" height="10" rx="2" fill="rgba(91,155,213,0.3)" stroke="rgba(91,155,213,0.4)" stroke-width="0.8"/>
                  <rect x="115" y="370" width="14" height="10" rx="2" fill="rgba(91,155,213,0.3)" stroke="rgba(91,155,213,0.4)" stroke-width="0.8"/>
                  <rect x="231" y="370" width="14" height="10" rx="2" fill="rgba(91,155,213,0.3)" stroke="rgba(91,155,213,0.4)" stroke-width="0.8"/>
                  <rect x="251" y="370" width="14" height="10" rx="2" fill="rgba(91,155,213,0.3)" stroke="rgba(91,155,213,0.4)" stroke-width="0.8"/>
                  <text x="180" y="378" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(200,218,240,0.7)">🏥 General Ward</text>
                  <text x="180" y="390" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">4h</text>
                </g>

                <!-- FLOOR 2: PAEDS left + CARDIOLOGY right -->
                <g class="hbuild locked" id="hb-paeds">
                  <rect x="80" y="318" width="92" height="40" rx="4" fill="rgba(255,192,0,0.3)" stroke="rgba(255,192,0,0.5)" stroke-width="1.2"/>
                  <text x="126" y="334" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(255,192,0,0.85)">👶</text>
                  <text x="126" y="346" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7" font-weight="700" fill="rgba(200,218,240,0.7)">Paediatrics</text>
                  <text x="126" y="355" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">8h</text>
                </g>
                <g class="hbuild locked" id="hb-cardiology">
                  <rect x="188" y="318" width="92" height="40" rx="4" fill="rgba(224,92,110,0.3)" stroke="rgba(224,92,110,0.5)" stroke-width="1.2"/>
                  <text x="234" y="334" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(224,92,110,0.85)">🫀</text>
                  <text x="234" y="346" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7" font-weight="700" fill="rgba(200,218,240,0.7)">Cardiology</text>
                  <text x="234" y="355" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">16h</text>
                </g>

                <!-- FLOOR 3: NEUROLOGY full width -->
                <g class="hbuild locked" id="hb-neurology">
                  <rect x="80" y="277" width="200" height="38" rx="4" fill="rgba(122,90,171,0.35)" stroke="rgba(122,90,171,0.55)" stroke-width="1.2"/>
                  <text x="180" y="292" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(200,218,240,0.75)">🧠 Neurology</text>
                  <text x="180" y="304" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">30h</text>
                  <rect x="95" y="284" width="10" height="8" rx="1.5" fill="rgba(122,90,171,0.3)" stroke="rgba(122,90,171,0.4)" stroke-width="0.8"/>
                  <rect x="111" y="284" width="10" height="8" rx="1.5" fill="rgba(122,90,171,0.3)" stroke="rgba(122,90,171,0.4)" stroke-width="0.8"/>
                  <rect x="239" y="284" width="10" height="8" rx="1.5" fill="rgba(122,90,171,0.3)" stroke="rgba(122,90,171,0.4)" stroke-width="0.8"/>
                  <rect x="255" y="284" width="10" height="8" rx="1.5" fill="rgba(122,90,171,0.3)" stroke="rgba(122,90,171,0.4)" stroke-width="0.8"/>
                </g>

                <!-- FLOOR 4: ONCOLOGY left + ICU right -->
                <g class="hbuild locked" id="hb-oncology">
                  <rect x="80" y="238" width="92" height="36" rx="4" fill="rgba(45,158,87,0.3)" stroke="rgba(45,158,87,0.5)" stroke-width="1.2"/>
                  <text x="126" y="252" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(45,158,87,0.85)">🔬</text>
                  <text x="126" y="263" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7" font-weight="700" fill="rgba(200,218,240,0.7)">Oncology</text>
                  <text x="126" y="271" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">50h</text>
                </g>
                <g class="hbuild locked" id="hb-icu">
                  <rect x="188" y="238" width="92" height="36" rx="4" fill="rgba(68,114,196,0.35)" stroke="rgba(68,114,196,0.55)" stroke-width="1.2"/>
                  <text x="234" y="252" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(68,114,196,0.9)">💉</text>
                  <text x="234" y="263" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7" font-weight="700" fill="rgba(200,218,240,0.7)">ICU</text>
                  <text x="234" y="271" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">75h</text>
                </g>

                <!-- FLOOR 5: SURGERY full width -->
                <g class="hbuild locked" id="hb-surgery">
                  <rect x="80" y="198" width="200" height="37" rx="4" fill="rgba(68,84,106,0.4)" stroke="rgba(68,84,106,0.6)" stroke-width="1.2"/>
                  <text x="180" y="213" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(200,218,240,0.75)">🔪 Surgery</text>
                  <text x="180" y="225" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">100h</text>
                  <rect x="95"  y="205" width="10" height="8" rx="1.5" fill="rgba(68,84,106,0.5)" stroke="rgba(68,84,106,0.6)" stroke-width="0.8"/>
                  <rect x="251" y="205" width="10" height="8" rx="1.5" fill="rgba(68,84,106,0.5)" stroke="rgba(68,84,106,0.6)" stroke-width="0.8"/>
                </g>

                <!-- FLOOR 6: RADIOLOGY left + PSYCHIATRY right -->
                <g class="hbuild locked" id="hb-radiology">
                  <rect x="80" y="160" width="92" height="35" rx="4" fill="rgba(91,155,213,0.3)" stroke="rgba(91,155,213,0.5)" stroke-width="1.2"/>
                  <text x="126" y="174" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(91,155,213,0.85)">☢️</text>
                  <text x="126" y="184" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7" font-weight="700" fill="rgba(200,218,240,0.7)">Radiology</text>
                  <text x="126" y="192" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">150h</text>
                </g>
                <g class="hbuild locked" id="hb-psychiatry">
                  <rect x="188" y="160" width="92" height="35" rx="4" fill="rgba(122,90,171,0.3)" stroke="rgba(122,90,171,0.5)" stroke-width="1.2"/>
                  <text x="234" y="174" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(122,90,171,0.85)">🧘</text>
                  <text x="234" y="184" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7" font-weight="700" fill="rgba(200,218,240,0.7)">Psychiatry</text>
                  <text x="234" y="192" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">200h</text>
                </g>

                <!-- FLOOR 7: OPD full width -->
                <g class="hbuild locked" id="hb-opd">
                  <rect x="80" y="122" width="200" height="35" rx="4" fill="rgba(237,125,49,0.3)" stroke="rgba(237,125,49,0.5)" stroke-width="1.2"/>
                  <text x="180" y="136" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(200,218,240,0.75)">🏗️ OPD</text>
                  <text x="180" y="148" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">300h</text>
                </g>

                <!-- FLOOR 8: RESEARCH left + SENIOR_REG right -->
                <g class="hbuild locked" id="hb-research">
                  <rect x="80" y="86" width="92" height="33" rx="4" fill="rgba(255,192,0,0.25)" stroke="rgba(255,192,0,0.45)" stroke-width="1.2"/>
                  <text x="126" y="99" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(255,192,0,0.85)">⚗️</text>
                  <text x="126" y="109" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="6.5" font-weight="700" fill="rgba(200,218,240,0.7)">Research</text>
                  <text x="126" y="116" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">400h</text>
                </g>
                <g class="hbuild locked" id="hb-senior_reg">
                  <rect x="188" y="86" width="92" height="33" rx="4" fill="rgba(68,114,196,0.28)" stroke="rgba(68,114,196,0.5)" stroke-width="1.2"/>
                  <text x="234" y="99" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(68,114,196,0.9)">👨‍⚕️</text>
                  <text x="234" y="109" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="6" font-weight="700" fill="rgba(200,218,240,0.7)">Sr. Registrar</text>
                  <text x="234" y="116" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">500h</text>
                </g>

                <!-- PENTHOUSE: CONSULTANT -->
                <g class="hbuild locked" id="hb-consultant">
                  <rect x="100" y="50" width="160" height="33" rx="4" fill="rgba(255,192,0,0.28)" stroke="rgba(255,192,0,0.5)" stroke-width="1.4"/>
                  <text x="180" y="64" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(255,192,0,0.9)">🏆 Consultant</text>
                  <text x="180" y="76" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">750h</text>
                </g>

                <!-- ROOF / CROWN: CHIEF -->
                <g class="hbuild locked" id="hb-chief">
                  <polygon points="180,4 220,48 140,48" fill="rgba(255,192,0,0.22)" stroke="rgba(255,192,0,0.6)" stroke-width="1.5"/>
                  <text x="180" y="36" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="9" font-weight="700" fill="rgba(255,192,0,0.85)">👑</text>
                  <text x="180" y="47" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5" fill="rgba(140,170,220,0.35)">1000h</text>
                </g>

                <!-- Structural lines connecting floors -->
                <line x1="100" y1="440" x2="100" y2="50"  stroke="rgba(68,114,196,0.08)" stroke-width="1"/>
                <line x1="260" y1="440" x2="260" y2="50"  stroke="rgba(68,114,196,0.08)" stroke-width="1"/>
              </svg>
            </div>
          </div>

          <!-- STATS -->
          <div class="ward-panel-section" id="ward-section-stats">
            <span class="ward-section-h">Personal Stats</span>
            <div class="ward-stats-grid" id="ward-stats-grid"></div>
            <span class="ward-section-h" style="margin-top:0.9rem;">Last 7 Days</span>
            <div class="ward-activity-bars" id="ward-activity-bars"></div>
            <span class="ward-section-h" style="margin-top:0.9rem;">Most Active Hours</span>
            <div class="ward-activity-bars" id="ward-hourly-bars" style="height:38px;"></div>
          </div>

          <!-- LEADERBOARD -->
          <div class="ward-panel-section" id="ward-section-leaderboard">
            <div class="ward-lb-tabs">
              <button class="ward-lb-tab active" onclick="wardLbTab('overall')"  id="ward-lbtab-overall">Overall</button>
              <button class="ward-lb-tab"        onclick="wardLbTab('weekly')"   id="ward-lbtab-weekly">Weekly</button>
              <button class="ward-lb-tab"        onclick="wardLbTab('friends')"  id="ward-lbtab-friends">Friends</button>
              <button class="ward-lb-tab"        onclick="wardLbTab('room')"     id="ward-lbtab-room">Room</button>
            </div>
            <div id="ward-lb-add-friend" style="display:none;margin-bottom:0.7rem;">
              <div class="ward-add-friend">
                <input class="ward-friend-input" id="ward-lb-friend-input" placeholder="Add friend by username" maxlength="14"/>
                <button class="ward-friend-add-btn" onclick="wardLbAddFriend()">+ Add</button>
              </div>
            </div>
            <div id="ward-lb-list"></div>
          </div>

          <!-- BADGES -->
          <div class="ward-panel-section" id="ward-section-achievements">
            <span class="ward-section-h">Milestone Badges</span>
            <div class="ward-badge-grid" id="ward-badge-grid"></div>
          </div>

          <!-- SQUAD -->
          <div class="ward-panel-section" id="ward-section-squad">
            <div id="ward-squad-lobby">
              <span class="ward-section-h">Study Room</span>
              <input class="ward-field-input" id="ward-squad-name-input" placeholder="Display name" maxlength="20" style="margin-bottom:0.5rem;"/>
              <button class="ward-auth-submit" onclick="wardCreateRoom()" style="margin-bottom:0.45rem;font-size:0.82rem;padding:0.6rem;">🏥 Create a Room</button>
              <div style="text-align:center;font-size:0.68rem;color:rgba(140,170,220,0.28);margin:0.3rem 0;">— or —</div>
              <input class="ward-field-input" id="ward-squad-join-input" placeholder="Room code e.g. TIBIA-42" maxlength="12" style="text-transform:uppercase;margin-bottom:0.45rem;"/>
              <button class="ward-auth-submit" style="background:linear-gradient(135deg,rgba(255,192,0,0.18),rgba(255,192,0,0.09));border-color:rgba(255,192,0,0.28);color:#ffd966;font-size:0.82rem;padding:0.6rem;" onclick="wardJoinRoom()">🔑 Join Room</button>
              <div class="ward-status-msg" id="ward-status-msg">No room active.</div>
            </div>
            <div id="ward-squad-room" style="display:none;">
              <div class="ward-squad-section-title">Active Room</div>
              <div class="ward-squad-room-code" id="ward-squad-room-code"></div>
              <div id="ward-members-list" style="margin-bottom:0.9rem;"></div>
              <button class="ward-top-btn ward-btn-logout" style="width:100%;justify-content:center;" onclick="wardLeaveRoom()">✕ Leave Room</button>
            </div>
            <div style="margin-top:1.4rem;">
              <span class="ward-section-h">Friends</span>
              <div class="ward-add-friend">
                <input class="ward-friend-input" id="ward-friend-input" placeholder="Enter username" maxlength="14"/>
                <button class="ward-friend-add-btn" onclick="wardAddFriend()">+ Add</button>
              </div>
              <div id="ward-friends-list"></div>
            </div>
          </div>

        </div><!-- /panel-content -->
      </div><!-- /bottom panel -->

    </div><!-- /main -->

    <section class="home-suggestions-section" style="margin-top:auto;">
      <div class="home-suggestions-inner">
        <h3 class="home-sug-title">🐛 Is something not working?</h3>
        <p class="home-sug-sub">Tell us here — we read every message and fix things fast.</p>
        <div class="home-sug-form">
          <textarea class="home-sug-textarea" id="suggest-ward" placeholder="Describe the issue or share feedback about The Ward…"></textarea>
          <button class="home-sug-btn" onclick="sendSuggestion('suggest-ward','success-ward','The Ward')">Send Report</button>
          <div class="suggestions-success" id="success-ward">✅ Thanks! Your message has been sent to the Discord channel.</div>
        </div>
      </div>
    </section>

    <footer class="blossom-footer" style="position:relative;z-index:2;margin-top:0;">
      <div style="display:flex;align-items:center;gap:0.85rem;">
        <span>Focus together. Pass together.</span>
        <a href="https://discord.gg/eKevY6F2pa" target="_blank" class="blossom-footer-link">Join Discord ↗</a>
      </div>
      <span style="font-size:0.72rem;opacity:0.38;font-family:'DM Sans',sans-serif;">Made with 🩵 by 0SirAwesome · v0.5.9</span>
    </footer>
  </div><!-- /app -->

</div>
</div>
<!-- ══════════════════════ /THE WARD ══════════════════════════ -->
`);

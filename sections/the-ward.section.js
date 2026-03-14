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
        <button onclick="navDiscordLogin()" style="padding:0.55rem 1.4rem;border-radius:99px;background:rgba(88,101,242,0.16);border:1px solid rgba(88,101,242,0.35);color:#c8d2ff;font-family:'DM Sans',sans-serif;font-size:0.85rem;font-weight:700;cursor:pointer;transition:all 0.2s;">Discord</button>
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
              <svg id="ward-hospital-svg" viewBox="-24 -650 438 1174" xmlns="http://www.w3.org/2000/svg">
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
                  <defs>
    <!-- Base shell -->
    <linearGradient id="gen-shell" x1="180" y1="210" x2="180" y2="304" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182A43"/>
      <stop offset="0.56" stop-color="#101B2F"/>
      <stop offset="1" stop-color="#09121E"/>
    </linearGradient>

    <!-- Cyan-blue perimeter -->
    <linearGradient id="gen-edge" x1="88" y1="218" x2="272" y2="304" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#56D9FF"/>
      <stop offset="0.5" stop-color="#99F5FF"/>
      <stop offset="1" stop-color="#538FFF"/>
    </linearGradient>

    <!-- Healing accent -->
    <linearGradient id="gen-heal" x1="138" y1="236" x2="222" y2="284" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#72E4FF"/>
      <stop offset="0.55" stop-color="#59B8FF"/>
      <stop offset="1" stop-color="#7C7DFF"/>
    </linearGradient>

    <!-- Purple aura -->
    <radialGradient id="gen-purple-aura" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 262) rotate(90) scale(76 124)">
      <stop offset="0" stop-color="#7E5DFF" stop-opacity="0.22"/>
      <stop offset="0.55" stop-color="#4A35B6" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#1A103C" stop-opacity="0"/>
    </radialGradient>

    <!-- Central calm core -->
    <radialGradient id="gen-core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 255) rotate(90) scale(30 42)">
      <stop offset="0" stop-color="#D9F7FF" stop-opacity="0.72"/>
      <stop offset="0.48" stop-color="#7BD9FF" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#59A9FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="gen-ground" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 306) rotate(90) scale(18 86)">
      <stop offset="0" stop-color="#39D0FF" stop-opacity="0.28"/>
      <stop offset="0.46" stop-color="#7E5DFF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#39D0FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="gen-panel" x1="114" y1="236" x2="246" y2="286" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#16334F" stop-opacity="0.90"/>
      <stop offset="1" stop-color="#0F2236" stop-opacity="0.90"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="gen-roof" x1="106" y1="228" x2="254" y2="228" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#52D1FF"/>
      <stop offset="0.5" stop-color="#A7F8FF"/>
      <stop offset="1" stop-color="#52D1FF"/>
    </linearGradient>

    <!-- Upper healing strip -->
    <linearGradient id="gen-strip" x1="142" y1="224" x2="218" y2="224" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#7BE7FF"/>
      <stop offset="0.5" stop-color="#A8F8FF"/>
      <stop offset="1" stop-color="#7BE7FF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="gen-shadow" x="84" y="210" width="192" height="110" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="9" stdDeviation="8" flood-color="#020713" flood-opacity="0.74"/>
    </filter>

    <filter id="gen-cyan-glow" x="98" y="223" width="164" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="gen-outer-neon" x="86" y="216" width="188" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="4.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="gen-core-glow" x="156" y="231" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient aura -->
  <ellipse cx="180" cy="262" rx="124" ry="76" fill="url(#gen-purple-aura)"/>
  <ellipse cx="180" cy="306" rx="86" ry="18" fill="url(#gen-ground)"/>

  <!-- outer silhouette -->
  <g filter="url(#gen-outer-neon)">
    <path
      d="M102 232
         H258
         C265.732 232 272 238.268 272 246
         V288
         C272 295.732 265.732 302 258 302
         H102
         C94.268 302 88 295.732 88 288
         V246
         C88 238.268 94.268 232 102 232
         Z"
      fill="none"
      stroke="url(#gen-edge)"
      stroke-opacity="0.16"
      stroke-width="2"/>
  </g>

  <!-- main building -->
  <g filter="url(#gen-shadow)">
    <path
      d="M102 232
         H258
         C265.732 232 272 238.268 272 246
         V288
         C272 295.732 265.732 302 258 302
         H102
         C94.268 302 88 295.732 88 288
         V246
         C88 238.268 94.268 232 102 232
         Z"
      fill="url(#gen-shell)"
      stroke="url(#gen-edge)"
      stroke-opacity="0.42"
      stroke-width="1.4"/>

    <!-- roof beam -->
    <rect x="106" y="229" width="148" height="6" rx="3" fill="url(#gen-roof)"/>
    <rect x="106" y="229" width="148" height="6" rx="3" filter="url(#gen-cyan-glow)" fill="url(#gen-roof)" fill-opacity="0.62"/>

    <!-- top strip -->
    <rect x="142" y="224" width="76" height="3.5" rx="1.75" fill="url(#gen-strip)"/>

    <!-- side pylons -->
    <rect x="102" y="244" width="11" height="40" rx="5.5" fill="#0C1D2F" stroke="rgba(118,228,255,0.18)" stroke-width="1"/>
    <rect x="247" y="244" width="11" height="40" rx="5.5" fill="#0C1D2F" stroke="rgba(118,228,255,0.18)" stroke-width="1"/>

    <!-- central glass -->
    <rect x="118" y="242" width="124" height="36" rx="11" fill="url(#gen-panel)" stroke="rgba(144,241,255,0.20)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="132" y="282" width="96" height="4" rx="2" fill="rgba(64,177,255,0.14)"/>

    <!-- ward window bands -->
    <path d="M128 250H154" stroke="rgba(117,228,255,0.20)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M206 250H232" stroke="rgba(117,228,255,0.20)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M130 264H150" stroke="rgba(117,228,255,0.14)" stroke-width="1" stroke-linecap="round"/>
    <path d="M210 264H230" stroke="rgba(117,228,255,0.14)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- central healing core -->
  <ellipse cx="180" cy="255" rx="30" ry="42" fill="url(#gen-core)"/>

  <!-- ward icon -->
  <g filter="url(#gen-core-glow)">
    <rect x="175.5" y="241" width="9" height="28" rx="3" fill="url(#gen-heal)"/>
    <rect x="166" y="250.5" width="28" height="9" rx="3" fill="url(#gen-heal)"/>
  </g>

  <!-- side monitoring nodes -->
  <circle cx="142" cy="258" r="6.5" fill="#0D2134" stroke="rgba(136,240,255,0.28)" stroke-width="1"/>
  <circle cx="142" cy="258" r="2.2" fill="#8EF6FF"/>

  <circle cx="218" cy="258" r="6.5" fill="#0D2134" stroke="rgba(136,240,255,0.28)" stroke-width="1"/>
  <circle cx="218" cy="258" r="2.2" fill="#8EF6FF"/>

  <!-- connector stubs -->
  <path d="M88 266H74" stroke="rgba(110,230,255,0.26)" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M272 266H286" stroke="rgba(110,230,255,0.30)" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M180 232V218" stroke="rgba(110,230,255,0.30)" stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="180" y="292" text-anchor="middle" fill="#EAF6FF"
        font-family="Inter, DM Sans, Arial, sans-serif"
        font-size="8.6" font-weight="700" letter-spacing="0.22">
    General Ward
  </text>
  <text x="180" y="304" text-anchor="middle" fill="rgba(149,223,255,0.92)"
        font-family="JetBrains Mono, monospace"
        font-size="5.2" font-weight="600" letter-spacing="0.5">
    4h
  </text>
                </g>

                <!-- FLOOR 2: PAEDS left + CARDIOLOGY right -->
                <g class="hbuild locked" id="hb-paeds">
                  <defs>
    <!-- Base shell -->
    <linearGradient id="paeds-shell" x1="72" y1="122" x2="72" y2="214" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1A2942"/>
      <stop offset="0.56" stop-color="#111C30"/>
      <stop offset="1" stop-color="#09121E"/>
    </linearGradient>

    <!-- Cyan-lilac perimeter -->
    <linearGradient id="paeds-edge" x1="-4" y1="130" x2="148" y2="214" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#63DDFF"/>
      <stop offset="0.46" stop-color="#ADF7FF"/>
      <stop offset="1" stop-color="#9A8CFF"/>
    </linearGradient>

    <!-- Soft specialty accent -->
    <linearGradient id="paeds-accent" x1="38" y1="146" x2="106" y2="190" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8DEBFF"/>
      <stop offset="0.55" stop-color="#79C9FF"/>
      <stop offset="1" stop-color="#B78CFF"/>
    </linearGradient>

    <!-- Purple aura -->
    <radialGradient id="paeds-purple-aura" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 172) rotate(90) scale(72 106)">
      <stop offset="0" stop-color="#8A6BFF" stop-opacity="0.22"/>
      <stop offset="0.55" stop-color="#5A41C6" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#1A103C" stop-opacity="0"/>
    </radialGradient>

    <!-- Gentle core -->
    <radialGradient id="paeds-core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 166) rotate(90) scale(28 40)">
      <stop offset="0" stop-color="#EFFBFF" stop-opacity="0.74"/>
      <stop offset="0.46" stop-color="#9AE9FF" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#8F96FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="paeds-ground" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 216) rotate(90) scale(18 72)">
      <stop offset="0" stop-color="#42D2FF" stop-opacity="0.28"/>
      <stop offset="0.48" stop-color="#9A7DFF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#42D2FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="paeds-panel" x1="18" y1="148" x2="126" y2="194" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#183550" stop-opacity="0.90"/>
      <stop offset="1" stop-color="#102338" stop-opacity="0.90"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="paeds-roof" x1="10" y1="140" x2="134" y2="140" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#5DD4FF"/>
      <stop offset="0.5" stop-color="#C1F8FF"/>
      <stop offset="1" stop-color="#8E94FF"/>
    </linearGradient>

    <!-- Soft beacon strip -->
    <linearGradient id="paeds-strip" x1="42" y1="136" x2="102" y2="136" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#A4EEFF"/>
      <stop offset="0.5" stop-color="#E0F8FF"/>
      <stop offset="1" stop-color="#B492FF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="paeds-shadow" x="-8" y="122" width="160" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="9" stdDeviation="8" flood-color="#020713" flood-opacity="0.74"/>
    </filter>

    <filter id="paeds-cyan-glow" x="2" y="134" width="140" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="paeds-outer-neon" x="-6" y="128" width="156" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="4.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="paeds-core-glow" x="50" y="144" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient aura -->
  <ellipse cx="72" cy="172" rx="106" ry="72" fill="url(#paeds-purple-aura)"/>
  <ellipse cx="72" cy="216" rx="72" ry="18" fill="url(#paeds-ground)"/>

  <!-- outer silhouette -->
  <g filter="url(#paeds-outer-neon)">
    <path
      d="M18 144
         H126
         C135.941 144 144 152.059 144 162
         V198
         C144 207.941 135.941 216 126 216
         H18
         C8.059 216 0 207.941 0 198
         V162
         C0 152.059 8.059 144 18 144
         Z"
      fill="none"
      stroke="url(#paeds-edge)"
      stroke-opacity="0.16"
      stroke-width="2"/>
  </g>

  <!-- main building -->
  <g filter="url(#paeds-shadow)">
    <path
      d="M18 144
         H126
         C135.941 144 144 152.059 144 162
         V198
         C144 207.941 135.941 216 126 216
         H18
         C8.059 216 0 207.941 0 198
         V162
         C0 152.059 8.059 144 18 144
         Z"
      fill="url(#paeds-shell)"
      stroke="url(#paeds-edge)"
      stroke-opacity="0.42"
      stroke-width="1.4"/>

    <!-- roof beam -->
    <rect x="10" y="141" width="124" height="6" rx="3" fill="url(#paeds-roof)"/>
    <rect x="10" y="141" width="124" height="6" rx="3" filter="url(#paeds-cyan-glow)" fill="url(#paeds-roof)" fill-opacity="0.62"/>

    <!-- upper strip -->
    <rect x="42" y="136" width="60" height="3.5" rx="1.75" fill="url(#paeds-strip)"/>

    <!-- side pylons -->
    <rect x="14" y="154" width="10" height="38" rx="5" fill="#0C1E31" stroke="rgba(143,232,255,0.18)" stroke-width="1"/>
    <rect x="120" y="154" width="10" height="38" rx="5" fill="#0C1E31" stroke="rgba(143,232,255,0.18)" stroke-width="1"/>

    <!-- central glass -->
    <rect x="28" y="154" width="88" height="34" rx="12" fill="url(#paeds-panel)" stroke="rgba(179,241,255,0.20)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="40" y="192" width="64" height="4" rx="2" fill="rgba(85,191,255,0.14)"/>

    <!-- soft internal bands -->
    <path d="M36 162H54" stroke="rgba(142,233,255,0.20)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M90 162H108" stroke="rgba(142,233,255,0.20)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M38 176H52" stroke="rgba(142,233,255,0.14)" stroke-width="1" stroke-linecap="round"/>
    <path d="M92 176H106" stroke="rgba(142,233,255,0.14)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- central care icon -->
  <ellipse cx="72" cy="166" rx="28" ry="40" fill="url(#paeds-core)"/>
  <g filter="url(#paeds-core-glow)">
    <path
      d="M72 152
         C75.6 147.2 85 148.4 85 156.8
         C85 165.8 76.4 171.1 72 175
         C67.6 171.1 59 165.8 59 156.8
         C59 148.4 68.4 147.2 72 152Z"
      fill="url(#paeds-accent)"/>
  </g>

  <!-- side monitoring nodes -->
  <circle cx="42" cy="170" r="6.5" fill="#0D2134" stroke="rgba(155,240,255,0.28)" stroke-width="1"/>
  <circle cx="42" cy="170" r="2.2" fill="#A8F3FF"/>

  <circle cx="102" cy="170" r="6.5" fill="#0D2134" stroke="rgba(155,240,255,0.28)" stroke-width="1"/>
  <circle cx="102" cy="170" r="2.2" fill="#A8F3FF"/>

  <!-- connector stubs -->
  <path d="M144 180H158" stroke="rgba(110,230,255,0.30)" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M72 144V130" stroke="rgba(149,223,255,0.28)" stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="72" y="206" text-anchor="middle" fill="#EEF7FF"
        font-family="Inter, DM Sans, Arial, sans-serif"
        font-size="8.4" font-weight="700" letter-spacing="0.2">
    Paediatrics
  </text>
  <text x="72" y="218" text-anchor="middle" fill="rgba(185,214,255,0.92)"
        font-family="JetBrains Mono, monospace"
        font-size="5.2" font-weight="600" letter-spacing="0.5">
    8h
  </text>
                </g>
                <g class="hbuild locked" id="hb-cardiology">
                 <defs>
    <!-- Base shell -->
    <linearGradient id="card-shell" x1="292" y1="122" x2="292" y2="220" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182A44"/>
      <stop offset="0.56" stop-color="#101C30"/>
      <stop offset="1" stop-color="#09121E"/>
    </linearGradient>

    <!-- Cyan-electric perimeter -->
    <linearGradient id="card-edge" x1="208" y1="130" x2="376" y2="220" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#60DDFF"/>
      <stop offset="0.46" stop-color="#B0F7FF"/>
      <stop offset="1" stop-color="#6E8FFF"/>
    </linearGradient>

    <!-- Cardiac accent -->
    <linearGradient id="card-accent" x1="264" y1="150" x2="320" y2="190" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8DEBFF"/>
      <stop offset="0.48" stop-color="#73C7FF"/>
      <stop offset="1" stop-color="#AA8DFF"/>
    </linearGradient>

    <!-- Purple aura -->
    <radialGradient id="card-purple-aura" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 174) rotate(90) scale(78 114)">
      <stop offset="0" stop-color="#8362FF" stop-opacity="0.22"/>
      <stop offset="0.55" stop-color="#5840C8" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#1A103C" stop-opacity="0"/>
    </radialGradient>

    <!-- Electric core -->
    <radialGradient id="card-core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 168) rotate(90) scale(30 42)">
      <stop offset="0" stop-color="#F1FCFF" stop-opacity="0.78"/>
      <stop offset="0.44" stop-color="#9AEFFF" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#8B90FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="card-ground" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 222) rotate(90) scale(18 78)">
      <stop offset="0" stop-color="#42D2FF" stop-opacity="0.28"/>
      <stop offset="0.48" stop-color="#9B7CFF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#42D2FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="card-panel" x1="228" y1="150" x2="356" y2="196" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#183651" stop-opacity="0.90"/>
      <stop offset="1" stop-color="#102338" stop-opacity="0.90"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="card-roof" x1="218" y1="142" x2="366" y2="142" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#61D7FF"/>
      <stop offset="0.5" stop-color="#C5FAFF"/>
      <stop offset="1" stop-color="#8D93FF"/>
    </linearGradient>

    <!-- Pulse strip -->
    <linearGradient id="card-strip" x1="254" y1="138" x2="330" y2="138" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#A6EEFF"/>
      <stop offset="0.5" stop-color="#F0FBFF"/>
      <stop offset="1" stop-color="#B08DFF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="card-shadow" x="204" y="122" width="176" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="9" stdDeviation="8" flood-color="#020713" flood-opacity="0.74"/>
    </filter>

    <filter id="card-cyan-glow" x="210" y="136" width="164" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="card-outer-neon" x="206" y="128" width="172" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="4.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="card-core-glow" x="266" y="145" width="52" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient aura -->
  <ellipse cx="292" cy="174" rx="114" ry="78" fill="url(#card-purple-aura)"/>
  <ellipse cx="292" cy="222" rx="78" ry="18" fill="url(#card-ground)"/>

  <!-- outer silhouette -->
  <g filter="url(#card-outer-neon)">
    <path
      d="M226 146
         H358
         C367.941 146 376 154.059 376 164
         V202
         C376 211.941 367.941 220 358 220
         H226
         C216.059 220 208 211.941 208 202
         V164
         C208 154.059 216.059 146 226 146
         Z"
      fill="none"
      stroke="url(#card-edge)"
      stroke-opacity="0.16"
      stroke-width="2"/>
  </g>

  <!-- main building -->
  <g filter="url(#card-shadow)">
    <path
      d="M226 146
         H358
         C367.941 146 376 154.059 376 164
         V202
         C376 211.941 367.941 220 358 220
         H226
         C216.059 220 208 211.941 208 202
         V164
         C208 154.059 216.059 146 226 146
         Z"
      fill="url(#card-shell)"
      stroke="url(#card-edge)"
      stroke-opacity="0.42"
      stroke-width="1.4"/>

    <!-- roof beam -->
    <rect x="218" y="143" width="148" height="6" rx="3" fill="url(#card-roof)"/>
    <rect x="218" y="143" width="148" height="6" rx="3" filter="url(#card-cyan-glow)" fill="url(#card-roof)" fill-opacity="0.62"/>

    <!-- pulse strip -->
    <rect x="254" y="138" width="76" height="3.5" rx="1.75" fill="url(#card-strip)"/>

    <!-- side pylons -->
    <rect x="222" y="156" width="10" height="40" rx="5" fill="#0C1E31" stroke="rgba(143,232,255,0.18)" stroke-width="1"/>
    <rect x="352" y="156" width="10" height="40" rx="5" fill="#0C1E31" stroke="rgba(143,232,255,0.18)" stroke-width="1"/>

    <!-- central glass -->
    <rect x="238" y="156" width="108" height="36" rx="12" fill="url(#card-panel)" stroke="rgba(179,241,255,0.20)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="252" y="196" width="80" height="4" rx="2" fill="rgba(85,191,255,0.14)"/>

    <!-- internal bands -->
    <path d="M246 164H266" stroke="rgba(142,233,255,0.20)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M318 164H338" stroke="rgba(142,233,255,0.20)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M248 178H262" stroke="rgba(142,233,255,0.14)" stroke-width="1" stroke-linecap="round"/>
    <path d="M322 178H336" stroke="rgba(142,233,255,0.14)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- central heart/pulse core -->
  <ellipse cx="292" cy="168" rx="30" ry="42" fill="url(#card-core)"/>
  <g filter="url(#card-core-glow)">
    <path
      d="M292 156
         C295.7 151.2 305.6 152.7 305.6 161.4
         C305.6 170.2 297.5 174.4 292 179
         C286.5 174.4 278.4 170.2 278.4 161.4
         C278.4 152.7 288.3 151.2 292 156Z"
      fill="url(#card-accent)"/>
    <path
      d="M274 170
         H283
         L286.5 165
         L291 175
         L296 161
         L300 170
         H310"
      fill="none"
      stroke="#DDF9FF"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.9"/>
  </g>

  <!-- side monitoring nodes -->
  <circle cx="256" cy="172" r="6.5" fill="#0D2134" stroke="rgba(155,240,255,0.28)" stroke-width="1"/>
  <circle cx="256" cy="172" r="2.2" fill="#A8F3FF"/>

  <circle cx="328" cy="172" r="6.5" fill="#0D2134" stroke="rgba(155,240,255,0.28)" stroke-width="1"/>
  <circle cx="328" cy="172" r="2.2" fill="#A8F3FF"/>

  <!-- connector stubs -->
  <path d="M208 182H194" stroke="rgba(110,230,255,0.28)" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M376 182H390" stroke="rgba(110,230,255,0.30)" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M292 146V132" stroke="rgba(149,223,255,0.28)" stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="292" y="210" text-anchor="middle" fill="#EEF7FF"
        font-family="Inter, DM Sans, Arial, sans-serif"
        font-size="8.4" font-weight="700" letter-spacing="0.2">
    Cardiology
  </text>
  <text x="292" y="222" text-anchor="middle" fill="rgba(185,214,255,0.92)"
        font-family="JetBrains Mono, monospace"
        font-size="5.2" font-weight="600" letter-spacing="0.5">
    16h
  </text>
                </g>

                <!-- FLOOR 3: NEUROLOGY full width -->
                <g class="hbuild locked" id="hb-neurology">
                 <defs>

    <!-- Base building shell -->
    <linearGradient id="neuro-shell" x1="180" y1="40" x2="180" y2="132" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#192B45"/>
      <stop offset="0.56" stop-color="#111D32"/>
      <stop offset="1" stop-color="#09121F"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="neuro-edge" x1="96" y1="50" x2="264" y2="132" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#69E0FF"/>
      <stop offset="0.5" stop-color="#C2F6FF"/>
      <stop offset="1" stop-color="#8A8CFF"/>
    </linearGradient>

    <!-- Neural accent -->
    <linearGradient id="neuro-accent" x1="150" y1="68" x2="210" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#A6F0FF"/>
      <stop offset="0.46" stop-color="#7DD6FF"/>
      <stop offset="1" stop-color="#B78CFF"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="neuro-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 86) rotate(90) scale(74 116)">
      <stop offset="0" stop-color="#8E6CFF" stop-opacity="0.22"/>
      <stop offset="0.5" stop-color="#5942C9" stop-opacity="0.1"/>
      <stop offset="1" stop-color="#1B113F" stop-opacity="0"/>
    </radialGradient>

    <!-- Central cognitive core -->
    <radialGradient id="neuro-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 86) rotate(90) scale(28 40)">
      <stop offset="0" stop-color="#F4FDFF" stop-opacity="0.78"/>
      <stop offset="0.46" stop-color="#9BE8FF" stop-opacity="0.36"/>
      <stop offset="1" stop-color="#A493FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="neuro-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 136) rotate(90) scale(18 84)">
      <stop offset="0" stop-color="#46D4FF" stop-opacity="0.28"/>
      <stop offset="0.5" stop-color="#9A7EFF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#46D4FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="neuro-panel" x1="116" y1="68" x2="244" y2="110" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#193853" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#10263C" stop-opacity="0.9"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="neuro-roof" x1="106" y1="60" x2="254" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#6CE0FF"/>
      <stop offset="0.5" stop-color="#D5FAFF"/>
      <stop offset="1" stop-color="#9B8FFF"/>
    </linearGradient>

    <!-- Neural strip -->
    <linearGradient id="neuro-strip" x1="142" y1="56" x2="218" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#B2F2FF"/>
      <stop offset="0.5" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#C49AFF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="neuro-shadow" x="92" y="40" width="180" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="9" stdDeviation="8"
        flood-color="#020713" flood-opacity="0.74"/>
    </filter>

    <filter id="neuro-glow">
      <feGaussianBlur stdDeviation="4"/>
    </filter>

  </defs>

  <!-- ambient glow -->
  <ellipse cx="180" cy="86" rx="114" ry="74" fill="url(#neuro-aura)"/>
  <ellipse cx="180" cy="136" rx="86" ry="18" fill="url(#neuro-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M110 64
       H250
       C260 64 268 72 268 82
       V116
       C268 126 260 134 250 134
       H110
       C100 134 92 126 92 116
       V82
       C92 72 100 64 110 64 Z"
    fill="none"
    stroke="url(#neuro-edge)"
    stroke-opacity="0.18"
    stroke-width="2"
    filter="url(#neuro-glow)"
  />

  <!-- main building -->
  <g filter="url(#neuro-shadow)">
    <path
      d="M110 64
         H250
         C260 64 268 72 268 82
         V116
         C268 126 260 134 250 134
         H110
         C100 134 92 126 92 116
         V82
         C92 72 100 64 110 64 Z"
      fill="url(#neuro-shell)"
      stroke="url(#neuro-edge)"
      stroke-opacity="0.42"
      stroke-width="1.4"
    />

    <!-- roof beam -->
    <rect x="106" y="60" width="148" height="6" rx="3"
      fill="url(#neuro-roof)"/>

    <!-- neural strip -->
    <rect x="142" y="56" width="76" height="3.5" rx="2"
      fill="url(#neuro-strip)"/>

    <!-- glass -->
    <rect x="120" y="70" width="120" height="36" rx="12"
      fill="url(#neuro-panel)"
      stroke="rgba(190,240,255,0.2)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="140" y="110" width="80" height="4" rx="2"
      fill="rgba(90,190,255,0.14)"/>
  </g>

  <!-- neural core -->
  <ellipse cx="180" cy="86" rx="28" ry="40"
    fill="url(#neuro-core)"/>

  <!-- neural network icon -->
  <g stroke="url(#neuro-accent)" stroke-width="1.6" stroke-linecap="round">
    <circle cx="180" cy="86" r="2.8" fill="#DDF8FF"/>
    <circle cx="166" cy="78" r="2.4"/>
    <circle cx="196" cy="78" r="2.4"/>
    <circle cx="168" cy="96" r="2.4"/>
    <circle cx="196" cy="98" r="2.4"/>

    <line x1="180" y1="86" x2="166" y2="78"/>
    <line x1="180" y1="86" x2="196" y2="78"/>
    <line x1="180" y1="86" x2="168" y2="96"/>
    <line x1="180" y1="86" x2="196" y2="98"/>
  </g>

  <!-- side nodes -->
  <circle cx="146" cy="88" r="6.5"
    fill="#0D2134"
    stroke="rgba(170,235,255,0.28)" stroke-width="1"/>
  <circle cx="146" cy="88" r="2.2" fill="#A8F3FF"/>

  <circle cx="214" cy="88" r="6.5"
    fill="#0D2134"
    stroke="rgba(170,235,255,0.28)" stroke-width="1"/>
  <circle cx="214" cy="88" r="2.2" fill="#A8F3FF"/>

  <!-- connectors -->
  <path d="M92 96H78"
    stroke="rgba(120,230,255,0.28)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M268 96H282"
    stroke="rgba(120,230,255,0.28)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M180 64V50"
    stroke="rgba(150,230,255,0.28)"
    stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="180" y="126"
    text-anchor="middle"
    fill="#F1F9FF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.4"
    font-weight="700"
    letter-spacing="0.2">
    Neurology
  </text>

  <text x="180" y="138"
    text-anchor="middle"
    fill="rgba(190,220,255,0.9)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    30h
  </text>
                </g>

                <!-- FLOOR 4: ONCOLOGY left + ICU right -->
                <g class="hbuild locked" id="hb-oncology">
                 <defs>
    <!-- Base shell -->
    <linearGradient id="onco-shell" x1="72" y1="16" x2="72" y2="112" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182943"/>
      <stop offset="0.54" stop-color="#101B30"/>
      <stop offset="1" stop-color="#08111E"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="onco-edge" x1="-8" y1="24" x2="152" y2="114" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#61DEFF"/>
      <stop offset="0.45" stop-color="#BDF8FF"/>
      <stop offset="1" stop-color="#8F86FF"/>
    </linearGradient>

    <!-- Oncology accent -->
    <linearGradient id="onco-accent" x1="42" y1="44" x2="102" y2="86" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#A9F2FF"/>
      <stop offset="0.48" stop-color="#79D1FF"/>
      <stop offset="1" stop-color="#C08BFF"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="onco-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 62) rotate(90) scale(72 110)">
      <stop offset="0" stop-color="#8C68FF" stop-opacity="0.22"/>
      <stop offset="0.52" stop-color="#563FC6" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#1A103C" stop-opacity="0"/>
    </radialGradient>

    <!-- Central core -->
    <radialGradient id="onco-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 60) rotate(90) scale(28 40)">
      <stop offset="0" stop-color="#F6FDFF" stop-opacity="0.78"/>
      <stop offset="0.44" stop-color="#A7ECFF" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#A388FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="onco-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 116) rotate(90) scale(18 74)">
      <stop offset="0" stop-color="#43D3FF" stop-opacity="0.28"/>
      <stop offset="0.48" stop-color="#9C7CFF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#43D3FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="onco-panel" x1="18" y1="42" x2="126" y2="88" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#193651" stop-opacity="0.90"/>
      <stop offset="1" stop-color="#0F2338" stop-opacity="0.90"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="onco-roof" x1="10" y1="34" x2="134" y2="34" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#67E0FF"/>
      <stop offset="0.5" stop-color="#D7FAFF"/>
      <stop offset="1" stop-color="#9C8EFF"/>
    </linearGradient>

    <!-- Precision strip -->
    <linearGradient id="onco-strip" x1="42" y1="30" x2="102" y2="30" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#B8F4FF"/>
      <stop offset="0.5" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#C79CFF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="onco-shadow" x="-8" y="16" width="160" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="9" stdDeviation="8" flood-color="#020713" flood-opacity="0.74"/>
    </filter>

    <filter id="onco-glow">
      <feGaussianBlur stdDeviation="4"/>
    </filter>

    <filter id="onco-core-glow" x="48" y="36" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient glow -->
  <ellipse cx="72" cy="62" rx="110" ry="72" fill="url(#onco-aura)"/>
  <ellipse cx="72" cy="116" rx="74" ry="18" fill="url(#onco-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M18 38
       H126
       C135.941 38 144 46.059 144 56
       V94
       C144 103.941 135.941 112 126 112
       H18
       C8.059 112 0 103.941 0 94
       V56
       C0 46.059 8.059 38 18 38 Z"
    fill="none"
    stroke="url(#onco-edge)"
    stroke-opacity="0.18"
    stroke-width="2"
    filter="url(#onco-glow)"
  />

  <!-- main building -->
  <g filter="url(#onco-shadow)">
    <path
      d="M18 38
         H126
         C135.941 38 144 46.059 144 56
         V94
         C144 103.941 135.941 112 126 112
         H18
         C8.059 112 0 103.941 0 94
         V56
         C0 46.059 8.059 38 18 38 Z"
      fill="url(#onco-shell)"
      stroke="url(#onco-edge)"
      stroke-opacity="0.42"
      stroke-width="1.4"
    />

    <!-- roof beam -->
    <rect x="10" y="34" width="124" height="6" rx="3" fill="url(#onco-roof)"/>

    <!-- precision strip -->
    <rect x="42" y="30" width="60" height="3.5" rx="2" fill="url(#onco-strip)"/>

    <!-- glass -->
    <rect x="26" y="46" width="92" height="34" rx="12"
      fill="url(#onco-panel)"
      stroke="rgba(190,240,255,0.20)" stroke-width="1"/>

    <!-- side pylons -->
    <rect x="12" y="48" width="10" height="38" rx="5"
      fill="#0C1D30" stroke="rgba(155,235,255,0.18)" stroke-width="1"/>
    <rect x="122" y="48" width="10" height="38" rx="5"
      fill="#0C1D30" stroke="rgba(155,235,255,0.18)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="38" y="84" width="68" height="4" rx="2"
      fill="rgba(90,190,255,0.14)"/>

    <!-- inner tech bands -->
    <path d="M34 54H50" stroke="rgba(150,235,255,0.20)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M94 54H110" stroke="rgba(150,235,255,0.20)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M36 68H48" stroke="rgba(150,235,255,0.14)" stroke-width="1" stroke-linecap="round"/>
    <path d="M96 68H108" stroke="rgba(150,235,255,0.14)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- central treatment core -->
  <ellipse cx="72" cy="60" rx="28" ry="40" fill="url(#onco-core)"/>

  <!-- oncology icon: precision cell / radiotherapy target -->
  <g filter="url(#onco-core-glow)">
    <circle cx="72" cy="60" r="10.5" fill="none" stroke="url(#onco-accent)" stroke-width="1.8"/>
    <circle cx="72" cy="60" r="4.2" fill="url(#onco-accent)"/>
    <path d="M72 47V52" stroke="#E9FBFF" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M72 68V73" stroke="#E9FBFF" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M59 60H64" stroke="#E9FBFF" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M80 60H85" stroke="#E9FBFF" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M63.2 51.2L66.8 54.8" stroke="rgba(233,251,255,0.85)" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M77.2 65.2L80.8 68.8" stroke="rgba(233,251,255,0.85)" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M80.8 51.2L77.2 54.8" stroke="rgba(233,251,255,0.85)" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M66.8 65.2L63.2 68.8" stroke="rgba(233,251,255,0.85)" stroke-width="1.2" stroke-linecap="round"/>
  </g>

  <!-- side nodes -->
  <circle cx="42" cy="62" r="6.5"
    fill="#0D2134"
    stroke="rgba(170,235,255,0.28)" stroke-width="1"/>
  <circle cx="42" cy="62" r="2.2" fill="#A8F3FF"/>

  <circle cx="102" cy="62" r="6.5"
    fill="#0D2134"
    stroke="rgba(170,235,255,0.28)" stroke-width="1"/>
  <circle cx="102" cy="62" r="2.2" fill="#A8F3FF"/>

  <!-- connectors -->
  <path d="M144 72H158"
    stroke="rgba(120,230,255,0.28)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M72 38V24"
    stroke="rgba(150,230,255,0.28)"
    stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="72" y="104"
    text-anchor="middle"
    fill="#F1F9FF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.4"
    font-weight="700"
    letter-spacing="0.2">
    Oncology
  </text>

  <text x="72" y="116"
    text-anchor="middle"
    fill="rgba(190,220,255,0.9)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    50h
  </text>
                </g>
                <g class="hbuild locked" id="hb-icu">
                 <defs>
    <!-- Base shell -->
    <linearGradient id="icu-shell" x1="292" y1="12" x2="292" y2="114" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#172A44"/>
      <stop offset="0.52" stop-color="#101C31"/>
      <stop offset="1" stop-color="#08111E"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="icu-edge" x1="204" y1="20" x2="380" y2="116" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#6AE2FF"/>
      <stop offset="0.44" stop-color="#E0FBFF"/>
      <stop offset="1" stop-color="#8B90FF"/>
    </linearGradient>

    <!-- ICU accent -->
    <linearGradient id="icu-accent" x1="266" y1="42" x2="318" y2="84" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#C6F8FF"/>
      <stop offset="0.45" stop-color="#82D9FF"/>
      <stop offset="1" stop-color="#A991FF"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="icu-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 62) rotate(90) scale(78 118)">
      <stop offset="0" stop-color="#89E8FF" stop-opacity="0.10"/>
      <stop offset="0.36" stop-color="#8D6BFF" stop-opacity="0.18"/>
      <stop offset="0.62" stop-color="#5640C5" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#19103B" stop-opacity="0"/>
    </radialGradient>

    <!-- Central core -->
    <radialGradient id="icu-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 58) rotate(90) scale(30 42)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.84"/>
      <stop offset="0.42" stop-color="#B9F4FF" stop-opacity="0.40"/>
      <stop offset="1" stop-color="#9E90FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="icu-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 118) rotate(90) scale(18 82)">
      <stop offset="0" stop-color="#48D5FF" stop-opacity="0.30"/>
      <stop offset="0.48" stop-color="#9B80FF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#48D5FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="icu-panel" x1="228" y1="40" x2="356" y2="88" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#193853" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#10253A" stop-opacity="0.92"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="icu-roof" x1="218" y1="32" x2="366" y2="32" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#6FE4FF"/>
      <stop offset="0.50" stop-color="#ECFDFF"/>
      <stop offset="1" stop-color="#9A91FF"/>
    </linearGradient>

    <!-- Critical strip -->
    <linearGradient id="icu-strip" x1="254" y1="28" x2="330" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#C0F7FF"/>
      <stop offset="0.5" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#C9A1FF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="icu-shadow" x="202" y="12" width="180" height="122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#020713" flood-opacity="0.76"/>
    </filter>

    <filter id="icu-glow">
      <feGaussianBlur stdDeviation="4"/>
    </filter>

    <filter id="icu-core-glow" x="266" y="34" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient glow -->
  <ellipse cx="292" cy="62" rx="118" ry="78" fill="url(#icu-aura)"/>
  <ellipse cx="292" cy="118" rx="82" ry="18" fill="url(#icu-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M224 36
       H360
       C369.941 36 378 44.059 378 54
       V94
       C378 103.941 369.941 112 360 112
       H224
       C214.059 112 206 103.941 206 94
       V54
       C206 44.059 214.059 36 224 36 Z"
    fill="none"
    stroke="url(#icu-edge)"
    stroke-opacity="0.18"
    stroke-width="2"
    filter="url(#icu-glow)"
  />

  <!-- main building -->
  <g filter="url(#icu-shadow)">
    <path
      d="M224 36
         H360
         C369.941 36 378 44.059 378 54
         V94
         C378 103.941 369.941 112 360 112
         H224
         C214.059 112 206 103.941 206 94
         V54
         C206 44.059 214.059 36 224 36 Z"
      fill="url(#icu-shell)"
      stroke="url(#icu-edge)"
      stroke-opacity="0.44"
      stroke-width="1.4"
    />

    <!-- roof beam -->
    <rect x="218" y="32" width="148" height="6" rx="3" fill="url(#icu-roof)"/>

    <!-- critical strip -->
    <rect x="254" y="28" width="76" height="3.5" rx="2" fill="url(#icu-strip)"/>

    <!-- reinforced side pylons -->
    <rect x="220" y="46" width="11" height="42" rx="5.5"
      fill="#0C1D31" stroke="rgba(180,240,255,0.18)" stroke-width="1"/>
    <rect x="353" y="46" width="11" height="42" rx="5.5"
      fill="#0C1D31" stroke="rgba(180,240,255,0.18)" stroke-width="1"/>

    <!-- glass -->
    <rect x="238" y="46" width="108" height="36" rx="12"
      fill="url(#icu-panel)"
      stroke="rgba(205,245,255,0.20)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="252" y="86" width="80" height="4" rx="2"
      fill="rgba(92,196,255,0.14)"/>

    <!-- internal bands -->
    <path d="M246 54H266" stroke="rgba(180,240,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M318 54H338" stroke="rgba(180,240,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M248 68H262" stroke="rgba(180,240,255,0.15)" stroke-width="1" stroke-linecap="round"/>
    <path d="M322 68H336" stroke="rgba(180,240,255,0.15)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- critical care core -->
  <ellipse cx="292" cy="58" rx="30" ry="42" fill="url(#icu-core)"/>

  <!-- ICU icon: central monitor / support frame -->
  <g filter="url(#icu-core-glow)">
    <rect x="280" y="46" width="24" height="18" rx="4"
      fill="none" stroke="url(#icu-accent)" stroke-width="1.8"/>
    <path
      d="M284 55
         H288
         L290.4 51
         L293.4 60
         L296.8 49
         L299.2 55
         H300"
      fill="none"
      stroke="#ECFCFF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.92"/>
    <path d="M286 64V70" stroke="url(#icu-accent)" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M298 64V70" stroke="url(#icu-accent)" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M282 70H302" stroke="url(#icu-accent)" stroke-width="1.6" stroke-linecap="round"/>
  </g>

  <!-- side monitoring nodes -->
  <circle cx="256" cy="62" r="6.5"
    fill="#0D2134"
    stroke="rgba(185,242,255,0.30)" stroke-width="1"/>
  <circle cx="256" cy="62" r="2.2" fill="#B9F7FF"/>

  <circle cx="328" cy="62" r="6.5"
    fill="#0D2134"
    stroke="rgba(185,242,255,0.30)" stroke-width="1"/>
  <circle cx="328" cy="62" r="2.2" fill="#B9F7FF"/>

  <!-- connectors -->
  <path d="M206 72H192"
    stroke="rgba(135,236,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M378 72H392"
    stroke="rgba(135,236,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M292 36V22"
    stroke="rgba(160,236,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="292" y="104"
    text-anchor="middle"
    fill="#F2FAFF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.5"
    font-weight="700"
    letter-spacing="0.2">
    ICU
  </text>

  <text x="292" y="116"
    text-anchor="middle"
    fill="rgba(198,226,255,0.92)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    75h
  </text>
                </g>

                <!-- FLOOR 5: SURGERY full width -->
                <g class="hbuild locked" id="hb-surgery">
                  <defs>
    <!-- Base shell -->
    <linearGradient id="surg-shell" x1="180" y1="-78" x2="180" y2="26" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182B45"/>
      <stop offset="0.52" stop-color="#101C31"/>
      <stop offset="1" stop-color="#08111E"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="surg-edge" x1="92" y1="-70" x2="268" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#74E6FF"/>
      <stop offset="0.44" stop-color="#F0FDFF"/>
      <stop offset="1" stop-color="#9A92FF"/>
    </linearGradient>

    <!-- Surgical accent -->
    <linearGradient id="surg-accent" x1="154" y1="-46" x2="206" y2="-4" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#D2FAFF"/>
      <stop offset="0.46" stop-color="#8FE0FF"/>
      <stop offset="1" stop-color="#B597FF"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="surg-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -24) rotate(90) scale(80 120)">
      <stop offset="0" stop-color="#9AEFFF" stop-opacity="0.10"/>
      <stop offset="0.34" stop-color="#8F70FF" stop-opacity="0.18"/>
      <stop offset="0.62" stop-color="#5640C5" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#19103B" stop-opacity="0"/>
    </radialGradient>

    <!-- Core -->
    <radialGradient id="surg-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -28) rotate(90) scale(30 42)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.84"/>
      <stop offset="0.42" stop-color="#C5F7FF" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#A694FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="surg-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 30) rotate(90) scale(18 82)">
      <stop offset="0" stop-color="#4BD6FF" stop-opacity="0.30"/>
      <stop offset="0.48" stop-color="#A083FF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#4BD6FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="surg-panel" x1="116" y1="-46" x2="244" y2="2" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1A3854" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#10253A" stop-opacity="0.92"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="surg-roof" x1="106" y1="-54" x2="254" y2="-54" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#79E8FF"/>
      <stop offset="0.50" stop-color="#F6FEFF"/>
      <stop offset="1" stop-color="#A093FF"/>
    </linearGradient>

    <!-- Prestige strip -->
    <linearGradient id="surg-strip" x1="142" y1="-58" x2="218" y2="-58" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#C8F8FF"/>
      <stop offset="0.5" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#D2A8FF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="surg-shadow" x="88" y="-78" width="184" height="124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#020713" flood-opacity="0.78"/>
    </filter>

    <filter id="surg-glow">
      <feGaussianBlur stdDeviation="4"/>
    </filter>

    <filter id="surg-core-glow" x="154" y="-52" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient aura -->
  <ellipse cx="180" cy="-24" rx="120" ry="80" fill="url(#surg-aura)"/>
  <ellipse cx="180" cy="30" rx="82" ry="18" fill="url(#surg-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M112 -50
       H248
       C257.941 -50 266 -41.941 266 -32
       V8
       C266 17.941 257.941 26 248 26
       H112
       C102.059 26 94 17.941 94 8
       V-32
       C94 -41.941 102.059 -50 112 -50 Z"
    fill="none"
    stroke="url(#surg-edge)"
    stroke-opacity="0.18"
    stroke-width="2"
    filter="url(#surg-glow)"
  />

  <!-- main building -->
  <g filter="url(#surg-shadow)">
    <path
      d="M112 -50
         H248
         C257.941 -50 266 -41.941 266 -32
         V8
         C266 17.941 257.941 26 248 26
         H112
         C102.059 26 94 17.941 94 8
         V-32
         C94 -41.941 102.059 -50 112 -50 Z"
      fill="url(#surg-shell)"
      stroke="url(#surg-edge)"
      stroke-opacity="0.44"
      stroke-width="1.4"
    />

    <!-- roof beam -->
    <rect x="106" y="-54" width="148" height="6" rx="3" fill="url(#surg-roof)"/>

    <!-- prestige strip -->
    <rect x="142" y="-58" width="76" height="3.5" rx="2" fill="url(#surg-strip)"/>

    <!-- reinforced pylons -->
    <rect x="108" y="-40" width="11" height="42" rx="5.5"
      fill="#0C1D31" stroke="rgba(192,244,255,0.18)" stroke-width="1"/>
    <rect x="241" y="-40" width="11" height="42" rx="5.5"
      fill="#0C1D31" stroke="rgba(192,244,255,0.18)" stroke-width="1"/>

    <!-- glass panel -->
    <rect x="126" y="-40" width="108" height="36" rx="12"
      fill="url(#surg-panel)"
      stroke="rgba(212,247,255,0.20)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="140" y="0" width="80" height="4" rx="2"
      fill="rgba(102,202,255,0.14)"/>

    <!-- precision tech bands -->
    <path d="M134 -32H154" stroke="rgba(190,244,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M206 -32H226" stroke="rgba(190,244,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M136 -18H150" stroke="rgba(190,244,255,0.15)" stroke-width="1" stroke-linecap="round"/>
    <path d="M210 -18H224" stroke="rgba(190,244,255,0.15)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- surgical core -->
  <ellipse cx="180" cy="-28" rx="30" ry="42" fill="url(#surg-core)"/>

  <!-- Surgery icon -->
  <g filter="url(#surg-core-glow)">
    <!-- operating table -->
    <rect x="166" y="-29" width="28" height="10" rx="3"
      fill="none" stroke="url(#surg-accent)" stroke-width="1.8"/>
    <path d="M170 -19V-13" stroke="url(#surg-accent)" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M190 -19V-13" stroke="url(#surg-accent)" stroke-width="1.6" stroke-linecap="round"/>

    <!-- scalpel -->
    <path d="M172 -41L184 -31" stroke="#ECFCFF" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M183 -32L187 -28" stroke="#ECFCFF" stroke-width="1.3" stroke-linecap="round"/>

    <!-- forceps -->
    <path d="M189 -41L179 -30" stroke="#ECFCFF" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M192 -38L181 -26" stroke="#ECFCFF" stroke-width="1.2" stroke-linecap="round"/>
  </g>

  <!-- side monitoring nodes -->
  <circle cx="144" cy="-24" r="6.5"
    fill="#0D2134"
    stroke="rgba(196,245,255,0.30)" stroke-width="1"/>
  <circle cx="144" cy="-24" r="2.2" fill="#C4F8FF"/>

  <circle cx="216" cy="-24" r="6.5"
    fill="#0D2134"
    stroke="rgba(196,245,255,0.30)" stroke-width="1"/>
  <circle cx="216" cy="-24" r="2.2" fill="#C4F8FF"/>

  <!-- connectors -->
  <path d="M94 -14H80"
    stroke="rgba(145,238,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M266 -14H280"
    stroke="rgba(145,238,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M180 -50V-64"
    stroke="rgba(170,238,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="180" y="18"
    text-anchor="middle"
    fill="#F4FBFF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.5"
    font-weight="700"
    letter-spacing="0.2">
    Surgery
  </text>

  <text x="180" y="30"
    text-anchor="middle"
    fill="rgba(202,230,255,0.92)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    100h
  </text>
                </g>

                <!-- FLOOR 6: RADIOLOGY left + PSYCHIATRY right -->
                <g class="hbuild locked" id="hb-radiology">
                  <defs>

    <!-- Base shell -->
    <linearGradient id="rad-shell" x1="72" y1="-178" x2="72" y2="-70" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182B46"/>
      <stop offset="0.52" stop-color="#101C32"/>
      <stop offset="1" stop-color="#08111F"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="rad-edge" x1="-8" y1="-170" x2="152" y2="-70" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#72E6FF"/>
      <stop offset="0.44" stop-color="#F0FDFF"/>
      <stop offset="1" stop-color="#A29AFF"/>
    </linearGradient>

    <!-- Imaging accent -->
    <linearGradient id="rad-accent" x1="46" y1="-150" x2="100" y2="-110" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#CFFBFF"/>
      <stop offset="0.48" stop-color="#8EE2FF"/>
      <stop offset="1" stop-color="#B29AFF"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="rad-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 -120) rotate(90) scale(80 120)">
      <stop offset="0" stop-color="#9CEEFF" stop-opacity="0.12"/>
      <stop offset="0.36" stop-color="#8F6FFF" stop-opacity="0.18"/>
      <stop offset="0.62" stop-color="#5841C7" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#1A103D" stop-opacity="0"/>
    </radialGradient>

    <!-- Scanner core -->
    <radialGradient id="rad-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 -124) rotate(90) scale(30 42)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.86"/>
      <stop offset="0.44" stop-color="#C7F6FF" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#A896FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="rad-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 -66) rotate(90) scale(18 80)">
      <stop offset="0" stop-color="#52DAFF" stop-opacity="0.30"/>
      <stop offset="0.48" stop-color="#A48CFF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#52DAFF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="rad-panel" x1="18" y1="-150" x2="126" y2="-104" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1B3B57" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#10263B" stop-opacity="0.92"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="rad-roof" x1="10" y1="-160" x2="134" y2="-160" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#82EBFF"/>
      <stop offset="0.50" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#A695FF"/>
    </linearGradient>

    <!-- Scanner strip -->
    <linearGradient id="rad-strip" x1="42" y1="-164" x2="102" y2="-164" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#D2FAFF"/>
      <stop offset="0.5" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#CFAEFF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="rad-shadow" x="-8" y="-178" width="160" height="124">
      <feDropShadow dx="0" dy="10" stdDeviation="8"
        flood-color="#020713" flood-opacity="0.78"/>
    </filter>

    <filter id="rad-glow">
      <feGaussianBlur stdDeviation="4"/>
    </filter>

    <filter id="rad-core-glow" x="44" y="-150" width="56" height="56">
      <feGaussianBlur stdDeviation="3.6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

  </defs>

  <!-- ambient glow -->
  <ellipse cx="72" cy="-120" rx="120" ry="82" fill="url(#rad-aura)"/>
  <ellipse cx="72" cy="-66" rx="82" ry="18" fill="url(#rad-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M18 -154
       H126
       C136 -154 144 -146 144 -136
       V-96
       C144 -86 136 -78 126 -78
       H18
       C8 -78 0 -86 0 -96
       V-136
       C0 -146 8 -154 18 -154 Z"
    fill="none"
    stroke="url(#rad-edge)"
    stroke-opacity="0.18"
    stroke-width="2"
    filter="url(#rad-glow)"
  />

  <!-- building -->
  <g filter="url(#rad-shadow)">
    <path
      d="M18 -154
         H126
         C136 -154 144 -146 144 -136
         V-96
         C144 -86 136 -78 126 -78
         H18
         C8 -78 0 -86 0 -96
         V-136
         C0 -146 8 -154 18 -154 Z"
      fill="url(#rad-shell)"
      stroke="url(#rad-edge)"
      stroke-opacity="0.44"
      stroke-width="1.4"
    />

    <!-- roof beam -->
    <rect x="10" y="-160" width="124" height="6" rx="3" fill="url(#rad-roof)"/>

    <!-- strip -->
    <rect x="42" y="-164" width="60" height="3.5" rx="2" fill="url(#rad-strip)"/>

    <!-- pylons -->
    <rect x="12" y="-144" width="10" height="42" rx="5"
      fill="#0C1E32" stroke="rgba(210,248,255,0.18)" stroke-width="1"/>
    <rect x="122" y="-144" width="10" height="42" rx="5"
      fill="#0C1E32" stroke="rgba(210,248,255,0.18)" stroke-width="1"/>

    <!-- glass -->
    <rect x="26" y="-144" width="92" height="36" rx="12"
      fill="url(#rad-panel)"
      stroke="rgba(220,248,255,0.20)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="38" y="-104" width="68" height="4" rx="2"
      fill="rgba(110,210,255,0.14)"/>

    <!-- tech bands -->
    <path d="M34 -136H50"
      stroke="rgba(210,248,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M94 -136H110"
      stroke="rgba(210,248,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>

    <path d="M36 -122H48"
      stroke="rgba(210,248,255,0.15)" stroke-width="1" stroke-linecap="round"/>
    <path d="M96 -122H108"
      stroke="rgba(210,248,255,0.15)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- scanner core -->
  <ellipse cx="72" cy="-124" rx="30" ry="42" fill="url(#rad-core)"/>

  <!-- scanner icon -->
  <g filter="url(#rad-core-glow)">
    <circle cx="72" cy="-124" r="12"
      fill="none" stroke="url(#rad-accent)" stroke-width="1.8"/>

    <circle cx="72" cy="-124" r="5.5"
      fill="url(#rad-accent)"/>

    <!-- radial beams -->
    <path d="M72 -140V-134" stroke="#F2FDFF" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M72 -114V-108" stroke="#F2FDFF" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M56 -124H50" stroke="#F2FDFF" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M94 -124H88" stroke="#F2FDFF" stroke-width="1.4" stroke-linecap="round"/>

    <path d="M61 -135L57 -139" stroke="#F2FDFF" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M83 -135L87 -139" stroke="#F2FDFF" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M61 -113L57 -109" stroke="#F2FDFF" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M83 -113L87 -109" stroke="#F2FDFF" stroke-width="1.2" stroke-linecap="round"/>
  </g>

  <!-- nodes -->
  <circle cx="42" cy="-122" r="6.5"
    fill="#0D2134"
    stroke="rgba(200,245,255,0.30)" stroke-width="1"/>
  <circle cx="42" cy="-122" r="2.2" fill="#C6F7FF"/>

  <circle cx="102" cy="-122" r="6.5"
    fill="#0D2134"
    stroke="rgba(200,245,255,0.30)" stroke-width="1"/>
  <circle cx="102" cy="-122" r="2.2" fill="#C6F7FF"/>

  <!-- connectors -->
  <path d="M144 -112H158"
    stroke="rgba(170,242,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M72 -154V-168"
    stroke="rgba(170,242,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="72" y="-88"
    text-anchor="middle"
    fill="#F4FBFF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.5"
    font-weight="700"
    letter-spacing="0.2">
    Radiology
  </text>

  <text x="72" y="-76"
    text-anchor="middle"
    fill="rgba(205,230,255,0.92)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    150h
  </text>
                </g>
                <g class="hbuild locked" id="hb-psychiatry">
                 <defs>
    <!-- Base shell -->
    <linearGradient id="psych-shell" x1="292" y1="-178" x2="292" y2="-72" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182A45"/>
      <stop offset="0.52" stop-color="#101C31"/>
      <stop offset="1" stop-color="#08111E"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="psych-edge" x1="206" y1="-170" x2="378" y2="-72" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#78E7FF"/>
      <stop offset="0.44" stop-color="#EAFDFF"/>
      <stop offset="1" stop-color="#B196FF"/>
    </linearGradient>

    <!-- Mind-center accent -->
    <linearGradient id="psych-accent" x1="266" y1="-150" x2="320" y2="-108" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#D2FBFF"/>
      <stop offset="0.46" stop-color="#96E5FF"/>
      <stop offset="1" stop-color="#C6A0FF"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="psych-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 -122) rotate(90) scale(84 124)">
      <stop offset="0" stop-color="#A4F1FF" stop-opacity="0.12"/>
      <stop offset="0.34" stop-color="#9475FF" stop-opacity="0.18"/>
      <stop offset="0.62" stop-color="#5C43CD" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#1A103D" stop-opacity="0"/>
    </radialGradient>

    <!-- Central calm core -->
    <radialGradient id="psych-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 -124) rotate(90) scale(30 42)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.84"/>
      <stop offset="0.44" stop-color="#CEF8FF" stop-opacity="0.40"/>
      <stop offset="1" stop-color="#B39BFF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="psych-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 -68) rotate(90) scale(18 84)">
      <stop offset="0" stop-color="#54DBFF" stop-opacity="0.30"/>
      <stop offset="0.48" stop-color="#B092FF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#54DBFF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="psych-panel" x1="228" y1="-148" x2="356" y2="-102" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1B3A56" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#10253A" stop-opacity="0.92"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="psych-roof" x1="218" y1="-158" x2="366" y2="-158" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#86ECFF"/>
      <stop offset="0.50" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#B49CFF"/>
    </linearGradient>

    <!-- Serenity strip -->
    <linearGradient id="psych-strip" x1="254" y1="-162" x2="330" y2="-162" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#D8FBFF"/>
      <stop offset="0.5" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#D7B1FF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="psych-shadow" x="202" y="-178" width="180" height="126" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#020713" flood-opacity="0.78"/>
    </filter>

    <filter id="psych-glow">
      <feGaussianBlur stdDeviation="4"/>
    </filter>

    <filter id="psych-core-glow" x="262" y="-152" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient glow -->
  <ellipse cx="292" cy="-122" rx="124" ry="84" fill="url(#psych-aura)"/>
  <ellipse cx="292" cy="-68" rx="84" ry="18" fill="url(#psych-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M224 -152
       H360
       C369.941 -152 378 -143.941 378 -134
       V-94
       C378 -84.059 369.941 -76 360 -76
       H224
       C214.059 -76 206 -84.059 206 -94
       V-134
       C206 -143.941 214.059 -152 224 -152 Z"
    fill="none"
    stroke="url(#psych-edge)"
    stroke-opacity="0.18"
    stroke-width="2"
    filter="url(#psych-glow)"
  />

  <!-- building -->
  <g filter="url(#psych-shadow)">
    <path
      d="M224 -152
         H360
         C369.941 -152 378 -143.941 378 -134
         V-94
         C378 -84.059 369.941 -76 360 -76
         H224
         C214.059 -76 206 -84.059 206 -94
         V-134
         C206 -143.941 214.059 -152 224 -152 Z"
      fill="url(#psych-shell)"
      stroke="url(#psych-edge)"
      stroke-opacity="0.44"
      stroke-width="1.4"
    />

    <!-- roof beam -->
    <rect x="218" y="-158" width="148" height="6" rx="3" fill="url(#psych-roof)"/>

    <!-- serenity strip -->
    <rect x="254" y="-162" width="76" height="3.5" rx="2" fill="url(#psych-strip)"/>

    <!-- pylons -->
    <rect x="220" y="-142" width="11" height="42" rx="5.5"
      fill="#0C1E32" stroke="rgba(215,248,255,0.18)" stroke-width="1"/>
    <rect x="353" y="-142" width="11" height="42" rx="5.5"
      fill="#0C1E32" stroke="rgba(215,248,255,0.18)" stroke-width="1"/>

    <!-- glass -->
    <rect x="238" y="-142" width="108" height="36" rx="12"
      fill="url(#psych-panel)"
      stroke="rgba(224,249,255,0.20)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="252" y="-102" width="80" height="4" rx="2"
      fill="rgba(116,214,255,0.14)"/>

    <!-- soft tech bands -->
    <path d="M246 -134H266"
      stroke="rgba(214,248,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M318 -134H338"
      stroke="rgba(214,248,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>

    <path d="M248 -120H262"
      stroke="rgba(214,248,255,0.15)" stroke-width="1" stroke-linecap="round"/>
    <path d="M322 -120H336"
      stroke="rgba(214,248,255,0.15)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- calm core -->
  <ellipse cx="292" cy="-124" rx="30" ry="42" fill="url(#psych-core)"/>

  <!-- Psychiatry icon: mind-wave / calm signal -->
  <g filter="url(#psych-core-glow)">
    <path
      d="M281 -129
         C281 -136.2 286.5 -141 292 -141
         C297.5 -141 303 -136.2 303 -129
         C303 -124.8 301.4 -121.5 299 -119
         C300.8 -117.7 302 -115.7 302 -113
         C302 -108.4 297.6 -105 292 -105
         C286.4 -105 282 -108.4 282 -113
         C282 -115.7 283.2 -117.7 285 -119
         C282.6 -121.5 281 -124.8 281 -129Z"
      fill="none"
      stroke="url(#psych-accent)"
      stroke-width="1.8"
      stroke-linejoin="round"/>

    <path
      d="M286 -124
         C288 -126 290 -126.5 292 -124.5
         C294 -122.5 296 -122 298 -124"
      fill="none"
      stroke="#F2FDFF"
      stroke-width="1.3"
      stroke-linecap="round"/>

    <path
      d="M286 -117
         C288.2 -118.6 290.5 -119 292.3 -117.3
         C294.1 -115.7 296.1 -115.4 298 -117"
      fill="none"
      stroke="#F2FDFF"
      stroke-width="1.2"
      stroke-linecap="round"
      opacity="0.92"/>

    <circle cx="287.8" cy="-131.2" r="1.2" fill="#F2FDFF"/>
    <circle cx="296.2" cy="-131.2" r="1.2" fill="#F2FDFF"/>
  </g>

  <!-- nodes -->
  <circle cx="256" cy="-122" r="6.5"
    fill="#0D2134"
    stroke="rgba(204,247,255,0.30)" stroke-width="1"/>
  <circle cx="256" cy="-122" r="2.2" fill="#CCF9FF"/>

  <circle cx="328" cy="-122" r="6.5"
    fill="#0D2134"
    stroke="rgba(204,247,255,0.30)" stroke-width="1"/>
  <circle cx="328" cy="-122" r="2.2" fill="#CCF9FF"/>

  <!-- connectors -->
  <path d="M206 -112H192"
    stroke="rgba(176,244,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M378 -112H392"
    stroke="rgba(176,244,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M292 -152V-166"
    stroke="rgba(176,244,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="292" y="-86"
    text-anchor="middle"
    fill="#F4FBFF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.5"
    font-weight="700"
    letter-spacing="0.2">
    Psychiatry
  </text>

  <text x="292" y="-74"
    text-anchor="middle"
    fill="rgba(208,232,255,0.92)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    200h
  </text>
                </g>

                <!-- FLOOR 7: OPD full width -->
                <g class="hbuild locked" id="hb-opd">
                 <defs>
    <!-- Base shell -->
    <linearGradient id="opd-shell" x1="180" y1="-286" x2="180" y2="-174" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182B46"/>
      <stop offset="0.52" stop-color="#101C32"/>
      <stop offset="1" stop-color="#08111F"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="opd-edge" x1="88" y1="-278" x2="272" y2="-172" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#7CEAFF"/>
      <stop offset="0.44" stop-color="#F2FDFF"/>
      <stop offset="1" stop-color="#A99AFF"/>
    </linearGradient>

    <!-- OPD accent -->
    <linearGradient id="opd-accent" x1="154" y1="-256" x2="206" y2="-212" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#D6FBFF"/>
      <stop offset="0.46" stop-color="#9AE6FF"/>
      <stop offset="1" stop-color="#C2A2FF"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="opd-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -230) rotate(90) scale(86 128)">
      <stop offset="0" stop-color="#A8F2FF" stop-opacity="0.12"/>
      <stop offset="0.34" stop-color="#9676FF" stop-opacity="0.18"/>
      <stop offset="0.62" stop-color="#5D44CE" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#1A103D" stop-opacity="0"/>
    </radialGradient>

    <!-- Central core -->
    <radialGradient id="opd-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -232) rotate(90) scale(30 42)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.84"/>
      <stop offset="0.44" stop-color="#D2F9FF" stop-opacity="0.40"/>
      <stop offset="1" stop-color="#B59CFF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="opd-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -172) rotate(90) scale(18 88)">
      <stop offset="0" stop-color="#57DCFF" stop-opacity="0.30"/>
      <stop offset="0.48" stop-color="#B395FF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#57DCFF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="opd-panel" x1="114" y1="-254" x2="246" y2="-204" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1B3A56" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#10253A" stop-opacity="0.92"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="opd-roof" x1="104" y1="-264" x2="256" y2="-264" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#89EDFF"/>
      <stop offset="0.50" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#B29CFF"/>
    </linearGradient>

    <!-- Reception strip -->
    <linearGradient id="opd-strip" x1="142" y1="-268" x2="218" y2="-268" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#DBFBFF"/>
      <stop offset="0.5" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#D9B4FF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="opd-shadow" x="84" y="-286" width="192" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#020713" flood-opacity="0.78"/>
    </filter>

    <filter id="opd-glow">
      <feGaussianBlur stdDeviation="4"/>
    </filter>

    <filter id="opd-core-glow" x="152" y="-258" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient glow -->
  <ellipse cx="180" cy="-230" rx="128" ry="86" fill="url(#opd-aura)"/>
  <ellipse cx="180" cy="-172" rx="88" ry="18" fill="url(#opd-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M110 -258
       H250
       C260 -258 268 -250 268 -240
       V-198
       C268 -188 260 -180 250 -180
       H110
       C100 -180 92 -188 92 -198
       V-240
       C92 -250 100 -258 110 -258 Z"
    fill="none"
    stroke="url(#opd-edge)"
    stroke-opacity="0.18"
    stroke-width="2"
    filter="url(#opd-glow)"
  />

  <!-- building -->
  <g filter="url(#opd-shadow)">
    <path
      d="M110 -258
         H250
         C260 -258 268 -250 268 -240
         V-198
         C268 -188 260 -180 250 -180
         H110
         C100 -180 92 -188 92 -198
         V-240
         C92 -250 100 -258 110 -258 Z"
      fill="url(#opd-shell)"
      stroke="url(#opd-edge)"
      stroke-opacity="0.44"
      stroke-width="1.4"
    />

    <!-- roof beam -->
    <rect x="104" y="-264" width="152" height="6" rx="3" fill="url(#opd-roof)"/>

    <!-- strip -->
    <rect x="142" y="-268" width="76" height="3.5" rx="2" fill="url(#opd-strip)"/>

    <!-- pylons -->
    <rect x="108" y="-246" width="11" height="44" rx="5.5"
      fill="#0C1E32" stroke="rgba(220,249,255,0.18)" stroke-width="1"/>
    <rect x="241" y="-246" width="11" height="44" rx="5.5"
      fill="#0C1E32" stroke="rgba(220,249,255,0.18)" stroke-width="1"/>

    <!-- glass -->
    <rect x="126" y="-246" width="108" height="38" rx="12"
      fill="url(#opd-panel)"
      stroke="rgba(228,250,255,0.20)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="140" y="-204" width="80" height="4" rx="2"
      fill="rgba(118,216,255,0.14)"/>

    <!-- soft bands -->
    <path d="M134 -238H154"
      stroke="rgba(218,249,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M206 -238H226"
      stroke="rgba(218,249,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>

    <path d="M136 -222H150"
      stroke="rgba(218,249,255,0.15)" stroke-width="1" stroke-linecap="round"/>
    <path d="M210 -222H224"
      stroke="rgba(218,249,255,0.15)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- OPD core -->
  <ellipse cx="180" cy="-232" rx="30" ry="42" fill="url(#opd-core)"/>

  <!-- OPD icon: public consultation hub -->
  <g filter="url(#opd-core-glow)">
    <circle cx="171" cy="-236" r="4.5" fill="url(#opd-accent)"/>
    <circle cx="189" cy="-236" r="4.5" fill="url(#opd-accent)"/>
    <path d="M164 -223C164 -227.5 167.6 -230 171 -230C174.4 -230 178 -227.5 178 -223"
      fill="none" stroke="#F4FDFF" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M182 -223C182 -227.5 185.6 -230 189 -230C192.4 -230 196 -227.5 196 -223"
      fill="none" stroke="#F4FDFF" stroke-width="1.4" stroke-linecap="round"/>

    <rect x="171.8" y="-217" width="16.4" height="7.5" rx="2.8"
      fill="none" stroke="url(#opd-accent)" stroke-width="1.5"/>
    <path d="M180 -224V-217" stroke="#F4FDFF" stroke-width="1.3" stroke-linecap="round"/>
  </g>

  <!-- side nodes -->
  <circle cx="144" cy="-230" r="6.5"
    fill="#0D2134"
    stroke="rgba(208,248,255,0.30)" stroke-width="1"/>
  <circle cx="144" cy="-230" r="2.2" fill="#D0FAFF"/>

  <circle cx="216" cy="-230" r="6.5"
    fill="#0D2134"
    stroke="rgba(208,248,255,0.30)" stroke-width="1"/>
  <circle cx="216" cy="-230" r="2.2" fill="#D0FAFF"/>

  <!-- connectors -->
  <path d="M92 -220H78"
    stroke="rgba(180,245,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M268 -220H282"
    stroke="rgba(180,245,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M180 -258V-272"
    stroke="rgba(180,245,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="180" y="-190"
    text-anchor="middle"
    fill="#F4FBFF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.5"
    font-weight="700"
    letter-spacing="0.2">
    OPD
  </text>

  <text x="180" y="-178"
    text-anchor="middle"
    fill="rgba(210,233,255,0.92)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    300h
  </text>
                </g>

                <!-- FLOOR 8: RESEARCH left + SENIOR_REG right -->
                <g class="hbuild locked" id="hb-research">
                  <defs>
    <!-- Base shell -->
    <linearGradient id="res-shell" x1="72" y1="-394" x2="72" y2="-278" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182B47"/>
      <stop offset="0.52" stop-color="#101C32"/>
      <stop offset="1" stop-color="#08111F"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="res-edge" x1="-10" y1="-386" x2="154" y2="-276" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#85EDFF"/>
      <stop offset="0.44" stop-color="#F5FDFF"/>
      <stop offset="1" stop-color="#B49FFF"/>
    </linearGradient>

    <!-- Research accent -->
    <linearGradient id="res-accent" x1="42" y1="-360" x2="102" y2="-314" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#DDFDFF"/>
      <stop offset="0.46" stop-color="#9FE9FF"/>
      <stop offset="1" stop-color="#C9A8FF"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="res-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 -334) rotate(90) scale(90 132)">
      <stop offset="0" stop-color="#B3F6FF" stop-opacity="0.12"/>
      <stop offset="0.34" stop-color="#9C7DFF" stop-opacity="0.18"/>
      <stop offset="0.62" stop-color="#6248D2" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#1A103D" stop-opacity="0"/>
    </radialGradient>

    <!-- Core -->
    <radialGradient id="res-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 -338) rotate(90) scale(32 44)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.86"/>
      <stop offset="0.42" stop-color="#D7FAFF" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#B89FFF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="res-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(72 -276) rotate(90) scale(18 92)">
      <stop offset="0" stop-color="#5CDDFF" stop-opacity="0.30"/>
      <stop offset="0.48" stop-color="#BA9BFF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#5CDDFF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="res-panel" x1="16" y1="-362" x2="128" y2="-308" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1B3B57" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#10253A" stop-opacity="0.92"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="res-roof" x1="8" y1="-372" x2="136" y2="-372" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8EF0FF"/>
      <stop offset="0.50" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#B8A1FF"/>
    </linearGradient>

    <!-- Prestige strip -->
    <linearGradient id="res-strip" x1="40" y1="-376" x2="104" y2="-376" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#E2FCFF"/>
      <stop offset="0.5" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#DDB7FF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="res-shadow" x="-10" y="-394" width="164" height="136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#020713" flood-opacity="0.78"/>
    </filter>

    <filter id="res-glow">
      <feGaussianBlur stdDeviation="4"/>
    </filter>

    <filter id="res-core-glow" x="42" y="-366" width="60" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient glow -->
  <ellipse cx="72" cy="-334" rx="132" ry="90" fill="url(#res-aura)"/>
  <ellipse cx="72" cy="-276" rx="92" ry="18" fill="url(#res-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M18 -366
       H126
       C136 -366 144 -358 144 -348
       V-304
       C144 -294 136 -286 126 -286
       H18
       C8 -286 0 -294 0 -304
       V-348
       C0 -358 8 -366 18 -366 Z"
    fill="none"
    stroke="url(#res-edge)"
    stroke-opacity="0.18"
    stroke-width="2"
    filter="url(#res-glow)"
  />

  <!-- building -->
  <g filter="url(#res-shadow)">
    <path
      d="M18 -366
         H126
         C136 -366 144 -358 144 -348
         V-304
         C144 -294 136 -286 126 -286
         H18
         C8 -286 0 -294 0 -304
         V-348
         C0 -358 8 -366 18 -366 Z"
      fill="url(#res-shell)"
      stroke="url(#res-edge)"
      stroke-opacity="0.44"
      stroke-width="1.4"
    />

    <!-- roof beam -->
    <rect x="8" y="-372" width="128" height="6" rx="3" fill="url(#res-roof)"/>

    <!-- prestige strip -->
    <rect x="40" y="-376" width="64" height="3.5" rx="2" fill="url(#res-strip)"/>

    <!-- pylons -->
    <rect x="10" y="-354" width="11" height="46" rx="5.5"
      fill="#0C1E32" stroke="rgba(225,250,255,0.18)" stroke-width="1"/>
    <rect x="123" y="-354" width="11" height="46" rx="5.5"
      fill="#0C1E32" stroke="rgba(225,250,255,0.18)" stroke-width="1"/>

    <!-- glass -->
    <rect x="24" y="-354" width="96" height="40" rx="12"
      fill="url(#res-panel)"
      stroke="rgba(232,250,255,0.20)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="38" y="-310" width="68" height="4" rx="2"
      fill="rgba(122,220,255,0.14)"/>

    <!-- soft bands -->
    <path d="M32 -344H50"
      stroke="rgba(224,250,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M94 -344H112"
      stroke="rgba(224,250,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>

    <path d="M34 -328H48"
      stroke="rgba(224,250,255,0.15)" stroke-width="1" stroke-linecap="round"/>
    <path d="M96 -328H110"
      stroke="rgba(224,250,255,0.15)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- research core -->
  <ellipse cx="72" cy="-338" rx="32" ry="44" fill="url(#res-core)"/>

  <!-- Research icon: flask + molecule -->
  <g filter="url(#res-core-glow)">
    <!-- flask neck -->
    <path d="M67 -354H77" stroke="url(#res-accent)" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M69 -354V-346" stroke="url(#res-accent)" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M75 -354V-346" stroke="url(#res-accent)" stroke-width="1.6" stroke-linecap="round"/>

    <!-- flask body -->
    <path
      d="M66 -346
         V-338
         L58 -322
         C56.5 -319 58.4 -316 61.7 -316
         H82.3
         C85.6 -316 87.5 -319 86 -322
         L78 -338
         V-346"
      fill="none"
      stroke="url(#res-accent)"
      stroke-width="1.8"
      stroke-linejoin="round"/>

    <!-- fluid line -->
    <path d="M61 -324C66 -326 78 -326 83 -324"
      fill="none" stroke="#F5FDFF" stroke-width="1.3" stroke-linecap="round"/>

    <!-- bubbles / molecule nodes -->
    <circle cx="89" cy="-340" r="2.3" fill="#F5FDFF"/>
    <circle cx="96" cy="-333" r="1.8" fill="url(#res-accent)"/>
    <path d="M90.5 -338.5L94.5 -334.8" stroke="#F5FDFF" stroke-width="1.1" stroke-linecap="round"/>
  </g>

  <!-- side nodes -->
  <circle cx="42" cy="-334" r="6.5"
    fill="#0D2134"
    stroke="rgba(212,249,255,0.30)" stroke-width="1"/>
  <circle cx="42" cy="-334" r="2.2" fill="#D8FBFF"/>

  <circle cx="102" cy="-334" r="6.5"
    fill="#0D2134"
    stroke="rgba(212,249,255,0.30)" stroke-width="1"/>
  <circle cx="102" cy="-334" r="2.2" fill="#D8FBFF"/>

  <!-- connectors -->
  <path d="M144 -324H158"
    stroke="rgba(186,246,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M72 -366V-380"
    stroke="rgba(186,246,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="72" y="-296"
    text-anchor="middle"
    fill="#F4FBFF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.3"
    font-weight="700"
    letter-spacing="0.2">
    Research Lab
  </text>

  <text x="72" y="-284"
    text-anchor="middle"
    fill="rgba(214,235,255,0.92)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    400h
  </text>
                </g>
                <g class="hbuild locked" id="hb-senior_reg">
                   <defs>
    <!-- Base shell -->
    <linearGradient id="sr-shell" x1="292" y1="-394" x2="292" y2="-274" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182C48"/>
      <stop offset="0.50" stop-color="#101D33"/>
      <stop offset="1" stop-color="#08111F"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="sr-edge" x1="204" y1="-386" x2="380" y2="-272" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8DEEFF"/>
      <stop offset="0.42" stop-color="#F8FEFF"/>
      <stop offset="1" stop-color="#B9A2FF"/>
    </linearGradient>

    <!-- Prestige accent -->
    <linearGradient id="sr-accent" x1="270" y1="-360" x2="316" y2="-310" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#E4FDFF"/>
      <stop offset="0.44" stop-color="#A7ECFF"/>
      <stop offset="1" stop-color="#D0AEFF"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="sr-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 -332) rotate(90) scale(92 134)">
      <stop offset="0" stop-color="#B8F7FF" stop-opacity="0.12"/>
      <stop offset="0.34" stop-color="#A281FF" stop-opacity="0.18"/>
      <stop offset="0.62" stop-color="#654BD5" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#1A103D" stop-opacity="0"/>
    </radialGradient>

    <!-- Core -->
    <radialGradient id="sr-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 -334) rotate(90) scale(30 46)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.88"/>
      <stop offset="0.40" stop-color="#DBFAFF" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#C2A5FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="sr-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(292 -270) rotate(90) scale(18 96)">
      <stop offset="0" stop-color="#61E0FF" stop-opacity="0.30"/>
      <stop offset="0.48" stop-color="#C09DFF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#61E0FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="sr-panel" x1="236" y1="-360" x2="348" y2="-306" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1C3C59" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#10263B" stop-opacity="0.92"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="sr-roof" x1="226" y1="-372" x2="358" y2="-372" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#97F2FF"/>
      <stop offset="0.50" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#C1A8FF"/>
    </linearGradient>

    <!-- Rank strip -->
    <linearGradient id="sr-strip" x1="258" y1="-378" x2="326" y2="-378" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#E8FDFF"/>
      <stop offset="0.5" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#E1BCFF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="sr-shadow" x="202" y="-394" width="180" height="142" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="11" stdDeviation="8" flood-color="#020713" flood-opacity="0.80"/>
    </filter>

    <filter id="sr-glow">
      <feGaussianBlur stdDeviation="4"/>
    </filter>

    <filter id="sr-core-glow" x="264" y="-366" width="56" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient glow -->
  <ellipse cx="292" cy="-332" rx="134" ry="92" fill="url(#sr-aura)"/>
  <ellipse cx="292" cy="-270" rx="96" ry="18" fill="url(#sr-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M228 -366
       H356
       C366 -366 374 -358 374 -348
       V-300
       C374 -290 366 -282 356 -282
       H228
       C218 -282 210 -290 210 -300
       V-348
       C210 -358 218 -366 228 -366 Z"
    fill="none"
    stroke="url(#sr-edge)"
    stroke-opacity="0.18"
    stroke-width="2"
    filter="url(#sr-glow)"
  />

  <!-- building -->
  <g filter="url(#sr-shadow)">
    <path
      d="M228 -366
         H356
         C366 -366 374 -358 374 -348
         V-300
         C374 -290 366 -282 356 -282
         H228
         C218 -282 210 -290 210 -300
         V-348
         C210 -358 218 -366 228 -366 Z"
      fill="url(#sr-shell)"
      stroke="url(#sr-edge)"
      stroke-opacity="0.44"
      stroke-width="1.4"
    />

    <!-- roof beam -->
    <rect x="226" y="-372" width="132" height="6" rx="3" fill="url(#sr-roof)"/>

    <!-- rank strip -->
    <rect x="258" y="-378" width="68" height="3.5" rx="2" fill="url(#sr-strip)"/>

    <!-- pylons -->
    <rect x="224" y="-352" width="11" height="48" rx="5.5"
      fill="#0C1E32" stroke="rgba(230,251,255,0.18)" stroke-width="1"/>
    <rect x="349" y="-352" width="11" height="48" rx="5.5"
      fill="#0C1E32" stroke="rgba(230,251,255,0.18)" stroke-width="1"/>

    <!-- glass -->
    <rect x="240" y="-354" width="104" height="42" rx="12"
      fill="url(#sr-panel)"
      stroke="rgba(236,251,255,0.20)" stroke-width="1"/>

    <!-- central tower inset -->
    <rect x="274" y="-372" width="36" height="18" rx="8"
      fill="rgba(160,236,255,0.08)"
      stroke="rgba(224,251,255,0.14)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="252" y="-308" width="80" height="4" rx="2"
      fill="rgba(126,222,255,0.14)"/>

    <!-- soft bands -->
    <path d="M248 -342H266"
      stroke="rgba(228,251,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M318 -342H336"
      stroke="rgba(228,251,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>

    <path d="M250 -326H264"
      stroke="rgba(228,251,255,0.15)" stroke-width="1" stroke-linecap="round"/>
    <path d="M320 -326H334"
      stroke="rgba(228,251,255,0.15)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- prestige core -->
  <ellipse cx="292" cy="-334" rx="30" ry="46" fill="url(#sr-core)"/>

  <!-- Senior Registrar icon -->
  <g filter="url(#sr-core-glow)">
    <!-- rank chevrons -->
    <path d="M280 -344L292 -334L304 -344"
      fill="none" stroke="url(#sr-accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M283 -336L292 -328L301 -336"
      fill="none" stroke="#F7FEFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/>

    <!-- central badge -->
    <circle cx="292" cy="-319" r="6.5"
      fill="none" stroke="url(#sr-accent)" stroke-width="1.7"/>
    <path d="M292 -323V-315" stroke="#F7FEFF" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M288 -319H296" stroke="#F7FEFF" stroke-width="1.3" stroke-linecap="round"/>
  </g>

  <!-- side nodes -->
  <circle cx="256" cy="-332" r="6.5"
    fill="#0D2134"
    stroke="rgba(218,250,255,0.30)" stroke-width="1"/>
  <circle cx="256" cy="-332" r="2.2" fill="#DDFBFF"/>

  <circle cx="328" cy="-332" r="6.5"
    fill="#0D2134"
    stroke="rgba(218,250,255,0.30)" stroke-width="1"/>
  <circle cx="328" cy="-332" r="2.2" fill="#DDFBFF"/>

  <!-- connectors -->
  <path d="M210 -322H196"
    stroke="rgba(192,247,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M374 -322H388"
    stroke="rgba(192,247,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M292 -366V-380"
    stroke="rgba(192,247,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="292" y="-292"
    text-anchor="middle"
    fill="#F5FBFF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.1"
    font-weight="700"
    letter-spacing="0.18">
    Senior Registrar
  </text>

  <text x="292" y="-280"
    text-anchor="middle"
    fill="rgba(218,236,255,0.92)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    500h
  </text>
                </g>

                <!-- PENTHOUSE: CONSULTANT -->
                <g class="hbuild locked" id="hb-consultant">
               <defs>
    <!-- Base shell -->
    <linearGradient id="con-shell" x1="180" y1="-506" x2="180" y2="-382" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182D49"/>
      <stop offset="0.50" stop-color="#101D34"/>
      <stop offset="1" stop-color="#08111F"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="con-edge" x1="88" y1="-498" x2="272" y2="-378" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#95F2FF"/>
      <stop offset="0.42" stop-color="#FCFEFF"/>
      <stop offset="1" stop-color="#C1A7FF"/>
    </linearGradient>

    <!-- Prestige accent -->
    <linearGradient id="con-accent" x1="156" y1="-468" x2="204" y2="-414" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ECFEFF"/>
      <stop offset="0.44" stop-color="#B2F0FF"/>
      <stop offset="1" stop-color="#D7B3FF"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="con-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -442) rotate(90) scale(96 138)">
      <stop offset="0" stop-color="#C5FAFF" stop-opacity="0.12"/>
      <stop offset="0.34" stop-color="#AA89FF" stop-opacity="0.18"/>
      <stop offset="0.62" stop-color="#6A4ED9" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#1A103D" stop-opacity="0"/>
    </radialGradient>

    <!-- Core -->
    <radialGradient id="con-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -444) rotate(90) scale(32 48)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.90"/>
      <stop offset="0.40" stop-color="#E5FCFF" stop-opacity="0.44"/>
      <stop offset="1" stop-color="#C9ABFF" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="con-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -378) rotate(90) scale(18 100)">
      <stop offset="0" stop-color="#66E3FF" stop-opacity="0.30"/>
      <stop offset="0.48" stop-color="#C7A3FF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#66E3FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="con-panel" x1="122" y1="-470" x2="238" y2="-412" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1D3D5A" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#10273C" stop-opacity="0.92"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="con-roof" x1="110" y1="-482" x2="250" y2="-482" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#A1F5FF"/>
      <stop offset="0.50" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#C8ADFF"/>
    </linearGradient>

    <!-- Rank strip -->
    <linearGradient id="con-strip" x1="144" y1="-488" x2="216" y2="-488" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F0FEFF"/>
      <stop offset="0.5" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#E8C1FF"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="con-shadow" x="84" y="-506" width="192" height="148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="12" stdDeviation="8" flood-color="#020713" flood-opacity="0.82"/>
    </filter>

    <filter id="con-glow">
      <feGaussianBlur stdDeviation="4"/>
    </filter>

    <filter id="con-core-glow" x="150" y="-474" width="60" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.9" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient glow -->
  <ellipse cx="180" cy="-442" rx="138" ry="96" fill="url(#con-aura)"/>
  <ellipse cx="180" cy="-378" rx="100" ry="18" fill="url(#con-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M112 -474
       H248
       C258 -474 266 -466 266 -456
       V-406
       C266 -396 258 -388 248 -388
       H112
       C102 -388 94 -396 94 -406
       V-456
       C94 -466 102 -474 112 -474 Z"
    fill="none"
    stroke="url(#con-edge)"
    stroke-opacity="0.18"
    stroke-width="2"
    filter="url(#con-glow)"
  />

  <!-- building -->
  <g filter="url(#con-shadow)">
    <path
      d="M112 -474
         H248
         C258 -474 266 -466 266 -456
         V-406
         C266 -396 258 -388 248 -388
         H112
         C102 -388 94 -396 94 -406
         V-456
         C94 -466 102 -474 112 -474 Z"
      fill="url(#con-shell)"
      stroke="url(#con-edge)"
      stroke-opacity="0.46"
      stroke-width="1.4"
    />

    <!-- roof beam -->
    <rect x="110" y="-482" width="140" height="6" rx="3" fill="url(#con-roof)"/>

    <!-- rank strip -->
    <rect x="144" y="-488" width="72" height="3.5" rx="2" fill="url(#con-strip)"/>

    <!-- top crown inset -->
    <rect x="160" y="-494" width="40" height="16" rx="8"
      fill="rgba(180,242,255,0.08)"
      stroke="rgba(232,252,255,0.14)" stroke-width="1"/>

    <!-- pylons -->
    <rect x="108" y="-458" width="11" height="50" rx="5.5"
      fill="#0C1E32" stroke="rgba(236,252,255,0.18)" stroke-width="1"/>
    <rect x="241" y="-458" width="11" height="50" rx="5.5"
      fill="#0C1E32" stroke="rgba(236,252,255,0.18)" stroke-width="1"/>

    <!-- glass -->
    <rect x="126" y="-458" width="108" height="44" rx="12"
      fill="url(#con-panel)"
      stroke="rgba(242,252,255,0.20)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="140" y="-410" width="80" height="4" rx="2"
      fill="rgba(132,225,255,0.14)"/>

    <!-- soft bands -->
    <path d="M134 -446H154"
      stroke="rgba(235,252,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M206 -446H226"
      stroke="rgba(235,252,255,0.22)" stroke-width="1.1" stroke-linecap="round"/>

    <path d="M136 -428H150"
      stroke="rgba(235,252,255,0.15)" stroke-width="1" stroke-linecap="round"/>
    <path d="M210 -428H224"
      stroke="rgba(235,252,255,0.15)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- prestige core -->
  <ellipse cx="180" cy="-444" rx="32" ry="48" fill="url(#con-core)"/>

  <!-- Consultant icon -->
  <g filter="url(#con-core-glow)">
    <!-- central medallion -->
    <circle cx="180" cy="-432" r="8"
      fill="none" stroke="url(#con-accent)" stroke-width="1.8"/>
    <path d="M180 -436V-428" stroke="#FAFEFF" stroke-width="1.35" stroke-linecap="round"/>
    <path d="M176 -432H184" stroke="#FAFEFF" stroke-width="1.35" stroke-linecap="round"/>

    <!-- laurels -->
    <path d="M169 -437C165.5 -435.5 163.5 -432.5 163 -428.5"
      fill="none" stroke="url(#con-accent)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M191 -437C194.5 -435.5 196.5 -432.5 197 -428.5"
      fill="none" stroke="url(#con-accent)" stroke-width="1.5" stroke-linecap="round"/>

    <!-- upper stars -->
    <path d="M172 -451L174 -447L178 -447L175 -444L176 -440L172 -442L168 -440L169 -444L166 -447L170 -447Z"
      fill="#FAFEFF" opacity="0.95"/>
    <path d="M188 -451L190 -447L194 -447L191 -444L192 -440L188 -442L184 -440L185 -444L182 -447L186 -447Z"
      fill="#FAFEFF" opacity="0.95"/>
  </g>

  <!-- side nodes -->
  <circle cx="144" cy="-440" r="6.5"
    fill="#0D2134"
    stroke="rgba(224,251,255,0.30)" stroke-width="1"/>
  <circle cx="144" cy="-440" r="2.2" fill="#E6FCFF"/>

  <circle cx="216" cy="-440" r="6.5"
    fill="#0D2134"
    stroke="rgba(224,251,255,0.30)" stroke-width="1"/>
  <circle cx="216" cy="-440" r="2.2" fill="#E6FCFF"/>

  <!-- connectors -->
  <path d="M94 -430H80"
    stroke="rgba(198,248,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M266 -430H280"
    stroke="rgba(198,248,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <path d="M180 -474V-488"
    stroke="rgba(198,248,255,0.30)"
    stroke-width="1.2" stroke-linecap="round"/>

  <!-- label -->
  <text x="180" y="-398"
    text-anchor="middle"
    fill="#F7FCFF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.3"
    font-weight="700"
    letter-spacing="0.18">
    Consultant
  </text>

  <text x="180" y="-386"
    text-anchor="middle"
    fill="rgba(222,238,255,0.92)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    750h
  </text>
                </g>

                <!-- ROOF / CROWN: CHIEF -->
                <g class="hbuild locked" id="hb-chief">
               <defs>
    <!-- Base shell -->
    <linearGradient id="dean-shell" x1="180" y1="-628" x2="180" y2="-486" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182E4B"/>
      <stop offset="0.48" stop-color="#101E35"/>
      <stop offset="1" stop-color="#08111F"/>
    </linearGradient>

    <!-- Edge glow -->
    <linearGradient id="dean-edge" x1="84" y1="-620" x2="276" y2="-482" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#A6F7FF"/>
      <stop offset="0.40" stop-color="#FFFFFF"/>
      <stop offset="0.78" stop-color="#D7C2FF"/>
      <stop offset="1" stop-color="#FFD36B"/>
    </linearGradient>

    <!-- Final prestige accent -->
    <linearGradient id="dean-accent" x1="154" y1="-586" x2="206" y2="-522" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F3FFFF"/>
      <stop offset="0.40" stop-color="#BFF5FF"/>
      <stop offset="0.75" stop-color="#DABEFF"/>
      <stop offset="1" stop-color="#FFC95A"/>
    </linearGradient>

    <!-- Ambient aura -->
    <radialGradient id="dean-aura" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -558) rotate(90) scale(108 152)">
      <stop offset="0" stop-color="#D0FCFF" stop-opacity="0.14"/>
      <stop offset="0.30" stop-color="#B694FF" stop-opacity="0.20"/>
      <stop offset="0.58" stop-color="#6F52DE" stop-opacity="0.12"/>
      <stop offset="0.80" stop-color="#FFC857" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#1A103D" stop-opacity="0"/>
    </radialGradient>

    <!-- Central core -->
    <radialGradient id="dean-core" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -560) rotate(90) scale(34 54)">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.94"/>
      <stop offset="0.34" stop-color="#EAFEFF" stop-opacity="0.58"/>
      <stop offset="0.68" stop-color="#D5B7FF" stop-opacity="0.24"/>
      <stop offset="1" stop-color="#FFC857" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground glow -->
    <radialGradient id="dean-ground" cx="0" cy="0" r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 -480) rotate(90) scale(20 108)">
      <stop offset="0" stop-color="#6BE5FF" stop-opacity="0.34"/>
      <stop offset="0.40" stop-color="#C7A4FF" stop-opacity="0.16"/>
      <stop offset="0.72" stop-color="#FFC857" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#6BE5FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass panel -->
    <linearGradient id="dean-panel" x1="118" y1="-590" x2="242" y2="-520" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1D3F5D" stop-opacity="0.94"/>
      <stop offset="1" stop-color="#10273D" stop-opacity="0.94"/>
    </linearGradient>

    <!-- Roof beam -->
    <linearGradient id="dean-roof" x1="104" y1="-604" x2="256" y2="-604" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#AEFAFF"/>
      <stop offset="0.40" stop-color="#FFFFFF"/>
      <stop offset="0.80" stop-color="#DCC3FF"/>
      <stop offset="1" stop-color="#FFD56E"/>
    </linearGradient>

    <!-- Final rank strip -->
    <linearGradient id="dean-strip" x1="142" y1="-610" x2="218" y2="-610" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F5FFFF"/>
      <stop offset="0.45" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#FFD98C"/>
    </linearGradient>

    <!-- Gold crown -->
    <linearGradient id="dean-crown" x1="162" y1="-622" x2="198" y2="-622" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFE39B"/>
      <stop offset="0.5" stop-color="#FFC857"/>
      <stop offset="1" stop-color="#FFB938"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="dean-shadow" x="80" y="-628" width="200" height="168" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="13" stdDeviation="9" flood-color="#020713" flood-opacity="0.84"/>
    </filter>

    <filter id="dean-glow">
      <feGaussianBlur stdDeviation="4.5"/>
    </filter>

    <filter id="dean-core-glow" x="148" y="-594" width="64" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="4.2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="dean-crown-glow" x="156" y="-634" width="48" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- ambient glow -->
  <ellipse cx="180" cy="-558" rx="152" ry="108" fill="url(#dean-aura)"/>
  <ellipse cx="180" cy="-480" rx="108" ry="20" fill="url(#dean-ground)"/>

  <!-- outer silhouette -->
  <path
    d="M110 -594
       H250
       C260 -594 268 -586 268 -576
       V-520
       C268 -510 260 -502 250 -502
       H110
       C100 -502 92 -510 92 -520
       V-576
       C92 -586 100 -594 110 -594 Z"
    fill="none"
    stroke="url(#dean-edge)"
    stroke-opacity="0.22"
    stroke-width="2.2"
    filter="url(#dean-glow)"
  />

  <!-- main citadel -->
  <g filter="url(#dean-shadow)">
    <path
      d="M110 -594
         H250
         C260 -594 268 -586 268 -576
         V-520
         C268 -510 260 -502 250 -502
         H110
         C100 -502 92 -510 92 -520
         V-576
         C92 -586 100 -594 110 -594 Z"
      fill="url(#dean-shell)"
      stroke="url(#dean-edge)"
      stroke-opacity="0.50"
      stroke-width="1.5"
    />

    <!-- top beam -->
    <rect x="104" y="-604" width="152" height="6" rx="3" fill="url(#dean-roof)"/>

    <!-- final strip -->
    <rect x="142" y="-610" width="76" height="3.5" rx="2" fill="url(#dean-strip)"/>

    <!-- central tower -->
    <rect x="158" y="-620" width="44" height="24" rx="10"
      fill="rgba(195,245,255,0.10)"
      stroke="rgba(244,254,255,0.16)" stroke-width="1"/>

    <!-- side pylons -->
    <rect x="106" y="-576" width="12" height="54" rx="6"
      fill="#0C1E32" stroke="rgba(240,252,255,0.20)" stroke-width="1"/>
    <rect x="242" y="-576" width="12" height="54" rx="6"
      fill="#0C1E32" stroke="rgba(240,252,255,0.20)" stroke-width="1"/>

    <!-- glass -->
    <rect x="124" y="-576" width="112" height="46" rx="13"
      fill="url(#dean-panel)"
      stroke="rgba(244,253,255,0.22)" stroke-width="1"/>

    <!-- lower platform -->
    <rect x="140" y="-526" width="80" height="4.5" rx="2.25"
      fill="rgba(138,228,255,0.16)"/>

    <!-- internal bands -->
    <path d="M132 -562H154"
      stroke="rgba(238,252,255,0.24)" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M206 -562H228"
      stroke="rgba(238,252,255,0.24)" stroke-width="1.1" stroke-linecap="round"/>

    <path d="M134 -542H150"
      stroke="rgba(238,252,255,0.16)" stroke-width="1" stroke-linecap="round"/>
    <path d="M210 -542H226"
      stroke="rgba(238,252,255,0.16)" stroke-width="1" stroke-linecap="round"/>
  </g>

  <!-- core -->
  <ellipse cx="180" cy="-560" rx="34" ry="54" fill="url(#dean-core)"/>

  <!-- crown -->
  <g filter="url(#dean-crown-glow)">
    <path
      d="M162 -620
         L168 -628
         L176 -618
         L180 -630
         L184 -618
         L192 -628
         L198 -620
         V-614
         H162Z"
      fill="url(#dean-crown)"
      stroke="rgba(255,238,179,0.65)"
      stroke-width="1"
      stroke-linejoin="round"/>
  </g>

  <!-- Dean icon -->
  <g filter="url(#dean-core-glow)">
    <!-- ceremonial medallion -->
    <circle cx="180" cy="-546" r="9"
      fill="none" stroke="url(#dean-accent)" stroke-width="1.9"/>
    <path d="M180 -550V-542" stroke="#FFFFFF" stroke-width="1.35" stroke-linecap="round"/>
    <path d="M176 -546H184" stroke="#FFFFFF" stroke-width="1.35" stroke-linecap="round"/>

    <!-- authority laurels -->
    <path d="M167 -551C163 -549 160.5 -545.5 160 -540.5"
      fill="none" stroke="url(#dean-accent)" stroke-width="1.55" stroke-linecap="round"/>
    <path d="M193 -551C197 -549 199.5 -545.5 200 -540.5"
      fill="none" stroke="url(#dean-accent)" stroke-width="1.55" stroke-linecap="round"/>

    <!-- lower ribbon -->
    <path d="M172 -535L180 -529L188 -535"
      fill="none" stroke="#FFF3CC" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- stars -->
    <path d="M170 -568L171.8 -564.5L175.8 -564.2L172.8 -561.8L173.8 -558L170 -560L166.2 -558L167.2 -561.8L164.2 -564.2L168.2 -564.5Z"
      fill="#FFFFFF" opacity="0.96"/>
    <path d="M190 -568L191.8 -564.5L195.8 -564.2L192.8 -561.8L193.8 -558L190 -560L186.2 -558L187.2 -561.8L184.2 -564.2L188.2 -564.5Z"
      fill="#FFE39B" opacity="0.98"/>
  </g>

  <!-- side nodes -->
  <circle cx="142" cy="-556" r="6.8"
    fill="#0D2134"
    stroke="rgba(232,252,255,0.32)" stroke-width="1"/>
  <circle cx="142" cy="-556" r="2.3" fill="#EEFDFF"/>

  <circle cx="218" cy="-556" r="6.8"
    fill="#0D2134"
    stroke="rgba(232,252,255,0.32)" stroke-width="1"/>
  <circle cx="218" cy="-556" r="2.3" fill="#FFE4A0"/>

  <!-- connectors -->
  <path d="M92 -546H78"
    stroke="rgba(205,249,255,0.32)"
    stroke-width="1.25" stroke-linecap="round"/>

  <path d="M268 -546H282"
    stroke="rgba(205,249,255,0.32)"
    stroke-width="1.25" stroke-linecap="round"/>

  <path d="M180 -594V-608"
    stroke="rgba(205,249,255,0.32)"
    stroke-width="1.25" stroke-linecap="round"/>

  <!-- label -->
  <text x="180" y="-512"
    text-anchor="middle"
    fill="#F9FDFF"
    font-family="Inter, DM Sans, Arial, sans-serif"
    font-size="8.6"
    font-weight="700"
    letter-spacing="0.18">
    Dean
  </text>

  <text x="180" y="-500"
    text-anchor="middle"
    fill="rgba(226,240,255,0.94)"
    font-family="JetBrains Mono, monospace"
    font-size="5.2"
    font-weight="600"
    letter-spacing="0.5">
    1000h
  </text>
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
      <span style="font-size:0.72rem;opacity:0.38;font-family:'DM Sans',sans-serif;">Made with 🩵 by 0SirAwesome · v0.5.23</span>
    </footer>
  </div><!-- /app -->

</div>
</div>
<!-- ══════════════════════ /THE WARD ══════════════════════════ -->
`);

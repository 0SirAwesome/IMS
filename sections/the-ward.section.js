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
                <g class="hbuild" id="hb-reception">
                  <rect x="100" y="440" width="160" height="50" rx="4" fill="rgba(68,84,106,0.55)" stroke="rgba(68,84,106,0.7)" stroke-width="1.2"/>
                  <rect x="155" y="450" width="50" height="40" rx="3" fill="rgba(68,84,106,0.3)" stroke="rgba(68,84,106,0.5)" stroke-width="1"/>
                  <text x="180" y="462" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="8" font-weight="700" fill="rgba(200,218,240,0.7)">🚪 Reception</text>
                  <text x="180" y="474" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="6" fill="rgba(140,170,220,0.4)">always open</text>
                </g>

                <!-- CASUALTY — left wing ground floor -->
                <g class="hbuild locked" id="hb-casualty">
                  <rect x="20" y="400" width="90" height="45" rx="4" fill="rgba(224,92,110,0.4)" stroke="rgba(224,92,110,0.55)" stroke-width="1.2"/>
                  <ellipse cx="65" cy="395" rx="18" ry="6" fill="rgba(224,92,110,0.2)"/>
                  <text x="65" y="418" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(224,92,110,0.9)">🚑</text>
                  <text x="65" y="430" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7" font-weight="700" fill="rgba(200,218,240,0.7)">Casualty</text>
                  <text x="65" y="440" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">1h</text>
                </g>

                <!-- EMERGENCY — right wing ground floor -->
                <g class="hbuild locked" id="hb-emergency">
                  <rect x="250" y="400" width="90" height="45" rx="4" fill="rgba(237,125,49,0.4)" stroke="rgba(237,125,49,0.55)" stroke-width="1.2"/>
                  <text x="295" y="418" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7.5" font-weight="700" fill="rgba(237,125,49,0.9)">🚨</text>
                  <text x="295" y="430" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="7" font-weight="700" fill="rgba(200,218,240,0.7)">Emergency</text>
                  <text x="295" y="440" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(140,170,220,0.35)">2h</text>
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

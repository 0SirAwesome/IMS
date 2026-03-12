(() => {
  const html = `\n<!-- ════════════════════════ BRANCH: Progress Tracker ════════════════════════ -->
<div class="page" id="page-progress">

  <div class="subj-hero">
    <div class="subj-hero-inner">
      <div class="breadcrumb">
        <button onclick="showPage('home')">Home</button>
        <span>›</span>
        <span>Progress Tracker</span>
      </div>
      <h1>📊 Progress Tracker</h1>
      <p>Track which subjects and resources you've covered. Saved in your browser.</p>
    </div>
  </div>

  <div class="subjects-container">
    <div class="section-label" style="margin-bottom:0.5rem;">First Year</div>
    <div class="progress-grid" id="progress-y1">
      <!-- Filled by JS -->
    </div>
    <div class="section-label" style="margin: 2rem 0 0.5rem;">Second Year</div>
    <div class="progress-grid" id="progress-y2">
      <!-- Filled by JS -->
    </div>
    <div class="section-label" style="margin: 2rem 0 0.5rem;">Third Year</div>
    <div class="progress-grid" id="progress-y3">
      <!-- Filled by JS -->
    </div>
    <div class="section-label" style="margin: 2rem 0 0.5rem;">Final Year</div>
    <div class="progress-grid" id="progress-y4">
      <!-- Filled by JS -->
    </div>

    <div style="margin-top: 3rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(68,114,196,0.18); border-radius: var(--radius); padding: 2rem;">
      <div style="font-family:'Lora',serif; font-size:1.1rem; font-weight:700; margin-bottom:1.25rem; color:#d0e4ff;">Topic Checklist</div>
      <div id="checklist-container"></div>
    </div>
  </div>

  <div class="suggestions-section">
    <div class="suggestions-inner">
      <h3>💬 Have a Suggestion?</h3>
      <p>Found something outdated or have a resource to add? Tell us below.</p>
      <div class="suggestions-form">
        <textarea class="suggestions-textarea" id="suggest-prog" placeholder="Have a resource to add? Found something outdated? Tell us."></textarea>
        <button class="suggestions-submit" onclick="sendSuggestion('suggest-prog','success-prog','Progress Tracker Page')">Send Suggestion</button>
        <div class="suggestions-success" id="success-prog">✅ Thanks! Your suggestion has been sent. We'll review it soon.</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="footer-logo" style="display:flex;align-items:center;gap:0.5rem;">
      <img id="footer-logo-img-2" alt="IMS" style="width:24px;height:24px;border-radius:50%;object-fit:cover;opacity:0.85;">
      The Indian Medical Server
    </div>
    <p>Made by medical students, for medical students</p>
    <div class="footer-links" style="display:flex;align-items:center;gap:0.85rem;justify-content:space-between;">
      <a class="btn btn-discord" href="https://discord.gg/eKevY6F2pa" target="_blank" style="font-size:0.8rem; padding:0.4rem 1rem;">Join Discord</a>
      <span style="font-size:0.72rem;opacity:0.38;font-family:'DM Sans',sans-serif;">Made with 🩵 by 0SirAwesome · v0.5.8</span>
    </div>
  </footer>
</div>
`;
  const scriptTag = document.currentScript || Array.from(document.scripts || []).find(s => /progress-tracker\.section\.js$/.test(s.src || ''));
  if (scriptTag) scriptTag.insertAdjacentHTML('beforebegin', html);
  else document.body?.insertAdjacentHTML('beforeend', html);
})();

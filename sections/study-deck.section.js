document.write(`\n<!-- ════════════════════════ BRANCH: Study Deck ════════════════════════ -->
<div class="page" id="page-guide">

  <div class="subj-hero">
    <div class="subj-hero-inner">
      <div class="breadcrumb">
        <button onclick="showPage('home')">Home</button>
        <span>›</span>
        <span>Study Guide</span>
      </div>
      <h1>MBBS Study Guide</h1>
      <p>Senior-curated resources for every subject — organised by year, category, and purpose.</p>
      <div class="year-tabs">
        <button class="year-tab active" id="tab-1" onclick="setYear('1')">🧠 First Year MBBS</button>
        <button class="year-tab" id="tab-2" onclick="setYear('2')">🔬 Second Year MBBS</button>
        <button class="year-tab" id="tab-3" onclick="setYear('3')">🏥 Third Year MBBS</button>
        <button class="year-tab" id="tab-4" onclick="setYear('4')">🩺 Fourth Year MBBS</button>
      </div>
    </div>
  </div>

  <!-- ═══ YEAR 1 ═══ -->
  <div class="year-panel active" id="year-1">
    <div class="subjects-container">

      <!-- ANATOMY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: var(--accent-glow);">🧠</div>
          <div>
            <h2>Anatomy</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">First Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Gross Anatomy</div>
            <h4>Primary Books</h4>
            <ul class="resource-list">
              <li>BD Chaurasia (BDC)</li>
              <li>Vishram Singh</li>
              <li>Gray's Anatomy (for discrepancies)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-videos">Videos</div>
            <h4>Visual Learning</h4>
            <ul class="resource-list">
              <li>Acland's Anatomy Videos</li>
              <li>Topic-specific YouTube videos</li>
              <li>Netter's Atlas (visual reference)</li>
              <li>Anatomy 3D Apps</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">General & Embryology</div>
            <h4>Sub-topics</h4>
            <ul class="resource-list">
              <li>BDC General Anatomy (incl. Genetics)</li>
              <li>Vishram Singh Embryology</li>
              <li>IB Singh Embryology</li>
              <li>Langman's Embryology</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Neuroanatomy</div>
            <h4>Neuro Resources</h4>
            <ul class="resource-list">
              <li>Vishram Singh Neuroanatomy</li>
              <li>Snell's Clinical Neuroanatomy</li>
              <li>Snell's Clinical Anatomy</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>College + senior resources</li>
              <li>Asterion Practical Handbook</li>
              <li>Histology, Osteology, Soft Parts</li>
              <li>X-rays & Contrast (included)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Pink boxes in BDC</li>
              <li>Blue boxes in Vishram Singh</li>
              <li>Always add clinical correlation</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki</div>
            <h4>Active Recall</h4>
            <ul class="resource-list">
              <li>Dope Anatomy Anki Deck</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-questions">Practice Questions</div>
            <h4>Question Banks</h4>
            <ul class="resource-list">
              <li>Vishram Singh Selective Anatomy</li>
              <li>Past university papers</li>
              <li>Important question lists from seniors</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- BIOCHEMISTRY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: #fef9c3;">🧪</div>
          <div>
            <h2>Biochemistry</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">First Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Vasudevan</li>
              <li>Satyanarayan</li>
              <li>Lippincott (great for quizzes)</li>
              <li>Harper (best diagrams + depth)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-videos">Videos</div>
            <h4>Online Resources</h4>
            <ul class="resource-list">
              <li>Topic-specific YouTube videos</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Singhal Case Book</li>
              <li>End-of-chapter cases in Vasudevan</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Satyanarayan (also quick review)</li>
              <li>Singhal Review Book</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-questions">Practice Questions</div>
            <h4>Question Banks</h4>
            <ul class="resource-list">
              <li>Rebecca James</li>
              <li>Vasudevan end-of-chapter questions</li>
              <li>Past university papers</li>
              <li>Important question lists from seniors</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- PHYSIOLOGY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: #fce7f3;">🫀</div>
          <div>
            <h2>Physiology</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">First Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Guyton & Hall (South Asia Edition)</li>
              <li>GK Pal Comprehensive Physiology</li>
              <li>Sembulingam Essentials</li>
              <li>AK Jain</li>
              <li>Ganong (best for quizzes)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>VD Joshi</li>
              <li>BRS Physiology</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>College + senior resources</li>
              <li>CL Ghai Practical Physiology</li>
              <li>Topic-specific YouTube videos</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Common textbook diseases</li>
              <li>Focus on clinical history</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki</div>
            <h4>Active Recall</h4>
            <ul class="resource-list">
              <li>Anking Physiology Deck</li>
              <li>Physeo Anki Decks</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-videos">Videos</div>
            <h4>Online Learning</h4>
            <ul class="resource-list">
              <li>Ninja Nerd (highly recommended)</li>
              <li>Topic-specific YouTube videos</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-questions">Practice Questions</div>
            <h4>Question Banks</h4>
            <ul class="resource-list">
              <li>Guyton Review Book</li>
              <li>BJ Notes</li>
              <li>Important question lists from seniors</li>
              <li>Past university papers</li>
            </ul>
          </div>
        </div>
      </div>

    </div><!-- /subjects-container -->

    <!-- SUGGESTIONS YEAR 1 -->
    <div class="suggestions-section">
      <div class="suggestions-inner">
        <h3>💬 Suggest a Resource</h3>
        <p>Using this for First Year MBBS? Have a resource to add or found something outdated? Tell us below.</p>
        <div class="suggestions-form">
          <textarea class="suggestions-textarea" id="suggest-y1" placeholder="Have a resource to add? Found something outdated? Tell us."></textarea>
          <button class="suggestions-submit" onclick="sendSuggestion('suggest-y1','success-y1','First Year MBBS Guide')">Send Suggestion</button>
          <div class="suggestions-success" id="success-y1">✅ Thanks! Your suggestion has been sent. We'll review it soon.</div>
        </div>
      </div>
    </div>

  </div><!-- /year-1 -->

  <!-- ═══ YEAR 2 ═══ -->
  <div class="year-panel" id="year-2">
    <div class="subjects-container">

      <!-- PATHOLOGY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: #fee2e2;">🔬</div>
          <div>
            <h2>Pathology</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Second Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Robbins & Cotran (gold standard)</li>
              <li>Harshmohan (widely used, lower depth)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Ramdas Nayak</li>
              <li>Video lecture notes (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>College + senior resources</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Harshmohan end-of-chapter</li>
              <li>Clinical presentation of diseases</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki</div>
            <h4>Active Recall</h4>
            <ul class="resource-list">
              <li>Anking Deck</li>
              <li>Duke Pathoma (concise option)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-videos">Videos</div>
            <h4>Online Learning</h4>
            <ul class="resource-list">
              <li>Pathoma Videos</li>
              <li>Sketchy Path</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-questions">Practice Questions</div>
            <h4>Question Banks</h4>
            <ul class="resource-list">
              <li>Important question lists from seniors</li>
              <li>Past university papers</li>
              <li>Devesh Mishra (NEET/INICET)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- PHARMACOLOGY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: var(--green-light);">💊</div>
          <div>
            <h2>Pharmacology</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Second Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>KD Tripathi</li>
              <li>Katzung (simpler, USMLE-oriented)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Garg Review (includes questions)</li>
              <li>Shanbhag (good summaries; some outdated drugs)</li>
              <li>Video lecture notes (latest drugs)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>College + senior resources</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki</div>
            <h4>Active Recall</h4>
            <ul class="resource-list">
              <li>Pepper Sketchy Deck</li>
              <li>Anking Pharmacology Cards</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-videos">Videos</div>
            <h4>Online Learning</h4>
            <ul class="resource-list">
              <li>Sketchy Pharm Videos</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-questions">Practice Questions</div>
            <h4>Question Banks</h4>
            <ul class="resource-list">
              <li>Important question lists from seniors</li>
              <li>Past university papers</li>
              <li>Garg Review Question Bank</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- MICROBIOLOGY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: var(--purple-light);">🦠</div>
          <div>
            <h2>Microbiology</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Second Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Apurba Sastry (best UG infectious diseases text)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Apurba Sastry Review Book</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>College + senior resources</li>
              <li>Anuradha De Practical Microbiology</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Apurba Sastry end-of-chapter questions</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki</div>
            <h4>Active Recall</h4>
            <ul class="resource-list">
              <li>Sketchy Micro Deck</li>
              <li>Anking Micro Cards</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-videos">Videos</div>
            <h4>Online Learning</h4>
            <ul class="resource-list">
              <li>Sketchy Micro Videos</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-questions">Practice Questions</div>
            <h4>Question Banks</h4>
            <ul class="resource-list">
              <li>Important question lists from seniors</li>
              <li>Past university papers</li>
            </ul>
          </div>
        </div>
      </div>

    </div><!-- /subjects-container -->

    <!-- SUGGESTIONS YEAR 2 -->
    <div class="suggestions-section">
      <div class="suggestions-inner">
        <h3>💬 Suggest a Resource</h3>
        <p>Using this for Second Year MBBS? Have a resource to add or found something outdated? Tell us below.</p>
        <div class="suggestions-form">
          <textarea class="suggestions-textarea" id="suggest-y2" placeholder="Have a resource to add? Found something outdated? Tell us."></textarea>
          <button class="suggestions-submit" onclick="sendSuggestion('suggest-y2','success-y2','Second Year MBBS Guide')">Send Suggestion</button>
          <div class="suggestions-success" id="success-y2">✅ Thanks! Your suggestion has been sent. We'll review it soon.</div>
        </div>
      </div>
    </div>

  </div><!-- /year-2 -->

  <!-- ═══ YEAR 3 ═══ -->
  <div class="year-panel" id="year-3">
    <div class="subjects-container">

      <!-- ENT -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(91,155,213,0.15);">👂</div>
          <div>
            <h2>ENT</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Third Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Diseases of Ear, Nose, Throat — PL Dhingra &amp; Shruti Dhingra</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>ENT for Entrance Exams (EEE) — Dr Manisha Sinha Budhiraja</li>
              <li>Notes from Prep (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Resources given by your college and seniors</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>Third Minor Combined — cards based on EEE</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- OPHTHALMOLOGY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(45,158,87,0.15);">👁️</div>
          <div>
            <h2>Ophthalmology</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Third Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Khurana</li>
              <li>Parson's</li>
              <li>Soch Ophthal — concise with question answers</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Soch Ophthal (can double as review)</li>
              <li>Notes from Prep (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Resources given by your college and seniors</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>Third Minor Combined — cards based on Soch Ed 3</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- PSM -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(255,192,0,0.15);">🌍</div>
          <div>
            <h2>PSM</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Third Year MBBS — Preventive &amp; Social Medicine</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Park's PSM — go-to reference; all NEET numbers, definitions &amp; statistics come from here</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Short Notes in PSM — PVD Shetty (pointwise, sufficient for theory &amp; practical exams)</li>
              <li>Vivek Jain — concise, pointwise format</li>
              <li>Notes from Prep (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Learn to take a general case history in Medicine, Surgery, Paediatrics &amp; Obs-Gynae + additional PSM history</li>
              <li>Resources given by your college and seniors</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>Third Minor Combined — cards based on Vivek Jain</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>QBanks cover major review points well</li>
              <li>Consider making personal Anki decks for tricky topics — important calendar days, committees and their changes, etc.</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- FORENSIC MEDICINE -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(224,92,110,0.15);">⚖️</div>
          <div>
            <h2>Forensic Medicine</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Third Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Narayan Reddy — Synopsis</li>
              <li>Bardale</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review &amp; Practice</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Previous years' questions + QBanks from your PG prep apps — sufficient for thorough revision</li>
            </ul>
          </div>
        </div>
      </div>

    </div><!-- /subjects-container -->

    <!-- SUGGESTIONS YEAR 3 -->
    <div class="suggestions-section">
      <div class="suggestions-inner">
        <h3>💬 Suggest a Resource</h3>
        <p>Using this for Third Year MBBS? Have a resource to add or found something outdated? Tell us below.</p>
        <div class="suggestions-form">
          <textarea class="suggestions-textarea" id="suggest-y3" placeholder="Have a resource to add? Found something outdated? Tell us."></textarea>
          <button class="suggestions-submit" onclick="sendSuggestion('suggest-y3','success-y3','Third Year MBBS Guide')">Send Suggestion</button>
          <div class="suggestions-success" id="success-y3">✅ Thanks! Your suggestion has been sent. We'll review it soon.</div>
        </div>
      </div>
    </div>

  </div><!-- /year-3 -->

  <!-- ═══ YEAR 4 ═══ -->
  <div class="year-panel" id="year-4">
    <div class="subjects-container">

      <!-- MEDICINE -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(91,155,213,0.15);">🫀</div>
          <div>
            <h2>Medicine</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Fourth Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Davidson's Principles &amp; Practice of Medicine — great flowcharts</li>
              <li>Boloor — excellent for pre-exam rush; can get detailed in some sections</li>
              <li>Manipal Manual of Medicine — very basic, covers all topics superficially</li>
              <li>Apurba Sastry Essentials of Medical Microbiology — the best resource for Infectious &amp; STDs</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Notes from Prep and DAMS (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Resources given by your college and seniors</li>
              <li>Archith Boolor's Insider's Guide to Clinical Medicine — has everything</li>
              <li>PJ Mehta — smaller book, points for every case with discussion</li>
              <li>Kundu Bedside Clinics in Medicine I &amp; II — standard in some colleges</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>PJ Mehta</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>Watch YouTube videos to understand murmurs</li>
              <li>Ghanashyam Vaidya — viva voce questions and answers</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SURGERY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(224,92,110,0.15);">🔪</div>
          <div>
            <h2>Surgery</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Fourth Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Bailey &amp; Love — gold standard; not ideal for exams unless you present well</li>
              <li>Manipal Manual of Surgery — exam-oriented</li>
              <li>SRB — strong for differential diagnosis and informative tables</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Notes from Prep (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Resources given by your college and seniors</li>
              <li>S Das — read definitions of amputation, wound, swelling &amp; granulation tissue at minimum</li>
              <li>Pratik Patil — good for case format and viva review</li>
              <li>KEM students: review Sam D at least once as he is HoU</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Ghanashyam Vaidya videos — highly informative and useful</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- OBGYN -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(255,192,0,0.15);">🤱</div>
          <div>
            <h2>Obs &amp; Gynaecology</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Fourth Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Dutta — Obstetrics</li>
              <li>Dutta — Gynaecology</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Notes from Prep and DAMS (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Resources given by your college and seniors</li>
              <li>Sharmila Babu</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Sharmila Babu</li>
              <li>White Army YouTube videos</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- PAEDIATRICS -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(45,158,87,0.15);">🧒</div>
          <div>
            <h2>Paediatrics</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Fourth Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Ghai Essential Pediatrics</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Notes from Prep and DAMS (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Resources given by your college and seniors</li>
              <li>Aruchamy Pediatrics — very comprehensive; best for diet values and milestones</li>
              <li>Chheda Pediatrics — shorter than Aruchamy, used in some colleges; has a few errors so cross-check carefully</li>
              <li>Pratik Patil — best for last-minute viva and case format review; do NOT use for milestones</li>
              <li>Watch at least one White Army video — Cerebral Palsy with Prof YK Amdekar recommended to understand case presentation</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Aruchamy and Chheda</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ORTHOPAEDICS -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(122,90,171,0.15);">🦴</div>
          <div>
            <h2>Orthopaedics</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Fourth Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Essential Orthopaedics — Maheshwari</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Notes from Prep and DAMS (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Resources given by your college and seniors</li>
              <li>Watch YouTube videos for clinical tests and examination techniques</li>
              <li>Instruments in Surgery and Orthopaedics — Amrit Nasta on YouTube (2 parts; covers everything for instrument viva)</li>
              <li>Revise bones from your Anatomy textbook — long bones to vertebrae, skip nothing</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>Hellsingoutoftune's Ortho deck</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ANAESTHESIA & RADIOLOGY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(91,155,213,0.15);">💉</div>
          <div>
            <h2>Anaesthesia &amp; Radiology</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Fourth Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>SRB's Manual of Surgery — chapters on both Anaesthesia and Radiology; sufficient to pass theory exams</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Notes from Prep and DAMS (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Resources given by your college and seniors</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- DERMATOLOGY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(255,192,0,0.15);">🩹</div>
          <div>
            <h2>Dermatology</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Fourth Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Illustrated Synopsis of Dermatology &amp; Sexually Transmitted Diseases — Neena Khanna</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Exam Preparatory Manual for Undergraduates — Medicine by Archith Boolor</li>
              <li>Notes from Prep (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Resources given by your college and seniors</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>AnKing deck</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- PSYCHIATRY -->
      <div class="subject-block reveal">
        <div class="subject-header">
          <div class="subject-icon-wrap" style="background: rgba(122,90,171,0.15);">🧠</div>
          <div>
            <h2>Psychiatry</h2>
            <div style="font-size:0.8rem; color:var(--ink-3);">Fourth Year MBBS</div>
          </div>
        </div>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Primary Books</div>
            <h4>Core Textbooks</h4>
            <ul class="resource-list">
              <li>Exam Preparatory Manual for Undergraduates — Medicine by Archith Boolor (sufficient for theory exams)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Review Books</div>
            <h4>Quick Revision</h4>
            <ul class="resource-list">
              <li>Notes from Prep (if subscribed)</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-practicals">Practicals</div>
            <h4>Practical Prep</h4>
            <ul class="resource-list">
              <li>Resources given by your college and seniors</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-cases">Cases</div>
            <h4>Clinical Cases</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-anki">Anki Decks</div>
            <h4>Flashcard Decks</h4>
            <ul class="resource-list">
              <li>AnKing deck</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-review">Other Resources</div>
            <h4>Extra Materials</h4>
            <ul class="resource-list">
              <li>Know a source? Fill the form at the end of the page!</li>
            </ul>
          </div>
          <div class="resource-card">
            <div class="resource-card-tag tag-books">Practice Questions</div>
            <h4>Question Practice</h4>
            <ul class="resource-list">
              <li>IMP list from your seniors</li>
              <li>Past papers</li>
            </ul>
          </div>
        </div>
      </div>

    </div><!-- /subjects-container -->

    <!-- SUGGESTIONS YEAR 4 -->
    <div class="suggestions-section">
      <div class="suggestions-inner">
        <h3>💬 Suggest a Resource</h3>
        <p>Using this for Fourth Year MBBS? Have a resource to add or found something outdated? Tell us below.</p>
        <div class="suggestions-form">
          <textarea class="suggestions-textarea" id="suggest-y4" placeholder="Have a resource to add? Found something outdated? Tell us."></textarea>
          <button class="suggestions-submit" onclick="sendSuggestion('suggest-y4','success-y4','Fourth Year MBBS Guide')">Send Suggestion</button>
          <div class="suggestions-success" id="success-y4">✅ Thanks! Your suggestion has been sent. We'll review it soon.</div>
        </div>
      </div>
    </div>

  </div><!-- /year-4 -->

  <footer class="blossom-footer">
    <div style="display:flex;align-items:center;gap:0.85rem;">
      <span>Made by medical students, for medical students</span>
      <a href="https://discord.gg/eKevY6F2pa" target="_blank" class="blossom-footer-link">Join Discord ↗</a>
    </div>
    <span style="font-size:0.72rem;opacity:0.38;font-family:'DM Sans',sans-serif;">Made with 🩵 by 0SirAwesome · v0.5.23</span>
  </footer>
</div>


<!-- ════════════════════════ PROGRESS PAGE ════════════════════════ -->
<!-- ══════════════════════ PLAY PAGE ════════════════════════ -->
<!-- ══════════════════════ THE WARD PAGE ═════════════════════ -->
`);

---
permalink: /projects/
title: "Projects"
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Figtree:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --text-primary:    #111;
    --text-secondary:  #4a4a4a;
    --text-muted:      #888;
    --text-nav:        #777;
    --text-nav-active: #333;
    --link-blue:       #2F5EFF;
    --divider:         #e8e8e8;
    --divider-light:   #f0f0f0;
    --bg:              #fff;
    --img-border:      #eeeeee;
    --font-display:    'Instrument Serif', Georgia, serif;
    --font-body:       'Figtree', system-ui, sans-serif;
  }

  /* ─── Page Shell ──────────────────────────────────── */
  .pf-page {
    font-family: var(--font-body);
    color: var(--text-primary);
    background: var(--bg);
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 28px 140px;
    -webkit-font-smoothing: antialiased;
  }

  /* ─── Hero ────────────────────────────────────────── */
  .pf-hero {
    text-align: center;
    padding: 80px 0 68px;
    border-bottom: 1px solid var(--divider);
  }

  .pf-hero-title {
    font-family: var(--font-display);
    font-size: 2.6rem;
    font-weight: 400;
    font-style: italic;
    color: var(--text-primary);
    line-height: 1.25;
    max-width: 680px;
    margin: 0 auto 10px;
    letter-spacing: -0.01em;
  }

  .pf-hero-sub {
    font-size: 0.88rem;
    color: var(--text-muted);
    font-weight: 300;
    letter-spacing: 0.03em;
  }

  /* ─── Two-Column Layout ───────────────────────────── */
  .pf-layout {
    display: flex;
    align-items: flex-start;
    gap: 0;
  }

  /* ─── Left Content (80%) ──────────────────────────── */
  .pf-content {
    width: 81%;
    flex-shrink: 0;
    padding-right: 52px;
  }

  /* ─── Right Nav (19%) ─────────────────────────────── */
  .pf-nav {
    width: 19%;
    flex-shrink: 0;
    position: sticky;
    top: 44px;
    padding: 52px 0 0 28px;
    border-left: 1px solid var(--divider-light);
  }

  .pf-nav-label {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #bbb;
    margin-bottom: 18px;
  }

  .pf-nav ul { list-style: none; }

  .pf-nav ul li { margin-bottom: 10px; }

  .pf-nav ul li a {
    font-size: 0.72rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--text-nav);
    text-decoration: none;
    display: block;
    padding: 3px 0 3px 10px;
    border-left: 1.5px solid transparent;
    transition: color 0.12s;
  }

  .pf-nav ul li a:hover { color: var(--text-nav-active); }

  .pf-nav ul li a.active {
    color: var(--text-nav-active);
    border-left-color: var(--text-nav-active);
    font-weight: 500;
  }

  /* ─── Category Block ──────────────────────────────── */
  .pf-category {
    border-bottom: 1px solid var(--divider);
  }

  .pf-category-trigger {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 40px 0 36px;
    display: flex;
    align-items: center;
    gap: 14px;
    font-family: var(--font-body);
  }

  .pf-category-trigger:focus { outline: none; }

  .pf-cat-left { flex: 1; }

  .pf-cat-name {
    font-family: var(--font-display);
    font-size: 1.7rem;
    font-weight: 400;
    color: var(--text-primary);
    letter-spacing: -0.01em;
    line-height: 1.15;
    margin-bottom: 5px;
  }

  .pf-cat-summary {
    font-size: 0.82rem;
    color: var(--text-muted);
    font-weight: 300;
    line-height: 1.5;
  }

  .pf-cat-meta {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
  }

  .pf-cat-count {
    font-size: 0.65rem;
    color: #bbb;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 400;
  }

  .pf-cat-toggle {
    font-size: 1.15rem;
    color: #bbb;
    font-weight: 300;
    line-height: 1;
    user-select: none;
    width: 20px;
    text-align: center;
    transition: transform 0.12s, color 0.12s;
  }

  .pf-category.open .pf-cat-toggle {
    transform: rotate(45deg);
    color: #777;
  }

  /* ─── Category Body ───────────────────────────────── */
  .pf-category-body {
    display: none;
    padding-bottom: 36px;
  }

  .pf-category.open .pf-category-body {
    display: block;
  }

  /* ═══════════════════════════════════════════════════
     MECHANICAL DESIGN — Visual-Dominant Grid
  ═══════════════════════════════════════════════════ */

  .pf-cad-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    margin-top: 4px;
  }

  .pf-cad-card {
    cursor: pointer;
  }

  .pf-cad-img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    border: 1px solid var(--img-border);
    background: #fafafa;
    margin-bottom: 14px;
    aspect-ratio: 4/3;
  }

  .pf-cad-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.15s;
  }

  .pf-cad-card:hover .pf-cad-img-wrap img { opacity: 0.9; }

  /* Multi-image within one card */
  .pf-cad-img-multi {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    height: 100%;
  }

  .pf-cad-img-multi img {
    height: 100%;
    object-fit: cover;
  }

  .pf-cad-img-multi img:first-child {
    border-right: 1px solid var(--img-border);
  }

  .pf-cad-card-title {
    font-size: 0.92rem;
    font-weight: 500;
    color: var(--link-blue);
    margin-bottom: 5px;
    line-height: 1.3;
    transition: opacity 0.12s;
  }

  .pf-cad-card:hover .pf-cad-card-title { opacity: 0.75; }

  .pf-cad-card-tags {
    font-size: 0.76rem;
    color: var(--text-muted);
    font-weight: 300;
    line-height: 1.55;
  }

  /* Expanded detail for CAD card */
  .pf-cad-detail {
    display: none;
    grid-column: 1 / -1;
    padding: 24px 28px;
    background: #fafafa;
    border: 1px solid var(--divider-light);
    border-radius: 6px;
    margin-top: -8px;
  }

  .pf-cad-card.open + .pf-cad-detail,
  .pf-cad-detail.open {
    display: block;
  }

  .pf-cad-detail-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }

  .pf-detail-col-label {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #bbb;
    margin-bottom: 6px;
  }

  .pf-detail-col-text {
    font-size: 0.83rem;
    color: var(--text-secondary);
    font-weight: 300;
    line-height: 1.65;
  }

  /* ═══════════════════════════════════════════════════
     COMPACT SECTIONS (Control, Robotics, etc.)
  ═══════════════════════════════════════════════════ */

  .pf-project-list {
    margin-top: 4px;
  }

  .pf-project {
    border-top: 1px solid var(--divider-light);
  }

  .pf-project-trigger {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 18px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    font-family: var(--font-body);
  }

  .pf-project-trigger:focus { outline: none; }

  .pf-proj-title {
    font-size: 0.95rem;
    font-weight: 400;
    color: var(--link-blue);
    line-height: 1.35;
    margin-bottom: 3px;
    transition: opacity 0.12s;
  }

  .pf-project-trigger:hover .pf-proj-title { opacity: 0.7; }

  .pf-proj-title a {
    color: inherit;
    text-decoration: none;
  }

  .pf-proj-tags {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 300;
    line-height: 1.5;
  }

  .pf-proj-toggle {
    font-size: 1rem;
    color: #ccc;
    font-weight: 300;
    flex-shrink: 0;
    margin-top: 1px;
    transition: transform 0.12s, color 0.12s;
    user-select: none;
  }

  .pf-project.open .pf-proj-toggle {
    transform: rotate(45deg);
    color: #888;
  }

  /* Project detail panel */
  .pf-project-detail {
    display: none;
    padding: 4px 0 22px;
  }

  .pf-project.open .pf-project-detail {
    display: block;
  }

  .pf-detail-row {
    display: flex;
    gap: 32px;
    padding: 16px 0;
    border-top: 1px solid var(--divider-light);
  }

  .pf-detail-item {
    flex: 1;
  }

  .pf-proj-desc {
    font-size: 0.85rem;
    color: var(--text-secondary);
    font-weight: 300;
    line-height: 1.7;
    max-width: 580px;
    padding-top: 8px;
    border-top: 1px solid var(--divider-light);
  }

  /* Robotics small image */
  .pf-proj-img-sm {
    margin-top: 14px;
  }

  .pf-proj-img-sm img {
    max-width: 360px;
    width: 100%;
    height: auto;
    border-radius: 6px;
    border: 1px solid var(--img-border);
  }

  /* Status tag */
  .pf-status {
    display: inline-block;
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #888;
    background: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    padding: 2px 6px;
    margin-right: 8px;
    vertical-align: middle;
  }

  /* ─── Responsive ──────────────────────────────────── */
  @media (max-width: 860px) {
    .pf-layout { flex-direction: column; }
    .pf-nav {
      width: 100%;
      position: static;
      padding: 28px 0 0;
      border-left: none;
      border-top: 1px solid var(--divider-light);
      margin-bottom: 0;
    }
    .pf-nav ul { display: flex; flex-wrap: wrap; gap: 6px 20px; }
    .pf-nav ul li { margin-bottom: 0; }
    .pf-nav ul li a { border-left: none; padding-left: 0; }
    .pf-nav ul li a.active { border-left: none; border-bottom: 1.5px solid var(--text-nav-active); }
    .pf-content { width: 100%; padding-right: 0; }
    .pf-hero-title { font-size: 1.9rem; }
    .pf-cad-grid { grid-template-columns: 1fr; }
    .pf-cad-detail { grid-column: 1; }
    .pf-cad-detail-inner { grid-template-columns: 1fr; gap: 16px; }
  }
</style>

<div class="pf-page">

  <!-- ── Hero Statement ── -->
  <div class="pf-hero">
    <h1 class="pf-hero-title">Mechanical CAD-focused engineer.<br>Designing high-performance systems with precision and control.</h1>
    <p class="pf-hero-sub">SolidWorks · MATLAB/Simulink · Python · OpenCV · Arduino</p>
  </div>

  <div class="pf-layout">

    <!-- ══════════════════════════════════
         LEFT: CONTENT
    ══════════════════════════════════ -->
    <div class="pf-content">

      <!-- ════════════════════════════════
           1. MECHANICAL DESIGN — FIRST
      ════════════════════════════════ -->
      <div class="pf-category open" id="cat-mechanical">
        <button class="pf-category-trigger" onclick="toggleCat(this)">
          <div class="pf-cat-left">
            <div class="pf-cat-name">Mechanical Design</div>
            <div class="pf-cat-summary">Industrial CAD · Tolerance analysis · GD&T · High-speed spindle systems</div>
          </div>
          <div class="pf-cat-meta">
            <span class="pf-cat-count">3 projects</span>
            <span class="pf-cat-toggle">+</span>
          </div>
        </button>

        <div class="pf-category-body">
          <div class="pf-cad-grid" id="cad-grid">

            <!-- Card 1: Spindle -->
            <div class="pf-cad-card" id="cad-1" onclick="toggleCad('cad-1','detail-1')">
              <div class="pf-cad-img-wrap">
                <div class="pf-cad-img-multi">
                  <img src="/images/fuwode/hs spindle.png" alt="Spindle Cross-Section">
                  <img src="/images/fuwode/A12B.jpg" alt="Spindle Assembly">
                </div>
              </div>
              <div class="pf-cad-card-title">High-Speed Motor Spindle — Fuwode Machinery</div>
              <div class="pf-cad-card-tags">Industrial CNC spindle design · Bearing selection · Thermal-structural analysis · SolidWorks full assembly</div>
            </div>

            <!-- Card 2: Sewing Machine -->
            <div class="pf-cad-card" id="cad-2" onclick="toggleCad('cad-2','detail-2')">
              <div class="pf-cad-img-wrap">
                <img src="/images/solidworks_sewing%20machine.png" alt="SolidWorks Sewing Machine">
              </div>
              <div class="pf-cad-card-title">Vintage Sewing Machine — SolidWorks Assembly</div>
              <div class="pf-cad-card-tags">50+ component assembly · GD&T (ASME Y14.5) · Tolerance stack-up analysis · Kinematic validation</div>
            </div>

            <!-- Detail panel: Spindle (spans full width) -->
            <div class="pf-cad-detail" id="detail-1">
              <div class="pf-cad-detail-inner">
                <div>
                  <div class="pf-detail-col-label">Client</div>
                  <div class="pf-detail-col-text">Fuwode Machinery Co., Ltd.<br>Industrial CNC applications</div>
                </div>
                <div>
                  <div class="pf-detail-col-label">Scope</div>
                  <div class="pf-detail-col-text">Bearing selection · Thermal management · Structural integrity validation · Complete SolidWorks assemblies approved for precision manufacture</div>
                </div>
                <div>
                  <div class="pf-detail-col-label">Deliverables</div>
                  <div class="pf-detail-col-text">Full assembly models (A12B, A4 BT40) reviewed and approved for precision machining manufacture</div>
                </div>
              </div>
            </div>

            <!-- Detail panel: Sewing Machine -->
            <div class="pf-cad-detail" id="detail-2">
              <div class="pf-cad-detail-inner">
                <div>
                  <div class="pf-detail-col-label">Context</div>
                  <div class="pf-detail-col-text">Course Design · UBC</div>
                </div>
                <div>
                  <div class="pf-detail-col-label">Technical Scope</div>
                  <div class="pf-detail-col-text">50+ parts modeled from reference · Comprehensive tolerance stack-up · GD&T (ASME Y14.5) applied throughout</div>
                </div>
                <div>
                  <div class="pf-detail-col-label">Result</div>
                  <div class="pf-detail-col-text">Kinematic accuracy verified across all complex mechanical linkages · Fully manufacturable assembly</div>
                </div>
              </div>
            </div>

            <!-- Card 3: Warehouse (spans full width or last card) -->
            <div class="pf-cad-card" id="cad-3" onclick="toggleCad('cad-3','detail-3')">
              <div class="pf-cad-img-wrap">
                <img src="/images/warehouse.png" alt="Warehouse System">
              </div>
              <div class="pf-cad-card-title"><a href="https://github.com/ZhaolinWei-Clark/Automated-Warehouse-Management-System" onclick="event.stopPropagation()">Automated Warehouse Management System</a></div>
              <div class="pf-cad-card-tags">2D simulation platform · Graphical GUI · Robot task automation · UBC Course Design</div>
            </div>

            <!-- Detail panel: Warehouse -->
            <div class="pf-cad-detail" id="detail-3">
              <div class="pf-cad-detail-inner">
                <div>
                  <div class="pf-detail-col-label">Context</div>
                  <div class="pf-detail-col-text">Course Design · UBC</div>
                </div>
                <div>
                  <div class="pf-detail-col-label">Features</div>
                  <div class="pf-detail-col-text">2D environment · Configurable warehouse parameters · Item & robot management · Automated task execution via GUI</div>
                </div>
                <div>
                  <div class="pf-detail-col-label">Stack</div>
                  <div class="pf-detail-col-text">Python · GUI framework · 2D simulation engine</div>
                </div>
              </div>
            </div>

          </div><!-- /cad-grid -->
        </div><!-- /category-body -->
      </div><!-- /cat-mechanical -->


      <!-- ════════════════════════════════
           2. CONTROL & SIMULATION
      ════════════════════════════════ -->
      <div class="pf-category" id="cat-control">
        <button class="pf-category-trigger" onclick="toggleCat(this)">
          <div class="pf-cat-left">
            <div class="pf-cat-name">Control &amp; Simulation</div>
            <div class="pf-cat-summary">MATLAB/Simulink · Motor drives · Electromagnetic modeling · Python</div>
          </div>
          <div class="pf-cat-meta">
            <span class="pf-cat-count">2 projects</span>
            <span class="pf-cat-toggle">+</span>
          </div>
        </button>
        <div class="pf-category-body">
          <div class="pf-project-list">

            <div class="pf-project">
              <button class="pf-project-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-title"><a href="https://github.com/ZhaolinWei-Clark/BLDC_Motor_Drive_Modeling_Analysis" onclick="event.stopPropagation()">BLDC Motor Drive — Simulation &amp; MTPV Control</a></div>
                  <div class="pf-proj-tags">MATLAB · Simulink · Average Value Models · Maximum Torque Per Voltage strategy</div>
                </div>
                <span class="pf-proj-toggle">+</span>
              </button>
              <div class="pf-project-detail">
                <div class="pf-detail-row">
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Method</div>
                    <div class="pf-detail-col-text">Dynamic simulation via AVM · Optimal voltage lead angle formulation</div>
                  </div>
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Result</div>
                    <div class="pf-detail-col-text">Maximized high-speed torque output under voltage constraints</div>
                  </div>
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Context</div>
                    <div class="pf-detail-col-text">Electric Power and Energy Systems Group · UBC</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pf-project">
              <button class="pf-project-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-title"><a href="https://github.com/ZhaolinWei-Clark/Theoretical-calculation-of-permanent-magnet-motor-.git" onclick="event.stopPropagation()">Electromagnetic Calculation Tool — DC PM Motors</a></div>
                  <div class="pf-proj-tags">Python · Magnetic circuit analysis · Automated motor performance prediction</div>
                </div>
                <span class="pf-proj-toggle">+</span>
              </button>
              <div class="pf-project-detail">
                <div class="pf-detail-row">
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Function</div>
                    <div class="pf-detail-col-text">Automates magnetic circuit calculations · Predicts motor performance metrics</div>
                  </div>
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Impact</div>
                    <div class="pf-detail-col-text">Eliminates manual iteration cycles in early-stage motor design</div>
                  </div>
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Stack</div>
                    <div class="pf-detail-col-text">Python · Numerical methods</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <!-- ════════════════════════════════
           3. ROBOTICS
      ════════════════════════════════ -->
      <div class="pf-category" id="cat-robotics">
        <button class="pf-category-trigger" onclick="toggleCat(this)">
          <div class="pf-cat-left">
            <div class="pf-cat-name">Robotics</div>
            <div class="pf-cat-summary">Teleoperation · Stereo vision · Optical flow · Imitation learning</div>
          </div>
          <div class="pf-cat-meta">
            <span class="pf-cat-count">2 projects</span>
            <span class="pf-cat-toggle">+</span>
          </div>
        </button>
        <div class="pf-category-body">
          <div class="pf-project-list">

            <div class="pf-project">
              <button class="pf-project-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-title">
                    <span class="pf-status">In Progress</span>Low-Cost Dual-Arm Mobile Robot — AlohaMini
                  </div>
                  <div class="pf-proj-tags">Open-source framework · Hardware integration · Actuator control · Imitation learning data pipeline</div>
                </div>
                <span class="pf-proj-toggle">+</span>
              </button>
              <div class="pf-project-detail">
                <div class="pf-detail-row">
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Scope</div>
                    <div class="pf-detail-col-text">Full hardware integration · Teleoperation system · Data collection for imitation learning</div>
                  </div>
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Goal</div>
                    <div class="pf-detail-col-text">Validate imitation learning algorithms on household automation tasks</div>
                  </div>
                </div>
                <div class="pf-proj-img-sm">
                  <img src="/images/Image_robot_in_progress1.png" alt="AlohaMini Prototype">
                </div>
              </div>
            </div>

            <div class="pf-project">
              <button class="pf-project-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-title">3D Surgical Instrument &amp; Tissue Tracking System</div>
                  <div class="pf-proj-tags">Python · OpenCV · Lucas-Kanade optical flow · Stereo vision · &lt;0.8 px accuracy</div>
                </div>
                <span class="pf-proj-toggle">+</span>
              </button>
              <div class="pf-project-detail">
                <div class="pf-detail-row">
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Method</div>
                    <div class="pf-detail-col-text">Lucas-Kanade optical flow + Shi-Tomasi corners · Optimized pyramid layers</div>
                  </div>
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Result</div>
                    <div class="pf-detail-col-text">15% fewer tracking failures in rapid movement · Sub-pixel accuracy &lt;0.8 px</div>
                  </div>
                </div>
                <div class="pf-proj-img-sm">
                  <img src="/images/combined.png" alt="Surgical Tracking">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <!-- ════════════════════════════════
           4. EMBEDDED SYSTEMS
      ════════════════════════════════ -->
      <div class="pf-category" id="cat-embedded">
        <button class="pf-category-trigger" onclick="toggleCat(this)">
          <div class="pf-cat-left">
            <div class="pf-cat-name">Embedded Systems</div>
            <div class="pf-cat-summary">Arduino · Sensor calibration · Real-time control · HVAC automation</div>
          </div>
          <div class="pf-cat-meta">
            <span class="pf-cat-count">2 projects</span>
            <span class="pf-cat-toggle">+</span>
          </div>
        </button>
        <div class="pf-category-body">
          <div class="pf-project-list">

            <div class="pf-project">
              <button class="pf-project-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-title">Arduino Smart Cup Heater</div>
                  <div class="pf-proj-tags">Arduino · Temperature sensor calibration · LCD feedback · Closed-loop control · 10–80°C range</div>
                </div>
                <span class="pf-proj-toggle">+</span>
              </button>
              <div class="pf-project-detail">
                <div class="pf-detail-row">
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Hardware</div>
                    <div class="pf-detail-col-text">Arduino · NTC temperature sensor · LCD display · Button interface</div>
                  </div>
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Key Work</div>
                    <div class="pf-detail-col-text">Sensor offset calibration vs actual water temperature · Closed-loop heating to setpoint</div>
                  </div>
                </div>
                <div style="display:flex;gap:12px;margin-top:14px;">
                  <img src="/images/Poster Assembly Picture.PNG" alt="Assembly" style="max-width:200px;width:48%;border-radius:6px;border:1px solid var(--img-border);">
                  <img src="/images/Poster Explorsion Veiw.PNG" alt="Exploded" style="max-width:200px;width:48%;border-radius:6px;border:1px solid var(--img-border);">
                </div>
              </div>
            </div>

            <div class="pf-project">
              <button class="pf-project-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-title"><a href="https://github.com/ZhaolinWei-Clark/Autonomous-HVAC-System" onclick="event.stopPropagation()">Autonomous HVAC Control System — Sands China</a></div>
                  <div class="pf-proj-tags">GUI · Real-time feedback loops · Energy optimization · Intern project</div>
                </div>
                <span class="pf-proj-toggle">+</span>
              </button>
              <div class="pf-project-detail">
                <div class="pf-detail-row">
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Features</div>
                    <div class="pf-detail-col-text">Interactive GUI · Dynamic component monitoring &amp; control · Real-time feedback loops</div>
                  </div>
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Outcome</div>
                    <div class="pf-detail-col-text">Optimized energy consumption while maintaining comfort setpoints</div>
                  </div>
                </div>
                <div class="pf-proj-img-sm">
                  <img src="/images/HVAC.png" alt="HVAC GUI">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <!-- ════════════════════════════════
           5. RESEARCH & THESIS
      ════════════════════════════════ -->
      <div class="pf-category" id="cat-research">
        <button class="pf-category-trigger" onclick="toggleCat(this)">
          <div class="pf-cat-left">
            <div class="pf-cat-name">Research &amp; Thesis</div>
            <div class="pf-cat-summary">Additive manufacturing · Wearable sensing · Closed-loop control · Graduate research</div>
          </div>
          <div class="pf-cat-meta">
            <span class="pf-cat-count">2 projects</span>
            <span class="pf-cat-toggle">+</span>
          </div>
        </button>
        <div class="pf-category-body">
          <div class="pf-project-list">

            <div class="pf-project">
              <button class="pf-project-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-title"><a href="https://zhaolinwei-clark.github.io/mypaper/thesis/UBC_Thesis_ZhaolinWei_8928347__improved.pdf" onclick="event.stopPropagation()">Temperature Monitoring for Laser-based Directed Energy Deposition</a></div>
                  <div class="pf-proj-tags">L-DED · Closed-loop melt pool control · Thermal sensor integration · Additive manufacturing</div>
                </div>
                <span class="pf-proj-toggle">+</span>
              </button>
              <div class="pf-project-detail">
                <div class="pf-detail-row">
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Supervisors</div>
                    <div class="pf-detail-col-text">Ryozo Nagamune &amp; Xiaoliang Jin · CEL &amp; AMP Labs, UBC</div>
                  </div>
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Contribution</div>
                    <div class="pf-detail-col-text">Closed-loop thermal strategy stabilizing melt pool temperature · Reduced deposition defects</div>
                  </div>
                </div>
                <div class="pf-proj-img-sm">
                  <img src="/images/additivie set up.jpeg" alt="L-DED Setup">
                </div>
              </div>
            </div>

            <div class="pf-project">
              <button class="pf-project-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-title"><a href="https://zhaolinwei-clark.github.io/mypaper/thesis/final-project-report.pdf" onclick="event.stopPropagation()">Self-powered Flexible Sensors for Personal Health Evaluation</a></div>
                  <div class="pf-proj-tags">Wearable sensors · Material synthesis · Electromechanical characterization · Pulse &amp; muscle detection</div>
                </div>
                <span class="pf-proj-toggle">+</span>
              </button>
              <div class="pf-project-detail">
                <div class="pf-detail-row">
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Supervisor</div>
                    <div class="pf-detail-col-text">Junwen Zhong · Soft Sensors-Actuators-Robots Lab</div>
                  </div>
                  <div class="pf-detail-item">
                    <div class="pf-detail-col-label">Scope</div>
                    <div class="pf-detail-col-text">Material synthesis → electromechanical characterization → wearable device integration</div>
                  </div>
                </div>
                <div class="pf-proj-img-sm">
                  <img src="/images/fyp_um.png" alt="Flexible Sensor">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div><!-- /pf-content -->


    <!-- ══════════════════════════════════
         RIGHT: NAV
    ══════════════════════════════════ -->
    <nav class="pf-nav" id="pf-nav">
      <div class="pf-nav-label">Sections</div>
      <ul>
        <li><a href="#cat-mechanical" data-target="cat-mechanical">Mechanical</a></li>
        <li><a href="#cat-control"    data-target="cat-control">Control</a></li>
        <li><a href="#cat-robotics"   data-target="cat-robotics">Robotics</a></li>
        <li><a href="#cat-embedded"   data-target="cat-embedded">Embedded</a></li>
        <li><a href="#cat-research"   data-target="cat-research">Research</a></li>
      </ul>
    </nav>

  </div><!-- /pf-layout -->
</div><!-- /pf-page -->

<script>
  /* Category toggle */
  function toggleCat(btn) {
    btn.closest('.pf-category').classList.toggle('open');
  }

  /* Project accordion toggle */
  function toggleProj(btn) {
    btn.closest('.pf-project').classList.toggle('open');
  }

  /* CAD card detail toggle — full-width panel after every pair */
  function toggleCad(cardId, detailId) {
    var card   = document.getElementById(cardId);
    var detail = document.getElementById(detailId);

    var isOpen = detail.classList.contains('open');

    /* Close all details first */
    document.querySelectorAll('.pf-cad-detail').forEach(function(d) {
      d.classList.remove('open');
      d.style.display = 'none';
    });
    document.querySelectorAll('.pf-cad-card').forEach(function(c) {
      c.style.outline = 'none';
    });

    if (!isOpen) {
      detail.classList.add('open');
      detail.style.display = 'block';
      card.style.outline = '1.5px solid #ddd';
      card.style.outlineOffset = '3px';
      card.style.borderRadius = '6px';
    }
  }

  /* Active nav on scroll */
  (function () {
    var sections = ['cat-mechanical','cat-control','cat-robotics','cat-embedded','cat-research'];
    var links = {};
    sections.forEach(function(id) {
      var a = document.querySelector('[data-target="' + id + '"]');
      if (a) links[id] = a;
    });

    function onScroll() {
      var scrollY = window.scrollY + 130;
      var active = sections[0];
      sections.forEach(function(id) {
        var el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
          active = id;
        }
      });
      Object.keys(links).forEach(function(id) {
        links[id].classList.toggle('active', id === active);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();
</script>
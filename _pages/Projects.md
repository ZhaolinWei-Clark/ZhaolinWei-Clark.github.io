---
layout: splash
permalink: /projects/
title: "Projects"
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --text-primary:    #1a1a1a;
    --text-secondary:  #444;
    --text-muted:      #888;
    --text-nav:        #777;
    --text-nav-active: #222;
    --link:            #2F5EFF;
    --divider:         #e6e6e6;
    --divider-light:   #f0f0f0;
    --bg:              #ffffff;
    --bg-subtle:       #fafafa;
    --img-border:      #ebebeb;
    --tag-bg:          #f4f4f4;
    --detail-bg:       #f9f9f9;
    --font:            'Inter', 'SF Pro Display', 'Helvetica Neue', Helvetica, sans-serif;
  }

  /* ── Page Shell ─────────────────────────────────────── */
  .pf {
    font-family: var(--font);
    color: var(--text-primary);
    background: var(--bg);
    max-width: 1400px;
    width: 92%;
    margin: 0 auto;
    padding-bottom: 160px;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.8;
  }

  /* ── Hero ───────────────────────────────────────────── */
  .pf-hero {
    text-align: center;
    padding: 88px 0 72px;
    border-bottom: 1px solid var(--divider);
  }

  .pf-hero-title {
    font-size: 2.4rem;
    font-weight: 300;
    color: var(--text-primary);
    line-height: 1.3;
    letter-spacing: -0.025em;
    margin-bottom: 12px;
  }

  .pf-hero-title em {
    font-style: normal;
    font-weight: 500;
  }

  .pf-hero-sub {
    font-size: 0.82rem;
    color: var(--text-muted);
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  /* ── Layout ─────────────────────────────────────────── */
  .pf-layout {
    display: flex;
    align-items: flex-start;
  }

  /* ── Content (85%) ──────────────────────────────────── */
  .pf-content {
    width: 85%;
    flex-shrink: 0;
    padding-right: 56px;
  }

  /* ── Side Nav (15%) ─────────────────────────────────── */
  .pf-nav {
    width: 15%;
    flex-shrink: 0;
    position: sticky;
    top: 48px;
    padding-top: 56px;
    padding-left: 24px;
    border-left: 1px solid var(--divider-light);
  }

  .pf-nav-label {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #c0c0c0;
    margin-bottom: 20px;
  }

  .pf-nav ul { list-style: none; }
  .pf-nav ul li { margin-bottom: 11px; }

  .pf-nav ul li a {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-nav);
    text-decoration: none;
    display: block;
    padding: 2px 0 2px 10px;
    border-left: 1.5px solid transparent;
  }

  .pf-nav ul li a:hover { color: var(--text-nav-active); }

  .pf-nav ul li a.active {
    color: var(--text-nav-active);
    border-left-color: #555;
    font-weight: 500;
  }

  /* ── Category ───────────────────────────────────────── */
  .pf-cat {
    border-bottom: 1px solid var(--divider);
  }

  .pf-cat-trigger {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 44px 0 38px;
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: var(--font);
  }

  .pf-cat-trigger:focus { outline: none; }

  .pf-cat-info { flex: 1; }

  .pf-cat-title {
    font-size: 2rem;
    font-weight: 300;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 6px;
  }

  .pf-cat-desc {
    font-size: 0.8rem;
    color: var(--text-muted);
    font-weight: 400;
    letter-spacing: 0.02em;
  }

  .pf-cat-right {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
  }

  .pf-cat-count {
    font-size: 0.62rem;
    color: #c8c8c8;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .pf-cat-chevron {
    font-size: 1.1rem;
    color: #c0c0c0;
    font-weight: 300;
    user-select: none;
    width: 22px;
    text-align: center;
  }

  .pf-cat.open .pf-cat-chevron { transform: rotate(45deg); color: #888; }

  .pf-cat-body {
    display: none;
    padding-bottom: 40px;
  }

  .pf-cat.open .pf-cat-body { display: block; }

  /* ══════════════════════════════════════════════════════
     MECHANICAL — 2-col visual grid
  ══════════════════════════════════════════════════════ */

  .pf-cad-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  /* Image placeholder */
  .img-placeholder {
    width: 100%;
    aspect-ratio: 4/3;
    background-color: #f5f5f5;
    border-radius: 6px;
    border: 1px solid var(--img-border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .pf-cad-card {
    cursor: pointer;
  }

  .pf-cad-img {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    border: 1px solid var(--img-border);
    background: var(--bg-subtle);
    margin-bottom: 16px;
    aspect-ratio: 4/3;
  }

  .pf-cad-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pf-cad-card:hover .pf-cad-img img { opacity: 0.88; }

  .pf-cad-img-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    gap: 0;
  }

  .pf-cad-img-split img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pf-cad-img-split img:first-child {
    border-right: 1px solid var(--img-border);
  }

  .pf-cad-card-title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--link);
    line-height: 1.35;
    margin-bottom: 6px;
  }

  .pf-cad-card:hover .pf-cad-card-title {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .pf-cad-card-tags {
    font-size: 0.78rem;
    color: var(--text-muted);
    font-weight: 400;
    line-height: 1.6;
    text-align: justify;
    text-justify: inter-word;
  }

  /* Full-width detail panel */
  .pf-cad-detail {
    display: none;
    grid-column: 1 / -1;
    background: var(--detail-bg);
    border: 1px solid var(--divider-light);
    border-radius: 6px;
    padding: 32px 36px;
    margin-top: -16px;
  }

  .pf-cad-detail.open { display: block; }

  .pf-cad-detail-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 48px;
  }

  /* Large expanded image */
  .pf-cad-detail-img {
    margin-bottom: 28px;
  }

  .pf-cad-detail-img img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    border: 1px solid var(--img-border);
    display: block;
  }

  .pf-cad-detail-img-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    margin-bottom: 28px;
  }

  .pf-cad-detail-img-row img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    border: 1px solid var(--img-border);
    object-fit: cover;
    aspect-ratio: 4/3;
  }

  /* Detail fields */
  .pf-field { margin-bottom: 22px; }

  .pf-field-label {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #aaa;
    margin-bottom: 5px;
  }

  .pf-field-val {
    font-size: 0.88rem;
    color: var(--text-secondary);
    font-weight: 400;
    line-height: 1.75;
    text-align: justify;
    text-justify: inter-word;
  }

  .pf-field-val ul {
    list-style: none;
    padding: 0;
  }

  .pf-field-val ul li {
    padding-left: 14px;
    position: relative;
    margin-bottom: 3px;
  }

  .pf-field-val ul li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: #ccc;
    font-weight: 300;
  }

  /* Selected card outline */
  .pf-cad-card.selected .pf-cad-img {
    outline: 1.5px solid #bbb;
    outline-offset: 3px;
  }

  /* ══════════════════════════════════════════════════════
     COMPACT PROJECT LIST (Control, Robotics, Embedded, Research)
  ══════════════════════════════════════════════════════ */

  .pf-proj-list { margin-top: 4px; }

  .pf-proj {
    border-top: 1px solid var(--divider-light);
  }

  .pf-proj-trigger {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 22px 0;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    gap: 20px;
    font-family: var(--font);
  }

  .pf-proj-trigger:focus { outline: none; }

  .pf-proj-name {
    font-size: 1.05rem;
    font-weight: 400;
    color: var(--link);
    line-height: 1.35;
    margin-bottom: 4px;
  }

  .pf-proj-name a {
    color: inherit;
    text-decoration: none;
  }

  .pf-proj-trigger:hover .pf-proj-name {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .pf-proj-line {
    font-size: 0.8rem;
    color: var(--text-muted);
    font-weight: 400;
    line-height: 1.6;
  }

  .pf-proj-plus {
    font-size: 1rem;
    color: #ccc;
    font-weight: 300;
    user-select: none;
    padding-top: 4px;
  }

  .pf-proj.open .pf-proj-plus { transform: rotate(45deg); color: #999; }

  /* Project detail */
  .pf-proj-detail {
    display: none;
    padding: 0 0 26px;
  }

  .pf-proj.open .pf-proj-detail { display: block; }

  /* Expanded image (full width or medium) */
  .pf-proj-detail-img {
    margin-bottom: 24px;
    border-radius: 6px;
    border: 1px solid var(--img-border);
    overflow: hidden;
  }

  .pf-proj-detail-img img {
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
    border-radius: 6px;
  }

  .pf-proj-detail-img-duo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 24px;
    max-width: 620px;
  }

  .pf-proj-detail-img-duo img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    border: 1px solid var(--img-border);
  }

  .pf-proj-meta-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 32px;
    border-top: 1px solid var(--divider-light);
    padding-top: 18px;
  }

  .pf-proj-meta-row.cols-2 {
    grid-template-columns: 1fr 1fr;
  }

  /* Status pill */
  .pf-status {
    display: inline-block;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #888;
    background: #f2f2f2;
    border: 1px solid #e4e4e4;
    border-radius: 2px;
    padding: 2px 7px;
    margin-right: 8px;
    vertical-align: 1px;
  }

  /* ── Responsive ──────────────────────────────────────── */
  @media (max-width: 1024px) {
    .pf { width: 95%; }
    .pf-content { padding-right: 36px; }
  }

  @media (max-width: 820px) {
    .pf-layout { flex-direction: column; }
    .pf-nav {
      width: 100%; position: static;
      border-left: none; border-top: 1px solid var(--divider-light);
      padding: 24px 0 0; margin-bottom: 0;
    }
    .pf-nav ul { display: flex; flex-wrap: wrap; gap: 4px 18px; }
    .pf-nav ul li { margin-bottom: 0; }
    .pf-nav ul li a { border-left: none; padding-left: 0; }
    .pf-nav ul li a.active { border-left: none; border-bottom: 1.5px solid #555; }
    .pf-content { width: 100%; padding-right: 0; }
    .pf-hero-title { font-size: 1.7rem; }
    .pf-cat-title { font-size: 1.5rem; }
    .pf-cad-grid { grid-template-columns: 1fr; }
    .pf-cad-detail { grid-column: 1; }
    .pf-cad-detail-layout { grid-template-columns: 1fr; }
    .pf-cad-detail-img-row { grid-template-columns: 1fr 1fr; }
    .pf-proj-meta-row { grid-template-columns: 1fr 1fr; }
    .pf-proj-meta-row.cols-2 { grid-template-columns: 1fr; }
  }
</style>

<div class="pf">

  <!-- ── Hero ── -->
  <div class="pf-hero">
    <h1 class="pf-hero-title">
      <em>Mechanical CAD-driven engineering.</em><br>
      Precision assemblies. Control-integrated systems. Manufacturing-ready design.
    </h1>
    <p class="pf-hero-sub">SolidWorks &nbsp;·&nbsp; MATLAB / Simulink &nbsp;·&nbsp; Python &nbsp;·&nbsp; OpenCV &nbsp;·&nbsp; Arduino</p>
  </div>

  <div class="pf-layout">

    <!-- ══════════════════════════════════════════
         CONTENT
    ══════════════════════════════════════════ -->
    <div class="pf-content">


      <!-- ──────────────────────────────────────
           1. MECHANICAL DESIGN 🛠
      ────────────────────────────────────── -->
      <div class="pf-cat open" id="cat-mechanical">
        <button class="pf-cat-trigger" onclick="toggleCat(this)">
          <div class="pf-cat-info">
            <div class="pf-cat-title">Mechanical Design 🛠</div>
            <div class="pf-cat-desc">Industrial CAD &nbsp;·&nbsp; GD&amp;T &nbsp;·&nbsp; Tolerance analysis &nbsp;·&nbsp; High-speed spindle systems &nbsp;·&nbsp; SolidWorks</div>
          </div>
          <div class="pf-cat-right">
            <span class="pf-cat-count">3 projects</span>
            <span class="pf-cat-chevron">+</span>
          </div>
        </button>

        <div class="pf-cat-body">
          <div class="pf-cad-grid">

            <!-- Card A: Spindle -->
            <div class="pf-cad-card" id="cc-spindle" onclick="toggleCad('cc-spindle','cd-spindle')">
              <div class="pf-cad-img">
                <div class="pf-cad-img-split">
                  <img src="/images/fuwode/hs spindle.png" alt="Spindle cross-section">
                  <img src="/images/fuwode/A12B.jpg" alt="Spindle assembly">
                </div>
              </div>
              <div class="pf-cad-card-title">Fuwode Machinery — High-Speed Motor Spindle</div>
              <div class="pf-cad-card-tags">High-speed precision spindle assembly &nbsp;·&nbsp; Thermal-stable architecture &nbsp;·&nbsp; CNC-grade tolerance control &nbsp;·&nbsp; SolidWorks full assembly</div>
            </div>

            <!-- Card B: Sewing Machine -->
            <div class="pf-cad-card" id="cc-sewing" onclick="toggleCad('cc-sewing','cd-sewing')">
              <div class="pf-cad-img">
                <img src="/images/solidworks_sewing%20machine.png" alt="SolidWorks sewing machine model">
              </div>
              <div class="pf-cad-card-title">Vintage Sewing Machine — SolidWorks Assembly</div>
              <div class="pf-cad-card-tags">50+ component parametric assembly &nbsp;·&nbsp; GD&amp;T (ASME Y14.5) &nbsp;·&nbsp; Tolerance stack-up analysis &nbsp;·&nbsp; Kinematic linkage validation</div>
            </div>

            <!-- Detail: Spindle (full-width) -->
            <div class="pf-cad-detail" id="cd-spindle">
              <div class="pf-cad-detail-img-row">
                <img src="/images/fuwode/hs spindle.png" alt="Spindle cross-section">
                <img src="/images/fuwode/A12B.jpg" alt="Assembly A12B">
                <img src="/images/fuwode/A4_BT40_belt.JPG" alt="A4 BT40">
              </div>
              <div class="pf-cad-detail-layout">
                <div>
                  <div class="pf-field">
                    <div class="pf-field-label">Client</div>
                    <div class="pf-field-val">Fuwode Machinery Co., Ltd. — Industrial CNC Applications</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Scope</div>
                    <div class="pf-field-val">
                      <ul>
                        <li>Bearing selection and preload optimization</li>
                        <li>Thermal management modeling and compensation strategy</li>
                        <li>Structural rigidity and stiffness-to-weight validation</li>
                        <li>Complete SolidWorks assemblies approved for manufacture</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="pf-field">
                    <div class="pf-field-label">Deliverables</div>
                    <div class="pf-field-val">
                      <ul>
                        <li>Full assembly models: A12B, A4 BT40</li>
                        <li>Manufacturing-ready technical drawings</li>
                        <li>Tolerance stack-up verification report</li>
                        <li>GD&amp;T application per ASME Y14.5</li>
                        <li>Machining validation review</li>
                      </ul>
                    </div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Engineering Highlights</div>
                    <div class="pf-field-val">
                      <ul>
                        <li>High-speed bearing preload and thermal expansion compensation</li>
                        <li>Interference fit validation for precision concentricity</li>
                        <li>Structural stiffness-to-weight optimization under dynamic load</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Detail: Sewing Machine (full-width) -->
            <div class="pf-cad-detail" id="cd-sewing">
              <div class="pf-cad-detail-img" style="max-width:620px">
                <img src="/images/solidworks_sewing%20machine.png" alt="SolidWorks Model">
              </div>
              <div class="pf-cad-detail-layout">
                <div>
                  <div class="pf-field">
                    <div class="pf-field-label">Context</div>
                    <div class="pf-field-val">Course Design · UBC</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Technical Scope</div>
                    <div class="pf-field-val">
                      <ul>
                        <li>50+ components modeled from reference drawings</li>
                        <li>Comprehensive tolerance stack-up analysis across critical assemblies</li>
                        <li>GD&amp;T applied per ASME Y14.5 throughout all mating surfaces</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="pf-field">
                    <div class="pf-field-label">Engineering Highlights</div>
                    <div class="pf-field-val">
                      <ul>
                        <li>Kinematic accuracy verified across complex mechanical linkages</li>
                        <li>Full assembly validated for manufacturability</li>
                        <li>Geometric dimensioning ensuring functional motion clearances</li>
                      </ul>
                    </div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Deliverable</div>
                    <div class="pf-field-val">Fully constrained SolidWorks assembly with motion study and drawing package</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card C: Warehouse -->
            <div class="pf-cad-card" id="cc-warehouse" onclick="toggleCad('cc-warehouse','cd-warehouse')">
              <div class="pf-cad-img">
                <img src="/images/warehouse.png" alt="Warehouse Management System">
              </div>
              <div class="pf-cad-card-title">
                <a href="https://github.com/ZhaolinWei-Clark/Automated-Warehouse-Management-System" onclick="event.stopPropagation()">Automated Warehouse Management System</a>
              </div>
              <div class="pf-cad-card-tags">2D operations simulation &nbsp;·&nbsp; Graphical GUI &nbsp;·&nbsp; Autonomous robot task execution &nbsp;·&nbsp; UBC Course Design</div>
            </div>

            <!-- Card D: placeholder slot (keeps 2-col symmetry) -->
            <div style="display:flex;flex-direction:column;">
              <!-- intentionally empty for grid balance -->
            </div>

            <!-- Detail: Warehouse (full-width) -->
            <div class="pf-cad-detail" id="cd-warehouse">
              <div class="pf-cad-detail-img" style="max-width:560px">
                <img src="/images/warehouse.png" alt="Warehouse System">
              </div>
              <div class="pf-cad-detail-layout">
                <div>
                  <div class="pf-field">
                    <div class="pf-field-label">Context</div>
                    <div class="pf-field-val">Course Design · UBC</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Features</div>
                    <div class="pf-field-val">
                      <ul>
                        <li>2D warehouse environment with configurable layout parameters</li>
                        <li>Item and robot fleet management via GUI</li>
                        <li>Automated task scheduling and execution pipeline</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="pf-field">
                    <div class="pf-field-label">Stack</div>
                    <div class="pf-field-val">Python &nbsp;·&nbsp; GUI framework &nbsp;·&nbsp; 2D simulation engine</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Outcome</div>
                    <div class="pf-field-val">Fully functional simulation platform demonstrating warehouse operations management at scale</div>
                  </div>
                </div>
              </div>
            </div>

          </div><!-- /cad-grid -->
        </div>
      </div><!-- /cat-mechanical -->


      <!-- ──────────────────────────────────────
           2. CONTROL & SIMULATION ⚙
      ────────────────────────────────────── -->
      <div class="pf-cat" id="cat-control">
        <button class="pf-cat-trigger" onclick="toggleCat(this)">
          <div class="pf-cat-info">
            <div class="pf-cat-title">Control &amp; Simulation ⚙</div>
            <div class="pf-cat-desc">MATLAB / Simulink &nbsp;·&nbsp; Motor drive optimization &nbsp;·&nbsp; Electromagnetic modeling &nbsp;·&nbsp; Python</div>
          </div>
          <div class="pf-cat-right">
            <span class="pf-cat-count">2 projects</span>
            <span class="pf-cat-chevron">+</span>
          </div>
        </button>

        <div class="pf-cat-body">
          <div class="pf-proj-list">

            <!-- BLDC -->
            <div class="pf-proj">
              <button class="pf-proj-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-name">
                    <a href="https://github.com/ZhaolinWei-Clark/BLDC_Motor_Drive_Modeling_Analysis" onclick="event.stopPropagation()">BLDC Motor Drive — Simulation &amp; MTPV Control Optimization</a>
                  </div>
                  <div class="pf-proj-line">MTPV strategy &nbsp;·&nbsp; High-speed torque maximization &nbsp;·&nbsp; MATLAB/Simulink modeling &nbsp;·&nbsp; Average Value Model (AVM)</div>
                </div>
                <span class="pf-proj-plus">+</span>
              </button>
              <div class="pf-proj-detail">
                <div class="pf-proj-detail-img-duo">
                  <img src="/images/bldc_ubc_torque.png" alt="BLDC Torque Analysis">
                  <img src="/images/bldc_ubc_compare result vsi.png" alt="VSI Comparison">
                </div>
                <div class="pf-proj-meta-row">
                  <div class="pf-field">
                    <div class="pf-field-label">Context</div>
                    <div class="pf-field-val">Academic · Electric Power and Energy Systems Group, UBC</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Method</div>
                    <div class="pf-field-val">Dynamic simulation via AVM reducing computational overhead &nbsp;·&nbsp; Optimal voltage lead angle derived mathematically to maximize torque under voltage constraint</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Engineering Highlights</div>
                    <div class="pf-field-val">
                      <ul>
                        <li>MTPV control theory derivation from first principles</li>
                        <li>Voltage constraint boundary optimization at high speed</li>
                        <li>Computational efficiency gain via Average Value Models</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- EM Calc -->
            <div class="pf-proj">
              <button class="pf-proj-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-name">
                    <a href="https://github.com/ZhaolinWei-Clark/Theoretical-calculation-of-permanent-magnet-motor-.git" onclick="event.stopPropagation()">Electromagnetic Calculation Tool — DC Permanent Magnet Motors</a>
                  </div>
                  <div class="pf-proj-line">Python automation &nbsp;·&nbsp; Magnetic circuit analysis &nbsp;·&nbsp; Rapid motor design iteration &nbsp;·&nbsp; Performance prediction</div>
                </div>
                <span class="pf-proj-plus">+</span>
              </button>
              <div class="pf-proj-detail">
                <div class="pf-proj-meta-row cols-2">
                  <div class="pf-field">
                    <div class="pf-field-label">Function</div>
                    <div class="pf-field-val">Automates magnetic circuit calculations to predict motor performance metrics, eliminating manual iteration cycles in preliminary design.</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Technical Scope</div>
                    <div class="pf-field-val">
                      <ul>
                        <li>Magnetic flux path analysis across motor geometry</li>
                        <li>Automated reluctance and MMF calculation pipeline</li>
                        <li>Output: performance curves for rapid design comparison</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div><!-- /cat-control -->


      <!-- ──────────────────────────────────────
           3. RESEARCH & ADVANCED SYSTEMS 🔬
      ────────────────────────────────────── -->
      <div class="pf-cat" id="cat-research">
        <button class="pf-cat-trigger" onclick="toggleCat(this)">
          <div class="pf-cat-info">
            <div class="pf-cat-title">Research &amp; Advanced Systems 🔬</div>
            <div class="pf-cat-desc">Additive manufacturing &nbsp;·&nbsp; Closed-loop thermal control &nbsp;·&nbsp; Wearable sensing &nbsp;·&nbsp; Graduate research</div>
          </div>
          <div class="pf-cat-right">
            <span class="pf-cat-count">2 projects</span>
            <span class="pf-cat-chevron">+</span>
          </div>
        </button>

        <div class="pf-cat-body">
          <div class="pf-proj-list">

            <!-- L-DED -->
            <div class="pf-proj">
              <button class="pf-proj-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-name">
                    <a href="https://zhaolinwei-clark.github.io/mypaper/thesis/UBC_Thesis_ZhaolinWei_8928347__improved.pdf" onclick="event.stopPropagation()">Temperature Monitoring for Laser-based Directed Energy Deposition</a>
                  </div>
                  <div class="pf-proj-line">Closed-loop melt pool stabilization &nbsp;·&nbsp; Real-time thermal feedback &nbsp;·&nbsp; Defect suppression in additive manufacturing</div>
                </div>
                <span class="pf-proj-plus">+</span>
              </button>
              <div class="pf-proj-detail">
                <div class="pf-proj-detail-img">
                  <img src="/images/additivie set up.jpeg" alt="L-DED Setup" style="max-width:560px">
                </div>
                <div class="pf-proj-meta-row">
                  <div class="pf-field">
                    <div class="pf-field-label">Supervisors</div>
                    <div class="pf-field-val">Ryozo Nagamune &amp; Xiaoliang Jin<br>CEL &amp; AMP Labs, UBC</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Contribution</div>
                    <div class="pf-field-val">Closed-loop thermal control strategy stabilizing melt pool temperature in real time &nbsp;·&nbsp; Consistent layer deposition &nbsp;·&nbsp; Reduced thermal defects</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Significance</div>
                    <div class="pf-field-val">Addresses a primary failure mode in L-DED additive manufacturing through feedback-driven process control, improving part quality at the system level.</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Flexible Sensor -->
            <div class="pf-proj">
              <button class="pf-proj-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-name">
                    <a href="https://zhaolinwei-clark.github.io/mypaper/thesis/final-project-report.pdf" onclick="event.stopPropagation()">Self-powered Flexible Electromechanical Sensors for Personal Health</a>
                  </div>
                  <div class="pf-proj-line">Wearable sensor system &nbsp;·&nbsp; Material synthesis &nbsp;·&nbsp; Pulse &amp; muscle signal detection &nbsp;·&nbsp; No external power required</div>
                </div>
                <span class="pf-proj-plus">+</span>
              </button>
              <div class="pf-proj-detail">
                <div class="pf-proj-detail-img">
                  <img src="/images/fyp_um.png" alt="Flexible Sensor" style="max-width:500px">
                </div>
                <div class="pf-proj-meta-row cols-2">
                  <div class="pf-field">
                    <div class="pf-field-label">Supervisor</div>
                    <div class="pf-field-val">Junwen Zhong · Soft Sensors-Actuators-Robots Lab</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Full Pipeline</div>
                    <div class="pf-field-val">Material synthesis &nbsp;→&nbsp; electromechanical characterization &nbsp;→&nbsp; signal detection validation &nbsp;→&nbsp; wearable device integration</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div><!-- /cat-research -->


      <!-- ──────────────────────────────────────
           4. ROBOTICS 🤖
      ────────────────────────────────────── -->
      <div class="pf-cat" id="cat-robotics">
        <button class="pf-cat-trigger" onclick="toggleCat(this)">
          <div class="pf-cat-info">
            <div class="pf-cat-title">Robotics 🤖</div>
            <div class="pf-cat-desc">Teleoperation &nbsp;·&nbsp; Stereo vision &nbsp;·&nbsp; Optical flow &nbsp;·&nbsp; Imitation learning</div>
          </div>
          <div class="pf-cat-right">
            <span class="pf-cat-count">2 projects</span>
            <span class="pf-cat-chevron">+</span>
          </div>
        </button>

        <div class="pf-cat-body">
          <div class="pf-proj-list">

            <!-- AlohaMini -->
            <div class="pf-proj">
              <button class="pf-proj-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-name">
                    <span class="pf-status">In Progress</span>Low-Cost Dual-Arm Mobile Robot — AlohaMini Platform
                  </div>
                  <div class="pf-proj-line">Open-source framework &nbsp;·&nbsp; Full hardware integration &nbsp;·&nbsp; Actuator control &nbsp;·&nbsp; Imitation learning data pipeline</div>
                </div>
                <span class="pf-proj-plus">+</span>
              </button>
              <div class="pf-proj-detail">
                <div class="pf-proj-detail-img">
                  <img src="/images/Image_robot_in_progress1.png" alt="AlohaMini" style="max-width:460px">
                </div>
                <div class="pf-proj-meta-row cols-2">
                  <div class="pf-field">
                    <div class="pf-field-label">Scope</div>
                    <div class="pf-field-val">Full hardware assembly &nbsp;·&nbsp; Actuator control implementation &nbsp;·&nbsp; Teleoperation interface &nbsp;·&nbsp; Data collection pipeline for imitation learning</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Goal</div>
                    <div class="pf-field-val">Validate imitation learning algorithms on household manipulation tasks using a reproducible low-cost hardware platform.</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Surgical Tracking -->
            <div class="pf-proj">
              <button class="pf-proj-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-name">3D Surgical Instrument &amp; Tissue Tracking System</div>
                  <div class="pf-proj-line">Python · OpenCV · Lucas-Kanade optical flow · Stereo vision · &lt;0.8 px sub-pixel accuracy · 15% fewer failures</div>
                </div>
                <span class="pf-proj-plus">+</span>
              </button>
              <div class="pf-proj-detail">
                <div class="pf-proj-detail-img">
                  <img src="/images/combined.png" alt="Surgical Tracking" style="max-width:540px">
                </div>
                <div class="pf-proj-meta-row cols-2">
                  <div class="pf-field">
                    <div class="pf-field-label">Method</div>
                    <div class="pf-field-val">Lucas-Kanade optical flow combined with Shi-Tomasi corner detection &nbsp;·&nbsp; Optimized pyramid layer depth for rapid-motion robustness</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Results</div>
                    <div class="pf-field-val">15% reduction in tracking failures during rapid instrument movement &nbsp;·&nbsp; Sub-pixel 3D trajectory accuracy &lt;0.8 px achieved in real-time stereo pipeline</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div><!-- /cat-robotics -->


      <!-- ──────────────────────────────────────
           5. EMBEDDED SYSTEMS 💻
      ────────────────────────────────────── -->
      <div class="pf-cat" id="cat-embedded">
        <button class="pf-cat-trigger" onclick="toggleCat(this)">
          <div class="pf-cat-info">
            <div class="pf-cat-title">Embedded Systems 💻</div>
            <div class="pf-cat-desc">Arduino &nbsp;·&nbsp; Sensor calibration &nbsp;·&nbsp; Real-time feedback &nbsp;·&nbsp; HVAC automation</div>
          </div>
          <div class="pf-cat-right">
            <span class="pf-cat-count">2 projects</span>
            <span class="pf-cat-chevron">+</span>
          </div>
        </button>

        <div class="pf-cat-body">
          <div class="pf-proj-list">

            <!-- Smart Heater -->
            <div class="pf-proj">
              <button class="pf-proj-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-name">Arduino-Based Smart Cup Heater</div>
                  <div class="pf-proj-line">Closed-loop temperature control &nbsp;·&nbsp; Sensor offset calibration &nbsp;·&nbsp; LCD feedback &nbsp;·&nbsp; 10–80°C user-selectable range</div>
                </div>
                <span class="pf-proj-plus">+</span>
              </button>
              <div class="pf-proj-detail">
                <div class="pf-proj-detail-img-duo">
                  <img src="/images/Poster Assembly Picture.PNG" alt="Assembly">
                  <img src="/images/Poster Explorsion Veiw.PNG" alt="Exploded view">
                </div>
                <div class="pf-proj-meta-row cols-2">
                  <div class="pf-field">
                    <div class="pf-field-label">Hardware</div>
                    <div class="pf-field-val">Arduino &nbsp;·&nbsp; NTC temperature sensor &nbsp;·&nbsp; LCD display &nbsp;·&nbsp; Button interface &nbsp;·&nbsp; Heating element</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Key Work</div>
                    <div class="pf-field-val">Sensor offset calibration against actual water temperature &nbsp;·&nbsp; Closed-loop PID heating to user-defined setpoint with on-device LCD confirmation</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- HVAC -->
            <div class="pf-proj">
              <button class="pf-proj-trigger" onclick="toggleProj(this)">
                <div>
                  <div class="pf-proj-name">
                    <a href="https://github.com/ZhaolinWei-Clark/Autonomous-HVAC-System" onclick="event.stopPropagation()">Autonomous HVAC Control System — Sands China</a>
                  </div>
                  <div class="pf-proj-line">GUI-based automation &nbsp;·&nbsp; Real-time feedback loops &nbsp;·&nbsp; Energy consumption optimization &nbsp;·&nbsp; Intern project</div>
                </div>
                <span class="pf-proj-plus">+</span>
              </button>
              <div class="pf-proj-detail">
                <div class="pf-proj-detail-img">
                  <img src="/images/HVAC.png" alt="HVAC GUI" style="max-width:520px">
                </div>
                <div class="pf-proj-meta-row cols-2">
                  <div class="pf-field">
                    <div class="pf-field-label">Features</div>
                    <div class="pf-field-val">Interactive GUI &nbsp;·&nbsp; Dynamic HVAC component monitoring and control &nbsp;·&nbsp; Real-time closed-loop feedback for temperature regulation</div>
                  </div>
                  <div class="pf-field">
                    <div class="pf-field-label">Outcome</div>
                    <div class="pf-field-val">Autonomous system maintaining user comfort setpoints while optimizing energy consumption across room HVAC zones.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div><!-- /cat-embedded -->

    </div><!-- /pf-content -->


    <!-- ══════════════════════════════════════════
         SIDE NAV
    ══════════════════════════════════════════ -->
    <nav class="pf-nav" id="pf-nav">
      <div class="pf-nav-label">Sections</div>
      <ul>
        <li><a href="#cat-mechanical" data-target="cat-mechanical">Mechanical</a></li>
        <li><a href="#cat-control"    data-target="cat-control">Control</a></li>
        <li><a href="#cat-research"   data-target="cat-research">Research</a></li>
        <li><a href="#cat-robotics"   data-target="cat-robotics">Robotics</a></li>
        <li><a href="#cat-embedded"   data-target="cat-embedded">Embedded</a></li>
      </ul>
    </nav>

  </div><!-- /pf-layout -->
</div><!-- /pf -->

<script>
  /* ── Category accordion ── */
  function toggleCat(btn) {
    btn.closest('.pf-cat').classList.toggle('open');
  }

  /* ── Project accordion ── */
  function toggleProj(btn) {
    btn.closest('.pf-proj').classList.toggle('open');
  }

  /* ── CAD card expand ── */
  function toggleCad(cardId, detailId) {
    var card   = document.getElementById(cardId);
    var detail = document.getElementById(detailId);
    var isOpen = detail.classList.contains('open');

    /* Close all */
    document.querySelectorAll('.pf-cad-detail').forEach(function(d) {
      d.classList.remove('open');
    });
    document.querySelectorAll('.pf-cad-card').forEach(function(c) {
      c.classList.remove('selected');
    });

    if (!isOpen) {
      detail.classList.add('open');
      card.classList.add('selected');
      /* Smooth scroll into view */
      setTimeout(function() {
        detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 10);
    }
  }

  /* ── Scroll spy ── */
  (function () {
    var ids   = ['cat-mechanical','cat-control','cat-research','cat-robotics','cat-embedded'];
    var links = {};
    ids.forEach(function(id) {
      var a = document.querySelector('[data-target="' + id + '"]');
      if (a) links[id] = a;
    });

    function tick() {
      var y = window.scrollY + 120;
      var active = ids[0];
      ids.forEach(function(id) {
        var el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= y) active = id;
      });
      Object.keys(links).forEach(function(id) {
        links[id].classList.toggle('active', id === active);
      });
    }

    window.addEventListener('scroll', tick, { passive: true });
    tick();
  })();
</script>
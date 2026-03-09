---
layout: single
author_profile: true
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');

  :root {
    --ink: #0a0a0a;
    --steel: #1c1c1e;
    --slate: #3a3a3c;
    --mist: #8e8e93;
    --rule: #d1d1d6;
    --accent: #0a84ff;
    --accent-dim: rgba(10, 132, 255, 0.12);
    --surface: #f5f5f7;
    --white: #ffffff;
  }

  .hp-root {
    font-family: 'Inter', sans-serif;
    color: var(--ink);
    max-width: 780px;
    margin: 0 auto;
    padding: 0 0 80px 0;
    -webkit-font-smoothing: antialiased;
  }

  /* ── HERO ── */
  .hp-hero {
    padding: 64px 0 56px;
    border-bottom: 1px solid var(--rule);
    animation: fadeUp 0.7s ease both;
  }

  .hp-name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--ink);
    margin: 0 0 6px;
    line-height: 1.05;
  }

  .hp-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0 0 28px;
  }

  .hp-tagline {
    font-size: 1.18rem;
    font-weight: 300;
    color: var(--slate);
    line-height: 1.6;
    max-width: 580px;
    margin: 0;
    border-left: 3px solid var(--accent);
    padding-left: 20px;
  }

  .hp-tagline strong {
    font-weight: 500;
    color: var(--ink);
  }

  /* ── SECTIONS ── */
  .hp-section {
    padding: 52px 0 0;
    animation: fadeUp 0.7s ease both;
  }

  .hp-section:nth-child(2) { animation-delay: 0.1s; }
  .hp-section:nth-child(3) { animation-delay: 0.2s; }
  .hp-section:nth-child(4) { animation-delay: 0.3s; }

  .hp-section-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--mist);
    margin: 0 0 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hp-section-label::after {
    content: '';
    display: block;
    height: 1px;
    flex: 1;
    background: var(--rule);
  }

  /* ── WHO I AM ── */
  .hp-bio {
    font-size: 1.05rem;
    line-height: 1.78;
    color: var(--slate);
    margin: 0;
    font-weight: 300;
  }

  .hp-bio strong {
    color: var(--ink);
    font-weight: 500;
  }

  .hp-bio .mono {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.9em;
    color: var(--accent);
    font-weight: 500;
  }

  /* ── WHAT I DO ── */
  .hp-capabilities {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
    border-radius: 6px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .hp-cap-item {
    background: var(--white);
    padding: 24px 26px;
    transition: background 0.15s ease;
  }

  .hp-cap-item:hover {
    background: var(--accent-dim);
  }

  .hp-cap-title {
    font-family: 'Syne', sans-serif;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--ink);
    letter-spacing: -0.01em;
    margin: 0 0 6px;
    text-transform: uppercase;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
  }

  .hp-cap-desc {
    font-size: 0.88rem;
    color: var(--mist);
    line-height: 1.55;
    margin: 0;
    font-weight: 400;
  }

  /* ── WHY I STAND OUT ── */
  .hp-differentiators {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .hp-diff-item {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding: 18px 0;
    border-bottom: 1px solid var(--rule);
    transition: padding-left 0.2s ease;
  }

  .hp-diff-item:last-child {
    border-bottom: none;
  }

  .hp-diff-item:hover {
    padding-left: 6px;
  }

  .hp-diff-marker {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.72rem;
    color: var(--accent);
    font-weight: 500;
    flex-shrink: 0;
    padding-top: 2px;
  }

  .hp-diff-text {
    font-size: 0.96rem;
    color: var(--steel);
    line-height: 1.55;
    font-weight: 400;
  }

  .hp-diff-text strong {
    color: var(--ink);
    font-weight: 600;
  }

  /* ── CTA ── */
  .hp-cta {
    margin-top: 56px;
    padding: 32px 36px;
    background: var(--ink);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
    animation: fadeUp 0.7s 0.4s ease both;
  }

  .hp-cta-text {
    font-size: 1.0rem;
    color: rgba(255,255,255,0.7);
    font-weight: 300;
    margin: 0;
    line-height: 1.5;
  }

  .hp-cta-text strong {
    color: var(--white);
    font-weight: 500;
    display: block;
    font-size: 1.06rem;
    margin-bottom: 4px;
  }

  .hp-cta-link {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.85rem;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    border: 1px solid rgba(10, 132, 255, 0.4);
    padding: 10px 20px;
    border-radius: 4px;
    white-space: nowrap;
    transition: background 0.15s ease, border-color 0.15s ease;
  }

  .hp-cta-link:hover {
    background: rgba(10, 132, 255, 0.15);
    border-color: var(--accent);
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 600px) {
    .hp-capabilities {
      grid-template-columns: 1fr;
    }
    .hp-cta {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

<div class="hp-root">

  <!-- HERO -->
  <header class="hp-hero">
    <p class="hp-title">Mechanical &amp; Mechatronics Engineer · E.I.T. · M.Eng UBC</p>
    <p class="hp-tagline">
      <strong>Precision mechanical design, FEA-validated reliability, and automation-ready systems</strong> —
      built for industrial environments where failure is not an option.
    </p>
  </header>

  <!-- WHO I AM -->
  <section class="hp-section">
    <p class="hp-section-label">Who I Am</p>
    <p class="hp-bio">
      Master of Engineering graduate from the <strong>University of British Columbia</strong>, specializing at the intersection
      of <strong>mechanical design, manufacturing engineering, and dynamic systems</strong>.
      My foundation was forged in industry at <strong>Fuwode Machinery Co., Ltd</strong> — designing high-speed motor spindles,
      running failure investigations, and owning production quality on the floor.
      I bring <span class="mono">SolidWorks CSWP</span> certification and a <span class="mono">Six Sigma Green Belt</span>
      into every engagement, alongside hands-on research in additive manufacturing,
      BLDC motor modeling, and milling dynamics.
      I operate at the boundary where <strong>mechanism meets code</strong>.
    </p>
  </section>

  <!-- WHAT I DO -->
  <section class="hp-section">
    <p class="hp-section-label">What I Do</p>
    <ul class="hp-capabilities">

      <li class="hp-cap-item">
        <p class="hp-cap-title">Mechanical Design</p>
        <p class="hp-cap-desc">High-speed rotating machinery, shaft-spindle systems, GD&amp;T tolerancing, and design-for-manufacture in SolidWorks.</p>
      </li>

      <li class="hp-cap-item">
        <p class="hp-cap-title">Simulation &amp; FEA</p>
        <p class="hp-cap-desc">Stress, thermal, and fatigue analysis to validate designs before production — root cause isolation through finite element modeling.</p>
      </li>

      <li class="hp-cap-item">
        <p class="hp-cap-title">Manufacturing Engineering</p>
        <p class="hp-cap-desc">CNC toolpath programming in Mastercam, SOP authorship, BOM management, and Six Sigma-driven quality control.</p>
      </li>

      <li class="hp-cap-item">
        <p class="hp-cap-title">Control &amp; Dynamic Systems</p>
        <p class="hp-cap-desc">MATLAB/Simulink modeling of BLDC drives, milling stability analysis, and mechatronic system integration.</p>
      </li>

      <li class="hp-cap-item">
        <p class="hp-cap-title">Engineering Programming</p>
        <p class="hp-cap-desc">Python and MATLAB scripting for automation, data acquisition, thermal modeling, and diagnostics workflows.</p>
      </li>

      <li class="hp-cap-item">
        <p class="hp-cap-title">Failure Analysis</p>
        <p class="hp-cap-desc">Systematic root cause investigation — from field failure to corrective design change — across shaft fractures and thermal fatigue.</p>
      </li>

    </ul>
  </section>

  <!-- WHY I STAND OUT -->
  <section class="hp-section">
    <p class="hp-section-label">Why I Stand Out</p>
    <ul class="hp-differentiators">

      <li class="hp-diff-item">
        <span class="hp-diff-marker">01</span>
        <span class="hp-diff-text">
          <strong>Simulation-first design mindset.</strong>
          FEA and dynamic modeling are not afterthoughts — they drive geometry decisions from the first sketch.
        </span>
      </li>

      <li class="hp-diff-item">
        <span class="hp-diff-marker">02</span>
        <span class="hp-diff-text">
          <strong>Industry-hardened on the manufacturing floor.</strong>
          Spindle assembly, CNC programming, and process ownership at a production machinery manufacturer — not just lab experience.
        </span>
      </li>

      <li class="hp-diff-item">
        <span class="hp-diff-marker">03</span>
        <span class="hp-diff-text">
          <strong>Mechanical + controls breadth.</strong>
          Comfortable spanning the full stack from structural design to MATLAB/Simulink dynamic modeling and Python automation.
        </span>
      </li>

      <li class="hp-diff-item">
        <span class="hp-diff-marker">04</span>
        <span class="hp-diff-text">
          <strong>Certified quality engineer.</strong>
          Six Sigma Green Belt applied in live production environments — not just coursework.
        </span>
      </li>

      <li class="hp-diff-item">
        <span class="hp-diff-marker">05</span>
        <span class="hp-diff-text">
          <strong>Research-grade rigor, industry-ready delivery.</strong>
          UBC graduate research in additive manufacturing, sensor durability (40,000-cycle validation), and milling dynamics feeds directly into practical engineering output.
        </span>
      </li>

      <li class="hp-diff-item">
        <span class="hp-diff-marker">06</span>
        <span class="hp-diff-text">
          <strong>End-to-end ownership.</strong>
          From concept CAD through FEA validation, CNC programming, assembly, and failure debrief — I close the full engineering loop.
        </span>
      </li>

    </ul>
  </section>

  <!-- CTA -->
  <div class="hp-cta">
    <p class="hp-cta-text">
      <strong>Open to opportunities in Mechatronics, Mechanical Design &amp; Automation</strong>
      Actively seeking full-time roles. Available to relocate.
    </p>
    <a class="hp-cta-link" href="mailto:zhaolinw@student.ubc.ca">zhaolinw@student.ubc.ca →</a>
  </div>

</div>
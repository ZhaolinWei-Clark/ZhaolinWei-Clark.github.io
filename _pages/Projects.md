---
permalink: /projects/
title: "Projects"
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ─── Root Variables ─────────────────────────────── */
  :root {
    --text-primary:   #1a1a1a;
    --text-secondary: #555;
    --text-muted:     #999;
    --text-nav:       #666;
    --divider:        #e8e8e8;
    --bg:             #fff;
    --accent:         #1a1a1a;
    --nav-active:     #111;
  }

  /* ─── Page Wrapper ───────────────────────────────── */
  .pf-page {
    font-family: 'DM Sans', sans-serif;
    color: var(--text-primary);
    background: var(--bg);
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px 120px;
    -webkit-font-smoothing: antialiased;
  }

  /* ─── Hero Statement ─────────────────────────────── */
  .pf-hero {
    text-align: center;
    padding: 72px 0 64px;
    border-bottom: 1px solid var(--divider);
    margin-bottom: 0;
  }

  .pf-hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--text-primary);
    line-height: 1.3;
    max-width: 640px;
    margin: 0 auto 12px;
    letter-spacing: -0.01em;
  }

  .pf-hero-sub {
    font-size: 0.95rem;
    color: var(--text-muted);
    font-weight: 300;
    letter-spacing: 0.01em;
  }

  /* ─── Two-Column Layout ──────────────────────────── */
  .pf-layout {
    display: flex;
    gap: 0;
    align-items: flex-start;
    margin-top: 0;
  }

  /* ─── Right Nav ──────────────────────────────────── */
  .pf-nav {
    width: 28%;
    flex-shrink: 0;
    position: sticky;
    top: 40px;
    padding: 56px 0 0 48px;
    border-left: 1px solid var(--divider);
    order: 2;
  }

  .pf-nav-label {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 20px;
  }

  .pf-nav ul {
    list-style: none;
    padding: 0;
  }

  .pf-nav ul li {
    margin-bottom: 14px;
  }

  .pf-nav ul li a {
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--text-nav);
    text-decoration: none;
    transition: color 0.15s;
    display: block;
    padding: 2px 0;
    border-left: 2px solid transparent;
    padding-left: 12px;
    margin-left: -12px;
  }

  .pf-nav ul li a:hover {
    color: var(--nav-active);
  }

  .pf-nav ul li a.active {
    color: var(--nav-active);
    border-left-color: var(--nav-active);
    font-weight: 500;
  }

  /* ─── Left Content ───────────────────────────────── */
  .pf-content {
    width: 72%;
    flex-shrink: 0;
    order: 1;
    padding-right: 48px;
  }

  /* ─── Category Section ───────────────────────────── */
  .pf-category {
    border-bottom: 1px solid var(--divider);
  }

  .pf-category-trigger {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 44px 0 44px;
    display: flex;
    align-items: baseline;
    gap: 16px;
    font-family: inherit;
  }

  .pf-category-trigger:focus { outline: none; }

  .pf-cat-name {
    font-family: 'DM Serif Display', serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-primary);
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  .pf-cat-count {
    font-size: 0.72rem;
    color: var(--text-muted);
    letter-spacing: 0.08em;
    font-weight: 400;
    text-transform: uppercase;
  }

  .pf-cat-summary {
    font-size: 0.88rem;
    color: var(--text-secondary);
    font-weight: 300;
    margin-top: -28px;
    padding-bottom: 24px;
    max-width: 560px;
    line-height: 1.6;
  }

  .pf-cat-toggle {
    margin-left: auto;
    font-size: 1.1rem;
    color: var(--text-muted);
    font-weight: 300;
    flex-shrink: 0;
    transition: transform 0.15s;
    user-select: none;
  }

  .pf-category.open .pf-cat-toggle {
    transform: rotate(45deg);
  }

  /* ─── Category Body ──────────────────────────────── */
  .pf-category-body {
    display: none;
    padding-bottom: 20px;
  }

  .pf-category.open .pf-category-body {
    display: block;
  }

  /* ─── Project Item ───────────────────────────────── */
  .pf-project {
    border-top: 1px solid var(--divider);
  }

  .pf-project-trigger {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 22px 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    font-family: inherit;
    gap: 12px;
  }

  .pf-project-trigger:focus { outline: none; }

  .pf-proj-title {
    font-size: 1.05rem;
    font-weight: 400;
    color: var(--text-primary);
    line-height: 1.35;
  }

  .pf-proj-impact {
    font-size: 0.82rem;
    color: var(--text-muted);
    font-weight: 300;
    margin-top: 3px;
  }

  .pf-proj-toggle {
    font-size: 1rem;
    color: var(--text-muted);
    font-weight: 300;
    flex-shrink: 0;
    transition: transform 0.15s;
    user-select: none;
  }

  .pf-project.open .pf-proj-toggle {
    transform: rotate(45deg);
  }

  /* ─── Project Detail ─────────────────────────────── */
  .pf-project-detail {
    display: none;
    padding: 4px 0 28px;
  }

  .pf-project.open .pf-project-detail {
    display: block;
  }

  .pf-detail-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-bottom: 20px;
  }

  .pf-detail-block {
    padding: 18px 24px 18px 0;
    border-right: 1px solid var(--divider);
    margin-right: 24px;
  }

  .pf-detail-block:last-child {
    border-right: none;
    margin-right: 0;
    padding-right: 0;
  }

  .pf-detail-label {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 6px;
  }

  .pf-detail-text {
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.65;
    font-weight: 300;
  }

  .pf-detail-full {
    padding: 16px 0;
    border-top: 1px solid var(--divider);
  }

  .pf-detail-full .pf-detail-text {
    font-size: 0.92rem;
    line-height: 1.75;
    text-align: justify;
    text-justify: inter-word;
    max-width: 640px;
  }

  .pf-detail-img {
    margin-top: 20px;
  }

  .pf-detail-img img {
    max-width: 480px;
    width: 100%;
    height: auto;
    border-radius: 4px;
    border: 1px solid var(--divider);
    display: block;
  }

  .pf-detail-img-duo {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }

  .pf-detail-img-duo img {
    flex: 0 0 calc(50% - 6px);
    width: calc(50% - 6px);
    height: auto;
    border-radius: 4px;
    border: 1px solid var(--divider);
  }

  .pf-detail-img-trio {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }

  .pf-detail-img-trio img {
    flex: 0 0 calc(33.33% - 8px);
    width: calc(33.33% - 8px);
    height: auto;
    border-radius: 4px;
    border: 1px solid var(--divider);
  }

  .pf-status-tag {
    display: inline-block;
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #888;
    background: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    padding: 2px 7px;
    margin-bottom: 10px;
  }

  /* ─── Responsive ──────────────────────────────────── */
  @media (max-width: 768px) {
    .pf-layout { flex-direction: column; }
    .pf-nav { 
      width: 100%; 
      order: -1; 
      position: static; 
      padding: 32px 0 0; 
      border-left: none; 
      border-top: 1px solid var(--divider);
      margin-bottom: 8px;
    }
    .pf-nav ul { display: flex; flex-wrap: wrap; gap: 8px; }
    .pf-nav ul li { margin-bottom: 0; }
    .pf-nav ul li a { border-left: none; padding-left: 0; border-bottom: 2px solid transparent; padding-bottom: 2px; }
    .pf-nav ul li a.active { border-left: none; border-bottom-color: var(--nav-active); }
    .pf-content { width: 100%; padding-right: 0; }
    .pf-hero-title { font-size: 1.8rem; }
    .pf-detail-grid { grid-template-columns: 1fr; }
    .pf-detail-block { border-right: none; margin-right: 0; }
    .pf-detail-img-duo, .pf-detail-img-trio { flex-wrap: wrap; }
    .pf-detail-img-duo img, .pf-detail-img-trio img { flex: 0 0 100%; width: 100%; }
  }
</style>

<div class="pf-page">

  <!-- Hero -->
  <div class="pf-hero">
    <h1 class="pf-hero-title">I design mechanical systems with control intelligence.</h1>
    <p class="pf-hero-sub">Focused on practical implementation, simulation, and real-world optimization.</p>
  </div>

  <!-- Layout -->
  <div class="pf-layout">

    <!-- ── Left: Content ── -->
    <div class="pf-content">

      <!-- ════ Research & Thesis ════ -->
      <div class="pf-category" id="cat-research">
        <button class="pf-category-trigger" onclick="toggleCat(this)">
          <div>
            <div class="pf-cat-name">Research &amp; Thesis</div>
          </div>
          <span class="pf-cat-count">2 projects</span>
          <span class="pf-cat-toggle">+</span>
        </button>
        <p class="pf-cat-summary">Graduate and undergraduate thesis research in advanced manufacturing and wearable sensing.</p>
        <div class="pf-category-body">

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <div class="pf-proj-title">Temperature Monitoring for Laser-based Directed Energy Deposition</div>
                <div class="pf-proj-impact">Closed-loop melt pool stabilization for consistent AM deposition</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Supervisors</div>
                  <div class="pf-detail-text">Ryozo Nagamune &amp; Xiaoliang Jin<br>CEL &amp; AMP Labs, UBC</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Tools</div>
                  <div class="pf-detail-text">Laser-DED system, thermal sensors, closed-loop control algorithms</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Investigated and implemented a closed-loop temperature monitoring system for Laser-based Directed Energy Deposition. Developed a thermal control strategy to stabilize melt pool temperature, ensuring consistent material deposition and reducing defects in additive manufacturing processes.</div>
              </div>
              <div class="pf-detail-img">
                <img src="/images/additivie set up.jpeg" alt="L-DED Setup">
              </div>
            </div>
          </div>

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <div class="pf-proj-title">Self-powered Flexible Electromechanical Sensors for Personal Health Evaluation</div>
                <div class="pf-proj-impact">Novel wearable sensors detecting pulse and muscle signals without external power</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Supervisor</div>
                  <div class="pf-detail-text">Junwen Zhong<br>Soft Sensors-Actuators-Robots Lab</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Focus Areas</div>
                  <div class="pf-detail-text">Material synthesis, electromechanical characterization, wearable integration</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Developed novel self-powered flexible sensors capable of detecting subtle physiological signals such as pulse and muscle movements for personal health monitoring. Work covered full pipeline from material synthesis through electromechanical characterization to integration into wearable devices.</div>
              </div>
              <div class="pf-detail-img">
                <img src="/images/fyp_um.png" alt="Flexible Sensor Application">
              </div>
            </div>
          </div>

        </div><!-- /category-body -->
      </div><!-- /category -->

      <!-- ════ Control & Simulation ════ -->
      <div class="pf-category" id="cat-control">
        <button class="pf-category-trigger" onclick="toggleCat(this)">
          <div>
            <div class="pf-cat-name">Control &amp; Simulation</div>
          </div>
          <span class="pf-cat-count">2 projects</span>
          <span class="pf-cat-toggle">+</span>
        </button>
        <p class="pf-cat-summary">Dynamic modeling, motor drive optimization, and computational electromagnetic analysis.</p>
        <div class="pf-category-body">

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <div class="pf-proj-title"><a href="https://github.com/ZhaolinWei-Clark/BLDC_Motor_Drive_Modeling_Analysis" onclick="event.stopPropagation()">Simulation and Control Optimization of BLDC Motor Drive Systems</a></div>
                <div class="pf-proj-impact">MTPV control strategy maximizing high-speed torque under voltage constraints</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Context</div>
                  <div class="pf-detail-text">Academic · Electric Power and Energy Systems Group</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Tools</div>
                  <div class="pf-detail-text">MATLAB / Simulink, Average Value Models (AVM)</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Developed a dynamic simulation model for BLDC motor drives using MATLAB/Simulink, incorporating Average Value Models to optimize computational efficiency. Designed a Maximum Torque Per Voltage (MTPV) control strategy by mathematically formulating the optimal voltage lead angle, maximizing high-speed torque output under voltage constraints.</div>
              </div>
              <div class="pf-detail-img-duo">
                <img src="/images/bldc_ubc_torque.png" alt="BLDC Torque Analysis">
                <img src="/images/bldc_ubc_compare result vsi.png" alt="VSI Comparison Result">
              </div>
            </div>
          </div>

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <div class="pf-proj-title"><a href="https://github.com/ZhaolinWei-Clark/Theoretical-calculation-of-permanent-magnet-motor-.git" onclick="event.stopPropagation()">Electromagnetic Calculation Program for DC Permanent Magnet Motors</a></div>
                <div class="pf-proj-impact">Python tool automating magnetic circuit calculations for rapid motor design</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Language</div>
                  <div class="pf-detail-text">Python</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Outcome</div>
                  <div class="pf-detail-text">Eliminates manual iteration cycles in preliminary motor design</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Developed a Python-based computational tool to analyze the electromagnetic properties of DC permanent magnet motors. The program automates magnetic circuit calculations to predict motor performance, reducing reliance on manual iterations and facilitating rapid preliminary design optimization.</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ════ Robotics ════ -->
      <div class="pf-category" id="cat-robotics">
        <button class="pf-category-trigger" onclick="toggleCat(this)">
          <div>
            <div class="pf-cat-name">Robotics</div>
          </div>
          <span class="pf-cat-count">2 projects</span>
          <span class="pf-cat-toggle">+</span>
        </button>
        <p class="pf-cat-summary">Teleoperation platforms, vision-based tracking, and imitation learning for manipulation tasks.</p>
        <div class="pf-category-body">

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <span class="pf-status-tag">In Progress</span>
                <div class="pf-proj-title">Low-Cost Dual-Arm Mobile Robot Platform (AlohaMini)</div>
                <div class="pf-proj-impact">Open-source teleoperated manipulator for household imitation learning</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Focus</div>
                  <div class="pf-detail-text">Hardware integration, actuator control, data collection pipeline</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Goal</div>
                  <div class="pf-detail-text">Validate imitation learning algorithms for household automation</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Building a low-cost, teleoperated dual-arm mobile manipulator based on the open-source AlohaMini framework. Work encompasses full hardware integration, actuator control implementation, and data collection pipeline to validate imitation learning algorithms for household automation tasks.</div>
              </div>
              <div class="pf-detail-img">
                <img src="/images/Image_robot_in_progress1.png" alt="AlohaMini Prototype">
              </div>
            </div>
          </div>

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <div class="pf-proj-title">3D Surgical Instrument and Tissue Tracking System</div>
                <div class="pf-proj-impact">Sub-pixel stereo tracking accuracy (&lt;0.8 px) with 15% reduced failure rate</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Tools</div>
                  <div class="pf-detail-text">Python, OpenCV, Lucas-Kanade optical flow, Shi-Tomasi corner detection</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Result</div>
                  <div class="pf-detail-text">15% fewer tracking failures during rapid motion; &lt;0.8 px accuracy</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Built a real-time stereo vision tracking system to capture 3D trajectories of surgical instruments and soft tissue. Integrated Lucas-Kanade optical flow with Shi-Tomasi corner detection and optimized pyramid layers, achieving sub-pixel tracking accuracy across dynamic surgical scenes.</div>
              </div>
              <div class="pf-detail-img">
                <img src="/images/combined.png" alt="Surgical Tracking System">
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ════ Embedded Systems ════ -->
      <div class="pf-category" id="cat-embedded">
        <button class="pf-category-trigger" onclick="toggleCat(this)">
          <div>
            <div class="pf-cat-name">Embedded Systems</div>
          </div>
          <span class="pf-cat-count">2 projects</span>
          <span class="pf-cat-toggle">+</span>
        </button>
        <p class="pf-cat-summary">Microcontroller-based systems with real-time feedback and autonomous control logic.</p>
        <div class="pf-category-body">

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <div class="pf-proj-title">Arduino-Based Smart Cup Heater</div>
                <div class="pf-proj-impact">Calibrated thermal control with LCD feedback and user-selectable setpoint</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Platform</div>
                  <div class="pf-detail-text">Arduino, temperature sensor, LCD, button interface</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Range</div>
                  <div class="pf-detail-text">User-selectable setpoint 10–80°C with sensor offset calibration</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Built an Arduino-controlled cup heater with a user-selectable setpoint via button interface and real-time LCD readout. Calibrated the temperature sensor to correct measurement offset versus actual water temperature, achieving accurate closed-loop heating to target setpoint.</div>
              </div>
              <div class="pf-detail-img-duo">
                <img src="/images/Poster Assembly Picture.PNG" alt="Assembly View">
                <img src="/images/Poster Explorsion Veiw.PNG" alt="Exploded View">
              </div>
            </div>
          </div>

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <div class="pf-proj-title"><a href="https://github.com/ZhaolinWei-Clark/Autonomous-HVAC-System" onclick="event.stopPropagation()">Autonomous System for Room HVAC Control</a></div>
                <div class="pf-proj-impact">Energy-optimized HVAC automation with interactive GUI monitoring</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Context</div>
                  <div class="pf-detail-text">Intern Project · Sands China</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Features</div>
                  <div class="pf-detail-text">Interactive GUI, real-time feedback loops, energy consumption optimization</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Designed an autonomous automation system for home HVAC systems featuring an interactive GUI for monitoring and controlling components dynamically. The system optimized energy consumption while maintaining user comfort through real-time feedback loops.</div>
              </div>
              <div class="pf-detail-img">
                <img src="/images/HVAC.png" alt="HVAC GUI">
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ════ Mechanical Design ════ -->
      <div class="pf-category" id="cat-mechanical">
        <button class="pf-category-trigger" onclick="toggleCat(this)">
          <div>
            <div class="pf-cat-name">Mechanical Design</div>
          </div>
          <span class="pf-cat-count">3 projects</span>
          <span class="pf-cat-toggle">+</span>
        </button>
        <p class="pf-cat-summary">CAD assemblies, tolerance analysis, and industrial spindle design for precision manufacturing.</p>
        <div class="pf-category-body">

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <div class="pf-proj-title">High-Speed Motor Spindle Design</div>
                <div class="pf-proj-impact">Full SolidWorks assemblies approved for CNC precision manufacture</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Client</div>
                  <div class="pf-detail-text">Fuwode Machinery Co., Ltd.</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Scope</div>
                  <div class="pf-detail-text">Bearing selection, thermal management, structural integrity, SolidWorks assemblies</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Designed a series of high-speed motor spindles for industrial CNC applications based on client specifications. Work encompassed bearing selection, thermal management analysis, and structural integrity validation, delivering complete SolidWorks assemblies reviewed and approved for precision machining manufacture.</div>
              </div>
              <div class="pf-detail-img-trio">
                <img src="/images/fuwode/hs spindle.png" alt="Spindle Cross-Section">
                <img src="/images/fuwode/A12B.jpg" alt="Spindle Assembly A12B">
                <img src="/images/fuwode/A4_BT40_belt.JPG" alt="Spindle Assembly A4 BT40">
              </div>
            </div>
          </div>

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <div class="pf-proj-title">Vintage Sewing Machine SolidWorks Model</div>
                <div class="pf-proj-impact">50+ component assembly with full GD&amp;T and tolerance stack-up analysis</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Tools</div>
                  <div class="pf-detail-text">SolidWorks, GD&amp;T (ASME Y14.5)</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Scope</div>
                  <div class="pf-detail-text">50+ components, kinematic accuracy validation, manufacturability review</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Modeled a fully functional vintage sewing machine assembly (50+ components) in SolidWorks. Performed comprehensive tolerance stack-up analysis and applied GD&T standards (ASME Y14.5) to ensure kinematic accuracy and manufacturability of the complex mechanical linkages.</div>
              </div>
              <div class="pf-detail-img">
                <img src="/images/solidworks_sewing%20machine.png" alt="SolidWorks Model">
              </div>
            </div>
          </div>

          <div class="pf-project">
            <button class="pf-project-trigger" onclick="toggleProj(this)">
              <div>
                <div class="pf-proj-title"><a href="https://github.com/ZhaolinWei-Clark/Automated-Warehouse-Management-System" onclick="event.stopPropagation()">Automated Warehouse Management System</a></div>
                <div class="pf-proj-impact">2D simulation with GUI for warehouse parameter and robot task management</div>
              </div>
              <span class="pf-proj-toggle">+</span>
            </button>
            <div class="pf-project-detail">
              <div class="pf-detail-grid">
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Context</div>
                  <div class="pf-detail-text">Course Design · UBC</div>
                </div>
                <div class="pf-detail-block">
                  <div class="pf-detail-label">Features</div>
                  <div class="pf-detail-text">2D environment, graphical interface, item/robot management, automated task execution</div>
                </div>
              </div>
              <div class="pf-detail-full">
                <div class="pf-detail-text">Engineered a simulation platform for warehouse operations management providing a two-dimensional environment where users define warehouse parameters, manage items and robots, and execute automated tasks through an intuitive graphical interface.</div>
              </div>
              <div class="pf-detail-img">
                <img src="/images/warehouse.png" alt="Warehouse System">
              </div>
            </div>
          </div>

        </div>
      </div>

    </div><!-- /pf-content -->

    <!-- ── Right: Nav ── -->
    <nav class="pf-nav" id="pf-nav">
      <div class="pf-nav-label">Categories</div>
      <ul>
        <li><a href="#cat-research"   data-target="cat-research">Research &amp; Thesis</a></li>
        <li><a href="#cat-control"    data-target="cat-control">Control &amp; Simulation</a></li>
        <li><a href="#cat-robotics"   data-target="cat-robotics">Robotics</a></li>
        <li><a href="#cat-embedded"   data-target="cat-embedded">Embedded Systems</a></li>
        <li><a href="#cat-mechanical" data-target="cat-mechanical">Mechanical Design</a></li>
      </ul>
    </nav>

  </div><!-- /pf-layout -->
</div><!-- /pf-page -->

<script>
  function toggleCat(btn) {
    var cat = btn.closest('.pf-category');
    cat.classList.toggle('open');
  }

  function toggleProj(btn) {
    var proj = btn.closest('.pf-project');
    proj.classList.toggle('open');
  }

  // Active nav highlight on scroll
  (function () {
    var sections = ['cat-research','cat-control','cat-robotics','cat-embedded','cat-mechanical'];
    var links = {};
    sections.forEach(function(id) {
      var a = document.querySelector('[data-target="' + id + '"]');
      if (a) links[id] = a;
    });

    function onScroll() {
      var scrollY = window.scrollY + 120;
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
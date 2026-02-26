---
permalink: /projects/
title: "Projects"
---

<style>
  /* ─── Container ───────────────────────────────────── */
  .projects-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    -webkit-font-smoothing: antialiased;
  }

  /* ─── Reset theme <small> overrides ──────────────── */
  .projects-container small {
    display: inline;
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    margin: 0;
  }

  /* ─── Thesis Section Header ───────────────────────── */
  .thesis-header {
    font-size: 2rem;
    font-weight: 600;
    color: #111;
    letter-spacing: -0.025em;
    line-height: 1.2;
    margin-top: 48px;
    margin-bottom: 4px;
    border: none;
  }

  .thesis-subline {
    font-size: 0.88rem;
    color: #aaa;
    margin: 0 0 0 0;
    font-weight: 400;
  }

  /* ─── Category Section Labels ─────────────────────── */
  .section-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #aaa;
    margin-top: 80px;
    margin-bottom: 0;
    padding-bottom: 14px;
    border-bottom: 1px solid #e8e8e8;
  }

  /* ─── Project Block ───────────────────────────────── */
  .project-block {
    padding: 40px 0;
    border-bottom: 1px solid #eeeeee;
  }

  .project-block:last-child {
    border-bottom: none;
  }

  /* ─── Project Title ───────────────────────────────── */
  .project-title {
    font-size: 1.3rem;
    font-weight: 500;
    color: #111;
    margin: 0 0 8px 0;
    line-height: 1.35;
  }

  .project-title a {
    color: #111;
    text-decoration: none;
  }

  .project-title a:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  /* ─── Project Meta ────────────────────────────────── */
  .project-meta {
    font-size: 0.82rem;
    color: #888;
    margin: 0 0 15px 0;
    line-height: 1.65;
  }

  /* ─── Status Tag ──────────────────────────────────── */
  .status-tag {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: #777;
    background: #f7f7f7;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    padding: 2px 8px;
    margin-bottom: 12px;
  }

  /* ─── Project Description ─────────────────────────── */
  .project-description {
    font-size: 0.95rem;
    line-height: 1.75;
    color: #555;
    max-width: 800px;
    margin: 0;
    text-align: justify;
    text-justify: inter-word;
  }

  /* ─── Image Grid Variants ─────────────────────────── */
  .project-images {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
    align-items: flex-start;
  }

  .project-images img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    border: 1px solid #f0f0f0;
    display: block;
  }

  .project-images.img-single img {
    width: 100%;
    max-width: 480px;
  }

  .project-images.img-duo img {
    flex: 0 0 calc(50% - 6px);
    width: calc(50% - 6px);
  }

  .project-images.img-trio img {
    flex: 0 0 calc(33.33% - 8px);
    width: calc(33.33% - 8px);
  }

  /* ─── Responsive ──────────────────────────────────── */
  @media (max-width: 640px) {
    .thesis-header    { font-size: 1.5rem; }
    .project-title    { font-size: 1.1rem; }
    .section-label    { margin-top: 60px; }

    .project-images.img-duo img,
    .project-images.img-trio img {
      flex: 0 0 100%;
      width: 100%;
    }
  }
</style>

<div class="projects-container">

<!-- ═══════════════════════════════════════
     THESIS WORK
════════════════════════════════════════ -->
<h2 class="thesis-header">Thesis Work</h2>
<p class="thesis-subline">Graduate and undergraduate research theses.</p>

<div class="project-block">
  <h3 class="project-title">
    <a href="https://zhaolinwei-clark.github.io/mypaper/thesis/UBC_Thesis_ZhaolinWei_8928347__improved.pdf">
      Temperature Monitoring for Laser-based Directed Energy Deposition Process
    </a>
  </h3>
  <p class="project-meta">
    Zhaolin Wei &nbsp;·&nbsp; Supervisor: Ryozo Nagamune &amp; Xiaoliang Jin<br>
    Control Engineering Laboratory (CEL) &amp; Advanced Manufacturing Processes Laboratory (AMP)
  </p>
  <p class="project-description">
    Investigated and implemented a closed-loop temperature monitoring system for Laser-based Directed Energy
    Deposition (L-DED). Developed a thermal control strategy to stabilize the melt pool temperature,
    ensuring consistent material deposition and reducing defects in additive manufacturing processes.
  </p>
  <div class="project-images img-single">
    <img src="/images/additivie set up.jpeg" alt="L-DED Setup">
  </div>
</div>

<div class="project-block">
  <h3 class="project-title">
    <a href="https://zhaolinwei-clark.github.io/mypaper/thesis/final-project-report.pdf">
      Self-powered Flexible Electromechanical Sensors for Personal Health Evaluation
    </a>
  </h3>
  <p class="project-meta">
    Zhaolin Wei &nbsp;·&nbsp; Supervisor: Junwen Zhong<br>
    Soft Sensors-Actuators-Robots Laboratory
  </p>
  <p class="project-description">
    Developed novel self-powered flexible sensors capable of detecting subtle physiological signals
    (such as pulse and muscle movements) for personal health monitoring. The project focused on
    material synthesis, electromechanical characterization, and the integration of sensors into
    wearable devices.
  </p>
  <div class="project-images img-single">
    <img src="/images/fyp_um.png" alt="Demonstration of Application">
  </div>
</div>


<!-- ═══════════════════════════════════════
     ROBOTICS & CONTROL
════════════════════════════════════════ -->
<p class="section-label">Robotics &amp; Control</p>

<div class="project-block">
  <span class="status-tag">In Progress</span>
  <h3 class="project-title">Low-Cost Dual-Arm Mobile Robot Platform (AlohaMini)</h3>
  <p class="project-description">
    Currently building a low-cost, teleoperated dual-arm mobile manipulator based on the open-source
    framework. The project involves full hardware integration, actuator control implementation, and
    data collection to validate imitation learning algorithms for household automation tasks.
  </p>
  <div class="project-images img-single">
    <img src="/images/Image_robot_in_progress1.png" alt="Prototype Demonstration">
  </div>
</div>

<div class="project-block">
  <h3 class="project-title">3D Surgical Instrument and Tissue Tracking System</h3>
  <p class="project-meta">Academic Project</p>
  <p class="project-description">
    Built a real-time stereo vision tracking system using Python and OpenCV to capture 3D trajectories
    of surgical instruments and soft tissue. Integrated Lucas-Kanade optical flow with Shi-Tomasi corner
    detection and optimized pyramid layers, reducing tracking failure rates by 15% during rapid movements
    and achieving sub-pixel tracking accuracy (&lt;0.8 pixels).
  </p>
  <div class="project-images img-single">
    <img src="/images/combined.png" alt="Surgical Tracking System">
  </div>
</div>

<div class="project-block">
  <h3 class="project-title">
    <a href="https://github.com/ZhaolinWei-Clark/Automated-Warehouse-Management-System">
      Automated Warehouse Management System
    </a>
  </h3>
  <p class="project-meta">Course Design &nbsp;·&nbsp; UBC</p>
  <p class="project-description">
    Engineered a sophisticated simulation platform for warehouse operations management. Provides a
    two-dimensional environment where users can define warehouse parameters, manage items and robots,
    and execute automated tasks through an intuitive graphical interface.
  </p>
  <div class="project-images img-single">
    <img src="/images/warehouse.png" alt="Warehouse Management System">
  </div>
</div>


<!-- ═══════════════════════════════════════
     ENGINEERING SYSTEMS
════════════════════════════════════════ -->
<p class="section-label">Engineering Systems</p>

<div class="project-block">
  <h3 class="project-title">
    <a href="https://github.com/ZhaolinWei-Clark/BLDC_Motor_Drive_Modeling_Analysis">
      Simulation and Control Optimization of BLDC Motor Drive Systems
    </a>
  </h3>
  <p class="project-meta">Academic Project &nbsp;·&nbsp; Electric Power and Energy Systems Group</p>
  <p class="project-description">
    Developed a dynamic simulation model for Brushless DC (BLDC) motor drives using MATLAB/Simulink,
    incorporating Average Value Models (AVM) to significantly optimize computational efficiency.
    Designed and implemented a Maximum Torque Per Voltage (MTPV) control strategy by mathematically
    formulating the optimal voltage lead angle, maximizing high-speed torque output under voltage
    constraints.
  </p>
  <div class="project-images img-duo">
    <img src="/images/bldc_ubc_torque.png" alt="BLDC Torque Analysis">
    <img src="/images/bldc_ubc_compare result vsi.png" alt="VSI Comparison Result">
  </div>
</div>

<div class="project-block">
  <h3 class="project-title">
    <a href="https://github.com/ZhaolinWei-Clark/Autonomous-HVAC-System">
      Autonomous System for Room HVAC Control
    </a>
  </h3>
  <p class="project-meta">Intern Project &nbsp;·&nbsp; Sands China</p>
  <p class="project-description">
    Designed an autonomous automation system for home HVAC systems, featuring an interactive GUI for
    monitoring and controlling HVAC components dynamically. The system optimized energy consumption
    while maintaining user comfort through real-time feedback loops.
  </p>
  <div class="project-images img-single">
    <img src="/images/HVAC.png" alt="HVAC GUI Demonstration">
  </div>
</div>

<div class="project-block">
  <h3 class="project-title">
    <a href="https://github.com/ZhaolinWei-Clark/Theoretical-calculation-of-permanent-magnet-motor-.git">
      Electromagnetic Calculation Program for DC Permanent Magnet Motors
    </a>
  </h3>
  <p class="project-description">
    Developed a Python-based computational tool to analyze the electromagnetic properties of DC permanent
    magnet motors. The program automates magnetic circuit calculations to predict motor performance,
    reducing the reliance on manual iterations and facilitating rapid preliminary design optimization.
  </p>
</div>


<!-- ═══════════════════════════════════════
     EMBEDDED SYSTEMS
════════════════════════════════════════ -->
<p class="section-label">Embedded Systems</p>

<div class="project-block">
  <h3 class="project-title">Arduino-Based Smart Cup Heater</h3>
  <p class="project-description">
    Built an Arduino-controlled cup heater with a user-selectable setpoint between 10–80°C via a button
    interface and real-time LCD readout. Calibrated the temperature sensor to correct measurement offset
    versus actual water temperature and refined the control code, achieving accurate heating to the
    desired temperature with clear on-device feedback.
  </p>
  <div class="project-images img-duo">
    <img src="/images/Poster Assembly Picture.PNG" alt="Assembly View">
    <img src="/images/Poster Explorsion Veiw.PNG" alt="Exploded View">
  </div>
</div>


<!-- ═══════════════════════════════════════
     DESIGN & CAD
════════════════════════════════════════ -->
<p class="section-label">Design &amp; CAD</p>

<div class="project-block">
  <h3 class="project-title">High-Speed Motor Spindle Design</h3>
  <p class="project-meta">Design Work &nbsp;·&nbsp; Fuwode Machinery Co., Ltd.</p>
  <p class="project-description">
    Designed a series of high-speed motor spindles for industrial CNC applications based on client
    specifications. Work encompassed bearing selection, thermal management analysis, and structural
    integrity validation, delivering complete SolidWorks assemblies reviewed and approved for
    precision machining manufacture.
  </p>
  <div class="project-images img-trio">
    <img src="/images/fuwode/hs spindle.png" alt="Spindle Cross-Section">
    <img src="/images/fuwode/A12B.jpg" alt="Spindle Assembly A12B">
    <img src="/images/fuwode/A4_BT40_belt.JPG" alt="Spindle Assembly A4 BT40">
  </div>
</div>

<div class="project-block">
  <h3 class="project-title">Vintage Sewing Machine SolidWorks Model</h3>
  <p class="project-meta">Course Design</p>
  <p class="project-description">
    Modeled a fully functional vintage sewing machine assembly (50+ components) in SolidWorks. Performed
    comprehensive tolerance stack-up analysis and applied GD&amp;T standards (ASME Y14.5) to ensure
    kinematic accuracy and manufacturability of the complex mechanical linkages.
  </p>
  <div class="project-images img-single">
    <img src="/images/solidworks_sewing%20machine.png" alt="SolidWorks Model">
  </div>
</div>

</div><!-- /.projects-container -->
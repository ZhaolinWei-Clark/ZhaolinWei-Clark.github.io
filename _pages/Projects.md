---
layout: single
author_profile: true
---

<style>
  /* 1. 强制页面拉宽：突破主题限制 */
  .page {
    width: 100% !important;
    max-width: 1100px !important;
    margin: 0 auto !important;
  }
  .page__content {
    width: 100% !important;
  }

  /* 2. 苹果风全局字体与间距 */
  .apple-style {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1d1d1f;
    line-height: 1.6;
  }

  /* 3. 可折叠项目卡片样式 */
  details {
    background: #ffffff;
    border: 1px solid #e5e5e7;
    border-radius: 12px;
    margin-bottom: 16px;
    padding: 12px 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  }

  details[open] {
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    border-color: #d2d2d7;
  }

  summary {
    list-style: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
  }

  /* 自定义折叠箭头 */
  summary::after {
    content: '+';
    font-size: 1.4em;
    color: #86868b;
    transition: transform 0.3s ease;
  }

  details[open] summary::after {
    transform: rotate(45deg); /* 展开变叉号 */
    color: #b82e2e;
  }

  .project-content {
    padding-top: 20px;
    color: #424245;
    font-size: 0.95em;
    border-top: 1px solid #f5f5f7;
    margin-top: 15px;
  }

  /* 4. 简历式技能网格 */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 15px;
    margin: 40px 0;
  }

  .skill-card {
    background: #f5f5f7;
    padding: 15px;
    border-radius: 10px;
  }

  .skill-card h4 {
    margin: 0 0 10px 0;
    font-size: 0.85em;
    color: #86868b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .tag {
    display: inline-block;
    background: #fff;
    border: 1px solid #d2d2d7;
    padding: 2px 8px;
    margin: 2px;
    border-radius: 4px;
    font-size: 0.8em;
  }

  .highlight-red { color: #b82e2e; font-weight: 600; }
</style>

<div class="apple-style">
  <section class="intro">
    <h1 style="font-weight: 700; letter-spacing: -0.02em;">Zhaolin Wei (Clark)</h1>
    <p style="font-size: 1.2em; color: #86868b;">Mechatronics Design | E.I.T. @ UBC</p>
    
    <p>I am a <strong>Master of Mechatronics Design</strong> graduate from UBC and a registered <strong>E.I.T.</strong> with EGBC. I focus on bridging the gap between high-precision mechanical design and automated systems—delivering <strong>"Engineering Intent"</strong> from concept to physical prototype.</p>
  </section>

  <div class="skills-grid">
    <div class="skill-card">
      <h4>🤖 Robotics & AI</h4>
      <span class="tag">ROS2</span><span class="tag">OpenCV</span><span class="tag">PyTorch</span>
    </div>
    <div class="skill-card">
      <h4>💻 Embedded Systems</h4>
      <span class="tag">Python</span><span class="tag">Embedded C</span><span class="tag">ESP32</span><span class="tag">Git</span>
    </div>
    <div class="skill-card">
      <h4>🏗️ Mechanical Design</h4>
      <span class="tag">SolidWorks</span><span class="tag">GD&T</span><span class="tag">AutoCAD</span><span class="tag">Revit</span>
    </div>
    <div class="skill-card">
      <h4>🏭 Manufacturing</h4>
      <span class="tag">CNC</span><span class="tag">3D Printing</span><span class="tag">BOM</span><span class="tag">DFM</span>
    </div>
  </div>

  <h3 style="margin-bottom: 20px;">Featured Projects</h3>

  <details>
    <summary>Dual-Arm Mobile Robot Platform (AlohaMini)</summary>
    <div class="project-content">
      <p>Developing a low-cost, mobile dual-arm platform for dexterous manipulation tasks.</p>
      <ul>
        <li>Integrated high-torque actuators and sensors using <strong>ROS2</strong>.</li>
        <li>Optimized 3D-printed structural components for weight reduction and rigidity.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>Precision Modeling: Old-fashioned Sewing Machine</summary>
    <div class="project-content">
      <p>A comprehensive 50+ component assembly designed in SolidWorks to validate tolerance stack-ups.</p>
      <ul>
        <li>Applied <strong>GD&T (ASME Y14.5)</strong> standards to ensure zero-rework assembly.</li>
        <li>Conducted structural FEA to optimize kinematic linkage durability.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>Facility Engineering @ Sands China</summary>
    <div class="project-content">
      <p>Managed technical documentation for large-scale facilities using AutoCAD and Revit.</p>
      <ul>
        <li>Maintained 100% data integrity for complex electrical and structural drafts.</li>
        <li>Coordinated BIM data updates to reflect real-world site conditions.</li>
      </ul>
    </div>
  </details>

  <p style="margin-top: 40px;">
    <span class="highlight-red">Actively seeking Engineering opportunities for 2026.</span><br>
    Contact: <strong>zhaolinw@student.ubc.ca</strong>
  </p>
</div>

<hr>
---
# Jekyll 默认设置
layout: single
author_profile: true
---

<style>
  /* 1. 突破主题容器宽度限制 */
  .page {
    width: 100% !important;
    max-width: 1200px !important; /* 强制拉宽 */
    margin-right: 0 !important;
  }
  
  .page__content {
    width: 100% !important;
    max-width: 100% !important;
    padding-right: 0 !important;
  }

  /* 2. 响应式技能网格布局 */
  .resume-skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
    border-top: 1px solid #eee;
    padding-top: 30px;
  }

  .skill-category {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid #990000; /* 标志性红边线 */
  }

  .skill-category h4 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 0.95em;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tag {
    background: #fff;
    border: 1px solid #dcdcdc;
    padding: 2px 8px;
    border-radius: 3px;
    font-size: 0.85em;
    color: #555;
  }

  /* 3. 修复文字排版 */
  .intro-text {
    font-size: 1.05em;
    line-height: 1.6;
    text-align: justify;
  }
</style>

<div class="intro-text">
  <p>Hello, I am <strong>Zhaolin Wei (Clark, 魏召霖)</strong>.</p>

  <p>
    I am a <strong>Master of Mechatronics Design</strong> graduate from the University of British Columbia and a registered <strong>Engineer-in-Training (E.I.T.)</strong> with EGBC. 
    My expertise lies in the full lifecycle of robotics development—from high-precision mechanical design and GD&T to automated testing and system integration.
  </p>

  <p>
    During my graduate studies at the <a href="https://amp.mech.ubc.ca/">Advanced Manufacturing Processes Laboratory (AMP)</a>, I was advised by <a href="https://scholar.google.com/citations?user=bcv5q2gAAAAJ&hl=en">Prof. Xiaoliang Jin</a>, where I <strong>optimized manufacturing workflows</strong> to reduce material waste by 30%. I also collaborated with <a href="https://mech.ubc.ca/ryozo-nagamune/">Prof. Ryozo Nagamune</a> at the <a href="https://cel.mech.ubc.ca/">Control Engineering Laboratory (CEL)</a> on control systems.
  </p>

  <p>
    With professional experience at <strong>Sands China</strong> using <strong>AutoCAD and Revit</strong>, I ensure strict data integrity and standard compliance. Whether performing tolerance stack-up analysis (GD&T ASME Y14.5) in <strong>SolidWorks</strong> or writing <strong>Python</strong> scripts for test automation, I focus on delivering precise and manufacturable engineering solutions.
  </p>

  <p><strong><span style="color:#990000;">I am actively seeking an Engineering Position in Mechanical Design, Robotics, or Test Engineering for 2026. Let's build the future together!</span></strong></p>
  
  <p>Feel free to reach out: <strong>zhaolinw@student.ubc.ca</strong> or <strong>ziulam1005@gmail.com</strong></p>
</div>

<div class="resume-skills-grid">
  <div class="skill-category">
    <h4>🤖 Robotics & AI</h4>
    <div class="skill-tags">
      <span class="tag">ROS2</span><span class="tag">OpenCV</span><span class="tag">PyTorch</span>
    </div>
  </div>

  <div class="skill-category">
    <h4>💻 Programming & Embedded</h4>
    <div class="skill-tags">
      <span class="tag">Python</span><span class="tag">Embedded C</span><span class="tag">Altium Designer</span>
      <span class="tag">ESP32/Arduino</span><span class="tag">Git</span>
    </div>
  </div>

  <div class="skill-category">
    <h4>🏗️ Mechanical Design</h4>
    <div class="skill-tags">
      <span class="tag">SolidWorks</span><span class="tag">AutoCAD</span><span class="tag">GD&T (ASME Y14.5)</span>
      <span class="tag">FEA (Structural/Thermal)</span><span class="tag">PDM/DFM</span>
    </div>
  </div>

  <div class="skill-category">
    <h4>🏭 Manufacturing</h4>
    <div class="skill-tags">
      <span class="tag">CNC Machining</span><span class="tag">3D Printing</span><span class="tag">BOM Management</span>
      <span class="tag">Precision Measurement</span><span class="tag">ISO/Lean Standards</span>
    </div>
  </div>
</div>

<hr>
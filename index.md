---
layout: single
author_profile: true
---

<style>
  /* 1. 核心：强制拉宽整个页面的主容器，消除右侧大片空白 */
  #main {
    max-width: 95% !important; /* 占据屏幕 95% 的宽度 */
    margin-left: auto;
    margin-right: auto;
  }

  /* 2. 拓宽内容容器 */
  .page {
    width: 100% !important;
    max-width: none !important;
  }

  /* 3. 重新分配中间文字和右侧技能栏的比例 */
  .wide-wrapper {
    display: flex;
    gap: 40px; /* 两栏间距 */
    align-items: flex-start;
    width: 100%;
  }

  /* 文字部分占据 75% 的空间 */
  .text-content {
    flex: 3; 
    min-width: 0; /* 防止内容溢出 */
    text-align: justify;
    line-height: 1.8;
  }

  /* 技能栏占据 25% 的空间 */
  .skills-sidebar {
    flex: 1;
    min-width: 260px;
    padding-left: 25px;
    border-left: 1px solid #eee;
  }

  /* 优化标签样式 */
  .skill-chip {
    display: inline-block;
    background: #f5f7f9;
    color: #333;
    padding: 3px 10px;
    margin: 3px 2px;
    border-radius: 4px;
    font-size: 0.85em;
    border: 1px solid #e1e4e8;
  }

  .sidebar-title {
    font-weight: bold;
    color: #990000;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
  }

  /* 适配移动端 */
  @media (max-width: 1024px) {
    .wide-wrapper { flex-direction: column; }
    .skills-sidebar { border-left: none; border-top: 1px solid #eee; padding-left: 0; width: 100%; }
  }
</style>

<div class="wide-wrapper">
  <div class="text-content">
    <p style="font-size: 1.15em;">Hello, I am <strong>Zhaolin Wei (Clark, 魏召霖)</strong>.</p>

    <p>
      I am a <strong>Master of Mechatronics Design</strong> graduate from the University of British Columbia and a registered <strong>Engineer-in-Training (E.I.T.)</strong> with EGBC. 
      My expertise lies in the full lifecycle of robotics development—from high-precision mechanical design and GD&T to automated testing and system integration.
    </p>

    <p>
      During my graduate studies at the <a href="https://amp.mech.ubc.ca/">Advanced Manufacturing Processes Laboratory (AMP)</a>, I was advised by <a href="https://scholar.google.com/citations?user=bcv5q2gAAAAJ&hl=en">Prof. Xiaoliang Jin</a>, where I <strong>optimized manufacturing workflows</strong> to reduce material waste by 30%. 
      I also collaborated with <a href="https://mech.ubc.ca/ryozo-nagamune/">Prof. Ryozo Nagamune</a> at the <a href="https://cel.mech.ubc.ca/">Control Engineering Laboratory (CEL)</a>.
    </p>

    <p>
      With professional experience at <strong>Sands China</strong> using <strong>AutoCAD and Revit</strong> for large-scale facility drafting, I have developed a strong commitment to data integrity and engineering standards. 
      Whether it is performing tolerance stack-up analysis in <strong>SolidWorks</strong> or writing <strong>Python</strong> scripts for test automation, I strive to deliver precision engineering that makes a real-world impact.
    </p>

    <div style="margin-top: 30px; border-top: 1px solid #f0f0f0; padding-top: 20px;">
      <p>Reach out: <span style="color: #990000; font-weight: bold;">zhaolinw@student.ubc.ca</span> or <strong>ziulam1005@gmail.com</strong></p>
      <p><strong><span style="color: #990000;">Seeking Engineering Positions in Robotics, Mechanical Design, or Test Engineering.</span></strong></p>
    </div>
  </div>

  <div class="skills-sidebar">
    <div class="sidebar-title" style="margin-top:0;">🛠️ Design & Drafting</div>
    <span class="skill-chip">SolidWorks</span> <span class="skill-chip">AutoCAD</span> 
    <span class="skill-chip">Revit</span> <span class="skill-chip">GD&T</span>

    <div class="sidebar-title">💻 Programming</div>
    <span class="skill-chip">Python</span> <span class="skill-chip">MATLAB</span> 
    <span class="skill-chip">C++</span> <span class="skill-chip">Data Analysis</span>

    <div class="sidebar-title">⚙️ Fabrication</div>
    <span class="skill-chip">CNC Machining</span> <span class="skill-chip">3D Printing</span> 
    <span class="skill-chip">Waterjet</span> <span class="skill-chip">Lathe/Mill</span>

    <div class="sidebar-title">🎓 Credentials</div>
    <span class="skill-chip">E.I.T. (EGBC)</span> <span class="skill-chip">UBC Master's</span>
  </div>
</div>

<hr style="margin: 40px 0;">
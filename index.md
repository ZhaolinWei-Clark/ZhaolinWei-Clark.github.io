---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: single
author_profile: true
---

<style>
  /* 强制拉宽页面内容容器 */
  .page {
    width: 100% !important;
    max-width: 1200px !important;
  }
  .page__content {
    width: 100% !important;
  }
  
  /* 左右分栏布局 */
  .main-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: flex-start;
  }

  /* 左侧文字区：占据更多宽度 */
  .bio-text {
    flex: 3;
    min-width: 350px;
    text-align: justify;
  }

  /* 右侧技能区：固定宽度 */
  .skills-sidebar {
    flex: 1;
    min-width: 250px;
    background-color: #fcfcfc;
    padding: 20px;
    border-radius: 8px;
    border-left: 1px solid #eee;
  }

  /* 技能标签样式 */
  .skill-group {
    margin-bottom: 20px;
  }
  .skill-title {
    font-size: 0.9em;
    font-weight: bold;
    color: #990000;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
  }
  .tag {
    display: inline-block;
    background: #fff;
    border: 1px solid #ddd;
    color: #555;
    padding: 2px 8px;
    margin: 3px 2px;
    border-radius: 4px;
    font-size: 0.85em;
  }
</style>

<div class="main-container">
  <div class="bio-text">
    <p>Hello, I am <strong>Zhaolin Wei (Clark, 魏召霖)</strong>.</p>

    <p>
      I am a <strong>Master of Mechatronics Design</strong> graduate from the University of British Columbia and a registered <strong>Engineer-in-Training (E.I.T.)</strong> with EGBC. 
      My expertise lies in the full lifecycle of robotics development—from high-precision mechanical design and GD&T to automated testing and system integration.
    </p>

    <p>
      During my graduate studies at the <a href="https://amp.mech.ubc.ca/">Advanced Manufacturing Processes Laboratory (AMP)</a>, I was advised by <a href="https://scholar.google.com/citations?user=bcv5q2gAAAAJ&hl=en">Prof. Xiaoliang Jin</a>, where I <strong>optimized manufacturing workflows</strong> to reduce material waste by 30%. I also collaborated with <a href="https://mech.ubc.ca/ryozo-nagamune/">Prof. Ryozo Nagamune</a> at the <a href="https://cel.mech.ubc.ca/">Control Engineering Laboratory (CEL)</a>.
    </p>

    <p>
      With professional experience at <strong>Sands China</strong> using <strong>AutoCAD and Revit</strong> for large-scale facility drafting, I ensure strict data integrity and standard compliance. Whether performing tolerance stack-up analysis (GD&T ASME Y14.5) in <strong>SolidWorks</strong> or writing <strong>Python</strong> scripts for test automation, I focus on delivering precise and manufacturable engineering solutions.
    </p>

    <p><strong><span style="color:#990000;">I am actively seeking an Engineering Position in Mechanical Design, Robotics, or Test Engineering for 2026. Let's build the future together!</span></strong></p>
    
    <p>Feel free to reach out: <strong>zhaolinw@student.ubc.ca</strong> or <strong>ziulam1005@gmail.com</strong></p>
  </div>

  <div class="skills-sidebar">
    <div class="skill-group">
      <span class="skill-title">🛠 DESIGN & DRAFTING</span>
      <span class="tag">SolidWorks</span>
      <span class="tag">AutoCAD</span>
      <span class="tag">Revit</span>
      <span class="tag">GD&T</span>
    </div>

    <div class="skill-group">
      <span class="skill-title">💻 PROGRAMMING</span>
      <span class="tag">Python</span>
      <span class="tag">MATLAB</span>
      <span class="tag">C++</span>
      <span class="tag">Data Analysis</span>
    </div>

    <div class="skill-group">
      <span class="skill-title">⚙️ FABRICATION</span>
      <span class="tag">CNC Machining</span>
      <span class="tag">3D Printing</span>
      <span class="tag">Waterjet</span>
      <span class="tag">Lathe/Mill</span>
    </div>

    <div class="skill-group">
      <span class="skill-title">🎓 CREDENTIALS</span>
      <span class="tag">E.I.T. (EGBC)</span>
      <span class="tag">UBC Master's</span>
    </div>
  </div>
</div>

<hr>
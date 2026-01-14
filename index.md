---
layout: single
author_profile: true
---

<style>
  /* 1. 修复重叠：给主内容区域设置一个安全的左边距，避开作者栏 */
  .page__content {
    margin-left: 20px; /* 这里的数值可根据你的实际效果微调 */
    padding-right: 0 !important;
  }

  /* 2. 拉宽容器：利用右侧空白，但不破坏左侧平衡 */
  #main {
    max-width: 1300px !important; 
    display: flex;
    justify-content: flex-start;
  }

  /* 3. 响应式双栏：文字占大头，技能占小头 */
  .content-grid {
    display: grid;
    grid-template-columns: 2.5fr 1fr; /* 文字 70%, 技能 30% */
    gap: 40px;
    width: 100%;
  }

  .bio-text {
    text-align: justify;
    line-height: 1.8;
    color: #333;
  }

  /* 4. 右侧技术栈美化（去掉了生硬的框，改为简约线条） */
  .skills-column {
    border-left: 1px solid #f0f0f0;
    padding-left: 25px;
  }

  .skill-category {
    margin-bottom: 25px;
  }

  .category-title {
    font-size: 0.85em;
    font-weight: 700;
    color: #990000; /* UBC Red */
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  .tag {
    display: inline-block;
    background: #f8f9fa;
    color: #444;
    padding: 2px 10px;
    margin: 3px 2px;
    border-radius: 3px;
    font-size: 0.85em;
    border: 1px solid #eee;
  }

  /* 移动端适配：重叠会自动消失，变为单栏 */
  @media (max-width: 1024px) {
    .content-grid { grid-template-columns: 1fr; }
    .skills-column { border-left: none; border-top: 1px solid #eee; padding-top: 20px; padding-left: 0; }
    .page__content { margin-left: 0; }
  }
</style>

<div class="content-grid">
  <div class="bio-text">
    <p style="font-size: 1.1em; margin-top: 0;">Hello, I am <strong>Zhaolin Wei (Clark, 魏召霖)</strong>.</p>

    <p>
      I am a <strong>Master of Mechatronics Design</strong> graduate from the University of British Columbia and a registered <strong>Engineer-in-Training (E.I.T.)</strong> with EGBC. 
      My expertise lies in high-precision mechanical design, GD&T, and robotic system integration.
    </p>

    <p>
      During my graduate studies at the <a href="https://amp.mech.ubc.ca/">Advanced Manufacturing Processes Laboratory (AMP)</a>, I worked with <a href="https://scholar.google.com/citations?user=bcv5q2gAAAAJ&hl=en">Prof. Xiaoliang Jin</a> to <strong>optimize manufacturing workflows</strong>, achieving a 30% reduction in material waste. 
      I also collaborated with <a href="https://mech.ubc.ca/ryozo-nagamune/">Prof. Ryozo Nagamune</a> at the <a href="https://cel.mech.ubc.ca/">Control Engineering Laboratory (CEL)</a>.
    </p>

    <p>
      With professional experience at <strong>Sands China</strong> using <strong>AutoCAD and Revit</strong> for large-scale facilities, I developed a strong focus on data integrity and industry standards. 
      Whether it is performing tolerance stack-up analysis in <strong>SolidWorks</strong> or writing <strong>Python</strong> scripts for test automation, I strive to deliver precision engineering that makes a real-world impact.
    </p>

    <div style="margin-top: 30px; border-top: 1px solid #f9f9f9; padding-top: 15px; font-size: 0.95em;">
      <p>Reach out: <span style="color: #990000; font-weight: bold;">zhaolinw@student.ubc.ca</span> or <strong>ziulam1005@gmail.com</strong></p>
      <p><strong><span style="color: #990000;">Currently seeking Engineering Positions in Robotics, Mechanical Design, or Test Engineering.</span></strong></p>
    </div>
  </div>

  <div class="skills-column">
    <div class="skill-category">
      <div class="category-title">🛠️ Design & Drafting</div>
      <span class="tag">SolidWorks</span> <span class="tag">AutoCAD</span> 
      <span class="tag">Revit</span> <span class="tag">GD&T</span>
    </div>

    <div class="skill-category">
      <div class="category-title">💻 Programming</div>
      <span class="tag">Python</span> <span class="tag">MATLAB</span> 
      <span class="tag">C++</span> <span class="tag">Data Analysis</span>
    </div>

    <div class="skill-category">
      <div class="category-title">⚙️ Fabrication</div>
      <span class="tag">CNC Machining</span> <span class="tag">3D Printing</span> 
      <span class="tag">Waterjet</span> <span class="tag">Lathe/Mill</span>
    </div>

    <div class="skill-category">
      <div class="category-title">🎓 Credentials</div>
      <span class="tag">E.I.T. (EGBC)</span> <span class="tag">UBC Master's</span>
    </div>
  </div>
</div>

<hr style="margin: 30px 0;">
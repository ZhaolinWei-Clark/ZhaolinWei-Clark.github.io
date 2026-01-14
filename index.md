---
layout: single
author_profile: true
---

<style>
  /* 全局容器优化 */
  .modern-container {
    display: grid;
    grid-template-columns: 2.2fr 1fr; /* 调整比例，给文字更多空间 */
    gap: 40px;
    margin-top: 20px;
    line-height: 1.7; /* 增加行高，看起来更高级 */
    color: #333;
  }

  /* 左侧文字区 */
  .bio-content {
    text-align: justify;
    text-justify: inter-word;
  }

  .bio-content strong {
    color: #000;
  }

  /* 右侧技能树优化 */
  .skills-sidebar {
    border-left: 1px solid #eee; /* 改为极细的浅灰色线 */
    padding-left: 25px;
    font-size: 0.9em;
  }

  .skill-group {
    margin-bottom: 20px;
  }

  .skill-group-title {
    font-weight: bold;
    color: #990000; /* 保持 UBC 红作为点缀 */
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.85em;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  /* 技能标签微调 */
  .tag {
    display: inline-block;
    background: #f0f4f8; /* 极浅的蓝灰色，更有科技感 */
    color: #444;
    padding: 2px 10px;
    margin: 4px 2px;
    border-radius: 3px;
    font-weight: 500;
  }

  /* 移动端自适应 */
  @media (max-width: 768px) {
    .modern-container {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .skills-sidebar {
      border-left: none;
      border-top: 1px solid #eee;
      padding-left: 0;
      padding-top: 20px;
    }
  }
</style>

<div class="modern-container">
  <div class="bio-content">
    <p>Hello, I am <strong>Zhaolin Wei (Clark, 魏召霖)</strong>.</p>

    <p>
      I am a <strong>Master of Mechatronics Design</strong> graduate from the University of British Columbia and a registered <strong>Engineer-in-Training (E.I.T.)</strong> with EGBC. 
      My expertise lies at the intersection of high-precision mechanical design and automated systems.
    </p>

    <p>
      During my graduate studies, I was advised by <a href="https://scholar.google.com/citations?user=bcv5q2gAAAAJ&hl=en">Prof. Xiaoliang Jin</a> at the 
      <a href="https://amp.mech.ubc.ca/">Advanced Manufacturing Processes Laboratory (AMP)</a>, where I <strong>optimized manufacturing workflows</strong> to reduce material waste by 30%. 
      I also collaborated with <a href="https://mech.ubc.ca/ryozo-nagamune/">Prof. Ryozo Nagamune</a> at the 
      <a href="https://cel.mech.ubc.ca/">Control Engineering Laboratory (CEL)</a>.
    </p>

    <p>
      I am a <strong>"Design-for-Manufacturing" (DFM)</strong> focused engineer. Whether it is performing tolerance stack-up analysis (GD&T ASME Y14.5) in <strong>SolidWorks</strong>, 
      writing <strong>Python</strong> scripts for test automation, or getting hands-on with <strong>CNC mills and lathes</strong>, I thrive in environments that push the limits of precision robotics.
    </p>
  </div>

  <div class="skills-sidebar">
    <div class="skill-group">
      <div class="skill-group-title">🛠️ Design & Drafting</div>
      <span class="tag">SolidWorks</span> <span class="tag">AutoCAD</span> 
      <span class="tag">Revit</span> <span class="tag">GD&T</span>
    </div>

    <div class="skill-group">
      <div class="skill-group-title">💻 Programming</div>
      <span class="tag">Python</span> <span class="tag">MATLAB</span> 
      <span class="tag">C++</span> <span class="tag">Data Analysis</span>
    </div>

    <div class="skill-group">
      <div class="skill-group-title">⚙️ Fabrication</div>
      <span class="tag">CNC Machining</span> <span class="tag">3D Printing</span> 
      <span class="tag">Waterjet</span> <span class="tag">Lathe/Mill</span>
    </div>

    <div class="skill-group">
      <div class="skill-group-title">🎓 Credentials</div>
      <span class="tag">E.I.T. (EGBC)</span> <span class="tag">UBC Master's</span>
    </div>
  </div>
</div>

<section style="margin-top: 30px;">
  <p>If you are looking for a mechatronics engineer who can bridge the gap between CAD models and physical prototypes, let’s connect.</p>
  <p>Feel free to reach out: <strong>zhaolinw@student.ubc.ca</strong> or <strong>ziulam1005@gmail.com</strong></p>
  <p><strong><span style="color:#990000;">I am actively seeking Engineering Positions in Robotics, Mechanical Design, or Test Engineering.</span></strong></p>
</section>

<hr>
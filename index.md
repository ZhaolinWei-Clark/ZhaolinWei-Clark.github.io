---
layout: single
author_profile: true
---

<style>
  /* 关键：强制打破主题的宽度限制 */
  .main-wrapper {
    max-width: 1400px !important; /* 强制拉宽中间区域 */
    margin: 0 auto;
    display: flex;
    gap: 50px; /* 左右两栏的间距 */
    align-items: flex-start;
  }

  /* 左侧：文字介绍区（占据 75%） */
  .bio-main {
    flex: 3; 
    text-align: justify; /* 两端对齐 */
    text-justify: inter-word;
    line-height: 1.8;
    color: #333;
  }

  /* 右侧：技能边栏区（占据 25%） */
  .bio-side {
    flex: 1;
    min-width: 280px;
    padding-left: 30px;
    border-left: 1px solid #eaeaea; /* 极细分割线，增加高级感 */
  }

  /* 标题与文字样式 */
  h2, h3 { color: #000; margin-top: 0; }
  .highlight { color: #990000; font-weight: bold; } /* UBC 红 */

  /* 技能标签卡片化 */
  .skill-chip {
    display: inline-block;
    background: #f4f7f9;
    color: #4a5568;
    padding: 4px 12px;
    margin: 4px 2px;
    border-radius: 4px;
    font-size: 0.85em;
    font-weight: 500;
    border: 1px solid #e2e8f0;
  }

  .section-title {
    font-size: 0.8em;
    font-weight: 700;
    color: #990000;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    margin-top: 25px;
  }

  /* 移动端自动恢复单栏 */
  @media (max-width: 1024px) {
    .main-wrapper {
      flex-direction: column;
      max-width: 100% !important;
    }
    .bio-side {
      border-left: none;
      border-top: 1px solid #eee;
      padding-left: 0;
      padding-top: 20px;
      width: 100%;
    }
  }
</style>

<div class="main-wrapper">
  <div class="bio-main">
    <p style="font-size: 1.2em;">Hello, I am <strong>Zhaolin Wei (Clark, 魏召霖)</strong>.</p>

    <p>
      I am a <strong>Master of Mechatronics Design</strong> graduate from the University of British Columbia and a registered <strong>Engineer-in-Training (E.I.T.)</strong> with EGBC. 
      My expertise lies in the full lifecycle of robotics development—from high-precision mechanical design and GD&T to automated testing and system integration.
    </p>

    <p>
      During my graduate studies at the <a href="https://amp.mech.ubc.ca/">Advanced Manufacturing Processes Laboratory (AMP)</a>, I was advised by <a href="https://scholar.google.com/citations?user=bcv5q2gAAAAJ&hl=en">Prof. Xiaoliang Jin</a>, where I <strong>optimized manufacturing workflows</strong> to reduce material waste by 30%. 
      I also collaborated with <a href="https://mech.ubc.ca/ryozo-nagamune/">Prof. Ryozo Nagamune</a> at the <a href="https://cel.mech.ubc.ca/">Control Engineering Laboratory (CEL)</a>, focusing on advanced control engineering solutions. 
    </p>

    <p>
      Previously, at <strong>Sands China</strong>, I utilized <strong>AutoCAD and Revit</strong> for large-scale facility drafting, ensuring 100% compliance with corporate CADD standards. 
      Combined with my 4th-year course design—modeling a complex **Old-fashioned Sewing Machine in SolidWorks**—I have built a strong foundation in managing multi-component assemblies and performing tolerance stack-up analysis (ASME Y14.5).
    </p>

    <p>
      I am a hands-on engineer who bridges the gap between complex CAD models and physical prototypes. Whether it is writing <strong>Python</strong> scripts for automated testing or operating <strong>CNC mills and lathes</strong>, I strive to deliver precision engineering that makes a real-world impact.
    </p>

    <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
      <p>Feel free to reach out: <span class="highlight">zhaolinw@student.ubc.ca</span> or <strong>ziulam1005@gmail.com</strong></p>
      <p><span class="highlight">I am actively seeking Engineering Positions in Robotics, Mechanical Design, or Test Engineering.</span></p>
    </div>
  </div>

  <div class="bio-side">
    <div class="section-title">🛠️ Design & Drafting</div>
    <span class="skill-chip">SolidWorks</span> 
    <span class="skill-chip">AutoCAD</span> 
    <span class="skill-chip">Revit</span> 
    <span class="skill-chip">GD&T</span>

    <div class="section-title">💻 Programming</div>
    <span class="skill-chip">Python</span> 
    <span class="skill-chip">MATLAB</span> 
    <span class="skill-chip">C++</span> 
    <span class="skill-chip">Data Analysis</span>

    <div class="section-title">⚙️ Fabrication</div>
    <span class="skill-chip">CNC Machining</span> 
    <span class="skill-chip">3D Printing</span> 
    <span class="skill-chip">Waterjet</span> 
    <span class="skill-chip">Manual Lathe/Mill</span>

    <div class="section-title">🎓 Credentials</div>
    <span class="skill-chip">E.I.T. (EGBC)</span> 
    <span class="skill-chip">UBC Master's</span>
  </div>
</div>

<hr style="margin: 40px 0;">
---
layout: single
author_profile: true
---

<style>
  /* =========================================
     1. 针对 Minimal Mistakes 主题的强制覆盖
     ========================================= */
  
  /* 让左侧作者栏 Bio 文本两端对齐 */
  .author__bio {
    text-align: justify !important;
    text-justify: inter-word !important;
  }

  /* 大屏幕下：让左侧作者栏变窄 (从默认的宽比例缩小) */
  @media (min-width: 1024px) {
    .sidebar {
      width: 20% !important; /* 强制缩小作者栏 */
      max-width: 240px !important;
    }
    
    /* 让右侧内容区域变宽，填补作者栏缩小的空间 */
    .page__content {
      width: 78% !important; /* 占据剩余空间 */
      float: right !important; /* 确保靠右排列 */
      margin-right: 0 !important;
      padding-right: 0 !important;
      max-width: none !important; /* 解除主题的最大宽度锁 */
    }

    /* 修复可能出现的重叠 */
    .page {
      padding-right: 0 !important;
    }
  }

  /* =========================================
     2. 你的个人主页布局 (文字 + 技能矩阵)
     ========================================= */
  
  .profile-grid {
    display: grid;
    /* 核心布局：文字占 70%，技能栏占 30% */
    grid-template-columns: 7fr 3fr; 
    gap: 40px;
    align-items: start;
  }

  /* 左侧：自我介绍文字 */
  .bio-text-area {
    text-align: justify;
    line-height: 1.7;
    font-size: 1rem;
    color: #333;
  }

  /* 右侧：技能栏 */
  .skills-area {
    border-left: 1px solid #e0e0e0;
    padding-left: 25px;
    padding-top: 5px;
  }

  .skill-section {
    margin-bottom: 25px;
  }

  .skill-title {
    font-size: 0.8rem;
    font-weight: 700;
    color: #800000; /* 接近 UBC Red */
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
    display: block;
  }

  .skill-tag {
    display: inline-block;
    background-color: #f2f4f6;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    color: #24292e;
    font-size: 0.8rem;
    padding: 3px 8px;
    margin: 2px 2px 2px 0;
    white-space: nowrap;
  }

  /* 移动端适配 */
  @media (max-width: 1024px) {
    .profile-grid {
      grid-template-columns: 1fr; /* 变为单栏 */
    }
    .skills-area {
      border-left: none;
      border-top: 1px solid #e0e0e0;
      padding-left: 0;
      padding-top: 20px;
      margin-top: 20px;
    }
    .sidebar {
      width: 100% !important;
      max-width: none !important;
    }
    .page__content {
      width: 100% !important;
      float: none !important;
    }
  }
</style>

<div class="profile-grid">
  
  <div class="bio-text-area">
    <p style="margin-top: 0; font-size: 1.1em;">
      Hello, I am <strong>Zhaolin Wei (Clark, 魏召霖)</strong>.
    </p>

    <p>
      I am a <strong>Master of Mechatronics Design</strong> graduate from the University of British Columbia and a registered <strong>Engineer-in-Training (E.I.T.)</strong> with EGBC. 
      My expertise lies in the full lifecycle of robotics development—from high-precision mechanical design and GD&T to automated testing and system integration.
    </p>

    <p>
      During my graduate studies at the <a href="https://amp.mech.ubc.ca/">Advanced Manufacturing Processes Laboratory (AMP)</a>, I was advised by <a href="https://scholar.google.com/citations?user=bcv5q2gAAAAJ&hl=en">Prof. Xiaoliang Jin</a>, where I <strong>optimized manufacturing workflows</strong> to reduce material waste by 30%. 
      I also collaborated with <a href="https://mech.ubc.ca/ryozo-nagamune/">Prof. Ryozo Nagamune</a> at the <a href="https://cel.mech.ubc.ca/">Control Engineering Laboratory (CEL)</a>.
    </p>

    <p>
      With professional experience at <strong>Sands China</strong> using <strong>AutoCAD and Revit</strong> for large-scale facility drafting, I ensure strict data integrity and standard compliance. 
      Whether performing tolerance stack-up analysis in <strong>SolidWorks</strong> or writing <strong>Python</strong> scripts for test automation, I strive to deliver precision engineering that makes a real-world impact.
    </p>

    <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee;">
      <p style="margin-bottom: 5px;">
        Reach out: <strong style="color: #990000;">zhaolinw@student.ubc.ca</strong> or <strong>ziulam1005@gmail.com</strong>
      </p>
      <p style="font-style: italic; color: #555;">
        Currently seeking Engineering Positions in Robotics, Mechanical Design, or Test Engineering.
      </p>
    </div>
  </div>

  <div class="skills-area">
    
    <div class="skill-section">
      <span class="skill-title">🛠️ Design & Drafting</span>
      <span class="skill-tag">SolidWorks</span>
      <span class="skill-tag">AutoCAD</span>
      <span class="skill-tag">Revit</span>
      <span class="skill-tag">GD&T</span>
    </div>

    <div class="skill-section">
      <span class="skill-title">💻 Programming</span>
      <span class="skill-tag">Python</span>
      <span class="skill-tag">MATLAB</span>
      <span class="skill-tag">C++</span>
      <span class="skill-tag">Data Analysis</span>
    </div>

    <div class="skill-section">
      <span class="skill-title">⚙️ Fabrication</span>
      <span class="skill-tag">CNC Machining</span>
      <span class="skill-tag">3D Printing</span>
      <span class="skill-tag">Waterjet</span>
      <span class="skill-tag">Lathe/Mill</span>
    </div>

    <div class="skill-section">
      <span class="skill-title">🎓 Credentials</span>
      <span class="skill-tag">E.I.T. (EGBC)</span>
      <span class="skill-tag">UBC Master's</span>
    </div>

  </div>
</div>

<hr style="margin-top: 40px; margin-bottom: 40px;">
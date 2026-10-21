---
layout: splash
author_profile: false
portfolio_home: true
title: 'Zhaolin "Clark" Wei — Mechatronics & Controls Engineer'
excerpt: "Selected engineering work in mechanical systems, industrial automation, control and simulation, robotics and AI."
---

<div class="pf-home">
  <header class="pf-hero" id="intro">
    <div class="pf-hero__copy">
      <p class="pf-eyebrow">Engineering portfolio</p>
      <h1>Zhaolin Wei</h1>
      <p class="pf-hero__role">Mechatronics &amp; Controls Engineer</p>
      <p class="pf-hero__intro">I design and analyze physical systems — from precision machinery and motor drives to industrial automation, robotics and engineering software.</p>
      <p class="pf-hero__status">Currently working in industrial controls &amp; automation at FPS Food Process Solutions · Richmond, BC</p>
      <div class="pf-actions">
        <a class="pf-button pf-button--primary" href="#selected-work">View Selected Work</a>
        <a class="pf-button pf-button--secondary" href="{{ '/file/Resume.pdf' | relative_url }}">Resume</a>
        <a class="pf-text-link" href="#contact">Contact <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <figure class="pf-hero__portrait">
      <img src="{{ '/assets/images/selected/portrait.webp' | relative_url }}" width="380" height="460" alt="Portrait of Zhaolin Clark Wei" fetchpriority="high" decoding="async">
    </figure>
  </header>

  <section class="pf-work" id="selected-work" aria-labelledby="selected-heading">
    <div class="pf-section-heading">
      <div><p class="pf-eyebrow">01 / Selected engineering work</p><h2 id="selected-heading">Designed, modeled, built.</h2></div>
      <a class="pf-text-link" href="{{ '/projects/' | relative_url }}">All projects <span aria-hidden="true">↗</span></a>
    </div>
    {% assign featured = site.data.projects | where_exp: 'item', 'item.featured' | sort: 'featured_order' %}
    {% for project in featured %}
      {% include portfolio/selected-project.html project=project index=forloop.index %}
    {% endfor %}
  </section>

  <section class="pf-domains" id="domains" aria-labelledby="domains-heading">
    <div class="pf-section-heading"><div><p class="pf-eyebrow">02 / Engineering domains</p><h2 id="domains-heading">Working across the system.</h2></div></div>
    <div class="pf-domains__grid">
      <div><h3>Mechanical Systems</h3><p>Precision assemblies, rotating machinery, tolerancing and failure analysis — connecting design decisions to manufacturing constraints.</p></div>
      <div><h3>Industrial Automation</h3><p>Monitoring interfaces, sensor feedback and engineering software that connect physical equipment with practical controls.</p></div>
      <div><h3>Controls &amp; Automation</h3><p>Motor-drive models, thermal feedback and machining dynamics, explored through MATLAB, Simulink and Python.</p></div>
      <div><h3>Robotics &amp; AI</h3><p>Vision-based tracking and robot integration, with ongoing work on teleoperation and data collection for imitation learning.</p></div>
    </div>
  </section>

  <section class="pf-about" id="about" aria-labelledby="about-heading">
    <div><p class="pf-eyebrow">03 / About</p><h2 id="about-heading">From the drawing<br>to the system.</h2></div>
    <div class="pf-about__copy">
      <p>I work across mechanical systems, controls, industrial automation, and robotics. My background includes precision machinery, motor-drive modeling, instrumentation, manufacturing, and computer vision.</p>
      <p class="pf-about__role"><strong>Control Technician</strong><br>FPS Food Process Solutions Corporation<br>Richmond, BC · 2026–Present</p>
      <p class="pf-about__credentials">E.I.T. · CSWP · CMfgT · Six Sigma Green Belt · M.Eng&nbsp;UBC</p>
      <a class="pf-text-link" href="{{ '/about/' | relative_url }}">About me <span aria-hidden="true">↗</span></a>
    </div>
  </section>

  <footer class="pf-contact" id="contact" aria-labelledby="contact-heading">
    <p class="pf-eyebrow">04 / Contact</p>
    <h2 id="contact-heading">Let’s talk engineering.</h2>
    <p>For conversations about mechanical systems, controls, automation, and robotics.</p>
    <div class="pf-actions">
      <a class="pf-text-link" href="mailto:zhaolinw@student.ubc.ca">zhaolinw@student.ubc.ca <span aria-hidden="true">↗</span></a>
      <a class="pf-text-link" href="https://www.linkedin.com/in/zhaolinwei">LinkedIn <span aria-hidden="true">↗</span></a>
      <a class="pf-text-link" href="{{ '/file/Resume.pdf' | relative_url }}">Resume <span aria-hidden="true">↗</span></a>
    </div>
    <nav class="pf-secondary-nav" aria-label="More about Clark">
      <a href="{{ '/blogs/' | relative_url }}">Blogs</a>
      <a href="{{ '/hobbies/' | relative_url }}">Hobbies</a>
      <a href="{{ '/projects/' | relative_url }}">Project archive</a>
    </nav>
  </footer>
</div>

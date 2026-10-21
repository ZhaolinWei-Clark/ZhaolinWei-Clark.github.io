---
layout: splash
permalink: /projects/
title: "Projects"
author_profile: false
portfolio_projects: true
---


<div class="portfolio-projects">
<div class="shell">

<!-- HERO -->
<header class="hero">
  <p class="hero-eyebrow">Engineering Portfolio · Zhaolin Wei</p>
  <h1 class="hero-h1">Mechanical CAD-driven engineering.<br><em>Precision assemblies · Control systems · Manufacturing-ready design.</em></h1>
  <p class="hero-sub">SolidWorks · MATLAB/Simulink · Python · OpenCV · Arduino · FEA</p>
</header>

<div class="body-grid">
<div class="main">
<!-- ═══════════════════════════════════════
     1. MECHANICAL DESIGN  (3 projects)
═══════════════════════════════════════ -->
<section class="cat" id="cat-mech">
  <div class="cat-hdr" onclick="toggleCat('cat-mech')">
    <span class="cat-name">Mechanical Design</span>
    <span class="cat-cnt">3 projects</span>
    <span class="cat-chev">▾</span>
  </div>
  <div class="cat-body" id="cat-mech-body">
    <div class="card-grid g2">

      <!-- Spindle -->
      {% assign project = site.data.projects | where: 'id', 'spindle' | first %}
      {% include portfolio/project-card.html project=project %}

      <!-- S45C Shaft -->
      {% assign project = site.data.projects | where: 'id', 'shaft' | first %}
      {% include portfolio/project-card.html project=project %}

      <!-- Sewing Machine -->
      {% assign project = site.data.projects | where: 'id', 'sewing' | first %}
      {% include portfolio/project-card.html project=project %}

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════
     2. CONTROL & SIMULATION  (4 projects)
═══════════════════════════════════════ -->
<section class="cat" id="cat-ctrl">
  <div class="cat-hdr" onclick="toggleCat('cat-ctrl')">
    <span class="cat-name">Control &amp; Simulation</span>
    <span class="cat-cnt">4 projects</span>
    <span class="cat-chev">▾</span>
  </div>
  <div class="cat-body" id="cat-ctrl-body">
    <div class="card-grid g2">

      <!-- BLDC -->
      {% assign project = site.data.projects | where: 'id', 'bldc' | first %}
      {% include portfolio/project-card.html project=project %}

      <!-- HVAC -->
      {% assign project = site.data.projects | where: 'id', 'hvac' | first %}
      {% include portfolio/project-card.html project=project %}

      <!-- Warehouse -->
      {% assign project = site.data.projects | where: 'id', 'warehouse' | first %}
      {% include portfolio/project-card.html project=project %}

      <!-- EM Tool (moved here from Embedded) -->
      {% assign project = site.data.projects | where: 'id', 'em' | first %}
      {% include portfolio/project-card.html project=project %}

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════
     3. RESEARCH  (3 projects — max 2 per row)
═══════════════════════════════════════ -->
<section class="cat" id="cat-res">
  <div class="cat-hdr" onclick="toggleCat('cat-res')">
    <span class="cat-name">Research</span>
    <span class="cat-cnt">3 projects</span>
    <span class="cat-chev">▾</span>
  </div>
  <div class="cat-body" id="cat-res-body">
    <div class="card-grid g2-research">

      <!-- L-DED -->
      {% assign project = site.data.projects | where: 'id', 'lded' | first %}
      {% include portfolio/project-card.html project=project %}

      <!-- Self-powered sensor -->
      {% assign project = site.data.projects | where: 'id', 'sensor' | first %}
      {% include portfolio/project-card.html project=project %}

      <!-- Chatter -->
      {% assign project = site.data.projects | where: 'id', 'chatter' | first %}
      {% include portfolio/project-card.html project=project %}

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════
     4. ROBOTICS  (2 projects)
═══════════════════════════════════════ -->
<section class="cat" id="cat-robo">
  <div class="cat-hdr" onclick="toggleCat('cat-robo')">
    <span class="cat-name">Robotics</span>
    <span class="cat-cnt">2 projects</span>
    <span class="cat-chev">▾</span>
  </div>
  <div class="cat-body" id="cat-robo-body">
    <div class="card-grid g2">

      <!-- AlohaMini -->
      {% assign project = site.data.projects | where: 'id', 'aloha' | first %}
      {% include portfolio/project-card.html project=project %}

      <!-- Surgical -->
      {% assign project = site.data.projects | where: 'id', 'surgical' | first %}
      {% include portfolio/project-card.html project=project %}

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════
     5. EMBEDDED SYSTEMS  (2 projects)
═══════════════════════════════════════ -->
<section class="cat" id="cat-emb">
  <div class="cat-hdr" onclick="toggleCat('cat-emb')">
    <span class="cat-name">Embedded Systems</span>
    <span class="cat-cnt">2 projects</span>
    <span class="cat-chev">▾</span>
  </div>
  <div class="cat-body" id="cat-emb-body">
    <div class="card-grid g2">

      <!-- Heater -->
      {% assign project = site.data.projects | where: 'id', 'heater' | first %}
      {% include portfolio/project-card.html project=project %}

      <!-- Placeholder for future embedded project -->
      {% assign project = site.data.projects | where: 'id', 'emb2' | first %}
      {% include portfolio/project-card.html project=project %}

    </div>
  </div>
</section>

</div>

<!-- ═══════════════════════════════════════
     SIDEBAR
═══════════════════════════════════════ -->
<aside class="sidebar">
  <p class="sb-title">Sections</p>
  <ul class="sb-nav">
    <li><a href="#cat-mech" data-cat="cat-mech" class="active"><span class="n">01</span>Mechanical</a></li>
    <li><a href="#cat-ctrl" data-cat="cat-ctrl"><span class="n">02</span>Control</a></li>
    <li><a href="#cat-res"  data-cat="cat-res"><span class="n">03</span>Research</a></li>
    <li><a href="#cat-robo" data-cat="cat-robo"><span class="n">04</span>Robotics</a></li>
    <li><a href="#cat-emb"  data-cat="cat-emb"><span class="n">05</span>Embedded</a></li>
  </ul>
  <div class="sb-div"></div>
  <p class="sb-ftitle">Filter</p>
  <div class="sb-filters">
    <span class="ftag" data-f="CAD">CAD</span>
    <span class="ftag" data-f="Motor">Motor</span>
    <span class="ftag" data-f="Control">Control</span>
    <span class="ftag" data-f="MATLAB">MATLAB</span>
    <span class="ftag" data-f="Python">Python</span>
    <span class="ftag" data-f="Manufacturing">Mfg</span>
    <span class="ftag" data-f="Fatigue">Fatigue</span>
    <span class="ftag" data-f="FEA">FEA</span>
    <span class="ftag" data-f="Robotics">Robotics</span>
    <span class="ftag" data-f="Embedded">Embedded</span>
    <span class="ftag" data-f="GDT">GD&amp;T</span>
    <span class="ftag" data-f="Simulation">Sim</span>
    <span class="ftag" data-f="Test">Test</span>
  </div>
</aside>

</div><!-- /body-grid -->
</div><!-- /shell -->

<!-- ═══════════════════════════════════════════════════
     MODALS
═══════════════════════════════════════════════════ -->

<!-- SPINDLE -->
{% assign project = site.data.projects | where: 'modal_id', 'm-spindle' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- S45C SHAFT -->
{% assign project = site.data.projects | where: 'modal_id', 'm-shaft' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- SEWING MACHINE -->
{% assign project = site.data.projects | where: 'modal_id', 'm-sewing' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- BLDC -->
{% assign project = site.data.projects | where: 'modal_id', 'm-bldc' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- HVAC -->
{% assign project = site.data.projects | where: 'modal_id', 'm-hvac' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- WAREHOUSE -->
{% assign project = site.data.projects | where: 'modal_id', 'm-warehouse' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- EM TOOL -->
{% assign project = site.data.projects | where: 'modal_id', 'm-em' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- L-DED (dual image gallery) -->
{% assign project = site.data.projects | where: 'modal_id', 'm-lded' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- SENSOR -->
{% assign project = site.data.projects | where: 'modal_id', 'm-sensor' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- CHATTER -->
{% assign project = site.data.projects | where: 'modal_id', 'm-chatter' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- ALOHA -->
{% assign project = site.data.projects | where: 'modal_id', 'm-aloha' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- SURGICAL -->
{% assign project = site.data.projects | where: 'modal_id', 'm-surgical' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- HEATER -->
{% assign project = site.data.projects | where: 'modal_id', 'm-heater' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- EMB2 placeholder -->
{% assign project = site.data.projects | where: 'modal_id', 'm-emb2' | first %}
{% include portfolio/project-modal.html project=project %}

<!-- LIGHTBOX -->
<div class="lb-ov" id="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged project image" tabindex="-1" inert>
  <button class="lb-close" onclick="lbClose()" aria-label="Close enlarged image">✕</button>
  <img id="lb-img" class="lb-img" alt="">
</div>


</div>

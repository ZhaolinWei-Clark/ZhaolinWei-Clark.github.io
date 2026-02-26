---
permalink: /projects/
title: "Projects"
---
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects — Engineering Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>

/* ═══════════════════════════════════════════════════════
   RESET & ROOT
═══════════════════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --black:         #0d0d0d;
  --near-black:    #1a1a1a;
  --charcoal:      #2e2e2e;
  --mid:           #555;
  --muted:         #888;
  --light-mid:     #aaa;
  --border:        #e2e2e2;
  --border-light:  #eeeeee;
  --bg:            #ffffff;
  --bg-off:        #fafafa;
  --bg-card:       #ffffff;
  --blue:          #1a3ef0;
  --blue-hover:    #0f2bc0;
  --blue-light:    #eef1ff;
  --tag-bg:        #f2f2f2;
  --tag-hover:     #e8ecff;
  --tag-active:    #1a3ef0;
  --shadow-sm:     0 1px 4px rgba(0,0,0,0.07), 0 0 1px rgba(0,0,0,0.05);
  --shadow-md:     0 4px 20px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05);
  --shadow-lg:     0 12px 48px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06);
  --radius:        8px;
  --font-display:  'DM Serif Display', Georgia, serif;
  --font-ui:       'Syne', 'SF Pro Display', 'Helvetica Neue', Helvetica, sans-serif;
  --transition:    0.18s ease;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-ui);
  background: var(--bg);
  color: var(--near-black);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ═══════════════════════════════════════════════════════
   PAGE SHELL — left sidebar + right content
═══════════════════════════════════════════════════════ */
.port-shell {
  max-width: 1700px;
  width: 96%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  padding-bottom: 120px;
}

/* ── Hero spans both columns ── */
.port-hero {
  grid-column: 1 / -1;
  padding: 72px 0 64px;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.port-hero-eyebrow {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 18px;
}

.port-hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  font-weight: 400;
  color: var(--black);
  line-height: 1.15;
  letter-spacing: -0.02em;
  max-width: 800px;
  margin-bottom: 16px;
}

.port-hero-title em {
  font-style: italic;
  color: var(--charcoal);
}

.port-hero-sub {
  font-size: 0.82rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
}

/* ═══════════════════════════════════════════════════════
   LEFT SIDEBAR
═══════════════════════════════════════════════════════ */
.port-sidebar {
  grid-column: 1;
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 44px 32px 44px 0;
  border-right: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar-label {
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--light-mid);
  margin-bottom: 22px;
}

.sidebar-nav { list-style: none; flex: 1; }

.sidebar-nav li { margin-bottom: 4px; }

.sidebar-nav li a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--mid);
  text-decoration: none;
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
  white-space: nowrap;
  overflow: hidden;
}

.sidebar-nav li a .nav-num {
  font-size: 0.6rem;
  color: var(--border);
  font-weight: 700;
  min-width: 16px;
  transition: color var(--transition);
}

.sidebar-nav li a:hover {
  background: var(--bg-off);
  color: var(--near-black);
}

.sidebar-nav li a:hover .nav-num { color: var(--light-mid); }

.sidebar-nav li a.active {
  background: var(--blue-light);
  color: var(--blue);
  font-weight: 600;
}

.sidebar-nav li a.active .nav-num { color: var(--blue); opacity: 0.5; }

/* Tag filter section */
.sidebar-divider {
  height: 1px;
  background: var(--border-light);
  margin: 28px 0;
}

.sidebar-filter-label {
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--light-mid);
  margin-bottom: 14px;
}

.sidebar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.filter-tag {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: 20px;
  background: var(--tag-bg);
  color: var(--mid);
  cursor: pointer;
  border: 1px solid transparent;
  transition: all var(--transition);
  user-select: none;
}

.filter-tag:hover { background: var(--tag-hover); color: var(--blue); border-color: #c5ccff; }
.filter-tag.active { background: var(--blue); color: #fff; border-color: var(--blue); }

/* ═══════════════════════════════════════════════════════
   RIGHT CONTENT
═══════════════════════════════════════════════════════ */
.port-main {
  grid-column: 2;
  padding: 44px 0 0 52px;
}

/* Category sections */
.cat-section {
  margin-bottom: 64px;
  opacity: 0;
  transform: translateY(18px);
  animation: fadeUp 0.4s ease forwards;
}

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

.cat-section:nth-child(1) { animation-delay: 0.05s; }
.cat-section:nth-child(2) { animation-delay: 0.12s; }
.cat-section:nth-child(3) { animation-delay: 0.19s; }
.cat-section:nth-child(4) { animation-delay: 0.26s; }
.cat-section:nth-child(5) { animation-delay: 0.33s; }

.cat-header {
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding-bottom: 20px;
  border-bottom: 1.5px solid var(--border);
  margin-bottom: 28px;
  cursor: pointer;
  user-select: none;
}

.cat-header:hover .cat-title { color: var(--blue); }

.cat-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--black);
  letter-spacing: -0.01em;
  transition: color var(--transition);
}

.cat-count {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--light-mid);
  margin-left: auto;
}

.cat-chevron {
  font-size: 0.9rem;
  color: var(--light-mid);
  transition: transform var(--transition), color var(--transition);
}

.cat-section.collapsed .cat-chevron { transform: rotate(-90deg); }
.cat-header:hover .cat-chevron { color: var(--blue); }

/* Category body */
.cat-body {
  overflow: hidden;
  transition: max-height 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}

.cat-section.collapsed .cat-body { max-height: 0 !important; }

/* ═══════════════════════════════════════════════════════
   PROJECT CARDS
═══════════════════════════════════════════════════════ */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.card-grid.single { grid-template-columns: minmax(0, 600px); }
.card-grid.double { grid-template-columns: 1fr 1fr; }

.proj-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
  box-shadow: var(--shadow-sm);
}

.proj-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: #ddd;
}

/* Card image */
.card-img {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: var(--bg-off);
  position: relative;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease, opacity 0.2s ease;
}

.proj-card:hover .card-img img {
  transform: scale(1.02);
}

.card-img-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

.card-img-split img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-img-split img:first-child { border-right: 1px solid var(--border-light); }

/* Image placeholder */
.img-ph {
  width: 100%;
  height: 100%;
  background: var(--bg-off);
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-ph-inner {
  text-align: center;
}

.img-ph-inner svg {
  display: block;
  margin: 0 auto 8px;
  opacity: 0.2;
}

.img-ph-inner span {
  font-size: 0.62rem;
  color: var(--light-mid);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* Card body */
.card-body { padding: 20px 22px 22px; }

.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--near-black);
  line-height: 1.3;
  margin-bottom: 6px;
}

.card-pos {
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 400;
  line-height: 1.55;
  margin-bottom: 14px;
  text-align: justify;
  text-justify: inter-word;
}

/* Tags */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.tag {
  font-size: 0.62rem;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 20px;
  background: var(--tag-bg);
  color: var(--mid);
  letter-spacing: 0.04em;
  transition: background var(--transition), color var(--transition);
}

.proj-card:hover .tag { background: var(--tag-hover); color: var(--blue); }

.tag.active-filter { background: var(--blue); color: #fff; }

/* View Details */
.card-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--blue);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  font-family: var(--font-ui);
  transition: opacity var(--transition);
}

.card-btn:hover { opacity: 0.7; }

.card-btn svg { transition: transform var(--transition); }
.card-btn:hover svg { transform: translateX(2px); }

/* Hidden card (tag filter) */
.proj-card.hidden {
  display: none;
}

/* ═══════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10,10,10,0.55);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.22s ease;
}

.modal-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.modal-box {
  background: var(--bg);
  border-radius: 12px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  transform: scale(0.96) translateY(12px);
  transition: transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
}

.modal-overlay.open .modal-box {
  transform: scale(1) translateY(0);
}

.modal-close {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px 0;
  background: var(--bg);
}

.modal-close-btn {
  width: 32px; height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg-off);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--mid);
  transition: background var(--transition), color var(--transition);
}

.modal-close-btn:hover { background: #ffe5e5; color: #c00; border-color: #fcc; }

.modal-img {
  width: 100%;
  max-height: 380px;
  overflow: hidden;
  background: var(--bg-off);
  margin-bottom: 0;
}

.modal-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.modal-img-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  width: 100%;
  max-height: 280px;
  overflow: hidden;
}

.modal-img-row img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.modal-img-duo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  max-height: 320px;
  overflow: hidden;
}

.modal-img-duo img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.modal-content { padding: 28px 36px 40px; }

.modal-eyebrow {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 8px;
}

.modal-title {
  font-family: var(--font-display);
  font-size: 1.9rem;
  font-weight: 400;
  color: var(--black);
  line-height: 1.2;
  letter-spacing: -0.015em;
  margin-bottom: 6px;
}

.modal-sub {
  font-size: 0.88rem;
  color: var(--muted);
  font-weight: 400;
  margin-bottom: 24px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.7;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 28px;
}

.modal-tags .tag { font-size: 0.65rem; padding: 4px 11px; }

.modal-divider {
  height: 1px;
  background: var(--border-light);
  margin: 24px 0;
}

/* Detail grid */
.modal-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 40px;
}

.modal-details.cols-3 {
  grid-template-columns: 1fr 1fr 1fr;
}

.modal-field-label {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--light-mid);
  margin-bottom: 7px;
}

.modal-field-val {
  font-size: 0.88rem;
  color: var(--charcoal);
  font-weight: 400;
  line-height: 1.75;
  text-align: justify;
  text-justify: inter-word;
}

.modal-field-val ul {
  list-style: none;
  padding: 0;
}

.modal-field-val ul li {
  padding-left: 16px;
  position: relative;
  margin-bottom: 4px;
  font-size: 0.85rem;
}

.modal-field-val ul li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--border);
}

/* Highlight box */
.modal-highlight {
  background: #f8f9ff;
  border: 1px solid #dce1ff;
  border-radius: 6px;
  padding: 16px 20px;
  margin-top: 20px;
}

.modal-highlight-title {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 10px;
}

.modal-highlight ul {
  list-style: none;
  padding: 0;
}

.modal-highlight ul li {
  font-size: 0.84rem;
  color: var(--charcoal);
  padding-left: 16px;
  position: relative;
  margin-bottom: 5px;
  line-height: 1.55;
}

.modal-highlight ul li::before {
  content: '↗';
  position: absolute;
  left: 0;
  color: var(--blue);
  font-size: 0.7rem;
}

/* Failure analysis specific */
.failure-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 32px;
  margin-top: 8px;
}

.failure-cell {
  border-left: 2px solid var(--border);
  padding-left: 14px;
}

.failure-cell-label {
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c0392b;
  margin-bottom: 5px;
}

.failure-cell-val {
  font-size: 0.83rem;
  color: var(--charcoal);
  line-height: 1.7;
}

.modal-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--blue);
  text-decoration: none;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-bottom: 1px solid #c5ccff;
  padding-bottom: 2px;
  transition: opacity var(--transition);
}

.modal-link:hover { opacity: 0.7; }

/* ═══════════════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════════════ */
@media (max-width: 1100px) {
  .port-shell { grid-template-columns: 190px 1fr; }
  .port-main { padding-left: 36px; }
}

@media (max-width: 860px) {
  .port-shell {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
  }
  .port-hero { grid-column: 1; }
  .port-sidebar {
    grid-column: 1;
    position: static;
    height: auto;
    padding: 28px 0 0;
    border-right: none;
    border-bottom: 1px solid var(--border-light);
  }
  .sidebar-nav { display: flex; flex-wrap: wrap; gap: 6px; }
  .sidebar-nav li { margin: 0; }
  .sidebar-nav li a { padding: 6px 10px; border-radius: 20px; font-size: 0.72rem; }
  .port-main { grid-column: 1; padding: 32px 0 0; }
  .card-grid.double { grid-template-columns: 1fr; }
  .modal-details { grid-template-columns: 1fr; }
  .modal-details.cols-3 { grid-template-columns: 1fr 1fr; }
  .failure-grid { grid-template-columns: 1fr; }
  .modal-content { padding: 24px 22px 32px; }
  .modal-title { font-size: 1.5rem; }
  .modal-img-row { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 540px) {
  .port-shell { width: 100%; padding: 0 16px 80px; }
  .port-hero { padding: 48px 0 40px; }
  .card-grid { grid-template-columns: 1fr; }
}

</style>

<!-- ═══════════════════════════════════════════════════
     BODY
═══════════════════════════════════════════════════ -->
<div class="port-shell">

  <!-- HERO -->
  <header class="port-hero">
    <p class="port-hero-eyebrow">Engineering Portfolio</p>
    <h1 class="port-hero-title">
      Mechanical CAD-driven engineering.<br>
      <em>Precision assemblies. Control-integrated systems.</em>
    </h1>
    <p class="port-hero-sub">SolidWorks · MATLAB/Simulink · Python · OpenCV · Arduino · FEA</p>
  </header>

  <!-- LEFT SIDEBAR -->
  <aside class="port-sidebar">
    <p class="sidebar-label">Categories</p>
    <ul class="sidebar-nav">
      <li><a href="#cat-mech" data-cat="cat-mech" class="active"><span class="nav-num">01</span>Mechanical Design</a></li>
      <li><a href="#cat-ctrl" data-cat="cat-ctrl"><span class="nav-num">02</span>Control &amp; Simulation</a></li>
      <li><a href="#cat-fail" data-cat="cat-fail"><span class="nav-num">03</span>Failure Analysis</a></li>
      <li><a href="#cat-robo" data-cat="cat-robo"><span class="nav-num">04</span>Robotics Systems</a></li>
      <li><a href="#cat-emb"  data-cat="cat-emb"><span class="nav-num">05</span>Embedded Systems</a></li>
    </ul>

    <div class="sidebar-divider"></div>

    <p class="sidebar-filter-label">Filter by skill</p>
    <div class="sidebar-tags">
      <span class="filter-tag" data-filter="CAD">CAD</span>
      <span class="filter-tag" data-filter="GD&T">GD&amp;T</span>
      <span class="filter-tag" data-filter="Thermal">Thermal</span>
      <span class="filter-tag" data-filter="FEA">FEA</span>
      <span class="filter-tag" data-filter="Fatigue">Fatigue</span>
      <span class="filter-tag" data-filter="Control">Control</span>
      <span class="filter-tag" data-filter="Simulation">Simulation</span>
      <span class="filter-tag" data-filter="GUI">GUI</span>
      <span class="filter-tag" data-filter="Robotics">Robotics</span>
      <span class="filter-tag" data-filter="Embedded">Embedded</span>
      <span class="filter-tag" data-filter="Python">Python</span>
      <span class="filter-tag" data-filter="MATLAB">MATLAB</span>
    </div>
  </aside>

  <!-- RIGHT MAIN -->
  <main class="port-main">

    <!-- ═════════════════════════════════════
         1. MECHANICAL DESIGN
    ═════════════════════════════════════ -->
    <section class="cat-section" id="cat-mech">
      <div class="cat-header" onclick="toggleCat('cat-mech')">
        <h2 class="cat-title">Mechanical Design</h2>
        <span class="cat-count">2 Projects</span>
        <span class="cat-chevron">▾</span>
      </div>
      <div class="cat-body" id="cat-mech-body">
        <div class="card-grid double">

          <!-- Card: Spindle -->
          <div class="proj-card" data-tags="CAD,GD&T,Thermal" onclick="openModal('modal-spindle')">
            <div class="card-img">
              <div class="card-img-split">
                <img src="/images/fuwode/hs spindle.png" alt="Spindle cross-section">
                <img src="/images/fuwode/A12B.jpg" alt="Spindle assembly">
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">High-Speed Motor Spindle</h3>
              <p class="card-pos">Industrial CNC spindle design for Fuwode Machinery — precision assembly with thermal-stable architecture and interference-fit validation.</p>
              <div class="card-tags">
                <span class="tag">CAD</span>
                <span class="tag">GD&amp;T</span>
                <span class="tag">Thermal</span>
                <span class="tag">SolidWorks</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

          <!-- Card: Sewing Machine -->
          <div class="proj-card" data-tags="CAD,GD&T" onclick="openModal('modal-sewing')">
            <div class="card-img">
              <img src="/images/solidworks_sewing%20machine.png" alt="SolidWorks sewing machine assembly">
            </div>
            <div class="card-body">
              <h3 class="card-title">Vintage Sewing Machine Assembly</h3>
              <p class="card-pos">50+ component parametric SolidWorks assembly — full GD&amp;T application and tolerance stack-up analysis ensuring kinematic accuracy.</p>
              <div class="card-tags">
                <span class="tag">CAD</span>
                <span class="tag">GD&amp;T</span>
                <span class="tag">SolidWorks</span>
                <span class="tag">Tolerance</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════
         2. CONTROL & SIMULATION
    ═════════════════════════════════════ -->
    <section class="cat-section" id="cat-ctrl">
      <div class="cat-header" onclick="toggleCat('cat-ctrl')">
        <h2 class="cat-title">Control &amp; Simulation</h2>
        <span class="cat-count">3 Projects</span>
        <span class="cat-chevron">▾</span>
      </div>
      <div class="cat-body" id="cat-ctrl-body">
        <div class="card-grid">

          <!-- Card: BLDC -->
          <div class="proj-card" data-tags="Control,Simulation,MATLAB" onclick="openModal('modal-bldc')">
            <div class="card-img">
              <div class="card-img-split">
                <img src="/images/bldc_ubc_torque.png" alt="BLDC torque analysis">
                <img src="/images/bldc_ubc_compare result vsi.png" alt="VSI comparison">
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">BLDC Motor Drive — MTPV Control</h3>
              <p class="card-pos">Maximum Torque Per Voltage strategy — optimal voltage lead angle derivation maximizing high-speed torque under voltage constraints.</p>
              <div class="card-tags">
                <span class="tag">Control</span>
                <span class="tag">MATLAB</span>
                <span class="tag">Simulation</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

          <!-- Card: Warehouse -->
          <div class="proj-card" data-tags="Simulation,GUI,Python" onclick="openModal('modal-warehouse')">
            <div class="card-img">
              <img src="/images/warehouse.png" alt="Warehouse management system">
            </div>
            <div class="card-body">
              <h3 class="card-title">Automated Warehouse Management System</h3>
              <p class="card-pos">2D simulation platform with configurable warehouse parameters, robot fleet management, and automated task scheduling via GUI.</p>
              <div class="card-tags">
                <span class="tag">Simulation</span>
                <span class="tag">GUI</span>
                <span class="tag">Python</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

          <!-- Card: EM Tool -->
          <div class="proj-card" data-tags="Control,Simulation,Python" onclick="openModal('modal-em')">
            <div class="card-img">
              <div class="img-ph">
                <!-- INSERT IMAGE HERE -->
                <div class="img-ph-inner">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>
                  <span>Image Pending</span>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">Electromagnetic Calculation Tool — PM Motors</h3>
              <p class="card-pos">Python automation of magnetic circuit calculations — eliminates manual iteration in preliminary DC permanent magnet motor design.</p>
              <div class="card-tags">
                <span class="tag">Python</span>
                <span class="tag">Simulation</span>
                <span class="tag">Control</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════
         3. FAILURE ANALYSIS & RESEARCH
    ═════════════════════════════════════ -->
    <section class="cat-section" id="cat-fail">
      <div class="cat-header" onclick="toggleCat('cat-fail')">
        <h2 class="cat-title">Failure Analysis &amp; Research</h2>
        <span class="cat-count">2 Projects</span>
        <span class="cat-chevron">▾</span>
      </div>
      <div class="cat-body" id="cat-fail-body">
        <div class="card-grid double">

          <!-- Card: S45C Shaft -->
          <div class="proj-card" data-tags="Fatigue,FEA,CAD" onclick="openModal('modal-shaft')">
            <div class="card-img">
              <div class="img-ph">
                <!-- INSERT IMAGE HERE -->
                <div class="img-ph-inner">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>
                  <span>Image Pending</span>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">S45C Motor Shaft Fatigue Failure Analysis</h3>
              <p class="card-pos">Root-cause investigation of rotational bending fatigue at shaft shoulder — Fuwode Machinery. Identified improper induction hardening as primary cause.</p>
              <div class="card-tags">
                <span class="tag">Fatigue</span>
                <span class="tag">FEA</span>
                <span class="tag">Heat Treatment</span>
                <span class="tag">CAD</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

          <!-- Card: L-DED -->
          <div class="proj-card" data-tags="Control,Thermal" onclick="openModal('modal-lded')">
            <div class="card-img">
              <img src="/images/additivie set up.jpeg" alt="L-DED setup">
            </div>
            <div class="card-body">
              <h3 class="card-title">L-DED Closed-Loop Temperature Monitoring</h3>
              <p class="card-pos">Graduate thesis — real-time melt pool stabilization in laser-based directed energy deposition, reducing thermal defects in additive manufacturing.</p>
              <div class="card-tags">
                <span class="tag">Control</span>
                <span class="tag">Thermal</span>
                <span class="tag">Research</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════
         4. ROBOTICS SYSTEMS
    ═════════════════════════════════════ -->
    <section class="cat-section" id="cat-robo">
      <div class="cat-header" onclick="toggleCat('cat-robo')">
        <h2 class="cat-title">Robotics Systems</h2>
        <span class="cat-count">2 Projects</span>
        <span class="cat-chevron">▾</span>
      </div>
      <div class="cat-body" id="cat-robo-body">
        <div class="card-grid double">

          <!-- Card: AlohaMini -->
          <div class="proj-card" data-tags="Robotics,Control,Python" onclick="openModal('modal-aloha')">
            <div class="card-img">
              <img src="/images/Image_robot_in_progress1.png" alt="AlohaMini robot platform">
            </div>
            <div class="card-body">
              <h3 class="card-title">Low-Cost Dual-Arm Mobile Robot — AlohaMini</h3>
              <p class="card-pos">Open-source teleoperated dual-arm manipulator — full hardware integration, actuator control, and imitation learning data pipeline. <span style="font-size:0.7rem;color:#e67e22;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">In Progress</span></p>
              <div class="card-tags">
                <span class="tag">Robotics</span>
                <span class="tag">Control</span>
                <span class="tag">Python</span>
                <span class="tag">Imitation Learning</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

          <!-- Card: Surgical Tracking -->
          <div class="proj-card" data-tags="Python,Control,Robotics" onclick="openModal('modal-surgical')">
            <div class="card-img">
              <img src="/images/combined.png" alt="Surgical tracking system">
            </div>
            <div class="card-body">
              <h3 class="card-title">3D Surgical Instrument &amp; Tissue Tracking</h3>
              <p class="card-pos">Real-time stereo vision system — Lucas-Kanade optical flow with Shi-Tomasi detection. &lt;0.8 px accuracy · 15% fewer tracking failures.</p>
              <div class="card-tags">
                <span class="tag">Python</span>
                <span class="tag">OpenCV</span>
                <span class="tag">Robotics</span>
                <span class="tag">Vision</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════
         5. EMBEDDED SYSTEMS
    ═════════════════════════════════════ -->
    <section class="cat-section" id="cat-emb">
      <div class="cat-header" onclick="toggleCat('cat-emb')">
        <h2 class="cat-title">Embedded Systems</h2>
        <span class="cat-count">2 Projects</span>
        <span class="cat-chevron">▾</span>
      </div>
      <div class="cat-body" id="cat-emb-body">
        <div class="card-grid double">

          <!-- Card: Smart Heater -->
          <div class="proj-card" data-tags="Embedded,Control,Thermal" onclick="openModal('modal-heater')">
            <div class="card-img">
              <div class="card-img-split">
                <img src="/images/Poster Assembly Picture.PNG" alt="Assembly view">
                <img src="/images/Poster Explorsion Veiw.PNG" alt="Exploded view">
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">Arduino Smart Cup Heater</h3>
              <p class="card-pos">Closed-loop temperature control system with sensor calibration, user-selectable setpoint (10–80°C), and real-time LCD feedback.</p>
              <div class="card-tags">
                <span class="tag">Embedded</span>
                <span class="tag">Control</span>
                <span class="tag">Thermal</span>
                <span class="tag">Arduino</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

          <!-- Card: HVAC -->
          <div class="proj-card" data-tags="Embedded,GUI,Control" onclick="openModal('modal-hvac')">
            <div class="card-img">
              <img src="/images/HVAC.png" alt="HVAC control GUI">
            </div>
            <div class="card-body">
              <h3 class="card-title">Autonomous HVAC Control System</h3>
              <p class="card-pos">Intern project at Sands China — GUI-based HVAC automation with real-time feedback loops and energy consumption optimization.</p>
              <div class="card-tags">
                <span class="tag">Embedded</span>
                <span class="tag">GUI</span>
                <span class="tag">Control</span>
              </div>
              <button class="card-btn">View Details <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main><!-- /port-main -->
</div><!-- /port-shell -->

<!-- ═══════════════════════════════════════════════════
     MODALS
═══════════════════════════════════════════════════ -->

<!-- MODAL: Spindle -->
<div class="modal-overlay" id="modal-spindle" onclick="closeModalOutside(event, 'modal-spindle')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-spindle')">✕</button></div>
    <div class="modal-img">
      <div class="modal-img-row">
        <img src="/images/fuwode/hs spindle.png" alt="Spindle cross-section">
        <img src="/images/fuwode/A12B.jpg" alt="Assembly A12B">
        <img src="/images/fuwode/A4_BT40_belt.JPG" alt="A4 BT40">
      </div>
    </div>
    <div class="modal-content">
      <p class="modal-eyebrow">Mechanical Design · Fuwode Machinery Co., Ltd.</p>
      <h2 class="modal-title">High-Speed Motor Spindle</h2>
      <p class="modal-sub">Industrial CNC spindle series designed from client specifications — complete SolidWorks assemblies from concept through manufacturing-ready documentation.</p>
      <div class="modal-tags">
        <span class="tag">CAD</span><span class="tag">GD&amp;T</span><span class="tag">Thermal</span>
        <span class="tag">SolidWorks</span><span class="tag">Bearing Design</span><span class="tag">FEA</span>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-details cols-3">
        <div>
          <p class="modal-field-label">Client</p>
          <p class="modal-field-val">Fuwode Machinery Co., Ltd.<br>Industrial CNC Applications</p>
        </div>
        <div>
          <p class="modal-field-label">Scope</p>
          <div class="modal-field-val"><ul>
            <li>Bearing selection &amp; preload optimization</li>
            <li>Thermal management modeling</li>
            <li>Structural stiffness validation</li>
            <li>Full SolidWorks assembly</li>
          </ul></div>
        </div>
        <div>
          <p class="modal-field-label">Deliverables</p>
          <div class="modal-field-val"><ul>
            <li>Models: A12B, A4 BT40</li>
            <li>Manufacturing drawings</li>
            <li>Tolerance stack-up report</li>
            <li>GD&amp;T per ASME Y14.5</li>
          </ul></div>
        </div>
      </div>
      <div class="modal-highlight">
        <p class="modal-highlight-title">Engineering Highlights</p>
        <ul>
          <li>High-speed bearing preload optimization for radial rigidity under dynamic load</li>
          <li>Thermal expansion compensation strategy preventing loss of preload at operating temperature</li>
          <li>Interference fit validation with precision concentricity control (≤2 µm runout target)</li>
          <li>Stiffness-to-weight optimization for reduced vibration at high RPM</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- MODAL: Sewing Machine -->
<div class="modal-overlay" id="modal-sewing" onclick="closeModalOutside(event, 'modal-sewing')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-sewing')">✕</button></div>
    <div class="modal-img"><img src="/images/solidworks_sewing%20machine.png" alt="SolidWorks assembly" style="height:320px;object-fit:contain;width:100%;background:#fafafa;"></div>
    <div class="modal-content">
      <p class="modal-eyebrow">Mechanical Design · UBC Course Project</p>
      <h2 class="modal-title">Vintage Sewing Machine — SolidWorks Assembly</h2>
      <p class="modal-sub">Fully constrained parametric assembly of a vintage sewing machine, modeled from reference. Applied GD&amp;T standards and performed tolerance stack-up analysis across all critical linkages.</p>
      <div class="modal-tags">
        <span class="tag">CAD</span><span class="tag">GD&amp;T</span><span class="tag">SolidWorks</span>
        <span class="tag">Tolerance</span><span class="tag">Kinematics</span>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-details">
        <div>
          <p class="modal-field-label">Technical Scope</p>
          <div class="modal-field-val"><ul>
            <li>50+ components modeled from reference drawings</li>
            <li>Comprehensive tolerance stack-up analysis</li>
            <li>GD&amp;T applied per ASME Y14.5 on all mating surfaces</li>
            <li>Kinematic motion study validating linkage clearances</li>
          </ul></div>
        </div>
        <div>
          <p class="modal-field-label">Engineering Highlights</p>
          <div class="modal-field-val"><ul>
            <li>Functional mechanical linkages verified for motion accuracy</li>
            <li>Full assembly validated for manufacturing feasibility</li>
            <li>Geometric dimensioning ensuring correct functional clearances</li>
            <li>Drawing package with machining notes</li>
          </ul></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- MODAL: BLDC -->
<div class="modal-overlay" id="modal-bldc" onclick="closeModalOutside(event, 'modal-bldc')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-bldc')">✕</button></div>
    <div class="modal-img">
      <div class="modal-img-duo">
        <img src="/images/bldc_ubc_torque.png" alt="Torque analysis">
        <img src="/images/bldc_ubc_compare result vsi.png" alt="VSI comparison">
      </div>
    </div>
    <div class="modal-content">
      <p class="modal-eyebrow">Control &amp; Simulation · Electric Power and Energy Systems Group, UBC</p>
      <h2 class="modal-title">BLDC Motor Drive — MTPV Control Optimization</h2>
      <p class="modal-sub">Dynamic MATLAB/Simulink simulation of a BLDC motor drive using Average Value Models, with a Maximum Torque Per Voltage control strategy derived by mathematically formulating the optimal voltage lead angle.</p>
      <div class="modal-tags">
        <span class="tag">MATLAB</span><span class="tag">Simulink</span><span class="tag">Control</span>
        <span class="tag">Simulation</span><span class="tag">Motor Drive</span>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-details">
        <div>
          <p class="modal-field-label">Method</p>
          <div class="modal-field-val"><ul>
            <li>Average Value Model (AVM) for computational efficiency</li>
            <li>MTPV strategy derived from voltage constraint boundary</li>
            <li>Optimal voltage lead angle formulated analytically</li>
          </ul></div>
        </div>
        <div>
          <p class="modal-field-label">Engineering Highlights</p>
          <div class="modal-field-val"><ul>
            <li>Maximized high-speed torque output under voltage limits</li>
            <li>Reduced simulation computation time via AVM</li>
            <li>Control theory derivation validated against full model</li>
          </ul></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- MODAL: Warehouse -->
<div class="modal-overlay" id="modal-warehouse" onclick="closeModalOutside(event, 'modal-warehouse')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-warehouse')">✕</button></div>
    <div class="modal-img"><img src="/images/warehouse.png" alt="Warehouse system" style="height:300px;object-fit:contain;width:100%;background:#fafafa;"></div>
    <div class="modal-content">
      <p class="modal-eyebrow">Control &amp; Simulation · UBC Course Design</p>
      <h2 class="modal-title">Automated Warehouse Management System</h2>
      <p class="modal-sub">2D simulation platform for warehouse operations — configurable environment, robot fleet management, and automated task scheduling through an intuitive graphical interface.</p>
      <div class="modal-tags">
        <span class="tag">Python</span><span class="tag">Simulation</span><span class="tag">GUI</span><span class="tag">Robotics</span>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-details">
        <div>
          <p class="modal-field-label">Features</p>
          <div class="modal-field-val"><ul>
            <li>2D configurable warehouse environment</li>
            <li>Item inventory and robot fleet management</li>
            <li>Automated task queue and execution pipeline</li>
            <li>Graphical user interface for parameter control</li>
          </ul></div>
        </div>
        <div>
          <p class="modal-field-label">Stack</p>
          <div class="modal-field-val"><ul>
            <li>Python · GUI framework</li>
            <li>2D simulation engine</li>
            <li>Event-driven task scheduler</li>
          </ul></div>
        </div>
      </div>
      <a href="https://github.com/ZhaolinWei-Clark/Automated-Warehouse-Management-System" class="modal-link" target="_blank">GitHub Repository ↗</a>
    </div>
  </div>
</div>

<!-- MODAL: EM Tool -->
<div class="modal-overlay" id="modal-em" onclick="closeModalOutside(event, 'modal-em')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-em')">✕</button></div>
    <div class="modal-content" style="padding-top:36px;">
      <p class="modal-eyebrow">Control &amp; Simulation · Independent Project</p>
      <h2 class="modal-title">Electromagnetic Calculation Tool — DC PM Motors</h2>
      <p class="modal-sub">Python-based computational tool automating magnetic circuit analysis for DC permanent magnet motors, eliminating manual iteration cycles in early-stage design.</p>
      <div class="modal-tags">
        <span class="tag">Python</span><span class="tag">Simulation</span><span class="tag">Electromagnetics</span>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-details">
        <div>
          <p class="modal-field-label">Function</p>
          <div class="modal-field-val"><ul>
            <li>Automated magnetic flux path analysis</li>
            <li>Reluctance and MMF calculation pipeline</li>
            <li>Motor performance curve output for rapid comparison</li>
          </ul></div>
        </div>
        <div>
          <p class="modal-field-label">Impact</p>
          <div class="modal-field-val"><ul>
            <li>Eliminates manual iteration in preliminary motor design</li>
            <li>Reduces time-to-first-estimate significantly</li>
            <li>Structured for extension to multi-pole geometries</li>
          </ul></div>
        </div>
      </div>
      <a href="https://github.com/ZhaolinWei-Clark/Theoretical-calculation-of-permanent-magnet-motor-.git" class="modal-link" target="_blank">GitHub Repository ↗</a>
    </div>
  </div>
</div>

<!-- MODAL: S45C Shaft Failure Analysis -->
<div class="modal-overlay" id="modal-shaft" onclick="closeModalOutside(event, 'modal-shaft')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-shaft')">✕</button></div>
    <div class="modal-content" style="padding-top:36px;">
      <p class="modal-eyebrow">Failure Analysis · Fuwode Machinery Co., Ltd.</p>
      <h2 class="modal-title">S45C Motor Shaft Fatigue Failure Analysis</h2>
      <p class="modal-sub">Root-cause investigation of premature shaft failure in service. Identified rotational bending fatigue at a stress-concentrating shoulder, exacerbated by improper induction heat treatment.</p>
      <div class="modal-tags">
        <span class="tag">Fatigue</span><span class="tag">FEA</span><span class="tag">Heat Treatment</span>
        <span class="tag">CAD</span><span class="tag">Failure Analysis</span><span class="tag">S45C</span>
      </div>
      <div class="modal-divider"></div>
      <div class="failure-grid">
        <div class="failure-cell">
          <p class="failure-cell-label">Failure Mode</p>
          <p class="failure-cell-val">Rotational bending fatigue initiating at shaft shoulder (Ø53.5 → Ø52.5 mm transition). Classic beach marks visible on fracture surface.</p>
        </div>
        <div class="failure-cell">
          <p class="failure-cell-label">Material Condition</p>
          <p class="failure-cell-val">S45C steel — coarse grain structure, Widmanstätten microstructure indicating overheating (~880°C induction) and improper heat treatment.</p>
        </div>
        <div class="failure-cell">
          <p class="failure-cell-label">Root Cause</p>
          <p class="failure-cell-val">Stress concentration at fillet (R0.1) · Shallow hardened layer · Final semi-finish machining removed the treated surface layer.</p>
        </div>
        <div class="failure-cell">
          <p class="failure-cell-label">Sequence Issue</p>
          <p class="failure-cell-val">Incorrect process order — heat treatment applied before final machining, negating the hardened surface at the critical stress location.</p>
        </div>
      </div>
      <div class="modal-highlight" style="margin-top:24px;">
        <p class="modal-highlight-title">Corrective Recommendations</p>
        <ul>
          <li>Verify and increase fillet radius at shoulder transition (R0.1 → R ≥ 0.5 mm)</li>
          <li>Audit induction hardening parameters — reduce peak temperature to suppress grain growth</li>
          <li>Revise manufacturing sequence: Rough machine → Heat treat → Semi-finish machine (preserve hardened layer)</li>
          <li>Add hardness verification step post semi-finish to confirm case depth retention</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- MODAL: L-DED -->
<div class="modal-overlay" id="modal-lded" onclick="closeModalOutside(event, 'modal-lded')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-lded')">✕</button></div>
    <div class="modal-img"><img src="/images/additivie set up.jpeg" alt="L-DED setup" style="height:320px;object-fit:cover;width:100%;"></div>
    <div class="modal-content">
      <p class="modal-eyebrow">Research · UBC Graduate Thesis</p>
      <h2 class="modal-title">L-DED Closed-Loop Temperature Monitoring</h2>
      <p class="modal-sub">Graduate thesis investigating and implementing a closed-loop thermal control strategy for Laser-based Directed Energy Deposition, stabilizing melt pool temperature for consistent layer deposition.</p>
      <div class="modal-tags">
        <span class="tag">Control</span><span class="tag">Thermal</span><span class="tag">L-DED</span>
        <span class="tag">Additive Manufacturing</span><span class="tag">Research</span>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-details">
        <div>
          <p class="modal-field-label">Supervisors</p>
          <p class="modal-field-val">Ryozo Nagamune &amp; Xiaoliang Jin<br>CEL &amp; AMP Labs, UBC</p>
        </div>
        <div>
          <p class="modal-field-label">Contribution</p>
          <div class="modal-field-val"><ul>
            <li>Closed-loop thermal strategy for melt pool stabilization</li>
            <li>Real-time temperature feedback integration</li>
            <li>Reduction of thermal defects in deposited material</li>
            <li>System validated on L-DED experimental setup</li>
          </ul></div>
        </div>
      </div>
      <a href="https://zhaolinwei-clark.github.io/mypaper/thesis/UBC_Thesis_ZhaolinWei_8928347__improved.pdf" class="modal-link" target="_blank">Read Thesis ↗</a>
    </div>
  </div>
</div>

<!-- MODAL: AlohaMini -->
<div class="modal-overlay" id="modal-aloha" onclick="closeModalOutside(event, 'modal-aloha')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-aloha')">✕</button></div>
    <div class="modal-img"><img src="/images/Image_robot_in_progress1.png" alt="AlohaMini platform" style="height:340px;object-fit:cover;width:100%;"></div>
    <div class="modal-content">
      <p class="modal-eyebrow">Robotics Systems · In Progress</p>
      <h2 class="modal-title">Low-Cost Dual-Arm Mobile Robot — AlohaMini</h2>
      <p class="modal-sub">Building a low-cost teleoperated dual-arm mobile manipulator based on the open-source AlohaMini framework for validating imitation learning algorithms on household automation tasks.</p>
      <div class="modal-tags">
        <span class="tag">Robotics</span><span class="tag">Control</span><span class="tag">Python</span>
        <span class="tag">Imitation Learning</span><span class="tag">Hardware Integration</span>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-details">
        <div>
          <p class="modal-field-label">Scope</p>
          <div class="modal-field-val"><ul>
            <li>Full hardware assembly and integration</li>
            <li>Actuator control implementation</li>
            <li>Teleoperation interface development</li>
            <li>Data collection pipeline for IL algorithms</li>
          </ul></div>
        </div>
        <div>
          <p class="modal-field-label">Goal</p>
          <p class="modal-field-val">Validate imitation learning on household manipulation tasks using a reproducible, low-cost dual-arm platform. Targets ACT/Diffusion Policy benchmarks.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- MODAL: Surgical Tracking -->
<div class="modal-overlay" id="modal-surgical" onclick="closeModalOutside(event, 'modal-surgical')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-surgical')">✕</button></div>
    <div class="modal-img"><img src="/images/combined.png" alt="Surgical tracking" style="height:320px;object-fit:cover;width:100%;"></div>
    <div class="modal-content">
      <p class="modal-eyebrow">Robotics Systems · Academic Project</p>
      <h2 class="modal-title">3D Surgical Instrument &amp; Tissue Tracking</h2>
      <p class="modal-sub">Real-time stereo vision tracking system capturing 3D trajectories of surgical instruments and soft tissue, optimized for sub-pixel accuracy under rapid instrument movement.</p>
      <div class="modal-tags">
        <span class="tag">Python</span><span class="tag">OpenCV</span><span class="tag">Computer Vision</span>
        <span class="tag">Robotics</span><span class="tag">Stereo Vision</span>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-details">
        <div>
          <p class="modal-field-label">Method</p>
          <div class="modal-field-val"><ul>
            <li>Lucas-Kanade optical flow + Shi-Tomasi detection</li>
            <li>Optimized pyramid layer depth for rapid-motion robustness</li>
            <li>Stereo reconstruction for 3D trajectory output</li>
          </ul></div>
        </div>
        <div>
          <p class="modal-field-label">Results</p>
          <div class="modal-field-val"><ul>
            <li>Sub-pixel accuracy: &lt;0.8 px in 3D trajectory tracking</li>
            <li>15% reduction in tracking failures during rapid motion</li>
            <li>Real-time performance maintained on standard hardware</li>
          </ul></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- MODAL: Heater -->
<div class="modal-overlay" id="modal-heater" onclick="closeModalOutside(event, 'modal-heater')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-heater')">✕</button></div>
    <div class="modal-img">
      <div class="modal-img-duo">
        <img src="/images/Poster Assembly Picture.PNG" alt="Assembly">
        <img src="/images/Poster Explorsion Veiw.PNG" alt="Exploded view">
      </div>
    </div>
    <div class="modal-content">
      <p class="modal-eyebrow">Embedded Systems · Hardware Project</p>
      <h2 class="modal-title">Arduino Smart Cup Heater</h2>
      <p class="modal-sub">Arduino-controlled closed-loop cup heater with user-selectable setpoint (10–80°C), sensor offset calibration, and real-time LCD status feedback.</p>
      <div class="modal-tags">
        <span class="tag">Embedded</span><span class="tag">Arduino</span><span class="tag">Control</span>
        <span class="tag">Thermal</span><span class="tag">Sensor Calibration</span>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-details">
        <div>
          <p class="modal-field-label">Hardware</p>
          <div class="modal-field-val"><ul>
            <li>Arduino microcontroller</li>
            <li>NTC thermistor — calibrated against reference</li>
            <li>LCD display — real-time readout</li>
            <li>Button interface — setpoint adjustment</li>
          </ul></div>
        </div>
        <div>
          <p class="modal-field-label">Key Work</p>
          <div class="modal-field-val"><ul>
            <li>Sensor offset calibration vs actual water temperature</li>
            <li>Closed-loop PID control to user-defined setpoint</li>
            <li>On-device confirmation via LCD</li>
            <li>Mechanical enclosure integration</li>
          </ul></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- MODAL: HVAC -->
<div class="modal-overlay" id="modal-hvac" onclick="closeModalOutside(event, 'modal-hvac')">
  <div class="modal-box">
    <div class="modal-close"><button class="modal-close-btn" onclick="closeModal('modal-hvac')">✕</button></div>
    <div class="modal-img"><img src="/images/HVAC.png" alt="HVAC GUI" style="height:320px;object-fit:contain;width:100%;background:#fafafa;"></div>
    <div class="modal-content">
      <p class="modal-eyebrow">Embedded Systems · Intern Project · Sands China</p>
      <h2 class="modal-title">Autonomous HVAC Control System</h2>
      <p class="modal-sub">GUI-based autonomous HVAC automation system designed during internship at Sands China — dynamic component monitoring and real-time energy-optimized control.</p>
      <div class="modal-tags">
        <span class="tag">Embedded</span><span class="tag">GUI</span><span class="tag">Control</span>
        <span class="tag">Energy Optimization</span>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-details">
        <div>
          <p class="modal-field-label">Features</p>
          <div class="modal-field-val"><ul>
            <li>Interactive GUI for live HVAC monitoring</li>
            <li>Dynamic component control interface</li>
            <li>Real-time feedback loops for temperature regulation</li>
          </ul></div>
        </div>
        <div>
          <p class="modal-field-label">Outcome</p>
          <p class="modal-field-val">Autonomous system maintaining comfort setpoints while minimizing energy consumption across multiple HVAC zones in a commercial building context.</p>
        </div>
      </div>
      <a href="https://github.com/ZhaolinWei-Clark/Autonomous-HVAC-System" class="modal-link" target="_blank">GitHub Repository ↗</a>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     JAVASCRIPT
═══════════════════════════════════════════════════ -->
<script>
/* ── Category expand/collapse ── */
function toggleCat(id) {
  var sec  = document.getElementById(id);
  var body = document.getElementById(id + '-body');
  var isCollapsed = sec.classList.contains('collapsed');

  if (isCollapsed) {
    sec.classList.remove('collapsed');
    body.style.maxHeight = body.scrollHeight + 'px';
    /* After transition, free the height for content changes */
    body.addEventListener('transitionend', function onEnd() {
      body.style.maxHeight = 'none';
      body.removeEventListener('transitionend', onEnd);
    });
  } else {
    /* Fix height first so transition works */
    body.style.maxHeight = body.scrollHeight + 'px';
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        sec.classList.add('collapsed');
      });
    });
  }
}

/* Initialize max-heights */
document.querySelectorAll('.cat-body').forEach(function(b) {
  b.style.maxHeight = 'none';
});

/* ── Modal open/close ── */
function openModal(id) {
  var el = document.getElementById(id);
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  var el = document.getElementById(id);
  el.classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(function(m) {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

/* ── Tag filter ── */
var activeFilter = null;

document.querySelectorAll('.filter-tag').forEach(function(tag) {
  tag.addEventListener('click', function() {
    var filter = tag.dataset.filter;

    if (activeFilter === filter) {
      /* Clear filter */
      activeFilter = null;
      tag.classList.remove('active');
      document.querySelectorAll('.proj-card').forEach(function(c) {
        c.classList.remove('hidden');
      });
      return;
    }

    /* Set new filter */
    document.querySelectorAll('.filter-tag').forEach(function(t) { t.classList.remove('active'); });
    tag.classList.add('active');
    activeFilter = filter;

    document.querySelectorAll('.proj-card').forEach(function(card) {
      var tags = (card.dataset.tags || '').split(',').map(function(t) { return t.trim(); });
      if (tags.indexOf(filter) === -1) {
        card.classList.add('hidden');
      } else {
        card.classList.remove('hidden');
      }
    });

    /* Expand categories with visible cards */
    document.querySelectorAll('.cat-section').forEach(function(sec) {
      var hasVisible = Array.from(sec.querySelectorAll('.proj-card')).some(function(c) {
        return !c.classList.contains('hidden');
      });
      var body = sec.querySelector('.cat-body');
      if (hasVisible) {
        sec.classList.remove('collapsed');
        body.style.maxHeight = 'none';
      }
    });
  });
});

/* ── Active sidebar nav on scroll ── */
(function() {
  var cats = ['cat-mech','cat-ctrl','cat-fail','cat-robo','cat-emb'];
  var links = {};
  cats.forEach(function(id) {
    var a = document.querySelector('[data-cat="' + id + '"]');
    if (a) links[id] = a;
  });

  function updateActive() {
    var y = window.scrollY + 100;
    var active = cats[0];
    cats.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top + window.scrollY <= y) active = id;
    });
    Object.keys(links).forEach(function(id) {
      links[id].classList.toggle('active', id === active);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();
</script>
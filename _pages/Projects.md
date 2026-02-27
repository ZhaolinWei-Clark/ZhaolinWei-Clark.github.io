---
layout: splash
permalink: /projects/
title: "Projects"
---
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects — Engineering Portfolio</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --black:#0f0f0f;--near:#1c1c1e;--mid:#48484a;--muted:#8e8e93;--light:#aeaeb2;
  --border:#e5e5ea;--border-lt:#f2f2f7;--bg:#fff;--bg-off:#f9f9f9;
  --blue:#2563eb;--blue-lt:#eff6ff;--blue-dk:#1d4ed8;
  --red:#dc2626;--amber:#d97706;
  --shadow-xs:0 1px 3px rgba(0,0,0,.08);
  --shadow-sm:0 2px 8px rgba(0,0,0,.09);
  --shadow-md:0 6px 24px rgba(0,0,0,.11);
  --shadow-lg:0 16px 56px rgba(0,0,0,.16);
  --r:8px;--r-lg:12px;
  --font:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
}
html{scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--near);-webkit-font-smoothing:antialiased;overflow-x:hidden}

/* ── SHELL ── */
.shell{max-width:1540px;width:94%;margin:0 auto;padding-bottom:120px}

/* ── HERO ── */
.hero{padding:64px 0 52px;border-bottom:1px solid var(--border);text-align:center}
.hero-eyebrow{font-size:.6rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--blue);margin-bottom:14px}
.hero-h1{font-size:clamp(1.7rem,3.2vw,2.8rem);font-weight:600;color:var(--black);line-height:1.2;letter-spacing:-.025em;margin-bottom:10px}
.hero-h1 em{font-style:normal;color:var(--mid);font-weight:400}
.hero-sub{font-size:.78rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;font-weight:500}

/* ── BODY LAYOUT ── */
.body-grid{display:grid;grid-template-columns:1fr 200px;gap:0;align-items:start}

/* ── SIDEBAR ── */
.sidebar{position:sticky;top:0;height:100vh;overflow-y:auto;padding:40px 0 40px 28px;border-left:1px solid var(--border-lt);display:flex;flex-direction:column}
.sb-title{font-size:.56rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--light);margin-bottom:16px;padding-left:2px}
.sb-nav{list-style:none}
.sb-nav li{margin-bottom:2px}
.sb-nav a{display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:6px;font-size:.72rem;font-weight:500;color:var(--muted);text-decoration:none;cursor:pointer;white-space:nowrap;transition:background .13s,color .13s}
.sb-nav a .n{font-size:.56rem;font-weight:700;color:var(--border);min-width:14px;transition:color .13s}
.sb-nav a:hover{background:var(--bg-off);color:var(--near)}
.sb-nav a:hover .n{color:var(--light)}
.sb-nav a.active{background:var(--blue-lt);color:var(--blue);font-weight:600}
.sb-nav a.active .n{color:var(--blue);opacity:.55}
.sb-div{height:1px;background:var(--border-lt);margin:20px 0}
.sb-ftitle{font-size:.56rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--light);margin-bottom:10px;padding-left:2px}
.sb-filters{display:flex;flex-wrap:wrap;gap:5px}
.ftag{font-size:.6rem;font-weight:600;padding:3px 8px;border-radius:20px;background:var(--border-lt);color:var(--mid);cursor:pointer;border:1px solid transparent;transition:all .13s;user-select:none}
.ftag:hover{background:var(--blue-lt);color:var(--blue);border-color:#bfdbfe}
.ftag.on{background:var(--blue);color:#fff;border-color:var(--blue)}

/* ── MAIN ── */
.main{padding:40px 52px 0 0}

/* ── CATEGORY ── */
.cat{margin-bottom:56px}
.cat-hdr{display:flex;align-items:baseline;gap:12px;padding-bottom:16px;border-bottom:1.5px solid var(--border);margin-bottom:24px;cursor:pointer;user-select:none}
.cat-hdr:hover .cat-name{color:var(--blue)}
.cat-name{font-size:1.5rem;font-weight:600;color:var(--black);letter-spacing:-.018em;transition:color .13s}
.cat-cnt{font-size:.58rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--light);margin-left:auto}
.cat-chev{font-size:.75rem;color:var(--light);transition:transform .18s}
.cat.closed .cat-chev{transform:rotate(-90deg)}
.cat-body{overflow:hidden;transition:max-height .3s cubic-bezier(.4,0,.2,1)}
.cat.closed .cat-body{max-height:0!important}

/* ── CARD GRIDS ── */
.card-grid{display:grid;gap:20px}
.g2{grid-template-columns:repeat(2,1fr)}
.g3{grid-template-columns:repeat(3,1fr)}
/* Research: max 2 per row */
.g2-research{grid-template-columns:repeat(2,1fr)}

/* ── CARD ── */
.card{background:var(--bg);border:1px solid var(--border-lt);border-radius:var(--r);overflow:hidden;cursor:pointer;box-shadow:var(--shadow-xs);transition:transform .15s,box-shadow .15s,border-color .15s}
.card:hover{transform:translateY(-3px);box-shadow:var(--shadow-md);border-color:#d1d1d6}
.card.hidden{display:none}
.card-img{width:100%;aspect-ratio:16/9;overflow:hidden;background:var(--bg-off);position:relative}
.card-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .28s,opacity .18s}
.card:hover .card-img img{transform:scale(1.025);opacity:.93}
.card-img-split{display:grid;grid-template-columns:1fr 1fr;height:100%}
.card-img-split img{width:100%;height:100%;object-fit:cover;display:block}
.card-img-split img:first-child{border-right:1px solid var(--border-lt)}
.card-img-ph{width:100%;height:100%;background:#f5f5f7;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px}
.card-img-ph svg{opacity:.18}
.card-img-ph span{font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:var(--light)}
.card-body{padding:16px 18px 18px}
.card-title{font-size:.95rem;font-weight:600;color:var(--near);line-height:1.3;margin-bottom:5px}
.card-short{font-size:.78rem;color:var(--muted);line-height:1.55;margin-bottom:12px;text-align:justify;text-justify:inter-word}
.card-tags{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px}
.tag{font-size:.58rem;font-weight:600;padding:3px 8px;border-radius:20px;background:var(--border-lt);color:var(--mid);letter-spacing:.03em}
.card-btn{display:inline-flex;align-items:center;gap:5px;font-size:.68rem;font-weight:600;color:var(--blue);letter-spacing:.04em;text-transform:uppercase;background:none;border:none;cursor:pointer;font-family:var(--font);padding:0;transition:opacity .13s}
.card-btn:hover{opacity:.65}
.card-btn svg{transition:transform .13s}
.card-btn:hover svg{transform:translateX(2px)}

/* ── MODAL OVERLAY ── */
.pmodal-ov{position:fixed;inset:0;z-index:900;background:rgba(0,0,0,.5);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;pointer-events:none;transition:opacity .2s}
.pmodal-ov.open{opacity:1;pointer-events:all}
.pmodal-box{background:var(--bg);border-radius:var(--r-lg);max-width:860px;width:100%;max-height:92vh;overflow-y:auto;box-shadow:var(--shadow-lg);transform:scale(.96) translateY(10px);transition:transform .22s cubic-bezier(.34,1.56,.64,1)}
.pmodal-ov.open .pmodal-box{transform:scale(1) translateY(0)}
.pmodal-close-row{position:sticky;top:0;z-index:5;display:flex;justify-content:flex-end;padding:14px 16px 0;background:var(--bg)}
.pmodal-x{width:30px;height:30px;border-radius:50%;border:1px solid var(--border);background:var(--bg-off);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.85rem;color:var(--mid);transition:background .13s,color .13s}
.pmodal-x:hover{background:#fee2e2;color:#b91c1c;border-color:#fca5a5}

/* Modal image zones */
.pmodal-hero{position:relative;width:100%;overflow:hidden;background:var(--bg-off);cursor:zoom-in}
.pmodal-hero img{width:100%;max-height:400px;object-fit:cover;display:block;transition:opacity .15s}
.pmodal-hero:hover img{opacity:.9}
.pmodal-hero-split{display:grid;grid-template-columns:1fr 1fr;max-height:360px;overflow:hidden}
.pmodal-hero-split img{width:100%;height:280px;object-fit:cover;cursor:zoom-in;transition:opacity .15s}
.pmodal-hero-split img:hover{opacity:.85}
.pmodal-hero-triple{display:grid;grid-template-columns:1fr 1fr 1fr;max-height:300px;overflow:hidden;gap:2px}
.pmodal-hero-triple img{width:100%;height:220px;object-fit:cover;cursor:zoom-in;transition:opacity .15s}
.pmodal-hero-triple img:hover{opacity:.85}
/* Gallery strip: 2 images side by side for L-DED */
.pmodal-hero-duo{display:grid;grid-template-columns:1fr 1fr;gap:2px;max-height:340px;overflow:hidden;cursor:zoom-in}
.pmodal-hero-duo img{width:100%;height:280px;object-fit:cover;cursor:zoom-in;transition:opacity .15s}
.pmodal-hero-duo img:hover{opacity:.85}
.pmodal-zoom-hint{position:absolute;bottom:10px;right:12px;font-size:.58rem;color:#fff;background:rgba(0,0,0,.45);padding:3px 8px;border-radius:20px;letter-spacing:.06em;text-transform:uppercase;pointer-events:none}

/* Modal body */
.pmodal-body{padding:24px 32px 36px}
.pmodal-ey{font-size:.58rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--blue);margin-bottom:7px}
.pmodal-title{font-size:1.65rem;font-weight:600;color:var(--black);letter-spacing:-.02em;line-height:1.2;margin-bottom:6px}
.pmodal-sub{font-size:.85rem;color:var(--muted);line-height:1.7;margin-bottom:18px;text-align:justify;text-justify:inter-word}
.pmodal-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:22px}
.pmodal-tags .tag{font-size:.62rem;padding:4px 10px}
.pmdiv{height:1px;background:var(--border-lt);margin:20px 0}
.pm-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px 36px}
.pm-grid.g3{grid-template-columns:1fr 1fr 1fr}
.pm-label{font-size:.56rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--light);margin-bottom:6px}
.pm-val{font-size:.84rem;color:var(--mid);line-height:1.75;text-align:justify;text-justify:inter-word}
.pm-val ul{list-style:none;padding:0}
.pm-val ul li{padding-left:14px;position:relative;margin-bottom:3px;font-size:.82rem}
.pm-val ul li::before{content:"—";position:absolute;left:0;color:var(--border)}
.pm-callout{background:#f8faff;border:1px solid #dbeafe;border-radius:6px;padding:14px 18px;margin-top:18px}
.pm-callout-title{font-size:.56rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--blue);margin-bottom:8px}
.pm-callout ul{list-style:none;padding:0}
.pm-callout ul li{font-size:.81rem;color:var(--mid);padding-left:14px;position:relative;margin-bottom:4px;line-height:1.55}
.pm-callout ul li::before{content:"↗";position:absolute;left:0;color:var(--blue);font-size:.65rem;top:1px}
.pm-fail-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px 24px;margin-top:6px}
.pm-fail-cell{border-left:2px solid var(--border);padding-left:12px}
.pm-fail-label{font-size:.54rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--red);margin-bottom:4px}
.pm-fail-val{font-size:.81rem;color:var(--mid);line-height:1.7}
.pm-link{display:inline-flex;align-items:center;gap:5px;margin-top:16px;font-size:.7rem;font-weight:600;color:var(--blue);text-decoration:none;letter-spacing:.04em;text-transform:uppercase;border-bottom:1px solid #bfdbfe;padding-bottom:2px;transition:opacity .13s}
.pm-link:hover{opacity:.65}

/* ── LIGHTBOX ── */
.lb-ov{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .18s;cursor:zoom-out}
.lb-ov.open{opacity:1;pointer-events:all}
.lb-img{max-width:95vw;max-height:92vh;object-fit:contain;display:block;border-radius:4px;box-shadow:0 0 80px rgba(0,0,0,.6)}
.lb-close{position:fixed;top:18px;right:22px;font-size:1.4rem;color:#fff;cursor:pointer;opacity:.7;transition:opacity .13s;background:none;border:none}
.lb-close:hover{opacity:1}

/* ── BADGE ── */
.badge-wip{font-size:.58rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--amber);background:#fffbeb;border:1px solid #fde68a;border-radius:3px;padding:2px 7px;margin-left:8px;vertical-align:2px}

/* ── RESPONSIVE ── */
@media(max-width:1100px){
  .shell{width:96%}
  .main{padding-right:36px}
  .g3{grid-template-columns:1fr 1fr}
}
@media(max-width:860px){
  .body-grid{grid-template-columns:1fr}
  .sidebar{position:static;height:auto;border-left:none;border-top:1px solid var(--border-lt);padding:22px 0 0}
  .sb-nav{display:flex;flex-wrap:wrap;gap:4px 12px}
  .sb-nav li{margin:0}
  .sb-nav a{padding:5px 8px;border-radius:20px;font-size:.68rem}
  .main{padding:28px 0 0;order:-1}
  .g2,.g3,.g2-research{grid-template-columns:1fr}
  .pm-grid,.pm-grid.g3,.pm-fail-grid{grid-template-columns:1fr}
  .pmodal-body{padding:18px 20px 28px}
  .pmodal-title{font-size:1.3rem}
  .pmodal-hero-duo{grid-template-columns:1fr}
  .pmodal-hero-duo img{height:220px}
}
@media(max-width:540px){
  .shell{width:100%;padding:0 14px 80px}
  .hero{padding:44px 0 36px}
}

/* Fade-in */
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.cat{animation:fadeUp .35s ease both}
.cat:nth-child(1){animation-delay:.04s}
.cat:nth-child(2){animation-delay:.1s}
.cat:nth-child(3){animation-delay:.16s}
.cat:nth-child(4){animation-delay:.22s}
.cat:nth-child(5){animation-delay:.28s}
</style>
</head>
<body>
<div class="shell">

<!-- HERO -->
<header class="hero">
  <p class="hero-eyebrow">Engineering Portfolio · Zhaolin Wei</p>
  <h1 class="hero-h1">Mechanical CAD-driven engineering.<br><em>Precision assemblies · Control systems · Manufacturing-ready design.</em></h1>
  <p class="hero-sub">SolidWorks · MATLAB/Simulink · Python · OpenCV · Arduino · FEA</p>
</header>

<div class="body-grid">
<main class="main">
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
      <div class="card" data-tags="Motor,DFM,Manufacturing,Test,CAD" onclick="openModal('m-spindle')">
        <div class="card-img">
          <div class="card-img-split">
            <img src="/images/fuwode/hs spindle.png" alt="Spindle cross-section">
            <img src="/images/fuwode/A12B.jpg" alt="Spindle A12B">
          </div>
        </div>
        <div class="card-body">
          <p class="card-title">High-Speed Motor Spindle</p>
          <p class="card-short">Industrial CNC spindle design for Fuwode Machinery — full SolidWorks assembly, bearing selection, thermal management, and interference-fit validation.</p>
          <div class="card-tags"><span class="tag">Motor</span><span class="tag">DFM</span><span class="tag">Manufacturing</span><span class="tag">CAD</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

      <!-- S45C Shaft -->
      <div class="card" data-tags="Root Cause Analysis,Mechanical,Fatigue,FEA" onclick="openModal('m-shaft')">
        <div class="card-img">
          <div class="card-img-ph"><!-- INSERT IMAGE HERE -->
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>
            <span>Image Pending</span>
          </div>
        </div>
        <div class="card-body">
          <p class="card-title">S45C Motor Shaft Fatigue Failure Analysis</p>
          <p class="card-short">Root-cause investigation of industrial motor shaft fatigue crack — SEM fracture analysis, stress concentration evaluation, heat treatment audit and redesign recommendation.</p>
          <div class="card-tags"><span class="tag">Fatigue</span><span class="tag">FEA</span><span class="tag">Root Cause</span><span class="tag">Mechanical</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

      <!-- Sewing Machine -->
      <div class="card" data-tags="CAD,GDT,SolidWorks,Tolerance" onclick="openModal('m-sewing')">
        <div class="card-img">
          <img src="/images/solidworks_sewing%20machine.png" alt="SolidWorks sewing machine assembly">
        </div>
        <div class="card-body">
          <p class="card-title">Vintage Sewing Machine — Mechanism Design</p>
          <p class="card-short">50+ component parametric SolidWorks assembly — full GD&amp;T application, tolerance stack-up analysis, and kinematic motion study across complex mechanical linkages.</p>
          <div class="card-tags"><span class="tag">CAD</span><span class="tag">GD&amp;T</span><span class="tag">SolidWorks</span><span class="tag">Tolerance</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

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
      <div class="card" data-tags="Motor,Control,MATLAB,Simulation" onclick="openModal('m-bldc')">
        <div class="card-img">
          <div class="card-img-split">
            <img src="/images/bldc_ubc_torque.png" alt="BLDC torque">
            <img src="/images/bldc_ubc_compare result vsi.png" alt="BLDC VSI">
          </div>
        </div>
        <div class="card-body">
          <p class="card-title">BLDC Motor Drive — MTPV Control Optimization</p>
          <p class="card-short">Maximum Torque Per Voltage strategy with optimal voltage lead angle derivation. Simulink AVM simulation — Electric Power &amp; Energy Systems Group, UBC.</p>
          <div class="card-tags"><span class="tag">Motor</span><span class="tag">Control</span><span class="tag">MATLAB</span><span class="tag">Simulation</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

      <!-- HVAC -->
      <div class="card" data-tags="Python,Control,GUI" onclick="openModal('m-hvac')">
        <div class="card-img">
          <img src="/images/HVAC.png" alt="HVAC GUI">
        </div>
        <div class="card-body">
          <p class="card-title">Autonomous HVAC Control System</p>
          <p class="card-short">Internship project at Sands China — GUI-based autonomous HVAC automation with real-time feedback loops and energy consumption optimization across multiple zones.</p>
          <div class="card-tags"><span class="tag">Python</span><span class="tag">Control</span><span class="tag">GUI</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

      <!-- Warehouse -->
      <div class="card" data-tags="Python,Simulation,GUI,Robotics" onclick="openModal('m-warehouse')">
        <div class="card-img">
          <img src="/images/warehouse.png" alt="Warehouse management system">
        </div>
        <div class="card-body">
          <p class="card-title">Automated Warehouse Management System</p>
          <p class="card-short">2D simulation platform with configurable warehouse layout, robot fleet management, and automated task scheduling via graphical interface. UBC course design.</p>
          <div class="card-tags"><span class="tag">Python</span><span class="tag">Simulation</span><span class="tag">GUI</span><span class="tag">Robotics</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

      <!-- EM Tool (moved here from Embedded) -->
      <div class="card" data-tags="Motor,Electromagnetics,MATLAB,Python" onclick="openModal('m-em')">
        <div class="card-img">
          <div class="card-img-ph"><!-- INSERT IMAGE HERE -->
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>
            <span>Image Pending</span>
          </div>
        </div>
        <div class="card-body">
          <p class="card-title">Electromagnetic Calculation Tool — DC PM Motors</p>
          <p class="card-short">Python automation of magnetic circuit analysis for DC permanent magnet motors — eliminates manual iteration in preliminary design and outputs performance prediction curves.</p>
          <div class="card-tags"><span class="tag">Motor</span><span class="tag">Electromagnetics</span><span class="tag">MATLAB</span><span class="tag">Python</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

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
      <div class="card" data-tags="MATLAB,Control,Manufacturing,Additive" onclick="openModal('m-lded')">
        <div class="card-img">
          <img src="/images/additivie set up.jpeg" alt="L-DED experimental setup">
        </div>
        <div class="card-body">
          <p class="card-title">L-DED Closed-Loop Temperature Monitoring</p>
          <p class="card-short">Graduate thesis — real-time melt pool temperature stabilization for laser-based directed energy deposition. Closed-loop thermal control reducing deposition defects. CEL &amp; AMP Labs, UBC.</p>
          <div class="card-tags"><span class="tag">MATLAB</span><span class="tag">Control</span><span class="tag">Manufacturing</span><span class="tag">Additive</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

      <!-- Self-powered sensor -->
      <div class="card" data-tags="CAD,Sensor,Test,Wearable" onclick="openModal('m-sensor')">
        <div class="card-img">
          <img src="/images/fyp_um.png" alt="Self-powered flexible sensor">
        </div>
        <div class="card-body">
          <p class="card-title">Self-Powered Flexible Sensor System</p>
          <p class="card-short">Novel wearable self-powered electromechanical sensors for pulse and muscle signal detection — material synthesis through wearable device integration. Soft Sensors Lab.</p>
          <div class="card-tags"><span class="tag">CAD</span><span class="tag">Sensor</span><span class="tag">Test</span><span class="tag">Wearable</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

      <!-- Chatter -->
      <div class="card" data-tags="Manufacturing,CNC,Control,MATLAB" onclick="openModal('m-chatter')">
        <div class="card-img">
          <div class="card-img-ph"><!-- INSERT IMAGE HERE -->
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            <span>Image Pending</span>
          </div>
        </div>
        <div class="card-body">
          <p class="card-title">A17050 Slot Milling Chatter Stability &amp; Optimization</p>
          <p class="card-short">FRF modeling, Stability Lobe Diagram, critical depth calculation, lead-lag feed drive control, and trapezoidal trajectory planning for CNC aluminum slot milling.</p>
          <div class="card-tags"><span class="tag">Manufacturing</span><span class="tag">CNC</span><span class="tag">Control</span><span class="tag">MATLAB</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

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
      <div class="card" data-tags="CAD,3D Printing,Robotics,Control" onclick="openModal('m-aloha')">
        <div class="card-img">
          <img src="/images/Image_robot_in_progress1.png" alt="AlohaMini robot platform">
        </div>
        <div class="card-body">
          <p class="card-title">Low-Cost Dual-Arm Mobile Robot — AlohaMini <span class="badge-wip">In Progress</span></p>
          <p class="card-short">Open-source teleoperated dual-arm manipulator — hardware integration, actuator control implementation, and imitation learning data collection pipeline.</p>
          <div class="card-tags"><span class="tag">CAD</span><span class="tag">3D Printing</span><span class="tag">Robotics</span><span class="tag">Control</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

      <!-- Surgical -->
      <div class="card" data-tags="Python,Control,Robotics,OpenCV" onclick="openModal('m-surgical')">
        <div class="card-img">
          <img src="/images/combined.png" alt="Surgical instrument tracking">
        </div>
        <div class="card-body">
          <p class="card-title">3D Surgical Instrument &amp; Tissue Tracking</p>
          <p class="card-short">Real-time stereo vision tracking — Lucas-Kanade optical flow with Shi-Tomasi corner detection. Sub-pixel accuracy &lt;0.8 px · 15% fewer tracking failures during rapid motion.</p>
          <div class="card-tags"><span class="tag">Python</span><span class="tag">OpenCV</span><span class="tag">Robotics</span><span class="tag">Control</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

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
      <div class="card" data-tags="Embedded,Control,Test,Arduino" onclick="openModal('m-heater')">
        <div class="card-img">
          <div class="card-img-split">
            <img src="/images/Poster Assembly Picture.PNG" alt="Assembly view">
            <img src="/images/Poster Explorsion Veiw.PNG" alt="Exploded view">
          </div>
        </div>
        <div class="card-body">
          <p class="card-title">Arduino Smart Cup Heater</p>
          <p class="card-short">Closed-loop temperature control with calibrated NTC sensor, user-selectable 10–80°C setpoint via button interface, and real-time LCD feedback.</p>
          <div class="card-tags"><span class="tag">Embedded</span><span class="tag">Arduino</span><span class="tag">Control</span><span class="tag">Test</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

      <!-- Placeholder for future embedded project -->
      <div class="card" data-tags="Embedded,Python" onclick="openModal('m-emb2')">
        <div class="card-img">
          <div class="card-img-ph"><!-- INSERT IMAGE HERE -->
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
            <span>Image Pending</span>
          </div>
        </div>
        <div class="card-body">
          <p class="card-title">Embedded Sensor Interface — Coming Soon</p>
          <p class="card-short">Embedded firmware development project — sensor data acquisition and real-time processing on microcontroller platform.</p>
          <div class="card-tags"><span class="tag">Embedded</span><span class="tag">Python</span></div>
          <button class="card-btn">View Details <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>

    </div>
  </div>
</section>

</main>

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
<div class="pmodal-ov" id="m-spindle" onclick="closeOut(event,'m-spindle')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-spindle')">✕</button></div>
  <div class="pmodal-hero pmodal-hero-triple" onclick="lbOpen(['/images/fuwode/hs spindle.png','/images/fuwode/A12B.jpg','/images/fuwode/A4_BT40_belt.JPG'],0)">
    <img src="/images/fuwode/hs spindle.png" alt="Spindle cross-section">
    <img src="/images/fuwode/A12B.jpg" alt="A12B assembly">
    <img src="/images/fuwode/A4_BT40_belt.JPG" alt="A4 BT40">
    <span class="pmodal-zoom-hint">Click to enlarge</span>
  </div>
  <div class="pmodal-body">
    <p class="pmodal-ey">Mechanical Design · Fuwode Machinery Co., Ltd.</p>
    <h2 class="pmodal-title">High-Speed Motor Spindle</h2>
    <p class="pmodal-sub">Industrial CNC spindle series designed to client specifications — complete SolidWorks assemblies from concept through manufacturing-approved documentation, covering thermal, structural, and tolerance validation.</p>
    <div class="pmodal-tags"><span class="tag">Motor</span><span class="tag">DFM</span><span class="tag">Manufacturing</span><span class="tag">CAD</span><span class="tag">GD&amp;T</span><span class="tag">SolidWorks</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid g3">
      <div class="pm-field"><p class="pm-label">Client</p><p class="pm-val">Fuwode Machinery Co., Ltd.<br>Industrial CNC Applications</p></div>
      <div class="pm-field"><p class="pm-label">Scope</p><div class="pm-val"><ul>
        <li>Bearing selection &amp; preload optimization</li>
        <li>Thermal management modeling</li>
        <li>Interference-fit validation</li>
        <li>Structural stiffness verification</li>
      </ul></div></div>
      <div class="pm-field"><p class="pm-label">Deliverables</p><div class="pm-val"><ul>
        <li>A12B spindle full assembly</li>
        <li>A4 BT40 spindle assembly</li>
        <li>Tolerance stack-up report</li>
        <li>GD&amp;T per ASME Y14.5</li>
        <li>Approved for precision manufacture</li>
      </ul></div></div>
    </div>
    <div class="pm-callout">
      <p class="pm-callout-title">Engineering Highlights</p>
      <ul>
        <li>High-speed bearing preload optimization for radial stiffness under dynamic load</li>
        <li>Thermal expansion compensation preventing preload loss at operating temperature</li>
        <li>Interference-fit validated with precision concentricity control (≤2 µm runout target)</li>
        <li>Stiffness-to-weight optimization reducing vibration amplitude at high RPM</li>
      </ul>
    </div>
  </div>
</div></div>

<!-- S45C SHAFT -->
<div class="pmodal-ov" id="m-shaft" onclick="closeOut(event,'m-shaft')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-shaft')">✕</button></div>
  <div class="pmodal-body" style="padding-top:32px">
    <p class="pmodal-ey">Failure Analysis · Fuwode Machinery Co., Ltd.</p>
    <h2 class="pmodal-title">S45C Motor Shaft Fatigue Failure Analysis</h2>
    <p class="pmodal-sub">Root-cause investigation of premature shaft failure in service. Identified rotational bending fatigue at a stress-concentrating shoulder, exacerbated by improper induction hardening process sequence.</p>
    <div class="pmodal-tags"><span class="tag">Fatigue</span><span class="tag">FEA</span><span class="tag">Root Cause</span><span class="tag">Heat Treatment</span><span class="tag">S45C</span></div>
    <div class="pmdiv"></div>
    <div class="pm-fail-grid">
      <div class="pm-fail-cell"><p class="pm-fail-label">Failure Mode</p><p class="pm-fail-val">Rotational bending fatigue at shaft shoulder (Ø53.5 → Ø52.5 mm). Classic beach marks on fracture surface confirm progressive fatigue crack propagation.</p></div>
      <div class="pm-fail-cell"><p class="pm-fail-label">Material Condition</p><p class="pm-fail-val">S45C steel — coarse grain structure, Widmanstätten microstructure indicating overheating (~880°C) and improper induction heat treatment.</p></div>
      <div class="pm-fail-cell"><p class="pm-fail-label">Root Cause</p><p class="pm-fail-val">Stress concentration at fillet (R0.1) · Shallow hardened layer · Semi-finish machining removed the treated surface at the highest-stress section.</p></div>
      <div class="pm-fail-cell"><p class="pm-fail-label">Process Sequence Error</p><p class="pm-fail-val">Heat treatment applied before final machining — negating the hardened surface layer precisely at the critical stress concentration location.</p></div>
    </div>
    <div class="pm-callout" style="margin-top:22px">
      <p class="pm-callout-title">Corrective Recommendations</p>
      <ul>
        <li>Increase fillet radius at shoulder transition: R0.1 → R ≥ 0.5 mm</li>
        <li>Audit induction hardening parameters — reduce peak temperature to suppress grain coarsening</li>
        <li>Revise sequence: Rough machine → Heat treat → Semi-finish (preserve hardened layer)</li>
        <li>Add hardness verification step post semi-finish to confirm case depth retention</li>
      </ul>
    </div>
  </div>
</div></div>

<!-- SEWING MACHINE -->
<div class="pmodal-ov" id="m-sewing" onclick="closeOut(event,'m-sewing')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-sewing')">✕</button></div>
  <div class="pmodal-hero" onclick="lbOpen(['/images/solidworks_sewing%20machine.png'],0)">
    <img src="/images/solidworks_sewing%20machine.png" alt="SolidWorks sewing machine" style="max-height:360px;object-fit:contain;background:#fafafa">
    <span class="pmodal-zoom-hint">Click to enlarge</span>
  </div>
  <div class="pmodal-body">
    <p class="pmodal-ey">Mechanical Design · UBC Course Project</p>
    <h2 class="pmodal-title">Vintage Sewing Machine — Mechanism Design</h2>
    <p class="pmodal-sub">Fully constrained parametric assembly of a vintage sewing machine modeled from reference drawings. Applied GD&amp;T standards and performed tolerance stack-up analysis across all critical kinematic linkages.</p>
    <div class="pmodal-tags"><span class="tag">CAD</span><span class="tag">GD&amp;T</span><span class="tag">SolidWorks</span><span class="tag">Tolerance</span><span class="tag">Kinematics</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Technical Scope</p><div class="pm-val"><ul>
        <li>50+ components modeled from reference drawings</li>
        <li>Comprehensive tolerance stack-up analysis</li>
        <li>GD&amp;T applied per ASME Y14.5 on all mating surfaces</li>
        <li>Kinematic motion study validating linkage clearances</li>
      </ul></div></div>
      <div class="pm-field"><p class="pm-label">Engineering Highlights</p><div class="pm-val"><ul>
        <li>Fully constrained assembly with correct kinematic DOF</li>
        <li>All complex linkages verified for functional motion accuracy</li>
        <li>GD&amp;T ensuring correct functional clearances throughout</li>
        <li>Drawing package with machining and assembly notes</li>
      </ul></div></div>
    </div>
  </div>
</div></div>

<!-- BLDC -->
<div class="pmodal-ov" id="m-bldc" onclick="closeOut(event,'m-bldc')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-bldc')">✕</button></div>
  <div class="pmodal-hero" onclick="lbOpen(['/images/bldc_ubc_torque.png','/images/bldc_ubc_compare result vsi.png'],0)">
    <div class="pmodal-hero-split">
      <img src="/images/bldc_ubc_torque.png" alt="Torque analysis">
      <img src="/images/bldc_ubc_compare result vsi.png" alt="VSI comparison">
    </div>
    <span class="pmodal-zoom-hint">Click to enlarge</span>
  </div>
  <div class="pmodal-body">
    <p class="pmodal-ey">Control &amp; Simulation · Electric Power and Energy Systems Group, UBC</p>
    <h2 class="pmodal-title">BLDC Motor Drive — MTPV Control Optimization</h2>
    <p class="pmodal-sub">Dynamic MATLAB/Simulink simulation of a BLDC motor drive using Average Value Models (AVM), with a Maximum Torque Per Voltage control strategy derived by mathematically formulating the optimal voltage lead angle under voltage constraints.</p>
    <div class="pmodal-tags"><span class="tag">Motor</span><span class="tag">Control</span><span class="tag">MATLAB</span><span class="tag">Simulink</span><span class="tag">AVM</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Method</p><div class="pm-val"><ul>
        <li>Average Value Model (AVM) for computational efficiency</li>
        <li>MTPV strategy derived from voltage constraint boundary</li>
        <li>Optimal voltage lead angle formulated analytically</li>
      </ul></div></div>
      <div class="pm-field"><p class="pm-label">Results</p><div class="pm-val"><ul>
        <li>Maximized high-speed torque output under voltage limits</li>
        <li>Reduced simulation computation time via AVM</li>
        <li>Control theory validated against full-order model</li>
      </ul></div></div>
    </div>
    <a href="https://github.com/ZhaolinWei-Clark/BLDC_Motor_Drive_Modeling_Analysis" class="pm-link" target="_blank">GitHub Repository ↗</a>
  </div>
</div></div>

<!-- HVAC -->
<div class="pmodal-ov" id="m-hvac" onclick="closeOut(event,'m-hvac')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-hvac')">✕</button></div>
  <div class="pmodal-hero" onclick="lbOpen(['/images/HVAC.png'],0)">
    <img src="/images/HVAC.png" alt="HVAC GUI" style="max-height:340px;object-fit:contain;background:#fafafa">
    <span class="pmodal-zoom-hint">Click to enlarge</span>
  </div>
  <div class="pmodal-body">
    <p class="pmodal-ey">Control &amp; Simulation · Intern Project · Sands China</p>
    <h2 class="pmodal-title">Autonomous HVAC Control System</h2>
    <p class="pmodal-sub">GUI-based autonomous HVAC automation system designed during internship — interactive component monitoring, real-time closed-loop temperature control, and energy consumption optimization across multiple building zones.</p>
    <div class="pmodal-tags"><span class="tag">Python</span><span class="tag">Control</span><span class="tag">GUI</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Features</p><div class="pm-val"><ul>
        <li>Interactive GUI for live HVAC monitoring</li>
        <li>Dynamic component control interface</li>
        <li>Real-time feedback loops for temperature regulation</li>
        <li>Multi-zone energy optimization strategy</li>
      </ul></div></div>
      <div class="pm-field"><p class="pm-label">Outcome</p><p class="pm-val">Autonomous system maintaining comfort setpoints across commercial HVAC zones while minimizing energy consumption through real-time feedback-driven control.</p></div>
    </div>
    <a href="https://github.com/ZhaolinWei-Clark/Autonomous-HVAC-System" class="pm-link" target="_blank">GitHub Repository ↗</a>
  </div>
</div></div>

<!-- WAREHOUSE -->
<div class="pmodal-ov" id="m-warehouse" onclick="closeOut(event,'m-warehouse')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-warehouse')">✕</button></div>
  <div class="pmodal-hero" onclick="lbOpen(['/images/warehouse.png'],0)">
    <img src="/images/warehouse.png" alt="Warehouse system" style="max-height:320px;object-fit:contain;background:#fafafa">
    <span class="pmodal-zoom-hint">Click to enlarge</span>
  </div>
  <div class="pmodal-body">
    <p class="pmodal-ey">Control &amp; Simulation · UBC Course Design</p>
    <h2 class="pmodal-title">Automated Warehouse Management System</h2>
    <p class="pmodal-sub">2D simulation platform for warehouse operations — configurable environment parameters, item inventory management, robot fleet control, and automated task scheduling through an intuitive graphical interface.</p>
    <div class="pmodal-tags"><span class="tag">Python</span><span class="tag">Simulation</span><span class="tag">GUI</span><span class="tag">Robotics</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Features</p><div class="pm-val"><ul>
        <li>2D configurable warehouse environment</li>
        <li>Item inventory and robot fleet management</li>
        <li>Automated task queue and execution pipeline</li>
        <li>Graphical user interface for full parameter control</li>
      </ul></div></div>
      <div class="pm-field"><p class="pm-label">Stack</p><div class="pm-val"><ul>
        <li>Python · GUI framework</li>
        <li>2D simulation engine</li>
        <li>Event-driven task scheduler</li>
        <li>Robot path coordination logic</li>
      </ul></div></div>
    </div>
    <a href="https://github.com/ZhaolinWei-Clark/Automated-Warehouse-Management-System" class="pm-link" target="_blank">GitHub Repository ↗</a>
  </div>
</div></div>

<!-- EM TOOL -->
<div class="pmodal-ov" id="m-em" onclick="closeOut(event,'m-em')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-em')">✕</button></div>
  <div class="pmodal-body" style="padding-top:32px">
    <p class="pmodal-ey">Control &amp; Simulation · Independent Project</p>
    <h2 class="pmodal-title">Electromagnetic Calculation Tool — DC PM Motors</h2>
    <p class="pmodal-sub">Python-based computational tool automating magnetic circuit analysis for DC permanent magnet motors — eliminates manual iteration cycles in early-stage motor design and outputs performance prediction curves for rapid design comparison.</p>
    <div class="pmodal-tags"><span class="tag">Motor</span><span class="tag">Electromagnetics</span><span class="tag">MATLAB</span><span class="tag">Python</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Function</p><div class="pm-val"><ul>
        <li>Automated magnetic flux path analysis</li>
        <li>Reluctance and MMF calculation pipeline</li>
        <li>Performance curve output for rapid design comparison</li>
        <li>Multi-pole geometry extension support</li>
      </ul></div></div>
      <div class="pm-field"><p class="pm-label">Impact</p><div class="pm-val"><ul>
        <li>Eliminates manual iteration in preliminary motor design</li>
        <li>Reduces time-to-first-estimate significantly</li>
        <li>Structured for extension to complex motor topologies</li>
      </ul></div></div>
    </div>
    <a href="https://github.com/ZhaolinWei-Clark/Theoretical-calculation-of-permanent-magnet-motor-.git" class="pm-link" target="_blank">GitHub Repository ↗</a>
  </div>
</div></div>

<!-- L-DED (dual image gallery) -->
<div class="pmodal-ov" id="m-lded" onclick="closeOut(event,'m-lded')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-lded')">✕</button></div>
  <div class="pmodal-hero-duo">
    <img src="/images/additivie set up.jpeg" alt="L-DED experimental setup" onclick="lbOpen(['/images/additivie set up.jpeg','/images/contour_temperature.jpeg'],0)">
    <img src="/images/contour_temperature.jpeg" alt="Temperature contour map" onclick="lbOpen(['/images/additivie set up.jpeg','/images/contour_temperature.jpeg'],1)">
  </div>
  <div style="position:relative">
    <span class="pmodal-zoom-hint" style="position:absolute;top:-30px;right:12px">Click image to enlarge</span>
  </div>
  <div class="pmodal-body">
    <p class="pmodal-ey">Research · UBC Graduate Thesis</p>
    <h2 class="pmodal-title">L-DED Closed-Loop Temperature Monitoring</h2>
    <p class="pmodal-sub">Graduate thesis investigating closed-loop thermal control for Laser-based Directed Energy Deposition — real-time melt pool temperature stabilization to achieve consistent layer deposition and suppress thermal defects in additive manufactured parts.</p>
    <div class="pmodal-tags"><span class="tag">MATLAB</span><span class="tag">Control</span><span class="tag">Manufacturing</span><span class="tag">L-DED</span><span class="tag">Additive</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Supervisors</p><p class="pm-val">Ryozo Nagamune &amp; Xiaoliang Jin<br>CEL &amp; AMP Labs, UBC</p></div>
      <div class="pm-field"><p class="pm-label">Contribution</p><div class="pm-val"><ul>
        <li>Closed-loop thermal strategy for melt pool stabilization</li>
        <li>Real-time temperature feedback integration</li>
        <li>Reduction of thermal defects in deposited layers</li>
        <li>System validated on L-DED experimental platform</li>
      </ul></div></div>
    </div>
    <a href="https://zhaolinwei-clark.github.io/mypaper/thesis/UBC_Thesis_ZhaolinWei_8928347__improved.pdf" class="pm-link" target="_blank">Read Full Thesis ↗</a>
  </div>
</div></div>

<!-- SENSOR -->
<div class="pmodal-ov" id="m-sensor" onclick="closeOut(event,'m-sensor')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-sensor')">✕</button></div>
  <div class="pmodal-hero" onclick="lbOpen(['/images/fyp_um.png'],0)">
    <img src="/images/fyp_um.png" alt="Flexible sensor" style="max-height:360px;object-fit:contain;background:#fafafa">
    <span class="pmodal-zoom-hint">Click to enlarge</span>
  </div>
  <div class="pmodal-body">
    <p class="pmodal-ey">Research · Soft Sensors-Actuators-Robots Lab</p>
    <h2 class="pmodal-title">Self-Powered Flexible Sensor System</h2>
    <p class="pmodal-sub">Novel self-powered flexible electromechanical sensors for detecting subtle physiological signals — pulse and muscle movement detection for personal health monitoring. Full pipeline from material synthesis through wearable device integration.</p>
    <div class="pmodal-tags"><span class="tag">CAD</span><span class="tag">Sensor</span><span class="tag">Test</span><span class="tag">Wearable</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Supervisor</p><p class="pm-val">Junwen Zhong<br>Soft Sensors-Actuators-Robots Lab</p></div>
      <div class="pm-field"><p class="pm-label">Full Pipeline</p><p class="pm-val">Material synthesis → electromechanical characterization → signal detection validation → wearable device integration</p></div>
    </div>
    <a href="https://zhaolinwei-clark.github.io/mypaper/thesis/final-project-report.pdf" class="pm-link" target="_blank">Read Report ↗</a>
  </div>
</div></div>

<!-- CHATTER -->
<div class="pmodal-ov" id="m-chatter" onclick="closeOut(event,'m-chatter')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-chatter')">✕</button></div>
  <div class="pmodal-body" style="padding-top:32px">
    <p class="pmodal-ey">Research · CNC Machining Dynamics</p>
    <h2 class="pmodal-title">A17050 Slot Milling Chatter Stability &amp; Optimization</h2>
    <p class="pmodal-sub">Comprehensive chatter stability prediction and CNC machining optimization for A17050 aluminum alloy slot milling — FRF modeling, stability lobe diagram generation, and feed drive control design with trajectory planning.</p>
    <div class="pmodal-tags"><span class="tag">Manufacturing</span><span class="tag">CNC</span><span class="tag">Control</span><span class="tag">MATLAB</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Stability Analysis</p><div class="pm-val"><ul>
        <li>FRF (Frequency Response Function) modeling</li>
        <li>Stability Lobe Diagram (SLD) generation</li>
        <li>Critical axial depth of cut calculation</li>
        <li>Optimal spindle speed selection from SLD</li>
      </ul></div></div>
      <div class="pm-field"><p class="pm-label">Control &amp; Trajectory</p><div class="pm-val"><ul>
        <li>Lead-lag compensator design for feed drive system</li>
        <li>Trapezoidal velocity trajectory planning</li>
        <li>Tracking error minimization under cutting forces</li>
        <li>Stability margin verification for designed controller</li>
      </ul></div></div>
    </div>
  </div>
</div></div>

<!-- ALOHA -->
<div class="pmodal-ov" id="m-aloha" onclick="closeOut(event,'m-aloha')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-aloha')">✕</button></div>
  <div class="pmodal-hero" onclick="lbOpen(['/images/Image_robot_in_progress1.png'],0)">
    <img src="/images/Image_robot_in_progress1.png" alt="AlohaMini platform" style="max-height:380px;object-fit:cover">
    <span class="pmodal-zoom-hint">Click to enlarge</span>
  </div>
  <div class="pmodal-body">
    <p class="pmodal-ey">Robotics · In Progress</p>
    <h2 class="pmodal-title">Low-Cost Dual-Arm Mobile Robot — AlohaMini</h2>
    <p class="pmodal-sub">Building a low-cost teleoperated dual-arm mobile manipulator based on the open-source AlohaMini framework to validate imitation learning algorithms on household manipulation tasks using ACT/Diffusion Policy benchmarks.</p>
    <div class="pmodal-tags"><span class="tag">CAD</span><span class="tag">3D Printing</span><span class="tag">Robotics</span><span class="tag">Control</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Scope</p><div class="pm-val"><ul>
        <li>Full hardware assembly and system integration</li>
        <li>Actuator control firmware implementation</li>
        <li>Teleoperation interface development</li>
        <li>Data collection pipeline for imitation learning</li>
      </ul></div></div>
      <div class="pm-field"><p class="pm-label">Goal</p><p class="pm-val">Validate imitation learning on household manipulation tasks using ACT/Diffusion Policy on a reproducible low-cost dual-arm hardware platform.</p></div>
    </div>
  </div>
</div></div>

<!-- SURGICAL -->
<div class="pmodal-ov" id="m-surgical" onclick="closeOut(event,'m-surgical')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-surgical')">✕</button></div>
  <div class="pmodal-hero" onclick="lbOpen(['/images/combined.png'],0)">
    <img src="/images/combined.png" alt="Surgical tracking" style="max-height:360px;object-fit:cover">
    <span class="pmodal-zoom-hint">Click to enlarge</span>
  </div>
  <div class="pmodal-body">
    <p class="pmodal-ey">Robotics · Academic Project</p>
    <h2 class="pmodal-title">3D Surgical Instrument &amp; Tissue Tracking</h2>
    <p class="pmodal-sub">Real-time stereo vision system tracking 3D trajectories of surgical instruments and soft tissue — Lucas-Kanade optical flow combined with Shi-Tomasi corner detection, optimized for sub-pixel accuracy under rapid motion.</p>
    <div class="pmodal-tags"><span class="tag">Python</span><span class="tag">OpenCV</span><span class="tag">Robotics</span><span class="tag">Control</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Method</p><div class="pm-val"><ul>
        <li>Lucas-Kanade optical flow + Shi-Tomasi detection</li>
        <li>Optimized pyramid layers for rapid-motion robustness</li>
        <li>Stereo reconstruction for 3D trajectory output</li>
      </ul></div></div>
      <div class="pm-field"><p class="pm-label">Results</p><div class="pm-val"><ul>
        <li>Sub-pixel accuracy: &lt;0.8 px in 3D trajectory</li>
        <li>15% fewer tracking failures during rapid motion</li>
        <li>Real-time performance maintained on standard hardware</li>
      </ul></div></div>
    </div>
  </div>
</div></div>

<!-- HEATER -->
<div class="pmodal-ov" id="m-heater" onclick="closeOut(event,'m-heater')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-heater')">✕</button></div>
  <div class="pmodal-hero" onclick="lbOpen(['/images/Poster Assembly Picture.PNG','/images/Poster Explorsion Veiw.PNG'],0)">
    <div class="pmodal-hero-split">
      <img src="/images/Poster Assembly Picture.PNG" alt="Assembly view">
      <img src="/images/Poster Explorsion Veiw.PNG" alt="Exploded view">
    </div>
    <span class="pmodal-zoom-hint">Click to enlarge</span>
  </div>
  <div class="pmodal-body">
    <p class="pmodal-ey">Embedded Systems · Hardware Project</p>
    <h2 class="pmodal-title">Arduino Smart Cup Heater</h2>
    <p class="pmodal-sub">Arduino-controlled closed-loop cup heater with user-selectable 10–80°C setpoint via button interface, calibrated NTC thermistor sensor, and real-time LCD temperature feedback.</p>
    <div class="pmodal-tags"><span class="tag">Embedded</span><span class="tag">Arduino</span><span class="tag">Control</span><span class="tag">Test</span></div>
    <div class="pmdiv"></div>
    <div class="pm-grid">
      <div class="pm-field"><p class="pm-label">Hardware</p><div class="pm-val"><ul>
        <li>Arduino microcontroller</li>
        <li>NTC thermistor — calibrated vs water reference</li>
        <li>LCD display — real-time setpoint and temperature</li>
        <li>Button interface — setpoint increment/decrement</li>
      </ul></div></div>
      <div class="pm-field"><p class="pm-label">Key Engineering Work</p><div class="pm-val"><ul>
        <li>Sensor offset calibration vs actual water temperature</li>
        <li>Closed-loop control to user-defined setpoint</li>
        <li>Mechanical enclosure design and integration</li>
        <li>Safety cutoff at temperature limit</li>
      </ul></div></div>
    </div>
  </div>
</div></div>

<!-- EMB2 placeholder -->
<div class="pmodal-ov" id="m-emb2" onclick="closeOut(event,'m-emb2')"><div class="pmodal-box">
  <div class="pmodal-close-row"><button class="pmodal-x" onclick="closeM('m-emb2')">✕</button></div>
  <div class="pmodal-body" style="padding-top:32px">
    <p class="pmodal-ey">Embedded Systems · Coming Soon</p>
    <h2 class="pmodal-title">Embedded Sensor Interface</h2>
    <p class="pmodal-sub">Embedded firmware development for sensor data acquisition and real-time processing on microcontroller platform. Details to be added.</p>
    <div class="pmodal-tags"><span class="tag">Embedded</span><span class="tag">Python</span></div>
  </div>
</div></div>

<!-- LIGHTBOX -->
<div class="lb-ov" id="lightbox">
  <button class="lb-close" onclick="lbClose()">✕</button>
  <img id="lb-img" class="lb-img" src="" alt="">
</div>

<script>
/* ── Category toggle ── */
function toggleCat(id){
  var s=document.getElementById(id),b=document.getElementById(id+'-body');
  if(s.classList.contains('closed')){
    s.classList.remove('closed');
    b.style.maxHeight='none';
    var h=b.scrollHeight;b.style.maxHeight=h+'px';
    b.addEventListener('transitionend',function f(){b.style.maxHeight='none';b.removeEventListener('transitionend',f)});
  }else{
    b.style.maxHeight=b.scrollHeight+'px';
    requestAnimationFrame(function(){requestAnimationFrame(function(){s.classList.add('closed')})});
  }
}
document.querySelectorAll('.cat-body').forEach(function(b){b.style.maxHeight='none'});

/* ── Modal open/close ── */
function openModal(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden'}
function closeM(id){document.getElementById(id).classList.remove('open');document.body.style.overflow=''}
function closeOut(e,id){if(e.target===document.getElementById(id))closeM(id)}
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    document.querySelectorAll('.pmodal-ov.open').forEach(function(m){m.classList.remove('open')});
    lbClose();document.body.style.overflow='';
  }
});

/* ── Lightbox ── */
var _lbImgs=[],_lbIdx=0;
function lbOpen(imgs,idx){
  _lbImgs=imgs;_lbIdx=idx;
  document.getElementById('lb-img').src=imgs[idx];
  document.getElementById('lightbox').classList.add('open');
}
function lbClose(){document.getElementById('lightbox').classList.remove('open')}
document.getElementById('lightbox').addEventListener('click',function(e){
  if(e.target===this||e.target.classList.contains('lb-close'))lbClose();
});

/* ── Tag filter ── */
var activeF=null;
document.querySelectorAll('.ftag').forEach(function(t){
  t.addEventListener('click',function(){
    var f=t.dataset.f;
    if(activeF===f){
      activeF=null;t.classList.remove('on');
      document.querySelectorAll('.card').forEach(function(c){c.classList.remove('hidden')});
      return;
    }
    document.querySelectorAll('.ftag').forEach(function(x){x.classList.remove('on')});
    t.classList.add('on');activeF=f;
    document.querySelectorAll('.card').forEach(function(c){
      var tags=(c.dataset.tags||'').split(',').map(function(s){return s.trim()});
      c.classList.toggle('hidden',tags.indexOf(f)===-1);
    });
    document.querySelectorAll('.cat').forEach(function(sec){
      var vis=Array.from(sec.querySelectorAll('.card')).some(function(c){return !c.classList.contains('hidden')});
      var body=sec.querySelector('.cat-body');
      if(vis&&sec.classList.contains('closed')){sec.classList.remove('closed');body.style.maxHeight='none';}
    });
  });
});

/* ── Scroll spy ── */
(function(){
  var ids=['cat-mech','cat-ctrl','cat-res','cat-robo','cat-emb'];
  var links={};
  ids.forEach(function(id){var a=document.querySelector('[data-cat="'+id+'"]');if(a)links[id]=a});
  function tick(){
    var y=window.scrollY+110,active=ids[0];
    ids.forEach(function(id){
      var el=document.getElementById(id);
      if(el&&el.getBoundingClientRect().top+window.scrollY<=y)active=id;
    });
    Object.keys(links).forEach(function(id){links[id].classList.toggle('active',id===active)});
  }
  window.addEventListener('scroll',tick,{passive:true});tick();
})();
</script>
</body>
</html>
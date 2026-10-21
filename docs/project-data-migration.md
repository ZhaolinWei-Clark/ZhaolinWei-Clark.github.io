# Project content migration audit

Baseline: `ccf8b39`. All 14 project cards and 14 modal detail views were extracted before refactoring. Card summaries and longer detail introductions are intentionally distinct. Existing card/detail tag differences are retained; filter keys now also recognize every visible card tag. All media markup, reports, links, status labels, scope and result text are retained. Rich detail sections remain authored HTML in the data model during this incremental migration; a later phase can normalize sections without combining that change with a visual redesign.

### High-Speed Motor Spindle (`spindle`)

- Card title: High-Speed Motor Spindle
- Detail title: High-Speed Motor Spindle
- Card summary: Industrial CNC spindle design for Fuwode Machinery — full SolidWorks assembly, bearing selection, thermal management, and interference-fit validation.
- Detail introduction: Industrial CNC spindle series designed to client specifications — complete SolidWorks assemblies from concept through manufacturing-approved documentation, covering thermal, structural, and tolerance validation.
- Card tags: Motor, DFM, Manufacturing, CAD
- Detail tags: Motor, DFM, Manufacturing, CAD, GD&T, SolidWorks
- Original filter keys: Motor,DFM,Manufacturing,Test,CAD
- Filter keys after visible-tag reconciliation: Motor, DFM, Manufacturing, Test, CAD
- Images and links: /images/fuwode/hs spindle.png; /images/fuwode/A12B.jpg; /images/fuwode/A4_BT40_belt.JPG

### S45C Motor Shaft Fatigue Failure Analysis (`shaft`)

- Card title: S45C Motor Shaft Fatigue Failure Analysis
- Detail title: S45C Motor Shaft Fatigue Failure Analysis
- Card summary: Root-cause investigation of industrial motor shaft fatigue crack — SEM fracture analysis, stress concentration evaluation, heat treatment audit and redesign recommendation.
- Detail introduction: Root-cause investigation of premature shaft failure in service. Identified rotational bending fatigue at a stress-concentrating shoulder, exacerbated by improper induction hardening process sequence.
- Card tags: Fatigue, FEA, Root Cause, Mechanical
- Detail tags: Fatigue, FEA, Root Cause, Heat Treatment, S45C
- Original filter keys: Root Cause Analysis,Mechanical,Fatigue,FEA
- Filter keys after visible-tag reconciliation: Root Cause Analysis, Mechanical, Fatigue, FEA
- Images and links: /images/fuwode/Image_motor fracture.png; /images/fuwode/Image_fatigue.jpg

### Vintage Sewing Machine — Mechanism Design (`sewing`)

- Card title: Vintage Sewing Machine — Mechanism Design
- Detail title: Vintage Sewing Machine — Mechanism Design
- Card summary: 50+ component parametric SolidWorks assembly — full GD&T application, tolerance stack-up analysis, and kinematic motion study across complex mechanical linkages.
- Detail introduction: Fully constrained parametric assembly of a vintage sewing machine modeled from reference drawings. Applied GD&T standards and performed tolerance stack-up analysis across all critical kinematic linkages.
- Card tags: CAD, GD&T, SolidWorks, Tolerance
- Detail tags: CAD, GD&T, SolidWorks, Tolerance, Kinematics
- Original filter keys: CAD,GDT,SolidWorks,Tolerance
- Filter keys after visible-tag reconciliation: CAD, GDT, SolidWorks, Tolerance
- Images and links: /images/solidworks_sewing%20machine.png

### BLDC Motor Drive — MTPV Control Optimization (`bldc`)

- Card title: BLDC Motor Drive — MTPV Control Optimization
- Detail title: BLDC Motor Drive — MTPV Control Optimization
- Card summary: Maximum Torque Per Voltage strategy with optimal voltage lead angle derivation. Simulink AVM simulation — Electric Power & Energy Systems Group, UBC.
- Detail introduction: Dynamic MATLAB/Simulink simulation of a BLDC motor drive using Average Value Models (AVM), with a Maximum Torque Per Voltage control strategy derived by mathematically formulating the optimal voltage lead angle under voltage constraints.
- Card tags: Motor, Control, MATLAB, Simulation
- Detail tags: Motor, Control, MATLAB, Simulink, AVM
- Original filter keys: Motor,Control,MATLAB,Simulation
- Filter keys after visible-tag reconciliation: Motor, Control, MATLAB, Simulation
- Images and links: /images/bldc_ubc_torque.png; /images/bldc_ubc_compare result vsi.png; https://github.com/ZhaolinWei-Clark/BLDC_Motor_Drive_Modeling_Analysis

### Autonomous HVAC Control System (`hvac`)

- Card title: Autonomous HVAC Control System
- Detail title: Autonomous HVAC Control System
- Card summary: Internship project at Sands China — GUI-based autonomous HVAC automation with real-time feedback loops and energy consumption optimization across multiple zones.
- Detail introduction: GUI-based autonomous HVAC automation system designed during internship — interactive component monitoring, real-time closed-loop temperature control, and energy consumption optimization across multiple building zones.
- Card tags: Python, Control, GUI
- Detail tags: Python, Control, GUI
- Original filter keys: Python,Control,GUI
- Filter keys after visible-tag reconciliation: Python, Control, GUI
- Images and links: /images/HVAC.png; https://github.com/ZhaolinWei-Clark/Autonomous-HVAC-System

### Automated Warehouse Management System (`warehouse`)

- Card title: Automated Warehouse Management System
- Detail title: Automated Warehouse Management System
- Card summary: 2D simulation platform with configurable warehouse layout, robot fleet management, and automated task scheduling via graphical interface. UBC course design.
- Detail introduction: 2D simulation platform for warehouse operations — configurable environment parameters, item inventory management, robot fleet control, and automated task scheduling through an intuitive graphical interface.
- Card tags: Python, Simulation, GUI, Robotics
- Detail tags: Python, Simulation, GUI, Robotics
- Original filter keys: Python,Simulation,GUI,Robotics
- Filter keys after visible-tag reconciliation: Python, Simulation, GUI, Robotics
- Images and links: /images/warehouse.png; https://github.com/ZhaolinWei-Clark/Automated-Warehouse-Management-System

### Electromagnetic Calculation Tool — DC PM Motors (`em`)

- Card title: Electromagnetic Calculation Tool — DC PM Motors
- Detail title: Electromagnetic Calculation Tool — DC PM Motors
- Card summary: Python automation of magnetic circuit analysis for DC permanent magnet motors — eliminates manual iteration in preliminary design and outputs performance prediction curves.
- Detail introduction: Python-based computational tool automating magnetic circuit analysis for DC permanent magnet motors — eliminates manual iteration cycles in early-stage motor design and outputs performance prediction curves for rapid design comparison.
- Card tags: Motor, Electromagnetics, MATLAB, Python
- Detail tags: Motor, Electromagnetics, MATLAB, Python
- Original filter keys: Motor,Electromagnetics,MATLAB,Python
- Filter keys after visible-tag reconciliation: Motor, Electromagnetics, MATLAB, Python
- Images and links: https://github.com/ZhaolinWei-Clark/Theoretical-calculation-of-permanent-magnet-motor-.git

### L-DED Closed-Loop Temperature Monitoring (`lded`)

- Card title: L-DED Closed-Loop Temperature Monitoring
- Detail title: L-DED Closed-Loop Temperature Monitoring
- Card summary: Graduate thesis — real-time melt pool temperature stabilization for laser-based directed energy deposition. Closed-loop thermal control reducing deposition defects. CEL & AMP Labs, UBC.
- Detail introduction: Graduate thesis investigating closed-loop thermal control for Laser-based Directed Energy Deposition — real-time melt pool temperature stabilization to achieve consistent layer deposition and suppress thermal defects in additive manufactured parts.
- Card tags: MATLAB, Control, FEA, Manufacturing, Additive
- Detail tags: MATLAB, FEA, Control, Manufacturing, L-DED, Additive
- Original filter keys: MATLAB,Control,Manufacturing,Additive
- Filter keys after visible-tag reconciliation: MATLAB, Control, Manufacturing, Additive, FEA
- Images and links: /images/additivie set up.jpeg; /images/contour_temperature.jpeg; https://zhaolinwei-clark.github.io/mypaper/thesis/UBC_Thesis_ZhaolinWei_8928347__improved.pdf

### Self-Powered Flexible Sensor System (`sensor`)

- Card title: Self-Powered Flexible Sensor System
- Detail title: Self-Powered Flexible Sensor System
- Card summary: Novel wearable self-powered electromechanical sensors for pulse and muscle signal detection — material synthesis through wearable device integration. Soft Sensors Lab.
- Detail introduction: Novel self-powered flexible electromechanical sensors for detecting subtle physiological signals — pulse and muscle movement detection for personal health monitoring. Full pipeline from material synthesis through wearable device integration.
- Card tags: CAD, Sensor, Test, Wearable
- Detail tags: CAD, Sensor, Test, Wearable
- Original filter keys: CAD,Sensor,Test,Wearable
- Filter keys after visible-tag reconciliation: CAD, Sensor, Test, Wearable
- Images and links: /images/fyp_um.png; https://zhaolinwei-clark.github.io/mypaper/thesis/final-project-report.pdf

### A17050 Slot Milling Chatter Stability & Optimization (`chatter`)

- Card title: A17050 Slot Milling Chatter Stability & Optimization
- Detail title: A17050 Slot Milling Chatter Stability & Optimization
- Card summary: FRF modeling, Stability Lobe Diagram, critical depth calculation, lead-lag feed drive control, and trapezoidal trajectory planning for CNC aluminum slot milling.
- Detail introduction: Comprehensive chatter stability prediction and CNC machining optimization for A17050 aluminum alloy slot milling — FRF modeling, stability lobe diagram generation, and feed drive control design with trajectory planning.
- Card tags: Manufacturing, CNC, Control, MATLAB
- Detail tags: Manufacturing, CNC, Control, MATLAB
- Original filter keys: Manufacturing,CNC,Control,MATLAB
- Filter keys after visible-tag reconciliation: Manufacturing, CNC, Control, MATLAB
- Images and links: /images/chatter stability.png

### Low-Cost Dual-Arm Mobile Robot — AlohaMini (`aloha`)

- Card title: Low-Cost Dual-Arm Mobile Robot — AlohaMini In Progress
- Detail title: Low-Cost Dual-Arm Mobile Robot — AlohaMini
- Card summary: Open-source teleoperated dual-arm manipulator — hardware integration, actuator control implementation, and imitation learning data collection pipeline.
- Detail introduction: Building a low-cost teleoperated dual-arm mobile manipulator based on the open-source AlohaMini framework to validate imitation learning algorithms on household manipulation tasks using ACT/Diffusion Policy benchmarks.
- Card tags: CAD, 3D Printing, Robotics, Control
- Detail tags: CAD, 3D Printing, Robotics, Control
- Original filter keys: CAD,3D Printing,Robotics,Control
- Filter keys after visible-tag reconciliation: CAD, 3D Printing, Robotics, Control
- Images and links: /images/Image_robot_in_progress1.png

### 3D Surgical Instrument & Tissue Tracking (`surgical`)

- Card title: 3D Surgical Instrument & Tissue Tracking
- Detail title: 3D Surgical Instrument & Tissue Tracking
- Card summary: Real-time stereo vision tracking — Lucas-Kanade optical flow with Shi-Tomasi corner detection. Sub-pixel accuracy <0.8 px · 15% fewer tracking failures during rapid motion.
- Detail introduction: Real-time stereo vision system tracking 3D trajectories of surgical instruments and soft tissue — Lucas-Kanade optical flow combined with Shi-Tomasi corner detection, optimized for sub-pixel accuracy under rapid motion.
- Card tags: Python, OpenCV, Robotics, Control
- Detail tags: Python, OpenCV, Robotics, Control
- Original filter keys: Python,Control,Robotics,OpenCV
- Filter keys after visible-tag reconciliation: Python, Control, Robotics, OpenCV
- Images and links: /images/combined.png

### Arduino Smart Cup Heater (`heater`)

- Card title: Arduino Smart Cup Heater
- Detail title: Arduino Smart Cup Heater
- Card summary: Closed-loop temperature control with calibrated NTC sensor, user-selectable 10–80°C setpoint via button interface, and real-time LCD feedback.
- Detail introduction: Arduino-controlled closed-loop cup heater with user-selectable 10–80°C setpoint via button interface, calibrated NTC thermistor sensor, and real-time LCD temperature feedback.
- Card tags: Embedded, Arduino, Control, Test
- Detail tags: Embedded, Arduino, Control, Test
- Original filter keys: Embedded,Control,Test,Arduino
- Filter keys after visible-tag reconciliation: Embedded, Control, Test, Arduino
- Images and links: /images/Poster Assembly Picture.PNG; /images/Poster Explorsion Veiw.PNG

### Embedded Sensor Interface — Coming Soon (`emb2`)

- Card title: Embedded Sensor Interface — Coming Soon
- Detail title: Embedded Sensor Interface
- Card summary: Embedded firmware development project — sensor data acquisition and real-time processing on microcontroller platform.
- Detail introduction: Embedded firmware development for sensor data acquisition and real-time processing on microcontroller platform. Details to be added.
- Card tags: Embedded, Python
- Detail tags: Embedded, Python
- Original filter keys: Embedded,Python
- Filter keys after visible-tag reconciliation: Embedded, Python
- Images and links:

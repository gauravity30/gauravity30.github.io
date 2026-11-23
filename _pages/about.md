---
layout: default
title: About
permalink: /
---

<link rel="stylesheet" href="{{ '/assets/css/swift-about.css' | relative_url | bust_file_cache }}">

<div class="swift-about">
  <figure class="swift-scene" id="swift-scene">
    <div class="swift-scene__stage">
      {% include swift-scene.liquid %}
      <button class="swift-scene__toggle" type="button" aria-controls="swift-wake" hidden>Show the flow</button>
    </div>
    <figcaption class="swift-scene__caption">
      <strong id="swift-perspective" aria-live="polite">Observer</strong>
      <span class="swift-scene__observer-caption">A common swift glides with its wings held still.</span>
      <span id="swift-flow-credit" hidden>Spanwise vorticity (ω<sub>z</sub>) from my Common Swift simulation at Re<sub>c</sub> = 20,000.</span>
    </figcaption>
  </figure>

  <div class="swift-about__profile">
    <img class="swift-about__portrait" src="{{ '/assets/img/gaurav.png' | relative_url }}" width="256" height="256" alt="Portrait of Gaurav Gupta">
    <div class="swift-about__bio">
      <h1>Gaurav Gupta <span class="swift-about__name-hi" lang="hi">{{ site.last_name | escape }}</span></h1>
      <p class="swift-about__role">Scientist/Engineer at <a href="https://www.isro.gov.in/">ISRO</a></p>
      <p class="swift-about__summary">Fluid dynamicist specializing in computational studies of biological and bio-inspired flow problems. Primary experience encompasses investigating avian flight aerodynamics, modeling microgravity two-phase flows, and developing custom flow-solver and post-processing subroutines in Fortran and Python respectively. Currently working on capillary-driven flows and interfacial phenomena under microgravity at ISRO.</p>
    </div>
  </div>
  <p class="swift-about__interests"><strong>Research Interests:</strong> Biological fluid mechanics; animal locomotion; low-Reynolds number aerodynamics; vortex dynamics; fluid-structure interactions; turbulent and interfacial flows.</p>
  <nav class="swift-about__links" aria-label="More about Gaurav">
    <a href="{{ '/cv/' | relative_url }}">CV</a>
    <a href="{{ '/publications/' | relative_url }}">Publications</a>
    <a href="{{ '/notes/' | relative_url }}">Notes</a>
    <a href="mailto:gauravg.aero@gmail.com">Email</a>
  </nav>
</div>

<script defer src="{{ '/assets/js/swift-about.js' | relative_url | bust_file_cache }}"></script>

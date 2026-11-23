---
title: RANS and Turbulence Closure
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# RANS and Turbulence Closure
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Derive the closure problem

For incompressible flow with constant properties, write $u_i=\bar u_i+u_i'$ and average the momentum equation. The nonlinear product yields $\overline{u_i u_j}=\bar u_i\bar u_j+\overline{u'_i u'_j}$, adding the unknown Reynolds stress $-\rho\overline{u'_i u'_j}$. A linear eddy-viscosity model closes it as
$$
-\overline{u'_i u'_j}=2\nu_t\bar S_{ij}-\tfrac23 k\delta_{ij},\qquad
k=\tfrac12\overline{u'_i u'_i}.
$$
Compressible RANS commonly uses Favre averaging, $\widetilde u=\overline{\rho u}/\bar\rho$, to simplify the mean mass flux.

## Models and wall resolution

SA evolves a modified viscosity variable. $k$–$\varepsilon$ models evolve turbulent kinetic energy and its dissipation, with typical eddy-viscosity scaling $\nu_t\sim k^2/\varepsilon$. $k$–$\omega$ models evolve a specific dissipation rate, with scaling $\nu_t\sim k/\omega$. SST blends near-wall $k$–$\omega$ behavior with an outer formulation and limits eddy viscosity.

Compute $y^+=u_\tau y/\nu$ with $u_\tau=\sqrt{|\tau_w|/\rho}$. If $u_\tau=0.5\ \mathrm{m/s}$ and $\nu=1.5\times10^{-5}\ \mathrm{m^2/s}$, $y^+=1$ implies a first sampling height of $30\ \mu\mathrm m$. Choose the near-wall grid for the wall treatment specified by the model.

See [[Turbulence Modelling]], [[SA Model]], [[k-Epsilon]], [[k-OmegaSST]], and [[LES DNS and Hybrid Methods]].

## Course references

- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 10–11

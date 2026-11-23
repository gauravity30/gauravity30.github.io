---
title: LES DNS and Hybrid Methods
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# LES DNS and Hybrid Methods
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## What scales are resolved

DNS resolves the dynamically relevant scales down to the dissipation scale. For idealized high-Reynolds-number homogeneous turbulence, the Kolmogorov estimate $\eta/L\sim Re_L^{-3/4}$ implies roughly $Re_L^{9/4}$ grid points for an isotropic three-dimensional box, before accounting for time integration.

LES filters the flow field and resolves the larger eddies. For incompressible flow, the subgrid stress per unit density is $\tau_{ij}^{SGS}=\overline{u_i u_j}-\bar u_i\bar u_j$, with bars now denoting filtering. The Smagorinsky model uses $\nu_{SGS}=(C_s\Delta)^2|\bar S|$. At a fixed resolved strain, halving $\Delta$ gives one-quarter of this modeled viscosity. Grid quality, inflow turbulence, and scheme dissipation affect the resolved scales.

Hybrid methods such as DES couple RANS behavior in selected regions with LES-like behavior where the grid can support resolved eddies. Near-wall spacing and separated-region resolution both matter. See [[DES]], [[Filters]], [[Coherent Structures]], and [[RANS and Turbulence Closure]].

## Course references

- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 12

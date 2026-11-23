---
title: Convection Diffusion Schemes
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# Convection Diffusion Schemes
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Compare transport at a face

For constant properties and one-dimensional flow, define $F=\rho u A$ and $D=\Gamma A/h$. The face Peclet number $Pe=F/D$ compares convection with diffusion across one cell. For steady source-free transport with positive constant $F$, central interpolation gives neighbor coefficients $a_W=D+F/2$ and $a_E=D-F/2$. At $Pe>2$ the east coefficient is negative, which allows nonphysical oscillations.

Upwind interpolation takes the transported value from the upstream cell. For $u>0$, $\phi_e=\phi_P$ and $\phi_w=\phi_W$. The same balance gives $a_W=D+F$ and $a_E=D$. Positive coefficients help keep the scalar bounded in this model, with an accuracy cost from numerical diffusion.

## Worked choice

For $F=3$ and $D=1$, central interpolation gives $a_E=-0.5$, while upwind gives $a_E=1$. Refinement reduces cell $Pe$ by decreasing $h$. Hybrid and power-law schemes change the weighting with $Pe$. Higher-order reconstruction can reduce smearing in smooth regions, and limiters reduce reconstructed slopes near sharp changes.

The upstream direction follows from [[PDE Type and Characteristics]]. The same reasoning extends to multiple wave speeds in [[Compressible Fluxes and Shocks]]. See [[Finite Volume Flux Balance]] for where each face contribution enters.

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 9–11
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 5,7,9

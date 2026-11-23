---
title: Finite Volume Flux Balance
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# Finite Volume Flux Balance
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Integrate before approximating

For $\partial_t U+\nabla\cdot\mathbf F=S$, integrate over a stationary cell of volume $V_P$ and apply the divergence theorem.
$$
 V_P\frac{d\bar U_P}{dt}+\sum_{f\in\partial P} A_f\widehat F_f=V_P\bar S_P .
$$
$\widehat F_f$ approximates the outward normal flux averaged over face $f$. Compute a shared interior flux once and use opposite signs in the adjacent cells. The sum over the mesh then leaves only boundary fluxes and sources.

For scalar diffusion on an orthogonal mesh, the outward diffusive flux through a face shared with cell $N$ is approximately $-\Gamma_f A_f(\phi_N-\phi_P)/d_{PN}$. On a nonorthogonal mesh the center-to-center gradient and the face-normal gradient differ, so a correction may be needed.

## Worked balance

For adjacent volumes exchanging an outward flux of $3\ \mathrm{kg/s}$ from the first into the second, the respective contributions to their mass rates are $-3$ and $+3\ \mathrm{kg/s}$. The pair conserves mass regardless of how accurately the numerical flux estimates the actual flux.

[[Time Integration and Diffusion]] chooses the update in time. [[Convection Diffusion Schemes]] chooses scalar face values. [[Compressible Fluxes and Shocks]] chooses the numerical flux for coupled gas dynamics. See [[FVM]] for your SU2-side treatment.

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 3,5,9–11
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 9

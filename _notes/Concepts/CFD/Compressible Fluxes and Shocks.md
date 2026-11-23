---
title: Compressible Fluxes and Shocks
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# Compressible Fluxes and Shocks
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Wave structure and numerical flux

For the one-dimensional Euler equations,
$$
U=(\rho,\rho u,\rho E)^T,\qquad F(U)=(\rho u,\rho u^2+p,u(\rho E+p))^T.
$$
The characteristic speeds are $u-a$, $u$, and $u+a$. A numerical face flux uses reconstructed states $U_L,U_R$ and their wave speeds. One robust choice is the Rusanov flux:
$$
\widehat F=\tfrac12(F_L+F_R)-\tfrac12 s_{\max}(U_R-U_L),\qquad
s_{\max}=\max(|u_L|+a_L,|u_R|+a_R).
$$
The second term damps jumps and can noticeably smear a contact wave. Approximate Riemann solvers that represent the contact wave can resolve it more sharply.

## Shock speed and reconstruction

Balance a thin control volume moving at speed $s$ around a discontinuity to get $s[U]=[F]$, with brackets denoting right minus left. The physical shock also satisfies the entropy condition. Conservative discretization enforces the correct jump relation in a convergent weak solution. Use limited reconstruction near sharp gradients to control oscillations.

For $u=100\ \mathrm{m/s}$ and $a=340\ \mathrm{m/s}$, the eigenvalues are $-240$, $100$, and $440\ \mathrm{m/s}$. The negative wave informs subsonic boundary treatment in [[CFD Boundary Conditions]], and the fastest wave enters the explicit time-step estimate in [[Consistency Stability and Convergence]]. Try the shock tube in [[CFD Benchmark Problems]]. See [[One-dimensional Flow]] and [[Expansion Waves]] for related flow physics.

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 11–12
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 2,7,9–10

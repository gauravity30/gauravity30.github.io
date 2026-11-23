---
title: Pressure Velocity Coupling
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# Pressure Velocity Coupling
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Why pressure needs its own solve

At constant density, use momentum to obtain a provisional velocity $\mathbf u^*$ and correct it by a pressure increment $p'$:
$$
\mathbf u^{n+1}=\mathbf u^*-\frac{\Delta t}{\rho}\nabla p',\qquad
\nabla^2p'=\frac{\rho}{\Delta t}\nabla\cdot\mathbf u^*.
$$
The second equation follows by enforcing zero divergence after correction. The pressure boundary conditions follow from the velocity correction and prescribed boundary fluxes. A pure Neumann solve requires compatibility and a pressure reference.

## SIMPLE and grid arrangement

In SIMPLE, start with a guessed pressure, solve the discretized momentum equations, derive a pressure correction from the cell mass imbalance, and correct pressure and face fluxes. Repeat until momentum and continuity residuals and the quantities of interest have converged. The flux correction uses coefficients from the discretized momentum equation. The projection formula above illustrates the constraint.

Staggered grids place normal velocities on faces. Collocated arrangements can admit checkerboard pressure modes if face fluxes are formed by naive interpolation. Momentum-weighted face interpolation couples the face flux to the adjacent pressure difference.

See [[CFD Boundary Conditions]], [[Sparse Linear Systems in CFD]], and [[CFD Benchmark Problems]]. In [[Compressible Fluxes and Shocks]], pressure can be recovered from conserved variables and an equation of state.

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 11–12
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 2,10

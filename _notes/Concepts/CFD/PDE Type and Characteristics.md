---
title: PDE Type and Characteristics
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# PDE Type and Characteristics
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Determine how information travels

For $Au_{xx}+2Bu_{xy}+Cu_{yy}+\cdots=0$, the sign of $B^2-AC$ classifies the principal part locally. The sign is negative for elliptic, zero for parabolic, and positive for hyperbolic. This test is for scalar second-order PDEs in two variables. For first-order systems, examine the flux Jacobian and its characteristic fields.

| Model | Physical behavior | Data |
| --- | --- | --- |
| $\nabla^2u=f$ | Elliptic spatial coupling | Conditions around the domain, with a datum for pure Neumann problems and compatible fluxes |
| $u_t=\alpha u_{xx}$ | Diffusive smoothing | Initial state and spatial boundary data |
| $u_t+au_x=0$ | Transport at speed $a$ | Initial state and inflow data |

## Derive the characteristic

Along $x=x_0+at$, the chain rule gives $du/dt=u_t+au_x=0$. Thus $u(x,t)=u_0(x-at)$ wherever the characteristic reaches the initial line. If $a>0$ and it instead reaches the left boundary, the solution uses the imposed inflow value at that earlier time.

This gives the direction in [[Convection Diffusion Schemes]] and the incoming-wave rule in [[CFD Boundary Conditions]]. See [[PDE]] for the underlying classification and [[Pressure Velocity Coupling]] for an elliptic equation inside an unsteady flow calculation.

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 1
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 3,5

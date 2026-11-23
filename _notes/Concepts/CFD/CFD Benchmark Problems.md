---
title: CFD Benchmark Problems
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# CFD Benchmark Problems
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Turn each concept into a measurable test

| Case | What to compute | What it checks |
| --- | --- | --- |
| Periodic advection of $\sin(2\pi x/L)$ | Compare with the initial profile shifted by $at$, and record amplitude and phase errors | [[Finite Difference Stencils]] and [[Consistency Stability and Convergence]] |
| Diffusion of a periodic Fourier mode | Compare amplitude against $e^{-\alpha k^2t}$ | [[Time Integration and Diffusion]] |
| Fully developed plane Poiseuille flow | Compare velocity and wall shear with the analytical solution | [[CFD Boundary Conditions]] and [[Pressure Velocity Coupling]] |
| Sod shock tube | Compare density, velocity, and pressure with the exact Riemann solution | [[Compressible Fluxes and Shocks]] |
| Turbulent channel flow | Compare mean velocity in wall units and Reynolds stresses with matching reference data | [[RANS and Turbulence Closure]] and [[LES DNS and Hybrid Methods]] |

## Example setup and interpretation

For stationary plates at $y=0,H$, with constant $dp/dx$ and viscosity $\mu$, set $\mu u''=dp/dx$, $u(0)=u(H)=0$. Two integrations give $u(y)=-(dp/dx)y(H-y)/(2\mu)$. The mean speed is two-thirds of the centerline maximum. This checks diffusion and no-slip behavior. If the test is solved as a reduced one-dimensional momentum problem with imposed pressure gradient, add a driven cavity or another genuinely coupled flow to exercise pressure correction.

For a nondimensional Sod test with $\gamma=1.4$, take $(\rho,u,p)_L=(1,0,1)$ and $(\rho,u,p)_R=(0.125,0,0.1)$. A diaphragm at the domain midpoint generates a left rarefaction, a contact, and a right shock. Compare before waves reach the outer boundaries. Track contact smearing and shock position separately.

Record grid size, time step, residual tolerances, and monitored quantities with each run. Refine space and time independently where possible.

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 3–5,9–12
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 5–6,10,12

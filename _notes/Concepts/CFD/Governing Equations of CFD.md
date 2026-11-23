---
title: Governing Equations of CFD
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# Governing Equations of CFD
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Physical model

For a Newtonian fluid, conservation of mass, momentum, and total energy can be written in conservative form. Here $E=e+|\mathbf u|^2/2$ is total energy per unit mass, $\boldsymbol\tau$ is the viscous stress, and $\mathbf q=-k\nabla T$ is the conductive heat flux. Without body forces or volumetric heating,

$$
\begin{aligned}
\partial_t\rho+\nabla\cdot(\rho\mathbf u)&=0,\\
\partial_t(\rho\mathbf u)+\nabla\cdot(\rho\mathbf u\otimes\mathbf u+pI-\boldsymbol\tau)&=0,\\
\partial_t(\rho E)+\nabla\cdot[(\rho E+p)\mathbf u-\boldsymbol\tau\cdot\mathbf u+\mathbf q]&=0.
\end{aligned}
$$

Close the perfect-gas system with $p=(\gamma-1)\rho e$, a viscous stress law, and transport properties. Dropping viscous stress and conduction gives the Euler equations. For constant density, continuity gives $\nabla\cdot\mathbf u=0$, and pressure enforces this constraint through [[Pressure Velocity Coupling]].

## Scaling

Use length $L$, speed $U$, and a reference sound speed $a$. $Re=UL/\nu$ measures inertia relative to viscosity. $Ma=U/a$ measures flow speed relative to acoustic propagation. $Pr=\nu/\alpha$ compares momentum and thermal diffusion. With $\rho U^2$ as pressure scale, the constant-property viscous term in dimensionless momentum is weighted by $1/Re$. Low Mach number alone allows density changes from heating.

See [[Conservation Laws]], [[Dimensional Analysis]], and [[Compressible Flow]]. Conservative fluxes connect these laws directly to [[Finite Volume Flux Balance]] and to jump conditions in [[Compressible Fluxes and Shocks]].

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 1,11–12
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 1–2

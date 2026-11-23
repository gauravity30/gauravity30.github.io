---
title: CFD Boundary Conditions
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# CFD Boundary Conditions
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Convert physical data into face fluxes

For a stationary impermeable viscous wall, prescribe zero normal and tangential velocity. Thermal conditions can prescribe wall temperature or normal heat flux, including zero flux for an adiabatic wall. For an inviscid slip wall, set only normal velocity relative to the wall to zero in the Euler model.

For compressible Euler boundaries, count incoming characteristics relative to the outward normal. In one dimension the speeds are $u_n-a$, $u_n$, and $u_n+a$. At a subsonic outlet with $0<u_n<a$, one wave enters. An imposed static pressure is a common choice for the one external condition. At a supersonic outlet all three leave. At a subsonic inlet two enter, and at a supersonic inlet all three enter. Viscous conditions and multidimensional characteristic counting require the additional fields appropriate to the model.

## Worked diffusive boundary

On a uniform cell-centered mesh, the distance from the first cell center to a flat wall is $h/2$. For prescribed $\phi_b$, the outward diffusive flux is $-\Gamma A(\phi_b-\phi_P)/(h/2)$. With a prescribed normal flux, insert that flux directly into [[Finite Volume Flux Balance]]. Pressure and velocity boundary data must be compatible with [[Pressure Velocity Coupling]].

See [[PDE Type and Characteristics]], [[Boundary Layer]], and near-wall treatment in [[RANS and Turbulence Closure]].

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 3–5,11–12
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 3,8,10–11

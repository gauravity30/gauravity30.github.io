---
title: Conservation Laws
publish: true
category: Concepts/Aerodynamics
render_with_liquid: false
---

# Conservation Laws 
*Created on:* 2025-01-09  
*Tags:* #ConservationLaws
*Course:* [[Aerodynamics]]

---
## Fluid as a Continuum

- Fluids are aggregations of molecules. The distance between molecules is very large compared with the molecular distance in case of gas or liquid.
- The molecules move freely and hence, density or mass per unit volume is not fixed as the number of molecules occupying a given volume continually changes.
- This becomes unimportant if the volume is large as compared to the cube of the molecular spacing.
- The limiting volume below which molecular variations are important is $10^{-9}\,mm^3$.
- *A fluid is called a continuum, if the variation in properties is smooth and the differential calculus can be used.*

## Eulerian and Lagrangian Descriptions

- Eulerian method of description studies the flow over a selected region called control volume and its variation over the time. It is not focused on a particular particle. (God's view)
- Lagrangian method of description follows an individual particle moving through the flow.
- Fluid-dynamic measurements are suited to Eulerian descriptions.

## Flow Patterns

1. Streamline: A line everywhere tangent to the velocity vector at a given instant.
2. Pathline: Actual path traversed by a given fluid particle.
3. Streakline: The locus of particles which have earlier passed through a prescribed point.

Streamline, pathlines and streaklines are identical in steady flow.

## Reynolds Transport Theorem

To convert a system analysis to a control-volume analysis, we must our mathematics to apply to a specific region than to individual masses. This conversion is called Reynolds Transport Theorem.

$$
\frac{d}{dt}(B_{syst}) = \frac{d}{dt} \left( \int_{CV} \beta\, \rho \,dV \right) + \int_{CV} \beta \rho(V\cdot n)\,dA
$$
Where $\beta=\frac{dB}{dm}$

## Conservation of Mass

- $B=m$
- $\beta=\frac{dm}{dm}=1$

### Integral Form
$$
\left( \frac{dm}{dt} \right)_{syst} = 0 = \frac{d}{dt}\left( \int_{cv} \rho\,\,dV \right) + \int_{CV} \rho(V_{r}\cdot n)\,\,dA
$$
$$
\int_{CV} \frac{\partial{\rho}}{\partial t}dV + \int_{CS} \rho(\mathbf{V} \cdot \mathbf{n}) dA = 0
$$
### Differential Form

$$
\frac{\partial\rho}{\partial t} + \nabla \cdot (\rho V) = 0
$$
## The Linear Momentum Equation

- $B=mV$
- $\beta=\frac{dB}{dm}=V$

### Integral Form
$$
\frac{d}{dt}(mV)_{syst} = \sum F = \frac{d}{dt}\left( \int_{CV} V\rho dV \right) + \int_{CS} V\rho(V_{r}\cdot n)\,dA
$$
### Differential Form

$$
\rho \frac{DV}{Dt} = \rho g - \nabla p + \nabla \cdot \tau_{ij}
$$
Where $\frac{DV}{Dt}$ is the material derivative.

## Energy Equation

- $B=E$
- $\beta=\frac{dE}{dm}=e$

### Integral Form
$$
\frac{dQ}{dt} - \frac{dW}{dt} = \frac{dE}{dt} = \frac{d}{dt}\left( \int_{CV} e \rho\,dV \right) + \int_{CS} e\rho(V \cdot n)\,dA
$$
### Differential Form

$$
\rho \frac{D\hat{u}}{Dt} + p(\nabla \cdot V) = \nabla \cdot (k \nabla T) + \phi
$$
Where 
- $\hat{u}=\int c_{v}\,dT$
- $\phi$ is the viscous dissipation.
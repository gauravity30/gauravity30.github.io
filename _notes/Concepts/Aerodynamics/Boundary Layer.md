---
title: Boundary Layer
publish: true
category: Concepts/Aerodynamics
render_with_liquid: false
---

# Boundary Layer 
*Created on:* 2025-01-12  
*Tags:* #BLT
*Course:* [[Aerodynamics]]

---

## Flow around a Flat Plate

$$
\frac{\delta}{x} =
\left\{
\begin{array}{ll}
      \frac{5}{\mathrm{Re}_{x}^{1/2}} & \text{laminar} \\
     \frac{0.16}{\mathrm{Re}_{x}^{1/7}} & \text{turbulent} \\
\end{array} 
\right.
$$

The momentum thickness $\theta$ is given as 
$$
\theta = \int_{0}^{\delta} \frac{u}{U} \left( 1-\frac{u}{U} \right) dy
$$
It is the measure of total plate drag and the drag force on the plate is given as
$$
D(x) = \rho b U^2 \theta
$$
b is the width of the plate.

## Turbulent Boundary Layer

Three regions near the wall
1. Wall Layer: Viscous shear dominates.
2. Outer Layer: Turbulent shear dominates.
3. Overlap Layer: Both types of shear are important.

### Wall Layer

- $u$ is independent of the shear layer thickness.
- Governed by the Law of Wall.
- $u^+ = y^+$ where $u^+$ is the friction velocity.
- Extends till $y^+=5$.

### Outer Layer

- $u$ is independent of the molecular viscosity.
- Governed by the velocity defect law.

### Overlap Region

- The inner and outer region law have different forms and converge in the overlap region only if the velocity varies logarithmically.
- Known as Log law.




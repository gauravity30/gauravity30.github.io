---
title: Castigliano's Theorem
publish: true
category: Concepts/Mechanics of Solid
render_with_liquid: false
---

# Castigliano's Theorem 
*Created on:* 2025-01-31  
*Tags:* #CastiglianosTheorem
*Course:* [[MOS]]

---
## Definition

- Method to find deformation using strain energy method.
- Useful in cases of reactions of statically indeterminate structures.

It states that the displacement in the direction of the external force is given as
$$
\delta_{i} = \frac{\partial U}{\partial F_{i}}
$$

- U is the strain energy.
- Works only for elastic deformation with small displacements.


## Strain Energy

1. Axial Loading
$$
\delta = \frac{FL}{AE}
$$
Thus,
$$
U = \frac{F}{2} \delta = \frac{F^2L}{2AE} = \int \frac{F^2}{2AE}\,dx
$$

2. Direct Shear
$$
U = \int \frac{V^2}{2AG}\,dx
$$
3. Torsion
$$
U = \int \frac{T^2}{2JG}\,dx
$$
4.  Bending
$$
U = \int \frac{M^2}{2EI}\,dx
$$
5. Transverse Shear
$$
U = \int \frac{cV^2}{2AG}\,dx
$$
$c$ is the correction factor and based on the cross-section of the beam.


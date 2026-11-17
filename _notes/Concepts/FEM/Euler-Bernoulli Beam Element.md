---
title: Euler-Bernoulli Beam Element
publish: true
category: Concepts/FEM
render_with_liquid: false
---

# Euler-Bernoulli Beam Element  
*Created on:* 2024-12-03  
*Tags:* #eulerBernoulliBeamElement
*Course:* [[FEM]]

---
## Definition
*For any deformation to be continuous at any point $v$ and $\frac{d{v}}{d{x}}$ should also be continuous. Otherwise , gap or overlapping may occur.*

$$
v(x) = N_{1}v_{1} + N_{2}\theta_{1} + N_{3}v_{2} + N_{4}\theta_{2}
$$
Where,
$$
N_{1} = 1 - \frac{3x^2}{l^2} + \frac{2x^3}{l^3}
$$
$$
N_{2} = x - \frac{2x^2}{l} + \frac{x^3}{l^2}
$$
$$
N_{3} = \frac{3x^2}{l^2} - \frac{2x^3}{l^3}
$$
$$
N_{4} = -\frac{x^2}{l} + \frac{x^3}{l^2}
$$

$$
\{\varepsilon\} = \frac{du}{dx} = -y\,\frac{d^2u}{dx^2}
$$

$$
[k]^e = \int_{V} [B]^T\,[B]\,E\,dV
$$
$$
[k]^e = \frac{EI}{l^3}
\begin{bmatrix}
12 & 6l & -12 & 6l\\
6l & 4l^2 & -6l & 2l^2\\
-12 & -6l & 12 & -6l \\
6l & 2l^2 & -6l & 4l^2
\end{bmatrix}
$$

*Elemental nodal force vectors includes nodal moments.* 
- Consistent Force Vector : Includes both forces and moments
- Lumped Force Vector : Includes only forces, reduces the computational time in case of dynamics. 
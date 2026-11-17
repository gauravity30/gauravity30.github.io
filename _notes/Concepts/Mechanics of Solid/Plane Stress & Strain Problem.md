---
title: Plane Stress & Strain Problem
publish: true
category: Concepts/Mechanics of Solid
render_with_liquid: false
---

# Plane Stress & Strain Problem 
*Created on:* 2025-01-30  
*Tags:* #PlaneStress #PlaneStrain 
*Course:* [[MOS]]

---
## Plane Stress

- The plane stress problem shows that $\sigma_{x}$  and $\sigma_{y}$ may exist.
- A normal strain $\varepsilon_{z}$ will develop in plane stress problem.
- The plane stress approximation works well for problems where the thickness in z-direction is negligible.
$$
\begin{pmatrix}
\sigma_{x} & \tau & 0 \\
\tau & \sigma_{y} & 0 \\
0 & 0 & 0\\
\end{pmatrix}
$$
$$
\begin{pmatrix}
\varepsilon_{x} & \frac{\gamma}{2} & 0 \\
\frac{\gamma}{2} & \varepsilon_{y} & 0 \\
0 & 0 & \varepsilon_{z}\\
\end{pmatrix}
$$

## Plane Strain

- The plane strain problem shows that normal strain $\varepsilon_{z}$ is zero.
- The normal stress $\sigma_{z}$ should not be zero.
- The plane strain approximation works well for problem where the thickness in z-direction is finite i.e. not too small and too big.
$$
\begin{pmatrix}
\sigma_{x} & \tau & 0 \\
\tau & \sigma_{y} & 0 \\
0 & 0 & \sigma_{z}\\
\end{pmatrix}
$$
$$
\begin{pmatrix}
\varepsilon_{x} & \frac{\gamma}{2} & 0 \\
\frac{\gamma}{2} & \varepsilon_{y} & 0 \\
0 & 0 & 0\\
\end{pmatrix}
$$
## Relationship between $G, E$ and $\nu$

- A pure shear stress at a point can be alternatively represented by the normal stresses at $45^{\circ}$ with the directions of the shear stresses.
$$
\sigma_{1} = -\sigma_{2} = \tau
$$
- The normal strain $\varepsilon_{45^{\circ}}$ is given as
$$
\varepsilon_{45^{\circ}} = \frac{\tau}{2G}
$$
- Now, 
$$
\varepsilon_{45^{\circ}} = \frac{\sigma_{1}}{E} - \nu \frac{ \sigma_{2}}{E} = \frac{\tau}{E} (1+\nu)
$$
- Then,
$$
G = \frac{E}{2(1+\nu)}
$$

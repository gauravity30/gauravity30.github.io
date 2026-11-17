---
title: Hooke's Law
publish: true
category: Concepts/Mechanics of Solid
render_with_liquid: false
---

# Hooke's Law 
*Created on:* 2025-01-30  
*Tags:* #HookesLaw
*Course:* [[MOS]]

---
## Definition

- The relationship between stress and strain may be said to be linear for all materials up to the proportional limit of the material.
$$
\sigma = E \varepsilon
$$
- $E$ is known as elastic modulus or Young's modulus and a definite property of a material.
$$
\tau = G \gamma
$$
- The above relation is the extension of Hooke's law for shear stress and shear strain.
- The constant of proportionality G is called the shear modulus of elasticity. It is a definite property of a material.

## Mathematical Definition of Strain

- The normal strain can be written as
$$
\varepsilon_{x} = \lim_{ \Delta x \to 0 }  \frac{\Delta u}{\Delta x} = \frac{du}{dx}
$$
- This can be extended to get
$$
\varepsilon_{xx} = \frac{\partial u}{\partial x},\,\,\,\varepsilon_{yy}=\frac{\partial v}{\partial y},\,\,\,\varepsilon_{yy}=\frac{\partial w}{\partial z}
$$
- The shear strain can be written as
$$
\tau_{xy}=\frac{\partial v}{\partial x} + \frac{\partial u}{\partial y},\,\,\,\tau_{yz}=\frac{\partial v}{\partial z} + \frac{\partial w}{\partial y},\,\,\,\tau_{xz}=\frac{\partial w}{\partial x} + \frac{\partial u}{\partial z}
$$
- These together express the strain tensor which is analogous to the stress tensor.
- The shear strains are expressed as 
$$
\varepsilon_{xy} = \varepsilon_{yx} = \frac{\gamma_{xy}}{2}
$$
- This leads to the strain tensor
$$
\varepsilon = \begin{pmatrix}
\varepsilon_{xx} & \varepsilon_{xy} & \varepsilon_{xz} \\
\varepsilon_{yx} & \varepsilon_{yy} & \varepsilon_{yz} \\
\varepsilon_{zx} & \varepsilon_{zy} & \varepsilon_{zz} \\
\end{pmatrix}
$$

## Generalized Hooke's Law

- Applicable to homogenous isotropic materials only.
- For isotropic materials, only two independent material properties are required.
- The six relations in cartesian coordinates are
$$
\begin{gathered}
\varepsilon_{x} = \frac{\sigma_{x}}{E} - \nu\frac{\sigma_{y}}{E} - \nu\frac{\sigma_{z}}{E}\\
\varepsilon_{y} = -\nu\frac{\sigma_{x}}{E} + \frac{ \sigma_{y}}{E} - \nu\frac{\sigma_{z}}{E}\\
\varepsilon_{z} = -\nu \frac{\sigma_{x}}{E} - \nu \frac{ \sigma_{y}}{E} + \frac{\sigma_{z}}{E}\\
\gamma_{xy} = \frac{\tau_{xy}}{G}\\
\gamma_{yz} = \frac{\tau_{yz}}{G}\\
\gamma_{xz} = \frac{\tau_{xz}}{G}
\end{gathered}
$$
---
title: Bending
publish: true
category: Concepts/Aircraft Structures
render_with_liquid: false
---

# Bending 
*Created on:* 2025-02-03  
*Tags:* #Bending
*Course:* [[Aircraft Structures]]

---
## Definition

- Open section & closed section beams.
- Both types subjected to axial, bending, shear and torsional loads.
## Asymmetric Bending

- Asymmetric Bending: Bending moment doesn't act in the plane of symmetry.
- Neutral axis passes through the centroid of the cross-section.
$$
\sigma_{z} = \frac{E\xi}{\rho} = \frac{E}{\rho}(x\sin \alpha+y\cos \alpha)
$$
- Where 
	- $\rho$ is the radius of curvature. 
	- $\xi$ is perpendicular distance between point of application of stress and neutral axis.
- The moments are given as
$$
M_{x} = \int_{A} \sigma_{z}\,y\,dA;\,\,\,\,M_{y} = \int_{A} \sigma_{z}\,x\,dA
$$
- Substituting for $\sigma_{z}$,
$$
M_{x} = \frac{E\sin \alpha}{\rho} I_{xy} + \frac{E\cos \alpha}{\rho} I_{xx}
$$
$$
M_{y} = \frac{E\sin \alpha}{\rho} I_{yy} + \frac{E\cos \alpha}{\rho} I_{xy}
$$
- In matrix form
$$
\begin{Bmatrix}
M_{x}\\
M_{y}
\end{Bmatrix} = \frac{E}{\rho}
\begin{bmatrix}
I_{xy} & I_{xx} \\
I_{yy} & I_{xy}
\end{bmatrix}
\begin{Bmatrix}
\sin \alpha\\
\cos \alpha
\end{Bmatrix}
$$ ![[Pasted image 20250203213833.png]]

- The value of $\sin \alpha$ and $\cos \alpha$ can be found in terms of the moments from the above matrix equation.
$$
\frac{E}{\rho}
\begin{Bmatrix}
\sin \alpha\\
\cos \alpha
\end{Bmatrix} = \frac{1}{I_{xx}I_{yy}-I_{xy}^2}
\begin{bmatrix}
-I_{xy} & I_{xx} \\
I_{yy} & -I_{xy}
\end{bmatrix}
\begin{Bmatrix}
M_{x}\\
M_{y}
\end{Bmatrix}
$$
- This can be substituted in the equation for $\sigma_{z}$
$$
\sigma_{z} = \frac{M_{x}(I_{yy}y-I_{xy}x)}{I_{xx}I_{yy}-I_{xy}^2} + \frac{M_{y}(I_{xx}x-I_{xy}y)}{I_{xx}I_{yy}-I_{xy}^2}
$$
- If $C_{x}$ and $C_{y}$ is an axis of symmetry, $I_{xy} =0$, then
$$
\sigma_{z} = \frac{M_{x}}{I_{xx}}y + \frac{M_{y}}{I_{yy}}x
$$
- The deflections are related to moments through the equations
$$
\begin{gathered}
M_{x} = -EI_{xy}u'' - EI_{xx}v''\\
M_{y} = -EI_{yy}u'' - EI_{xy}v''\\
\end{gathered}
$$
- The deflections can be found by integrating the $u''$ and $v''$ respectively.


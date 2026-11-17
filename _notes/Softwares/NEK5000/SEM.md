---
title: SEM
publish: true
category: Softwares/NEK5000
render_with_liquid: false
---

# Spectral Element Method 
*Created on:* 2025-01-17  
*Tags:* #SEM
*Course:* [[NEK5000]]

---
## FEM

- Finite Element Method involves a mesh with range of cell sizes dependent on problems.
- It is computationally inexpensive as compared to FDM due to the use of Cartesian Mesh.
- Although, meshing is a science in itself.

## 1D Wave Equation

$$
\rho(x) \ddot{u}(x,t) - \partial_{x}[\mu(x)\partial_{x}u(x,t)] = f(x,t)
$$
1. $\partial_{x}u(x,t) = 0$ at $x=0,L$
2. $u(x,0)=\dot{u}(x,0)=0$

Compact Subset: A generalization of a space being closed.

## Weak Form of the 1D Wave Equation

$$
\int_{G} w \rho \ddot{u}\,dx - \int_{G} w \partial_{x}[\mu\partial_{x}u]\,dx = \int_{G}w f\,dx
$$
Where $w$ is the test function.

Applying integration by part to the above equation, we get
$$
\int_{G} w \rho \ddot{u}\,dx + \int_{G}\mu\partial_{x}w\,\partial_{x}u\,dx = \int_{G}w f\,dx
$$
The essential boundary condition is already satisfied by the weak form.

## Galerkin Projection

We will approximate $u(x,t)$ by a finite superposition of $n$ basis functions $\psi_{i}$.
$$
\bar{u}(x,t) = \sum_{i=1}^n U_{i} \psi_{i}(x) \approx u(x,t)
$$
## Finite Element Form

Replacing the approximate value in the weak form

$$
\sum_{i=1}^n \left[ \ddot{U}_{i}(t)\int_{G}\rho \psi_{i} \psi_{j} dx \right] + \sum_{i=1}^n \left[ U_{i}(t)\int_{G}\mu\, \partial_{x}\psi_{j} \partial_{x}\psi_{i} dx \right] = \int \psi_{j} f\, dx
$$

$$
M\,\ddot{\vec{U}}(t) + K\,\vec{U}(t) = \vec{f}(t)
$$

Where,
1. M is the mass matrix, given by
$$
M_{ij} = \int_{G}\rho \psi_{i} \psi_{j} dx
$$
2. K is the stiffness matrix, given by
$$
K_{ij} = \int_{G}\mu\, \partial_{x}\psi_{j} \partial_{x}\psi_{i} dx
$$
3. f is the source term, given by
$$
f_{j} = \int \psi_{j} f\, dx
$$

## Elements

- In 2D, the domains $G_{i}$ should be disjoint such that 
$$
\bigcup_{i=1}^n G_{i} = G
$$
$$
G_{i} \cap G_{j} = \varnothing, \,\,\, \forall\, i\ne j
$$
- For each element, we define 
$$
M^e \ddot{U}^e(t) + K^e U^e(t) = f^e(t)
$$


## Basis Functions

- We choose $n+1$ Lagrange polynomials with Gauss-Lobatto-Legendre (GLL) points as collocation points.
- $u_{i}$ are the nodal values at specific GLL points.
- GLL points are inside the interval except 2 points are on the ends to have a better curvature.
- For a $N^{th}$ polynomial basis, we use $N+1$ basis functions.
- Integration using [Gauss Quadrature](FEM/Numerical%20Integration).
$$
\psi_{i}[x(\zeta)] = L^N_{i}(\zeta), \,\,\, \zeta=[-1,1]
$$

## Key Differences Between SEM and FEM

1. **Polynomial Order**:
    - FEM: Uses low-order polynomial basis functions (e.g., linear, quadratic).
    - SEM: Uses high-order polynomial basis functions $(N \geq 3)$, leading to spectral accuracy for smooth problems.
2. **Integration Points**:
    - FEM: Typically uses uniform quadrature points (e.g., Gauss quadrature).
    - SEM: Uses **Gauss-Lobatto-Legendre (GLL)** points, derived from Legendre polynomials, for both basis function interpolation and numerical integration.
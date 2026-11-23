---
title: Sparse Linear Systems in CFD
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# Sparse Linear Systems in CFD
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Where the matrix comes from

A cell-centered diffusion balance couples a cell to its neighbors. An implicit time update adds a diagonal term, yielding a system $Ax=b$. Store the neighbor stencil or sparse coefficients. A one-dimensional three-point stencil gives a tridiagonal system that the Thomas algorithm solves in linear work when its pivots exist.

| Method | How it updates | Typical restriction or use |
| --- | --- | --- |
| Jacobi | Uses the previous iterate at every neighbor | Parallel updates and smoothing |
| Gauss–Seidel | Reuses updated values as soon as available | Ordering affects the update |
| SOR | Scales the Gauss–Seidel correction by $\omega$ | Tune $\omega$ for the matrix |
| Conjugate gradient | Minimizes error over successive Krylov subspaces in the $A$-norm | Symmetric positive definite $A$ |
| GMRES | Minimizes residual over a Krylov subspace | General nonsymmetric systems, with storage increasing until restart |

## Read the residual

$r=b-Ax$ and $e=x_\mathrm{exact}-x$ satisfy $Ae=r$. For $A=\operatorname{diag}(1,10^{-6})$ and $r=(0,10^{-6})^T$, $e=(0,1)^T$. A small residual can accompany appreciable solution error. Preconditioning improves the system seen by the iterative method. Multigrid uses coarse grids to address error components that relaxation reduces slowly.

See [[System of Equations]], [[Eigenvalue Problem]], [[Residuals]], and the pressure solve in [[Pressure Velocity Coupling]].

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 6–9
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 4

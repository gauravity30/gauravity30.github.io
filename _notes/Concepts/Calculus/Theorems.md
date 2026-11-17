---
title: Theorems
publish: true
category: Concepts/Calculus
render_with_liquid: false
---

# Theorem of Stokes, Gauss and Green 
*Created on:* 2024-12-24  
*Tags:* #GreenTheorem #StokesTheorem #GaussTheorem
*Course:* [[Calculus]]

---
## Green's Theorem

The outward flux of a field $F = M \hat{i} + N \hat{j} + L \hat{k}$ across a simple closed curve $C$ equals the double integral of $div\,\,\mathbf{F}$ over the region $R$ enclosed by $C$
$$
\oint_{C} \mathbf{F} \cdot n \,ds = \iint_{R} \nabla \cdot \mathbf{F}\, dA
$$

## Stokes' Theorem

The circulation of a vector field  $F = M \hat{i} + N \hat{j} + L \hat{k}$ across a simple closed curve $C$ of an oriented surface $S$ in the direction counterclockwise with respect to the surface's unit normal vector $n$ equals the integral of $\nabla \times F\cdot n$ over the surface $S$.
$$
\oint_{C} \mathbf{F} \cdot d\mathbf{r} = \iint_{S} \nabla \times \mathbf{F} \cdot \mathbf{n}\, d\sigma
$$

## Divergence Theorem

The flux of a vector field $F$ across a closed oriented surface $S$ in the direction of the surface's outward unit normal field $n$ equals the integral of $\nabla \cdot \mathbf{F}$ over the region $D$ enclosed by the surface:
$$
\iint_{S} F \cdot n\, d\sigma = \iiint_{D} \nabla \cdot F\, dV
$$

The flux through a surface = The volume integral of the flux density i.e. $\nabla \cdot F$.

---
title: Dual Simplex Method
publish: true
category: Concepts/Optimization
render_with_liquid: false
---

# Dual Simplex Method 
*Created on:* 2024-12-07  
*Tags:* #DualSimplexMethod
*Course:* [[Optimization]]

---
## Definition

*Primal feasible basis:* Any basis $B$ is known as primal feasible basis if and only if $B^{-1}\,b \ge 0$.
*Dual feasible basis:* Any basis $B$ to a primal problem, is known as dual feasible basis if and only if
$$
c - c_{B}\,B^{-1}A\,\ge\,0
$$
In [normal simplex method](Simplex%20Method), we move from one primal feasible basis to another until the basis also becomes dual feasible, since the optimal solution is both primal feasible and dual feasible.

One can approach in the opposite manner i.e. moving from one dual feasible solution to another until the solution becomes primal feasible also. This method is known as *Dual Simplex Method.*

The difference between *Primal Simplex* and *Dual Simplex* method is in the selection of leaving and entering variable.

**Selection of Leaving Variable:** The basic variable with most negative value is chosen as the *leaving variable*.

**Selection of Entering Variable:** 
- Only non-basic variables with negative coefficients in the pivot row are allowed to enter the basis.
- From the above set of non-basic variables, the one which satisfies the following condition is selected as the entering variable.

$$
Min\,\,\, \left|\frac{c_{j}-z_{j}}{y_{rj}}\right|
$$







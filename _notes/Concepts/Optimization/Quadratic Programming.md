---
title: Quadratic Programming
publish: true
category: Concepts/Optimization
render_with_liquid: false
---

# Quadratic Programming 
*Created on:* 2024-12-08  
*Tags:* #quadraticProgramming
*Course:* [[Optimization]]

---
## Definition
Quadratic Programming involves optimizing a **quadratic objective function** subject to linear constraints.

#### **Problem Formulation**

A typical QP problem is:

$$\min_{\mathbf{x}} \quad \frac{1}{2} \mathbf{x}^T \mathbf{Q} \mathbf{x} + \mathbf{c}^T \mathbf{x}
$$
subject to:
$$
\mathbf{A} \mathbf{x} \leq \mathbf{b}, \quad \mathbf{E} \mathbf{x} = \mathbf{f}$$

- **$\mathbf{Q}$**: Symmetric positive semi-definite matrix (represents quadratic terms).
- $\mathbf{c}$: Coefficient vector (represents linear terms).
- $\mathbf{A}$, $\mathbf{b}$: Matrices and vectors for inequality constraints.
- $\mathbf{E}$, $\mathbf{f}$: Matrices and vectors for equality constraints.
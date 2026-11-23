---
title: Finite Difference Stencils
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# Finite Difference Stencils
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Build a stencil from Taylor expansions

For uniform spacing $h$, expand $u_{i\pm1}=u_i\pm hu'_i+h^2u''_i/2\pm h^3u'''_i/6+\cdots$. Subtract the expansions for a first derivative and add them for a second derivative.

$$
u'_i=\frac{u_{i+1}-u_{i-1}}{2h}+O(h^2),\qquad
u''_i=\frac{u_{i+1}-2u_i+u_{i-1}}{h^2}+O(h^2).
$$

The sign pattern of the second derivative matters. At a local maximum its discrete value is nonpositive, so diffusion decreases the peak. For positive-speed advection, the backward difference uses upstream data and has first-order truncation error.

## Compact schemes

One fourth-order interior relation on a uniform grid is
$$
\tfrac14 d_{i-1}+d_i+\tfrac14 d_{i+1}=\frac{3}{4h}(u_{i+1}-u_{i-1}),\qquad d_i\approx u'_i.
$$
The derivative values are coupled, so a line solve and compatible boundary closures are required. Compare [[Sparse Linear Systems in CFD]]. Check stability of the full space-time scheme with [[Consistency Stability and Convergence]].

On a uniform grid, the centered second derivative also emerges from a balance of two diffusive face fluxes in [[Finite Volume Flux Balance]].

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 2
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 4–5,7

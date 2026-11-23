---
title: Time Integration and Diffusion
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# Time Integration and Diffusion
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## One spatial operator, three time updates

For $u_t=\alpha u_{xx}$ on a uniform grid, define $D_hu_i=(u_{i+1}-2u_i+u_{i-1})/h^2$. The theta method is
$$
\frac{u^{n+1}-u^n}{\Delta t}=\alpha[(1-\theta)D_hu^n+\theta D_hu^{n+1}].
$$
$\theta=0$ gives forward Euler, $\theta=1$ backward Euler, and $\theta=1/2$ Crank–Nicolson. For smooth solutions the first two are first order in time and Crank–Nicolson is second order. The latter two require [[Sparse Linear Systems in CFD]].

## Worked stability limit

A Fourier mode gives $\alpha\Delta t D_h=-4r\sin^2(kh/2)$, with $r=\alpha\Delta t/h^2$. Forward Euler multiplies that mode by $1-4r\sin^2(kh/2)$. Requiring magnitude at most one gives $r\le 1/2$. With $h=0.01\ \mathrm m$ and $\alpha=10^{-4}\ \mathrm{m^2/s}$, $\Delta t\le0.5\ \mathrm s$ for this one-dimensional model.

In two Cartesian dimensions, the corresponding explicit condition is $r_x+r_y\le 1/2$. Backward Euler strongly damps stiff modes. Crank–Nicolson is stable for this model but can produce alternating high-frequency modes at large time steps. Time resolution still matters. See [[Consistency Stability and Convergence]] and [[Unsteady CFD]].

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 3–5
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 4–6

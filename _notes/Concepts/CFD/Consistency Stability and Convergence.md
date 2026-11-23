---
title: Consistency Stability and Convergence
publish: true
category: Concepts/CFD
render_with_liquid: false
---

# Consistency Stability and Convergence
*Created on:* 2026-11-20  
*Tags:* #CFD  
*Course:* [[CFD Concepts]]

---

## Three questions about a numerical method

- **Consistency** asks whether the discrete equations approach the PDE when a smooth exact solution is substituted and the spacings shrink.
- **Stability** bounds the growth of perturbations under stated norms, boundary conditions, and step-size restrictions.
- **Convergence** asks whether the discrete solution approaches the PDE solution under refinement. For a consistent finite-difference scheme on a well-posed linear initial-value problem, the Lax equivalence theorem connects stability and convergence.

For a constant-coefficient periodic model, substitute $u_i^n=G^n e^{\mathrm i k i h}$ to derive the amplification factor. For forward time and centered space applied to advection, $G=1-\mathrm i C\sin(kh)$ with $C=a\Delta t/h$. Modes with $C\sin(kh)\ne0$ grow in magnitude. For first-order upwind and $a>0$, $G=1-C+Ce^{-\mathrm i kh}$ is a convex combination when $0\le C\le1$.

## Verification

Under clean asymptotic refinement with negligible temporal and algebraic errors, error magnitudes $E_h$ and $E_{h/2}$ give observed order $p=\log_2(E_h/E_{h/2})$. Errors of $0.04$ and $0.01$ yield $p=2$. A decreasing residual measures progress toward the discrete solution. Grid and time refinement measure sensitivity to discretization. Comparison with physical data tests the modeled flow.

See [[CFD Benchmark Problems]], [[Residuals]], and [[Time Integration and Diffusion]].

## Course references

- [Chakraborty syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/112105254.pdf) · Weeks 2–5
- [Ranjan syllabus](https://archive.nptel.ac.in/content/syllabus_pdf/101104450.pdf) · Weeks 6–7

---
title: Optimal Staging
publish: true
category: Concepts/AVD/Launch Vehicle
render_with_liquid: false
---

# Optimal Staging  
*Created on:* 2024-12-01  
*Tags:* #optimalStaging
*Course:* [[AVD]]

---
## Definition
*The assumptions of restricted staging are relaxed and the mass requirement of the launch vehicle is optimized using Lagrange Multiplier.*

---
## Problem Statement

*Minimize* $f(n_{1},n_{2}) = \ln\left(\frac{m_{0}}{m_{PL}}\right)$
*Constraint to* $g(n_{1}, n_{2}) = v_{BO} - v_{1}\ln(n_{1}) - v_{2}\ln(n_{2})$

Using Lagrange Multipliers,

$$
h(n_{1},n_{2},\eta) = \ln \left( \frac{m_{0}}{m_{PL}} \right) + \eta\, v_{BO} - \eta v_{1} \ln(n_{1}) - \eta v_{2} \ln(n_{2})
$$

Solve $\frac{\partial{h}}{\partial{n_{1}}} = 0$ and $\frac{\partial{h}}{\partial{n_{2}}} = 0$ to find $n_{1}$ and $n_{2}$ in terms of $\eta$. Replace $n_{1}$, $n_{2}$ in $g(n_{1},n_{2})$ and solve $g (\eta) = 0$ to find $\eta$. 

For n stages,

$$
n_{i} = \frac{\eta\, v_{i} - 1}{\varepsilon_{i}v_{i}\eta}
$$

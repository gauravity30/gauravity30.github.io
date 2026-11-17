---
title: Directional Derivatives
publish: true
category: Concepts/Calculus
render_with_liquid: false
---

# Directional Derivatives 
*Created on:* 2024-12-24  
*Tags:* #DirectionalDerivatives
*Course:* [[Calculus]]

---
## Definition

The derivative at $f$ at $P_{0}(x_{0},y_{0})$ in the direction of the unit vector $u = u_{1}\hat{i} + u_{2}\hat{j}$ is the number
$$
\left( \frac{df}{ds} \right)_{u,P_{0}} = \lim_{ s \to 0 } \frac{f(x_{0}+su_{1},y_{0}+su_{2}) - f(x_{0},y_{0})}{s} 
$$
Provided the limit exists.

It provides us the rate of change of $f$ in the direction of $u$.


The directional derivative is a dot product
$$
\left( \frac{df}{ds} \right)_{u,P_{0}} = (\nabla f)_{P_{0}}\,\cdot\,\vec{u}
$$
the dot product of the gradient $f$ at $P_{0}$ and $\vec{u}$.

---
title: Partial Derivatives
publish: true
category: Concepts/Calculus
render_with_liquid: false
---

# Partial Derivatives 
*Created on:* 2024-12-24  
*Tags:* #PDE
*Course:* [[Calculus]]

---
## Definition

The partial derivative of $f(x,y)$ with respect to $x$ at the point $(x_{0},y_{0})$ is 
$$
f_{x}(x_{0},y_{0}) = \frac{\partial f}{\partial x} _{(x_{0},\,y_{0})} = \lim_{ h \to 0 } \frac{f(x_{0}+h,y_{0}) - f(x_{0},y_{0})}{h}, 
$$
Provided the limit exists.

Similarly partial derivative with respect to $y$ at the point $(x_{0},y_{0})$.

## Mixed Derivative Theorem

If $f(x,y)$ and its partial derivatives $f_{x},f_{y},f_{xy},$ and $f_{yx}$  are defined throughout an open region containing a point $(a,b)$ and are all continuous at $(a,b)$ then
$$
f_{xy}(a,b) = f_{yx}(a,b)
$$

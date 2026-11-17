---
title: Quad4 Structural Mechanics
publish: true
category: Concepts/FEM
render_with_liquid: false
---

# Structural Mechanics for QUAD4 elements  
*Created on:* 2024-12-03  
*Tags:* #quad4 #structuralMechanics
*Course:* [[FEM]]

---
## Definition
*Strain-displacement relations for the general [[Four-noded Quadrilateral]]*
$$
\{\varepsilon\}={\left\{\begin{array}{l}{\varepsilon_{x}}\\ {\varepsilon_{y}}\\ {\gamma_{x y}}\end{array}\right\}}={\left\{\begin{array}{l}{\frac{\partial u}{\partial x}}\\ {\frac{\partial v}{\partial y}}\\ {\frac{\partial u}{\partial y}+\frac{\partial v}{\partial x}}\end{array}\right\}}
$$
We know, the real coordinates are expressed as the following in terms of natural coordinates
$$
x(\xi, \eta) = \sum N_{i}\,x_{i}
$$
$$
y(\xi,\eta) = \sum N_{i}\,y_{i}
$$

The transformation of derivatives in real coordinates to derivatives in natural coordinates is done through,
$$
{\left\{\begin{array}{l}{\frac{\partial}{\partial\xi}}\\ {\frac{\partial}{\partial\eta}}\end{array}\right\}}=[J]\left\{{\begin{array}{l}{\frac{\partial}{\partial x}}\\ {\frac{\partial}{\partial y}}\end{array}}\right\}
$$

Where, the Jacobian matrix for QUAD 4 element is given as
$$
[J]={\left[\begin{array}{l l}{\sum{\frac{\partial N_{i}}{\partial\xi}}\ x_{i}}&{\sum{\frac{\partial N_{i}}{\partial\xi}}\ y_{i}}\\ {\sum{\frac{\partial N_{i}}{\partial\eta}}\ x_{i}}&{\sum{\frac{\partial N_{i}}{\partial\eta}}\ y_{i}}\end{array}\right]}
$$
$$
[J]=\left[
\begin{array}{c c}
	{{\left(\frac{1-\eta}{4}\right)\left(x_{2}-x_{1}\right)+\left(\frac{1-\eta}{4}\right)\left(x_{3}-x_{4}\right)}} & {{\left(\frac{1-\eta}{4}\right)\left(y_{2}-y_{1}\right)+\left(\frac{1+\eta}{4}\right)\left(y_{3}-y_{4}\right)}} \\
	{{\left(\frac{1-\xi}{4}\right)\left(x_{4}-x_{1}\right)+\left(\frac{1+\xi}{4}\right)\left(x_{3}-x_{2}\right)}}   & {{\left(\frac{1-\xi}{4}\right)\left(y_{4}-y_{1}\right)+\left(\frac{1+\xi}{4}\right)\left(y_{3}-y_{2}\right)}}
\end{array}\right]
$$

The transformation from derivatives in natural coordinates to derivatives in real coordinates is done through,
$$
\left\{{\begin{array}{l}{\frac{\partial}{\partial x}}\\ {\frac{\partial}{\partial y}}\end{array}}\right\}=[J]^{-1}{\left\{\begin{array}{l}{\frac{\partial}{\partial\xi}}\\ {\frac{\partial}{\partial\eta}}\end{array}\right\}}  
$$

Thus,
$$
\{\varepsilon\}={\left\{\begin{array}{l}{\varepsilon_{x}}\\ {\varepsilon_{y}}\\ {\gamma_{x y}}\end{array}\right\}}= [B]\,\{\delta\}
$$

And the elemental stiffness matrix $[k]^e$ is given as

$$
[k]^e = \int^1_{-1} \int^1_{-1} [B]^T\,[D]\,[B]t\,|J|\, d\xi\,d\eta
$$
In general $[B]$ varies from point to point and the integral is evaluated numerically through [[Numerical Integration]].

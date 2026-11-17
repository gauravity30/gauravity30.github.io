---
title: Constrained NLP
publish: true
category: Concepts/Optimization
render_with_liquid: false
---

# Constrained NLP 
*Created on:* 2024-12-08  
*Tags:* #constrainedNLP
*Course:* [[Optimization]]

---
## Definition

Non-linear programming problems with constraints are solved using different methods based on the type of constraints.

### Lagrange Multiplier (Single Equality Constraint)

- The method works for a NLP with a single equality constraint.
- The necessary conditions of optimality can be obtained using a Lagrange function given by  
$$
L(X,\lambda) = f(X)\, +\, \lambda\,h(X) 
$$
- Partial differentiation with each variable, we get
$$
\nabla_{x}\,L(X^*, \lambda) = \nabla f(X^*)\,+\, \lambda \nabla h\,(X^*) = 0
$$
- Partial differentiation with Lagrange multiplier ($\lambda$), we get

$$
\nabla_{\lambda}\,L(X^*, \lambda) =  h\,(X^*) = 0
$$

Solving the above equations, we get the value of $X^*$ and $\lambda$ which optimize the objective function.


### Kuhn-Tucker Conditions

For a general constrained NLP,

Minimize $f(X)$
$h_{j}(X) = 0$, where $j=1,2,\dots,m$
$g_{k}(X)\le0$, where $k=1,2,\dots,p$

Here, we have $m$ equality constraints and $p$ inequality constraints.

$$
L(X,\lambda,\mu) = f(X) + \sum_{j=1}^m \lambda_{j}h_{j}(X) + \sum_{j=1}^p \mu_{j}g_{j}(X)
$$

**Kuhn-Tucker necessary conditions of optimality states that**
At local minimum point ($X^*$)
$h_{j}(X^*) = 0$
$g_{k}(X^*) \le 0$
$\mu_{k}\,g_{k}(X^*) = 0$
$\mu_{k} \ge 0$
$\nabla_{X}\,\, L(X^*,\lambda) = 0$

**Kuhn-Tucker sufficient condition of optimality**

Use Hancock's equation (without considering inequality constraints),
$$
J=\left[
\begin{array}{l l l}
	{{\nabla_{x x}^{2}L(X^{*},\lambda)}}         & {{\nabla_{x\lambda}^{2}L(X^{*},\lambda)}}    \\
	{{\nabla_{\lambda x}^{2}L(X^{*},\lambda)}} & {{\nabla_{\lambda\lambda}^{2}L(X^{*},\lambda)}} \\
\end{array}\right]=\left[
\begin{array}{l l}
	{{\nabla_{x x}^{2}L(X^{*},\lambda)}} & {{\nabla_{x}\,h_{j}(X^{*})}}        \\
	{{\nabla_{x}\,h_{j}^{T}(X^{*})}} & {{0}}
\end{array}\right]
$$


---
title: ODE
publish: true
category: Concepts/Differential Equations
render_with_liquid: false
---

# Ordinary Differential Equations 
*Created on:* 2024-12-17  
*Tags:* #ODE
*Course:* [[Differential Equations]]

---
## Definition

An equation that contains one or several derivatives of an unknown function of a single variable and derivatives are with respect to that independent variable.

An ODE is said to be of order n, if the nth derivative of the function is the highest derivative in the equation. 

The solution of a given ODE on some open interval $a < x <b$, iff
1. It is defined.
2. It is differentiable throughout the interval.
3. It satisfies the differential equation.

*General Solution:* A solution that contains an arbitrary constant.

Geometrically, the general solution of an ODE is a family of infinitely many solution curves for infinite values of the arbitrary constant.

*Particular Solution:* Solution with a chosen value of the arbitrary constant.

*Initial Value Problem*: The particular solution of an ODE depends on the initial condition. The ODE along with an initial condition is called an initial value problem.

$$
y\,' = f(x,y),\,\,\,\, y(x_{0}) = y_{0}
$$
### First-order ODE

**Separable ODE**
The ODE is in which the variables can be separated through algebraic manipulation is known as Separable ODE. 

$$
g(y)\,y\,' = f(x)
$$
$$
\int g(y)\,y\,'\, dx = \int f(x)\,dx + c
$$
$$
\int g(y)\, dy = \int f(x)\,dx + c
$$
**Reduction into separable form**
Certain inseparable ODEs can be separated by transformations that introduce a new variable for y.

Example: 
$$
y\,' = f\left( \frac{y}{x} \right)
$$
Let $y=ux$, then $y\,' = u\,'x + u$.
$$
\frac{du}{f(u)-u} = \frac{dx}{x}
$$

**Exact Differential Equation**
If the differential form $M(x,y)\,dx + N(x,y)\,dy$ is exact, then it is known as exact differential equation.
$$
M(x,y)\,dx + N(x,y)\,dy = 0
$$

Condition for exactness of a DE
$$
\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}
$$

**Reduction to Exact Form**
A non-exact differential equation can be transformed to exact form using integrating factors.
$$
P(x,y)\,dx + Q(x,y)\,dy = 0
$$
$$
FP\,dx + FQ(x,y)\,dy = 0
$$

Here, F is the integrating factor which can be found using
$$
F(x) = \exp \int \frac{1}{Q} \left( \frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} \right)\,dx 
$$

**Linear ODE**
ODEs of the form $y\,' + p(x)y = r(x)$ are known as linear ODE. There are two kinds

1. *Homogenous Linear ODE:* Here, the right hand side or $r(x)$ is equal to 0 for all values of $x$ in the some interval.
$$
y(x) = ce^{-\int p(x)dx}
$$
2. *Non-homogenous Linear ODE:* If $r(x)$ is not zero everywhere, then the ODE is known as non-homogenous. 

$$
(py-r)\,dx + dy = 0
$$
The equation can be solved using integration factor method, the integration factor can be found for the case as
$$
F(x) = e^\left( \int p\,dx \right)
$$

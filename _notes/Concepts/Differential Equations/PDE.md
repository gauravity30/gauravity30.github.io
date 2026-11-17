---
title: PDE
publish: true
category: Concepts/Differential Equations
render_with_liquid: false
---

# Partial Differential Equations
*Created on:* 2024-12-18  
*Tags:* #PDE
*Course:* [[Differential Equations]]

---
## Definition

An equation involving one or partial derivatives of an unknown functions that depends on the two or more variables is known as *Partial Differential Equations*.

- *Linear PDE:* The order or highest degree of the PDE is 1. 
- *Nonlinear PDE:* The order of highest degree of the PDE is equal or greater than 2.

**Some PDEs can be solved similar as to ODEs**

### Solution by Separating Variables

One-dimensional wave equation 
$$
\frac{\partial^2u}{\partial t^2} = c^2 \frac{\partial^2u}{\partial x^2}
$$
Boundary Conditions
$$
u(0,t) = 0,\,\,\,\, u(L,t)=0
$$
Initial Conditions
$$
u(x,0) = f(x),\,\,\,\,\, u_{t}(x,0) = g(x)
$$

By the method of separating variables,
$$
u(x,t) = F(x)G(t)
$$
We assume that the function is a product of two functions which is one of the dependent on only one of the independent variable.

$$
\frac{\partial^2 u}{\partial t^2} = F\ddot{G} \,\,\, \text{and} \,\,\, \frac{\partial^2u}{\partial x^2} = \ddot{F}G
$$
By inserting this into the wave equation,  we have
$$
F \ddot{G} = c^2 F\,'' G
$$
Now,
$$
\frac{\ddot{G}}{c^2G} = \frac{F\,''}{F} = k
$$
From here, we get two ODEs,
$$
F\,'' - kF = 0
$$
And 
$$
\ddot{G} - c^2kG = 0
$$

Satisfying the boundary conditions,
$$
F_{n}(x) = \sin\left( \frac{n\pi}{L} x\right)
$$
$$
G_{n}(t) = B_{n}\cos(\lambda_{n}t) + B_{n}^{\,*}\sin(\lambda_{n}t)
$$
Thus,
$$
u_{n}(x,t) = (B_{n}\cos(\lambda_{n}t) + B_{n}^{\,*}\sin(\lambda_{n}t))\,\,\sin\left( \frac{n\pi}{L}x \right)
$$
And
$$
u(x,t) = \sum_{n=1}^{\infty}(B_{n}\cos(\lambda_{n}t) + B_{n}^{\,*}\sin(\lambda_{n}t))\,\,\sin\left( \frac{n\pi}{L}x \right)
$$

Satisfying the initial conditions,
$$
u(x,0) = \sum_{n=1}^{\infty} B_{n} \sin\left( \frac{n\pi}{L}x \right) = f(x)
$$
$$
u_{t}(x,0) = \sum_{n=1}^{\infty} B_{n}^{\,*} \lambda_{n} \sin\left( \frac{n\pi x}{L} \right) = g(x)
$$

Using Fourier Sine Series,
$$
B_{n} = \frac{2}{L} \int_{0}^{L} f(x) \sin\left( \frac{n\pi x}{L} \right) dx
$$
$$
B_{n}^{\,*} = \frac{2}{cn\pi} \int_{0}^L g(x) \sin\left( \frac{n\pi x}{L} \right) dx
$$



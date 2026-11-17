---
title: Higher Order ODE
publish: true
category: Concepts/Differential Equations
render_with_liquid: false
---

# Higher Order ODEs
*Created on:* 2024-12-18  
*Tags:* #SecondOrderODE
*Course:* [[Differential Equations]]

---
## Second Order ODE

A second-order ODE is called *linear*, if it can be written as 
$$
y\,'' + p(x)y\,' + q(x)y = r(x)
$$
The linear second-order ODE can be *homogenous* and *non-homogenous* similar to [first-order ODE](ODE). 

For homogenous second-order ODEs, the *principle of superposition* is valid. If $y_{1}$ and $y_{2}$ are the solutions of the ODE, then
$$
y = c_{1}y_{1} + c_{2}y_{2}
$$
The linear combination of $y_{1}$ and $y_{2}$ is also a solution.

**The principle of superposition does not hold for non-homogenous linear or nonlinear ODEs.**

In a general solution of an ODE on any open interval is a solution in which $y_{1}$ and $y_{2}$ are *linearly independent*. They ($y_{1}$ and $y_{2}$) are known as *basis*.

Two functions are *linearly independent* on I iff
$$
k_{1}y_{1}(x) + k_{2}y_{2}(x) = 0 
$$
Everywhere on I implies $k_{1}=0$ and $k_{2}=0$.


### Homogenous Linear ODEs with Constant Coefficients

A general second-order homogenous linear ODE whose coefficient $a$ and $b$ are constant,
$$
y\,'' + ay\,' + by = 0
$$
Now, $y=e^{\lambda x}$ is a general solution of this kind of equations.

Replacing the solution into the ODE with obtain the characteristic equation,
$$
\lambda^2 + a\lambda + b = 0
$$
This is a quadratic equation in terms of $\lambda$ and the solution of the ODE depends on the values of $\lambda$.

#### Case I: Real and Distinct Roots

The general solution for the ODE when the characteristic equation has real and distinct roots is given as 
$$
y = c_{1}e^{\lambda_{1}x} + c_{2}e^{\lambda_{2}x}
$$
#### Case II: Real and Equal Roots

The general solution for the ODE in this case is given as
$$
y = c_{1}e^{\lambda x} + c_{2}xe^{\lambda x}
$$
Here, $x$ is multiplied with the second term to ensure linear independence of the general solution.

#### Case III: Complex Conjugate Roots

The general solution for the ODE in this case is given as
$$
y = c_{1}y_{1} + c_{2}y_{2}
$$
Where $\lambda_{1}$ and $\lambda_{2}$ are complex conjugates. Let $\lambda_{1} = -\frac{a}{2} + i\omega$ and $\lambda_{2} = -\frac{a}{2}-i\omega$. Then, we have
$$
\begin{gathered}
y_{1} &= \frac{1}{2}(e^{\lambda_{1}x} + e^{\lambda_{2}x})\\
y_{2} &= \frac{1}{2}(e^{\lambda_{1}x} - e^{\lambda_{2}x})
\end{gathered}
$$
Hence, we obtain
$$
y = e^{-ax/2}(c_{1}\cos \omega x + c_{2}\sin \omega x)
$$

### Euler - Cauchy Equations

ODEs of the form
$$
x^2y\,'' + axy\,' + by = 0
$$
are known as *Euler-Cauchy Equations*.

For these ODEs, the general solution is $y = x^m$. Substituting this into the ODE, we get the characteristic equation
$$
m^2 + (a-1)m + b = 0
$$

Here, also the general solution of ODE depends on the value of $m$.

#### Case I: Real and Distinct Roots

The general solution is given as 
$$
y = c_{1}x^{m_{1}} + c_{2}x^{m_{2}}
$$
#### Case II: Real and Equal Roots

The general solution is given as 
$$
y = (c_{1}+c_{2}\ln x)\,x^{m} + 
$$
#### Case III: Complex Roots

The general solution is given as 
$$
y = x^{a/2}\,[A\,\cos\,(\omega \ln x) + B\,\sin\,(\omega \ln x)]
$$






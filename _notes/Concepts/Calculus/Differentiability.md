---
title: Differentiability
publish: true
category: Concepts/Calculus
render_with_liquid: false
---

# Differentiability 
*Created on:* 2024-12-22  
*Tags:* #differentiability
*Course:* [[Calculus]]

---
## Definition

The derivative of the function $f(x)$ with respect to the variable x is the function $f\,'$ whose value at x is
$$
f\,'(x) = \frac{df}{dx} = \lim_{ h \to 0 } \frac{f(x_{0}+h) - f(x_{0})}{h} 
$$
Provided the limit exists.

If $f$ has a derivative at $x=c$, then $f$ is continuous at $x=c$.

## Intermediate Value Property

If $a$ and $b$ are any two points in an interval on which f is differentiable, then $f\,'$ take on every value between $f\,'(a)$ and $f\,'(b)$.


## Differentiation Rules

1. Derivative of a constant function is 0.
2. $\frac{d}{dx}x^n = nx^{n-1}$
3. $\frac{d}{dx}(cu) = c\frac{du}{dx}$
4. $\frac{d}{dx}(u+v) = \frac{du}{dx} + \frac{dv}{dx}$
5. $\frac{d}{dx}(uv) = v\frac{du}{dx} + u \frac{dv}{dx}$
6. $\frac{d}{dx}\left( \frac{u}{v} \right) = \frac{1}{v^2} \left( v\frac{du}{dx} - u \frac{dv}{dx} \right)$
7. $\frac{d}{dx} \sin x = \cos x$
8. $\frac{d}{dx}\cos x = -\sin x$


### Chain Rule

If $f(u)$ is differentiable at the point $u=g(x)$ and $g(x)$ is differentiable at x, then the composite function $(f \circ g)(x)$ is differentiable at $x$, and
$$
(f\circ g)'(x) = f\,'(g(x)) \cdot g\,'(x)
$$
OR
$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$



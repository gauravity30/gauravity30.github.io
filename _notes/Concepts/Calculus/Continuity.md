---
title: Continuity
publish: true
category: Concepts/Calculus
render_with_liquid: false
---

# Continuity 
*Created on:* 2024-12-22
*Tags:* #Continuity
*Course:* [[Calculus]]

---
## Definition

A function $y=f(x)$ is continuous at an interior point $c$ of its domain if
$$
\lim_{ x \to c } f(x) = f(c) 
$$
Whereas a function $y=f(x)$ is continuous at a endpoint of its domain if
$$
\lim_{ x \to a^+ } f(x) = f(a)\,\, \text{or}\,\, \lim_{ x \to b^- } = f(b)  
$$
## Continuity Test

A function $f(x)$ is continuous at $x=c$ if and only if it meets the following three conditions,
1. $f(c)$ exists.
2. $\lim_{ x \to c } f(x)$ exists.
3. $\lim_{ x \to c } f(x) = f(c)$

## Continuous Functions

A function is continuous on an interval if and only if it is continuous at every point of the interval. 

**Composite of Continuous Functions:** If $f$ is continuous at $c$ and g is continuous at $f(c)$, then the composite $g\,\,\circ\,\,f$ is continuous at $c$.

## Intermediate Value Theorem

A function $y=f(x)$ that is continuous on a closed interval $[a,b]$ takes on every value between $f(a)$ and $f(b)$. 
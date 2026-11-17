---
title: Limits
publish: true
category: Concepts/Calculus
render_with_liquid: false
---

# Limits 
*Created on:* 2024-12-22  
*Tags:* #limits
*Course:* [[Calculus]]

---
## Definition

Let $f(x)$ be defined on an open interval about $x_{0}$, except possibly at $x_{0}$ itself. If $f(x)$ gets arbitrarily close to $L$ for all $x$ sufficiently close to $x_{0}$, we say that $f$ approaches the limit $L$ as $x$ approaches $x_{0}$.
$$
\lim_{ x \to x_{0} } f(x) = L 
$$
The definition of function at $x_{0}$ doesn't effect the limit value.

**Existence of Limits**
The limit of $f(x)$ exists at $x_{0}$ iff
$$
\lim_{ x \to x_{0}^+ } f(x) = \lim_{ x \to x_{0}^- } f(x) = \lim_{ x \to x_{0} } f(x) = L 
$$

The limit when approaching $x_{0}$ from LHS is equal to the limit when approaching $x_{0}$ from RHS and both are equal to $L$.

**$\epsilon-\delta$ Definition of Limit**

The limit of $f(x)$ as $x$ approaches $x_{0}$ is the number $L$, then if, for every number $\epsilon>0$, there exists a corresponding number $\delta >0$ such that all $x$
$$
0<|x-x_{0}|<\delta \implies |f(x)-L| < \epsilon
$$

## Limits at infinity

If a function $f(x)$ has the limit $L$ as $x \rightarrow \infty$, then for every number $\epsilon >0$, there exists a corresponding number M such that for all $x$,
$$
x>M \implies |f(x) - L|<\epsilon
$$
Whereas, if function $f(x)$ has the limit $L$ as $x \rightarrow -\infty$, then for every number $\epsilon >0$, there exists a corresponding number M such that for all $x$,
$$
x<N \implies |f(x) - L|<\epsilon
$$

**Horizontal Asymptote:** A line $y=b$ is a horizontal asymptote of the graph of a function $y=f(x)$ if 
$$
\lim_{ x \to \infty } f(x) = b\,\,\text{or}\,\,\lim_{ x \to -\infty } f(x) = b  
$$
## Infinite Limits


If a function $f(x)$ approaches $\infty$ as $x \rightarrow x_{0}$, then for every possible real number $B$, there exists a corresponding $\delta>0$ such that for all $x$,
$$
0<|x-x_{0}|<\delta \implies f(x) > B
$$
If a function $f(x)$ approaches $-\infty$ as $x \rightarrow x_{0}$, then for every possible real number $B$, there exists a corresponding $\delta>0$ such that for all $x$,
$$
0<|x-x_{0}|<\delta \implies f(x) < -B
$$


**Vertical Asymptote:** A line $x=a$ is a vertical asymptote of the graph of a function $y=f(x)$ if 
$$
\lim_{ x \to a^+ } f(x) = \pm\infty\,\,\text{or}\,\,\lim_{ x \to a^- } f(x) = \pm\infty  
$$
## Limit Laws

Let $\lim_{ x \to c } f(x) = L$ and $\lim_{ x \to c } g(x) = M$, then

1. *Sum Rule:* $\lim_{ x \to c} (f(x) + g(x)) = L + M$
2. *Difference Rule:* $\lim_{ x \to c} (f(x) - g(x)) = L - M$
3. *Product Rule:* $\lim_{ x \to c} (f(x) \cdot g(x)) = L \cdot M$
4. *Constant Multiple Rule:* $\lim_{ x \to c} (k\cdot f(x)) = k\cdot L$
5. *Quotient Rule:* $\lim_{ x \to c} \left( \frac{f(x)}{g(x)} \right) = \frac{L}{M}, \,\,\, M \ne 0$
6. *Power Rule:* If $r$ and $s$ are integers with no common factor and $s \ne 0$, then $\lim_{ x \to c} (f(x))^{r/s} = L^{r/s}$
7. Limits of Polynomials can be found by substitution.

### Sandwich Theorem

Suppose that $g(x) \le f(x) \le h(x)$ for all $x$ in some open interval containing $c$, except possibly at $x=c$ itself. Suppose also that
$$
\lim_{ x \to c} g(x) = \lim_{ x \to c} h(x) = L
$$
Then, $\lim_{ x \to c} f(x) = L$.

## Intermediate Forms and L'Hopital Rule

Suppose that $f(a)=g(a)=0/\infty$, that $f$ and $g$ are differentiable on an open interval containing a, and that $g'(x)\ne 0$, if $x \ne 0$. Then,
$$
\lim_{ x \to a} \frac{f(x)}{g(x)} = \lim_{ x \to a } \frac{f'(x)}{g'(x)}  
$$

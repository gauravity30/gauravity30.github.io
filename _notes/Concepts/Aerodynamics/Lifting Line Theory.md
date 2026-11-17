---
title: Lifting Line Theory
publish: true
category: Concepts/Aerodynamics
render_with_liquid: false
---

# Prandtl's Lifting Line theory 
*Created on:* 2025-01-14  
*Tags:* #LLT
*Course:* [[Aerodynamics]]

---
## Definition

- **Bound Vortex**: A vortex filament of strength $\Gamma$ that is somehow bound to a fixed location in a flow.
- The wing is replaced with a bound vortex spanning from $y=-b/2$ to $y=b/2$.
- Due to Helmholtz's theorem, a vortex filament cannot end in the fluid, hence the vortex filament continues as two free vortices trailing downstream from the wing tips to infinity.
- This is known as a horseshoe vortex due to its shape.
- The bound vortex induces the downwash $w$.
- Two trailing vortices contribute to the induced velocity along the bound vortex and both contributions are in the downward direction.

## Induced Downwash

- The velocity at any point $y$ along the bound vortex induced by the trailing semi-infinite vortices is
$$
w(y) = -\frac{\Gamma}{4\pi(b/2+y)} - \frac{\Gamma}{4\pi(b/2-y)} = -\frac{\Gamma}{4\pi}\frac{b}{(b/2)^2-y^2}
$$
- At the edges, $w$ tends to infinity which is practically not possible. 
- Hence, instead of a single horseshoe vortex, infinite such vortices such that the bound vortices are of different length and coincide long a single line called *lifting line*.
- The strength of each trailing vortex is $d\Gamma$. This has turned to a continuous vortex sheet with distribution $\Gamma(y)$.
- The velocity $dw$ at $y_{0}$ induced by the entire semi-infinite trailing vortex located at $y$
$$
dw = - \frac{(d\Gamma/dy)dy}{4\pi(y_{0}-y)}
$$
- The total velocity $w$ induced at $y_{0}$ by the trailing vortex sheet is
$$
w(y_{0}) = -\frac{1}{4\pi} \int_{-b/2}^{b/2} \frac{(d\Gamma/dy)\,dy}{y_{0}-y}
$$
## Circulation Distribution

- The circulation distribution is unknown and we need to calculate $\Gamma(y)$ for a given finite wing.
- The induced angle of attack
$$
\alpha_{i}(y_{0}) = \tan^{-1}\left(\frac{-w(y_{0})}{V_{\infty}} \right) = \frac{-w(y_{0})}{V_{\infty}} 
$$

- $C_{l} = 2\pi[\alpha_{eff}(y_{0})-\alpha_{L=0}] = \frac{2\Gamma(y_{0})}{V_{\infty}c(y_{0})}$
- $\alpha_{eff} = \frac{C_{l}}{2\pi} + \alpha_{L=0}$ and $\alpha_{eff} = \alpha-\alpha_{i}$

$$
\alpha(y_{0}) = \frac{\Gamma(y_{0})}{\pi V_{\infty}c(y_{0})} + \alpha_{L=0}(y_{0}) + \frac{1}{4 \pi v_{\infty}} \int_{-b/2}^{b/2} \frac{(d\Gamma/dy)\,dy}{y_{0}-y}
$$
The fundamental equation of Prandtl's lifting-line theory.

- Solving the above equation equation, we get the value of the distribution of $\Gamma(y_{0})$.
- The lift distribution is $L(y_{0}) =\rho_{\infty}V_{\infty}\Gamma(y_{0})$ and the total lift is calculated by integrating the distribution.
- The induced drag distribution is obtained using $D'_{i} = L'_{i} \sin \alpha_{i} = L'_{i} \alpha_{i}$ and obtained by integrating the distribution.
## Elliptical Lift Distribution

- The circulation distribution is given by
$$
\Gamma(y) = \Gamma_{0} \sqrt{1- \left( \frac{2y}{b} \right)^2}
$$
- The lift distribution is also elliptical such that $L'\left( \pm \frac{b}{2} \right)=0$.
- The downwash distribution is constant with $w(y) = -\frac{\Gamma}{2b}$.
- The induced angle of attack is also constant with value of $-\frac{w}{V_{\infty}}$

$$
\Gamma_{0} = \frac{2V_{\infty}SC_{L}}{b\pi} 
$$
Thus,
$$
\alpha_{i} = \frac{SC_{L}}{\pi b^2} = \frac{C_{L}}{\pi AR}
$$
Now, 
$$
C_{D,i} = C_{L}\alpha_{i} = \frac{C_{L}^2}{\pi AR}
$$
Induced drag is drag due to lift.


For a wing with no geometric twist i.e. $C_{l}(y)$ is constant along the span. The chord distribution is 
$$
c(y) = \frac{L'(y)}{q_{\infty}C_{l}}
$$
Thus, for elliptical lift distribution the chord should vary elliptical i.e. the wing planform is elliptical.

## General Lift Distribution

- The induced drag is given as
$$
C_{D,i} = \frac{C_{L}^2}{\pi e AR}
$$
Where e is the span efficiency factor and $e \le 1$. For elliptical lift distribution, $e=1$. 
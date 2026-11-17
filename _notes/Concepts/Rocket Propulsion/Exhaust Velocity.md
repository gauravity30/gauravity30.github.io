---
title: Exhaust Velocity
publish: true
category: Concepts/Rocket Propulsion
render_with_liquid: false
---

# Factors effecting exhaust velocity  
*Created on:* 2024-11-28
*Tags:* #exhaustvelocity #RocketPropulsion
*Course:* [[Rocket Propulsion]] 

---
## Definition
*The exhaust velocity of the rocket engine is influenced by the following factors,*
- Ratio of exhaust pressure to chamber pressure $\left(\frac{P_{e}}{P_{c}}\right)$. Lower the ratio, higher the exhaust velocity.
- Chamber temperature ($T_c$). Higher the chamber temperature, higher the exhaust velocity.
- Molecular mass of the exhaust gas ($M_g$). Lower the molecular mass, higher the exhaust velocity.
  
$$
V_{j}^2 = \frac{2\gamma R_{0} T_{c}}{(\gamma-1)M_{g}} \left(1 - \left(\frac{P_{e}}{P_{c}}\right)^\frac{\gamma-1}{\gamma}\right)
$$

---
## Derivation

By definition of [[Stagnation Enthalpy]],

$$
h_{0} = h + \frac{v^2}{2}
$$

$$
\implies \frac{\gamma R T_{0}}{\gamma -1} = \frac{\gamma R T}{\gamma -1} + \frac{v^2}{2}
$$

$$
\implies V^2 = \frac{2\gamma R T_{0}}{\gamma-1} \left( 1- \frac{T}{T_{0}}\right)
$$

Putting $V$ equal to $V_{j}$ and $T_{0}$ equal to $T_{C}$ (Chamber temperature).

$$
\implies V_{j}^2 = \frac{2\gamma R T_{c}}{\gamma-1} \left( 1- \frac{T}{T_{C}}\right)
$$
$$
\implies V_{j}^2 = \frac{2\gamma R_{0} T_{c}}{(\gamma-1)M_{g}} \left(1 - \left(\frac{P_{e}}{P_{c}}\right)^\frac{\gamma-1}{\gamma}\right)
$$

---
title: Rocket Equation
publish: true
category: Concepts/Rocket Propulsion
render_with_liquid: false
---

# Rocket Equation
*Created on:* 2024-11-27
*Tags:* #RocketEquation #RocketPrinciple #RocketPropulsion
*Course:* [[Rocket Propulsion]]

---
## Definition
*Pushing itself forward by constantly ejecting within it*

$$\Delta V = V_J \ln\left( \frac{M_{i}}{M_{f}} \right)$$

Where $V_{j}$  is the [[Exhaust Velocity]] and $\frac{M_{f}}{M_{i}}$ is the [[Mass Fraction]].

---
## Derivation

Rate of mass propelled outside is  $\dot{m}$.

$$
\delta M = \dot{m}\Delta t
$$

Initial momentum = MV
Final momentum = $(M - \delta M)(V + \delta V) + \delta M(V+\delta V-V_{j})$

By conservation of momentum,

$$
\delta V = V_{j}\frac{\delta M}{M}
$$

$$
\delta V = V_{j} \left(\frac{\dot{m} \Delta\tau}{M_{i} - \dot{m}\tau}\right)
$$
Integrating from 0 to $\tau_{f}$,
$$
\Delta V = V_J \ln\left( \frac{M_{i}}{M_{f}} \right)
$$

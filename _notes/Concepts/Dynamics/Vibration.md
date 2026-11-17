---
title: Vibration
publish: true
category: Concepts/Dynamics
render_with_liquid: false
---

# Vibration 
*Created on:* 2025-02-01  
*Tags:* #Vibration
*Course:* [[Dynamics]]

---
## Definition

- The vibration of a system involves the transfer of its potential energy to kinetic energy and of kinetic energy to potential energy, alternately.
- If the system is damped, some energy is dissipated in each cycle of vibration.
- To maintain a steady vibration, this loss should be compensated by an external source.


## Degrees of Freedom

- The minimum number of independent coordinates required to determine completely the positions of all parts at any instant of time defines the number of degrees of freedom of the system.

- System with finite degree of freedom are known as discrete/lumped system.
- System with infinite degree of freedom are called continuous systems.

## Classification

- Free Vibration: If a system is left to vibrate on its own after an initial disturbance.
- Forced Vibration: If a system is subjected to an external force (often a periodic force).
- Undamped Vibration: If no energy is lost due to friction or other resistance.
- Damped Vibration: If any energy is lost during the vibration.
- Linear Vibration: Components of the system behave linearly.
- Non-linear Vibration: Components of the system behave nonlinearly.
- Deterministic Vibration: If the excitation acting on a system is known at any given time.
- Random Vibration: If the excitation is not known at any given instant of time.


## Spring Elements

- Assumed to have negligible mass and damping.
- It is said to be linear if the elongation or reduction in length $x$ is related to the applied force $F$ as
$$
F = kx
$$
- $k$ is the spring constant. It is always positive.
- The restoring force always acts in the opposite direction of applied force.
- A non-linear spring can be linearized for small displacements using the Taylor series expansion about the equilibrium point $(x^*)$.
- Springs in parallel
$$
k_{eq} = k_{1} + k_{2}
$$
- Springs in series 
$$
\frac{1}{k_{eq}} = \frac{1}{k_{1}} + \frac{1}{k_{2}}
$$
## Damping Elements

- The vibrational energy is converted to heat or sound. This is achieved through the mechanism of damping.
- A damper has neither mass nor elasticity.
- Viscous Damping/Coulomb Friction
- Dampers in parallel
$$
c_{eq} = c_{1} + c_{2}
$$
- Dampers in series 
$$
\frac{1}{c_{eq}} = \frac{1}{c_{1}} + \frac{1}{c_{2}}
$$



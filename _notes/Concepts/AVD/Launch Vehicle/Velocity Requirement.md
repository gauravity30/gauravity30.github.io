---
title: Velocity Requirement
publish: true
category: Concepts/AVD/Launch Vehicle
render_with_liquid: false
---

# Velocity Requirement  
*Created on:* 2024-12-01
*Tags:* #VelocityRequirement
*Course:* [[AVD]]

---
## Definition
*The change in velocity imparted on a payload by a launch vehicle $(\Delta V)$ is larger than the ideal velocity required.*

$$
\Delta V_{ideal} = \sqrt{ \frac{2\mu}{R_{E}} - \frac{\mu}{a}}
$$
This is the change in the velocity required when the gravitational field doesn't affect on the rocket. In actual case,

$$
\Delta V = \sqrt{ \frac{2\mu}{R_{E}} - \frac{\mu}{a}} - \Delta V_{rot} + \int_{t_{0}}^{t_{f}} g\sin \gamma\,dt + \int_{t_{0}}^{t_{f}} \frac{D}{M}dt + \Delta V_{steeringLoss}
$$
From, [[Rocket Equation]] and [[Staging]], the change in velocity for a n-stage rocket is given by

$$
\Delta V = \sum_{k=1}^{n} V_{j,k} \ln\left(\frac{M_{i}}{M_{f}}\right)_{k}
$$

The non-ideal terms are dependent on the trajectory and vehicle configuration (L/D and variation of drag).




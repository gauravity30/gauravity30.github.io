---
title: Staging
publish: true
category: Concepts/Rocket Propulsion
render_with_liquid: false
---

# Staging of Rocket 
*Created on:* 2024-11-27
*Tags:* #staging #clustering #RocketPropulsion
*Course:* [[Rocket Propulsion]]

---
## Definition
*Staging of Rocket* refers to dividing the rocket into multiple stages, each with its own engine and fuel. 
- It reduces the dead mass by removing the unnecessary structure.
- Allows the payload to achieve the required $\Delta V$ for leaving earth's gravity.

*The rockets usually have 2-6 stages.*

Generally, there are two kinds of staging
- [[Restricted Staging]]
- [[Optimal Staging]]

The payload for the current stage is the all the stages above it. For example, the payload for $1^{st}$ stage of a 3-stage rocket is $2^{nd}$ and $3^{rd}$ stages.

For a two-stage rocket,
- $m_0$ is the initial mass of the rocket
- $m_{i}$ is the mass of $i^{th}$ stage
- $m_{s,i}$ is the structural mass of $i^{th}$ stage
- $m_{p,i}$ is the propellant mass of $i^{th}$ stage
-  $m_{PL}$ is the mass of the payload.

Then, 

$$
m_{2} = m_{s,2} + m_{p,2} + m_{PL}
$$
$$
m_{1} =  m_{s,1} + m_{p,1} + m_{2}
$$
Now, the [[Mass Fraction]] $R_{m}$ for each stage can be written as

$$
R_{m,1} = \frac{m_{s,1} + m_{2}}{m_{s,1} + m_{p,1} + m_{2}} = \frac{m_{1} - m_{p,1}}{m_{1}}
$$

$$
R_{m,2} = \frac{m_{s,2} + m_{PL}}{m_{s,2} + m_{p,2} + m_{PL}} = \frac{m_{2} - m_{p,2}}{m_{2}}
$$

*The effective [[Specific Impulse]] ($I_{sp}$) is given as the weighted-average of the individual $I_{sp}$.*

$$
\boxed{\Delta V = \sum_{i=1}^{n} \Delta V_{i}}
$$
The total change in velocity is the sum of change in velocity due to each stage.


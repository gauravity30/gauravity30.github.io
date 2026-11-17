---
title: Preliminary Design
publish: true
category: Concepts/AVD/Aircraft Design
render_with_liquid: false
---

# Preliminary Design  
*Created on:* 2024-12-01  
*Tags:* #preliminaryDesign
*Course:* [[AVD]]

---
## Definition
*The three fundamental aircraft parameters are determined during the preliminary design phase*
- Aircraft maximum take-off weight (MTOW)
- Wing reference area (S)
- Engine thrust (T) or power (P)

Aircraft parameters such as $C_{D_{0}}$ and $C_{L,Max}$ are also estimated.
### Maximum take-off weight estimation
- First estimation of the aircraft weight 
- Data of past aircrafts with similar configuration and mission is used to estimate the aircraft weight.
- The maximum take-off weight of the aircraft is broken as 

$$
W_{TO} = W_{PL} + W_{C} + W_{F} + W_{E}
$$
Where,
- $W_{PL}$ is the payload weight.
- $W_{C}$ is the crew weight.
- $W_{F}$ is the fuel weight.
- $W_{E}$ is the empty weight.

$W_{PL}$ and $W_{C}$ are known from mission requirements and standards. $W_{E}$ and $W_{F}$ are expressed as a function of MTOW.

$$
W_{TO} = W_{PL} + W_{C} + \left( \frac{W_{F}}{W_{TO}} \right)\, W_{TO} + \left( \frac{W_{E}}{W_{TO}} \right)\,W_{TO}
$$

$$
\implies W_{TO} \left[1 - \left( \frac{W_{F}}{W_{TO}} \right) - \left( \frac{W_{E}}{W_{TO}} \right)\right] = W_{PL} + W_{C} 
$$

$$
\implies W_{TO} = \frac{W_{PL} + W_{C}}{\left[1 - \left( \frac{W_{F}}{W_{TO}} \right) - \left( \frac{W_{E}}{W_{TO}} \right)\right]} 
$$

The empty weight fraction can be estimated from the past aircraft data.
$$
\frac{W_{E}}{W_{TO}} = a W_{TO} + b
$$
The fuel weight fraction is dependent on the following,
- Flight Mission 
- Aerodynamic characteristics of the aircraft
- Engine SFC

*The extra fuel required for safety purposes is almost 5% of the aircraft total weight.*

After determination of the weight fractions, solve both equations simultaneously for $W_{TO}$ and $\frac{W_{E}}{W_{TO}}$ .

### Wing Area and Engine Sizing

Constraint analysis is used to determine the parameters. The aircraft performance requirements are expressed as *Wing loading (W/S)* and *Thrust-to-weight ratio (T/W) or Power Loading (W/P)*. Based on the requirements a design point is chosen with highest (W/S) and lowest (W/P).

- Maximum Speed Requirements (1.2-1.3 $V_{C}$)
- Stall Speed
- Maximum rate of climb
- Take-off run
- Ceiling
- Landing run
- Turn requirements

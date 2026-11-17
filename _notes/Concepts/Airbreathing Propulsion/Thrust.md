---
title: Thrust
publish: true
category: Concepts/Airbreathing Propulsion
render_with_liquid: false
---

# Thrust 
*Created on:* 2025-02-06  
*Tags:* #Thrust
*Course:* [[Airbreathing Propulsion]]

---
## Definition

- The axial force produced by the engine is called thrust.
- By control volume analysis, we can calculate the thrust produced by the aircraft.
- The net uninstalled thrust produced by the jet engine
$$
F_{un} = (\dot{m_{0}} + \dot{m_{f}})V_{e} - \dot{m_{0}}V_{0} + (p_{e}-p_{0})A_{e}
$$
- The 1st term is contribution from exhaust momentum.
- The 3rd term is the pressure-area contribution.
- The 2nd term is known as ram-drag, it is inlet momentum. It is the penalty of bringing air in the engine with a finite momentum.
- The 1st and 3rd term comprise the gross thrust ($F_{g}$).
$$
F_{un} = F_{g} - D_{ram}
$$
- At takeoff, the air speed $V_{0}$ is often ignored since $V_{e}\gg V_{0}$. 
- The engine nozzle is assumed to be perfectly expanded i.e. $P_{e} = P_{a}$.
- Therefore, the thrust is reduced to
$$
T_{takeoff} = \dot{m_{0}}V_{e}
$$
- **Installed Thrust**: Thrust where the installation losses such as nacelle skin friction and pressure drags are accounted.
$$
F_{installed} = F_{uninstalled} - D_{nacelle}
$$
## Specific Thrust

- The specific thrust of the aircraft is ratio of thrust to air mass flow rate.
$$
T_{sp} = \frac{T}{\dot{m_{0}}}
$$
- The magnitude of thrust produced is directly proportional to the mass flow rate of the fluid flow through the engine.
- The non-dimensional specific thrust is given as
$$
\text{Nondimensional Specific Thrust} = \frac{F}{\dot{m_{0}}a_{0}}
$$

## Specific Fuel Consumption

- The ability to produce thrust with a minimum of fuel expenditure is an important performance parameter.
- The ratio of fuel flow rate per unit thrust force produced is called thrust-specific fuel consumption (TSFC)
$$
TSFC = \frac{\dot{m}_{f}}{F}
$$
- TSFC has to be minimized.
- Specific Impulse is the ratio of thrust produced per unit propellant weight flow rate.
$$
I_{s} = \frac{F}{\dot{m}_{f}g_{0}}
$$
## Thermal Efficiency

- The ability of an engine to convert the thermal energy inherent in the fuel to a net kinetic energy gain of the working medium is called the engine thermal efficiency.
$$
\eta_{th} = \frac{\Delta KE}{E_{thermal}} = \frac{(\dot{m}_{0}+\dot{m}_{f})V_{e}^2 - \dot{m}_{0}V_{0}^2}{2\dot{m}_{f}Q}
$$
- Compares the mechanical power production to the thermal power investment in the engine.

## Propulsive Efficiency

- The fraction of the net mechanical output of the engine which is converted into thrust power is called propulsive efficiency.
- The net mechanical output of the engine is $\Delta KE$.
- The thrust power is $F \cdot V_{0}$.
- Therefore, the propulsive efficiency is defined as
$$
\eta_{p} = \frac{F \cdot V_{0}}{\Delta KE}
$$
- Propulsive Efficiency is based on installed thrust.
- An important result is derived if the uninstalled thrust is used
$$
\eta_{p} = \frac{2}{1 + \frac{V_{e}}{V_{0}}}
$$
- An engine achieves 100% propulsive efficiency, if the exhaust velocity is equal to the freestream velocity but then how the engine will produce thrust. 
- Therefore $V_{e}>V_{0}$ is needed to produce some thrust and hence, 100% propulsive efficiency is not possible.

## Overall Efficiency and Range

- The overall efficiency of the engine $\eta$ is given as
$$
\eta = \eta_{p} \times \eta_{th}
$$
- The range of the aircraft is given as
$$
R = M_{0}\frac{L}{D} \frac{a_{0}/g_{0}}{TSFC} \ln\left( \frac{W_{i}}{W_{f}} \right)
$$
- The range is inversely proportional to the TSFC. Hence, lower fuel consumption will lead to the larger range for a given amount of fuel.
''

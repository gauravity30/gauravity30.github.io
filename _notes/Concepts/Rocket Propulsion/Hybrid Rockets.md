---
title: Hybrid Rockets
publish: true
category: Concepts/Rocket Propulsion
render_with_liquid: false
---

# Hybrid Rockets  
*Created on:* 2024-11-28
*Tags:* #HybridRockets
*Course:* [[Rocket Propulsion]]

---
## Definition
*Rockets using fuel and oxidizer in different phases.*

- Solid Polymeric fuels with liquid oxidizers.
- *Advantages*
	- Higher [[Specific Impulse]] as compared to solid rockets.
	- Enhanced safety from explosion
	- Start-stop-restart capabilities
	- Good Performance
	- Low Cost
- *Disadvantages*
	- Oxidizer to fuel ratio shift
	- Low fuel regression rates
	- Complicated fuel geometries
	- Combustion instability problems
	- Prone to *Chugging*

**Fuel surface regression rate**
$$
\dot{r} = 0.036 \frac{G^{0.8}}{\rho_{f}} \left( \frac{\mu}{x} \right)^{0.2} \beta^0.23
$$

Where,
- G = freestream propellant mass velocity
- $\rho_{f}$ = solid phase fuel density
- $\mu$ = Combustion gas velocity
- $\beta$ = non-dimensional fuel mass flux

**Chugging**
- Low frequency combustion instability
- Oxidizer feed system induced instability (Non-acoustic)
- Solutions
	- Improving injector design to ensure uniform atomization and mixing with vaporized fuel.
	- Adding a **flow restrictor** or **orifice plate** in the oxidizer feed line increases resistance and reduces flow oscillations.
	- Adding a damper/absorber to absorb the pressure fluctuations.

**Flame Holding Instability**
- High frequency combustion instability
- Acoustic
- Solutions:
	- *Pilot Flame:* Preheats the oxidizer to enhance the mixing of oxidizer with fuel vapors. Prevents the extinction of flame. 
	- *Injector flow field variations:* Promotes formation of recirculation regions which improve the mixing of oxidizer and fuel vapors.
	
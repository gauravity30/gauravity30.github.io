---
title: Combustion Chamber
publish: true
category: Concepts/Rocket Propulsion
render_with_liquid: false
---

# Combustion Chamber and Nozzle  
*Created on:* 2024-11-28  
*Tags:* #CombustionChamber
*Course:* [[Rocket Propulsion]]

---
## Definition
*Part of the thrust chamber/rocket engine where the combustion or burning of the propellant takes place.*

- The chamber volume should be large enough for adequate atomization, mixing, evaporation and complete combustion of propellants.
- Diameter and volume can influence the cooling requirements.
- Increase in chamber pressure => reduction in chamber and nozzle length.
- Pressure drop should be minimum.


### Factors affecting the progress of combustion

- *Non-uniform distribution of MR*
$$
D_{R} = 1 - \sum^{N}_{i=1} \frac{|MR_{0} - MR_{i}|}{MR_{0}}
$$

- $D_{R} = 1$ refers to uniform distribution.
	  
- *Evaporation Constant and take taken for evaporation*
	- Evaporation constant due to vaporization of a droplet in a hot surrounding is given by,
$$
\lambda = \frac{dD^2}{dt} = \frac{8 \rho D_{FO}}{p_{l}} \ln(1+B)
$$
Where,
- $B = \frac{Y_{FS} - Y_{F\infty}}{1-Y_{FS}}$, Transport Number
- $D_{FO}$ - Diffusion Coefficient
- $\rho_{l}$ - Droplet density

Time taken for evaporation of a droplet of initial diameter $D_{0}$ is,

$$\tau_{v} = \frac{D_{0}^2}{\lambda}$$

- *Burn Rate Constant*: The burn rate constant is modified for the combustion around droplet.
- *Incomplete Vaporization*
	- The ratio of vaporized mixture of fuel and oxidizer can be different from the overall injected mixture ratio.
$$
\eta_{C^*,vap} = \left(\frac{\dot{m}_{ox,vap}+\dot{m}_{f,vap}}{\dot{m}_{ox,inj}+\dot{m}_{f,inj}}\right)
$$

- *Combined influence of distribution and incomplete vaporization*
$$
\eta_{C^*} = \eta_{C^*,vap} \times \eta_{C^*,dist}
$$

- *Characteristic Length of Thrust Chamber:* The adequate length of combustion chamber is given by the ratio of chamber volume and throat area.
$$
L^* = \frac{V_{c}}{A_{t}}
$$

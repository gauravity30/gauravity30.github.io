---
title: One-dimensional Flow
publish: true
category: Concepts/Aerodynamics
render_with_liquid: false
---

# One-dimensional compressible flows
*Created on:* 2025-01-19  
*Tags:* #1DCompressibleFlow
*Course:* [[Aerodynamics]]

---
## Definition

- Bow shock is nearly normal to the free-stream direction. It is always detached from the body.
- Shock waves that are perpendicular to the free-stream are called normal shocks.
- Oblique shock waves are two-dimensional phenomena.
- In one-dimensional flow, the streamtube area is constant whereas in case of gradually varying streamtube area, the flow can be assumed as a quasi-one-dimensional flow.

## One-Dimensional Flow Equations

- Flow is assumed to be steady.
- The area vector is perpendicular to the flow.
- LHS properties are represented with subscript 1 whereas the RHS properties are represented with subscript 2.

### Continuity Equation
$$
\rho_{1}u_{1}=\rho_{2}u_{2}
$$
### Momentum Equation
$$
p_{1} + \rho_{1}u_{1}^2 = p_{2} + \rho_{2}u_{2}^2
$$

### Energy Equation
$$
h_{1} + \frac{u_{1}^2}{2} + q = h_{2} + \frac{u_{2}^2}{2}
$$
- $q$ is the heat added per unit mass.
- $h$ is the enthalpy such that $h=e+pv$.

## Speed of Sound 

- Sound wave is propagated through oscillations of pressure.
- The properties across the shock are different. Slight changes are caused by sound wave whereas strong changes are caused by a shock wave which propagates at a higher velocity than $a$.
- Within sound waves, the flow gradients are small and the irreversible, dissipative effects are negligible, more over no heat is added to the flow inside the wave. Hence, the process must be *isentropic*.
$$
a^2 = \left( \frac{\partial p}{\partial \rho} \right)_{s}
$$
From the isentropic relation, we have
$$
\left( \frac{\partial p}{\partial \rho} \right)_{s} = \frac{\gamma \,p}{\rho} = \gamma\,R\,T
$$
Hence, 
$$
a = \sqrt{ \gamma\,R\,T }
$$
- Mach number is proportional to the ratio of kinetic to internal energy.
- Stagnation: Slowing a fluid element to zero velocity isentropically.

For an isentropic flow, the energy equation is given as
$$
h_{1} + \frac{v_{1}^2}{2} = h_{2} + \frac{v_{2}^2}{2}
$$
Assuming calorifically perfect gas, where $h=c_{p}T$, the equation becomes
$$
c_{p}T_{1} + \frac{v_{1}^2}{2} = c_{p}T_{2} + \frac{v_{2}^2}{2}
$$
## Total/Stagnation Conditions

- The values of static temperature and velocity are $T$ and $u$ at point A.
- Then, the total conditions at point A is given as
$$
c_{p}T + \frac{u^2}{2} = c_{p}T_{0}
$$
$$
\frac{T_{0}}{T} = 1+ \frac{u^2}{2c_{p}T} = 1 + \frac{\gamma-1}{2}M^2
$$
- From the isentropic relation, we have
$$
\frac{p_{0}}{p} = \left( \frac{T_{0}}{T} \right)^{\gamma/(\gamma-1)}
$$
- For an isentropic flow, the total values are constant throughout the flow field.

## Normal Shock Relations

- Normal shocks occur frequently as part of many supersonic flow fields.
- The shock is a very thin region typically $10^{-5}$ cm for air at standard conditions.
- The flow is supersonic before the wave and subsonic after the wave.
- Static temperature, pressure and density increase across the shock whereas the velocity decreases.
- Shock waves exist as a solution to a perplexing problem related to the propagation of disturbances in the flow.
- In subsonic flow, the presence of body is propagated everywhere including upstream by sound waves. This allows the flow streamlines to change and the flow properties begin to compensate for the body far upstream.
- In supersonic flow, the sound waves tend to coalesce a short distance ahead of the body and form a thin shock wave.
- Across the shock, the flow is subsonic and able to compensate for the obstruction.
- Normal shock is assumed to be discontinuity across which the flow properties suddenly change.
- No heat is added and hence the flow across the shock wave is adiabatic.

$$
\begin{gathered}
\rho_{1}u_{1} = \rho_{2}u_{2}\\
p_{1} + \rho_{1}u_{1}^2 = p_{2} + \rho_{2}u_{2}^2\\
h_{1} + \frac{u_{1}^2}{2} = h_{2} + \frac{u_{2}^2}{2}
\end{gathered}
$$

- The solution of these equations are tabulated in a normal shock table for a given inlet Mach number.
- The entropy across the shock increases due to the large gradients of velocity and pressure across itself.
- If the flow is isentropically brought to rest before and after the shock, then
$$
c_{p}T_{1} + \frac{u_{1}^2}{2} = c_{p}T_{2} + \frac{u_{2}^2}{2} \implies h_{01} = h_{02}
$$
- The total enthalpy is constant across a stationary normal shock wave.
- Although, the total pressure decreases due to increase in the entropy.
$$
s_{2}-s_{1} = c_{p}\ln\left( \frac{T_{02}}{T_{01}} \right) - R\ln\left( \frac{P_{02}}{P_{01}} \right) \implies \frac{P_{02}}{P_{01}} = e^{-(s_{2}-s_{1})/R}
$$


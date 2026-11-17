---
title: Lift, Drag and Moment
publish: true
category: Concepts/Aerodynamics
render_with_liquid: false
---

# Aerodynamic Forces and Moments
*Created on:* 2025-01-13  
*Tags:* #Lift #Drag #Moments
*Course:* [[Aerodynamics]]

---
## Definition

- The aerodynamic forces and moments on the body are due to
	1. Pressure Distribution over the body surface.
	2. Shear stress Distribution over the body surface.
- Both pressure $p$ and shear stress $\tau$ have dimensions of force per unit area.
- $p$ acts normal to the surface.
- $\tau$ acts tangential to the surface. It is due to the "tugging action" on the surface which is caused by the friction between the body and the air.

The net effect of $p$ and $\tau$ distributions integrated over the complete body surface is a resultant aerodynamic force $R$ and moment $M$ on the body.

## Forces

The resultant force $R$ can be split into two set of components
1. Normal Force $N$ and Axial Force $A$: Component $\perp$ and $\parallel$ to chord $c$.
2. Lift Force $L$ and Drag Force $D$. Component $\perp$ and $\parallel$ to freestream velocity $V_{\infty}$.

The angle of attack $\alpha$ is known as the angle between $c$ and $V_{\infty}$. Hence, the relation between the two sets is 
$$
\begin{gathered}
L = N\cos \alpha - A \sin \alpha\\
D = N\sin \alpha + A \cos \alpha\\
\end{gathered}
$$

## Moments

- Aerodynamic moment exerted on the body depends on the point about which moments are taken.
- Positive moment $\implies$ Increases $\alpha$ and Negative Moment $\implies$ Deceases $\alpha$. (By convention)

## Force and Moment Coefficients

Dynamic Pressure:
$$
q_{\infty} = \frac{1}{2} \rho_{\infty}V_{\infty}^2
$$
The force coefficients are found by dividing the forces by dynamic pressure and $S$. While, the moment coefficients are found by dividing the moment by dynamic pressure, $S$ and $l$.

-  $S$: Reference Area
- $l$: Reference Length


## Center of Pressure

- The aerodynamic forces are distributed forces.
- To replace the distributed forces with an equivalent resultant force, we need to place it such that it produces the same moment about the leading edge.
- This position on the chord line is known as *Center of Pressure*.
$$
x_{cp} = - \frac{M_{LE}}{N}
$$
- The moments about the the center of pressure is zero.
- The center of pressure varies with pressure distribution i.e. with $\alpha$ and not always useful. 
- Thus, the concept of aerodynamic center is used at $\frac{c}{4}$.
$$
M_{LE} = -\frac{c}{4}L + M_{c/4} = - x_{cp}L
$$

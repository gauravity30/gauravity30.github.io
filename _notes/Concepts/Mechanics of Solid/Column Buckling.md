---
title: Column Buckling
publish: true
category: Concepts/Mechanics of Solid
render_with_liquid: false
---

# Column Buckling 
*Created on:* 2025-01-31  
*Tags:* #ColumnBuckling
*Course:* [[MOS]]

---
## Definition

- Structure Stability: Load doesn't cause a sudden change in the configuration.
- Higher loads in the columns can lead to compression and bending which is known as buckling.
- The load for which buckling starts is known as critical load or $P_{cr}$.
- The critical load is derived from Euler's Formula for a pin-join column.

## Pin-Connected Column

- Centric axial load $P$.
- If the reaction and axial force is aligned perfectly, then there would be no moment and hence no bending.
- But this is not practical and hence we use beam deflection equations
$$
\frac{d^2y}{dx^2} = \frac{M}{EI}
$$
- In this case, $M= -Py$, where $P$ is a constant.
$$
\frac{d^2y}{dx^2} + \frac{Py}{EI} = 0
$$
- From the solution of the above differential equation, we have
$$
P = \frac{n^2\pi^2EI}{L_{e}^2}
$$
- The critical load is found for $n=1$.
- The buckling occurs for the axis about the MOI (I) is lowest.

## Free-Fixed Column

- Half a pin connected column.
- The effective length $(L_e)$ is twice the length of the column.
## Fixed-Fixed Column

- Double a pin connected column.
- The moment at the points $\frac{L}{4}$ and $\frac{3L}{4}$ is zero, similar to the pin connected column.
- The effective length $(L_e)$ is half the length of the column.

## Fixed-Pin Column

- The effective length $(L_e)$ is 0.7 L.
- The force balance leads to non-homogenous equation unlike the pin-pin condition and solution gives
$$
P_{cr} = \frac{20.19E^2I^2}{L^2} = \frac{\pi E^2I^2}{(0.7L)^2}
$$




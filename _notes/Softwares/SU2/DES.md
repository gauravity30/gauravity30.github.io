---
title: DES
publish: true
category: Softwares/SU2
render_with_liquid: false
---

# DES 
*Created on:* 2025-04-21  
*Tags:* #DES
*Course:* [[SU2]]

---
## Definition

- RANS is fast but empirical i.e. requires calibration for different types of flows.
- LES is accurate but requires large computational power. This is kind of universal.

- In the bulk region, LES outperforms the RANS and can resolve the large eddies.
- In the near-wall region where the maximum of computing power is required, RANS is quite accurate and cheap. 
- Hence, in the hybrid RANS/LES, we use LES in the free shear (bulk) region whereas RANS in the near-wall region.

## Detached Eddy Simulation

- Involves incorporation of LES into RANS model for LES behavior in the free shear region.
- First DES model is based on the [[SA Model]].
-  The variable $d$ which represents the distance from wall is replaced with $\tilde{d}$
$$
\tilde{d}=min(d,C_{DES}\Delta)
$$
- $C_{DES}=0.65$ calibrated for isotropic turbulence. $\Delta$ is the filter width. 
- Due to this modification, the destruction term doesn't go to zero and is finite in the free shear region.
- The smaller $\Delta$, the more of the simulation will behave as LES.
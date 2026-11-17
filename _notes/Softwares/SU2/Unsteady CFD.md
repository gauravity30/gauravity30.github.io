---
title: Unsteady CFD
publish: true
category: Softwares/SU2
render_with_liquid: false
---

# Unsteady CFD in SU2 
*Created on:* 2024-12-26  
*Tags:* #UnsteadyCFD 
*Course:* [[SU2]]

---
## SU2 Options

### Flow without grid motion

```
UNSTEADY_SIMULATION = DUAL_TIME_STEPPING-2ND_ORDER

%Pick time step
UNST_TIMESTEP = 1E-2
UNST_CFL_NUMBER = 0.0

% How long to run simulation
UNST_TIME = 100
EXT_ITER = 999999

% # of inner iterations
UNST_INT_ITER = 200
RESIDUAL_REDUCTION = 4  
```

Either select a fixed time step using *UNST_TIMESTEP* or use a constant CFL option using *UNST_CFL_NUMBER*.

### Flow with grid motion

```
GRID_MOVEMENT= YES
GRID_MOVEMENT_KIND= RIGID_MOTION

MOTION_ORIGIN_X = 0.5
MOTION_ORIGIN_Y = 0.0

%Pitching angular freq.
PITCHING_OMEGA_Z= 100

%Pitching amplitude (deg)
PITCHING_AMPL_Z=1.01
```


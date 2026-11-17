---
title: Coherent Structures
publish: true
category: Softwares/Paraview
render_with_liquid: false
---

# Coherent Structures 
*Created on:* 2025-03-26  
*Tags:* #CoherentStructures #Q-Criterion
*Course:* [[Paraview]]

---
## Definition

- A structure or volume in the domain which satisfies a certain thresholding criterion 
$$
\alpha(x) \ge \tau
$$
- The physical properties under consideration are normalized vorticity and strain.
- Volume of the structure is reduced when increasing the threshold.

## Vortex clusters

- Problem of using vorticity is to define turbulent structures: laminar flows also have vorticity.
- A vortex is a structure where the rotational part $\Omega$ is dominant.
- Several alternative criteria to identify vortex clusters:
	- Q-Criterion
	- $\Delta$ Criterion
	- $\lambda_{2}$ Criterion


## Q-Criterion

- Second invariant of velocity gradient tensor $\Delta u$.
- Represents iso-pressure surfaces of the pressure surrounding vortical structures.
$$
Q = \frac{1}{2}(\Omega_{ij}\Omega_{ij}-S_{ij}S_{ij})
$$
- $\Omega_{ij}$ is the rotation rate whereas $S_{ij}$ is the strain rate. 
- It is the balance between rotation rate and strain rate of the fluid flow.
- Positive Q represents area whereas rotation overcomes strain, making these surfaces formed by them eligible as vortex envelopes.
- What is the threshold for Q ? Set a threshold and visualize.
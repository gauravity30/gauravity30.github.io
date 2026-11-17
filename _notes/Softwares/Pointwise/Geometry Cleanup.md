---
title: Geometry Cleanup
publish: true
category: Softwares/Pointwise
render_with_liquid: false
---

# Geometry Cleanup 
*Created on:* 2024-12-24  
*Tags:* #GeometryCleanup
*Course:* [[Pointwise]]

---
## Definition

Geometry cleanup refers to reducing the number of entities and preparing the CAD model for meshing.

### Step 1: Assemble Models

*Create --> Assemble --> Models*

Reduces the number of models in the geometry. *Laminar Boundaries* refer to free edges.

Combine and do Boolean operations to create a single water-tight model for meshing.

### Step 2: Assemble Quilts

Join the over-divided quilts to create a easy to mesh geometry.


Splitting the model can be done through *Trim with Surface*.

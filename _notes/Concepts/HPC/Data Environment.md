---
title: Data Environment
publish: true
category: Concepts/HPC
render_with_liquid: false
---

# Data Environment 
*Created on:* 2025-02-19  
*Tags:* #DataEnvironment #OpenMP
*Course:* [[HPC]] 

---
## Definition

- Shared memory programming model:
	- Most variables are shared by default.
- Global variables are SHARED among threads
	- Fortran: COMMON blocks, SAVE variables, MODULE variables.
	- C: File scope variables, static.
	- Both dynamically allocated memory
- But not everything is shared
	- Stack variables in subprograms (Fortran) or functions (C) are called from parallel regions are PRIVATE
	- Automatic variables within a statement block are PRIVATE. 
- One can selectively change storage attributes for constructs using the following clauses:
	- shared(list)
	- private (list)
		- The value of the private copies is uninitialized.
		- The value of the original variable is unchanged after the region.
	- firstprivate(list)
		- Variables initialized from a shared variable.
		- C++ objects are copy-constructed.
	- These can be used for parallel and for constructs other than shared which can only be used on a parallel construct.
- Force the programmer to explicitly define storage attributes
	- default (none)
- OpenMP makes the loop control index on the parallel loop (i) private by default but not for the second loop (j) in case of nested loops. So we need to declare j as private using `#pragma omp parallel for private(j)`


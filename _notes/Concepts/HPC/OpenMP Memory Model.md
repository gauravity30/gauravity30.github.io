---
title: OpenMP Memory Model
publish: true
category: Concepts/HPC
render_with_liquid: false
---

# OpenMP Memory Model 
*Created on:* 2025-02-19  
*Tags:* #OpenMP #MemoryModel
*Course:* [[HPC]]

---
## Definition

- Programming models for Multithreading support shared memory.
- All threads share an address space, consider the variable $\gamma$
- Multiple copies of a variable $\gamma$ may be present at various levels of cache or in registers and they may ALL have different values.
- A memory consistency model provides the rules to answer which value of $\gamma$ one thread should see at any point in a computation.

## Relaxed-consistency memory model

- Threads can maintain a temporary view of shared memory that is not consistent with that of other threads.
- These temporary views are made consistent only at certain points in the program.
- The operation that enforces consistency is called the flush operation.
- Flush operation defines a sequence point at which a thread is guaranteed to see a consistent view of memory.
	- Previous read/writes by this thread have completed and are visible to other threads.
	- No subsequent read/writes by this thread have occurred.
- Flush forces data to be updated in memory so other threads see the most recent value `#pragma omp flush(A)`
- Compilers routinely reorder instructions implementing a program.
- Compilers generally cannot move instructions
	- Past a barrier
	- Past a flush on all variables.


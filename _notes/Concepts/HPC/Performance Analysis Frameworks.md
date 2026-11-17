---
title: Performance Analysis Frameworks
publish: true
category: Concepts/HPC
render_with_liquid: false
---

# Performance Analysis Frameworks 
*Created on:* 2025-02-28  
*Tags:* #PerformanceAnalysisFrameworks
*Course:* [[HPC]]

---
## Typical Time Measurements

- Time spent on computation decreases with # of processors.
- Time spent on communication, increases with # of processors.
- Operations in a parallel program:
	- Computation that must be performed sequentially
	- Computations that can be performed in parallel
	- Parallel overhead including communication and redundant computations.


- Amdahl's Law is one performance estimation model.

## Gustafson-Barsis's Law

- Amdahl's law assumes that the problem size is fixed and show how increasing processors can reduce time.
- Let the problem size increase with the number of processors.
- Let $s$ be the fraction of time spent by a parallel computation using $p$ processors on performing inherently sequential operations.
$$
s = \frac{\sigma(n)}{\sigma(n)+\frac{\phi(n)}{p}}
$$

- The maximum speedup $\psi(n,p)$ achieved by the program is
$$
\psi(n,p) \leq p+(1-p)s
$$
- It also ignores the parallelization overhead, hence may overestimate the speedup. 
## Karp-Flatt Metric

- We define experimentally determined serial fraction $e$ of parallel computation:
$$
e(n,p) = \frac{\sigma(n)+\kappa(n,p)}{\sigma(n)+\phi(n)}
$$
- It takes into account parallel overhead.
- Detects other sources of overhead or inefficiency ignored in speedup model.
- It may stay constant with respect to p or increase with respect to p.
$$
e = \frac{\frac{1}{\psi} - \frac{1}{p}}{1-\frac{1}{p}}
$$
- $\psi$ is the experimentally determined speedup and $p$ is the number of processors.
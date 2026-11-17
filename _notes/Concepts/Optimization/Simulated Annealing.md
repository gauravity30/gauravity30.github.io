---
title: Simulated Annealing
publish: true
category: Concepts/Optimization
render_with_liquid: false
---

# Simulated Annealing 
*Created on:* 2024-12-08  
*Tags:* #SimulatedAnnealing
*Course:* [[Optimization]]

---
## Definition

Simulated Annealing is a neighborhood based meta-heuristics technique which is based on the annealing process.

*If the heating temperature is sufficiently high to ensure random state and the cooling process is slow enough to ensure thermal equilibrium, then the atoms will place themselves in a pattern that corresponds to the global energy minimum of a perfect crystal.*

*The random perturbations in the position of the atom decreases with reduction in temperature.*

### Algorithm

1. Select a point $X_{c}$ and find the value of objective function at that point $E(x_{c})$.
2. Select an initial temperature T>0
3. Set number of iterations at each temperature N.
4. Set the cooling rate $\alpha$.
5. Set n = 0.
6. Generate a new state $x_{new}$ in the neighborhood of $x_{c}$.
7. Calculate $\Delta E = E(x_{n}) - E(x_{c})$.
8. If $\Delta E <0$, then $x_{c} = x_{n}$
9. Else if random (0,1)< $exp \left( -\frac{\Delta E}{BT} \right)$, then  $x_{c} = x_{n}$.
10. Set n = n+1.
11. If $n\neq N$, go to Step 6.
12. Set $T = T\times \alpha$
13. Go to Step 5, if stopping criteria is not reached.

### Algorithm Parameters

1. Set initial temperature to be large enough.
2. Cooling rate is generally 0.8 to 0.99
3. Stopping Criteria
	1. When the solution isn't changing for consecutive temperature changes.
	2. When temperature reaches a specific value.
4. *Constant B*: Should be chosen depending on the value of $\Delta E$ and initial temperature T and the final temperature.

### Advantages

1. Easy to implement.
2. Applicable to wide range of problems.
3. High quality solutions.
4. Better than greedy algorithms.

### Weakness

1. Care is needed to devise an appropriate neighborhood structure and cooling schedule.
2. Results are not reproducible.
3. Can leave an optimal solution and not find it again.
4. Good for multimodal functions.



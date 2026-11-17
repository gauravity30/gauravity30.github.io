---
title: Genetic Algorithm
publish: true
category: Concepts/Optimization
render_with_liquid: false
---

# Genetic Algorithm 
*Created on:* 2024-12-08  
*Tags:* #GA
*Course:* [[Optimization]]

---
## Definition

Genetic algorithm is a population based meta-heuristics technique which is based on the idea of natural selection and evolution.

### Initial Population

*Population:* Subset of n randomly chosen solutions from the search space (i.e. chromosomes).

Each chromosome represents the *encoding* of a randomly generated solution.

*Encoding Scheme:* Selection depends on the nature of the problem
1. Binary Encoding
	1. Most common method of encoding
	2. Strings of 1 s and 0 s.
	3. Each position represents a particular characteristic.
2. Permutation Encoding
	1. Useful in ordering problems such as travelling salesman problem.
	2. A string of numbers, each number represents a city to be visited.
3. Real/Value Encoding
	1. Used in problems where complicated values, such as real numbers are used and where binary encoding would not suffice.


### Fitness Evaluation

1. *Linear Scaling:* The fitness is linearly scaled such that the average fitness stays same whereas the best fitness is increased by a desired multiple of the average.
2. *Power Law Scaling:* The scaled fitness of the chromosome is calculated as 
$$
f_{i}' = f_{i}^k
$$
3. *Exponential Scaling:* The initial fitness is scaled exponentially as 
$$
f_{i}' = \exp(f_{i}\times k)
$$

### Selection of Individual
The process that determines which solutions are to be preserved and allowed to reproduce and which ones deserve to die out.

- Replaces the bad solution from the population with multiple copies of the good solutions.
- Selection Techniques
	- Roulette Wheel Selection
	- Tournament Selection
	- Rank Selection

1. *Roulette Wheel Selection*
	1. Slot proportion to it's fitness is assigned to each chromosome.
	2. The weighted roulette wheel is run $n$ times for $n$ number of solutions.
2. *Rank Selection*
	1. Ranks the population first and then every chromosome receives fitness value determined by this ranking.
	2. The worst will have fitness **1**, second worst **2** and then best will the fitness **N** (Number of chromosomes in population).
3. *Tournament Selection*
	1. Tournament is played between two randomly selected chromosomes and the better is place in new generation.
	2. The above process is repeated till all the chromosomes for the new generation are selected.
4. *Elitism*
	1. Copies the best chromosome to the new offspring population before crossover and mutation.
	2. Forces GA to retain some of the best individuals at each generation.

### Crossover
The process in which two chromosomes combine their genetic material to produce a new offspring which possess both their characteristics.

1. *Single point crossover:* A random point is chosen on the individual chromosomes and the genetic material is exchanged at this point.
2. *Two Point crossover:* Two random points are chosen on the individual chromosomes and the genetic material is exchanged at these points.
3. *Uniform Crossover:* Each gene is selected randomly from one of the corresponding genes of the parent chromosomes.

### Mutation
The process by which a string is deliberately changed so as to maintain diversity in the population set.

- Mutation method depends on the method of encoding.
- In binary encoding, we can switch a few randomly chosen bits from 1 to 0 and vice-versa. It is known as *Bit Inversion.*

### GA Parameters

1. *Population Size*
2. *Encoding*
3. *Selection Method*
4. *Crossover and Mutation Type*
5. *Crossover Probability:* Should be high generally.
6. *Mutation Probability:* Should be very low.

### Advantages

1. Global search method: reduced probability of getting trapped in local minima.
2. Widely applicable.
3. Parallel Computing
4. Conceptual simplicity.


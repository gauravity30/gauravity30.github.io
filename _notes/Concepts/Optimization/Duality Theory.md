---
title: Duality Theory
publish: true
category: Concepts/Optimization
render_with_liquid: false
---

# Duality Theory
*Created on:* 2024-12-07  
*Tags:* #duality
*Course:* [[Optimization]]

---
## Definition

*Duality theory* states that every linear programming problem has an associated linear programming problem known as its *dual* such that a solution to the original linear problem as gives the solution to the dual.

The original problem is known as *Primal problem*.

**Dual-Primal problem relationship**
- The objective function of primal problem is the RHS of the Dual problem.
- The RHS of the primal problem is the objective function of the Dual problem.
- Inequalities and objective (maximization/minimization) are reversed.
- Each column of primal problem corresponds to a constraint in the dual problem.
- Each constraint in primal corresponds to a column in the dual.
- The dual of a dual is the primal problem.

Number of constraints in primal problem = Number of variables in Dual.
Number of variables in primal problem = Number of constraints in Dual.

**Symmetric Dual LP**

A linear problem is said to be in symmetric form, if all the variables are restricted to be non-negative, and all the constraints are inequalities. In maximization problem, all constraints are <= and in minimization problem, all constraints are >=.


*Primal*
$$
\begin{gathered}
\text{Maximize} \,\,\,\, \mathbf{Z} = \mathbf{c}\,\mathbf{x}\\
\text{Subject to} \,\,\, \mathbf{A}\,\mathbf{x} \le \mathbf{b}\\
\,\,\,\,\,\,\, \mathbf{x}\ge 0
\end{gathered}
$$

*Dual*
$$
\begin{gathered}
\text{Minimize} \,\,\,\, \mathbf{W} = \mathbf{y}\,\mathbf{b}\\
\text{Subject to} \,\,\, \mathbf{y}\,\mathbf{A} \ge \mathbf{c}\\
\,\,\,\,\,\,\, \mathbf{y}\ge 0
\end{gathered}
$$


**Weak-Duality Theorem**

For any symmetric primal-dual problem, the value of objective function of minimum problem is always greater than or equal to the value of the objective function of maximum problem, i.e. $W\,\ge\,Z$ always. 


**Optimality Criterion Theorem**

The theorem states that for optimal solutions of any symmetric primal-dual problem, then the corresponding values of their objective functions are equal, i.e. $W=Z$ for optimal solutions to the dual and primal problem respectively,

**Main Duality Theorem**

The theorem states that if both primal and dual problems are feasible, then they both have optimal solution such that the value of their objective functions are equal.

The solution of dual also comments about the activeness of a constraint in the primal problem as an equality. For example, if the solution of dual is $[0,5,0]$, then the second constraint is active as an equality.

**Complementary Slackness Theorem**

For any symmetric primal-dual problem, any feasible solution $x_{0}$ and $y_{0}$ are optimal to their respective problems if and only if

$$
(y_{0}\,A-c)\,x_{0} + y_{0}\,(b-A\,x_{0}) = 0
$$


*Applications:*
1. Used in finding an optimal primal solution from the given dual solution and vice versa.
2. Used in verifying whether a feasible solution is optimal for the primal problem.


**Asymmetric Primal-Dual Problems**

The asymmetric primal problem is converted to a symmetric problem using manipulations and introduction of new variables. Then, the above properties can be applied.

To solve primal-dual problems, [[Dual Simplex Method]] is used. When using the [[Revised Simplex Method]] to solve the primal, the optimal solution to the dual is given as 

$$
y_{0} = c_{B}\,[B]^{-1}
$$
Where $c_{B}$ is the coefficient vector of the basis variables whereas $[B]$ is the optimal basis matrix.




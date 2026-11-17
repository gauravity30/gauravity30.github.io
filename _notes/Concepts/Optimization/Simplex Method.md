---
title: Simplex Method
publish: true
category: Concepts/Optimization
render_with_liquid: false
---

# Simplex Method 
*Created on:* {{date}}  
*Tags:* #concept
*Course:* [[Optimization]]

---
## Definition

*Simplex method* is an iterative procedure for solving linear programming problems expressed in standard form.

**Requirements for standard and canonical form**
- RHS should be positive.
- All constraints should be an equality.
- All variable bounds should be greater than or equal to zero.

**Slack Variables**
- For $\le$ constraint, add slack variables to the equation.
- For $\ge$ constraint, subtract slack variables to the equation.

**Artificial Variables**
- For maximization problem, *subtract* the artificial variable.
- For minimization problem, *add* the artificial variable. 

**Optimality Condition:** A basic feasible solution is optimal if the relative profits of its non-basic variables are 

- In case of *Maximization* --> *Negative or Zero*
- In case of *Minimization* --> *Positive or Zero*

*Relative Profit* $\mathbf{\bar{c}}$ is given by the following formula,

$$
\bar{C}_{j} = C_{j} - [C_{B}\,\, \cdot\,\, \text{Column corresponding to } x_{j}]
$$
**Minimum Ratio Rule**
The constraints in which the non-basic variable has a positive coefficient, the value of $\theta$ is given as the ratio of the RHS to that of the positive coefficient, otherwise the value of $\theta$ is equal to $\infty$.

**Algorithm**

1. Express the problem in standard form.
2. Start with an initial basic feasible solution in canonical form and setup the initial tableau. 
3. Use the inner product rule to find the relative profit coefficients.
4. If all the $\bar{C}_{j}$ coefficients are non-positive (in case of maximization), the current solution is optimal. Otherwise, select the non-basic variable with the most positive $\bar{C}_{j}$ value to enter the basis.
5. Apply the minimum ratio rule to determine the basic variable to leave the basis.
6. Perform the pivot operation to get the new tableau and the basic feasible solution.
7. Compute the relative profit coefficients. Return to Step 4.

### Possible Solution Cases

1. **Unique Optimal Feasible**: $C_{j} - Z_{j} = 0$ for all basis variables.
2. **Multiple Optimal Feasible:** Net improvement of the non-basic variables is 0 in the optimal simplex table.
3. **Infeasible Solution:** If the final optimal table has an artificial variable in the basis vector.
4. **Unbounded Solution:** In an simplex table which is an non-optimal, there is an entering variable but no leaving variable.
5. **Degeneracy:** Tie between values of $\theta$.


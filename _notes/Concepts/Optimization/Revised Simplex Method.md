---
title: Revised Simplex Method
publish: true
category: Concepts/Optimization
render_with_liquid: false
---

# Revised Simplex Method 
*Created on:* 2024-12-08  
*Tags:* #RevisedSimplexMethod
*Course:* [[Optimization]]

---
## Definition

*Revised simplex method is the matrix based implementation of the simplex method which is used in all commercial computer codes.*

### Algorithm

1. **Formulate the problem in standard form**:
    - Convert all inequalities into equations using slack variables.
    - Ensure all variables are non-negative.
2. **Initialize**:
    - Identify the **basis matrix** $B$ from the basic variables and its inverse $B^{-1}$.
3. **Compute the current solution**:
    - Compute the basic solution: $x_{B} = B^{-1} \mathbf{b}$
    - Check feasibility ($\mathbf{x}_B \ge 0$).
4. **Compute reduced costs**:
    - Compute the reduced costs for non-basic variables: $\mathbf{c}_j - \mathbf{c}_B^T B^{-1} \mathbf{P}_j$
    - If all reduced costs ($\mathbf{c}_j - \mathbf{c}_B^T B^{-1} \mathbf{P}_j$) are non-negative, the current solution is optimal.
5. **Choose entering variable**:
    - Select the non-basic variable with the most negative reduced cost to enter the basis.
6. **Compute direction vector**:
    - Compute the direction vector $\mathbf{d}$ : $\mathbf{d} = B^{-1} \mathbf{P}_j$
7. **Determine leaving variable**:
    - Compute the step size ($\theta$) for the basic variables. The variable corresponding to the minimum $\theta$ leaves the basis.
$$
\theta = \min \left( \frac{x_B}{\mathbf{d}} \right), \quad \text{for } \mathbf{d} > 0
$$
8. **Update the basis**:
    - Replace the leaving variable with the entering variable in the basis.
    - Update $B$ and $B^{-1}$.
9. **Repeat**:
    - Go back to Step 3 and iterate until optimality is achieved.
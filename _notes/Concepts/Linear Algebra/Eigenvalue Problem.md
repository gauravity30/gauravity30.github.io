---
title: Eigenvalue Problem
publish: true
category: Concepts/Linear Algebra
render_with_liquid: false
---

# Eigenvalue and Eigenvectors
*Created on:* 2024-12-21  
*Tags:* #Eigenvalues #Eigenvectors
*Course:* [[Linear Algebra]]

---
## Definition

A *Eigenvalue problem* is defined as 
$$
Ax = \lambda x
$$
Where
1. $A$ is a known square matrix of size $n\times n$.
2. $x$ is an unknown vector.
3. $\lambda$ are the eigenvalues or characteristic values which satisfy the above problem.
4. The values of $x$ corresponding to an eigenvalue is known as eigenvector.

The set of all the eigenvalues of $A$ is called the spectrum.

$$
(A-\lambda I)x = 0
$$
This is a homogenous problem and for trivial solutions of the problem,
$$
\det(A-\lambda I) = 0
$$
The above equation is known as the characteristic equation whose roots are the eigenvalues of the square matrix $A$.

## Properties

1. The transpose of any matrix A has the same eigenvalues as A.
2. The eigenvalues of a symmetric matrix are real.
3. The eigenvalues of a skew-symmetric matrix are pure imaginary or zero.
4. The eigenvalues of an orthogonal matrix are real or complex conjugate pairs and have absolute value 1.
5. 



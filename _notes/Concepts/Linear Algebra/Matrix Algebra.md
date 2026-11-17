---
title: Matrix Algebra
publish: true
category: Concepts/Linear Algebra
render_with_liquid: false
---

# Matrix Algebra
*Created on:* 2024-12-19  
*Tags:* #MatrixAlgebra
*Course:* [[Linear Algebra]]

---
## Definition

*Matrix* is a rectangular array of numbers (or functions) enclosed in brackets. These numbers are known as *elements/entries*.

*Square Matrix:* Matrices with equal number of rows and columns are known as square matrix.

All other matrices are known as *rectangular matrix*.

## Equality of Matrices

Two matrices are said to be *equal* i.e. $A=B$, if and only if they have the same size and the corresponding entries are equal. 

Matrices that are not equal are called *different*.

## Operations

1. **Addition:** The sum $a+b$ is obtained by adding the corresponding components of two matrix $a$ and $b$ with same size.
2. **Multiplication by Scalar Number:** All the components of a matrix is multiplied by a scalar number.
3. **Multiplication:** The product of a $m\times n$ matrix $A$ and a $r\times p$ matrix $B$ is defined if and only if $r=n$ and is then the $m\times p$ matrix $C$ with entries
$$
C = AB = \sum_{l=1}^n a_{jl}b_{lk}
$$


**Matrix Multiplication is not commutative.**


**Transposition:** The transpose of a $m\times n$ matrix A is the $n\times m$ matrix $A^T$ that has the first row of $A$ as its first column, the second row of $A$ as its second column and so on.

The transpose of $A^T$ is $A$.

### Special Matrices

1. **Symmetric Matrices:** Square matrices such that $A = A^T$ are known as symmetric matrices.
2. **Skew-Symmetric Matrices:** Square matrices such that $A^T = - A$ are known as skew-symmetric matrices. 
3. **Upper Triangular Matrices:** Square matrices that have non-zero entries only on and above the main diagonal, whereas any entry below the diagonal must be zero.
4. **Lower Triangular Matrices:** Square matrices that have non-zero entries only on and below the main diagonal, whereas any entry above the diagonal must be zero.
5. **Diagonal Matrices:** Square matrices that have non-zero entries only on the main diagonal whereas rest all entries are zero.
6. **Identity Matrix:** A diagonal matrix where all the diagonal entries are equal to 1 represented as $I$. Multiplication with the identity matrix returns the matrix itself.
$$
A I = I A = A
$$

7. **Orthogonal Matrix:** If the transposition gives the inverse of $A$, then the matrix $A$ is known as orthogonal matrix.
$$
A^T = A^{-1}
$$
## Determinants

A determinant of order n is a scalar associated with a $n\times n$ matrix which is written as 

$$
D = \det \mathbf{A} = \begin{vmatrix}
a_{11} & a_{12} & \dots & a_{1n}\\
a_{21} & a_{22} & \dots & a_{2n} \\
. & . & \dots & .\\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{vmatrix}
$$

$$
D = \sum^n_{k=1} (-1)^{j+k} a_{jk}M_{jk} = \sum^n_{j=1} (-1)^{j+k} a_{jk}M_{jk}
$$
$M_{jk}$ is the minor of $a_{jk}$ which is the determinant of order n-1.


1. Interchange of two rows multiplies the value of the determinant by -1.
2. Addition of a multiple of a row to another row does not alter the value of the determinant.
3. Multiplication of a row by a nonzero constant $C$ multiplies the value of the determinant by $C$.
4. Transposition leaves the value of determinant unaltered.
5. A zero row or column renders the value of a determinant zero.
6. Proportional rows or columns render the value of a determinant zero.

## Inverse of a Matrix

The inverse of an $n\times n$ matrix $A$ is denoted as $A^{-1}$ and is an $n\times n$ matrix such that
$$
AA^{-1} = A^{-1}A = I
$$

$$
A^{-1} = \frac{1}{\det A} [C_{jk}]^T
$$

$C_{jk}$ is the cofactor of $a_{jk}$ and equals to $(-1)^{j+k} M_{jk}$.

For a $2\times2$ matrix,
$$
A^{-1} = \frac{1}{\det A}
\begin{bmatrix}
a_{22} & -a_{12} \\
-a_{21} & a_{11}
\end{bmatrix}
$$

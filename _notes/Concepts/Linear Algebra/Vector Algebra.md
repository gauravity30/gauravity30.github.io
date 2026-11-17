---
title: Vector Algebra
publish: true
category: Concepts/Linear Algebra
render_with_liquid: false
---

# Vector Algebra
*Created on:* 2024-12-18  
*Tags:* #VectorAlgebra
*Course:* [[Linear Algebra]]

---
## Definition

[Matrices](Matrix%20Algebra.md) having just a single row or column are called vectors.
1. Matrix with one row is known as row vector.
2. Matrix with one column is known as column vector.

## Operations

1. **Addition:** The sum $a+b$ is obtained by adding the corresponding components of two vectors $a$ and $b$ with same size.
2. **Multiplication by Scalar Number:** All the components of a vector is multiplied by a scalar number.
3. **Multiplication:** The multiplication between vectors is governed by the matrix multiplication rules.


### Linear Independence and Dependence of Vectors

A set of vectors $a_i$ are linearly independent if the linear combination
$$
\sum_{i=1}^n c_{i} a_{i} = 0
$$
only when $c_{i}=0$ for all $i\in\{1,2,3,\dots n\}$

Otherwise, the set of vectors are linear dependent.

### Vector Space

Vector space is a set of vectors whose elements obey closure under addition and multiplication by scalar, i.e.

1. **Closure under Addition:** If $a$ and $b$ are vectors and members of set $V$, then $a+b$ is also a member of the set $V$.
1. **Closure under Multiplication by scalar:** If $a$ is vectors and member of set $V$, then $ca$ is also a member of the set $V$ where $c$ is a scalar number.

A vector space can be made of *vectors*, *matrices*, and *functions*.

#### Properties of Vector Space

1. **Vector Addition**
	1. Commutativity
	2. Associativity
	3. Existence of identity vector.
	4. Existence of additive inverse
2. **Scalar Multiplication**
	1. Distributivity
	2. Associativity
	3. Existence of multiplicative inverse

#### Basis

**Basis** is a subset of a vector space $V$ that satisfy the following properties,

1. *Linear Independence:* The basis vectors are linearly independent and cannot be written as a linear combination of the other basis vectors.
2. *Span:* Any vector $v \in V$ can be written as a linear combination of the basis vectors.

The number of vectors in the basis is known as the *dimension* of the vector space $V$.

A basis is not unique and more than one basis can exist for a vector space $V$.


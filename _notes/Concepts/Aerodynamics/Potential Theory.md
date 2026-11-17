---
title: Potential Theory
publish: true
category: Concepts/Aerodynamics
render_with_liquid: false
---

# Potential Theory
*Created on:* 2025-01-10  
*Tags:* #PotentialTheory
*Course:* [[Aerodynamics]]

---
## Potential Function

If the viscous effects are neglected, low speed floes are irrotational i.e. $\nabla \times V=0$, and the velocity potential $\phi$ exists such that 
$$
V = \nabla \phi
$$
Thus, the continuity equation reduces to a Laplace equation in terms of $\phi$.
$$
\nabla ^2 \phi = 0
$$
And the momentum equation reduces to Bernoulli's equation:

**Boundary Conditions:**

1. Outer boundaries are known free-stream conditions.
2. Solid Surface: No velocity normal to the boundary at the body surface i.e. $\frac{\partial\phi}{\partial n} = 0$.


## Stream Function

For two-dimensional flows, the stream function also exists as an alternate approach.
$$
u = \frac{\partial\psi}{\partial y}\,\,\, v = - \frac{\partial\psi}{\partial x}
$$
The condition of irrotationality reduces to a Laplace equation in terms of $\psi$.
$$
\frac{\partial^2\psi}{\partial x^2} + \frac{\partial^2\psi}{\partial y^2} = 0
$$
**Boundary Conditions:**
1. Free Stream: Known
2. Solid Surface: $\psi_{body}=Const$ 


## Elementary Flows

### Uniform Stream in the x-direction

A uniform stream $V=U\hat{i}$ possesses both a stream function and a velocity potential.
$$\psi=Uy\,\,\,\,\, \phi=Ux$$

### Source/Sink at the origin

A thin-pipe manifold through which fluid issued at total rate $Q$ uniformly along its length $b$.

$v_{r} = \frac{Q}{2\pi rb} = \frac{m}{r} = \frac{1}{r} \frac{\partial\psi}{\partial \theta} = \frac{\partial\phi}{\partial r}$ and $v_{\theta} = 0$

$$
\psi = m\theta\,\,\,\,\, \phi=m \ln r
$$
Where $m=\frac{Q}{2\pi b}$ is a constant, positive for a source while negative for a sink.

### Irrotational Vortex

$v_{r} = 0$ and $v_{\theta}=\frac{K}{r} = -\frac{\partial\psi}{\partial r} = \frac{1}{r} \frac{\partial\phi}{\partial \theta}$

Integrating we get
$$
\psi = -K\ln(r)\,\,\,\,\,\, \phi = K\theta
$$

## Superposition: Source + Sink

- Source +m placed at $(-a,0)$ .
- Sink -m placed at $(a,0)$.

$$
\psi = \psi_{source} + \psi_{sink} = m\left( \tan^{-1}\frac{y}{x+a} - \tan^{-1}\frac{y}{x-a}\right)
$$
## Superposition: Uniform Stream + Sink

$$\psi = Ur\sin(\theta) + m\theta$$

- Setting the relation equal to various constants can plotting the streamlines, we obtain a curved, roughly elliptical, half-body shape appears.
- The body is represented by $\psi= \pm \pi m$

Now, 
$$
v_{r} = \frac{1}{r} \frac{\partial\psi}{\partial \theta} = U\cos \theta + \frac{m}{r}
$$
$$
v_{\theta} = -\frac{\partial\psi}{\partial r} = -U\sin \theta
$$

At the stagnation point,

$$
v_{\theta}=0 \implies \sin \theta = 0 \implies \theta=0\,\text{or}\, \pi
$$
And 
$$
v_{r} = 0 \implies \pm U +\frac{m}{r} = 0 \implies r = \pm \frac{m}{U}
$$

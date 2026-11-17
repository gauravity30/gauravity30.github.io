---
title: Numerical Modelling
publish: true
category: Concepts/HPC
render_with_liquid: false
---

# Numerical Modelling 
*Created on:* 2025-02-07  
*Tags:* #NumericalModelling
*Course:* [[HPC]]

---
## Definition

- Usually some complex or not so complex phenomena needs to be studied.
- Analytical solutions are easily available or in most cases not achievable at all.
- What are the steps involved in numerical modelling ?
- Phenomena --> Governing Equations --> Numerical Modelling --> Computation.
- Error is introduced at each step.
- Accuracy of GDE + Accuracy of Numerical Method + Accuracy of computation overall determine the error.
- Balance of all the errors is required.
- Level of accuracy has to be set for various applications.
- Iterative linear algebra solver is more efficient.

## Is it that simple ?

- Each operations consists of a set of instructions which processor performs.
- One calculations are broken down into thousands of such instructions which are then executed.
- All these operations are basically hidden from the user.
- **Abstractions**: It helps us deal with complexity.
- Hides the lower-level detail.
- Instruction Set Architecture: An abstract interface between the hardware and the lowest level software of a machine.
	- Encompasses all the information necessary to write a machine language program that will run correctly, including instructions, registers, memory access. I/O.
	- Eg. X86, x86_64, ARM
- Application Binary Interface: The user portion of the instructions set plus the operating system interfaces used by application programmers.
- Defines a standard for binary portability across computers.



---
title: SIMD and SIMT
publish: true
category: Concepts/HPC
render_with_liquid: false
---

# SIMD and SIMT 
*Created on:* 2025-03-06  
*Tags:* #SIMD #SIMT
*Course:* [[HPC]]

---
## SIMD v/s SIMT


| SIMD                                     | SIMT                                    |
| ---------------------------------------- | --------------------------------------- |
| Single Instruction, Multiple Data        | Single Instruction, Multiple Threads    |
| Form of vector processing                | Form of multithreading                  |
| One thread operating on vector registers | Many threads each with their own state. |

- Both take advantage of data-level parallelism.


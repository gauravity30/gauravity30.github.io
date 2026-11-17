---
title: Large HPC Systems
publish: true
category: Concepts/HPC
render_with_liquid: false
---

# Large HPC Systems 
*Created on:* 2025-02-16  
*Tags:* #LargeHPCSystems
*Course:* [[HPC]]

---
## Definition

- Massively Parallel Processors
- Distributed memory at largest scale. Often shared memory at lower hierarchies.
- Fastest SC - Frontier

## Comparison of CPU v/s GPU

- A CPU has several very powerful ALU but seen as a single core.
- It as a large cache.
- CPUs can calculate very complicated calculations by themselves without breaking them down into sub-instructions.
- CPU works on SISD architecture whereas GPU operate on the SIMD architecture.
- GPUs have multiple lightweight CPUs which can perform a single simple task parallelly on multiple data.

**Analogy:** It is more effective to deliver Pizza's through light duty scooters rather than big trucks. Similarly effective to use several lightweight GPU processors for parallel tasks.

- Performance share of accelerators/GPU is increasing day-by-day.

## Frontier System 

- 9408 compute nodes across 74 cabinets.
- AMD 64-core 3rd generation CPUs
- AMD Intinct MI250X GPUs
- Connected through high-speed HPE Slingshot interconnect.
- 679 PB storage
- 

### Node Design

- 2x nodes per blade.
- Direct liquid cooled.
- 1 Shared Memory Machine
- Each node has
	- 1 CPU
	- 4 AMD GPU
	- 512 RAM
	- 512 GB High Bandwidth Memory
	- 2x 1.92 TB NVMe
	- 4x HPE Slingshot 200 GbE NICs

## AMD Instinct MI250X GPU

- 2 Graphics Compute Dies per GPU.
- Shown by OS as 2 GPUs/
- Effectively 8 GPU per node.
- 26.5 TFLOPs double-precision peak.
- 110 compute units.
- 64 GB of HBM
- 1.6 TB/s Memory Bandwidth


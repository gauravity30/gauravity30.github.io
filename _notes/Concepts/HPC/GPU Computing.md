---
title: GPU Computing
publish: true
category: Concepts/HPC
render_with_liquid: false
---

# GPU Computing 
*Created on:* 2025-03-04  
*Tags:* #GPU Computing
*Course:* [[HPC]]

---
## Definition

- Computing using GPUs or Graphical User Interface
- GPU Server = CPU Server + GPU (Connected through the PCIe slots).
- Peripheral Component Interconnect Express (PCIe) Slots
	- General Purpose, high speed interface standard
	- Use to connect various components like GPUs, storage, network cards, etc.
	- Universal Standard and Compatible with range of devices.
	- High latency due to general purpose design
- NVLink
	- High-speed interconnect technology developed by Nvidia.
	- Provides connectivity for GPU to GPU and GPU to CPU in their GPU architecture.
	- It was designed to overcome the issues related to PCIe.
	- Higher bandwidth, lower latency and more power efficient.
	- Removes the requirement of CPU for communication between GPUs

## Evolution of GPU

- Initially designed to work in combination with a CPU as accelerators and render graphics.
- Developed to produce more realistic graphics rendering
- Later programmability of the GPUs were introduced.
- Now, serve and support various diverse fields such as gaming, ML, etc.

## GPGPU v/s GPU

- GPGPU - General Purpose GPU can be used for purposes beyond graphical processing such as performing computations typically conducted by a CPU.
- GPU - A special-purpose device that supplements the main-purpose CPU to speed up certain operations.

## Types of GPU

- Integrated GPU: A graphics processor engine which is contained on the CPU. It uses CPU memory.
- Dedicated GPU: A GPU on a separate peripheral card. It has dedicated memory.

## Comparison between CPU v/s GPU

|                       |           **CPU**            |              **GPU**               |
| :-------------------: | :--------------------------: | :--------------------------------: |
|    **Clock Speed**    |             High             |                Low                 |
| **Cores and Threads** |        Few but faster        |          Many but slower           |
|     **Function**      | Handles main processing task | Specialized for parallel computing |
|    **Processing**     |      Serial instruction      |        Parallel Instruction        |
|    **Suited for**     |  General purpose computing   |     High-performance computing     |

## GPU FLOPs Calculation

- If the instructions are executed on FADD or FMUL then OPS/thread is 1 so FLOPs/cycle/SM is 64.
- If the instructions are executed on FMA then OPS/thread is 2 so FLOPs/cycle/SM is 128.
- The maximum FLOPs require all FP 32 instructions to be FMA. If only FADD or FMUL are executed then the code can at best achieve 50% of the maximum FLOPs.
$$
FLOPS_{Max} = \text{SMCount} \times \text{CUDACores/SM} \times 2 \text{FLOPS/CUDACore} \times \text{GPU Frequency}
$$



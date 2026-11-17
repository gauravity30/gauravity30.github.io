---
title: HPC
publish: true
category: Concepts/HPC
render_with_liquid: false
---

# High Performance Computing 
*Created on:* 2025-02-03  
*Tags:* #HPC
*Course:* [[HPC]]

---
## Basics

- Performance of supercomputers is measured using Floating point operations that it can perform in one second. 
- Represented as FLOPs.
- Benchmark - High Performance Linpack (HPL) by Top 500.
- The top supercomputer is Frontier system with an HPL score 1.206 EFlop/s.
- Computational study is the third leg of studying science.
- Science + Computer Science + Mathematics = Computational Science

## Definition

- High Performance Computing is a set of computing technologies uses for 
	- Very fast numeric simulation, modelling and data processing.
- It makes use of parallel processing for running advanced application programs.
- It is employed for specialized applications that require lot of mathematical calculations.
- It uses the available computer power to execute a few applications extremely fast.
- A supercomputer is a system that performs at or near the currently highest operational rate for computers.

## Parallel Computing

- Principle: Large problems can often by divided into smaller ones, which are then solved concurrently.
- Parallel Processing: Solving a task by making simultaneous use of multiple processing elements.
- Distributed Computing: Solving a task by simultaneous use of multiple processing elements, typically isolated and heterogeneous in nature.

## Components of a Supercomputer

- A popular architecture: Cluster
- Compute Nodes
- Accelerated Compute Nodes with GPUs
- Switch Fabric: High bandwidth, low latency data transfer
- Parallel File System: Storage Unit
- Backup Storage
- Boot Servers/Management Nodes
- Local Network --> Networking Gateway --> Login Nodes
- HPC Software Stack
	- OS: Linux (CentOS)
	- Middleware Applications and Management
		- Resource Management/Job Scheduling: Slurm
		- File System: Lustre/NFS
		- Provisioning: OpenHPC
		- Cluster Monitoring: Ganglia
	- HPC Programming Tools
		- Performance Monitoring
		- Development Tools: Intel Cluster Studio/GNU
		- Application Libraries: GRADS/Paraview/OpenMPI/Intel MPI

## Advantages

- Overcome limitations of single CPU systems.
- Sequential systems are slow.
- Sequential systems are small.
- Saves time and solves bigger problems.

## Making use of HPC

- A team of domain experts and computational experts is needed to develop a HPC application.
- Developing HPC aware software
	- Designing parallel algorithm
	- Writing parallel codes
	- Making use of parallel programming frameworks
- Making use of available applications and workflows
	- Open Source
	- Proprietary

## Desirable Attributes for Parallel Algorithms

- Concurrency
- Scalability
- Data Locality

## Frameworks for Parallel Programming

- OpenMP
	- Works for shared memory computers
	- Compiler Directive based
- MPI
	- Suited for distributed memory computers
	- Makes use of MPI libraries
- OpenACC
	- Used for computers with accelerators 
	- Compiler Directive based

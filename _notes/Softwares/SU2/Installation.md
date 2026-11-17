---
title: Installation
publish: true
category: Softwares/SU2
render_with_liquid: false
---

# Installation 
*Created on:* 2025-01-01 
*Tags:* #Installation
*Course:* [[SU2]]

---
## Steps in SU 2 installation with MPI:

### Step 1

```
$ wget https://github.com/su2code/SU2/archive/refs/tags/v8.1.0.tar.gz
$ tar -xvzf v8.1.0.tar.gz
$ cd SU2-8.1.0
```
### Step 2

```
$ export MPICC=/usr/bin/mpicc
 # (your path/to/mpicc may be different)
$ export MPICXX=/usr/bin/mpicxx
$ export CC=$MPICC
$ export CXX=$MPICXX
```
### Step 3
```
$ ./meson.py build -Dwith-mpi=enabled
$ sudo ./ninja -C build install -j 4
```
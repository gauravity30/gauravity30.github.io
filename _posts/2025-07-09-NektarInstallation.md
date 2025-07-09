---
layout: post
title: Installing Nektar++ on Linux Systems and HPC
date: 2025-07-08 16:40:16
description: An installation guide for Nektar++ Spectral/hp element framework on Linux systems and HPC clusters.
tags: Nektar++ HPC Linux
categories: Installation-Guide
---
## Installing Dependencies

`Boost`, `BLAS`, `LAPACK`, and `Scotch` are mandatory libraries required by Nektar++ along with `GCC` and `CMAKE`. You can check if these are already available on your HPC or system using:

```sh
module avail [library]
```

If they are available, you can load them using:

```sh
module load [library/version]
```

Otherwise, follow the steps below to install them on your system.

Create a folder `nektar-depend` where all the dependencies will be downloaded, extracted, and built. This keeps the home directory clean. All the libraries and Nektar++ will be installed in `$HOME/local`.

```sh
mkdir nektar-depend && cd nektar-depend
```

---

### Boost

- Download the source code and extract it:

```sh
wget https://archives.boost.io/release/1.88.0/source/boost_1_88_0.tar.gz
tar -xvzf boost_1_88_0.tar.gz
cd boost_1_88_0
```

- Configure the installation:

```sh
./bootstrap.sh --prefix=$HOME/local
```

- Install the code:

```sh
./b2 install
```

- Export the path to the installation directory. You can add this to your `.bashrc`:

```sh
export LD_LIBRARY_PATH=$HOME/local/lib:$LD_LIBRARY_PATH
export CPATH=$HOME/local/include:$CPATH
export LIBRARY_PATH=$HOME/local/lib:$LIBRARY_PATH
export PATH=$HOME/local/bin:$PATH
```

---

### BLAS and LAPACK

The OpenBLAS library provides support for both BLAS and LAPACK.

- Download and extract the source:

```sh
wget https://github.com/OpenMathLib/OpenBLAS/releases/download/v0.3.28/OpenBLAS-0.3.28.tar.gz
tar -xvzf OpenBLAS-0.3.28.tar.gz
cd OpenBLAS-0.3.28
```

- Install the code:

```sh
make -j4
make install PREFIX=$HOME/local
```

---

### Scotch

- Download and extract the source:

```sh
wget https://gitlab.inria.fr/scotch/scotch/-/archive/v7.0.7/scotch-v7.0.7.tar.gz
tar -xvzf scotch-v7.0.7.tar.gz
cd scotch-v7.0.7
```

- Create a build directory:

```sh
mkdir build && cd build
```

- Configure the installation:

```sh
cmake .. -DCMAKE_INSTALL_PREFIX=$HOME/local -DCMAKE_POSITION_INDEPENDENT_CODE=ON -DCMAKE_C_FLAGS="-fPIC" -DCMAKE_CXX_FLAGS="-fPIC"
```

- Install the code:

```sh
make -j4 prefix=$HOME/local
make install
```

---

### ARPACK

ARPACK is required for Linear Stability analysis in Nektar++. It depends on `BLAS` and `LAPACK`, so make sure they are installed.

> **Note:**  
> This library is **mandatory** for the Linear Stability Solver of Nektar++. Enable `NEKTAR_USE_ARPACK` during Nektar++ configuration.

- Download and extract the source:

```sh
wget https://github.com/opencollab/arpack-ng/archive/refs/tags/3.9.1.tar.gz
tar -xvzf 3.9.1.tar.gz
cd arpack-ng-3.9.1
```

- Create a build directory:

```sh
mkdir build && cd build
```

- Configure and install:

```sh
cmake -DEXAMPLES=ON -DMPI=ON -DBUILD_SHARED_LIBS=ON -DCMAKE_INSTALL_PREFIX:PATH=$HOME/local ..
make
make install
```

---

### OpenCascade (OCCT)

OpenCascade is required for mesh generation and optimization in Nektar++. It is **optional** if you disable `NEKTAR_USE_MESHGEN`.

> **Note:**  
> You may skip this if you do not require mesh generation features.

- Install OCCT dependencies:

```sh
sudo apt update && sudo apt install -y \
    build-essential cmake git \
    freeglut3-dev libx11-dev libxext-dev \
    libxt-dev libgl1-mesa-dev libglu1-mesa-dev \
    libfreetype6-dev libtbb-dev \
    libxmu-dev libxi-dev \
    libpng-dev libglfw3-dev \
    libeigen3-dev libfontconfig1-dev
```

- Download and extract the source:

```sh
wget https://github.com/Open-Cascade-SAS/OCCT/archive/refs/tags/V7_9_1.tar.gz
tar -xvzf V7_9_1.tar.gz && cd OCCT-7_9_1
```

- Create a build directory:

```sh
mkdir build && cd build
```

- Configure the build:

```sh
cmake .. \
  -DCMAKE_INSTALL_PREFIX=$HOME/local \
  -DBUILD_MODULE_Draw=OFF \
  -DBUILD_MODULE_ApplicationFramework=ON \
  -DBUILD_MODULE_DataExchange=ON \
  -DBUILD_MODULE_ModelingData=ON \
  -DBUILD_MODULE_ModelingAlgorithms=ON \
  -DBUILD_MODULE_Visualization=ON \
  -DCMAKE_BUILD_TYPE=Release
```

- Install the library:

```sh
make -j4 install
```

---

## Installing Nektar++

### Download and extract the source:

```sh
wget https://www.nektar.info/src/nektar%2B%2B-5.8.0.tar.gz
tar -xvzf nektar++-5.8.0.tar.gz
```

### Create the build directory:

```sh
cd nektar-v5.8.0 && mkdir -p build && cd build
```

---

### Configure the installation

Initialize the configuration. This enforces the location of dependencies.

```sh
cmake .. \
  -DCMAKE_PREFIX_PATH=$HOME/local \
  -DCMAKE_LIBRARY_PATH=$HOME/local/lib:$HOME/local/lib64 \
  -DCMAKE_INCLUDE_PATH=$HOME/local/include \
  -DCMAKE_INSTALL_PREFIX=$HOME/local/nektar \
  -DCMAKE_C_COMPILER=gcc \
  -DCMAKE_CXX_COMPILER=g++ \
  -DCMAKE_CXX_STANDARD=17 \
  -DCMAKE_CXX_FLAGS="-std=c++17" \
  -DMPI_C_COMPILER=mpicc \
  -DMPI_CXX_COMPILER=mpicxx \
  -DNEKTAR_USE_MPI=ON
```

Modify the configuration:

```sh
ccmake ../
```

- Press `c` to configure.
- Enable or disable solvers prefixed with `NEKTAR_BUILD_`.
- Enable optional libraries prefixed with `NEKTAR_USE_`.
- Press `c` again to configure.
- Press `g` to generate makefiles.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cmake.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    CMake GUI used for configuring the installation.
</div>


---

### Compile the code:

```sh
make -j4 install
```

---

### Add Nektar++ to PATH

After installation, add the `bin` and `lib64` folders to your environment variables:

```sh
export PATH=$PATH:$HOME/local/nektar/bin
export LD_LIBRARY_PATH=$HOME/local/nektar/lib64:$LD_LIBRARY_PATH
```

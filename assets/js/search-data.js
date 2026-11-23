// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blogs/index.html";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Some of the repositories I’ve contributed to over the past few years include open-source computational fluid dynamics codes/softwares.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-notes",
          title: "Notes",
          description: "A growing collection of ideas, connected through notes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notes/";
          },
        },{id: "post-installing-nektar-on-linux-systems-and-hpc",
        
          title: "Installing Nektar++ on Linux Systems and HPC",
        
        description: "An installation guide for Nektar++ Spectral/hp element framework on Linux systems and HPC clusters.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/NektarInstallation/";
          
        },
      },{id: "notes-conceptual-design",
          title: 'Conceptual Design',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/AVD/Aircraft%20Design/Conceptual%20Design/";
            },},{id: "notes-design-phases",
          title: 'Design Phases',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/AVD/Aircraft%20Design/Design%20Phases/";
            },},{id: "notes-preliminary-design",
          title: 'Preliminary Design',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/AVD/Aircraft%20Design/Preliminary%20Design/";
            },},{id: "notes-tail-design",
          title: 'Tail design',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/AVD/Aircraft%20Design/Tail%20design/";
            },},{id: "notes-wing-design",
          title: 'Wing design',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/AVD/Aircraft%20Design/Wing%20design/";
            },},{id: "notes-booster-stage",
          title: 'Booster Stage',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/AVD/Launch%20Vehicle/Booster%20Stage/";
            },},{id: "notes-equations-of-motion",
          title: 'Equations of Motion',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/AVD/Launch%20Vehicle/Equations%20of%20Motion/";
            },},{id: "notes-optimal-staging",
          title: 'Optimal Staging',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/AVD/Launch%20Vehicle/Optimal%20Staging/";
            },},{id: "notes-restricted-staging",
          title: 'Restricted Staging',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/AVD/Launch%20Vehicle/Restricted%20Staging/";
            },},{id: "notes-velocity-requirement",
          title: 'Velocity Requirement',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/AVD/Launch%20Vehicle/Velocity%20Requirement/";
            },},{id: "notes-airfoil-nomenclature",
          title: 'Airfoil Nomenclature',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Airfoil%20Nomenclature/";
            },},{id: "notes-boundary-layer",
          title: 'Boundary Layer',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Boundary%20Layer/";
            },},{id: "notes-compressible-flow",
          title: 'Compressible Flow',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Compressible%20Flow/";
            },},{id: "notes-conservation-laws",
          title: 'Conservation Laws',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Conservation%20Laws/";
            },},{id: "notes-critical-and-drag-divergence",
          title: 'Critical and Drag Divergence',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Critical%20and%20Drag%20Divergence/";
            },},{id: "notes-dimensional-analysis",
          title: 'Dimensional Analysis',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Dimensional%20Analysis/";
            },},{id: "notes-elementary-viscous-flows",
          title: 'Elementary Viscous Flows',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Elementary%20Viscous%20Flows/";
            },},{id: "notes-expansion-waves",
          title: 'Expansion Waves',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Expansion%20Waves/";
            },},{id: "notes-fanno-flow",
          title: 'Fanno Flow',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Fanno%20Flow/";
            },},{id: "notes-finite-wing",
          title: 'Finite Wing',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Finite%20Wing/";
            },},{id: "notes-kutta-joukoswki-theorem",
          title: 'Kutta-Joukoswki Theorem',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Kutta-Joukoswki%20Theorem/";
            },},{id: "notes-lift-drag-and-moment",
          title: 'Lift, Drag and Moment',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Lift,%20Drag%20and%20Moment/";
            },},{id: "notes-lifting-line-theory",
          title: 'Lifting Line Theory',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Lifting%20Line%20Theory/";
            },},{id: "notes-oblique-shocks",
          title: 'Oblique Shocks',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Oblique%20Shocks/";
            },},{id: "notes-one-dimensional-flow",
          title: 'One-dimensional Flow',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/One-dimensional%20Flow/";
            },},{id: "notes-potential-theory",
          title: 'Potential Theory',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Potential%20Theory/";
            },},{id: "notes-rayleigh-flow",
          title: 'Rayleigh Flow',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Rayleigh%20Flow/";
            },},{id: "notes-thin-airfoil-theory",
          title: 'Thin Airfoil Theory',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aerodynamics/Thin%20Airfoil%20Theory/";
            },},{id: "notes-axial-compressor",
          title: 'Axial Compressor',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Airbreathing%20Propulsion/Axial%20Compressor/";
            },},{id: "notes-brayton-cycle",
          title: 'Brayton Cycle',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Airbreathing%20Propulsion/Brayton%20Cycle/";
            },},{id: "notes-ramjet",
          title: 'Ramjet',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Airbreathing%20Propulsion/Ramjet/";
            },},{id: "notes-thermochemistry",
          title: 'Thermochemistry',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Airbreathing%20Propulsion/Thermochemistry/";
            },},{id: "notes-thrust",
          title: 'Thrust',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Airbreathing%20Propulsion/Thrust/";
            },},{id: "notes-turbofan",
          title: 'Turbofan',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Airbreathing%20Propulsion/Turbofan/";
            },},{id: "notes-turbojet-engine",
          title: 'Turbojet Engine',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Airbreathing%20Propulsion/Turbojet%20Engine/";
            },},{id: "notes-turboprop",
          title: 'Turboprop',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Airbreathing%20Propulsion/Turboprop/";
            },},{id: "notes-turboshaft",
          title: 'Turboshaft',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Airbreathing%20Propulsion/Turboshaft/";
            },},{id: "notes-bending",
          title: 'Bending',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aircraft%20Structures/Bending/";
            },},{id: "notes-characteristics",
          title: 'Characteristics',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aircraft%20Structures/Characteristics/";
            },},{id: "notes-shear-in-aircraft-structures",
          title: 'Shear in Aircraft Structures',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aircraft%20Structures/Shear%20in%20Aircraft%20Structures/";
            },},{id: "notes-torsion",
          title: 'Torsion',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Aircraft%20Structures/Torsion/";
            },},{id: "notes-barophiles",
          title: 'Barophiles',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Barophiles/";
            },},{id: "notes-biosignatures",
          title: 'Biosignatures',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Biosignatures/";
            },},{id: "notes-endosymbiotic-theory",
          title: 'Endosymbiotic Theory',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Endosymbiotic%20Theory/";
            },},{id: "notes-extremophiles",
          title: 'Extremophiles',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Extremophiles/";
            },},{id: "notes-mars",
          title: 'Mars',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Mars/";
            },},{id: "notes-moon",
          title: 'Moon',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Moon/";
            },},{id: "notes-origin-of-earth",
          title: 'Origin of Earth',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Origin%20of%20Earth/";
            },},{id: "notes-origin-of-life",
          title: 'Origin of Life',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Origin%20of%20Life/";
            },},{id: "notes-planets",
          title: 'Planets',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Planets/";
            },},{id: "notes-plate-tectonics",
          title: 'Plate Tectonics',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Plate%20Tectonics/";
            },},{id: "notes-prokaryotes-and-eukaryotes",
          title: 'Prokaryotes and Eukaryotes',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Prokaryotes%20and%20Eukaryotes/";
            },},{id: "notes-space-biology",
          title: 'Space Biology',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Space%20Biology/";
            },},{id: "notes-thermophiles",
          title: 'Thermophiles',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Thermophiles/";
            },},{id: "notes-tree-of-life",
          title: 'Tree of Life',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Astrobiology/Tree%20of%20Life/";
            },},{id: "notes-cfd-benchmark-problems",
          title: 'CFD Benchmark Problems',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/CFD%20Benchmark%20Problems/";
            },},{id: "notes-cfd-boundary-conditions",
          title: 'CFD Boundary Conditions',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/CFD%20Boundary%20Conditions/";
            },},{id: "notes-cfd-concepts",
          title: 'CFD Concepts',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/CFD%20Concepts/";
            },},{id: "notes-compressible-fluxes-and-shocks",
          title: 'Compressible Fluxes and Shocks',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/Compressible%20Fluxes%20and%20Shocks/";
            },},{id: "notes-consistency-stability-and-convergence",
          title: 'Consistency Stability and Convergence',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/Consistency%20Stability%20and%20Convergence/";
            },},{id: "notes-convection-diffusion-schemes",
          title: 'Convection Diffusion Schemes',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/Convection%20Diffusion%20Schemes/";
            },},{id: "notes-finite-difference-stencils",
          title: 'Finite Difference Stencils',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/Finite%20Difference%20Stencils/";
            },},{id: "notes-finite-volume-flux-balance",
          title: 'Finite Volume Flux Balance',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/Finite%20Volume%20Flux%20Balance/";
            },},{id: "notes-governing-equations-of-cfd",
          title: 'Governing Equations of CFD',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/Governing%20Equations%20of%20CFD/";
            },},{id: "notes-les-dns-and-hybrid-methods",
          title: 'LES DNS and Hybrid Methods',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/LES%20DNS%20and%20Hybrid%20Methods/";
            },},{id: "notes-pde-type-and-characteristics",
          title: 'PDE Type and Characteristics',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/PDE%20Type%20and%20Characteristics/";
            },},{id: "notes-pressure-velocity-coupling",
          title: 'Pressure Velocity Coupling',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/Pressure%20Velocity%20Coupling/";
            },},{id: "notes-rans-and-turbulence-closure",
          title: 'RANS and Turbulence Closure',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/RANS%20and%20Turbulence%20Closure/";
            },},{id: "notes-sparse-linear-systems-in-cfd",
          title: 'Sparse Linear Systems in CFD',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/Sparse%20Linear%20Systems%20in%20CFD/";
            },},{id: "notes-time-integration-and-diffusion",
          title: 'Time Integration and Diffusion',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/CFD/Time%20Integration%20and%20Diffusion/";
            },},{id: "notes-application-of-integrals",
          title: 'Application of Integrals',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Application%20of%20Integrals/";
            },},{id: "notes-continuity",
          title: 'Continuity',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Continuity/";
            },},{id: "notes-differentiability",
          title: 'Differentiability',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Differentiability/";
            },},{id: "notes-directional-derivatives",
          title: 'Directional Derivatives',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Directional%20Derivatives/";
            },},{id: "notes-divergence-and-curl",
          title: 'Divergence and Curl',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Divergence%20and%20Curl/";
            },},{id: "notes-extremas",
          title: 'Extremas',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Extremas/";
            },},{id: "notes-functions",
          title: 'Functions',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Functions/";
            },},{id: "notes-gradient",
          title: 'Gradient',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Gradient/";
            },},{id: "notes-integration",
          title: 'Integration',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Integration/";
            },},{id: "notes-limits",
          title: 'Limits',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Limits/";
            },},{id: "notes-mean-value-theorem",
          title: 'Mean Value Theorem',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Mean%20Value%20Theorem/";
            },},{id: "notes-partial-derivatives",
          title: 'Partial Derivatives',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Partial%20Derivatives/";
            },},{id: "notes-theorems",
          title: 'Theorems',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Calculus/Theorems/";
            },},{id: "notes-higher-order-ode",
          title: 'Higher Order ODE',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Differential%20Equations/Higher%20Order%20ODE/";
            },},{id: "notes-ode",
          title: 'ODE',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Differential%20Equations/ODE/";
            },},{id: "notes-pde",
          title: 'PDE',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Differential%20Equations/PDE/";
            },},{id: "notes-2-dof-systems",
          title: '2-DOF Systems',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Dynamics/2-DOF%20Systems/";
            },},{id: "notes-single-degree-system",
          title: 'Single-degree System',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Dynamics/Single-degree%20System/";
            },},{id: "notes-vibration",
          title: 'Vibration',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Dynamics/Vibration/";
            },},{id: "notes-1d-bar-elements",
          title: '1D Bar elements',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/FEM/1D%20Bar%20elements/";
            },},{id: "notes-2d-elements",
          title: '2D Elements',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/FEM/2D%20Elements/";
            },},{id: "notes-eight-noded-quadrilateral",
          title: 'Eight-noded Quadrilateral',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/FEM/Eight-noded%20Quadrilateral/";
            },},{id: "notes-euler-bernoulli-beam-element",
          title: 'Euler-Bernoulli Beam Element',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/FEM/Euler-Bernoulli%20Beam%20Element/";
            },},{id: "notes-four-noded-quadrilateral",
          title: 'Four-noded Quadrilateral',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/FEM/Four-noded%20Quadrilateral/";
            },},{id: "notes-natural-coordinates",
          title: 'Natural Coordinates',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/FEM/Natural%20Coordinates/";
            },},{id: "notes-numerical-integration",
          title: 'Numerical Integration',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/FEM/Numerical%20Integration/";
            },},{id: "notes-quad4-structural-mechanics",
          title: 'Quad4 Structural Mechanics',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/FEM/Quad4%20Structural%20Mechanics/";
            },},{id: "notes-six-noded-triangle",
          title: 'Six-noded Triangle',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/FEM/Six-noded%20Triangle/";
            },},{id: "notes-three-noded-triangle",
          title: 'Three-noded Triangle',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/FEM/Three-noded%20Triangle/";
            },},{id: "notes-angles",
          title: 'Angles',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Angles/";
            },},{id: "notes-atmosphere",
          title: 'Atmosphere',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Atmosphere/";
            },},{id: "notes-classification",
          title: 'Classification',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Classification/";
            },},{id: "notes-configuration",
          title: 'Configuration',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Configuration/";
            },},{id: "notes-directional-lateral-stability",
          title: 'Directional Lateral Stability',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Directional%20Lateral%20Stability/";
            },},{id: "notes-flight-instruments",
          title: 'Flight Instruments',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Flight%20Instruments/";
            },},{id: "notes-forces",
          title: 'Forces',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Forces/";
            },},{id: "notes-orientation",
          title: 'Orientation',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Orientation/";
            },},{id: "notes-speeds",
          title: 'Speeds',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Speeds/";
            },},{id: "notes-stability",
          title: 'Stability',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Stability/";
            },},{id: "notes-static-stability",
          title: 'Static Stability',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Flight%20Mechanics/Static%20Stability/";
            },},{id: "notes-computing-architecture",
          title: 'Computing Architecture',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Computing%20Architecture/";
            },},{id: "notes-data-environment",
          title: 'Data Environment',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Data%20Environment/";
            },},{id: "notes-gpu-computing",
          title: 'GPU Computing',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/GPU%20Computing/";
            },},{id: "notes-hpc",
          title: 'HPC',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/HPC/";
            },},{id: "notes-irregular-parallelism",
          title: 'Irregular Parallelism',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Irregular%20Parallelism/";
            },},{id: "notes-large-hpc-systems",
          title: 'Large HPC Systems',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Large%20HPC%20Systems/";
            },},{id: "notes-linux-directory",
          title: 'Linux Directory',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Linux%20Directory/";
            },},{id: "notes-linux-kernel",
          title: 'Linux Kernel',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Linux%20Kernel/";
            },},{id: "notes-linux-process",
          title: 'Linux Process',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Linux%20Process/";
            },},{id: "notes-memory-systems",
          title: 'Memory Systems',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Memory%20Systems/";
            },},{id: "notes-memory-and-network",
          title: 'Memory and Network',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Memory%20and%20Network/";
            },},{id: "notes-need-for-parallel-computing",
          title: 'Need for Parallel Computing',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Need%20for%20Parallel%20Computing/";
            },},{id: "notes-numerical-modelling",
          title: 'Numerical Modelling',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Numerical%20Modelling/";
            },},{id: "notes-openmp-memory-model",
          title: 'OpenMP Memory Model',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/OpenMP%20Memory%20Model/";
            },},{id: "notes-openmp-programming",
          title: 'OpenMP Programming',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/OpenMP%20Programming/";
            },},{id: "notes-openmpi",
          title: 'OpenMPI',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/OpenMPI/";
            },},{id: "notes-operating-systems",
          title: 'Operating Systems',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Operating%20Systems/";
            },},{id: "notes-performance-analysis-frameworks",
          title: 'Performance Analysis Frameworks',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Performance%20Analysis%20Frameworks/";
            },},{id: "notes-simd-and-simt",
          title: 'SIMD and SIMT',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/SIMD%20and%20SIMT/";
            },},{id: "notes-shell-scripting",
          title: 'Shell Scripting',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Shell%20Scripting/";
            },},{id: "notes-synchronization",
          title: 'Synchronization',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/HPC/Synchronization/";
            },},{id: "notes-eigenvalue-problem",
          title: 'Eigenvalue Problem',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Linear%20Algebra/Eigenvalue%20Problem/";
            },},{id: "notes-matrix-algebra",
          title: 'Matrix Algebra',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Linear%20Algebra/Matrix%20Algebra/";
            },},{id: "notes-rank",
          title: 'Rank',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Linear%20Algebra/Rank/";
            },},{id: "notes-system-of-equations",
          title: 'System of Equations',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Linear%20Algebra/System%20of%20Equations/";
            },},{id: "notes-vector-algebra",
          title: 'Vector Algebra',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Linear%20Algebra/Vector%20Algebra/";
            },},{id: "notes-castigliano-39-s-theorem",
          title: 'Castigliano&amp;#39;s Theorem',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Castigliano's%20Theorem/";
            },},{id: "notes-column-buckling",
          title: 'Column Buckling',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Column%20Buckling/";
            },},{id: "notes-failure-theories",
          title: 'Failure Theories',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Failure%20Theories/";
            },},{id: "notes-hooke-39-s-law",
          title: 'Hooke&amp;#39;s Law',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Hooke's%20Law/";
            },},{id: "notes-mohr-39-s-circle",
          title: 'Mohr&amp;#39;s Circle',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Mohr's%20Circle/";
            },},{id: "notes-plane-stress-amp-strain-problem",
          title: 'Plane Stress &amp;amp; Strain Problem',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Plane%20Stress%20&%20Strain%20Problem/";
            },},{id: "notes-poisson-39-s-ratio",
          title: 'Poisson&amp;#39;s Ratio',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Poisson's%20Ratio/";
            },},{id: "notes-saint-venant-39-s-principle",
          title: 'Saint-Venant&amp;#39;s Principle',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Saint-Venant's%20Principle/";
            },},{id: "notes-stress-and-strain",
          title: 'Stress and Strain',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Stress%20and%20Strain/";
            },},{id: "notes-stress-strain-relationship",
          title: 'Stress-Strain Relationship',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Stress-Strain%20Relationship/";
            },},{id: "notes-thermal-strain",
          title: 'Thermal Strain',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Mechanics%20of%20Solid/Thermal%20Strain/";
            },},{id: "notes-branch-and-bound-method",
          title: 'Branch and Bound Method',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Branch%20and%20Bound%20Method/";
            },},{id: "notes-constrained-nlp",
          title: 'Constrained NLP',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Constrained%20NLP/";
            },},{id: "notes-dual-simplex-method",
          title: 'Dual Simplex Method',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Dual%20Simplex%20Method/";
            },},{id: "notes-duality-theory",
          title: 'Duality Theory',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Duality%20Theory/";
            },},{id: "notes-genetic-algorithm",
          title: 'Genetic Algorithm',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Genetic%20Algorithm/";
            },},{id: "notes-gomory-39-s-cutting-plane-method",
          title: 'Gomory&amp;#39;s Cutting Plane Method',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Gomory's%20Cutting%20Plane%20Method/";
            },},{id: "notes-integer-programming",
          title: 'Integer Programming',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Integer%20Programming/";
            },},{id: "notes-penalty-functions",
          title: 'Penalty Functions',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Penalty%20Functions/";
            },},{id: "notes-quadratic-programming",
          title: 'Quadratic Programming',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Quadratic%20Programming/";
            },},{id: "notes-revised-simplex-method",
          title: 'Revised Simplex Method',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Revised%20Simplex%20Method/";
            },},{id: "notes-simplex-method",
          title: 'Simplex Method',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Simplex%20Method/";
            },},{id: "notes-simulated-annealing",
          title: 'Simulated Annealing',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Optimization/Simulated%20Annealing/";
            },},{id: "notes-diversity-and-classification",
          title: 'Diversity and Classification',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Ornithology/Diversity%20and%20Classification/";
            },},{id: "notes-introduction",
          title: 'Introduction',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Ornithology/Introduction/";
            },},{id: "notes-characteristic-velocity",
          title: 'Characteristic Velocity',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Characteristic%20Velocity/";
            },},{id: "notes-combustion-chamber",
          title: 'Combustion Chamber',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Combustion%20Chamber/";
            },},{id: "notes-composite-modified-double-base",
          title: 'Composite modified double-base',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Composite%20modified%20double-base/";
            },},{id: "notes-composite-propellants",
          title: 'Composite propellants',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Composite%20propellants/";
            },},{id: "notes-cooling-of-thrust-chamber",
          title: 'Cooling of thrust chamber',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Cooling%20of%20thrust%20chamber/";
            },},{id: "notes-divergence-loss",
          title: 'Divergence Loss',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Divergence%20Loss/";
            },},{id: "notes-double-base",
          title: 'Double-base',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Double-base/";
            },},{id: "notes-efficiency",
          title: 'Efficiency',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Efficiency/";
            },},{id: "notes-exhaust-velocity",
          title: 'Exhaust Velocity',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Exhaust%20Velocity/";
            },},{id: "notes-high-energy-lp",
          title: 'High Energy LP',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/High%20Energy%20LP/";
            },},{id: "notes-hollow-cylindrical-grain",
          title: 'Hollow Cylindrical Grain',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Hollow%20Cylindrical%20Grain/";
            },},{id: "notes-hybrid-rockets",
          title: 'Hybrid Rockets',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Hybrid%20Rockets/";
            },},{id: "notes-ignition-system",
          title: 'Ignition System',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Ignition%20System/";
            },},{id: "notes-injector",
          title: 'Injector',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Injector/";
            },},{id: "notes-lp-rocket-engine",
          title: 'LP Rocket Engine',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/LP%20Rocket%20Engine/";
            },},{id: "notes-low-energy-lp",
          title: 'Low Energy LP',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Low%20Energy%20LP/";
            },},{id: "notes-mass-flow-rate",
          title: 'Mass Flow Rate',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Mass%20Flow%20Rate/";
            },},{id: "notes-mass-fraction",
          title: 'Mass Fraction',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Mass%20Fraction/";
            },},{id: "notes-medium-energy-lp",
          title: 'Medium Energy LP',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Medium%20Energy%20LP/";
            },},{id: "notes-mixture-ratio",
          title: 'Mixture Ratio',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Mixture%20Ratio/";
            },},{id: "notes-nitramine-propellants",
          title: 'Nitramine propellants',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Nitramine%20propellants/";
            },},{id: "notes-parameters-for-chemical-rockets",
          title: 'Parameters for Chemical Rockets',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Parameters%20for%20Chemical%20Rockets/";
            },},{id: "notes-propellant-feed-system",
          title: 'Propellant Feed System',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Propellant%20Feed%20System/";
            },},{id: "notes-propellant-grain-classification",
          title: 'Propellant Grain Classification',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Propellant%20Grain%20Classification/";
            },},{id: "notes-propellant-selection",
          title: 'Propellant Selection',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Propellant%20Selection/";
            },},{id: "notes-propulsive-efficiency",
          title: 'Propulsive Efficiency',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Propulsive%20Efficiency/";
            },},{id: "notes-rocket-equation",
          title: 'Rocket Equation',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Rocket%20Equation/";
            },},{id: "notes-rocket-thrust",
          title: 'Rocket Thrust',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Rocket%20Thrust/";
            },},{id: "notes-selection-criteria",
          title: 'Selection Criteria',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Selection%20Criteria/";
            },},{id: "notes-separation-in-nozzles",
          title: 'Separation in Nozzles',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Separation%20in%20Nozzles/";
            },},{id: "notes-specific-impulse",
          title: 'Specific Impulse',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Specific%20Impulse/";
            },},{id: "notes-staging",
          title: 'Staging',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Staging/";
            },},{id: "notes-thrust-coefficient",
          title: 'Thrust Coefficient',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Thrust%20Coefficient/";
            },},{id: "notes-types-of-nozzles",
          title: 'Types of Nozzles',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Types%20of%20Nozzles/";
            },},{id: "notes-types-of-propellants",
          title: 'Types of Propellants',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Rocket%20Propulsion/Types%20of%20Propellants/";
            },},{id: "notes-central-force-motion",
          title: 'Central Force Motion',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Space%20Dynamics/Central%20Force%20Motion/";
            },},{id: "notes-kepler-39-s-law",
          title: 'Kepler&amp;#39;s Law',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Space%20Dynamics/Kepler's%20Law/";
            },},{id: "notes-trajectory",
          title: 'Trajectory',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Concepts/Space%20Dynamics/Trajectory/";
            },},{id: "notes-filters",
          title: 'Filters',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/NEK5000/Filters/";
            },},{id: "notes-sem",
          title: 'SEM',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/NEK5000/SEM/";
            },},{id: "notes-2d-surface-extraction",
          title: '2D Surface Extraction',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/Paraview/2D%20Surface%20Extraction/";
            },},{id: "notes-coherent-structures",
          title: 'Coherent Structures',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/Paraview/Coherent%20Structures/";
            },},{id: "notes-geometry-cleanup",
          title: 'Geometry Cleanup',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/Pointwise/Geometry%20Cleanup/";
            },},{id: "notes-pointwise",
          title: 'Pointwise',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/Pointwise/Pointwise/";
            },},{id: "notes-quality",
          title: 'Quality',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/Pointwise/Quality/";
            },},{id: "notes-su2-export",
          title: 'SU2 Export',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/Pointwise/SU2%20Export/";
            },},{id: "notes-t-rex",
          title: 'T-Rex',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/Pointwise/T-Rex/";
            },},{id: "notes-code-overview",
          title: 'Code Overview',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/Code%20Overview/";
            },},{id: "notes-des",
          title: 'DES',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/DES/";
            },},{id: "notes-fvm",
          title: 'FVM',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/FVM/";
            },},{id: "notes-installation",
          title: 'Installation',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/Installation/";
            },},{id: "notes-residuals",
          title: 'Residuals',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/Residuals/";
            },},{id: "notes-sa-model",
          title: 'SA Model',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/SA%20Model/";
            },},{id: "notes-turbulence-modelling",
          title: 'Turbulence Modelling',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/Turbulence%20Modelling/";
            },},{id: "notes-unsteady-cfd",
          title: 'Unsteady CFD',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/Unsteady%20CFD/";
            },},{id: "notes-k-epsilon",
          title: 'k-Epsilon',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/k-Epsilon/";
            },},{id: "notes-k-omega",
          title: 'k-Omega',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/k-Omega/";
            },},{id: "notes-k-omegasst",
          title: 'k-OmegaSST',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/SU2/k-OmegaSST/";
            },},{id: "notes-commands",
          title: 'Commands',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Softwares/ffmpeg/Commands/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

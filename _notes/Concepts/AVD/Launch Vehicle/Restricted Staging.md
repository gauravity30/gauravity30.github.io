---
title: Restricted Staging
publish: true
category: Concepts/AVD/Launch Vehicle
render_with_liquid: false
---

# Restricted staging 
*Created on:* 2024-12-01 
*Tags:* #restrictedStaging
*Course:* [[AVD]]

---
## Definition
*Restricted staging relies on a simple and unrealistic assumption that each stage is equal i.e. the [[Mass Fraction]] ($n$), [[Specific Impulse]] ($V_{j}$), Payload Ratio $(\lambda)$ and Structural Ratio ($\varepsilon$) are same.*


The payload ratio for $i^{th}$ stage,
$$
\lambda_{i} = \frac{m_{PL,i}}{m_{p,i}+m_{s,i}}
$$

The structural ratio for the launch vehicle is defined as,
$$
\varepsilon = \frac{m_{s}}{m_{p} + m_{s}}
$$


For a n-stage launch vehicle, the mass fraction of each stage and the launch vehicle is given as

$$
n = \frac{m_{i}}{m_{f}} = \frac{1}{\varepsilon + \sqrt[n]{\Pi_{PL}}\,(1-\varepsilon)} 
$$

The change in velocity for a n-stage rocket from [[Velocity Requirement]],

$$
\Delta V = \sum_{k=1}^{n} V_{j,k} \ln(n_{k})
$$

Applying the restricted staging conditions, we get

$$
\Delta V = V_{j} \ln\left(\frac{1}{\varepsilon + \sqrt[n]{\Pi_{PL}}\,(1-\varepsilon)}\right)^n
$$

For infinite stages i.e. $n \to \infty$,

Taylor series of $a^{1/n}$ provides 

$$
\Pi_{PL}^{1/n} = 1 + \frac{1}{n} \ln(\Pi_{PL})
$$

$$
\Delta V =n V_{j} \ln\left(1 + \frac{1}{n} \ln(\Pi_{PL})\,(1-\varepsilon)\right)^{-1}
$$

Using binomial theorem,
$$
\Delta V =n V_{j} \ln\left(1 - \frac{1}{n} \ln(\Pi_{PL})\,(1-\varepsilon)\right)
$$

Using the expansion of ln (1-x), we have
$$
\Delta V =n V_{j} \left(-\frac{1}{n} \ln(\Pi_{PL})\,(1-\varepsilon)\right)
$$

$$
\Delta V = V_{j}\ln\left( \frac{1}{\Pi_{PL}} \right)\,(1-\varepsilon)
$$

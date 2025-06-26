---
description: |
  Overview of sampling techniques available in Tunny, their characteristics, and supported optimization types.
---

Tunny can utilize a number of sampling techniques.

The table below summarizes the optimizations supported by each sampler. Note
that Tunny's UI will automatically display the available methods depending on
the problem.

| Name            | Single-Objective | Multi-Objective | Constraints | Human-in-the-loop |
| --------------- | ---------------- | --------------- | ----------- | ----------------- |
| AUTO Sampler    | ✓                | ✓               | ✓           |                   |
|                 |                  |                 |             |                   |
| TPE             | ✓                | ✓               | ✓           | ✓                 |
| cTPE            | ✓                | ✓               | ✓           |                   |
| GP-Optuna       | ✓                |                 | ✓           |                   |
| GP-BoTorch      | ✓                | ✓               | ✓           |                   |
| GP-Preferential |                  |                 |             | ✓                 |
| HEBO            | ✓                |                 |             |                   |
|                 |                  |                 |             |                   |
| NSGA-II         | ✓                | ✓               | ✓           |                   |
| NSGA-III        | ✓                | ✓               | ✓           |                   |
| MOEA/D          |                  | ✓               |             |                   |
| DE              | ✓                |                 |             |                   |
|                 |                  |                 |             |                   |
| CMA-ES          | ✓                |                 |             |                   |
| MO-CMA-ES       |                  | ✓               |             |                   |
|                 |                  |                 |             |                   |
| Random          | ✓                | ✓               |             |                   |
| QMC             | ✓                | ✓               |             |                   |
| BruteForce      | ✓                | ✓               |             |                   |

The specific characteristics of each sampling technique are as follows

| Name            | Note                                                                             |
| --------------- | -------------------------------------------------------------------------------- |
| AUTO Sampler    | The appropriate sampler is automatically selected.                               |
|                 |                                                                                  |
| TPE             | Along with NSGA-II, it is a highly versatile method.                             |
| cTPE            | This is an enhanced version of TPE's constraint handling.                        |
| GP-Optuna       | It operates faster than GP-BoTorch.                                              |
| GP-BoTorch      | Highly flexible, but slow operation.                                             |
| GP-Preferential | Sampler designed exclusively for Human-in-the-loop.                              |
| HEBO            | Even problems with strong nonlinearities and multimodalities converge very fast. |
|                 |                                                                                  |
| NSGA-II         | It is a versatile method used by Wallacei and others.                            |
| NSGA-III        | It is a multi-objective(more than 3), enhanced version of the NSGA-II            |
| MOEA/D          | It is a specialized method for multi-objective optimization                      |
| DE              | Differential Evolution Algorithm.                                                |
|                 |                                                                                  |
| CMA-ES          | Converges fast when single objective.                                            |
| MO-CMA-ES       | Multi-objective version of CMA-ES                                                |
|                 |                                                                                  |
| Random          | Random sampling.                                                                 |
| QMC             | Samples low-discrepancy based on a sequence of numbers.                          |
| BruteForce      | Explore all variable combinations                                                |

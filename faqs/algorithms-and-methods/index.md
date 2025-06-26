---
description: |
  Frequently asked questions about Tunny's optimization algorithms and methods including Gaussian Process, Wallacei compatibility, and sampling techniques.
---

## There are two Bayesian optimization methods using Gaussian Process - "GP Optuna" and "GP BoTorch". What are the differences between them?

As its name suggests, GP BoTorch is implemented using BoTorch, a general-purpose
library for Bayesian optimization. While it's highly versatile and can be used
for multi-objective and constrained Bayesian optimization, it has the drawback
of being slow in execution.

GP Optuna is a Gaussian process method that has been reimplemented to work with
Optuna (Tunny) optimization. Although it cannot handle multi-objective
optimization, it can consider constraints and operates faster than GP BoTorch.

If you're not doing multi-objective Bayesian optimization, I recommend using GP
Optuna.

## How can I optimize for the same settings as Wallacei?

Wallacei uses the following algorithm

- Optimization method: NSGA-II
- Crossover: SBX crossover
- Mutation: Polynomial mutation

Tunny uses SBX crossover and Uniform mutation by default, so you can make the
same settings by changing the values from the settings section.

## Is it possible to sample without duplication?

Each sampler computes a search point determined by the optimization algorithm
without checking for duplicates, so it is not possible to optimize without
duplicates. However, it is possible to skip the computation of the objective
function in case of duplication.

If "Ignore Duplicate Sampling" is checked in the sampler's Other Settings Group,
the results of previous calculations will be referenced and registered in the
event of a duplication.

Note that a check will be made on each trial to see if there are any duplicates.
This check becomes more expensive as the number of trials increases.

## Latin Hypercube Sampling is not supported?

Instead of LHS, Tunny supports QMC. It is known that QMC samples more uniformly
than LHS for a smaller number of samples. See
[this paper](https://arxiv.org/abs/1505.02350) for more details.

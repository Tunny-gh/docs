---
description: |
  Frequently asked questions about multi-objective optimization, initial generation boosting, and UI operation issues in Tunny.
---

## If the multi-objective optimization is not converging well, is there anything I can do to improve it?

Tunny's NSGAII and TPE and GP can use initial individuals. Therefore, single
objective optimization can be done first for each of the objective functions,
and then the best combination of variables at that time used as the initial
individuals for multiobjective optimization, which may lead to faster
convergence.

## Is it possible to perform optimization by increasing the initial generation like Galapagos' "INITIAL BOOST"?

Tunny can restart the Study. When restarting, the optimization method can be
changed.

Thus, you can first sample the boosted portion of the random or QMC, and then
perform NSGAII with that as the initial generation.

## Tunny's UI freezes during optimization and I cannot press the STOP button even if I wanted to stop the optimization.

Create a file named “quit.fishing” in the ".tunny_env" (or ".tunny_dev_env" for
the development version) folder where Tunny-related files are located.

When Tunny recognizes the file, it will be deleted and optimization will stop on
the current trial.

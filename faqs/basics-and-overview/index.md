---
description: |
  Frequently asked questions covering Tunny basics including artifacts vs attributes, optimization method selection, result storage, and dashboard access.
---

## What's the difference between Artifacts and Attributes, since both add information to Trials?

Artifacts store the actual files, with only the file paths being linked to the
Trial

Attributes are stored directly in the Trial as string information

## There are many optimization methods - which one should I choose?

Since v1.0, Tunny has included `AutoSampler`, which automatically selects the
appropriate method. It's recommended to try this first.

## Where are the optimization results stored?

By default, the results are stored in the fish.log file on the desktop and the
artifacts in the artifacts folder. At the top of the UI you can see which path
log file is being used to save the results.

As optimization results accumulate, it will take longer to load the log file
when TunnyUI is launched. It is recommended that the log file be re-created to a
different one at regular intervals.

You can easily create a new results file or re-reference previous files from the
Quick Access at the top of the UI.

Please manage your results files so that they do not grow too large. Overly
large files can affect optimization performance.

## Can the dashboard be opened easily as I just want to check the results.

Click on Tunny in the menu bar at the top of the window, and you will see “Run
Optuna Dashboard...” in it.

Or use `TunnyRunDashboard` command in Rhino.

You can launch the dashboard from there.

## What is AUTO Sampler?

The AUTO sampler automatically selects sampling methods that performs above a
certain level, depending on the problem.

Note that this is not necessarily the best sampler, although it will produce a
certain level of performance.

For more information, check the following

[AutoSampler: Automatic Selection of Optimization Algorithms in Optuna](https://medium.com/optuna/autosampler-automatic-selection-of-optimization-algorithms-in-optuna-1443875fd8f9)

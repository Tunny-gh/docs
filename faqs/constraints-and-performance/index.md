---
description: |
  Frequently asked questions about Tunny's constraint handling, performance optimization, and trial failure management.
---

## Why are there trials that don't satisfy the constraints even though constraints were set?

Because Tunny use soft constraints.

Soft constraints are constraints in optimization problems that "should be
satisfied if possible, but don't absolutely need to be met." This concept is
contrasted with Hard Constraints.

### Key characteristics:

1. Tolerance for violations
   1. Can violate the constraints
   2. Guides solutions toward constraint satisfaction through penalties when
      violated
2. Penalty mechanism
   1. Penalty scores are assigned based on the degree of constraint violation
   2. These penalties are incorporated into the objective function and
      considered during optimization
3. Practical advantages
   1. In real-world problems, it's often difficult to satisfy all constraints
      completely
   2. Using soft constraints allows finding more practical solutions
   3. Expands the search space, increasing the possibility of finding better
      solutions

## Why is it slower compared to other optimization components like Wallacei or Galapagos?

By default, Tunny saves results to separate files at each trial so that
optimization can be restarted if Rhino crashes. This I/O operation makes it
slower compared to other optimization components.

For faster performance, we recommend using InMemoryMode. With this setting, all
results are saved at once at the end of optimization rather than during the
process, which improves speed.

## Is it possible to invalidate optimization trials when modeling or other aspects don't work as intended?

You can create an Attribute named "IsFAIL" - if it contains True, that Trial is
treated as failed and its results won't be reflected in the optimization.

Note: that with methods like BO-GP that use surrogates to determine the next
search point, the system may repeatedly explore the same point even if it
failed.

This happens because the failure provides no information to the optimization
solver, so there's no indication whether the trial was good, bad, or failed.

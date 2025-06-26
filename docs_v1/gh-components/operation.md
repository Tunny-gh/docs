---
description: |
  Overview of Tunny's operation components including Fish Attribute, Fish Egg, and Fish deconstruction components.
---

## Construct Fish Attribute

<img width="30%" alt="image" src="/images/docs_v1/gh-components/construct-fish-attribute.png">

`Construct Fish Attribute` component allows you to specify attribute information
to be associated with an optimization trial. ZUI is supported, the input can be
any number of inputs, and the nickname of the input is stored as the name of the
attribute paired with the value.

`Constraint` is a special input. If all values input here are less than or equal
to zero, the trial is feasible. Use this input if you want to take constraint
conditions into account.

## Construct Fish Egg

<img width="30%" alt="image" src="/images/docs_v1/gh-components/construct-fish-egg.png">

`Construct Fish Egg` component allows you to specify the combination of
variables to be executed first in the optimization.

Connect variables such as NumberSlider to `Vars`. If `Lay` is set to True, the
variable combination will be registered. If `Clear` is set to True, all
registered variable combinations will be deleted. If `Skip` is set to True,
duplicate combinations will be skipped.

## Construct Fish Egg by CSV

<img width="30%" alt="image" src="/images/docs_v1/gh-components/construct-fish-egg-by-csv.png">

`Construct Fish Egg by CSV` component enables Construct Fish Egg input via CSV.
Connect the path to the CSV file to `Path`.

For example, if you want to specify in CSV the combination of the values of two
NumberSliders with the nicknames X1 and X2, you can do so as follows

| X1 | X2 |
| -- | -- |
| 1  | 2  |

In this case, the combination of variables where X1 is 1 and X2 is 2 will be
executed first.

## Deconstruct Fish

<img width="30%" alt="image" src="/images/docs_v1/gh-components/deconstruct-fish.png">

`Deconstruct Fish` component allows you to deconstruct Fish, the result of
Tunny's optimization.

By deconstructing, variables, objective functions, and attributes can be
obtained in a data tree.

## Deconstruct Fish Attribute

<img width="30%" alt="image" src="/images/docs_v1/gh-components/deconstruct-fish-attribute.png">

`Deconstruct Fish Attribute` component can be used to deconstruct an attribute.

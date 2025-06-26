---
description: |
  Introduction to the Tunny Value List component for categorical optimization in Grasshopper.
---

## Tunny Value List

<img width="30%" alt="image" src="/images/docs_v1/gh-components/tunny-value-list.png">

`Tunny Value List` component is a ValueList created specifically for
optimization in Tunny. It can be used in the same way as a normal Grasshopper
ValueList.

This component is used when you want to perform categorical optimization.

### What is Categorical Optimization

In optimization with the Number Slider as a variable, the order of the values is
implicitly assumed. It means that a large/small relationship can be defined so
that 1 is followed by 2, 2 by 3, and so on.

In the case of categorical optimization, on the other hand, the variables have
no greater or lesser relationship. For example, suppose that during optimization
we want to change the calculation method to addition or subtraction. In this
case, you would have to choose between addition and subtraction, but there is no
greater or lesser relationship between the two.

For example, it is possible to create an IF statement using Expression and
NumberSlider and have it add when the value is 0 and subtract when the value
is 1. However, in this case, the variable selection may not work well because it
assumes that there is a large/small relationship.

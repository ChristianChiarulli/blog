---
title: Primitive Operations
date: "2020-05-19"
image: "ds-algo-blog.png"
author: "Jason"
tags: ["ds-algo"]
---

## What is a Primitive Operation?

- A <font color=Red>basic</font> computation performed by an algorithm

- <font color=Red>Identifiable</font> in pseudocode

- Largely <font color=Red>independent</font> from the programming language being used

- <font color=Red>Assumed</font> to have a constant execution time

- <font color=Red>Exact</font> definition is not important

_Note (1)_: As long as we correctly identify the growth rate of the algorithm, the exact definition of a primitive operation is not important since we can model the behavior of the alogrithm by using asymptotic analysis which we'll discuss how to do in a future notebook.

## Examples of Primitive Operations

| Primitive Operation                                                   | Pseudocode Example                    | Equivalent Python Code          |
| --------------------------------------------------------------------- | ------------------------------------- | ------------------------------- |
| <center>Assigning a value to a variable</center>                      | <center>_x_ $\leftarrow$ _5_</center> | <center>_x = 5_</center>        |
| <center>Performing an arithmetic operation</center>                   | <center>$a^3 + b/2$</center>          | <center>_a\*\*3 + b/2_</center> |
| <center>Comparing two numbers</center>                                | <center>$i \geq j$</center>           | <center>_i >= j_</center>       |
| <center>Accessing a single element in a Python list by index</center> | <center>_A[0]_</center>               | <center>_A[0]_</center>         |
| <center>Calling a function/method</center>                            | <center>_findMax(A)_</center>         | <center>_findMax(A)_</center>   |
| <center>Returning from a function/method</center>                     | <center>_return y_</center>           | <center>_return y_</center>     |

_Note (2)_: Calling a function/method excludes operations executed within the function/method.

## Focusing on Worst-Case Input

- An algorithm might run faster on some inputs than other inputs even if the inputs being compared are the same size.
  - For example, finding the smallest number in a list of size, $n$, that has been sorted in inreasing order vs finding the smallest number in a list of size, $n$, that is sorted randomly.

* To factor in this possibilty we can perform an <font color=Red>average-case analysis</font> by taking the average of the running time over all possible inputs of the same size.

* Average-case analysis is very useful, but often <font color=Red>difficult to determine</font> since it requires defining a probability distribution over the set of inputs.

* Therefore, we'll focus on charaterizing the running time of an algorithm using <font color=Red>worst-case analysis</font>.
  - <font color=Red>Easier</font> to calculate since we only need to <font color=Red>identify the worst-case input</font>.
  - Also, designing for the worst-case leads to the algorithm <font color=Red>doing well on every input</font>.

_Note (3)_: Focusing on the best-case input is usually useless since it requires ideal conditions for the algorithm to perform in an acceptable manner.

## Counting Primitive Operations

- To determine the running time, $t$, of an algorithm as a function of the input size, $n$, we need to perform the following steps:

  1. Identify each primitive operation in the pseudocode

  2. Count how many times each primitive operation is executed

  3. Calculate the running time by summing the counts of primitive operations

_Note (4)_: We're assuming the running times of different primitive operations will be fairly similar, so the calculated running time, $t$, will be proportional to the actual running time of an algorithm.

## Counting Primitive Operations Examples

### Ex. 1) Find the maximum element in a list

<font color=SlateGray>**Algorithm** _findMax(A)_<br>
&emsp; **Input** list _A_ of _n_ integers<br>
&emsp; **Output** the maximum element of _A_</font>

&emsp; <font color=CadetBlue>_currentMax_ $\leftarrow$ _A[0]_</font><br>
&emsp; <font color=SteelBlue>**for** _currentValue_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font><br>
&emsp; &emsp; <font color=SteelBlue>**if** _currentValue > currentMax_ **then**</font><br>
&emsp; &emsp; &emsp; <font color=CadetBlue>_currentMax_ $\leftarrow$ _currentValue_</font><br>
&emsp; <font color=MediumPurple>**return** _currentMax_</font>

- Line 1, <font color=CadetBlue>_currentMax_ $\leftarrow$ _A[0]_</font>, is $2$ operations since we're accessing a single element in a list by index and assigning a value to a variable.

- Line 2, <font color=SteelBlue>**for** _currentValue_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font>, is $c_1 + c_2n$ operations where $c_1$ represents the constant number of primitive operations associated with the initializing and the terminating of the for loop, and $c_2$ represents the number of primitive operations associated with the maintenance of the iterator which is done $n$ times, so the total amount of maintenance of the iterator is $c_2n$ (see _Note (5)_ for why specific values for $c_1$ and $c_2$ are not given).

- Line 3, <font color=SteelBlue>**if** _currentValue > currentMax_ **then**</font>, is $n$ operations since we're comparing two numbers during each iteration of the loop.

- Line 4, <font color=CadetBlue>_currentMax_ $\leftarrow$ _currentValue_</font>, consists of $n$ operations, since we're assuming worst-case input which means _currentMax_ will be updated on each iteration of the loop.

- Line 5, <font color=MediumPurple>**return** _currentMax_</font>, consists of $1$ operation since we're only returning a value from a function.

Therefore, the running time of the algorithm is:

$$t = 2 + c_1 + c_2n + n + n + 1 = 3 + c_1 + c_2n + 2n$$

_Note (5)_: Explicit values for $c_1$ and $c_2$ are not given because the number of primitive operations being executed in a Python for loop, e.g., _for i in list_ is not as obvious as say a C-style for loop, e.g., _for(i = 0; i < 10; i++)_ since the implementation details are being abstracted away to allow for easier readability and usability. Python for loops are referred to as collection-based or iterator-based loops and use the concept of iterables and iterators to perform the looping operation as opposed to the index based approach used in C-style loops. Under the hood Python is actually using two built-in functions _iter()_ and _next()_ to implement the for loop which we can discuss in more detail in a future blog post and video.

_Note (6)_: Not knowing the exact values for $c_1$ and $c_2$ is also not entirely necessary because as mentioned earlier we can use asymptotic analysis to model the behavior of our algorithms as long as we correctly identify the growth rate.

_Note (7)_: Even though we'll ultimately be using asymptotic analysis to model our algorithms if you're interested in examining the primitive operations being executed in a Python program in more detail you can use the _dis_ module which is the disassembler for Python bytecode. This allows us to examine the set of instructions used by the Python virtual machine. A .pyc file is actually the compliled bytecode. However, for our purposes we don't need to concern ourselves with all of the under the hood details. If anyone is interested though we can also make a future blog post or video discussing the _dis_ module in more detail.

### Ex. 2) Sum all of the elements in a list

<font color=SlateGray>**Algorithm** _calculateSum(A)_<br>
&emsp; **Input** list _A_ of _n_ integers<br>
&emsp; **Output** sum of all the elements of _A_</font>

&emsp; <font color=CadetBlue>_currentSum_ $\leftarrow$ _0_</font><br>
&emsp; <font color=SteelBlue>**for** _valueToBeAdded_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font><br>
&emsp; &emsp; <font color=CadetBlue>_currentSum_ $\leftarrow$ _currentSum + valueToBeAdded_</font><br>
&emsp; <font color=MediumPurple>**return** _currentSum_</font>

- Line 1, <font color=CadetBlue>_currentSum_ $\leftarrow$ _0_</font>, is $1$ operation since we're assigning a value to a variable.

- Line 2, <font color=SteelBlue>**for** _valueToBeAdded_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font>, is once again $c_1 + c_2n$ operations where $c_1$ once again represents the constant number of primitive operations associated with the initializing and the terminating of the for loop, and $c_2$ once again represents the number of primitive operations associated with the maintenance of the iterator which is done $n$ times, so the total amount of maintenance of the iterator is $c_2n$.

- Line 3, <font color=CadetBlue>_currentSum_ $\leftarrow$ _currentSum + valueToBeAdded_</font>, is $2n$ operations since we're performing an arithmetic operation and assigning the result to a variable during each iteration of the loop.

- Line 4, <font color=MediumPurple>**return** _currentSum_</font>, consists of $1$ operation since we're only returning a value from a function.

Therefore, the running time of the algorithm is:

$$t = 1 + c_1 + c_2n + 2n + 1 = 2 + c_1 + c_2n + 2n$$

### Ex. 3) Calculate the average of the elements in a list

<font color=SlateGray>**Algorithm** _calculateAverage(A)_<br>
&emsp; **Input** list _A_ of _n_ integers<br>
&emsp; **Output** average of all the elements of _A_</font>

&emsp; <font color=CadetBlue>_currentSum_ $\leftarrow$ _0_</font><br>
&emsp; <font color=SteelBlue>**for** _valueToBeAdded_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font><br>
&emsp; &emsp; <font color=CadetBlue>_currentSum_ $\leftarrow$ _currentSum + valueToBeAdded_</font><br>
&emsp; <font color=MediumPurple>**return** _currentSum/length of A_</font>

- Line 1, <font color=CadetBlue>_currentSum_ $\leftarrow$ _0_</font>, is $1$ operation since we're assigning a value to a variable.

- Line 2, <font color=SteelBlue>**for** _valueToBeAdded_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font>, is once again $c_1 + c_2n$ operations for the same reasons as the previous examples.

- Line 3, <font color=CadetBlue>_currentSum_ $\leftarrow$ _currentSum + valueToBeAdded_</font>, is $2n$ operations since we're once again performing an arithmetic operation and assigning the result to a variable during each iteration of the loop.

- Line 4, <font color=MediumPurple>**return** _currentSum/length of A_</font>, consists of $3$ operations since we'll be calling the len() function to get the length of list _A_, performing an arithmetic operation, and returning a value from a function.

Therefore, the running time of the algorithm is:

$$t = 1 + c_1 + c_2n + 2n + 3 = 4 + c_1 + c_2n + 2n$$

### Ex. 4) Find how many elements in a list are even

<font color=SlateGray>**Algorithm** _findNumberOfEvenElements(A)_<br>
&emsp; **Input** list _A_ of _n_ integers<br>
&emsp; **Output** the number of elements in list _A_ that are even</font>

&emsp; <font color=CadetBlue>_numberOfEvenElements_ $\leftarrow$ _0_</font><br>
&emsp; <font color=SteelBlue>**for** _currentValue_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font><br>
&emsp; &emsp; <font color=SteelBlue>**if** _currentValue mod 2 = 0_ **then**</font><br>
&emsp; &emsp; &emsp; <font color=CadetBlue>_numberOfEvenElements_ $\leftarrow$ _numberOfEvenElements + 1_</font><br>
&emsp; <font color=MediumPurple>**return** _numberOfEvenElements_</font>

- Line 1, <font color=CadetBlue>_numberOfEvenElements_ $\leftarrow$ _0_</font>, is $1$ operation since we're assigning a value to a variable.

- Line 2, <font color=SteelBlue>**for** _currentValue_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font>, is once again $c_1 + c_2n$ operations for the same reasons as the previous examples.

- Line 3, <font color=SteelBlue>**if** _currentValue mod 2 = 0_ **then**</font>, consists of $2n$ operations since we're performing an arithmetic operation and then comparing the result with 0 during each iteration of the loop.

- Line 4, <font color=CadetBlue>_numberOfEvenElements_ $\leftarrow$ _numberOfEvenElements + 1_</font>, consists of $2n$ operations since we're assumuing the worst-case input which means each element in _A_ is even, so we're performing an arithmetic operation and assigning the result to a variable during each iteration of the loop.

- Line 5, <font color=MediumPurple>_return numberOfEvenElements_</font>, consists of $1$ operation since we're only returning a value from a function.

Therefore, the running time of the algorithm is:

$$t = 1 + c_1 + c_2n + 2n + 2n + 1 = 2 + c_1 + c_2n + 4n$$

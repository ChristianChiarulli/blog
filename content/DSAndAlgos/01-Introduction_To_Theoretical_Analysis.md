---
title: Introduction to Theoretical Analysis
date: "2020-07-19"
image: "ds-algo-blog.png"
author: "Jason"
tags: ["ds-algo"]
---

## Benefits of Theoretical Analysis

- Can evaluate the speed of an algorithm <font color=Red>independently</font> of the hardware & software environment

- Able to use a <font color=Red>pseudocode</font> desricption of an algorithm instead of an implementation

- Characterize the <font color=Red>running time</font> as a function of the <font color=Red>input size, $n$</font>

- Takes into account <font color=Red>all</font> possible inputs

## What is Pseudocode?

- <font color=Red>High-level</font> description of an algorithm

- <font color=Red>Preferred</font> notation for describing algorithms

- Designed for <font color=Red>human</font> understanding

- <font color=Red>Suppresses</font> unimportant details

- <font color=Red>Hides</font> program design issues

## Common Pseudocode Notation

- Function/Method Declaration<br>
  &emsp; <font color=SlateGray>**Algorithm** _method(Argument one, Argument two, ...)_</font><br>
  &emsp; <font color=SlateGray>**Input**</font> - indicates the input to the algorithm<br>
  &emsp; <font color=SlateGray>**Output**</font> - indicates the output of the algorithm

- Method Call<br>
  &emsp; <font color=DarkKhaki>_var.method(Argument one, Argument two, ...)_</font>

- Return Value<br>
  &emsp; <font color=MediumPurple>**return** _expression_</font>

- Control Flow

  - <font color=SteelBlue>**if** _..._ **then** _..._ **else** _..._</font> - indicates a decision the algorithm must make, i.e., if a condition is true then do something if the condition is false then do something else

  - <font color=SteelBlue>**while** _..._ **do** _..._</font> - indicates a top tested loop, i.e., first evaluate the condition and if the condition evaluates to false, then the looping ends. If the condition evaluates to true, then do one iteration of the loop, then repeat the loop while the condition is true.

  - <font color=SteelBlue>**for** _..._ **do** _..._</font> - indicates a loop where we already know how many times the loop will be executed

  - <font color=SteelBlue>**repeat** _..._ **until** _..._</font> - indicates a bottom tested loop, i.e., do one iteration of the loop then evaluate the condition. If the condition evaluates to false, then repeat. If the condition evaluates to true, the looping ends.

- Expressions<br>
  &emsp; $\leftarrow$ Assignment<br>
  &emsp; &emsp; (like $=$ in Python)

&emsp; &emsp; $=$ Equality testing<br>
&emsp; &emsp; &emsp; (like $==$ in Python)

&emsp; &emsp; $n^2$ Exponentiation<br>
&emsp; &emsp; &emsp; (like $n**2$ in Python)

&emsp; &emsp; $\geq$ greater than or equal to<br>
&emsp; &emsp; &emsp; (like $>=$ in Python)

&emsp; &emsp; $\leq$ less than or equal to<br>
&emsp; &emsp; &emsp; (like $<=$ in Python)

_Note (1)_: Other mathematical formatting can appear and the corresponding Python operations can be found in the official documentation.

## Pseudocode Examples

### Ex. 1) Find the maximum element in a list

<font color=SlateGray>**Algorithm** _findMax(A)_<br>
&emsp; **Input** list _A_ of _n_ integers<br>
&emsp; **Output** the maximum element of _A_</font>

&emsp; <font color=CadetBlue>_currentMax_ $\leftarrow$ _A[0]_</font><br>
&emsp; <font color=SteelBlue>**for** _currentValue_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font><br>
&emsp; &emsp; <font color=SteelBlue>**if** _currentValue > currentMax_ **then**</font><br>
&emsp; &emsp; &emsp; <font color=CadetBlue>_currentMax_ $\leftarrow$ _currentValue_</font><br>
&emsp; <font color=MediumPurple>**return** _currentMax_</font>

### Ex. 2) Find the minimum element in a list

<font color=SlateGray>**Algorithm** _findMin(A)_<br>
&emsp; **Input** list _A_ of _n_ integers<br>
&emsp; **Output** the minimum element of _A_</font>

&emsp; <font color=CadetBlue>_currentMin_ $\leftarrow$ _A[0]_</font><br>
&emsp; <font color=SteelBlue>**for** _currentValue_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font><br>
&emsp; &emsp; <font color=SteelBlue>**if** _currentValue < currentMin_ **then**</font><br>
&emsp; &emsp; &emsp; <font color=CadetBlue>_currentMin_ $\leftarrow$ _currentValue_</font><br>
&emsp; <font color=MediumPurple>**return** _currentMin_</font>

### Ex. 3) Sum all of the elements in a list

<font color=SlateGray>**Algorithm** _calculateSum(A)_<br>
&emsp; **Input** list _A_ of _n_ integers<br>
&emsp; **Output** sum of all the elements of _A_</font>

&emsp; <font color=CadetBlue>_currentSum_ $\leftarrow$ _0_</font><br>
&emsp; <font color=SteelBlue>**for** _valueToBeAdded_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font><br>
&emsp; &emsp; <font color=CadetBlue>_currentSum_ $\leftarrow$ _currentSum + valueToBeAdded_</font><br>
&emsp; <font color=MediumPurple>**return** _currentSum_</font>

### Ex. 4) Multiply all of the elements in a list

<font color=SlateGray>**Algorithm** _calculateProduct(A)_<br>
&emsp; **Input** list _A_ of _n_ integers<br>
&emsp; **Output** multiplication of all the elements of _A_</font>

&emsp; <font color=CadetBlue>_currentProduct_ $\leftarrow$ _1_</font><br>
&emsp; <font color=SteelBlue>**for** _multiplier_ $\leftarrow$ _nextElementInA (starting from the 1st element in A)_ **to** _EndOfA_ **do**</font><br>
&emsp; &emsp; <font color=CadetBlue>_currentProduct_ $\leftarrow$ _currentProduct _ multiplier*</font><br>
&emsp; <font color=MediumPurple>**return** *currentProduct\*</font>

_Note (2)_: Since the purpose of these examples is to familiarize us with writing pseudocode, the suggested implementations are not optimized.

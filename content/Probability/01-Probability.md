---
title: Introduction to Probability
description: description
date: "2019-06-25"
tags: ["probability"]
---

A lot of probability can be broken down to:

$$\frac{\text{\# of outcomes you are looking for}}{\text{\# of total possible outcomes}}$$

## Terminology

* $\Omega$ - sample space, set of all possible outcomes

* $\omega$ - outcome (point or element)

* $A, B, C, ... Z$ - event (Subset of $\Omega$)

* $\bar{A}$, $A^{c}$ - complement of A ( not A)

* $A \bigcup B$ - union (A or B)

* $A \bigcap B$ or AB - intersection (A and B)

* $(A - B)$ - set difference ($w$ in A but not in B)

* $(A \subset B)$ - set inclusion

* $\varnothing$ - null event/set (always false)

* $\Omega$ - (always true)

* $|A|$ - number of elements

## Defining Probability

Events are disjoint or mutually exclusive if A and B have no outcomes in common: $A\bigcup B = \varnothing$

A function P that assigns a real number P(A) to each event A is a probability distribution or probability measure of it satisfies the following three axioms:

1. $P(A) \geq 0$ for every A
2. $P(\Omega) = 1$
3. If $A_1 , A_2 , ...$ are disjoint then:

$$\\ P( \bigcup^\infin_{i=1}A_i) = \sum^\infin_{i=1}P(A_i) \\$$

Many properties can be derived from these axioms:

$$\\ P(\varnothing) = 0 \\$$
$$\\ A \subset B \Rightarrow P(A) \leq P(B)\\$$
$$\\ 0 \leq P(A) \leq 1 \\$$
$$\\ P(\bar{A}) = 1-P(A) \\$$
$$\\ A \bigcap B = \varnothing \Rightarrow P(A \bigcup B) = P(A) + P(B) \\$$

For any events A and B (this equation handles double counting so that the intersection is not counted twice when events are not mutually exclusive):

$$\\ P(A \bigcup B) = P(A) + P(B) - P(AB) \\$$

### DeMorgan's Laws

For any two events A and B we have:

$$\\ (A \bigcup B)^c = A^c \bigcap B^c \\$$
$$\\ (A \bigcap B)^c = A^c \bigcup B^c \\$$

### Independent Events

Two events A and B are independent if knowing that one occurs does not change the probability that the other occurs. This is often called the multiplication rule. If A and B are independent, then 

$$\\ P(A \bigcap B)=P(A)P(B) \\$$

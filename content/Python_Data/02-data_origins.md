---
title: Where does Data come from?
description: description
date: "2019-04-02"
tags: ["statistics"]
---

## Different Types of Data

- Two key types of data:
  - Organic / Process Data
  - "Designed" Data Collection

## Organic / Process Data

Examples

- Financial or Point-of-sale transactions / stock market exchanges
- Netflix viewing history
- Web browser activity
- Sporting events
- Temperature / pollution sensors

- These processes generate massive quantities of data -> **BIG DATA**
- E.g., baseball games, meals ordered at Burger King on a given day, changes in temperature on a given day in a particular region
- Processing requires significant computational resources; data scientists "mine" this data to study trends and uncover interesting relationships

## Designed Data Collection

Designed to specifically address a stated research objective

- Individuals sampled from a population, interviewed about opinions on a particular topic

### Common features of designed data

- Sampling from populations, administration of carefully designed questions
- Typically data sets much smaller compared to organic/process data sets
- Data collected for very specific reasons, rather than simple reflections of ongoing natural process

## Is the data i.i.d.?

For analyzing data, regardless of source, an important question:

Q: Can the Data be considered i.i.d.?

i = independent and id = identically distributed

## i.i.d. Data

- Example: Final exam scores from a large Intro to Stats class at a university are Independent observations from a common normal distribution

## Non i.i.d. Data

Examples:

- Students sitting next to each other tend to have similar scores
- Males and females might have different means
- Students from same discussion section may have similar scores

Dependencies and differences need to be accounted for in analysis!
-> Need different analytic procedures

## Important Notes

- Need to Ask: Can we apply procedures that assume i.i.d. data?
- Always consider where data came from!

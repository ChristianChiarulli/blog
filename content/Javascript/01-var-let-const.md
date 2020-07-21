---
title: var, let, const
date: "2020-04-19"
image: "javascript.jpg"
author: "Chris"
tags: ["javascript"]
---

One of the first features you may have noticed in ES6 is a new way to declare variables (and now constants) with `let` and `const` instead of just `var`.

These new keywords are used to create **Block Scoped** variables and constants.

Variable declarations with `var` were only capable of **Global Scope** and **Function Scope**

All three keywords are capable of **Global Scope**

## Keyword Behavior

Below is a table you can quickly reference explaining the differences. If you are looking for a recommendation for which ones to use in what scenarios here is my recommendation:

- Avoid using `var`
- Use `const` wherever possible
- When you have a variable you expect will change over time use `let`

| Keyword | Scope    | Redefinable | Redeclarable | Hoisting |
| ------- | -------- | ----------- | ------------ | -------- |
| var     | function | ✅          | ✅           | ✅       |
| let     | block    | ✅          | ❌           | ❌       |
| const   | block    | ❌          | ❌           | ❌       |

## Function Scope

Notice in the following code snippet we can access all of the variables from within the function.

```js heading="Function Scope"
function func() {
  var var1 = "I am function scoped"
  let var2 = "Technically I'm block scoped"
  const var3 = "But right now you can't tell"

  console.log(var1)
  console.log(var2)
  console.log(var3)
}

func()
```

Now that we have moved the log statements outside of the function you'll see we end up with a reference error.

```js heading="Function Scope Reference Error"
function func() {
  var var1 = "I am function scoped"
  let var2 = "Technically I'm block scoped"
  const var3 = "But right now you can't tell"
}

func()

// Comment out each one to see that it returns a reference error

console.log(var1)
console.log(var2)
console.log(var3)
```

## Block Scope

```js heading="Block Scope"
if (true) {
  var var1 = "You can access me outside the block"
  let var2 = "You can't access me outside the block"
  const var3 = "Me neither"

  console.log(var1)
  console.log(var2)
  console.log(var3)
}

// Uncomment each one separately, notice let and const throw reference errors

// console.log(var1);
// console.log(var2);
// console.log(var3);
```

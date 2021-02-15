---
title: First Smart Contract
date: "2021-01-24"
image: "solidity_logo.png"
author: "Chris"
tags: ["solidity", "blockchain"]
---

## Development Environment

In this tutorial we'll introduce the [Remix](https://remix.ethereum.org/) code editor. In the future I will discuss how to set up a local dev environment. For now Remix is a great Solidity IDE for learning.

In the bar on the left there are 4 sections:

- A file browser
- A section for the compiler
- A section for deploying and running your smart contract
- A plugin section

We will use everything except for the plugin section for now

So to get started do the following:

- Create a file called `SimpleStorage.sol`
- Set the compiler version to `8.0`
- Tick the `autocompile` checkbox
- Set the environment to `JavaScript VM`

Ok we are now ready to start writing our first smart contract.

## Creating a Smart Contract

For this tutorial I will be using some code snippets from the Solidity Language Documentation website linked [here](https://docs.soliditylang.org/en/v0.8.0/introduction-to-smart-contracts.html#a-simple-smart-contract)

Here is the contract will will be creating:

```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

    constructor(uint _storedData) {
        storedData = _storedData;
    }

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
```

The first line will be a comment specifying your license

The second is a `pragma` to tell the compiler what version it should use.

If you are familiar with `classes` and `objects` in other languages you will find that a `contract` is pretty similar at first glance.

A `contract` will typically contain `fields`, a `constructor` and `functions`.

The first and only `field` in our contract is `storedData`. You'll notice it is an `uint` this is an integer that is always positive.

Next we'll take a look at the `constructor`. The constructor will run when the contract is instantiated. Typically a `constructor` used to give fields in a class/contract initial values.

You'll notice the constructor takes a parameter `_storedData`. If we just passed`storedData` the value would `shadow` the field named `storedData` hence the underscore.

The first function will set the `storedData` value to the value `x` that is passed.

The second function will return the `storedData` value to the caller.

## Deploying and Interacting with our Smart Contract

Head over to the deploy section in the Remix editor.

Make sure the Environment is set to `JavaScriptVM`. This will make it so the transactions take place in a sandbox blockchain in the browser.

You'll also notice you have a test account funded with 100 ether, you'll have 15 test accounts to start with.

**Note on Gas** All operations that write data to the blockchain will require some gas. This means you will need to spend some ether in order to deploy this contract and run the `set()` function we wrote earlier. Operations will vary in the amount of gas they use. The gas limit option will allow you to specify a limit to the amount of gas you are willing to use. An important thing to remember is that that each operation will run until the gas limit is reached. Spent gas will remain spent, so if some of the operations were fulfilled and you don't have enough gas to finish the transaction then you will still have spent ether on the fulfilled operations.

We can now deploy our smart contract. Make sure to give the `storedData` value an initial value and press the `Deploy` button.

After deploying the contract you can click the dropdown arrow and interact with an instance of it on the blockchain.

In future tutorials I will show you how to deploy this on a local dev environment and create a simple front end.

## Links

[Remix Docs](https://remix-ide.readthedocs.io/en/latest/run.html#run-setup)

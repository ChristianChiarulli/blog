---
title: Install Rust for Mac
description: 
date: '2020-04-29'
tags: ['mac']
---

## Install

This currently the preferred method to install Rust for Mac

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Installer

You should see the following:

```
Welcome to Rust!

This will download and install the official compiler for the Rust
programming language, and its package manager, Cargo.

It will add the cargo, rustc, rustup and other commands to
Cargo's bin directory, located at:

  /Users/chris/.cargo/bin

This can be modified with the CARGO_HOME environment variable.

Rustup metadata and toolchains will be installed into the Rustup
home directory, located at:

  /Users/chris/.rustup

This can be modified with the RUSTUP_HOME environment variable.

This path will then be added to your PATH environment variable by
modifying the profile files located at:

  /Users/chris/.profile
/Users/chris/.zprofile

You can uninstall at any time with rustup self uninstall and
these changes will be reverted.

Current installation options:


   default host triple: x86_64-apple-darwin
     default toolchain: stable
               profile: default
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
```

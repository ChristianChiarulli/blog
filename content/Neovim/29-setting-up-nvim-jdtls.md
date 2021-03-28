---
title: Setup Neovim for Lua Development
date: "2021-03-11"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## What is nvim-jdtls?

This is a plugin that will provide LSP support for Neovim and other cool features.

Check out the Github Repo [here](https://github.com/mfussenegger/nvim-jdtls)

## Install

```
Plug 'mfussenegger/nvim-jdtls' 
```

## Install Language Server

```
cd ~/.config/nvim
git clone https://github.com/eclipse/eclipse.jdt.ls.git
cd eclipse.jdt.ls
./mvnw clean verify
```

## Configure Language Server

```lua heading=java-ls.lua
require'lspconfig'.jdtls.setup {cmd = {'java-linux-ls'}}
```

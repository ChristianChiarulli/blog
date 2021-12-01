---
title: Neovim plugins w/ Packer
description:
date: "2021-11-30"
image: "neovim.png"
author: "Chris"
tags: ["neovim-s-2"]
---

## Install Plugins

Create the plugins file:

```
touch ~/.config/nvim/lua/user/plugins.lua
```

Add the following to `plugins.lua`

```
local fn = vim.fn

-- Automatically install packer
local install_path = fn.stdpath('data')..'/site/pack/packer/start/packer.nvim'
if fn.empty(fn.glob(install_path)) > 0 then
  PACKER_BOOTSTRAP = fn.system({'git', 'clone', '--depth', '1', 'https://github.com/wbthomason/packer.nvim', install_path})
  print("Installing packer close and reopen Neovim...")
end

-- Autocommand that reloads neovim whenever you save the plugins.lua file
vim.cmd([[
  augroup packer_user_config
    autocmd!
    autocmd BufWritePost plugins.lua source <afile> | PackerSync
  augroup end
]])

-- Use a protected call so we don't error out on first use
local status_ok, packer = pcall(require, "packer")
if not status_ok then
  return
end

-- Have packer use a popup window
packer.init({
    display = {
      open_fn = function()
        return require('packer.util').float({ border = 'single' })
      end
    }
  }
)

-- Install your plugins here
return packer.startup(function(use)
  -- My plugins here
  use 'wbthomason/packer.nvim' -- Have packer manage itself
  use "nvim-lua/popup.nvim" -- An implementation of the Popup API from vim in Neovim
  use "nvim-lua/plenary.nvim" -- Useful lua functions used ny lots of plugins

  -- Automatically set up your configuration after cloning packer.nvim
  -- Put this at the end after all plugins
  if PACKER_BOOTSTRAP then
    require('packer').sync()
  end
end)

```

Require in `init.lua`

```
require("user.plugins")
```

**NOTE** (you will need to open and close Neovim at least once to install packer automatically)

## Commands

```
-- You must run this or `PackerSync` whenever you make changes to your plugin configuration
-- Regenerate compiled loader file
:PackerCompile

-- Remove any disabled or unused plugins
:PackerClean

-- Clean, then install missing plugins
:PackerInstall

-- Clean, then update and install plugins
:PackerUpdate

-- Perform `PackerUpdate` and then `PackerCompile`
:PackerSync
j
-- Loads opt plugin immediately
:PackerLoad completion-nvim ale
```

## Where are my plugins?

To see your plugins go to `~/.local/share/nvim/site/pack/packer/`

and your plugin will be under either `start` or `opt`

## What is the difference between start and opt?

Plugins in the `start` directory will be sourced automatically on Neovim startup

Plugins in the `opt` directory will be sourced usually on some autocommand

## What is the compiled file do?

The `packer_compiled.lua` found here: `~/.config/nvim/plugin/packer_compiled.lua`

It essentially optimizes the plugins startup time, it will also allow you to disable plugins without any startup penalty.

## References

- [Packer](https://github.com/wbthomason/packer.nvim)

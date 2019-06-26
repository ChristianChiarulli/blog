---
title: Neovim Intro
description: This post is related to the gatsbyjs
date: '2019-02-09'
tags: ['neovim']
---
 
In this article we'll be going over how to install Neovim and go over a few ways to extend it. 

## Install Neovim

### Mac

```sh
brew install neovim
```

### Linux (assuming debian based substitute with your favorite distros package manager)

```sh
sudo apt install neovim
```

## Alias to "vi" (optional)

Do this if you would still like to type `vi` or `vim` to open Neovim

add the follwoing to your .bashrc

```sh
alias vi='nvim'
```

## Create a place for init.vim

This will be where we configure neovim and install plugins

```sh
mkdir -p ~/.config/nvim

touch ~/.config/nvim/init.vim
```

`init.vim` is where neovim will look for its configuration

## Configure Plugin Manager

I use a package manager called `dein`, there are other out there but I like this one

<https://github.com/Shougo/dein.vim>

* First let's get the installer and install `dein`

```sh
curl https://raw.githubusercontent.com/Shougo/dein.vim/master/bin/installer.sh > ~/.config/nvim/installer.sh

sh ./installer.sh ~/.config/nvim/dein
```

* add the following to your `init.vim`

```vim
if &compatible
  set nocompatible
endif
" Add the dein installation directory into runtimepath
set runtimepath+=~/.config/nvim/dein/repos/github.com/Shougo/dein.vim

if dein#load_state('~/.config/nvim/dein')
  call dein#begin('~/.config/nvim/dein')

  call dein#add('~/.config/nvim/dein/repos/github.com/Shougo/dein.vim')
  call dein#add('Shougo/deoplete.nvim')
  if !has('nvim')
    call dein#add('roxma/nvim-yarp')
    call dein#add('roxma/vim-hug-neovim-rpc')
  endif

  call dein#end()
  call dein#save_state()
endif

filetype plugin indent on
syntax enable
```

* Now open neovim and install `dein`

```vim
:call dein#install()
```

## Configure Python Support

Neovim needs python for reasons

```sh
pip install neovim
```

I recommend installing neovim in a virtual environment and pointing to the python exectutable

Switch the following in your init.vim to whatever path you have set

```vim
let g:python3_host_prog = '~/Miniconda/envs/neovim/bin/python3.7'
```

## Configure Node.js Support

```sh
npm install -g neovim
```

## Check your health

At any time you can check the health of neovim with the following command

* While inside neovim

```vim
:checkhealth
```

You should see that your python path and node path are highlighted green

## Wrap Up

Here is what your `init.vim` should look like

```vim
if &compatible
  set nocompatible
endif
" Add the dein installation directory into runtimepath
set runtimepath+=~/.config/nvim/dein/repos/github.com/Shougo/dein.vim

if dein#load_state('~/.config/nvim/dein')
  call dein#begin('~/.config/nvim/dein')

  call dein#add('~/.config/nvim/dein/repos/github.com/Shougo/dein.vim')
  call dein#add('Shougo/deoplete.nvim')
  if !has('nvim')
    call dein#add('roxma/nvim-yarp')
    call dein#add('roxma/vim-hug-neovim-rpc')
  endif

  call dein#end()
  call dein#save_state()
endif

filetype plugin indent on
syntax enable

let g:python3_host_prog = '~/Miniconda/envs/neovim/bin/python3.7'
```

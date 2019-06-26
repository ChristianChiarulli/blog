---
title: Modularize Your Config
description: This post is related to the gatsbyjs
date: '2019-02-10'
tags: ['neovim']
---

I've seen a lot of Neovim/Vim configs out there that are absolutely unreadable. I'm not saying mine is perfect but I'm at least making an attempt to break it up sensibly.

In this article we'll be going over how to break up your init.vim

## Create a place for config files

This is where we'll be keeping all of our modules

```sh
mkdir ~/.config/nvim/modules
```

## Split up your config

We are going to take everything from the intro and split into seperate files

```sh
touch ~/.config/nvim/modules/general.vim

touch ~/.config/nvim/modules/plugins.vim
```

Change these files to the following:

### general.vim

```vim
if &compatible
  set nocompatible
endif

filetype plugin indent on
syntax enable

let g:python3_host_prog = '~/Miniconda/envs/neovim/bin/python3.7'
```

### plugins.vim

```vim
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

" If you want to install not installed plugins on startup.
if dein#check_install()
  call dein#install()
endif
```

### init.vim

Now we can simplify our init.vim

```vim
source $HOME/.config/nvim/modules/plugins.vim
source $HOME/.config/nvim/modules/general.vim
```

## Conclusion

You now have a modular Neovim config just add different sources for new modules

In the next article I'll go over themes and appearance

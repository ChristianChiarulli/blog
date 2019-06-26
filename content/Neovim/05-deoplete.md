---
title: Neovim Deoplete
description: This post is related to the gatsbyjs
date: '2019-02-14'
tags: ['neovim']
---

You may have noticed from the first article that our initial config had a plugin called deoplete preinstalled. We are going to enable that now.

Deoplete is a lighweight autocomplete plugin for Neovim

## Create Deoplete Module


```sh
touch ~/.config/nvim/modules/deoplete.vim
```

## Enable Deoplete

```vim
let g:deoplete#enable_at_startup = 1
" <TAB>: completion.
inoremap <expr><TAB> pumvisible() ? "\<C-n>" : "\<TAB>"
```

The second line is for tab complete

## Update Remote Plugins

You may also have to Update remote plugins for this to work right

open neovim

```vim
:UpdateRemotePlugins
```

## Wrap up

We now have some basic autocomplete functionality

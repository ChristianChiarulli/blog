---
title: Neovim NERDTree
description: This post is related to the gatsbyjs
date: '2019-02-16'
tags: ['neovim']
---

Before people get mad and remind me about `netrw`. I know. But when I first learned vim I used NERDTree and I'm used to it.

Here's an [excellent article](https://shapeshed.com/vim-netrw/) explaining why you probably don't need this plugin, but I sill like NERDTree.

## Add plugin to plugins.vim

```vim
call dein#add('scrooloose/NERDTree')
```

## Create nerdtree.vim

```sh
touch ~/.config/nvim/modules/nerdtree.vim
```

### nerdtree.vim

Add the following:

```vim
" Let's you see hidden files
let NERDTreeShowHidden = 1
" Change this to whatever you want to open nerdtree
nnoremap <F5> ::
```

## Wrap up

You now have a file explorer, sorry netrw.

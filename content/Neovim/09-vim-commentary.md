---
title: Vim-commentary
description:
date: "2020-04-30"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Install commentary

```
Plug 'tpope/vim-commentary'
```

## Configuration

This is my preferred way to use this tool

```
nnoremap <space>/ :Commentary<CR>
vnoremap <space>/ :Commentary<CR>
```

Just press <space>/ and it will comment out the line

In visual mode select the text you want to comment out and press <space>/

## Link to repo

[commentary](https://github.com/tpope/vim-commentary)

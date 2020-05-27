---
title: Codi - An Interactive Scratchpad for Hackers
date: "2020-05-26"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Install

- Updated Version with Virtual text

  ```
  Plug 'ChristianChiarulli/codi.vim'
  ```

- Original

  ```
  Plug 'metakirby5/codi.vim'
  ```

- Version with Virtual Text

  The code for this can be found [here](https://github.com/Pablo1107/codi.vim/tree/nvim-virtual-text)

## Config

Here is some simple config to get you started

```
" Change the color
highlight CodiVirtualText guifg=cyan

let g:codi#virtual_text_prefix = "❯ "


"
let g:codi#aliases = {
                   \ 'javascript.jsx': 'javascript',
                   \ }
```

## Commands

```
:Codi {filetype}   # Open codi for a specific filetype

:Codi!             # Closes Codi

:Codi!!            # Toggle Codi
```

## Repo Links

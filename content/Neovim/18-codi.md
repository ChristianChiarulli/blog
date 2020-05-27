---
title: Codi - An Interactive Scratchpad for Hackers
date: "2020-05-26"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## What is Codi?

Codi is an interactive scratchpad for hackers. It opens virtual text which displays the results of evaluating each line as you type with NeoVim asynchronously. It's extensible to nearly any language that provides a REPL (interactive interpreter)!

REPL = (Read-eval-print loop)

Languages with built-in support: Python, JavaScript, CoffeeScript, Haskell, PureScript, Ruby, OCaml, R, Clojure/ClojureScript, PHP, Lua, C++, Julia, Elm, Elixir, TypeScript, Mathjs

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

:Codi!             # Closes Codi Apparently doesn't work

:Codi!!            # Toggle Codi Apparently doesn't work
```

## Shell Wrapper

Add this to your `bashrc` or `zshrc`

```
codi() {
   local syntax="${1:-python}"
   shift
   nvim -c \
     "let g:startify_disable_at_vimenter = 1 |\
     set bt=nofile ls=0 noru nonu nornu |\
     hi CodiVirtualText guifg=red
     hi ColorColumn ctermbg=NONE |\
     hi VertSplit ctermbg=NONE |\
     hi NonText ctermfg=0 |\
     Codi $syntax" "$@"
}
```

## Notes

This plugin has been a little buggy but I still find it very useful.

The maintainer and the guy who forked it and added virtual text don't seem to be very active.

I have a fork on my Github for now with the updates from both.

I don't plan on maintaining it or adding features.

Hopefully they update it soon.

## Repo Links

[Original](https://github.com/Pablo1107/codi.vim/tree/nvim-virtual-text)

[Virtual text fork](https://github.com/Pablo1107/codi.vim/tree/nvim-virtual-text)

[YouTube video where I found this](https://www.youtube.com/watch?v=iGrUvcQyfhc)

[My fork](https://github.com/ChristianChiarulli/codi.vim)

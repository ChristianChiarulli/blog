---
title: Quickscope
description:
date: "2020-05-03"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Install

```
Plug 'unblevable/quick-scope'
```

## Create config file

```
touch ~/.config/nvim/plug-config/quickscope.vim
```

Make sure to source this file in `init.vim`

```
source $HOME/.config/nvim/plug-config/quickscope.vim
```

## Quickscope

Form the github repo:

"An always-on highlight for a unique character in every word on a line to help you use f, F and family."

### Configure Quickscope

```
" Trigger a highlight in the appropriate direction when pressing these keys:
let g:qs_highlight_on_keys = ['f', 'F', 't', 'T']

highlight QuickScopePrimary guifg='#00C7DF' gui=underline ctermfg=155 cterm=underline
highlight QuickScopeSecondary guifg='#afff5f' gui=underline ctermfg=81 cterm=underline

let g:qs_max_chars=150
```

### Quickscope Commands

```
f{char}
F{char}


t{char}
T{char}
```

## Link to Quickscope repo

[Quickscope](https://github.com/unblevable/quick-scope)

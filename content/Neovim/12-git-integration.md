---
title: Git integration
description:
date: "2020-05-02"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Plugins

We're going to be looking at 4 plugins that bring a good integrate git experience to Neovim

```
Plug 'mhinz/vim-signify'
Plug 'tpope/vim-fugitive'
Plug 'tpope/vim-rhubarb'
Plug 'junegunn/gv.vim'
```

## Create config files

```
touch ~/.config/nvim/plug-config/signify.vim
```

Make sure to source this file in `init.vim`

### Configure Signify

Signify will show **added**, **modified**, or **removed** lines

From the documentation:

```
SIGNS                                                            *signify-signs*

    `+`     This line was added.

    `!`     This line was modified.

    `_1`    The number of deleted lines below this sign. If the number is larger
    `99`    than 9, the `_` will be omitted. For numbers larger than 99, `_>`
    `_>`    will be shown instead.

    `!1`    This line was modified and the lines below were deleted.
    `!>`    It is a combination of `!` and `_`. If the number is larger than 9,
          `!>` will be shown instead.

    `‾`     The first line was removed. It's a special case of the `_` sign.

See |g:signify_sign_add| on how to use different signs.
```

You can also stage and unstage hunks

Here's some config for changing the buffer signs

```
" Change these if you want
let g:signify_sign_add               = '+'
let g:signify_sign_delete            = '_'
let g:signify_sign_delete_first_line = '‾'
let g:signify_sign_change            = '~'

" I find the numbers disctracting
let g:signify_sign_show_count = 0
let g:signify_sign_show_text = 1


" Jump though hunks
nmap <leader>gj <plug>(signify-next-hunk)
nmap <leader>gk <plug>(signify-prev-hunk)
nmap <leader>gJ 9999<leader>gJ
nmap <leader>gK 9999<leader>gk


" If you like colors instead
" highlight SignifySignAdd                  ctermbg=green                guibg=#00ff00
" highlight SignifySignDelete ctermfg=black ctermbg=red    guifg=#ffffff guibg=#ff0000
" highlight SignifySignChange ctermfg=black ctermbg=yellow guifg=#000000 guibg=#ffff00
```

### Commands

Here are the commands I use:

```
:SignifyToggle
:SignifyToggleHighlight
```

There are more commands but I prefer the options fugitive and gv provide

## Fugitive / Rhubarb

This plugin is what we'll use for interacting with git

**Note** GBrowse only works when Rhubarb is installed

**Note** Make sure you are using git through ssh not http

### Commands

```
:Git add

:Git commit

:Git push

:Git pull

:Git diff

:Git log

:Git blame

Gdiffsplit

GRemove

GBrowse
```

## GV

### Commands

From the readme: "A git commit browser."

To open commit browser:

```
:GV
```

You can pass git log options to the command, e.g. :GV -S foobar.

### Other options

```
:GV!         # will only list commits that affected the current file
:GV?         # fills the location list with the revisions of the current file
:GV          # or :GV? can be used in visual mode to track the changes in the selected lines.
```

### Mappings

- o or <cr> on a commit to display the content of it

- o or <cr> on commits to display the diff in the range

- O opens a new tab instead

- gb for :Gbrowse

- ]] and [[ to move between commits

- . to start command-line with :Git [CURSOR] SHA à la fugitive

- q or gq to close

## Check out the repos here

[signify](https://github.com/mhinz/vim-signify)

[fugitive](https://github.com/tpope/vim-fugitive)

[rhubarb](https://github.com/tpope/vim-rhubarb)

[gv](https://github.com/junegunn/gv.vim)

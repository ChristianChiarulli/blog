---
title: Git integration
description: 
date: '2020-05-02'
image: "neovim.png"
tags: ['neovim']
---

## Plugins

We're going to be looking at 3 plugins that bring a good integrate git experience to Neovim

```
Plug 'mhinz/vim-signify'
Plug 'tpope/vim-fugitive'
Plug 'junegunn/gv.vim'
Plug 'tpope/vim-rhubarb'
```

## Create config files

```
touch ~/.config/nvim/plug-config/signify.vim
touch ~/.config/nvim/plug-config/fugitive.vim
touch ~/.config/nvim/plug-config/gv.vim
touch ~/.config/nvim/plug-config/rhubarb.vim
```

Make sure to source these files in `init.vim`

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
let g:signify_sign_add               = '+'
let g:signify_sign_delete            = '_'
let g:signify_sign_delete_first_line = '‾'
let g:signify_sign_change            = '~'
```

### Commands

Here are the commands I use:

```
:SignifyToggle
:SignifyToggleHighlight
```

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
nmap <leader>gJ 9999<leader>gj
nmap <leader>gK 9999<leader>gk


" If you like colors instead
" highlight SignifySignAdd                  ctermbg=green                guibg=#00ff00
" highlight SignifySignDelete ctermfg=black ctermbg=red    guifg=#ffffff guibg=#ff0000
" highlight SignifySignChange ctermfg=black ctermbg=yellow guifg=#000000 guibg=#ffff00
```


There are more commands but I prefer the options fugitive and gv provide

## Fugitive 



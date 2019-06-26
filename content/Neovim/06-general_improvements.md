---
title: Neovim Housekeeping
description: This post is related to the gatsbyjs
date: '2019-02-15'
tags: ['neovim']
---

In this article we'll add some quality of life improvements in `general.vim` and also creating a new module for our `python_prog_path`.

## Create pythonpath.vim

```sh
touch ~/.config/nvim/modules/pythonpath.vim
```

## Add your python_prog_path to this new module 

This path used to be set in `general.vim` change the path to whatever your path is

```vim
let g:python3_host_prog = expand('~/Miniconda/envs/neovim/bin/python3.7')
```

## Now let's add some helpful things to general.vim

Read the comments above each line to see what it does

```vim
"""""""""" HOUSEKEEPING """"""""""
" display long lines as just one line
set nowrap
" The encoding displayed
set encoding=utf-8
" The encoding written to file
set fileencoding=utf-8
" Enable your mouse
set mouse=a
" Horizontal splits will automatically be below
set splitbelow
" Vertical splits will automatically be to the right
set splitright
" Support 256 colors
set t_Co=256
" Your working directory will always be the same as your working directory
set autochdir
" Insert 4 spaces for a tab
set tabstop=4
" Change the number of space characters inserted for indentation
set shiftwidth=4
" Makes tabbing smarter will realize you have 2 vs 4
set smarttab
" Converts tabs to spaces
set expandtab
" Makes indenting smart
set smartindent
" Good auto indent
set autoindent
" Always display the status line
set laststatus=2
" Line numbers
set number
" Enable highlighting of the current line
set cursorline
let g:elite_mode=1
" Disable arrow movement, resize splits instead.
if get(g:, 'elite_mode')
    nnoremap <Up>    :resize -2<CR>
    nnoremap <Down>  :resize +2<CR>
    nnoremap <Left>  :vertical resize -2<CR>
    nnoremap <Right> :vertical resize +2<CR>
endif
" Alternate way to save
nnoremap <C-s> :w<CR>
" Alternate way to quit
nnoremap <C-Q> :wq!<CR>
" Use control-c instead of escape
nnoremap <C-c> <Esc>
" <TAB>: completion.
inoremap <expr><TAB> pumvisible() ? "\<C-n>" : "\<TAB>"
" F2 split vertical
nnoremap <F2> :vsplit<CR>
" F3 split horizontal
nnoremap <F3> :split<CR>
" Toglle Line numbers
nnoremap <F4> :set nonumber!<CR>
" Get rid of highlights after search
nnoremap <silent> <F7> :nohlsearch<CR><F7>
" Open terminal with F1
nnoremap <F1> :10split term://bash<CR>
" insert mode for terminal
autocmd BufWinEnter,WinEnter term://* startinsert
autocmd BufLeave term://* stopinsert
" Remap window switch
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
" Remap terminal switch
tnoremap <C-[> <C-\><C-n>
tnoremap <C-c><Esc> <Esc>
tnoremap <C-h> <C-\><C-n><C-w>h
tnoremap <C-j> <C-\><C-n><C-w>j
tnoremap <C-k> <C-\><C-n><C-w>k
tnoremap <C-l> <C-\><C-n><C-w>l
" TAB in general mode will mov to text buffer
nnoremap <TAB> :bnext<CR>
" SHIFT-TAB will go back
nnoremap <S-TAB> :bprevious<CR>
" Map leader switch to whatever you want
let mapleader = ","
```

## Wrap up 

Take some time to disable and enable some of these settings to see if you like them or not

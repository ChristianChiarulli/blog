---
title: Make Neovim look good
description: This post is related to the gatsbyjs
date: '2019-02-11'
tags: ['neovim']
---

Neovim looks a little boring out of the box so let's change that with a theme and a powerline

## Get some themes

First we'll install a few themes through dein and an extension called `airline`

add the following to `plugins.vim`

```vim
call dein#add('liuchengxu/space-vim-dark')
call dein#add('joshdick/onedark.vim')
call dein#add('morhetz/gruvbox')
call dein#add('jacoborus/tender.vim')
call dein#add('sheerun/vim-polyglot')
call dein#add('vim-airline/vim-airline')
call dein#add('vim-airline/vim-airline-themes')
```

## Side note auto update

If you add the following to `plugins.vim` everytime neovim opens dein will automatically look for your new plugins

```vim
if dein#check_install()
  call dein#install()
endif
```

## Add a module for themes

```sh
touch ~/.config/nvim/modules/theme.vim
```

## Activate your theme

Edit `theme.vim` with the following:

```vim
" Switch to whatever colorscheme you like
"colorscheme onedark
"colorscheme gruvbox
colorscheme tender

" This chunk is just for spacevim theme
"colorscheme space-vim-dark
"let g:space_vim_dark_background = 235
"color space-vim-dark

" gray comments
hi Comment guifg=#5C6370 ctermfg=59
" this will show italics if your terminal supports that
hi Comment cterm=italic

" checks if your terminal has 24-bit color support
if (has("termguicolors"))
    set termguicolors
    hi LineNr ctermbg=NONE guibg=NONE
endif
```

I have mine set to `tender` but you should experiment and see what you like

## Add your theme module to init.vim

now we just need to source the theme module from `init.vim`

```vim
source $HOME/.config/nvim/modules/theme.vim
```

## Changes

### plugins.vim

```vim
" Add the dein installation directory into runtimepath
set runtimepath+=~/.config/nvim/dein/repos/github.com/Shougo/dein.vim

if dein#load_state('~/.config/nvim/dein')
  call dein#begin('~/.config/nvim/dein')

  " Themes
  call dein#add('liuchengxu/space-vim-dark')
  call dein#add('joshdick/onedark.vim')
  call dein#add('morhetz/gruvbox')
  call dein#add('jacoborus/tender.vim')
  " Better Syntax Support
  call dein#add('sheerun/vim-polyglot')
  " powerline
  call dein#add('vim-airline/vim-airline')
  call dein#add('vim-airline/vim-airline-themes')

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

### theme.vim

```vim 
" Switch to whatever colorscheme you like
"colorscheme onedark
"colorscheme gruvbox
colorscheme tender

" This chunk is just for spacevim theme
"colorscheme space-vim-dark
"let g:space_vim_dark_background = 235
"color space-vim-dark

" gray comments
hi Comment guifg=#5C6370 ctermfg=59
" this will show italics if your terminal supports that
hi Comment cterm=italic

" checks if your terminal has 24-bit color support
if (has("termguicolors"))
    set termguicolors
    hi LineNr ctermbg=NONE guibg=NONE
endif
```

### init.vim

```vim
" Activate Modules
source $HOME/.config/nvim/modules/plugins.vim
source $HOME/.config/nvim/modules/general.vim
source $HOME/.config/nvim/modules/theme.vim
```

## Conclusion 

You should have a few themes to try out now next we'll do some small configurations for the `airline` plugin

Get my full config on Github

<https://github.com/ChristianChiarulli/nvim>

---
title: Neovim Themes
description:
date: "2020-04-25"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Plugin your theme

First open vim plug and add your theme, you can add as many themes as you want here to switch between them at any time

I'm going to be installing the onedark theme I'll link to a repo with a bunch of others at the bottom of the blog

Open `vim-plug/plugins.vim` and add the following:

```
Plug 'joshdick/onedark.vim'
```

Make sure to run `:PlugInstall`

## Theme config

First create a directory for themes and then add the name of the theme you want to install

```
mkdir ~/.config/nvim/themes

touch ~/.config/nvim/themes/onedark.vim
```

Now let's set the colorscheme, open `onedark.vim` and add the following:

```
" onedark.vim override: Don't set a background color when running in a terminal;
if (has("autocmd") && !has("gui_running"))
  augroup colorset
    autocmd!
    let s:white = { "gui": "#ABB2BF", "cterm": "145", "cterm16" : "7" }
    autocmd ColorScheme * call onedark#set_highlight("Normal", { "fg": s:white }) " `bg` will not be styled since there is no `bg` setting
  augroup END
endif

hi Comment cterm=italic
let g:onedark_hide_endofbuffer=1
let g:onedark_terminal_italics=1
let g:onedark_termcolors=256

syntax on
colorscheme onedark


" checks if your terminal has 24-bit color support
if (has("termguicolors"))
    set termguicolors
    hi LineNr ctermbg=NONE guibg=NONE
endif
```

### Note

This config is specific to this theme, checkout the readme for whatever theme you install

Now we can add our theme to `init.vim`

```
source $HOME/.config/nvim/themes/onedark.vim
```

## Where to find more themes

[Check out this repo](https://github.com/rafi/awesome-vim-colorschemes)

Click on any theme in the readme and install it similar to the way I did above

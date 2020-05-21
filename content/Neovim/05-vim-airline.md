---
title: Airline
description:
date: "2020-04-27"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Plugin Airline and Airline themes

Add the following to `~/.config/nvim/vim-plug/plugins.vim`

```
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
```

## Create config

Create theme file for airline

```
touch ~/.config/nvim/themes/airline.vim
```

Add the following configuration

```
" enable tabline
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#left_sep = ''
let g:airline#extensions#tabline#left_alt_sep = ''
let g:airline#extensions#tabline#right_sep = ''
let g:airline#extensions#tabline#right_alt_sep = ''

" enable powerline fonts
let g:airline_powerline_fonts = 1
let g:airline_left_sep = ''
let g:airline_right_sep = ''

" Switch to your current theme
let g:airline_theme = 'onedark'

" Always show tabs
set showtabline=2

" We don't need to see things like -- INSERT -- anymore
set noshowmode
```

Don't forget to source this file

```
source $HOME/.config/nvim/themes/airline.vim
```

## Install fonts

You may want to install these fonts if you want the little arrows and stuff

```
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```

## Further documentation and repo

[vim airline](https://github.com/vim-airline/vim-airline)
[vim airline themes](https://github.com/vim-airline/vim-airline-themes)

---
title: Minimum Airline Config
description: This post is related to the gatsbyjs
date: '2019-02-13'
tags: ['neovim']
---

Airline is a:

"Lean & mean status/tabline for vim that's light as air."

You can read all about it and how to extend it here

<https://github.com/vim-airline/vim-airline>

## Let's add a module for airline

```sh
touch ~/.config/nvim/modules/airline.vim
```

add the following:

### airline.vim

```vim
" enable tabline
let g:airline#extensions#tabline#enabled = 1
" enable powerline fonts
let g:airline_powerline_fonts = 1
" Switch to your current theme
let g:airline_theme = 'tender'
```

## Font support

You may also need some font support, so let's get that with the following

```sh
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```

## If using iterm2

Go to preferences -> Profiles -> Text

Select `Use a different font for non-ASCII text`

Change both of the fonts to something that says `powerline` at the end

Here is alink tot the repo for more support

<https://github.com/powerline/fonts>



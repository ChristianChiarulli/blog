---
title: Project Management with Startify
description:
date: "2020-05-01"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Plug in Startify

```
Plug 'mhinz/vim-startify'
```

## Create a config file

```
touch ~/.config/nvim/plug-config/start-screen.vim
```

## Sessions

This plugin will let us manage our sessions very easily

```
:SLoad       load a session
:SSave[!]    save a session
:SDelete[!]  delete a session
:SClose      close a session
```

Add ! to skip the prompt

We should specify where we want Startify to keep our sessions

```
let g:startify_session_dir = '~/.config/nvim/session'
```

## Startify Lists

We can specify what shows up in our menu like this:

```
let g:startify_lists = [
          \ { 'type': 'files',     'header': ['   Files']            },
          \ { 'type': 'dir',       'header': ['   Current Directory '. getcwd()] },
          \ { 'type': 'sessions',  'header': ['   Sessions']       },
          \ { 'type': 'bookmarks', 'header': ['   Bookmarks']      },
          \ ]
```

## Bookmarks

```
let g:startify_bookmarks = [
            \ { 'c': '~/.config/i3/config' },
            \ { 'i': '~/.config/nvim/init.vim' },
            \ { 'z': '~/.zshrc' },
            \ '~/Blog',
            \ '~/Code',
            \ '~/Pics',
            \ ]
```

## Configuration options

You can automatically restart a session like this

```
let g:startify_session_autoload = 1
```

From the docs:

"If this option is enabled and you start Vim in a directory that contains a
`Session.vim`, that session will be loaded automatically. Otherwise it will be
shown as the top entry in the Startify buffer."

Let Startify take care of buffers

```
let g:startify_session_delete_buffers = 1
```

Similar to Vim-rooter

```
let g:startify_change_to_vcs_root = 1
```

If you want Unicode

```
let g:startify_fortune_use_unicode = 1
```

Automatically Update Sessions

```
let g:startify_session_persistence = 1
```

Get rid of empy buffer and quit

```
let g:startify_enable_special = 0
```

## Add a custom header

```
let g:startify_custom_header = [
        \ '   _  __     _         __  ___         __     ___ ',
        \ '  / |/ /  __(_)_ _    /  |/  /__ _____/ /    |_  |',
        \ ' /    / |/ / /  ` \  / /|_/ / _ `/ __/ _ \  / __/ ',
        \ '/_/|_/|___/_/_/_/_/ /_/  /_/\_,_/\__/_//_/ /____/ ',
        \]
```

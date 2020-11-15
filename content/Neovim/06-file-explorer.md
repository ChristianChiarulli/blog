---
title: Exploring coc-explorer
description:
date: "2020-04-28"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Install coc-explorer

This install will be a little different and if you've been following along you probably know we are using coc

coc-explorer is just and extension to that

```
:CocInstall coc-explorer
```

## Config

We can add some simple settings in the `coc-settings.json` file

```
// explorer
  "explorer.width": 30,
  "explorer.icon.enableNerdfont": true,
  "explorer.previewAction.onHover": false,
  "explorer.keyMappings.global": {
    "<cr>": ["expandable?", "expand", "open"],
    "v": "open:vsplit"
  }
```

We'll also add some settings in `~/.config/nvim/plug-config/coc.vim`

Append these lines to the end

```
" Explorer
let g:coc_explorer_global_presets = {
\   '.vim': {
\     'root-uri': '~/.vim',
\   },
\   'tab': {
\     'position': 'tab',
\     'quit-on-open': v:true,
\   },
\   'floating': {
\     'position': 'floating',
\     'open-action-strategy': 'sourceWindow',
\   },
\   'floatingTop': {
\     'position': 'floating',
\     'floating-position': 'center-top',
\     'open-action-strategy': 'sourceWindow',
\   },
\   'floatingLeftside': {
\     'position': 'floating',
\     'floating-position': 'left-center',
\     'floating-width': 50,
\     'open-action-strategy': 'sourceWindow',
\   },
\   'floatingRightside': {
\     'position': 'floating',
\     'floating-position': 'right-center',
\     'floating-width': 50,
\     'open-action-strategy': 'sourceWindow',
\   },
\   'simplify': {
\     'file-child-template': '[selection | clip | 1] [indent][icon | 1] [filename omitCenter 1]'
\   }
\ }

nmap <space>e :CocCommand explorer<CR>
nmap <space>f :CocCommand explorer --preset floating<CR>
autocmd BufEnter * if (winnr("$") == 1 && &filetype == 'coc-explorer') | q | endif
```

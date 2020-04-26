---
title: Exploring coc-explorer
description: 
date: '2020-04-27'
image: "neovim.png"
tags: ['neovim']
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
  "explorer.keyMappings": {
    "<cr>": ["expandable?", "expand", "open"],
    "v": "open:vsplit"
  }
```

We'll also add some settings in `~/.config/nvim/plug-config/coc.vim`

Append these lines to the end

```
" Explorer
nmap <space>e :CocCommand explorer<CR>
nmap <space>f :CocCommand explorer --preset floating<CR>
autocmd BufEnter * if (winnr("$") == 1 && &filetype == 'coc-explorer') | q | endif
```


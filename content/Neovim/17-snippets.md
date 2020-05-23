---
title: Snippets with CoC
date: "2020-05-22"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Install

```
Plug 'honza/vim-snippets'
```

Make sure you install CoC, I have a video for that [here](https://www.youtube.com/watch?v=OXEVhnY621M)

After setting up CoC you can install with:

```
:CocInstall coc-snippets
```

## Config

You can create a config file and add the following:

```
" Use <C-l> for trigger snippet expand.
imap <C-l> <Plug>(coc-snippets-expand)

" Use <C-j> for select text for visual placeholder of snippet.
vmap <C-j> <Plug>(coc-snippets-select)

" Use <C-j> for jump to next placeholder, it's default of coc.nvim
let g:coc_snippet_next = '<c-j>'

" Use <C-k> for jump to previous placeholder, it's default of coc.nvim
let g:coc_snippet_prev = '<c-k>'

" Use <C-j> for both expand and jump (make expand higher priority.)
imap <C-j> <Plug>(coc-snippets-expand-jump)
```

## Add your own snippets

Edit coc-settings.json and add the following:

```
"snippets.userSnippetsDirectory": "~/.config/nvim/snips",
```

After that you can add a file like this:

```
mkdir ~/.config/nvim/snips

touch ~/.config/nvim/snips/markdown.snippets # <- doesn't have to be called markdown
```

## Commands

You'll be able to notice it's a snippet from the `~` character

Auto complete should feel very familiar, refer to the earlier bindings you set.

To list all snippets for a current file:

```
:CocList snippets

:CocCommand snippets.editSnippets

:CocCommand snippets.openSnippetFiles
```

## Repo Links

[coc-snippets](https://github.com/neoclide/coc-snippets)

[honza/vim-snippets](https://github.com/honza/vim-snippets)

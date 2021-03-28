---
title: Java in Neovim
date: "2020-11-04"
image: "Neovim_Java.png"
author: "Chris"
tags: [neovim]
---

## Current State of Java + Neovim

**Available:**

- [Treesitter highlighting](https://github.com/nvim-treesitter/nvim-treesitter)
- Goto definition
- Goto references
- Formatting
- Diagnostics
- Hover
- Refactor/Rename
- Search files (FZF)
- Search text (FZF)
- Quickfix
- Lombok
- Configuration in `coc-settings.json`

**Difficult to Implement:**

- Debugging

\* This can be done but in my opinion it's difficult to get setup, if you'd like to look further into it checkout the following:

- [nvim-dap](https://github.com/mfussenegger/nvim-dap)
- [vimspector](https://github.com/puremourning/vimspector)

### Note

You will need to have CoC installed I have a blog post and video for installing CoC here:

[YouTube Video](https://www.youtube.com/watch?v=OXEVhnY621M)

[Blog Post](https://www.chrisatmachine.com/Neovim/04-vim-coc/)

## Install

**Treesitter**

_You will need Neovim>=0.5_

- Install with VimPlug

```
Plug 'nvim-treesitter/nvim-treesitter'
```

Add this to your `init.vim`

```
require'nvim-treesitter.configs'.setup {
  ensure_installed = "maintained", -- one of "all", "maintained" (parsers with maintainers), or a list of languages
  highlight = {
    enable = true,              -- false will disable the whole extension
  },
}
```

**coc-java**

```
:CocInstall coc-java
```

**Lombok**

```
sudo mkdir /usr/local/share/lombok

sudo wget https://projectlombok.org/downloads/lombok.jar -O /usr/local/share/lombok/lombok.jar
```

## Commands

Here are a bunch of commands to get the behavior of this video:

```
<Plug>(coc-codeaction)              " line action
<Plug>(coc-definition)              " definition
<Plug>(coc-references)              " references
<Plug>(coc-type-definition)         " type definition
<Plug>(coc-rename)                  " rename
<Plug>(coc-declaration)             " declaration
<Plug>(coc-implementation)          " implementation
<Plug>(coc-format)                  " format
<Plug>(coc-fix-current)             " quickfix
<Plug>(coc-codelens-action)         " code lens
<Plug>(coc-diagnostic-next)         " next diagnostic
<Plug>(coc-diagnostic-next-error)   " next error
:CocList diagnostics                " diagnostics
:CocList outline                    " search outline
:CocList -I symbols                 " references
:CocUpdate                          " update CoC
:CocDisable                         " disable CoC
:CocEnable                          " enable CoC
```

## Configuration

- `coc-settings.json`

```
// codelens
"codeLens.enable": true,
"java.referencesCodeLens.enabled": true,
"java.jdt.ls.vmargs": "-javaagent:/usr/local/share/lombok/lombok.jar",
// "java.jdt.ls.vmargs": "-javaagent:/usr/local/share/lombok/lombok.jar -Xbootclasspath/a:/usr/local/share/lombok/lombok.jar", // for older versions of Java
```

## Repo Links

[coc-java](https://github.com/neoclide/coc-java)
[treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

---
title: Discovering extensions with coc-marketplace
date: "2020-07-31"
image: "neovim.png"
author: "Chris"
tags: [neovim]
---

## What is coc-marketplace?

This extension is a marketplace for all other coc-extensions

### Note

You will need to have CoC installed I have a blog post and video for installing CoC here:

[YouTube Video](https://www.youtube.com/watch?v=OXEVhnY621M)

[Blog Post](https://www.chrisatmachine.com/Neovim/04-vim-coc/)

## Install

```
:CocInstall coc-emoji
```

## Commands

Emojis, are enabled for markdown files only by default.

You can add filetypes with the following to you `coc-settings.json`:

```
"coc.source.emoji.filetypes": ["markdown"]
```

To see a list of emoji completion candidates, `:` is the trigger character.

It is also possible to change the emoji trigger character by putting the following in your coc-settings.json:

```
"coc.source.emoji.triggerCharacters": ["TRIGGERCHAR"]
```

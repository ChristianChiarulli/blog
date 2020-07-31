---
title: Using Live Server with Neovim
date: "2020-07-30"
image: "neovim.png"
author: "Chris"
tags: [neovim]
---

## What is Live Server?

Live-server is an `npm` package that will allow you to see real time changes for `.html` files in your browser.

### Note

You will need to have `node` & `npm` installed I have a blog post about installing node using `fnm` [here](https://www.chrisatmachine.com/Nodejs/02-Install-FNM/)

## Install

```
npm i -g live-server
```

## Commands

You can have live server monitor and html file like this:

```
live-server some-file.html
```

Or watch a directory like this:

```
live-server some-directory/
```

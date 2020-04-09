---
title: Installing zsh
description: description
date: "2020-04-04"
tags: ['zsh']
---

First let's check what shell we're currently using (could be zsh who knows)

```
echo $SHELL
```

## Install zsh

```
pacman -S zsh
```

## Install zsh-completions

```
pacman -S zsh-completions
```

## Change shell

```
chsh -s /bin/zsh
```

## Reboot 

You should be presented with a screen to setup zsh

The easiest way to deal with this is to press 0

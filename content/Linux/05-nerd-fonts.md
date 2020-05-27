---
title: Installing Nerd Fonts
date: "2020-05-23"
image: "nerdfont.png"
author: "Chris"
tags: ["archlinux", "fonts"]
---

## What are Nerd Fonts?

From the repo:

"Nerd Fonts is a project that patches developer targeted fonts with a high number of glyphs (icons). Specifically to add a high number of extra glyphs from popular 'iconic fonts' such as Font Awesome ➶, Devicons ➶, Octicons ➶, and others."

## Installing a font

There are a number of ways to do this listed on the repo, out of those options I think two are really useful.

1. Manual install

Go to the patched font directory, choose your font, download and install into `~/.local/share/fonts`

2. Curl Download

Another good option for writing your own script is to use the `curl` command to download the font like this:

```
mkdir -p ~/.local/share/fonts
cd ~/.local/share/fonts && curl -fLo "Fira Code Regular Nerd Font Complete.otf" https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/FiraCode/Regular/complete/Fira%20Code%20Regular%20Nerd%20Font%20Complete.otf
```

## ttf vs otf

otf is a newer standard based on ttf, when given the option you should generally choose otf.

[here](https://www.makeuseof.com/tag/otf-vs-ttf-fonts-one-better/) is a good article explaining the difference.

## Links

[Nerd Font Repo](https://github.com/ryanoasis/nerd-fonts)

[Nerd Font Website](https://www.nerdfonts.com/)

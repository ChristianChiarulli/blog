---
title: Install packages from AUR with yay
description: description
date: "2020-05-14"
image: "arch-logo.png"
author: "Chris"
tags: ["archlinux"]
---

## What is the AUR?

The AUR is the Arch User Repository, it essentially holds a bunch of packages

from the Arch community not found in the official repository.

## What is yay?

`yay` stands for Yet Another Yogurt

`yay` is like `pacman` but for the AUR

It's written in Go

## Install yay

- Make sure you have git:

  ```
  sudo pacman -S git
  ```

- Install using git:

  ```
  git clone https://aur.archlinux.org/yay.git
  cd yay
  makepkg -si
  ```

- Install binary (Optional)

  ```
  git clone https://aur.archlinux.org/yay-bin.git
  cd yay-bin
  makepkg -si
  ```

## Commands

Some basics to get you started:

- Install a package:

  ```
  yay -S <package>
  ```

- Remove a package:

  ```
  yay -R <package>

  yay -Rns <package>   # <- remove package and dependencies
  ```

- System upgrade:

  ```
  yay -Syu             # <- includes all packages even if installed with pacman

  yay                  # <- this does the same thing

  yay -Syu --devel     # <- includes -git installed packges
  ```

- Search for a package

  ```
  yay -Ss <package>    # <- this will just search

  yay <package>        # <- this will search and ask if you want to install

  yay -Si <package>    # <- this will get info about the package, including dependencies
  ```

- List out packages that need to be updated:

  ```
  yay -Pu
  ```

- Clean up unused dependencies

  ```
  yay -Yc
  ```

Remember `man yay` should be your goto

## Note on different types of packages

[reddit link with explanation](https://www.reddit.com/r/archlinux/comments/ggnu97/what_is_the_difference_between_versions_of_the/)

## Enable color output

Make sure you have the Color option set in your `/etc/pacman.conf`

## AUR can be dangerous

Technically not all of the content up there is vetted.

So make sure what you download has lots of votes or that you have inspected the source code

## FZF Search

```
yay -Slq | fzf -m --preview 'cat <(yay -Si {1}) <(yay -Fl {1} | awk "{print \$2}")' | xargs -ro  yay -S
```

## Links

[yay](https://github.com/Jguer/yay)

[AUR](https://aur.archlinux.org/packages/)

[ArchWiki](https://wiki.archlinux.org/index.php/Arch_User_Repository)

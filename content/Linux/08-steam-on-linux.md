---
title: Steam on Arch Linux
date: "2020-09-20"
image: "steam.jpg"
author: "Chris"
tags: ["linux"]
---

## Enable Multilib

Uncomment the `[multilib]` section in `/etc/pacman.conf`

```
[multilib]
Include = /etc/pacman.d/mirrorlist
```

## Upgrade System

```
pacman -Syu
```

## Install Steam

```
sudo pacman -S steam
```

## Enable Proton

You can enable Proton in the Steam Client in `Steam > Settings > Steam Play`

To force enable Proton, right click on the game, `Properties > General > Force the use of a specific Steam Play compatibility tool`

## Links References

[ArchWiki](https://wiki.archlinux.org/index.php/steam)

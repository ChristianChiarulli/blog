---
title: What to do after installing Arch Linux
description: description
date: "2020-05-13"
image: "arch-logo.png"
author: "Chris"
tags: ["archlinux"]
---

## Setup your network

```
ping archlinux.org

pacman -S networkmanager network-manager-applet
```

## Enable NetworkManager service

```
systemctl start NetworkManager

systemctl enable NetworkManager
```

## Connect to Network

```
nmtui
```

Here we will simply add a new user to our system and give them wheel access

## Add a user

- Add user

```sh
useradd -m -g wheel <your_user>
```

- Create password

```sh
passwd <your_user>
```

## Switch users

To switch to your user run:

```sh
su <your_user>
```

## Giving your user access to sudo

Make sure you have `vi` installed

Enter:

```sh
visudo
```

and uncomment this line so it looks like this

```sh
%wheel ALL=(ALL) ALL
```

if you hate typing your password everytime like me do this instead

```sh
%wheel ALL=(ALL) NOPASSWD: ALL
```

## Need more?

check out man pages for the following:

- useradd
- userdel
- groupadd
- groupdel

you can do this by typing:

```
man <command>
```

## Install Xorg

```
pacman -S xorg-server xorg-xinit
```

## Installing a DM

```
pacman -S lightdm

pacman -S lightdm-gtk-greeter

pacman -S lightdm-gtk-greeter-settings
```

## Enable lightdm service

```
systemctl enable lightdm
```

## List our enabled services

```
systemctl list-unit-files --state=enabled
```

## Install i3wm (or any WM or DE)

```
pacman -S i3-gaps i3status i3lock dmenu
```

I'm using i3 but you can install any WM or DE you like best

Here are some WM options:

- dwm
- awesome
- bspwm
- xmonad

Here are some DE options:

- XFCE
- KDE
- Gnome

### Install DE (Optional)

```
pacman -S xfce4
```

## Install a terminal emulator

```
pacman -S alacritty
```

I'm using Alacritty but you can install any terminal emulator you want

Here are some options:

- st
- rxvt-unicode
- termite
- terminator

## Install a web browser and file manager

```
pacman -S firefox

pacman -S nautilus
```

## We're done

You can now reboot into your new system!

```
reboot
```

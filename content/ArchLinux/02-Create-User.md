---
title: Creating users
description: description
date: "2020-04-04"
image: "arch-logo.png"
author: "Chris"
tags: ["linux"]
---

Here we will simply add a new user to our system and give them wheel access

## Add a user

- Add user

```
useradd -m -g wheel <your_user>
```

- Create password

```
passwd <your_user>
```

## Switch users

To switch to your user run:

```
su <your_user>
```

## Giving your user access to sudo

Make sure you have `vi` installed

Enter:

```
visudo
```

and uncomment this line so it looks like this

```
%wheel ALL=(ALL) ALL
```

if you hate typing your password everytime like me do this instead

```
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

TODO

- i3
- alacritty
- zsh, zsh-completion
  https://wiki.archlinux.org/index.php/Command-line_shell#Changing_your_default_shell
  https://wiki.archlinux.org/index.php/Zsh
  https://wiki.archlinux.org/index.php/Zsh#Startup/Shutdown_files

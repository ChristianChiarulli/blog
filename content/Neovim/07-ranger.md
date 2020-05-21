---
title: Integrate Neovim with Ranger
description:
date: "2020-04-29"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Install Ranger

- Mac

  ```
  brew install ranger
  ```

- Ubuntu

  ```
  sudo apt install ranger
  ```

- Arch

  ```
  sudo pacman -S ranger
  ```

## Install Ranger devicons

```
git clone https://github.com/alexanderjeurissen/ranger_devicons ~/.config/ranger/plugins/ranger_devicons
```

You can now add `default_linemode devicons` to your `rc.conf`

## Install Ueberzug (Linux only)

Unfortunately Ueberzug only supports linux at the moment as far as I know

- Ubuntu (Note you may experience your images being badly placed this is because pip doesn't have the newest version of ueberzug, if you find this issue please install from source)

  ```
  pip install ueberzug
  ```

- Arch

  ```
  yay -S python-ueberzug-git
  ```

## Ranger config file

make sure you create a ranger config file and at least add the following lines

Add the following file:

```
mkdir ~/.config/ranger

touch ~/.config/ranger/rc.conf
```

Add this configuration to `rc.conf`

```
set preview_images_method ueberzug

default_linemode devicons

set show_hidden true
```

## Add the Ranger plugin

```
Plug 'kevinhwang91/rnvimr', {'do': 'make sync'}
```

Add some config to `~/.config/nvim/plug-config/rnvimr.vim`

```
touch ~/.config/nvim/plug-config/rnvimr.vim
```

Add the following:

```
" Make Ranger replace netrw and be the file explorer
let g:rnvimr_ex_enable = 1

nmap <space>r :RnvimrToggle<CR>
```

Make sure to source the config

```
source $HOME/.config/nvim/plug-config/rnvimr.vim
```

## Sync your ranger config

You may need to run this

```
:RnvimrSync
```

## Alternative Ranger plugin

[Alternative](https://github.com/francoiscabrol/ranger.vim)

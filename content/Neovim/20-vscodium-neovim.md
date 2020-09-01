---
title: VS-Codium & Neovim
date: "2020-08-27"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## What is VS-Codium?

### Installing VS-Codium

- On Mac

  ```
  brew cask install vscodium
  ```

- Arch Linux

  ```
  yay -S vscodium
  ```

- Ubuntu

  ```
  sudo apt install vscodium
  ```

### Configuring Plugins

By default you will be able to use all of the extensions available on [open-vsx.org](https://open-vsx.org/).

If you want all of the extensions available in vanilla VS Code then you will need to edit `product.json` and add the following:

```json
"extensionsGallery": {
    "serviceUrl": "https://marketplace.visualstudio.com/_apis/public/gallery",
    "itemUrl": "https://marketplace.visualstudio.com/items"
}
```

## The Neovim Plugin

### Install Neovim Plugin

## Integrating your config

### Commands

## The Which-key Plugin

## Links to repos

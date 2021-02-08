---
title: VSCodium & Neovim
date: "2020-09-01"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## What is VSCodium?

From `vscodium.com`:

Microsoft’s vscode source code is open source (MIT-licensed), but the product available for download (Visual Studio Code) is licensed under this not-FLOSS license and contains telemetry/tracking.

### Installing VSCodium

- On Mac

  ```
  brew install --cask vscodium
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

#### Finding product.json on Mac

Open `Finder` then `Applications`

Then right click `VSCodium` and select `Show Package Contents`

From here the path is `Contents/Resources/app/product.json`

#### Finding product.json on Linux

Here is the path to `product.json` on Linux:

```
/usr/share/vscodium-bin/resources/app/product.json
```

## The Neovim Extension

From the repo description:

The extension is using full embedded neovim instance as backend (with the exception of the insert mode and window/buffer/file management), no more half-complete VIM emulation

### Install Neovim Extension

Search for the Neo Vim extension

## Integrating your config

To integrate your config you will just need to point the extension to your `nvim` binary and `init.vim`

## The Which-key Extension

Search for the Which-key extension

## Configuration

You can find sample configurations in my `nvim` repo

- General/which-key settings: [settings.json](https://github.com/ChristianChiarulli/nvim/blob/master/utils/vscode_config/settings.json)

- Keybindings: [keybindings.json](https://github.com/ChristianChiarulli/nvim/blob/master/utils/vscode_config/keybindings.json)

- Neovim settings [settings.vim](https://github.com/ChristianChiarulli/nvim/blob/master/vscode/settings.vim)

## Links to repos

[VSCodium](https://github.com/VSCodium/vscodium)

[Neo Vim](https://github.com/asvetliakov/vscode-neovim)

[vscode-which-key](https://github.com/VSpaceCode/vscode-which-key)

---
title: Alacritty GPU Accelerated Terminal Emulator
date: "2020-05-23"
image: "alacritty.png"
author: "Chris"
tags: ["linux"]
---

## What is Alacritty?

Alacritty bills itself as the fastest terminal emulator in existence.

From the repo:

"Using the GPU for rendering enables optimizations that simply aren't possible without it. Alacritty currently supports macOS, Linux, BSD, and Windows."

## Installing Alacritty

- Mac

  ```
  brew install --cask alacritty
  ```

- Ubuntu

  ```
  sudo apt install alacritty
  ```

- Arch

  ```
  sudo pacman -S alacritty
  ```

- Windows

  ```
  choco install alacritty
  ```

## Configure

Add a config file since Alacritty doesn't create one for you

- On Linux and Mac

  ```
  ~/.config/alacritty/alacritty.yml
  ```

- On Windows

  ```
  %APPDATA%\alacritty\alacritty.yml
  ```

### Example Config

```
colors:
  # Default colors
  primary:
    background: "#1e2127"
    # background: "#2E3440"
    foreground: "#D8DEE9"

  # Normal colors
  normal:
    black: "#3B4252"
    red: "#BF616A"
    green: "#A3BE8C"
    yellow: "#EBCB8B"
    blue: "#81A1C1"
    magenta: "#B48EAD"
    cyan: "#88C0D0"
    white: "#abb2bf"

  # Bright colors
  bright:
    black: "#5c6370"
    red: "#e06c75"
    green: "#98c379"
    yellow: "#d19a66"
    blue: "#61afef"
    magenta: "#c678dd"
    cyan: "#56b6c2"
    white: "#ECEFF4"

background_opacity: 1.0

font:
  normal:
    family: "Hack"
    style: Regular
  bold:
    family: "Hack"
    style: Bold
  italic:
    family: "Hack"
    style: Italic
  bold_italic:
    family: "Hack"
    style: Bold Italic

  # Point size
  size: 22.0

  offset:
    x: 0
    y: 0
  glyph_offset:
    x: 0
    y: 0

window:
  padding:
    x: 2
    y: 2

scrolling:
  # Maximum number of lines in the scrollback buffer.
  # Specifying '0' will disable scrolling.
  history: 10000

  # Number of lines the viewport will move for every line scrolled when
  # scrollback is enabled (history > 0).
  multiplier: 10

# If `true`, bold text is drawn using the bright color variants.
draw_bold_text_with_bright_colors: true

selection:
  semantic_escape_chars: ',│`|:"'' ()[]{}<>'
  save_to_clipboard: true

live_config_reload: true

key_bindings:
  - { key: V, mods: Control|Shift, action: Paste }
  - { key: C, mods: Control|Shift, action: Copy }
  - { key: Key0, mods: Control, action: ResetFontSize }
  - { key: Equals, mods: Control, action: IncreaseFontSize }
  - { key: Add, mods: Control, action: IncreaseFontSize }
  - { key: Subtract, mods: Control, action: DecreaseFontSize }
  - { key: Minus, mods: Control, action: DecreaseFontSize }
  - { key: N, mods: Control, action: SpawnNewInstance }
```

## Proving it runs on the GPU

If you're running nvidia you check using the following command

```
watch -n -1 nvidia-smi
```

## Links

[Repo](https://github.com/alacritty/alacritty)

[Color Schemes](https://github.com/alacritty/alacritty/wiki/Color-schemes)

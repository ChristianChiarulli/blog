---
title: TTY Fonts
date: "2021-03-29"
image: "terminus-fonts.jpg"
author: "Chris"
tags: ["linux"]
---

## Why would you want this?

If you ever need a better or bigger font in your TTY, for instance during a Arch Linux install 

## Installing terminus fonts

- [kbd](https://kbd-project.org/)

    ```bash
    pacman -S kbd
    ```

- [terminus fonts](https://github.com/powerline/fonts/tree/master/Terminus)

    ```bash
    pacman -S terminus-font
    ```

## Set your font

```bash
cd /usr/share/kbd/consolefonts
```

My preferred font is: `ter-p32b`

So in this case:

```
setfont ter-p32b
```

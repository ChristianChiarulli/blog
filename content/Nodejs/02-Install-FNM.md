---
title: Installing Fast Node Manager (fnm)
description: description
date: "2020-07-30"
image: "fnm.png"
author: "Chris"
tags: ["nodejs"]
---

Using a node manager helps you deal with annoying `npm` permissions issues.

If you already use something like `nvm` you'll notice `fnm` is significantly faster.

## Install

### On Mac:

```
brew install fnm
```

### On Linux:

```
sudo apt install curl
```

The following command will automatically install `fnm` using `curl`

```
curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir $HOME/.local/bin
```

If you don't already have `.local/bin` in your path

```
export PATH=/home/$USER/.local/bin/fnm:$PATH
```

### Upgrade

```
curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir $HOME/.local/bin --skip-shell
```

## bashrc/zshrc config

Add the following to you `.bashrc` or `.zshrc`

```
eval "$(fnm env)"
```

## Commands

### List install candidates

```
fnm ls-remote
```

### Install a node version

```
fnm install 13.14.0
```

### List currently installed versions

```
fnm ls
```

### Choose version you would like to use

```
fnm use 13.14.0
```

### Check currently active version

```
fnm current
```

### Alias a version

```
fnm alias 13.14.0 nickname

fnm use nickname
```

### Default a version

```
fnm default 13.14.0
```

## Autocompletions

You can replace `zsh` with `bash` if you are using `bash`

```
mkdir -p ~/.config/zsh/completions

touch ~/.config/zsh/completions/_fnm

fnm completions --shell=zsh > ~/.config/zsh/completions/_fnm
```

Then add the following to your `.zshrc`:

```
fpath+=~/.config/zsh/completions/_fnm
compinit
```

## Wrapping up

Versioning `node` should be much faster now

### Link to Author

[fnm](https://github.com/Schniz/fnm)

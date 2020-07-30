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

- On Mac:

```
brew install Schniz/tap/fnm
```

- On Linux:

```
sudo apt install curl
```

The following command will automatically install fnm using `curl`

```
curl -fsSL https://github.com/Schniz/fnm/raw/master/.ci/install.sh | bash -s -- --install-dir $HOME/.local/bin
```

## Upgrade

```
curl -fsSL https://github.com/Schniz/fnm/raw/master/.ci/install.sh | bash -s -- --install-dir $HOME/.local/bin --skip-shell
```

## bashrc/zshrc config

Add the following to you `.bashrc` or `.zshrc`

```
eval "$(fnm env --multi)"
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

## Wrapping up

Versioning `node` should be much faster now

### Link to Author

[fnm](https://github.com/Schniz/fnm)

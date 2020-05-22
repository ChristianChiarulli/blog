---
title: Installing Fast Node Manager (fnm)
description: description
date: "2020-05-12"
image: "fnm.png"
author: "Chris"
tags: ["nodejs"]
---

## Install

If you're on Linux you may first need `curl`

```sh
sudo apt install curl
```

The following command will automatically install fnm using `curl`

```sh
curl -fsSL https://github.com/Schniz/fnm/raw/master/.ci/install.sh | bash -s -- --install-dir $HOME/.local/bin
```

## Upgrade

```sh
curl -fsSL https://github.com/Schniz/fnm/raw/master/.ci/install.sh | bash -s -- --install-dir $HOME/.local/bin --skip-shell
```

## List install candidates

```sh
fnm ls-remote
```

## Install a node version

```sh
fnm install 13.14.0
```

## List currently installed versions

```sh
fnm ls
```

## Choose version you would like to use

```sh
fnm use 13.14.0
```

## Check currently active version

(note currently not working)

```sh
fnm current
```

## Alias a version

```sh
fnm alias 13.14.0 nickname

fnm use nickname
```

## Default a version

```sh
fnm default 13.14.0
```

## Wrapping up

Versioning `node` should be much faster now

## Link to Author

[fnm](https://github.com/Schniz/fnm)

---
title: Installing NVM for Node.js
description: description
date: "2019-03-17"
image: "nvm.jpg"
author: "Chris"
tags: ["nodejs"]
---

## Step 1: Download nvm

If you're on linux you may first need `curl`

```
sudo apt install curl
```

The following command will automatically install nvm using `curl`

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

## Step 2: Verify installation

```
nvm --version
```

## Install current LTS version of Node.js

First we install it by running the following

```
nvm install --lts
```

Next we can activate it

```
nvm use --lts
```

## Install latest version of Node.js

First we install it by running the following

```
nvm install node
```

Next we can activate it

```
nvm use node
```

## Add the following to your `bash_profile`

The first two lines nvm adds itself to your `.bashrc`

The third line will give you autocomplete with nvm which is nice

I recommend adding it to your `.bash_profile` because that is typically where I add all of my exports

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## Wrap up

We now have the latest version of Node.js as well as the long term support release installed.

You are free to switch between the two using the `use` command.

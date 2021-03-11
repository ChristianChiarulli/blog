---
title: Creating a Todo list with FastAPI
date: "2020-11-21"
image: "fastapi.png"
author: "Chris"
tags: ["fastapi"]
---

## Create development Environment

```
conda create -n todolist python=3.9 pip -y

conda activate todolist
```

## Install MongoDB

- Mac:

  ```
  sudo mkdir -p /System/Volumes/Data/data/db

  sudo chown -R `id -un` /System/Volumes/Data/data/db

  brew tap mongodb/brew

  brew install mongodb-community

  brew tap homebrew/services

  brew services start mongodb-community
  ```

  Check Service is running:

  ```
  brew services list
  ```

  Stop mongo

  ```
  brew services stop mongodb-community
  ```

  Restart mongo

  ```
  brew services restart mongodb-community
  ```

- Linux:

    [Link](https://www.chrisatmachine.com/Linux/09-mongodb-arch-linux/)

## Install packages

```
pip install fastapi

pip install uvicorn

pip install fastapi[all] ## this installs a lot of useful stuff
```

## Code for TODO List

[link](https://github.com/ChristianChiarulli/todolist)

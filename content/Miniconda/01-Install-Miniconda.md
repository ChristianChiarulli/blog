---
title: How to install Miniconda
description: description
date: "2019-06-25"
tags: ["miniconda"]
---

This guide will show you how to install the latest version of Miniconda. Miniconda is a lightweight version of Anaconda: a virtual environment manager for Python.

## Download Install Script

```bash
$ wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh
```

## Install Minconda

```bash
sh ~/miniconda.sh -b -f -p  $HOME/.miniconda

rm ~/miniconda.sh
```

## Setting up your shell

If you don't want the conda base environment (you may not want this because as of now there are conflicts with later versions of Python and npm)

```bash
conda config --set auto_activate_base false
```

The first time you run it, it'll create a ./condarc in your home directory with that setting to override the default.

Now you can initialize your shell with the following command:

```bash
conda init $SHELL
```

Now close your terminal and open a new one and your conda environment should be fully configured.

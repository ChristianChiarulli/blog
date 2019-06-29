---
title: Managing Environments with Miniconda
description: description
date: "2019-06-28"
tags: ["miniconda"]
---

The previous article explains how to properly install and configure Miniconda. This article will explain how to manage your environments.

## Creating a Virtual Environment

```bash
conda create -name <myenv> python=<3.7> -y
```

This command will create a virtual environment with the following properties:

* -name myenv You can choose any name you want here
* python=3.7 you can set the version to be whatever you want such as 2.7 (if you don't specify a version it will choose the latest)
* -y this just preemptively answers yes to creating the environment

## Activating a Virtual Environment

```bash
conda activate <myenv>
```

## Deactivating a Virtual Environment

```bash
conda deactivate <myenv>
```

## Listing Available Environments

```bash
conda env list
```

## Removing an Environment

```bash
conda remove --name <myenv> --all
```

## Cloning an  Environment

```bash
conda create --name <myclone> --clone <myenv>
```

## Removing PS1 Prompt

```bash
conda config --set changeps1 false
```

To re-enable:

```bash
conda config --set changeps1 true
```

## Searching for packages

```bash
conda search <package-name>
```

## Sharing an environment

* First export the environment

```bash
conda env export > environment.yml
```

* Now install in another Anaconda Environment Manager

```bash
conda env create -f environment.yml
```

## Installing Packages & Pinning Versions

* With conda (=)

```bash
conda install <package>=<version-number>
```

* With pip (==)

```bash
pip install <package>==<version-number>
```

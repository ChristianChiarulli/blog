---
title: Managing Environments with Miniconda
description: description
date: "2019-06-28"
image: miniconda.jpg
author: "Chris"
tags: ["miniconda"]
---

The previous article explains how to properly install and configure Miniconda. This article will explain how to manage your environments.

## Creating a Virtual Environment

```
conda create -n <myenv> python=<3.7> pip -y
```

This command will create a virtual environment with the following properties:

- -n myenv You can choose any name you want here
- python=3.7 you can set the version to be whatever you want such as 2.7 (if you don't specify a version it will choose the latest)
- -y this just preemptively answers yes to creating the environment

## Activating a Virtual Environment

```
conda activate <myenv>
```

## Deactivating a Virtual Environment

```
conda deactivate <myenv>
```

## Listing Available Environments

```
conda env list
```

## Removing an Environment

```
conda remove --name <myenv> --all
```

## Cloning an Environment

```
conda create --name <myclone> --clone <myenv>
```

## Removing PS1 Prompt

```
conda config --set changeps1 false
```

To re-enable:

```
conda config --set changeps1 true
```

## Searching for packages

```
conda search <package-name>
```

## Sharing an environment

- First export the environment

```
conda env export > environment.yml
```

- Now install in another Anaconda Environment Manager

```
conda env create -f environment.yml
```

## Installing Packages & Pinning Versions

- With conda (=)

```
conda install <package>=<version-number>
```

- With pip (==)

```
pip install <package>==<version-number>
```

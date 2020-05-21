---
title: Deepspeech using a GPU
description: blog post
date: "2020-04-13"
image: "mozilla-deepspeech.png"
author: "Chris"
tags: [deepspeech]
---

## Virtual environment

We will need to create another virtual environment for deepspeech-gpu

```
conda create -n ds-gpu python=3.8

conda activate ds-gpu
```

## Install deepspeech-gpu

```
pip install deepspeech-gpu
```

## Model and audio files

If you've been following along you can use the same model and audio files from the **Deepspeech basics** article

If not you can install them like so:

```
curl -LO https://github.com/mozilla/DeepSpeech/releases/download/v0.6.1/deepspeech-0.6.1-models.tar.gz

tar xvf deepspeech-0.6.1-models.tar.gz

curl -LO https://github.com/mozilla/DeepSpeech/releases/download/v0.6.1/audio-0.6.1.tar.gz

tar xvf audio-0.6.1.tar.gz
```

## Installing CUDA and cuDNN

This goes without saying but make sure you have an Nvidia GPU and the proprietary drivers installed

You will need both of these libraries in order to run inference

If you already have CUDA 10 installed then great you can move on

If not I have an easy way to do so using conda

```
conda install cudatoolkit=10.0.130

conda install cudnn
```

# Run inference

We can now transcribe the audio file

```
deepspeech --model deepspeech-0.6.1-models/output_graph.pbmm --audio audio/2830-3980-0043.wav
```

---
title: Deepspeech basics
description: description
date: "2020-04-10"
image: "mozilla-deepspeech.png"
author: "Chris"
tags: ["deepspeech"]
---

## What is Deepspeech

From Mozilla's github repo for deepspeech:

"DeepSpeech is an open source Speech-To-Text engine, using a model trained by machine learning techniques based on Baidu's Deep Speech research paper. Project DeepSpeech uses Google's TensorFlow to make the implementation easier."

## Virtual environment

First let's create a virtual environment for deepspeech

```
conda create -n ds python=3.8

conda activate deepspeech
```

## Install deepspeech

The only required package is deepspeech

```
pip install deepspeech
```

# Download Model

A pre-trained english model is available for download

```
curl -LO https://github.com/mozilla/DeepSpeech/releases/download/v0.6.1/deepspeech-0.6.1-models.tar.gz

tar xvf deepspeech-0.6.1-models.tar.gz
```

# Download audio files

You can download some example audio files

```
curl -LO https://github.com/mozilla/DeepSpeech/releases/download/v0.6.1/audio-0.6.1.tar.gz

tar xvf audio-0.6.1.tar.gz
```

# Run inference

We can now transcribe the audio file

```
deepspeech --model deepspeech-0.6.1-models/output_graph.pbmm --audio audio/2830-3980-0043.wav
```

If you ran the above command you should see something like "experience proofsless" if you are using the same model as me

So not perfect, but we can try it out on our own voice as well

# Record a wav file

For deepspeech to run inference correctly you will need to record your voice with some specific parameters.

- Sampling rate: 16 kHz
- Channel: 1
- Bit rate: 256 kb/s

We can achieve this using the `sox` package

If you're on Ubuntu:

```
sudo apt install sox
```

Arch Linux:

```
yay -S sox
```

Mac:

```
brew install sox
```

After installing `sox` you should have access to the `rec` command, we will use this to record our voice

To begin recording you voice enter the following command

```
rec -r 16k -c 1 my_recording.wav
```

To make sure you have recorded the audio in the proper format we can install another package called `mediainfo` and run it like so:

```
mediainfo my_recording.wav
```

You should see an output similar to the following:

```
General
Complete name                            : my_recording.wav
Format                                   : Wave
File size                                : 64.0 KiB
Duration                                 : 2 s 48 ms
Overall bit rate mode                    : Constant
Overall bit rate                         : 256 kb/s

Audio
Format                                   : PCM
Format settings                          : Little / Signed
Codec ID                                 : 1
Duration                                 : 2 s 48 ms
Bit rate mode                            : Constant
Bit rate                                 : 256 kb/s
Channel(s)                               : 1 channel
Sampling rate                            : 16.0 kHz
Bit depth                                : 16 bits
Stream size                              : 64.0 KiB (100%)
```

## Run inference

Now we can run inference on our own voice data

```
deepspeech --model deepspeech-0.6.1-models/output_graph.pbmm --audio my_recording.wav
```

## Wrapping up

In the next article I'll go over running inference on a GPU

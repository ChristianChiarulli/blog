---
title: YoloV3 Up and Running Fast
description: description
date: "2019-06-25"
tags: ["yolo"]
---

< br />

This guide will show you how to get yoloV3 up and running fast on Tensorflow 2.0

## Clone the repository

The repo is provided by a user called zzh8829

```bash
git clone https://github.com/zzh8829/yolov3-tf2.git
```

## Install requirements

I recommend creating a virtual environment first before installing the requirements

```bash
conda create -n yolo python=3.7
```

### Install OpenCV

```bash
pip install opencv-python
```

### Install Tensorflow 2.0

#### Without GPU

```bash
pip install tensorflow==2.0.0b1
```

#### With GPU

```bash
pip install tensorflow-gpu==2.0.0b1
```

#### Getting weird Numpy Warnings?

```bash
pip install numpy==1.16.0
```

## Convert pre-trained Darknet Weights

Make sure you're in the root of the repo and run the following:

```bash
wget https://pjreddie.com/media/files/yolov3.weights -O data/yolov3.weights

python convert.py
```

## Running Yolo

The author of this repo gives you a few options for running inference

We will focus on the webcam option

```bash
python detect_video.py --video 0
```

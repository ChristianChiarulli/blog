---
title: Connect Bluetooth Keyboard Linux
description: description
date: "2021-08-14"
image: "wireless_keyboard.jpg"
author: "Chris"
tags: ["linux"]
---

## Modify config file

Open config file:

```
vim /etc/bluetooth/main.conf
```

Look for `AutoEnable` and set it equal to true:

```
AutoEnable=true
```

## Connect to device

```
$ bluetoothctl
# power on
# agent KeyboardOnly
# default-agent
# pairable on
# scan on
# pair 01:02:03:04:05:06
# trust 01:02:03:04:05:06
# connect 01:02:03:04:05:06
# quit
$ exit
```

## Resources

[askubuntu](https://askubuntu.com/questions/17504/how-can-i-have-a-bluetooth-keyboard-auto-connect-at-startup)

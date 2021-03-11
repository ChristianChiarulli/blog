---
title: Install MongoDB Arch Linux
date: "2020-11-25"
image: "arch-logo.png"
author: "Chris"
tags: ["archlinux", "mongodb"]
---

## Install using yay

```
yay -S mongodb-bin
```

If you see this error:

```
==> PGP keys need importing:
 -> 27EDEAF22F3ABCEB50DB9A125CC908FDB71E12C2, required by: libcurl-openssl-1.0
==> Import? [Y/n] y
:: Importing keys with gpg......
gpg: keyserver receive failed: General error
==> Error: Problem importing keys
```

Just receive the key using:

```
gpg --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 --recv 27EDEAF22F3ABCEB50DB9A125CC908FDB71E12C2
```

## Start or enable the service

```
systemctl enable mongodb

systemctl start mongodb
```

## Run mongo

```
mongo
```

## Exit

```
exit
```

---
title: Install Docker on Linux
date: "2021-06-25"
image: "docker_logo.png"
author: "Chris"
tags: ["archlinux", "docker"]
---

## Install using your package manager

Here are some popular examples.

- Ubuntu:
  ```
  sudo apt install docker
  ```

- Arch:
  ```
  sudo pacman -S docker
  ```

## Add user to docker group

```
sudo usermod -a -G docker $USER
```

**NOTE** This can be dangerous, anyone added to the docker group is root equivalent because they can use the docker run --privileged command to start containers with root privileges. [Archwiki](https://wiki.archlinux.org/title/Docker)

## Logout

You will need to logout for the group to update for the user

After logging back in run `groups` and you should see the `docker` group has been added to your user

## Start and enable the docker service

starting the service will activate it for your current session

enabling the service will activate for all future sessions

```
sudo systemctl start docker

sudo systemctl enable docker
```

## Testing your installation

Run `docker info` to confirm the docker service is running

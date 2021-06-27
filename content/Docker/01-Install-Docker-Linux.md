---
title: Install Docker on Linux
date: "2021-06-25"
image: "docker_logo.png"
author: "Chris"
tags: ["archlinux", "docker"]
---

## Install using your package manager

Here are some popular examples.

- Ubuntu, Debian, CentOS, Fedora:

[install link](https://docs.docker.com/engine/install/)

- Arch:
  ```
  sudo pacman -S docker
  ```

- Gentoo:

[install link](https://wiki.gentoo.org/wiki/Docker)

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

**NOTE** The service will be automatically enabled for Ubuntu and Debian

```
sudo systemctl enable docker.service
```

You can use the following to check that the service is enabled:

```
systemctl list-unit-files --state=enabled
```

## Testing your installation

Run `docker info` to confirm the docker service is running

## Images to get you started

Here are some examples of what you can do with docker:

```
docker run -it python

docker run -d -p 27017-27019:27017-27019 --name mongodb mongo

docker run -it ubuntu # run cat /etc/os-release 
```

---
title: Setting up a Remote Jupyter Lab Server
description: description
date: "2019-06-25"
tags: ["jupyter"]
---

In order to setup a remote Jupyter Lab server you must complete the following steps:

1. Open ports 22 (ssh) and 8888 (jupyter)
2. Configure Jupyter Lab to request a password instead of a token 
3. Start the Jupyter Lab server on the Remote server
4. Access Jupyter on your local browser

## Configure your Router

This step will be router specific but will be a similar process no matter what kind of router you have.

You will need to do get the IP address of your server:

```bash
$ hostname -I
192.168.0.120
```

Use this private IP address when forwarding both ports 22 and 8888

## Configure Jupyter Lab Password

```bash
$ jupyter notebook --generate-config
$ jupyter notebook password
Enter password:  ****
Verify password: ****
[NotebookPasswordApp] Wrote hashed password to /Users/username/.jupyter/jupyter_notebook_config.json
```

You will use this password when logging in remotely

## Starting Jupyter Lab on the Remote Server

```bash
jupyter-lab --ip 0.0.0.0 --port 8888 --no-browser
```

Starting Jupyter like this will make sure you can access it publicly and will also stop Jupyter from trying to start a browser instance on your remote machine

## Access Jupyter on a Local Browser

Navigate to the following address:

```bash
http://<your-routers-public-ip>:8888
```

It should ask you for the password you set up earlier and you should be able to use Jupyter Lab remotely
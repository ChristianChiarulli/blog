---
title: Stream Remarkable Tablet on Linux
description: description
date: "2021-08-12"
image: "remarkable.png"
author: "Chris"
tags: ["archlinux", "remarkable"]
---

## Enable USB web interface

On the remarkable: Settings -> Storage -> USB web interface: On

Plug your remarkable into your PC

## Find IP address and password

On the remarkable: Settings -> Help -> Copyrights and licenses

You will be able to find your IP address and password at the bottom

The IP address will likely be: `10.11.99.1`

## SSH

In the terminal run the following if you don't already have ssh keys:
```
ssh-keygen 
Generating public/private rsa key pair.
Enter file in which to save the key (/home/chris/.ssh/id_rsa):
```

Copy file over:

```
scp ~/.ssh/id_rsa.pub root@10.11.99.1:/home/root
# Enter password
```

Login to the remarkable:

```
ssh root@10.11.99.1
# Enter password

mkdir .ssh

cat id_rsa.pub >> ~/.ssh/authorized_keys

chmod -R og-rwx /home/root/.ssh
```

Now you can login without a password:

```
ssh root@10.11.99.1
```

Useful alias:

Add this to your `.bashrc` or `.zshrc`

```
alias remarkable_ssh='root@10.11.99.1'
```

**NOTE** may have to add the following to `/etc/ssh/ssh_config`:

```
PubkeyAcceptedKeyTypes +ssh-rsa
```

## Setup reStream

Login to your remarkable:

```
ssh root@10.11.99.1
```

Run the following to install reStream on remarkable:

```
wget https://github.com/rien/reStream/releases/latest/download/restream.arm.static -O /home/root/restream && chmod +x /home/root/restream
```

## Install reStream on PC

Arch Linux:

```
yay -S restream-git
```

## Resources

[Awesome Remarkable](https://github.com/reHackable/awesome-reMarkable)

[Stop ssh from asking for password](https://shiplu.mokadd.im/90/7-steps-to-stop-ssh-from-asking-password/)

[scp to transfer files](https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/)

[reStream](https://github.com/rien/reStream)

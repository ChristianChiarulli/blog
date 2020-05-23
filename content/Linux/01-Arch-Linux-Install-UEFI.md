---
title: Installing Arch Linux (UEFI) 2020
description: description
date: "2020-03-30"
image: "arch-logo.png"
author: "Chris"
tags: ["archlinux"]
---

## A Note about installing Arch Linux

There's a good chance by the time you are reading this that it is out of date, to stay up to date on Arch Linux Installs checkout the [Arch Wiki](https://wiki.archlinux.org/index.php/Installation_guide)

## A Note about UEFI

UEFI (Unified Extensible Firmware Interface) is replacing BIOS (Basic-Input-Output system), if you are using modern hardware you are assuredly using UEFI. If you are interested in reading more about why checkout this excellent [article](https://www.howtogeek.com/56958/htg-explains-how-uefi-will-replace-the-bios/) explaining some key differences

## Set keyboard layout

If you are using a US layout then you're good no need to worry out this section if not read on:

- First list your options:

```
ls /usr/share/kbd/keymaps/**/*.map.gz
```

- Now set the one you want, here's an example:

```
loadkeys de-latin1
```

## Verify boot mode

This command will verify that we will boot in UEFI mode

```
ls /sys/firmware/efi/efivars
```

IF the above directory doesn't exist you are either on old hardware or you have UEFI disabled

## Internet connection

TODO add that junk for ethernet being doa

I recommend installing over ethernet if your not then you can connect using `wifi-menu`

To confirm you're internet works:

```
ping -5 archlinux.org
```

If your ethernet is not working then try the following:

```
ip link # this will show you a number that looks something like  enp39s0
```

Use the number you found earlier to bring up your interface:

```
 ip link set dev enp39s0 up
```

Then when it is up run Dhcp to pull an IP from the server:

```
 dhcpcd enp39s0
```

Now try to ping again

## Update System clock

```
timedatectl set-ntp true
```

## Partition disks

Here is where you will most likely find the most trouble if you are not familiar with partitioning tools such as fdisk I would recommend you watch a video for this part since this really won't change much.

**First list your disks**

```
fdisk -l
```

You should see your disk in here mine is called /dev/sda (WARNING do not write to any of these disks unless you know it's the one you want to install Arch on)

**Now choose the disk you wish to partition**

```
fdisk /dev/sda
```

You should now be in the fdisk utility you can press `m` for help

All of our partitions will be **GPT** partitions so you can press `g` when ready

We will be create 3 partitions for the following:

- boot
- root
- home

### Boot partition

- Enter `n` (To create new partition)

- Enter `ENTER` (For the next available partition)

- Enter `ENTER` (To start the first available section)

- Enter `+512M` (This is the recommended size for our our boot partition)

- Enter `t` (To change the type of the partition to EFI)

- Enter `L` (To get a list of all partition types EFI should be 1)

- Press `q` (to escape the list)

- Enter `1` (To set the type of the partition we just made to EFI)

### Root partition

- Enter `n` (To create new partition)

- Enter `ENTER` (For the next available partition)

- Enter `ENTER` (To start the first available section)

- Enter `+15G` (You can increase this if you plan on installing a lot of programs 20G is usually more than enough)

- Enter `t` (To change the type of the partition to Linux Root (x86-64))

- Enter `2` (You will now need to specify which partition you are referring to since now there are two or more)

- Enter `L` (To get a list of all partition types Linux Root (x86-64) should be 24)

- Press `q` (to escape the list)

- Enter `24` (To set the type of the partition we just made to Linux Root (x86-64))

### Home partition

- Enter `n` (To create new partition)

- Enter `ENTER` (For the next available partition)

- Enter `ENTER` (To start the first available section)

- Enter `ENTER` (Just use the rest of the drive, I would even recommend putting this partition on a separate drive if you have a spare)

- Enter `t` (To change the type of the partition to Linux home)

- Enter `3` (You will now need to specify which partition you are referring to since now there are two or more)

- Enter `L` (To get a list of all partition types Linux home should be 28)

- Press `q` (to escape the list)

- Enter `28` (To set the type of the partition we just made to Linux home)

### Write changes to disk

- Enter `w`

Now you can run `fdisk -l` to see your newly created partitions

## Format the partitions

We have to create 3 file systems here, so let's get started

- Format the EFI partition with:

```
mkfs.vfat /dev/sda1
```

- Format the Root partition with:

```
mkfs.ext4 /dev/sda2
```

- Format the Home partition with:

```
mkfs.ext4 /dev/sda3
```

## Mount the filesystems

You will need to mount sda1, sda2 and sda3, but you will need to mount Root first

- Mount sda2 (Root)

```
mount /dev/sda2 /mnt
```

- Mount sda1 (Boot)

```
mkdir /mnt/boot
mount /dev/sda1 /mnt/boot
```

- Mount sda3 (Home)

```
mkdir /mnt/home
mount /dev/sda3 /mnt/home
```

### Check mounts are correct

You can run `df` to make sure your mounts are in the right place

## Install essential packages (and a few others)

Run the following:

```
pacstrap /mnt base base-devel linux linux-firmware vim
```

If you have an intel processor also include `intel-ucode`, for AMD `amd-ucode`

## Configure the system

### Fstab

Generate UUIDs for newly created filesystem

```
genfstab -U /mnt >> /mnt/etc/fstab
```

You can check that it worked by printing the file:

```
cat /mnt/etc/fstab
```

### Chroot

Now you can change root into the new system:

```
arch-chroot /mnt
```

## Create a swap file

I'm going to use the varibale X to indicate what your swap size should be

where X is RAM+sqrt(RAM)

```
fallocate -l XGB /swapfile

chmod 600 /swapfile

mkswap /swapfile

swapon /swapfile
```

## Add swapfile to fstab

Add the following to fstab

Open `/etc/fstab`

```
/swapfile none swap default 0 0
```

### Time zone

Set the time zone:

```
ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
```

Just search through /usr/share/zoneinfo until you find your nearest City

Run `hwclock`:

```
hwclock --systohc
```

### Localization

Uncommnent `en_US.UTF-8 UTF-8` and other needed locales in `/etc/locale.gen`, and generate them with:

```
locale-gen
```

Create the `locale.conf` file, and set LANG variable

```
touch /etc/locale.conf

echo LANG=en_US.UTF-8 >> /etc/locale.conf
```

## Network configuration

Create `hostname` file:

```
touch /etc/hostname

echo mycoolhostname >> /etc/hostname
```

Add matching entries to `hosts`

```
vim /etc/hosts

127.0.0.1	  localhost
::1		      localhost
127.0.1.1	  mycoolhostname.localdomain  mycoolhostname
```

## Root password

Change the root password:

```
passwd
```

## Installing more packages

Here we can install a few more packages for networking and things like man pages

```
pacman -S man-db man-pages texinfo inetutils netctl dhcpcd networkmanager wpa_supplicant dialog linux-headers network-manager-applet
```

## Boot loader

We'll be using grub because it has the biggest presence in the boot loader world

```
pacman -S grub efibootmgr os-prober mtools
```

Now let's install our boot loader

```
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```

Generate our config

```
grub-mkconfig -o /boot/grub/grub.cfg
```

## You're done

Enter `exit` then `reboot`

## Enable internet service

```
systemctl start dhcpcd.service

systemctl enable dhcpcd.service
```

## Notes

- arch boot mount to just /boot for windows
- I'll make a windows dual boot if there is interest
- If you dual boot with windows it is strongly recommended to disable Fast Startup

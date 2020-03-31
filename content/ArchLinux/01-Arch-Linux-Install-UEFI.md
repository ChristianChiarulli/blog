---
title: Installing Arch Linux (UEFI) 2020
description: description
date: "2020-03-30"
image: "arch-logo.png"
tags: ['archlinux']
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

- Now set the one you want:

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

I recommend installing over ethernet if your not then you can connect using `wifi-menu`

To confirm you're internet works:

```
ping archlinux.org
```

## Update System clock

```
timedatectl set-ntp true
```

## Partition disks

Here is where you will most likely find the most trouble if you are not familiar with partitioning tools such as fdiskI would recommend you watch a video for this part since this really won't change much. 

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

We will be create 4 partitions for the following:

- boot
- swap
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

### Swap partition

*Note* I will be using the variable `X` for the size of the swap partition, where `X` is 2 x RAM + sqrt(RAM)

- Enter `n` (To create new partition)

- Enter `ENTER` (For the next available partition)

- Enter `ENTER` (To start the first available section)

- Enter `+XG` (This is the variable from earlier)

- Enter `t` (To change the type of the partition to Linux Swap)

- Enter `2` (You will now need to specify which partition you are referring to since now there are two or more)

- Enter `L` (To get a list of all partition types Linux Swap should be 19)

- Press `q` (to escape the list)

- Enter `19` (To set the type of the partition we just made to EFI)

### Root partition

- Enter `n` (To create new partition)

- Enter `ENTER` (For the next available partition)

- Enter `ENTER` (To start the first available section)

- Enter `+15G` (You can increase this if you plan on installing a lot of programs 20G is usually more than enough)

- Enter `t` (To change the type of the partition to Linux Root (x86-64))

- Enter `3` (You will now need to specify which partition you are referring to since now there are two or more)

- Enter `L` (To get a list of all partition types Linux Root (x86-64) should be 24)

- Press `q` (to escape the list)

- Enter `24` (To set the type of the partition we just made to Linux Root (x86-64))

### Home partition

- Enter `n` (To create new partition)

- Enter `ENTER` (For the next available partition)

- Enter `ENTER` (To start the first available section)

- Enter `ENTER` (Just use the rest of the drive, I would even recommend putting this partition on a separate drive if you have a spare)

- Enter `t` (To change the type of the partition to Linux home)

- Enter `4` (You will now need to specify which partition you are referring to since now there are two or more)

- Enter `L` (To get a list of all partition types Linux home should be 28)

- Press `q` (to escape the list)

- Enter `28` (To set the type of the partition we just made to Linux home)

### Write changes to disk

- Enter `w`

Now you can run `fdisk -l` to see your newly created partitions

## Format the partitions

We have to create 3 file systems here and enable the swap partition, so let's get started

- Format the EFI partition with:

```
mkfs.vfat /dev/sda1
```

- Format the Swap partition with:

```
mkswap /dev/sda2
swapon /dev/sda2
```

- Format the Root partition with:

```
mkfs.ext4 /dev/sda3
```

- Format the Home partition with:

```
mkfs.ext4 /dev/sda4
```

## Mount the filesystems

You will need to mount sda1, sda3 and sda4

- Mount sda3 (Root)

```
mount /dev/sda3 /mnt
```

- Mount sda1 (Boot)

```
mkdir /mnt/boot
mount /dev/sda1 /mnt/boot
```

- Mount sda4 (Home)

```
mkdir /mnt/home
mount /dev/sda4 /mnt/home
```

## Install essential packages (and a few others)

Run the following:

```
pacstrap /mnt base base-devel linux linux-firmware vim man-db man-pages texinfo inetutils netctl dhcpcd 
```

If you have an intel processor also include `intel-ucode`

## Configure the system

### Fstab

Generate an fstab file

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
/etc/locale.conf

LANG=en_US.UTF-8
```

## Network configuration

Create `hostname` file:

```
/etc/hostname

mycoolhostname
```

Add matching entries to `hosts`

```
/etc/hosts

127.0.0.1	localhost
::1		localhost
127.0.1.1	myhostname.localdomain	myhostname
```

## Root password

Change the root password:

```
passwd
```

## Boot loader

We'll be using `systemd-boot` for our boot-loader

Let's point it to our boot directory:

```
bootctl --path=/boot install
```

A good way to keep `systemd-boot` is to install the package `systemd-boot-pacman-hook`

Now open `/boot/loader/loader.conf`

and change default to the following: 

```
default arch-*
```

Now create and entry in `/boot/loader/entries/arch.conf` and add the following

Only add the ucode if you installed it, otherwise systemd won't boot

```
title	Arch Linux
linux	/vmlinuz-linux
initrd	/<manufacturer>-ucode.img
initrd	/initramfs-linux.img
options root=UUID=<Some UUID for the root partition> rw
```

You can get the UUID in vim with `:r! blkid`

If you dual boot with windows it is strongly recommended to disable Fast Startup


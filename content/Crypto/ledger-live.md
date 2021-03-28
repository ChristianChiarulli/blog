---
title: Install Ledger Live on Linux
date: "2021-03-28"
image: "ledger.jpg"
author: "Chris"
tags: ["crypto", "linux", "blockchain"]
---
## Process

1. Navigate to [ledger.com/ledger-live/download](https://www.ledger.com/ledger-live/download)

2. Download the Ledger Live AppImage.

3. Make the file executable in a terminal:

```
chmod +x ledger-live-*.AppImage
```

4. Enter the following command to automatically add the udev rules and reload udev to allow USB access to your Ledger device:

```
wget -q -O - https://raw.githubusercontent.com/LedgerHQ/udev-rules/master/add_udev_rules.sh | sudo bash
```

5. Rename the application

```
mv ledger-live-*.AppImage ledger-live.AppImage
```

6. Get the Icon 

```
wget -P ~/.local/share/icons/ https://coinzodiac.com/wp-content/uploads/2018/10/ledger-live-icon.png
```

7. Add entry to desktop

Create the following `ledger-live.desktop`:

**NOTE 1** (Change `chris` to your username, you can find this with `echo $USER`)

**NOTE 2** If you get a sandboxing error, run the app with --no-sandbox

```
[Desktop Entry]
Type=Application
Name=Ledger Live
Comment=Ledger Live
Icon=/home/chris/local/share/icons/ledger-live-icon.png
Exec=/home/chris/.local/bin/ledger-live.AppImage --no-sandbox
Terminal=false
Categories=crypto;wallet
```

Move the application to your applications folder:

```
mv ledger-live.desktop ~/.local/share/applications
```

8. Enjoy your ledger-live desktop app

## References

[Ledger Support](https://support.ledger.com/hc/en-us/articles/360006395553-Download-and-install-Ledger-Live)

[creating a desktop entry](https://askubuntu.com/questions/902672/registering-appimage-files-as-a-desktop-app)

[Icon](https://coinzodiac.com/wp-content/uploads/2018/10/ledger-live-icon.png)

---
title: Install Multiple Versions of Java with SDKMAN
description: description
date: "2021-03-12"
image: "sdkman.png"
author: "Chris"
tags: ["java"]
---

## What is SDKMAN?

SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits. This is very useful for managing Java versions as well as Gradle, Maven etc..

## Installation

Open up a terminal and enter:

```
curl -s "https://get.sdkman.io" | bash
```

This will add the following to your `.bashrc` or `.zshrc`:

```
#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="/home/chris/.sdkman"
[[ -s "/home/chris/.sdkman/bin/sdkman-init.sh" ]] && source "/home/chris/.sdkman/bin/sdkman-init.sh"
```

Now you can open a new terminal and run the following to confirm installation:

```
sdk version
```

## Install to a custom location

You can install to a custom location with the following command:

```
export SDKMAN_DIR="/usr/local/sdkman" && curl -s "https://get.sdkman.io" | bash
```

## Install without modifying shell config

If you don't want it to modify your `.bashrc` or `.zshrc` then set `rcupdate=fale`:

```
curl -s "https://get.sdkman.io?rcupdate=false" | bash
```

## Using SDKMAN

SDKMAN will allow you to install a lot of different programs.

### List all options to install

```
sdk ls
```

## Installing Java

Install default version:

```
sdk install java
```

Find a specific version:

```
sdk ls java
```

Install a specific version based on identifier from list:

```
sdk install java 15.0.2.j9-adpt
```

Using a specific version:

```
sdk use java 15.0.2.j9-adpt
```

Default a specific version:

```
sdk default java 15.0.2.j9-adpt
```

To update sdkman:

```
sdk update
```

**NOTE** All of the above commands will work for the other programs available such as:

- gradle
- maven
- groovy
- kotlin
- spark
- springboot

## Getting help

```
sdk help
```

## Optional Configuration

In `~/.sdkman/etc/config`

```
# make sdkman non-interactive, preferred for CI environments
sdkman_auto_answer=true|false

# perform automatic selfupdates
sdkman_auto_selfupdate=true|false

# disables SSL certificate verification
# https://github.com/sdkman/sdkman-cli/issues/327
# HERE BE DRAGONS....
sdkman_insecure_ssl=true|false

# configure curl timeouts
sdkman_curl_connect_timeout=5
sdkman_curl_continue=true
sdkman_curl_max_time=10

# subscribe to the beta channel
sdkman_beta_channel=true

# enable verbose debugging
sdkman_debug_mode=true|false

# enable colour mode
sdkman_colour_enable=true|false

# enable automatic env
sdkman_auto_env=true|false
```

## References

[SDKMAN!](https://sdkman.io/)

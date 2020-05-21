---
title: Neovim Intellisense with coc
description:
date: "2020-04-26"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Conquerer of Completion

This plugin is too featureful (bloated) to explain in a single blog post

Good thing the author provided extensive documentation [here](https://github.com/neoclide/coc.nvim/wiki)

## Install with vim-plug

```
" Stable version of coc
Plug 'neoclide/coc.nvim', {'branch': 'release'}

" Keeping up to date with master
Plug 'neoclide/coc.nvim', {'do': 'yarn install --frozen-lockfile'}
```

make sure you have `yarn` installed if you choose the second way

```
npm i -g yarn
```

Create a directory called `plug-config` and an entry for `coc`

```
mkdir ~/.config/nvim/plug-config

touch ~/.config/nvim/plug-config/coc.vim
```

## Create basic config file

Head over to the [readme](https://github.com/neoclide/coc.nvim) and grab his example config

Add the following to your `init.vim`

```
source $HOME/.config/nvim/plug-config/coc.vim
```

## Checking coc health

You can run `:checkhealth` and there should now be an entry for `coc`

You can use `g:coc_node_path` to point to your node executable

You can also run `:CocInfo` to get some useful info

## Install extensions

You can install extensions for languages like this:

```
:CocInstall coc-json coc-python coc-snippets coc-vimlsp
```

There are many more extensions to choose from here:

[coc-extensions](https://github.com/neoclide/coc.nvim/wiki/Using-coc-extensions)

You can list all of the extension commands with:

```
:CocList commands
```

You can uninstall an extension with:

```
:CocUninstall coc-html
```

You can manage your extensions with:

```
:CocList extensions
```

Hit <TAB> to see a list of options for each extension

## Configuration

Run `:CocConfig` this will open the file `~/.config/nvim/coc-settings.json`

here you can add [language servers](https://github.com/neoclide/coc.nvim/wiki/Language-servers)

and other configuration like autoformat and adding a location for snippets (I'll go over snippets later)

```
{
  "coc.preferences.formatOnSaveFiletypes": ["css", "markdown", "javascript", "graphql", "html", "yaml",  "json", "python"],

  // python config
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,

  "snippets.ultisnips.directories":
  [
    "UltiSnips",
    "~/.config/nvim/utils/snips"
  ]

}
```

for more info on configuring your settings checkout [this page](https://github.com/neoclide/coc.nvim/wiki/Using-the-configuration-file)

## Optional install watchman

For watchman supprt install watchman

- Mac

  ```
  brew install watchman
  ```

- Ubuntu

  ```
  sudo apt install watchman
  ```

- Arch

  ```
  yay -S watchman
  ```

### Note

watchman can be a memory hog, to stop all watchman processes and free up some memory run

```
watchman watch-del-all
```

## Automatically reinstall the extensions you use

If you use `neovim` and already have `node` installed, you can use the following script to reinstall your favorite extensions

```
#!/usr/bin/bash

set -o nounset    # error when referencing undefined variable
set -o errexit    # exit when command fails

# Install extensions
mkdir -p ~/.config/coc/extensions
cd ~/.config/coc/extensions
if [ ! -f package.json ]
then
  echo '{"dependencies":{}}'> package.json
fi
# Change extension names to the extensions you need
npm install coc-snippets coc-python coc-tsserver coc-html coc-css coc-json coc-yaml --global-style --ignore-scripts --no-bin-links --no-package-lock --only=prod
```

---
title: Setup Neovim for Lua Development
date: "2021-03-11"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Lua Development in Neovim

Even if you don't plan on doing any Lua development in Neovim it is probably a good idea to enable lua support.

One reason for this is that pretty much all of Neovim's future development/configuration will be done in lua.

This article will show you how to turn Neovim into a lua IDE.

## Installation Instructions

1. Install `ninja`

    - Arch: `sudo pacman -S ninja`

    - Ubuntu: `sudo apt install ninja-build`

    - Mac: `brew install ninja`

2. Clone Lua Language Server Repo

    ```
    cd .config/nvim
    git clone https://github.com/sumneko/lua-language-server
    cd lua-language-server
    git submodule update --init --recursive
    ```
3. Build language Lua Server

    - Linux:

        ```
        cd 3rd/luamake
        ninja -f ninja/linux.ninja
        cd ../..
        ./3rd/luamake/luamake rebuild
        ```

    - Mac:

        ```
        cd 3rd/luamake
        ninja -f ninja/macos.ninja
        cd ../..
        ./3rd/luamake/luamake rebuild
        ```

## Configure Language Server

Now create file to hold the config and source it somewhere:

Make sure that the root path and binary paths are pointing to the correct installation location or nothing will work

```lua heading=lua-ls.lua
-- https://github.com/sumneko/lua-language-server/wiki/Build-and-Run-(Standalone)
USER = vim.fn.expand('$USER')

local sumneko_root_path = ""
local sumneko_binary = ""

if vim.fn.has("mac") == 1 then
    sumneko_root_path = "/Users/" .. USER .. "/.config/nvim/lua-language-server"
    sumneko_binary = "/Users/" .. USER .. "/.config/nvim/lua-language-server/bin/macOS/lua-language-server"
elseif vim.fn.has("unix") == 1 then
    sumneko_root_path = "/home/" .. USER .. "/.config/nvim/lua-language-server"
    sumneko_binary = "/home/" .. USER .. "/.config/nvim/lua-language-server/bin/Linux/lua-language-server"
else
    print("Unsupported system for sumneko")
end

require'lspconfig'.sumneko_lua.setup {
    cmd = {sumneko_binary, "-E", sumneko_root_path .. "/main.lua"},
    settings = {
        Lua = {
            runtime = {
                -- Tell the language server which version of Lua you're using (most likely LuaJIT in the case of Neovim)
                version = 'LuaJIT',
                -- Setup your lua path
                path = vim.split(package.path, ';')
            },
            diagnostics = {
                -- Get the language server to recognize the `vim` global
                globals = {'vim'}
            },
            workspace = {
                -- Make the server aware of Neovim runtime files
                library = {[vim.fn.expand('$VIMRUNTIME/lua')] = true, [vim.fn.expand('$VIMRUNTIME/lua/vim/lsp')] = true}
            }
        }
    }
}
```

## (Optional) Formatting and Auto-Format

The sumneko language server doesn't support format out of the box

We can install a formatter and use the `efm-language-server` server to support it

The `efm-language-server` is a general purpose language-server

**Install Lua Formatter**

First install [LuaRocks](https://github.com/luarocks/luarocks)

Then run:

```
luarocks install --server=https://luarocks.org/dev luaformatter
```

**Install efm-language-server**

- Linux (you will need to have go installed, also you will need to put the go/bin dir in your PATH)

    ```
    go get github.com/mattn/efm-langserver
    ```

- Mac:

    ```
    brew install efm-langserver
    ```

**Configure Formatting**

```
require"lspconfig".efm.setup {
    init_options = {documentFormatting = true},
    filetypes = {"lua"},
    settings = {
        rootMarkers = {".git/"},
        languages = {
            lua = {
                {
                    formatCommand = "lua-format -i --no-keep-simple-function-one-line --no-break-after-operator --column-limit=150 --break-after-table-lb",
                    formatStdin = true
                }
            }
        }
    }
}
```

Now you can call: ` lua vim.lsp.buf.formatting()`

And for auto-format add this to a .vim file and source it:

```
autocmd BufWritePre *.lua lua vim.lsp.buf.formatting_sync(nil, 100)
```

## Links and references

[Install language server](https://github.com/sumneko/lua-language-server/wiki/Build-and-Run-(Standalone))

[LuaRocks](https://github.com/luarocks/luarocks)

[LuaFormatter](https://github.com/Koihik/LuaFormatter)

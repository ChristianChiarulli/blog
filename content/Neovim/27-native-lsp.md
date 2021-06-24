---
title: Native LSP in Neovim
date: "2021-03-10"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Native LSP 

Neovim 0.5 will be shipping with and API for Language Server Protocol.

I would recommend moving over to this since it will be supported by the Neovim Core team.

One thing to note is that the LSP API provided is very general.

In other words don't expect everything to just work out of the box.

This blog will hopefully help you get a good understanding of the new features and helpful plugins.

**NOTE** This will require the latest Neovim 0.5

**NOTE** for additional information `:h lsp`

## Plugins

We will be using the following plugins for auto-complete and configuration:

```
Plug 'neovim/nvim-lspconfig'
Plug 'hrsh7th/nvim-compe'
```

## Configuration

**Code navigation:**

```vim heading=lsp-config.vim
" LSP config (the mappings used in the default file don't quite work right)
nnoremap <silent> gd <cmd>lua vim.lsp.buf.definition()<CR>
nnoremap <silent> gD <cmd>lua vim.lsp.buf.declaration()<CR>
nnoremap <silent> gr <cmd>lua vim.lsp.buf.references()<CR>
nnoremap <silent> gi <cmd>lua vim.lsp.buf.implementation()<CR>
nnoremap <silent> K <cmd>lua vim.lsp.buf.hover()<CR>
nnoremap <silent> <C-k> <cmd>lua vim.lsp.buf.signature_help()<CR>
nnoremap <silent> <C-n> <cmd>lua vim.lsp.diagnostic.goto_prev()<CR>
nnoremap <silent> <C-p> <cmd>lua vim.lsp.diagnostic.goto_next()<CR>
```

**Auto format:**

```vim heading=lsp-config.vim
" auto-format
autocmd BufWritePre *.js lua vim.lsp.buf.formatting_sync(nil, 100)
autocmd BufWritePre *.jsx lua vim.lsp.buf.formatting_sync(nil, 100)
autocmd BufWritePre *.py lua vim.lsp.buf.formatting_sync(nil, 100)
```

**Auto complete:**

**NOTE** This file is configured in lua

```lua heading="compe-config.lua"
vim.o.completeopt = "menuone,noselect"

require'compe'.setup {
  enabled = true;
  autocomplete = true;
  debug = false;
  min_length = 1;
  preselect = 'enable';
  throttle_time = 80;
  source_timeout = 200;
  incomplete_delay = 400;
  max_abbr_width = 100;
  max_kind_width = 100;
  max_menu_width = 100;
  documentation = false;

  source = {
    path = true;
    buffer = true;
    calc = true;
    vsnip = true;
    nvim_lsp = true;
    nvim_lua = true;
    spell = true;
    tags = true;
    snippets_nvim = true;
    treesitter = true;
  };
}
local t = function(str)
  return vim.api.nvim_replace_termcodes(str, true, true, true)
end

local check_back_space = function()
    local col = vim.fn.col('.') - 1
    if col == 0 or vim.fn.getline('.'):sub(col, col):match('%s') then
        return true
    else
        return false
    end
end

-- Use (s-)tab to:
--- move to prev/next item in completion menuone
--- jump to prev/next snippet's placeholder
_G.tab_complete = function()
  if vim.fn.pumvisible() == 1 then
    return t "<C-n>"
  elseif vim.fn.call("vsnip#available", {1}) == 1 then
    return t "<Plug>(vsnip-expand-or-jump)"
  elseif check_back_space() then
    return t "<Tab>"
  else
    return vim.fn['compe#complete']()
  end
end
_G.s_tab_complete = function()
  if vim.fn.pumvisible() == 1 then
    return t "<C-p>"
  elseif vim.fn.call("vsnip#jumpable", {-1}) == 1 then
    return t "<Plug>(vsnip-jump-prev)"
  else
    -- If <S-Tab> is not working in your terminal, change it to <C-h>
    return t "<S-Tab>"
  end
end

vim.api.nvim_set_keymap("i", "<Tab>", "v:lua.tab_complete()", {expr = true})
vim.api.nvim_set_keymap("s", "<Tab>", "v:lua.tab_complete()", {expr = true})
vim.api.nvim_set_keymap("i", "<S-Tab>", "v:lua.s_tab_complete()", {expr = true})
vim.api.nvim_set_keymap("s", "<S-Tab>", "v:lua.s_tab_complete()", {expr = true})
```

## Setting up Language Servers

This can be very easy or very hard depending on your language

For instance Python is extremely easy to set up, Java is an absolute nightmare as expected.

Remember you need to have some sort of language server `binary` installed and the configuration for it to work. 

Luckily most language server binaries can be installed with `npm` (idc if it's bloat it's just so easy)

Here are some examples:

**Python:**

- Install language server: `npm i -g pyright`
- Configure language server:
    ```lua heading="python-lsp.lua" 
    require'lspconfig'.pyright.setup{}
    ```

**Bash:**

- Install language server: `npm i -g bash-language-server`
- Configure language server:
    ```lua heading="bash-lsp.lua"
    require'lspconfig'.bashls.setup{}
    ```

For more information on setting up language servers checkout this [link](https://github.com/neovim/nvim-lspconfig/blob/master/CONFIG.md)

For more language specific plugins (for things like Java) checkout this [link](https://github.com/neovim/nvim-lspconfig/wiki/Language-specific-plugins)

To enable snippets for some languages checkout this [link](https://github.com/neovim/nvim-lspconfig/wiki/Snippets-support)

For plugins that will hopefully make this easier someday checkout this [link](https://github.com/neovim/nvim-lspconfig/wiki/Installing-language-servers-automatically)

## Links for Plugins

- [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

- [nvim-compe](https://github.com/hrsh7th/nvim-compe)

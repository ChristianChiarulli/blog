---
title: Integrate Neovim with FZF & more
description:
date: "2020-04-30"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Install FZF, Ripgrep, Universal-ctags, Silver-searcher

First let's just install a bunch of awesome tools to help you search/find stuff

- Mac

  ```
  brew install fzf

  # To install useful key bindings and fuzzy completion:
  $(brew --prefix)/opt/fzf/install

  brew install ripgrep

  brew install --HEAD universal-ctags/universal-ctags/universal-ctags

  brew install the_silver_searcher

  brew install fd
  ```

- Ubuntu (I think there's snaps for this stuff too)

  ```
  sudo apt install fzf

  sudo apt install ripgrep

  sudo apt install universal-ctags

  sudo apt install silversearcher-ag

  sudo apt install fd-find
  ```

- Arch

  ```
  sudo pacman -S fzf

  sudo pacman -S ripgrep

  yay -S universal-ctags-git

  sudo pacman -S the_silver_searcher

  pacman -S fd
  ```

## Plug FZF & vim-rooter into vim

```
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'airblade/vim-rooter'
```

## Configuration

```
" This is the default extra key bindings
let g:fzf_action = {
  \ 'ctrl-t': 'tab split',
  \ 'ctrl-x': 'split',
  \ 'ctrl-v': 'vsplit' }

" Enable per-command history.
" CTRL-N and CTRL-P will be automatically bound to next-history and
" previous-history instead of down and up. If you don't like the change,
" explicitly bind the keys to down and up in your $FZF_DEFAULT_OPTS.
let g:fzf_history_dir = '~/.local/share/fzf-history'

map <C-f> :Files<CR>
map <leader>b :Buffers<CR>
nnoremap <leader>g :Rg<CR>
nnoremap <leader>t :Tags<CR>
nnoremap <leader>m :Marks<CR>


let g:fzf_tags_command = 'ctags -R'
" Border color
let g:fzf_layout = {'up':'~90%', 'window': { 'width': 0.8, 'height': 0.8,'yoffset':0.5,'xoffset': 0.5, 'highlight': 'Todo', 'border': 'sharp' } }

let $FZF_DEFAULT_OPTS = '--layout=reverse --info=inline'
let $FZF_DEFAULT_COMMAND="rg --files --hidden"


" Customize fzf colors to match your color scheme
let g:fzf_colors =
\ { 'fg':      ['fg', 'Normal'],
  \ 'bg':      ['bg', 'Normal'],
  \ 'hl':      ['fg', 'Comment'],
  \ 'fg+':     ['fg', 'CursorLine', 'CursorColumn', 'Normal'],
  \ 'bg+':     ['bg', 'CursorLine', 'CursorColumn'],
  \ 'hl+':     ['fg', 'Statement'],
  \ 'info':    ['fg', 'PreProc'],
  \ 'border':  ['fg', 'Ignore'],
  \ 'prompt':  ['fg', 'Conditional'],
  \ 'pointer': ['fg', 'Exception'],
  \ 'marker':  ['fg', 'Keyword'],
  \ 'spinner': ['fg', 'Label'],
  \ 'header':  ['fg', 'Comment'] }

"Get Files
command! -bang -nargs=? -complete=dir Files
    \ call fzf#vim#files(<q-args>, fzf#vim#with_preview({'options': ['--layout=reverse', '--info=inline']}), <bang>0)


" Get text in files with Rg
command! -bang -nargs=* Rg
  \ call fzf#vim#grep(
  \   'rg --column --line-number --no-heading --color=always --smart-case '.shellescape(<q-args>), 1,
  \   fzf#vim#with_preview(), <bang>0)

" Ripgrep advanced
function! RipgrepFzf(query, fullscreen)
  let command_fmt = 'rg --column --line-number --no-heading --color=always --smart-case %s || true'
  let initial_command = printf(command_fmt, shellescape(a:query))
  let reload_command = printf(command_fmt, '{q}')
  let spec = {'options': ['--phony', '--query', a:query, '--bind', 'change:reload:'.reload_command]}
  call fzf#vim#grep(initial_command, 1, fzf#vim#with_preview(spec), a:fullscreen)
endfunction

command! -nargs=* -bang RG call RipgrepFzf(<q-args>, <bang>0)

" Git grep
command! -bang -nargs=* GGrep
  \ call fzf#vim#grep(
  \   'git grep --line-number '.shellescape(<q-args>), 0,
  \   fzf#vim#with_preview({'dir': systemlist('git rev-parse --show-toplevel')[0]}), <bang>0)
```

## Links to the Great software found in the blog

- [FZF](https://github.com/junegunn/fzf.vim)

- [ripgrep](https://github.com/BurntSushi/ripgrep)

- [universal-ctags](https://github.com/universal-ctags/ctags)

- [the_silver_searcher](https://github.com/ggreer/the_silver_searcher)

- [fd](https://github.com/sharkdp/fd)

## Note on extra keybindings

Read more about keybindings [here](https://wiki.archlinux.org/index.php/Fzf)

It is sufficient to source these files below in your bashrc or zshrc for completion and keybindings

```
/usr/share/fzf/completion.zsh
/usr/share/fzf/key-bindings.zsh

/usr/share/fzf/completion.bash
/usr/share/fzf/key-bindings.bash
```

## Another note

From the Archwiki, commands to query packages and install them

```
sudo pacman -Fy # <- only run this once

pacman -Slq | fzf -m --preview 'cat <(pacman -Si {1}) <(pacman -Fl {1} | awk "{print \$2}")' | xargs -ro sudo pacman -S

yay -Slq | fzf -m --preview 'cat <(yay -Si {1}) <(yay -Fl {1} | awk "{print \$2}")' | xargs -ro  yay -S
```

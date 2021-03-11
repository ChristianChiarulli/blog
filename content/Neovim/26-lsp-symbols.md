---
title: LSP Completion Symbols in CoC
date: "2021-02-15"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## LSP Completion Symbols

If you are familiar with VS Code then you have probably noticed all of the symbols you see in the completion menu. You can find an example of all of the symbols provided here: [VSCode Intellisense Overview](https://code.visualstudio.com/docs/editor/intellisense)

## Adding to CoC

To add them to the CoC completion menu add the following to your `coc-settings.json`:

```
  "suggest.completionItemKindLabels": {
    "method": "  ",
    "function": "  ",
    "variable": "[]",
    "field": "  ",
    "typeParameter": "<>",
    "constant": "  ",
    "class": " פּ ",
    "interface": " 蘒",
    "struct": "  ",
    "event": "  ",
    "operator": "  ",
    "module": "  ",
    "property": "  ",
    "enum": " 練",
    "reference": "  ",
    "keyword": "  ",
    "file": "  ",
    "folder": " ﱮ ",
    "color": "  ",
    "unit": " 塞 ",
    "snippet": "  ",
    "text": "  ",
    "constructor": "  ",
    "value": "  ",
    "enumMember": "  "
  },
```

This was as close as I could get with the symbols provided by [Nerdfont Icons](https://www.nerdfonts.com/cheat-sheet).

Feel free to explore the above link and change the symbols to whatever you like.

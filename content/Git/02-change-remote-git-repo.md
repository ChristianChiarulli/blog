---
title: Changing remote Git repo
description: description
date: "2020-07-18"
image: git.png
author: "Chris"
tags: ["git"]
---

## List current remote

```
git remote -v
```

## Change remote Git repo

```
git remote set-url origin git@<your.git.repo.example.com>:<user>/<repository2.git>
```

( **NOTE** )

Replace everything inside `<>` with your data and remove the `<>` characters

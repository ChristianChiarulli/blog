---
title: Merging an upstream repo into your fork
description: description
date: "2019-08-01"
image: git.png
author: "Chris"
tags: ["git"]
---

<br />

This article is from Github's help page [here](https://help.github.com/en/articles/merging-an-upstream-repository-into-your-fork) I am adding it here to quickly reference it when I inevitably forget how to do it.

If you don't have push (write) access to an upstream repository, then you can pull commits from that repository into your own fork.

1. Open Terminal.

2. Change the current working directory to your local project.

3. Check out the branch you wish to merge to. Usually, you will merge into `master`.

```
git checkout master
```

4. Pull the desired branch from the upstream repository. This method will retain the commit history without modification.

```
git pull https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git BRANCH_NAME
```

5. If there are conflicts, resolve them.

6. Commit the merge.

7. Review the changes and ensure they are satisfactory.

8. Push the merge to your GitHub repository.

```
git push origin master
```


---
title: AWS S3 Cross Region Replication
description: description
date: '2019-02-21'
tags: ['aws']
---

Here are my notes on Cross Region Replication

* Versioning must be enabled on both the source and destination buckets.
* Regions msut be unique.
* Files in an existing bucket are not replicated automatically. All subsequent updated files will be replicated automatically.
* You cannot replicate to multiple buckets or daisy chain (at the moment at least).
* Delete markers are not replicated.
* Deleting individual versions or delete markers will not be replicated.

## Resources

[Cross Region Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html)

---
title: AWS S3 Lifecycle Management
description: description
date: '2019-02-24'
tags: ['aws']
---

You can manage the lifecycle for the objects stored in S3. This is very useful for mitigating storage costs.

* Can be used in conjunction with versioning
* Can be applied to current versions as well as previous versions.
* Follwing actions can now be done:
  * Transition to the standard - Infrequent Access Storage Class (30 days after creation date.)
  * Archive to the Glacier Storage Class (30 days after IA, if relevant)
* Permanently Delete

## Resources

[Object Lifecycle Management](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html)

---
title: AWS S3 Tips
description: description
date: '2019-02-20'
tags: ['aws']
---

* Buckets are a universal name space
* Upload an object to S3 recieve an HTTP 200 Code
* Threes types of storage: S3, S3 -IA, S3 Reduced Redundancy Storage
* Encryption
  * Client Side Encryption
  * Server Side Encryption
    * Server side encryption with Amazon S3 Managed Keys (SSE-S3)
    * Server side encryption with KMS (SSE-KMS)
    * Server side encryption with Customer Provided Keys (SSE-C)
* Control access to buckets using either a bucket ACL or using Bucket Policies
* By Default buckets are private and all objects stored inside them are private

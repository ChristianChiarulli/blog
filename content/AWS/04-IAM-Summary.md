---
title: AWS IAM-Summary
description: description
date: '2019-02-20'
tags: ['aws']
---

## Identity Access Management Consists Of The following

* Users
* Groups
* Roles
* Policies

## What We have Learned So Far

* IAM is universal. It does not apply to regions.
* The "root account" is simply the account created when you first setup your AWS account. It has complete Admin access.
* New Users have NO permissions when first created.
* New Users are assigned Access Key ID & Secret Access Keys when first created.
* These are not the same as a password. You cannot use the Access key ID & Secret Access Key to Login to the console. You can use this to access AWS via the APIs and Command Line programmatically.
* You only get to view these once. If lost they must be regenerated, so save credentials some place safe.
* Always setup Multifactor Authentication on your root accounts.
* You can create and customize your own password rotation policies.

## Amazon Whitepapers

If you plan on going for am AWS certificate I highly recommend reading the [whitepapers](https://aws.amazon.com/whitepapers/).

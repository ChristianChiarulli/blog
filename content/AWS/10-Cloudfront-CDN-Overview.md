---
title: AWS Cloudfront CDN Overview
description: description
date: '2019-02-24'
tags: ['aws']
---

## What is a CDN

A content delivery netork (CDN) is a system of distributed servers (network) that deliver webpages and other web content to a user based on the geographic locations of the user, the origin of the webpage and the content delivery server.

Amazon CloudFront can be used to deliver your entire website, including dynamic, static, streaming, and interactive content using a global network of edge locations. Requests for your content are automatically routed to the nearest edge location, so content is delivered with the best possible performance.

CloudFront is optimized to work with other Amazon Web Servies, like Simple Storage Services (S3), Elastic Compute Cloud (EC2), Elastic Load Balancing and Route 53. CloudFront also works seamlessly with any non-AWS origin server, which stores the orginal, definitive versions of your files.

## CloudFront - Key Terminology

* Edge Location - This is the location where content will be cached. This is seperate to an AWS Region/Availability Zone
* Origin - This is the origin of all files that the CDN will distribute. This can be either an S3 Bucket, and EC2 Instance, and Elastic Load Balancer or Route53.
* Distribution - This is the name given to a CDN consisting of a collection of Edge Locations.
  * Web Distribution - Typically used for Websites.
  * RTMP - Used for Media Streaming. (Things like Flash)

## Tips

* Edge locations are not just READ only, you can write to them as well.
* Objects are cached for the life of the TTL (Time To Live).
* You can clear cached objects, but you will be charged.

## Resources

[CloudFront](https://docs.aws.amazon.com/cloudfront/index.html#lang/en_us)

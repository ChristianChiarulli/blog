---
title: HTTP Verbs
description: description
date: '2019-02-27'
tags: ['flask']
---

Interacting with REST APIs

## What is a web server

* Software designed to accept web requests

## What do we send

* When you visit http://www.Amazon.com the following request is sent

$$Get / HTTP1.1$$
$$Host: www.Amazon.com$$

## The GET request

* The server will break down the request as follows
  * GET - verb or thing you are doing
  * / - Path
  * HTTP/1.1 - Protocol

## Responses

* Going to a page will always do a GET
* Different servers will respond with different data
* It may result in an error
* It may result in some html response (what your used to when visiting websites)

## Other requests

* POST
* DELETE
* PUT
* OPTIONS
* HEAD
* There are more but those are a few of the most common

## Common meanings for requests

* GET - Retrieve something
* POST - Recieve data, and use it
* PUT - Make sure something is there
* DELETE Remove something

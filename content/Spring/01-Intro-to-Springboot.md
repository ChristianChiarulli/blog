---
title: Intro to Spring Boot
description: description
date: "2019-04-12"
image: "Spring-Boot.png"
tags: ['spring']
---

Code can be found [here](https://github.com/ChristianChiarulli/SpringBootIntro) 

This is a spring boot application which provides REST endpoints to perform CRUD operations on topics and related courses

The project comes with a wrapper for Maven `mvnw`

to create the `jar` simply run the following:

```sh
./mvnw clean package
```

To start the application run the following:

```sh
java -jar target/filename.jar
```

This will start a tomcat server on port 8080

It will also start actuator on port 9001

And you can use a tool like Postman to make requests.

We are also using an embedded database Apache Derby

## Requests

This project handles GET, POST, PUT and DELETE requests for topics and their courses

Here are a few example calls you can make:

### Topic CRUD operations

* get all

```
http://localhost:8080/topics
```

* get particular topic

```
http://localhost:8080/topics/{topicId}
```

* post topic 

```
http://localhost:8080/topics
```

body:

```json
{
	"id": "java",
	"name": "Java",
	"description": "Java description"
}
```
* put topic

```
http://localhost:8080/topics/{topicId}
```

make sure you pass an updated body

* delete topic

```
http://localhost:8080/topics/{topicId}
```

### Course CRUD operations

* get all

```
http://localhost:8080/topics/{topicId}/courses
```

* get particular topic

```
http://localhost:8080/topics/{topicId}/courses/{id}
```

* post topic 

```
http://localhost:8080/topics/{topicId}/courses
```

body:

```json
{
	"id": "java-spring",
	"name": "Java Spring",
	"description": "Java Spring description"
}
```

* put topic

```
http://localhost:8080/topics/{topicId}/courses/{id}
```

make sure you pass an updated body

* delete topic

```
http://localhost:8080/topics/{topicId}/courses/{id}
```

## To view Actuator

```
http://localhost:9001/actuator/health
```


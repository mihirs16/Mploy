# 🍃 Mploy

Homework assignment using Spring Boot and MongoDB for the subject 18CSE343T Web Application Development. Includes a CRUD API & Frontend for Employee Database Management.

![Java](https://img.shields.io/badge/Using-Java-blue?style=for-the-badge&logo=appveyor)
![Spring Boot](https://img.shields.io/badge/Using-Spring%20Boot-green?style=for-the-badge&logo=appveyor)

## Built Using

| Tools | Version |
| ----- | ------- |
| OpenJDK | 11.0.9.1 |
| Apache Maven | 3.6.3 |
| Spring Boot | - |

* Database hosted on MongoDB

## Getting Started

* Fork this repository
* Clone your repository forked from this one

```bash
git clone https://github.com/:username/Mploy
```

* Add your MongoDB URI to `src\main\resources\application.properties`

```java
spring.data.mongodb.uri=//ENTER MONGO URI HERE //
```

* Build the project using Maven

```bash
cd Mploy
mvn package
```

* Run the Spring Boot server locally

```bash
java -jar target/spring-boot-mongodb-rest-api-0.0.1-SNAPSHOT.jar
```

* You can view the frontend at `localhost:8080/dashboard.html` in your browser

* All API requests are made to `localhost:8080/api/`

---
This work is heavily based on [Bushan Sirgur's CRUD Demo](https://github.com/scbushan05/spring-boot-mongodb).

[![Build Status](https://app.travis-ci.com/Renan04lima/survey-clean-node-api.svg?branch=main)](https://app.travis-ci.com/Renan04lima/survey-clean-node-api)
[![Coverage Status](https://coveralls.io/repos/github/Renan04lima/survey-clean-node-api/badge.svg?branch=main)](https://coveralls.io/github/Renan04lima/survey-clean-node-api?branch=main)
# **Clean Architecture Node API**

Essa API faz parte do treinamento do professor Rodrigo Manguinho (Mango) na Udemy.

> ### [Link para o treinamento](https://www.udemy.com/course/tdd-com-mango/?referralCode=B53CE5CA2B9AFA5A6FA1)

O objetivo do treinamento é mostrar como criar uma API com uma arquitetura bem definida e desacoplada, utilizando TDD (programação orientada a testes) como metodologia de trabalho, Clean Architecture para fazer a distribuição de responsabilidades em camadas, sempre seguindo os princípios do SOLID e, sempre que possível, aplicando Design Patterns para resolver alguns problemas comuns.

> ## Casos de Usos:

1. [Cadastro](./requirements/signup.md)
2. [Login](./requirements/login.md)
3. [Criar enquete](./requirements/add-survey.md)
4. [Responder enquete](./requirements/answer-survey.md)
5. [Resultado da enquete](./requirements/survey-result.md)

> ## Princípios aplicados:
* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Don't Repeat Yourself (DRY)
* Composition Over Inheritance
* Small commits

> ## Design Patterns aplicados:
* Factory
* Adapter
* Composite
* Decorator
* Dependency Injection
* Abstract Server
* Composition Root

> ## Metodologias/designs utilizados:
* TDD
* Clean Architecture
* DDD
* Conventional Commits
* GitFlow

> ## Bibliotecas e ferramentas utilizadas:
* Typescript
* Git
* Docker
* Jest
* MongoDb
* Bcrypt
* JsonWebToken
* Validator
* Express
* Supertest
* Husky
* Lint Staged
* Eslint
* Standard Javascript Style
* Sucrase

> ## Features abordadas:
* Atalhos no Git
* Log de Erro
* Segurança (Hashing, Encryption e Encoding)
* CORS
* Middlewares
* Testes de Integração
* Testes Unitários
* Cobertura de Testes
* Mocks
* Stubs
* Spies
* Deploy com Typescript
* Deploy no Heroku
* Uso de breakpoints no Typescript
* Uso correto de tags no Git
[![Build Status](https://app.travis-ci.com/Renan04lima/survey-clean-node-api.svg?branch=main)](https://app.travis-ci.com/Renan04lima/survey-clean-node-api)
[![Coverage Status](https://coveralls.io/repos/github/Renan04lima/survey-clean-node-api/badge.svg?branch=main)](https://coveralls.io/github/Renan04lima/survey-clean-node-api?branch=main)
# **Survey Clean Node API**

Essa API faz parte do treinamento do professor Rodrigo Manguinho (Mango) na Udemy.

> ### [Link para o treinamento](https://www.udemy.com/course/tdd-com-mango/?referralCode=B53CE5CA2B9AFA5A6FA1)

O objetivo do treinamento é mostrar como criar uma API com uma arquitetura bem definida e desacoplada, utilizando TDD (programação orientada a testes) como metodologia de trabalho, Clean Architecture para fazer a distribuição de responsabilidades em camadas, sempre seguindo os princípios do SOLID e, sempre que possível, aplicando Design Patterns para resolver alguns problemas comuns.

> ## Casos de Usos:

1. [Cadastro](./requirements/signup.md)
2. [Login](./requirements/login.md)
3. [Criar enquete](./requirements/add-survey.md)
4. [Responder enquete](./requirements/answer-survey.md)
5. [Resultado da enquete](./requirements/survey-result.md)

    
> ## Rodar testes


```bash
  yarn test:ci
```

  
> ## Rodar projeto

- Pré-requisitos
  - instalar yarn, docker e docker-compose


- Clonar projeto

```bash
  git clone https://github.com/Renan04lima/survey-clean-node-api.git
```

- Instalar dependências

```bash
  yarn
```

- Iniciar projeto

```bash
  yarn build:watch
  yarn up
```

- Ver os logs da api rodando

```bash
  docker-compose logs -f api
```

  
## Documentação

`http://localhost:5050/api-docs`

  

> ## Princípios

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)
* Composition Over Inheritance
* Small Commits

> ## Design Patterns

* Factory
* Adapter
* Composite
* Decorator
* Proxy
* Dependency Injection
* Abstract Server
* Composition Root
* Builder
* Singleton

> ## Metodologias e Designs

* TDD
* Clean Architecture
* DDD
* Conventional Commits
* GitFlow
* Modular Design
* Dependency Diagrams
* Use Cases
* Continuous Integration
* Continuous Delivery
* Continuous Deployment

> ## Bibliotecas e Ferramentas

* NPM
* Typescript
* Git
* Docker
* Jest
* MongoDb
* Travis CI
* Swagger
* Bcrypt
* JsonWebToken
* Faker
* Coveralls
* Validator
* Express
* Apollo Server Express
* Graphql
* Graphql ISO Date
* Graphql Scalars
* Graphql Tools
* Supertest
* Husky
* Lint Staged
* Eslint
* Standard Javascript Style
* Sucrase
* Nodemon
* Rimraf
* In-Memory MongoDb Server
* MockDate
* Module-Alias
* Copyfiles
* Npm Check
* Bson ObjectId
* Apollo Server Integration Testing

> ## Features do Node

* Documentação de API com Swagger
* API Rest com Express
* GraphQL com Apollo Server
* Log de Erro
* Segurança (Hashing, Encryption e Encoding)
* CORS
* Middlewares
* Nível de Acesso nas Rotas (Admin, User e Anônimo)
* Deploy no Heroku
* Servir Arquivos Estáticos

> ## Features do GraphQL

* Types
* Queries
* Mutations
* Resolvers
* Directives
* Scalars
* Plugins

> ## Features do Git

* Alias
* Log Personalizado
* Branch
* Reset
* Amend
* Tag
* Stash
* Rebase
* Merge

> ## Features do Typescript

* POO Avançado
* Interface
* TypeAlias
* Namespace
* Utility Types
* Modularização de Paths
* Configurações
* Build
* Deploy
* Uso de Breakpoints

> ## Features do GraphQL

* Resolvers
* Type Definitions
* Directives
* Scalars
* Plugins
* Error Handling

> ## Features de Testes

* Testes Unitários
* Testes de Integração (API Rest & GraphQL)
* Cobertura de Testes
* Test Doubles
* Mocks
* Stubs
* Spies
* Fakes

> ## Features do MongoDb

* Connect e Reconnect
* Collections
* InsertOne e InserMany
* Find, FindOne e FindOneAndUpdate
* DeleteMany
* UpdateOne
* Aggregation (Match, Group, Unwind, Lookup, AddFields, Project, Sort)
* ObjectId
* Upsert e ReturnOriginal
* Push, Divide, Multiply, ArrayElemAt, Cond, Sum
* Filter, Map, Reduce, MergeObjects, ConcatArrays
# Desafio Backend Verx

Este é um desafio para desenvolver uma API RestFul de acordo com a descrição do git https://github.com/brain-ag/trabalhe-conosco.

### 🛠 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/docs)
- [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Docker](https://docs.docker.com/)
- [Swagger](https://swagger.io/)
- [Jest](https://jestjs.io/)
- Typescript
- DDD
- Clean Architecture
- Hexagonal Architecture
- Principles SOLID
- Design Patterns
- Unit Tests

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/) e [Docker](https://docs.docker.com/) (caso queira iniciar com o docker).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

Será necessário clonar o projeto para sua máquina local,rodando.

```bash
git clone https://github.com/samuelsankys/desafio-verx.git``
```

### 🎲 Rodando o Back End (servidor)

Variáveis de Ambiente
Antes de iniciar, você precisará realizar duas cópias do arquivo `.env.example` e renomeá-lo para `.env` e .`env.development`. Nesses arquivos estarão as variáveis de ambientes do modo de desenvolvimento e de produção. No arquivo `.env.example` tem as informações para rodar o projeto localmente.

#### Rodando localmente

- Instale as dependências com

```bash
  npm install
```

- Certifique que o Postgres está funcionando e rode.

```bash
 npm run migrate
```

Isso irá construir as tabelas necessárias para rodar nosso projeto.

- Por fim, inicialize o servidor com

```bash
 npm run dev
```

para o modo de desenvolvimento.

#### Rodando com docker-compose

Antes de inicializar certifiquesse de parar algum container que contenha o postgres rodando. Após isso, para inicializar o servidor e banco de dados rode:

```bash
docker-compose up --build
```

### Documentação

A documentação das rotas poderá ser visualizada após inicializado o servidor no endpoint `http://localhost:3563/api-docs/`.

### 🎲 Features

- [x] O usuário deverá ter a possibilidade de cadastrar, editar, e excluir produtores rurais.
- [x] O sistema deverá validar CPF e CNPJ digitados incorretamente.
- [x] A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda
- [x] Cada produtor pode plantar mais de uma cultura em sua Fazenda.
- [x] A plataforma deverá ter endpoint para um Dashboard

#### Organização:

- Aplicação de padrões Clean Code.
- classes desacopladas.
- Commits seguindo o padrão de [convensão](https://www.conventionalcommits.org/en/v1.0.0/).
- Fluxo de git utilizando boas práticas auxiliado pelo gitflow.
- Eslint.

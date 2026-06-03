# AI Productivity Assistant

Um assistente de produtividade com IA desenvolvido para estudar e aplicar conceitos modernos de Backend Engineering.

O projeto está sendo construído com foco em arquitetura, boas práticas, escalabilidade e aprendizado profissional de desenvolvimento backend.

---

## Objetivos do Projeto

Este projeto tem como objetivo simular a construção de um produto real, aplicando conceitos utilizados no mercado de desenvolvimento de software.

Principais funcionalidades planejadas:

- Cadastro de usuários
- Autenticação JWT
- Gerenciamento de tarefas
- Histórico de conversas
- Integração com IA
- Sugestões de produtividade
- Organização pessoal

---

## Stack Tecnológica

### Backend

- Node.js
- TypeScript
- Fastify

### Banco de Dados

- PostgreSQL
- Prisma ORM

### Infraestrutura

- Docker
- Docker Compose

### Segurança

- JWT (JSON Web Token)
- Bcrypt

### Validação

- Zod

### IA

- OpenAI API

---

## Arquitetura Planejada

```text
Client
   │
   ▼
Fastify API
   │
   ├── Auth Module
   ├── User Module
   ├── Task Module
   ├── Conversation Module
   └── AI Module
   │
   ▼
PostgreSQL
```

---

## Estrutura Inicial do Domínio

### User

```text
id
name
email
password
createdAt
updatedAt
```

### Task

```text
id
title
description
status
userId
createdAt
updatedAt
```

### Conversation

```text
id
title
userId
createdAt
updatedAt
```

### Message

```text
id
content
role
conversationId
createdAt
updatedAt
```

---

## Conceitos Estudados Durante o Desenvolvimento

Este projeto também funciona como laboratório de aprendizado para os seguintes temas:

- Arquitetura Backend
- TypeScript
- APIs REST
- Docker
- PostgreSQL
- Prisma ORM
- JWT
- Validação de dados
- Tratamento de erros
- Integração com IA
- Boas práticas de desenvolvimento
- Clean Code
- Organização de projetos

---

## Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js
- Docker
- Docker Compose

---

### Clonar o projeto

```bash
git clone https://github.com/seu-usuario/ai-productivity-assistant.git
```

```bash
cd ai-productivity-assistant
```

---

### Instalar dependências

```bash
npm install
```

---

### Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password
POSTGRES_DB=ai-productivity

PORT=3000

DATABASE_URL=postgresql://postgres:your_password@db:5432/ai-productivity
```

---

### Iniciar ambiente

```bash
docker compose up -d
```

---

### Executar aplicação

```bash
npm run dev
```

---

## Roadmap

### Infraestrutura

- [x] Configuração inicial TypeScript
- [x] Configuração Fastify
- [x] Dockerfile
- [ ] Docker Compose
- [ ] PostgreSQL
- [ ] Prisma

### Autenticação

- [ ] Cadastro de usuário
- [ ] Login
- [ ] JWT
- [ ] Middleware de autenticação

### Tarefas

- [ ] Criar tarefa
- [ ] Atualizar tarefa
- [ ] Listar tarefas
- [ ] Excluir tarefa

### Conversas

- [ ] Criar conversa
- [ ] Persistir mensagens
- [ ] Histórico de conversas

### IA

- [ ] Integração OpenAI
- [ ] Contexto de conversa
- [ ] Sugestões de produtividade
- [ ] Resumo inteligente de tarefas

---

## Objetivo de Aprendizado

Este projeto está sendo desenvolvido com foco em aprendizado prático de engenharia de software, explorando desde infraestrutura e banco de dados até autenticação, arquitetura backend e integração com IA.

Cada etapa busca reproduzir decisões encontradas em projetos reais, priorizando entendimento dos conceitos em vez da simples implementação de código.

---

## Licença

Este projeto está licenciado sob a licença MIT.

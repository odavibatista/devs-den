# 💼 Dev's Den

<div align="center">

### Plataforma de Empregos para Profissionais de Tecnologia

Projeto acadêmico Full-Stack desenvolvido para as disciplinas de **Usabilidade e Desenvolvimento Web** e **Sistemas Distribuídos**, durante o **2º semestre de 2024**.

</div>

---

## 📖 Sobre o Projeto

O **Dev's Den** é uma plataforma fictícia de recrutamento voltada ao mercado de Tecnologia da Informação.

O sistema foi desenvolvido com o objetivo de simular um ambiente moderno de divulgação e busca de oportunidades profissionais para desenvolvedores, analistas, engenheiros de software e demais profissionais da área de tecnologia.

A aplicação foi construída utilizando uma arquitetura cliente-servidor, separando as responsabilidades entre um front-end desenvolvido em **Next.js** e uma API REST desenvolvida em **NestJS**.

Além de aplicar conceitos de desenvolvimento Full-Stack, o projeto explora fundamentos de sistemas distribuídos, integração entre serviços, validação de dados, autenticação de usuários e experiência do usuário.

---

## 🔗 Repositórios

O projeto foi desenvolvido em uma arquitetura desacoplada, com front-end e back-end mantidos em repositórios independentes.

| Projeto | Descrição | Repositório |
|----------|----------|----------|
| 🌐 Front-end | Interface da aplicação desenvolvida com Next.js, React e TypeScript | [devs-den-webapp](https://github.com/odavibatista/devs-den-webapp) |
| ⚙️ Back-end | API REST desenvolvida com NestJS, TypeORM e MySQL | [devs-den-api](https://github.com/odavibatista/devs-den-api) |

---

## 🎯 Objetivos Acadêmicos

O projeto foi desenvolvido para aplicar conceitos relacionados a:

- Desenvolvimento Full-Stack
- Sistemas Distribuídos
- Arquitetura Cliente-Servidor
- APIs REST
- Integração Front-end e Back-end
- Modelagem e Persistência de Dados
- Validação de Dados
- Experiência do Usuário (UX)
- Usabilidade
- Boas Práticas de Desenvolvimento

---

## 🏗️ Arquitetura da Solução

```text
┌─────────────────────┐
│      Next.js        │
│      Front-end      │
└──────────┬──────────┘
           │ HTTP / REST
           ▼
┌─────────────────────┐
│      NestJS API     │
│      Back-end       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│       MySQL         │
│      Database       │
└─────────────────────┘
```

---

## ✨ Principais Funcionalidades

### 👤 Usuários

- Cadastro de usuários
- Login e autenticação
- Gerenciamento de sessão utilizando JWT
- Validação de dados de entrada

### 💼 Plataforma

- Consulta de vagas de tecnologia
- Visualização de oportunidades profissionais
- Integração completa entre front-end e API
- Comunicação baseada em endpoints REST

### ⚙️ Desenvolvimento

- Documentação automática da API via Swagger
- Testes unitários em camadas da aplicação
- Estrutura modular baseada em NestJS
- Ambiente containerizado com Docker

---

## 🛠️ Tecnologias Utilizadas

### 🌐 Front-end

- Next.js
- React
- TypeScript
- SCSS
- Bootstrap
- Axios
- React Hook Form
- React Input Mask
- Zod

### ⚙️ Back-end

- NestJS
- TypeScript
- TypeORM
- MySQL
- JWT
- Swagger
- Zod
- BCrypt
- Jest

### 🐳 DevOps e Ferramentas

- Docker
- Docker Compose
- ESLint
- Prettier

---

## 📂 Estrutura do Projeto

```text
devs-den/
│
├── devs-den-api/
│   ├── src/
│   ├── test/
│   └── docker/
│
├── devs-den-webapp/
│   ├── src/
│   ├── public/
│   └── styles/
│
└── README.md
```

---

## 🚀 Executando o Projeto

### 1. Clonar os Repositórios

#### Front-end

```bash
git clone https://github.com/odavibatista/devs-den-webapp.git
```

#### Back-end

```bash
git clone https://github.com/odavibatista/devs-den-api.git
```

---

### 2. Configurar o Back-end

Entre no diretório da API:

```bash
cd devs-den-api
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com as credenciais do banco de dados.

Crie o banco e execute os seeds:

```bash
npm run db:create
npm run db:seed
```

Inicie a aplicação:

```bash
npm run start:dev
```

A API estará disponível em:

```text
http://localhost:5000
```

---

### 3. Configurar o Front-end

Entre no diretório da aplicação:

```bash
cd devs-den-webapp
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

---

## 📚 Documentação da API

A API possui documentação automática gerada através do Swagger.

Após iniciar o back-end, acesse:

```text
http://localhost:5000/swagger
```

A interface permitirá visualizar todos os endpoints disponíveis, seus parâmetros, payloads e respostas.

---

## 🧪 Testes

O projeto utiliza **Jest** para execução de testes automatizados.

Executar todos os testes:

```bash
npm run test
```

Executar em modo observação:

```bash
npm run test:watch
```

Gerar relatório de cobertura:

```bash
npm run test:cov
```

---

## 🐳 Docker

Tanto o front-end quanto o back-end possuem suporte para execução utilizando Docker e Docker Compose.

### Subir os containers

```bash
npm run docker:up
```

### Reiniciar os containers

```bash
npm run docker:restart
```

### Visualizar logs

```bash
npm run docker:logs
```

### Derrubar os containers

```bash
npm run docker:down
```

---

## 📚 Conceitos Aplicados

Durante o desenvolvimento foram aplicados conceitos de:

- Arquitetura em Camadas
- Arquitetura Cliente-Servidor
- APIs RESTful
- Sistemas Distribuídos
- Componentização de Interfaces
- Validação de Dados
- Autenticação e Autorização
- Persistência com ORM
- Boas Práticas de UX
- Responsividade
- Containerização
- Documentação de APIs

---

## 👥 Equipe

| Integrante | RA |
|------------|------------|
| Davi Batista | 823212382 |
| Rafael Bolsarini Favaretto | 823210205 |
| Yago | 823115101 |
| Gabriel | 822135326 |

---

## 🎓 Contexto Acadêmico

Projeto desenvolvido como atividade avaliativa (**A3**) para as disciplinas:

- Sistemas Distribuídos
- Usabilidade e Desenvolvimento Web

Durante o **2º semestre de 2024**.

O objetivo da atividade foi aplicar conhecimentos de desenvolvimento Full-Stack, integração entre serviços, usabilidade, experiência do usuário e arquitetura distribuída em uma aplicação web completa.

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins acadêmicos e educacionais.

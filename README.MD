# 🍷 Vinario API

![Node.js](https://img.shields.io/badge/Node.js-18%2B-43853D?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-Framework-000000?logo=fastify&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/Postgres-DB-336791?logo=postgresql&logoColor=white)
![ESLint](https://img.shields.io/badge/Lint-ESLint-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Format-Prettier-F7B93E?logo=prettier&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)

[![Build](https://github.com/leonardoardo/vinario-api/actions/workflows/ci.yml/badge.svg)](https://github.com/leonardoardo/vinario-api/actions/workflows/ci.yml)
[![Tests](https://img.shields.io/github/actions/workflow/status/leonardoardo/vinario-api/ci.yml?label=tests&logo=jest)](https://github.com/leonardoardo/vinario-api/actions)
[![Coverage](https://img.shields.io/codecov/c/github/leonardoardo/vinario-api?logo=codecov)](https://codecov.io/gh/leonardoardo/vinario-api)
[![Docker](https://img.shields.io/docker/image-size/leonardoardo/vinario-api?label=docker&logo=docker)](https://hub.docker.com/r/leonardoardo/vinario-api)

---

The **Vinario API** is the authentication and user management service of the Vinario ecosystem.  
It provides endpoints for user registration, login, session handling, and authorization, serving as the foundation for the future wine recommendation platform.

---

## 🚀 Tech Stack

- [Node.js](https://nodejs.org/) — Runtime environment  
- [Fastify](https://fastify.dev/) — High-performance web framework  
- [TypeScript](https://www.typescriptlang.org/) — Static typing and code safety  
- [PostgreSQL](https://www.postgresql.org/) — Relational database  
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — Code quality and style  

---

## 📂 Project Structure

```bash
vinario-api/
│── src/                 # Application source code
│   ├── routes/          # Fastify routes
│   ├── plugins/         # Authentication, logger, and other plugins
│   ├── services/        # Business logic
│   ├── db/              # Database configuration
│   └── index.ts         # Application entry point
│
│── dist/                # Compiled build output
│── tsconfig.json        # TypeScript configuration
│── .eslintrc.cjs        # ESLint configuration
│── package.json         # Dependencies and scripts
│── README.md            # Documentation
````

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/leonardoardo/vinario-api.git
cd vinario-api
npm install
```

---

## 🛠️ Scripts

```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Run compiled code
npm start

# Lint (check code style and rules)
npm run lint

# Lint + auto fix
npm run lint:fix
```

---

## 🔑 Authentication Endpoints (MVP)

* `POST /auth/register` → Register a new user
* `POST /auth/login` → Login and generate JWT token
* `GET /auth/me` → Return authenticated user data
* `POST /auth/logout` → Invalidate session

---

## 🧪 Testing

Tests will be implemented with [Jest](https://jestjs.io/) (or Vitest).

```bash
npm run test
```

---

## 🐳 Docker

```bash
# Build Docker image
docker build -t vinario-api .

# Run container
docker run -p 3000:3000 vinario-api
```

---

## 📌 Roadmap

* [x] Initial setup with Fastify + TypeScript
* [x] ESLint + Prettier configuration
* [ ] PostgreSQL integration
* [ ] Authentication with JWT
* [ ] Refresh tokens implementation
* [ ] Authorization middleware (roles/permissions)
* [ ] Deployment with Docker and CI/CD

---

## 📜 License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute.
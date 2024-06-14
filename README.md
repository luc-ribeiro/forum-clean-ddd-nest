<h1 align="center">
Forum Clean Architecture DDD Nest.js
<br>
<br>
</h1>

<div align="right">
    Clique <a href="https://github.com/luc-ribeiro/forum-clean-ddd-nest/blob/main/README-PTBR.md">aqui</a> para ver a versão em Português.
</div>
<br>

## 💻 Project
This project is the implementation of the infrastructure layer of the <a href="https://github.com/luc-ribeiro/forum-clean-ddd-node" target="_blank">Forum Clean DDD Node</a> built with Nest.js.

**Features**
- Create and Edit Questions: Users can create and edit questions. Questions can contain attachments such as images and PDFs.
- Answers and Comments: Other users can answer questions or make comments. They can also add attachments to their answers.
- Attachment Uploads: Attachments are uploaded to a Cloudflare R2 instance.
- Caching: Redis is used to cache question details, improving system performance.


## 🚀 Technologies

- **Nest.js** 
- **Node.js** 
- **TypeScript**
- **Prisma ORM**
- **Redis**: Caching system to optimize access to question details.
- **Vitest**
- **Cloudflare R2**: Object storage for managing attachments.


</details>

## :page_facing_up: How to use

- Clone this repository:

```sh
  $ git clone https://github.com/luc-ribeiro/forum-clean-ddd-nest.git
```

- Setup the ```.env``` variables in root, following the ```src/infra/env/env.ts``` file

- Install dependencies:

```sh
  $ npm install
```

- Build the Docker container:

```sh
  $ docker compose up -d
```

- Run the tests:

```sh
  # For unit tests
  $ npm test

  # For E2E tests
  $ npm run test:e2e
```

- Run the project:

```sh
  $ npm run start:dev
```

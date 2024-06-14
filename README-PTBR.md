<h1 align="center">
Forum Clean Architecture DDD Nest.js
<br>
<br>
</h1>

<div align="right">
    Click <a href="https://github.com/luc-ribeiro/forum-clean-ddd-nest/blob/main/README.md">here</a> to view the english version.
</div>
<br>

## 💻 Projeto

Este projeto implementa a camada de infraestrutura do [Forum Clean DDD Node](https://github.com/luc-ribeiro/forum-clean-ddd-node) construído com Nest.js.

**Funcionalidades**

- **Criação e Edição de Perguntas:** Os usuários podem criar e editar perguntas. As perguntas podem conter anexos, como imagens e PDFs.
- **Respostas e Comentários:** Outros usuários podem responder às perguntas ou fazer comentários. Eles também podem adicionar anexos às suas respostas.
- **Upload de Anexos:** Os anexos são carregados para uma instância do Cloudflare R2.
- **Cache:** O Redis é usado para cachear os detalhes das perguntas, melhorando o desempenho do sistema.

## 🚀 Tecnologias

- **Nest.js**
- **Node.js**
- **TypeScript**
- **Prisma ORM**
- **Redis:** Sistema de cache para otimizar o acesso aos detalhes das perguntas.
- **Vitest**
- **Cloudflare R2:** Armazenamento dos arquivos dos anexos.

## :page_facing_up: Como usar

- Clone este repositório:

```sh
  $ git clone https://github.com/luc-ribeiro/forum-clean-ddd-nest.git
```

- Configure as variáveis do ```.env``` na raiz, seguindo o arquivo ```src/infra/env/env.ts```

- Instale as dependências:

```sh
  $ npm install
```

- Construa o container Docker:

```sh
  $ docker compose up -d
```

- Execute os testes:

```sh
  # Para testes unitários
  $ npm test

  # Para testes E2E
  $ npm run test:e2e
```

- Execute o projeto:

```sh
  $ npm run start:dev
```

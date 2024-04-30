# Task Manager

O Task Manager é uma aplicação web para gerenciar tarefas e tags associadas a essas tarefas. Com este aplicativo, você pode facilmente criar, visualizar, atualizar e excluir tarefas, além de gerenciar as tags relacionadas a essas tarefas.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- Postman (para testes de API)

## Pré-requisitos

- Node.js instalado
- MySQL instalado e em execução
- Postman instalado (opcional)

## Configuração

1. Clone o repositório para o seu ambiente local:

```
git clone https://github.com/seu-usuario/task-manager.git
```

2. Navegue até o diretório do projeto:

```
cd task-manager
```

3. Instale as dependências do Node.js:

```
npm install
```

4. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

```
DB_HOST=seu-host-do-banco-de-dados
DB_PORT=porta-do-banco-de-dados
DB_USER=seu-usuario-do-banco-de-dados
DB_PASSWORD=sua-senha-do-banco-de-dados
DB_DATABASE=nome-do-banco-de-dados
JWT_SECRET=sua-chave-secreta-para-o-JWT
```

5. Execute o aplicativo:

```
npm start
```

O servidor estará em execução em `http://localhost:3000`.

## Uso

Você pode interagir com o aplicativo por meio de uma API RESTful. Aqui estão as principais operações que você pode realizar:

### Tarefas (Tasks)

- **GET /tasks/all**: Obter todas as tarefas.
- **GET /tasks**: Obter tarefas por título e/ou tags.
- **POST /tasks**: Criar uma nova tarefa.
- **PUT /tasks/:id**: Atualizar uma tarefa existente.
- **DELETE /tasks/:id**: Excluir uma tarefa.

### Tags

- **GET /tags**: Obter todas as tags.
- **GET /tags/:id**: Obter uma tag específica.
- **POST /tags**: Criar uma nova tag.
- **PUT /tags/:id**: Atualizar uma tag existente.
- **DELETE /tags/:id**: Excluir uma tag.

Certifique-se de usar o Postman ou qualquer outra ferramenta de teste de API para interagir com a aplicação.

## Exemplos de CRUD com o Postman

### Tarefas (Tasks)

#### 1. Obter todas as tarefas

- Método: GET
- Endpoint: `http://localhost:3000/tasks/all`

#### 2. Obter tarefas por título, data, data de criação e/ou tag

- Método: GET
- Endpoint: `http://localhost:3000/tasks`
- Parâmetros de consulta:
  - `title`: "título da tarefa"
  - `TagId`: 1
  - `date`: 2024-04-30T00:00:00.000Z
  - `createdAt`: 2024-04-30T00:00:00.000Z

#### 3. Criar uma nova tarefa

- Método: POST
- Endpoint: `http://localhost:3000/tasks`
- Corpo da requisição (JSON):
  ```json
  {
    "title": "Minha nova tarefa",
    "description": "Esta é uma descrição da minha tarefa",
    "date": "2024-04-25",
    "duration": 60,
    "tagId": 1
  }
  ```

#### 4. Atualizar uma tarefa existente

- Método: PUT
- Endpoint: `http://localhost:3000/tasks/:id`
- Substitua `:id` pelo ID da tarefa que deseja atualizar
- Corpo da requisição (JSON) com os campos a serem atualizados:
  ```json
  {
    "title": "Tarefa atualizada",
    "description": "Esta é a nova descrição da tarefa",
    "date": "2024-04-26",
    "duration": 90,
    "tagId": 2
  }
  ```

#### 5. Excluir uma tarefa

- Método: DELETE
- Endpoint: `http://localhost:3000/tasks/:id`
- Substitua `:id` pelo ID da tarefa que deseja excluir

### Tags

#### 1. Obter todas as tags

- Método: GET
- Endpoint: `http://localhost:3000/tags`

#### 2. Obter uma tag específica

- Método: GET
- Endpoint: `http://localhost:3000/tags/:id`

#### 3. Criar uma nova tag

- Método: POST
- Endpoint: `http://localhost:3000/tags`
- Corpo da requisição (JSON):
  ```json
  {
    "name": "Nova Tag"
  }
  ```

#### 4. Atualizar uma tag existente

- Método: PUT
- Endpoint: `http://localhost:3000/tags/:id`
- Substitua `:id` pelo ID da tag que deseja atualizar
- Corpo da requisição (JSON) com os campos a serem atualizados:
  ```json
  {
    "name": "Tag Atualizada"
  }
  ```

#### 5. Excluir uma tag

- Método: DELETE
- Endpoint: `http://localhost:3000/tags/:id`
- Substitua `:id` pelo ID da tag que deseja excluir

### Sign Up (Cadastro de Usuário)

1. **Endpoint:** `POST /signup`
2. **Descrição:** Crie uma nova conta fornecendo um email e uma senha.
3. **Corpo da Requisição (JSON):**
   ```json
   {
     "email": "seu-email@example.com",
     "password": "sua-senha"
   }
   ```
4. **Resposta de Sucesso (Status 201):** Retorna os detalhes do novo usuário criado.
5. **Resposta de Erro (Status 400):** Retorna um erro se o email já estiver em uso.

### Login

1. **Endpoint:** `POST /login`
2. **Descrição:** Faça login na sua conta fornecendo o email e a senha cadastrados anteriormente.
3. **Corpo da Requisição (JSON):**
   ```json
   {
     "email": "seu-email@example.com",
     "password": "sua-senha"
   }
   ```
4. **Resposta de Sucesso (Status 200):** Retorna um token JWT válido.
5. **Resposta de Erro (Status 401):** Retorna um erro se as credenciais estiverem incorretas.

Você pode usar esses endpoints para interagir com a API e realizar o login e o signup no sistema. Certifique-se de incluir o token JWT retornado na resposta de login em todas as solicitações subsequentes que exigem autenticação, enviando-o no cabeçalho `Authorization` da requisição.

## Considerações Finais

- Em caso de maiores dúvidas, entre em contato.

- [MyWebPage](https://devfelipelimabr.github.io/git-page/)

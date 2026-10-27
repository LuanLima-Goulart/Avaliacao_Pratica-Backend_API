# Avaliacao_Pratica-Backend_API

## DER

![alt text](backend/assets/{AD3FFEAA-6FF1-443B-8092-422FF6097627}.png)

## Como executar

Abra o terminal na pasta **backend**;

No terminal digite **npm init -y**;

Quando terminar de instalar, digite **npm i express node nodemon mysql2 dotenv**;

Depois de terminar de instalar tudo, pode dar um **npm start**;

## Rotas

`Produtos`

| Método | Rota | Descrição |
|---|---|---|
| GET | `/produto/` | Lista produtos |
| GET | `/produto/:id` | Busca produtos por ID |
| POST | `/produto/` | Criar um produto |
| PUT | `/produto/:id` | Atualiza produto |
| DELETE | `/produto/:id` | Deleta produto |

`Categoria`

| Método | Rota | Descrição |
|---|---|---|
| GET | `/categoria/` | Lista categorias |
| GET | `/categoria/:id` | Busca categoria por ID |
| POST | `/categoria/` | Criar categoria |
| PUT | `/categoria/:id` | Atualiza categoria |
| DELETE | `/categoria/:id` | Deleta categoria |
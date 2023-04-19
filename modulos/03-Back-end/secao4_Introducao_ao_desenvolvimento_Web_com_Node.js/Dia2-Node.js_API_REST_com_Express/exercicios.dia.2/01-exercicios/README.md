# Exercícios - agora, a prática

## Exercício 1 ✅
Qual é a função do código de status 400 e 422?

<details><summary>Resposta</summary>

A classe de status code 4xx destina-se a situações nas quais o erro parece ter sido causado pelo cliente. Isto é, usar o status code 400 ou 422 de uma forma geral a aplicação estará repassando o entendimento ao cliente que o erro está do lado dele e ele precisa arrumá-lo caso queiro realizar uma nova comunicação.

**400:** O código de status de resposta `HTTP 400 Bad Request` indica que o servidor não pode ou não irá processar a requisição devido a alguma coisa que foi entendida como um erro do cliente (por exemplo, sintaxe de requisição mal formada, enquadramento de mensagem de requisição inválida ou requisição de roteamento enganosa).

**422:** O código de resposta `HTTP 422 Unprocessable Entity` indica que o servidor entende o tipo de conteúdo da entidade da requisição, e a sintaxe da requisição esta correta, mas não foi possível processar as instruções presentes.

</details>

## Exercício 2 ✅
Qual é a função do código de status 401?

<details><summary>Resposta</summary>
O código de resposta de status de erro do cliente `HTTP 401 Unauthorized` indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.
</details>

### Crie o diretório src e dentro dele um arquivo movies.json com o os filmes da nossa locadora:

<details><summary>movies.json</summary>

``` json
[
  {
    "id": 1,
    "movie": "Avatar",
    "price": 5
  },
   {
    "id": 2,
    "movie": "Gente Grande",
    "price": 2
  },
  {
    "id": 3,
    "movie": "O Jogo",
    "price": 3
  },
  {
    "id": 4,
    "movie": "Quebrando a Banca",
    "price": 5
  },
  {
    "id": 5,
    "movie": "Lilo & Stitch",
    "price": 2
  },
  {
    "id": 6,
    "movie": "Os Fantasmas se Divertem",
    "price": 2
  },
  {
    "id": 7,
    "movie": "Meninas Malvadas",
    "price": 3
  }
]
```
</details>

## 🚀 Exercício 3 ✅
Crie um servidor Node.js utilizando o framework Express.

## 🚀 Exercício 4 ✅
Crie uma função de leitura do JSON com o modulo fs.

## 🚀 Exercício 5 ✅
Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.

## 🚀 Exercício 6 ✅
Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.

## 🚀 Exercício 7 ✅
Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.

O corpo da requisição deve receber o seguinte formato:

```json
{
  "movie": "Vingadores",
  "price": 5
}
```

## 🚀 Exercício 8 ✅
Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.

O corpo da requisição deve receber o seguinte formato:
```json
{
  "movie": "Vingadores: Ultimato",
  "price": 5
}
```

## 🚀 Exercício 9 ✅
Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.
<h2>Exercício - bônus</h2>
<details>

### 🚀 Exercício 10 ✅
Crie um endpoint do tipo GET com a rota /movies/search, que possa listar todos os filmes do JSON.

A rota deve receber a informação por query e a chave deve-se chamar q. A chave vai trazer consigo valor de ‘gente’ por exemplo, e o filtro deve trazer apenas os filmes com esse termo, se não encontrar, traga um array vazio.

</details>
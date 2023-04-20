# Práticas comuns de middlewares

### Enviando mensagens de erros personalizadas na resposta

#### Para fixar

1 - Agora é sua vez. Modifique o código do middleware `existingId` para retornar o *http status* `404` e um objeto no formato `{ message: 'Time não encontrado' }` quando não encontrar o time com o **id** recebido.


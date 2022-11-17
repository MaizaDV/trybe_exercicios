// Requisição com uma URL inválida. Deve retornar um erro.
fetch('https://invalid.dummyjson.com/products/27')
  .then((response) => response.json())
  .then((data) => console.log('GET sem headers', data))
  .catch((error) => console.log('Erro ao fazer requisição.', error.message));

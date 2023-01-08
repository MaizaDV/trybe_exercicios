fetch("https://api.goprogram.ai/inspiration")
  .then(response => console.log(response));

  // Esse retorno é diferente do objeto que estávamos esperando de nossa API. Isso acontece por que quando a promise retornada pelo método fetch é resolvida, ela retorna um objeto do tipo Response, que é um tipo de objeto criado especialmente para lidar com a resposta de uma requisição.

fetch("https://api.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(`"${data.quote}" | ${data.author}`));


const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

// Suponha que agora desejamos exportar tanto a função de conversão quanto o valor do dólar (a variável brl). Para isso, podemos exportar um objeto contendo as duas constantes da seguinte forma:

module.exports = {
  brl,
  usdToBrl,
};

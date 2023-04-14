// const brl = 5.37;

// module.exports = brl;
//? No arquivo acima, estamos exportando do nosso módulo o valor da constante brl(que é 5.37), ao importarmos esse módulo, receberíamos o valor 5.37 como resposta. Apesar disso funcionar, exportar um único valor constante assim não é comum.

// Vamos observar um caso que acontece com mais frequência:

const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = usdToBrl;

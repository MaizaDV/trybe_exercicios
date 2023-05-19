
// const brlValue = require('./brlValue2');

// console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

// console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
// console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7

//? Como estamos lidando com um objeto, podemos utilizar object destructuring para transformar as propriedades do objeto importado em constantes no escopo global:

const { brl, usdToBrl } = require('./brlValue2');

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7

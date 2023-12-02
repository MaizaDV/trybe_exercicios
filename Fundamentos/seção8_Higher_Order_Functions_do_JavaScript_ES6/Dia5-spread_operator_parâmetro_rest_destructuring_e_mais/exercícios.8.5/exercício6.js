//? Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
// const toObject = ([param1, param2, param3]) => ({param1, param2, param3});

const toObject = ([type, brand, year]) => ({ type, brand, year });
console.log(toObject(palio));

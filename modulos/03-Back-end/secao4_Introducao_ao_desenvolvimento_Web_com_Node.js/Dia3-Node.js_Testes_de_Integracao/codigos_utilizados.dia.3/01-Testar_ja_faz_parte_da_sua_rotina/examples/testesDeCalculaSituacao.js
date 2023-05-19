const calculaSituacao = require('./calculaSituacao');

console.log('Quando a média for menor que 7, retorna "reprovação":');

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovação') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// console:
// Quando a média for menor que 7, retorna "reprovação":
// Ok 🚀

console.log('Quando a média for maior que 7, retorna "aprovação":');

const respostaCenario2 = calculaSituacao(9);
if (respostaCenario2 === 'aprovação') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// console:
// Quando a média for maior que 7, retorna "aprovação":
// Ok 🚀

console.log('Quando a média for igual a 7, retorna "aprovação":');

const respostaCenario3 = calculaSituacao(7);
if (respostaCenario3 === 'aprovação') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}

// console:
// Quando a média for igual a 7, retorna "aprovação":
// Ok 🚀

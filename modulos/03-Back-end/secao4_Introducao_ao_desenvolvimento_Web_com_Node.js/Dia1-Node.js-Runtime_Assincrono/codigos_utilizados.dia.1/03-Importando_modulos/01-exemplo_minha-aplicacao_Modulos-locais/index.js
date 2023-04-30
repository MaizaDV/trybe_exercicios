// Para importarmos e utilizarmos o módulo meuModulo, basta passar o caminho da pasta como argumento para a função require, desse modo:
const meuModulo = require('./meuModulo');

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();

// quando importarmos o módulo meuModulo, teremos um objeto contendo duas propriedades, as quais são as funcionalidades que exportamos dentro de meuModulo/index.js.

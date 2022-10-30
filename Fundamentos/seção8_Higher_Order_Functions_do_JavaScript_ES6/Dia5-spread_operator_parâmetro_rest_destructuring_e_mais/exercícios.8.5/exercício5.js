//? Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha.

const myList = [5, 2, 3];
const swap = ([first, second, third]) => [third, second, first];

console.log(swap(myList));

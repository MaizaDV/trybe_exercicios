//? retornar true se o segundo parâmetro, estiver contido no primeiro parâmetro. Caso não esteja contido, deve retornar false.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) => element === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Carlos'));


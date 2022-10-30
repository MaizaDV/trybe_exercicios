const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;
console.log(nationality);
console.log('=> ---------------------');

//? Quando tentamos acessar uma propriedade que não existe, o valor retornado é undefined. E se você quisesse dar um valor padrão para alguma chave, caso essa propriedade não exista no objeto? Você consegue atribuir esse valor padrão utilizando default destructuring, que é mais um recurso do ES6:

const { nationality2 = 'Brazilian' } = person;
console.log(nationality2); // Brazilian
console.log('=> ---------------------');

//? o mesmo pode ser feito na hora de desestruturar um array:
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0


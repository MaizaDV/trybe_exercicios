const numbers = [19, 21, 30, 3, 45, 22, 15];

// //? retornar o primeiro número par do array.

const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.find(verifyEven);

console.log(isEven); // 30
console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

//? Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

//? Quando a passamos como callback, o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.
console.log(isEven2); // 30

// const printName = function () {    // => função anônima
//   const myName = 'Lucas';
//   return myName;
// };

// console.log(printName());

// const printName = () => {    // => arrow function
//   const myName = 'Lucas';
//   return myName;
// };

// console.log(printName());

// const printName = () => 'Lucas';   // => arrow function simplificada
// console.log(printName());

const multiplyByTwo = number => number * 2;   // => arrow function simplificada com um parâmetro
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;   // => arrow function simplificada com dois parâmetros, precisam de parênteses
console.log(multiplication(8, 2));
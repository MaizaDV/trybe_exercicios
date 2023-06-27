//? função sem operador ternário
// const factorial = (number) => {
//   let result = 1;
//   for (let i = 1; i <= number; i += 1) {
//     result *= i;
//   }
//   return `O fatorial de ${number} é ${result}`;
// }
// console.log(factorial(3));

// todo: função com operador ternário
const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;

console.log(factorial(5));
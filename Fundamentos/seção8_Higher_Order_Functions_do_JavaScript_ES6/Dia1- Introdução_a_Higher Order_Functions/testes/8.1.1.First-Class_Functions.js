//? exemplo 1 - função atribuído a uma variável
function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable, sum); //  saída=> [Function: sum] sem usar ()
console.log(sumVariable(2, 2), sum(2, 3)); // saída=>  [4, 5] usando () e atribuindo parâmetros

//? exemplo 2 - arrow function simplificando o exemplo 1
//? Quando utilizamos arrow functions, estamos justamente utilizando da capacidade do JavaScript de conseguir armazenar a função dentro de uma variável
const sum2 = (number1, number2) => {
  return number1 + number2;
};

console.log(sum2); // saída=> [Function: sum2] sem usar ()
console.log(sum2(2, 3)); // saída=> [5] usando () e atribuindo parâmetros


const books = require('./books')

//? Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

//* const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((element) => element.author.birthYear > 1900 && element.author.birthYear <= 2000)
}

console.log(everyoneWasBornOnSecXX());

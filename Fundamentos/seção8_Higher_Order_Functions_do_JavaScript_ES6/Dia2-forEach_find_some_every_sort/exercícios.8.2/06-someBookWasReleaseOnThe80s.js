const books = require('./books')

//? Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

//* const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((element) =>
    element.releaseYear >= 1980 && element.releaseYear <= 1990)
}

console.log(someBookWasReleaseOnThe80s());

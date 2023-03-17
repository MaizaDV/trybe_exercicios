const books = require('./books')

//? Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

//* const expectedResult = false;

function authorUnique() {
  return books.every((bookEvery) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === bookEvery.author.birthYear)
      && (bookSome.author.name !== bookEvery.author.name)));
}

console.log(authorUnique());

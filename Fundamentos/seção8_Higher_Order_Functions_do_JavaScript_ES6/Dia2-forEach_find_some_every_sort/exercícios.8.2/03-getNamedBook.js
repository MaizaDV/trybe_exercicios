const books = require('./books')

//? Encontre o primeiro livro cujo nome possui 26 caracteres.

//* const expectedResult = {
//*   id: 1,
//*   name: 'As Crônicas de Gelo e Fogo',
//*   genre: 'Fantasia',
//*   author: {
//*         name: 'George R. R. Martin',
//*     birthYear: 1948,
//*   },
//*     releaseYear: 1991,
//* };

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}

console.log(getNamedBook());

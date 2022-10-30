const books = require('./books')

//? Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947());

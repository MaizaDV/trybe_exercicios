const { expect } = require('chai');
const { Book } = require('../../models');

describe('O model de Book', function () {
  it('possui a propriedade "title"', function () {
    const book = new Book();
    expect(book).to.have.property('title');
  });

  it('possui a propriedade "author"', function () {
    const book = new Book();
    expect(book).to.have.property('author');
  });

  it('possui a propriedade "pageQuantity"', function () {
    const book = new Book();
    expect(book).to.have.property('pageQuantity');
  });

  it('possui a propriedade "publisher"', function () {
    const book = new Book();
    expect(book).to.have.property('publisher');
  });
});

//──── usando sequelize-test-helpers ─────────────────────────────────────────────────────
// const {
//   sequelize,
//   dataTypes,
//   checkModelName,
//   checkPropertyExists,
// } = require('sequelize-test-helpers');

// const BookModel = require('../../models/Book');

// describe('O model de Book', () => {
//   const Book = BookModel(sequelize, dataTypes);
//   const book = new Book();

//   describe('possui o nome "Book"', () => {
//     checkModelName(Book)('Book');
//   });

//   describe('possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
//     ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
//   });
// });

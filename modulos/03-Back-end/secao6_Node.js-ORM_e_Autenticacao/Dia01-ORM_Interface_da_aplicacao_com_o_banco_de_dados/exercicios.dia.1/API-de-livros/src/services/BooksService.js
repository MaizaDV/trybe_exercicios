const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (bookId) => {
  const book = await Book.findByPk(bookId)
  if (!book) return { type: 404, message: "Book not found" };
  return { type: 200, message: book };
};

const create = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [updated] = await Book.update(
    {
      title,
      author,
      pageQuantity,
    },
    { where: { id } },
  );

  return updated;
};

const remove = async (id) => {
  const removed = await Book.destroy(
    { where: { id } },
  );

  return removed;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

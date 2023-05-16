const bookService = require('../services/BooksService');

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await bookService.getById(bookId);
    return res.status(book.type).json({message: book.message });
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await bookService.create({ title, author, pageQuantity });

  return res.status(201).json(book);
};

const update = async (req, res) => {
  const bookId = req.params.id;
  const { title, author, pageQuantity } = req.body;

  const updatedUser = await bookService.update(bookId, { title, author, pageQuantity });

  if (!updatedUser) return res.status(404).json({ message: 'Book not found' });

  return res.status(201).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const bookId = req.params.id;

  const removed = await bookService.remove(bookId);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json({ message: 'Book removed' });
};

module.exports = { getAll, getById, create, update, remove };

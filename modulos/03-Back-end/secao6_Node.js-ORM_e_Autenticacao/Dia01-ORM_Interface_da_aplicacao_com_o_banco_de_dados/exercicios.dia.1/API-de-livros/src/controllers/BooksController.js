const bookService = require('../services/BooksService');

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    let books;

    if (author) {
      books = await bookService.getByAuthor(author);
    } else {
      books = await bookService.getAll();
    }
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
  const { title, author, pageQuantity, publisher } = req.body;
  const book = await BookService.create({ title, author, pageQuantity, publisher });

  res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;

  const updated = await BookService.update(id, { title, author, pageQuantity, publisher });

  if (!updated) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const bookId = req.params.id;

  const removed = await bookService.remove(bookId);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json({ message: 'Book removed' });
};



module.exports = { getAll, getById, create, update, remove };

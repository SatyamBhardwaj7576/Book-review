const Book = require('../models/Book');
const Review = require('../models/Review');

exports.addBook = async (req, res) => {
  const { title, author, genre } = req.body;
  const book = new Book({ title, author, genre, createdBy: req.user.id });
  await book.save();
  res.json(book);
};

exports.getBooks = async (req, res) => {
  const { page = 1, limit = 10, author, genre } = req.query;
  const filter = {};
  if (author) filter.author = new RegExp(author, 'i');
  if (genre) filter.genre = new RegExp(genre, 'i');
  const books = await Book.find(filter).skip((page - 1) * limit).limit(+limit);
  res.json(books);
};

exports.getBookDetails = async (req, res) => {
  const book = await Book.findById(req.params.id);
  const reviews = await Review.find({ bookId: req.params.id });
  const avgRating = reviews.reduce((a, b) => a + b.rating, 0) / (reviews.length || 1);
  res.json({ book, avgRating, reviews });
};

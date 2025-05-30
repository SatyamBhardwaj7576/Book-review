const express = require('express');
const auth = require('../config/auth');
const { addBook, getBooks, getBookDetails } = require('../controllers/bookController');
const router = express.Router();

router.post('/books', auth, addBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookDetails);

module.exports = router;

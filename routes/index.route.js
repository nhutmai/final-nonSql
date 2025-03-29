const express = require('express');
const router = express.Router();
const bookRouter = require('./book.route');
const authorRouter = require('./author.route');

router.use('/books', bookRouter);
router.use('/authors', authorRouter);

module.exports = router;
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/', bookController.getAndFilter);
router.get('/:bookId', bookController.getById);
router.post('/', bookController.createOne);


module.exports = router;
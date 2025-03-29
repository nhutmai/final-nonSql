const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author.controller');

router.get('/', authorController.getAllAndFilter);
router.get('/:bookId', authorController.getById);


module.exports = router;
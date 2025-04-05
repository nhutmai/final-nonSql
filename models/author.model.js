const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    author_full_name: {type: String, required: true},
    books: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Book'} ],
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
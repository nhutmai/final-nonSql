const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
        title: {type: String, required: true, index: true},
        author_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Author'},
        genre: {type: String, required: true, enum: [ 'Technology', 'Science', 'Fiction', 'Business', 'Education' ]},
        publishing_year: Number,
        num_of_favorites: {type: Number, default: 0},
    },
    {timestamps: true},
    {collection: 'Books'});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
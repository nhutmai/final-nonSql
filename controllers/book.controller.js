const Book = require('../models/book.model');
const Author = require('../models/author.model');

class BookController {

    async getAndFilter(req, res) {
        try {
            const {limit = 10, page = 1, title, genre} = req.query;
            const skip = (page - 1) * limit;
            const publishYear = req.query.publishYear;
            let filter = {
                ...(title && {title: new RegExp(title, 'i')}),
                ...(genre && {genre: new RegExp(genre, 'i')}),
                ...(publishYear && {publishYear: publishYear}),
            };
            const books = await Book.find(filter)
                .select('_id title publishing_year num_of_favorites')
                .populate({
                    path: 'author_id',
                    select: 'full_name',
                })
                .skip(skip)
                .limit(limit)
                .exec();
            return res.status(200).json({
                books,
                currentPage: page,
                totalPages: Math.ceil(books.length / limit),
            });
        } catch (e) {
            return res.status(500).send({
                success: false,
                'message': error.message
            });
        }

    }

    async getById(req, res) {
        try {
            const book = await Book.findById(req.params.id);
            return res.status(200).json({book});
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: error.message
            });
        }

    }

    async createOne(req, res) {
        try {
            const author = await Author.findById(req.body.author_id);
            if (!author) {
                return res.status(400).send({
                    success: false,
                    message: 'author does not exist'
                });
            }
            const book = await Book.create(req.body);
            return res.status(200).json({
                success: true,
                message: 'Book created successfully.',
                book,
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                'message': error.message
            });
        }
    }

}

module.exports = new BookController();
const Author = require('../models/author.model');

class AuthorController {

    async getAllAndFilter(req, res) {
        try {
            const bookNum = parseInt(req.query.bookNum);
            let authors = [];
            if (!bookNum) {
                authors = await Author.find({});
            } else {
                authors = await Author.aggregate([
                    {
                        $project: {
                            _id: 1,
                            author_full_name: 1,
                            book_count: {$size: '$books'}
                        }
                    },
                    {
                        $match: {
                            book_count: {$gte: bookNum}
                        }
                    }
                ]);
            }

            return res.status(200).json({
                success: true,
                authors,
            });
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

    async getById(req, res) {
        try {
            const author = await Author.findById(req.params.id);
            if (!author) {
                return res.status(400).send({
                    success: false,
                    message: 'author does not exist'
                });
            }
            return res.status(200).json({
                success: true,
                author,
            });
        } catch (error) {
            return res.status(500).send({'message': error.message});
        }

    }

}

module.exports = new AuthorController();
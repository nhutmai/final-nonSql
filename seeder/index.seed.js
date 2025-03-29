const connectDb = require('../config/database/mongo.connect');
const Book = require('../models/book.model');
const {faker} = require('@faker-js/faker');
const Author = require('../models/author.model');

class IndexSeed {
    static async seed() {
        try {
            await connectDb.connect();
            await Book.deleteMany({});
            await Author.deleteMany({});

            let authorsData = [];
            for (let i = 0; i < 10; i++) {
                authorsData.push({
                    full_name: faker.person.fullName(),
                    books: []
                });
            }
            const authors = await Author.insertMany(authorsData);
            console.log('authors created');

            let booksData = [];
            for (let i = 0; i < 10; i++) {
                booksData.push({
                    title: faker.book.title(),
                    author_id: faker.helpers.arrayElement(authors)._id,
                    genre: faker.helpers.arrayElement([ 'Technology', 'Science', 'Fiction', 'Business', 'Education' ]),
                    publishing_year: faker.date.past({years: 20}).getFullYear(),
                    num_of_favorites: faker.number.int({min: 0, max: 1000}),
                });
            }
            const books = await Book.insertMany(booksData);
            console.log('Book created');

            //add bookID list in to Author
            await Promise.all(
                books.map((book) =>
                    Author.findByIdAndUpdate(book.author_id, {$push: {books: book._id}})
                )
            );
            console.log('relationships have been created');
        } catch (err) {
            console.log('fail to run seed, please try again');
        }

    }
}

IndexSeed.seed();

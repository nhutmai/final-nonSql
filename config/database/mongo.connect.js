const mongoose = require('mongoose');
require('dotenv').config();
const DB_URI = process.env.DB_URI;

class MongoDB {
    static instance = null;

    static async connect() {
        if (!MongoDB.instance) {
            try {
                MongoDB.instance = await mongoose.connect(DB_URI);
                console.log('MongoDB connected successfully');
            } catch (error) {
                console.error('MongoDB connection failed:', error.message);
            }
        }
        return MongoDB.instance;
    }
}

module.exports = MongoDB;
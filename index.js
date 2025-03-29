const express = require('express');
const app = express();
const indexRouter = require('./routes/index.route');
require('dotenv').config();
const connectDB = require('./config/database/mongo.connect');
const PORT = process.env.PORT || 3000;

connectDB.connect();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/v1/', indexRouter);

app.use((err, req, res, next) => {
    res.status(500).send({
        message: err.message,
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
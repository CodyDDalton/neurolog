const express = require('express');
require('dotenv').config({ path: "api/.env"});
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser")

const app = express();

app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
       next();
 });
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

const logRouter = require("./routes/logRouter");
const entryRouter = require("./routes/entryRouter");
const userRouter = require("./routes/userRouter");

const url = `mongodb://localhost:27017`;

mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use('/api/v1/logs', logRouter)
app.use('/api/v1/entries', entryRouter)
app.use('/api/v1/neurolog-users', userRouter)

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});
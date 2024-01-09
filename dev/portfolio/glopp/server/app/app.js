const express = require('express');
const app = express();
const mongoose = require('mongoose');
const gloppRouter = require('../router/gloppRouter');
require('dotenv').config();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/members', gloppRouter);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
        message: error.message,
        status: error.status
        },
    });
});

mongoose.connect("mongodb://localhost:27017/members", (error) => {
    if(error){
        console.log(`Error: ${error.message}`);
    }
    else{
        console.log('MongoDB is up and running!');
    }
});
module.exports = app;
const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Entry', entrySchema)
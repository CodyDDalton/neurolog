const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Log', logSchema)
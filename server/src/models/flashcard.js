const mongoose = require('mongoose');

const  { Schema } = mongoose;

const FlashcardSchema= new Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    isAnswered: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('flash-card-app', FlashcardSchema);
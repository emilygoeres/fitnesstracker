const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    excercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            caloriesBurned: {
                type: Number,
                required: true
            }
        }
    ]
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
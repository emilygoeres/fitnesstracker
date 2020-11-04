const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    excercises: [
        {
           excercisetype: {
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

const workout = mongoose.model("workout", workoutchema);

module.exports = workout;
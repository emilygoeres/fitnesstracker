const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// what we are looking for for when we are adding a new workout
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
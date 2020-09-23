const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
        {
            type: Object,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});

const WorkOut = mongoose.model("WorkOut", WorkoutSchema);

module.exports = WorkOut;


const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const moviesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    imdb: {
        type: Number
    },
    realseYear: {
        type: String
    }
},
    {

        timestamps: true
    }
)

module.exports = model("movies", moviesSchema)
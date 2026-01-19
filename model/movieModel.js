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
        type: Number,
         default: 5.0
    },
    desc: {
        type: String
    },
    artists: {
        type: [String]
    },
    realseYear: {
        type: String
    }
},
    {

        timestamps: true,
        optimisticConcurrency: true
    }
)

module.exports = model("movies", moviesSchema)
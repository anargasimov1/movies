const express = require("express");
const mongoose = require("mongoose");
const movieRouter = require("./routers/moviesRoute");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger");

const PORT = process.env.PORT || 5050;

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*",
    allowedHeaders: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.use("/api", movieRouter);

app.listen(PORT, () => console.log(`Server has started on ${PORT} port`));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

mongoose.connect("mongodb+srv://anar_gasimov:root123@movies.b1re5ao.mongodb.net/movies?appName=Movies")
    .then(() => console.log("Connected to db success"));

app.use((_, res) => {
    res.status(404).json({
        status: "fail",
        message: "axtardığnız url üzrə marşurut mövcud deyil!"
    });
});





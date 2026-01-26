const express = require("express");
const mongoose = require("mongoose");
const movieRouter = require("./routers/moviesRoute");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger");
const { Op, QueryTypes } = require("sequelize");
const users = require('./db/users');
const blogs = require('./db/blogs');
const sequelize = require("./db/index");
const { db } = require("./model/movieModel");
require("./db/assosations");
const bcyrpt = require('bcrypt');


sequelize.sync().then(() => {
    console.log(" postgres db connected")
}).catch(err => {
    console.log("error to coonect", err.message)
})


const PORT = process.env.PORT || 5050;

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*",
    allowedHeaders: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.use("/api", movieRouter);



app.get("/users", async (req, res) => {
    const result = await users.findAll({
        include: {
            model: blogs,
            attributes: { exclude: ['user_id', 'id'] }
        }
    });
    res.json(result)

});

app.get("/blogs", async (req, res) => {
    const result = await blogs.findAll({
        include: [
            {
                model: users,
                as: "author",
                attributes: { exclude: ['user_id'] }
            }
        ],
        attributes: { exclude: ['user_id'] }
    });
    res.json(result)

});

app.delete("/delblog", async (req, res) => {
    await blogs.destroy({
        where: {
            user_id: 7
        }
    });
    res.send("ugurlu")
})

app.post("/create", async (req, res) => {
    const obj = req.body;
    obj.password = await bcyrpt.hash(obj.password, 10);
    const data = await users.create(obj);
    const blog = await blogs.create({
        title: "first title",
        content: "content",
        user_id: data.id
    });
    res.send(data, blog)

});

app.delete("/delete/:id", async (req, res) => {
    await users.destroy({
        where: { id: req.params.id }
    }).then(d => {
        res.json(d)
    });


})

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





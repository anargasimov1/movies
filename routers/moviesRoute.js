const router = require("express").Router();
const MovieController = require("../controller/MovieController");

const controller = new MovieController();

router.get("/movies", controller.allMovies);
router.post("/movies", controller.createMovie);
router.get("/movies/:id", controller.getMovie);
router.delete("/movies/:id", controller.delMovie);
router.put("/movies/:id", controller.update);


module.exports = router;
const MovieService = require("../service/MovieService");

const service = new MovieService();

class MovieController {

    async allMovies(req, res) {
        try {
            const response = await service.getAll();
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json(error.message);
        }
    }

    async createMovie(req, res) {

        try {
            const newMovie = req.body;
            const createdMovie = await service.createMovie(newMovie);
            res.status(201).json(createdMovie);
        }
        catch (error) {
            res.status(404).json(error.message);
        }
    }

    async getMovie(req, res) {
        try {
            const id = req.params.id;
            const movie = await service.findMoviesById(id);
            res.status(200).json(movie);
        }
        catch (error) {
            res.status(404).json({
                status: "fail",
                message: "axtardigniz film tapilmadi"
            });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const updated = await service.updateMovie(id, data);
            res.status(200).json(updated);
        }
        catch (error) {
            res.status(404).json(error.message);
        }
    }

    async delMovie(req, res) {
        try {
            const id = req.params.id;
            let data = await service.deleteMoviebyId(id);
            if (data === null) {
                res.status(500).json({ message: "movie not found" });
            }
            res.status(204).send()
        }
        catch (error) {
            res.status(500).json(error.message)
        }
    }

}

module.exports = MovieController;
const movieModel = require("../model/movieModel")

class MovieService {

    async getAll() {
        try {
            const data = await movieModel.find();
            return {
                data,
                length: data.length
            };
        }
        catch (error) {
            throw error;
        }
    }

    async createMovie(data) {
        try {
            const createdMovie = movieModel.create(data);
            return createdMovie;
        }
        catch (error) {
            throw error;
        }

    }

    async findMoviesById(id) {
        try {
            const movie = await movieModel.findById(id);
            return movie;
        }
        catch (error) {
            throw error;
        }
    }

    async updateMovie(id, data) {
        try {
            let updated = await movieModel.findById(id);
            Object.assign(updated, data);
            return updated.save();
        }
        catch (error) {
            throw error
        }
    }

    async deleteMoviebyId(id) {
        try {
            return await movieModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = MovieService;
const router = require("express").Router();
const MovieController = require("../controller/MovieController");

const controller = new MovieController();

router.get("/movies", controller.allMovies);
router.post("/movies", controller.createMovie);
router.get("/movies/:id", controller.getMovie);
router.delete("/movies/:id", controller.delMovie);
router.put("/movies/:id", controller.update);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 65a123abc456
 *         name:
 *           type: string
 *           example: Inception
 *         image:
 *           type: string
 *           example: https://image-url.com/inception.jpg
 *         imdb:
 *           type: number
 *           example: 8.8
 *         desc:
 *           type: string
 *           example: A mind-bending thriller by Christopher Nolan
 *         artists:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
 *         realseYear:
 *           type: string
 *           example: 2010
 *
 *     MovieInput:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           example: Interstellar
 *         image:
 *           type: string
 *           example: https://image-url.com/interstellar.jpg
 *         imdb:
 *           type: number
 *           example: 8.6
 *         desc:
 *           type: string
 *           example: Space exploration epic
 *         artists:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Matthew McConaughey", "Anne Hathaway"]
 *         realseYear:
 *           type: string
 *           example: 2014
 */

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movie management API
 */

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Bütün filmləri gətir
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Movie list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Yeni film yarat
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MovieInput'
 *     responses:
 *       201:
 *         description: Movie created
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: ID ilə film gətir
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single movie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Film yenilə
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MovieInput'
 *     responses:
 *       200:
 *         description: Movie updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Film sil
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie deleted
 */

const router = require("express").Router();
const MovieController = require("../controller/MovieController");

const controller = new MovieController();

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
 * /movies:
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
router.get("/movies", controller.allMovies);

/**
 * @swagger
 * /movies:
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
router.post("/movies", controller.createMovie);

/**
 * @swagger
 * /movies/{id}:
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
 */
router.get("/movies/:id", controller.getMovie);

/**
 * @swagger
 * /movies/{id}:
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
router.delete("/movies/:id", controller.delMovie);

/**
 * @swagger
 * /movies/{id}:
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
 */
router.put("/movies/:id", controller.update);


module.exports = router;
const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
    "postgres://postgres:mysecretpassword@localhost:5432/postgres",
    {
        logging: console.log
    }
);


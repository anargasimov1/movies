const Sequelize = require('sequelize');
const sequelize = require('./index');
const blogs = require('./blogs');

const users = sequelize.define("Users", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        required: true
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING()
    }
}, {
    tableName: "users",
    timestamps: false
});


module.exports = users;
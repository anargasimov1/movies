const Sequelize = require('sequelize');
const sequelize = require('./index');
const users = require('./users');

const blogs = sequelize.define("Blogs", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    content: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: { model: users, key: "id" },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }
}, {
    tableName: "blogs",
    timestamps: false
});


module.exports = blogs;
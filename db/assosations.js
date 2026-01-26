const blogs = require("./blogs");
const users = require("./users");

users.hasMany(blogs, { as: "blogs", foreignKey: "user_id", onDelete: "CASCADE", onUpdate: "CASCADE" });
blogs.belongsTo(users, { as: "author", foreignKey: "user_id", onDelete: "CASCADE", onUpdate: "CASCADE" });
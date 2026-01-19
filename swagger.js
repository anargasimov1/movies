const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movies API",
      version: "1.0.0",
      description: "Node.js + MongoDB Movies CRUD API (Test üçün)",
    },
    servers: [
      {
        url: "http://doshabcatering.az:5050",
        description: "Local server",
      },
    ],
  },
  apis: ["./routers/*.js"],
};

module.exports = swaggerJsDoc(swaggerOptions);

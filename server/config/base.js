const swaggeroptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Reddit Clone",
        version: "1.0.0",
        description: "the docs",
      },
      servers: [
        {
          url: process.env.BASE_URL || "http://localhost:8080",
          name: "SERVER",
        },
        {
          url: "https://portifolio-website.herokuapp.com/",
          name: "herokuapp",
        },
      ],
    },
    apis: ["docs/**/*.docs.js"],
  };

module.exports = swaggeroptions;
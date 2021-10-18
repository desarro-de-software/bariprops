const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const swaggerDefinition = {
  openapi: '3.0.1',
  info: {
    title: 'Bari Proprs API docs',
    version: '0.1.0',
    description: 'REST API documentation',
  },
  servers: [
    {
      url: '/api',
    },
  ],
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./swagger/**/*.yaml'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', routes);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    res.boom.internal('an error occurred');
    // res.status(500).json({ statusCode: 500, error: 'an error occurred', message: 'an error occurred' });
  }
});

module.exports = app;

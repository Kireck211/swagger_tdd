const express = require('express');
const swaggerUI = require('swagger-ui-express');
// const swaggerJSDoc = require('swagger-jsdoc');

const specs = require('./swagger.json');

const animalsRouter = require('./routes/animals');

// const options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'Animals for adoption API',
//       version: '1.0.0',
//       description: 'A simple api for getting animals for adoption and adopting them',
//     },
//     servers: [
//       {
//         url: 'http://localhost:3001',
//       },
//     ],
//   },
//   apis: ['./routes/*.js'],
// };

// const specs = swaggerJSDoc(options);
// console.log(JSON.stringify(specs));

const app = express();

app.use('/animals', animalsRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.listen(3001, () => console.log('Listening on port 3000!'));

import express from 'express';
const consign = require('consign');

const app = express()

consign()
  .include('commands')
  .then('services')
  .into(app);

  app.listen(5000, () =>
  console.log('Welcome Bob'),
);
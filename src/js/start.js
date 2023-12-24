const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const router = require('./router');

const app = express();
const port = 3030;

connection.connect();

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server started on localhost:${port}`);
});
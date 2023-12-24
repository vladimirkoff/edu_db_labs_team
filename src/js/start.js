const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const router = require('./router');

const app = express();
const port = 3030;

// Підключення до бази даних
connection.connect((error) => {
  if (error) {
    console.log('Помилка при підключенні до бази даних:', error);
    process.exit(1); // Вихід з програми у випадку помилки
  } else {
    console.log('Підключено до бази даних');
  }
});

// Використання middleware для обробки JSON-даних
app.use(bodyParser.json());

// Використання маршрутів
app.use(router);

// Слухання запитів на вказаному порту
app.listen(port, () => {
  console.log(`Сервер запущений на localhost:${port}`);
});

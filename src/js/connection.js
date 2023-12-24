const mysql = require('mysql2');

const connectionUrl = 'mysql://root:k1llr34l@localhost:3306/mydb';
const connection = mysql.createConnection(connectionUrl);

connection.connect((error) => {
  if (error) {
    console.error('Помилка при підключенні до бази даних:', error);
    process.exit(1); // Вихід з програми у випадку помилки
  } else {
    console.log('Підключено до бази даних');
  }
});

module.exports = connection;


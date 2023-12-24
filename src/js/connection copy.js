const mysql = require('mysql2');

const connectionUrl = 'mysql://root:k1llr34l@localhost:3306/mydb';
const connection = mysql.createConnection({
  uri: connectionUrl
});

module.exports = connection;

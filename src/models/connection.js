const mysql = require('mysql2');

const connection = mysql.createPool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORT,
});

module.exports = {
  connection,
};

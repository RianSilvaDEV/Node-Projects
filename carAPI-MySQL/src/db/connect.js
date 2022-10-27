var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.HOSTNAME_MYSQL_DB,
  user: process.env.USER_MYSQL_DB,
  password: process.env.PASSWORD_MYSQL_DB,
  database: process.env.DATABASE_MYSQL_DB,
  port: process.env.PORT_MYSQL_DB
});

connection.connect((error) => {
  if (error) {
    console.log("Open connection error", error)
  }
  else {
    console.log(`Database conected ${process.env.DATABASE_MYSQL_DB}`)
  }
});

module.exports = connection;


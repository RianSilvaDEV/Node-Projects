var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.HOSTNAME_MYSQL_DB,
  user: process.env.USER_MYSQL_DB,
  password: process.env.PASSWORD_MYSQL_DB,
  database: process.env.DATABASE_MYSQL_DB
}).connect((error) => {
    if(error) 
    {
       console.log(error)
    }
    console.log(`Database conected ${process.env.DATABASE_MYSQL_DB}`)
});

module.exports = connection;


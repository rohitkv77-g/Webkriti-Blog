const mysql = require('mysql');

const mySqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: "blogDatabase",
});

mySqlConnection.connect((err) => {
  if (err) res.status(500).send(err);
  console.log("Database Connected!");
});

module.exports = mySqlConnection;
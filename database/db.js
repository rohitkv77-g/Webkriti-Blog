const mysql = require("mysql");

// const mySqlConnection = mysql.createConnection({
// host: "sql12.freemysqlhosting.net",
// user: "sql12329703",
// password: process.env.DATABASE_PASSWORD_ONLINE,
// database: "sql12329703"
// });

const mySqlConnection = mysql.createConnection({
host: "localhost",
user: "root",
password: process.env.DATABASE_PASSWORD,
database: "blogDatabase"
});

mySqlConnection.connect(err => {
if (err) console.log(err);
else console.log("Database Connected!");
});

module.exports = mySqlConnection;
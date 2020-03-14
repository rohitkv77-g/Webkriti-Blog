require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

const app = express();
// const PORT=3000;
// Now in .env file

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// const a=require(__dirname+"/routes/influence.js");


app.use("/", require(__dirname+"/routes/home.js"));
app.use("/signup", require(__dirname+"/routes/signUp.js"));
app.use("/signin", require(__dirname+"/routes/signIn.js"));
app.use("/mycreation", require(__dirname+"/routes/myCreation.js"));
app.use("/influence", require(__dirname+"/routes/influence.js"));

app.listen(process.env.PORT, ()=>{
    console.log("Server Started at PORT "+process.env.PORT);
}); 
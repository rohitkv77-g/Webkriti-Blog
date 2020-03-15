const express = require('express');
const path = require("path");
const router = express.Router();

function loggedIn(){
    // return 1; - user logged in
    // return 0; - user logged out
}

router.get("/influence",(req,res)=>{
    res.render("influence.ejs",{});
});

router.get("/myCreation",(req,res)=>{
    res.render("myCreation.ejs",{});
});


router.get('/', (req, res)=>{
    // res.sendFile(path.dirname(__dirname)+"/html/homePage.html");
    res.render("home.ejs",{});
});

module.exports = router;
const express = require('express');
const path = require("path");
const router = express.Router();

function loggedIn(){
    // return 1; - user logged in
    // return 0; - user logged out
}

// router.get("/influence",(req,res)=>{
//     res.render("influence.ejs",{});
// });

// router.get("/myCreation",(req,res)=>{
//     res.render("myCreation.ejs",{});
// });


router.get('/', (req, res)=>{
    // res.sendFile(path.dirname(__dirname)+"/html/homePage.html");
    res.render("home.ejs",{});
});

router.get("/aboutus",(req,res)=>{
    res.render(__dirname+"/html/aboutUs.html");
});

router.get("/profile",(req,res)=>{
    res.render("profile.ejs",{});
});

router.get("/intrests",(req,res)=>{
    res.render("intrests.ejs",{});
});

router.get("/author",(req,res)=>{
    res.render("author.ejs",{});
});

router.get("/settings",(req,res)=>{
    res.render("settings.ejs",{});
});


module.exports = router;
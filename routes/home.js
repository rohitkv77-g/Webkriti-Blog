const express = require('express');
const path = require("path");
const router = express.Router();
const mySqlConnection = require("../database/db")

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

router.get("/", (req, res) => {
      mySqlConnection.query(
        "SELECT * FROM blogs",
        (err, rows) => {
          if (err) {res.status(500).send(err)}
          else {
            res.status = 200
            res.render('home', {blogs : rows})
          }
        },
      )
  });

router.get('/', (req, res)=>{
    // res.sendFile(path.dirname(__dirname)+"/html/homePage.html");
    res.render("home.ejs",{});
});

// router.get("/blogs/:blogId", function(req, res){
//     // const requestedTitle = _.lowerCase(req.params.blogTitle);
    
//         // const storedTitle = _.lowerCase(blogs.title);
//         for(var i=0;i<blogs.length;i++){
//         if (blogs.id === req.params.blogId) {
//         res.render("explore", {
//             title: blogs.title,
//             content: blogs.content
//         });
//         }
//         }
//     });

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
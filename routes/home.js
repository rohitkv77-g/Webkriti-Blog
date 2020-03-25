const express = require('express');
const path = require("path");
const router = express.Router();
const mySqlConnection = require("../database/db")
const app = express();

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


router.get("/blogs/:blogId", function(req, res){
        mySqlConnection.query(
        "SELECT * FROM blogs",
        (err, rows) => {
            if (err) res.status(500).send(err)
            else{
                // console.log("in else block " + req.params.blogId)
                for(var j=0;j<rows.length;j++){
                    if (rows[j].id == req.params.blogId){
                        console.log(rows[j])
                        res.status(200)
                        res.render("explore", {
                            title: rows[j].title,
                            content: rows[j].blogContent
                        });
                    }
                
                }
            }    
        },
        )
});


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
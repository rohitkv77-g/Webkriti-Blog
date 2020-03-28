const express = require('express');
const path = require("path");
const router = express.Router();

const mySqlConnection = require(path.dirname(__dirname)+"/database/db.js");

// router.get('/', (req, res)=>{
//     res.sendFile(path.dirname(__dirname)+"/html/influence.html");
// });

router.get("/",(req,res)=>{
    if(req.session.user)
        res.render("influenceafter.ejs",{toUpdate : 0});
    else
        res.render("influencebefore.ejs",{toUpdate : 0});
})

router.post("/blogPost", (req, res) => {
    if (req.session.user) {
        console.log(req.session.user);
        const blog_title=req.body.blogTitle;
        const blog_category=req.body.category;
        const blog_Content=req.body.blogContent;

        var sql = "INSERT INTO blogs (category, title, blogContent, authorName) VALUES ?";
        var values = [  
            [blog_category, blog_title, blog_Content, req.session.user],  
            ]; 
        mySqlConnection.query(
            sql, [values], (err, rows) => {
                if (err) res.status(500).send(err);
                else{
                    console.log("blog is posted");
                    res.status(200)
                    res.send("<script>window.location.href = \"/mycreation\";alert(\"Your Blog has been Posted\");</script>")
                    // res.redirect("/myCreation?blog+posted");
                }  
            },
            )
    } else {
        // const Login_First="<script>alert(\"Login First\")</script>";
        // res.send(Login_First)
        // res.redirect("/signin");
        res.send("<script>window.location.href = \"/signin\";alert(\"You Need to be logged in first\");</script>")
        // res.redirect("/signin?login+first");
    }
  })

router.post("/post",(req,res)=>{
    res.render("/mycreation",{});
});

module.exports = router;
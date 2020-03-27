const express = require('express');
const path = require("path");
const router = express.Router();
const mySqlConnection = require("../database/db");


// router.get('/', (req, res)=>{
//     res.sendFile(path.dirname(__dirname)+"/html/homePage.html");
// });
// router.get("/",(req,res)=>{
//     res.render("myCreation.ejs",{});
// });

router.get("/", function(req, res){
    if (req.session.user) {
        mySqlConnection.query(
            "SELECT * from blogs where authorName = ?", [req.session.user],
            (err, rows) => {
                if (err) res.status(500).send(err)
                // else if(rows.length == 0) res.send("You have no Blogs to display")
                else{
                    res.status = 200
                    res.render('myCreation', {blogs : rows})
                }  
            },
            )
    }else{
        res.redirect("/signin?login+first");
    }      
});

router.get("/blogs/delete/:blogId", (req, res) => {
    // console.log("debugTest1");
    if (req.session.user) {
      mySqlConnection.query(
        "SELECT * FROM blogs WHERE id = ? AND authorName = ?",
        [req.params.blogId, req.session.user],
        (err, rows) => {
          if (err) res.status(500).send(err)
          else if (!rows.length) {
            // console.log("No row");
            res.status = 401;
            res.redirect('/myCreation');
          }
          else {
            mySqlConnection.query(
              "DELETE FROM blogs WHERE id = ?",
              [req.params.blogId],
              (err) => {
                if (err) res.status(500).send(err)
                else {
                    // console.log("row found");
                  res.status = 200;
                  res.redirect('/myCreation');
                }
              },
            )
          }
        },
      )
    } else {
        res.redirect("/signin?login+first");
    }
  })

router.get("/blogEditProposal/:blogId", (req, res) => {
  if (req.session.user) {
    mySqlConnection.query(
      "SELECT * FROM blogs WHERE id = ? AND authorName = ?",
      [req.params.blogId,req.session.user],
      (err) => {
        if (err) res.status(500).send(err)
        else {
          res.status = 200;
          res.render("influence.ejs",{});
        }
      },
    )
    
  } else {
      res.redirect("/signin?login+first");
  }
})

module.exports = router;
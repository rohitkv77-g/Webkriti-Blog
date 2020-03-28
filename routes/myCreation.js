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
        res.send("<script>window.location.href = \"/signin\";alert(\"You Need to be logged in first\");</script>");
        // res.redirect("/signin?login+first");
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
            // res.redirect('/myCreation');
            res.send("<script>window.location.href = \"/mycreation\";alert(\"Not Owner of this Blog\");</script>");
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
                  res.send("<script>window.location.href = \"/mycreation\";alert(\"Successfully Deleted the Blog\");</script>");
                  // res.redirect('/myCreation');
                }
              },
            )
          }
        },
      )
    } else {
        res.send("<script>window.location.href = \"/signin\";alert(\"You Need to be logged in first\");</script>");
        // res.redirect("/signin?login+first");
    }
  })

router.get("/blogEditProposal/:blogId", (req, res) => {
  if (req.session.user) {
    mySqlConnection.query(
      "SELECT * from blogs where id = ?", [req.params.blogId],
      (err, rows) => {
        if(err) {
          res.send(err)
        }
        else{
          if(rows.length == 0)
          res.send("No such blog exits")
          else{
            res.render("influence",{toUpdate : 1, title : rows[0].title, category : rows[0].category, blogContent : rows[0].blogContent, blogId : rows[0].id})
          }
        }
      },
    )
    // mySqlConnection.query(
    //   "SELECT * from blogs where id = ?", [req.params.blogId],
    //   (err, rows) => {
    //     if (err) {
    //       console.log("error")
    //       res.status(500).send(err)
    //    }
    //     else if(rows.length == 0){
    //        console.log("no row found")
    //       //  console.log(req.session.user + "  " + rows[0].authorname)
    //     }
    //     else {
    //       var useInfluenceToUpdate = 1;
    //       console.log(rows[0].title);
    //       res.status = 200;
    //       res.render("influence.ejs",{toUpdate : useInfluenceToUpdate, title : rows[0].title, category : rows[0].category, blogContent : rows[0].blogContent, blogId : rows[0].id});
    //     }
    //   },
    // )

    // mySqlConnection.query(
    //   "SELECT * FROM blogs WHERE id = ? AND authorName = ?",
    //   [req.params.blogId, req.session.user],
    //   (err, rows) => {
    //     if (err) {res.status(500).send(err)}
    //     else{
    //       if (!rows.length) {
    //         console.log("number of rows are " + rows.length);
    //       }
    //       else {
    //         console.log("query excuted")
    //         var useInfluenceToUpdate = 1
    //         console.log(rows[0].title)
    //         res.status = 200
    //         res.render("edit",{toUpdate: 0})
    //       }
    //     }
    //   }
    // )
  } else {
      res.send("<script>window.location.href = \"/signin\";alert(\"You Need to be logged in first\");</script>");
      // res.redirect("/signin?login+first");
  }
})

router.post("/update/:blogId", (req, res) => {
  if (req.session.user) {
    const category = req.body.category;
    const title = req.body.blogTitle;
    const blogContent = req.body.blogContent;

    mySqlConnection.query(
      "SELECT * FROM blogs WHERE id = ? AND authorName = ?",
      [req.params.blogId, req.session.user],
      (err, rows) => {
        if (err) res.status(500).send(err)
        if (!rows.length) {
        res.status = 401;
        res.send("this blog does not exists");
      }
        else {
          mySqlConnection.query(
            "UPDATE blogs SET category=?, title=?, blogContent=? WHERE id = ?",
            [category, title, blogContent, req.params.blogId],
            (err, rows) => {
              if (err) res.status(500).send(err)
              else {
              res.status = 200
              var q="<script>window.location.href = \"/blogs/"+req.params.blogId+"\";alert(\"Succesfullu Updated\");</script>";
              console.log(q);
              res.send(q);
                // res.redirect("/blogs/" + req.params.blogId);
              }
            },
          )
        }
      },
    )
  } else {
  res.status = 401;
  res.send("<script>window.location.href = \"/signin\";alert(\"You Need to be logged in first\");</script>");
  // res.redirect("/signin?login+first");
  }
})

module.exports = router;
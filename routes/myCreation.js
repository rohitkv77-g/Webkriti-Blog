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


module.exports = router;
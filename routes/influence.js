const express = require('express');
const path = require("path");
const router = express.Router();


// router.get('/', (req, res)=>{
//     res.sendFile(path.dirname(__dirname)+"/html/influence.html");
// });

router.get("/",(req,res)=>{
    res.render("influence.ejs",{});
})

router.post("/post",(req,res)=>{
    res.redirect("/mycreation",);
});

module.exports = router;
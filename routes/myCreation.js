const express = require('express');
const path = require("path");
const router = express.Router();


// router.get('/', (req, res)=>{
//     res.sendFile(path.dirname(__dirname)+"/html/homePage.html");
// });
router.get("/",(req,res)=>{
    res.render("myCreation.ejs",{});
});


module.exports = router;
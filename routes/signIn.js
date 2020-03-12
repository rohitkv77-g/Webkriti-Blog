const express = require('express');
const path = require("path");
const router = express.Router();


router.get('/', (req, res)=>{
    res.sendFile(path.dirname(__dirname)+"/html/SignIn.html");
});

module.exports = router;
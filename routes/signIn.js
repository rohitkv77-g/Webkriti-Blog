const express = require('express');
const path = require("path");
const router = express.Router();
const bcrypt = require("bcrypt");

const mySqlConnection = require(path.dirname(__dirname)+"/database/db.js");

router.get('/', (req, res)=>{
    if(!req.session.user)
        res.sendFile(path.dirname(__dirname)+"/html/SignIn.html");
    else{
        console.log("logged in");
        res.redirect("/");
    }
});

const password_incorrect="<script>alert(\"Password Incorrect\")</script>";
const user_not_found="<script>alert(\"No such user exist\")</script>";

router.post("/login", (req,res)=>{
    const q="select * from users where user_name = \""+req.body.username+"\";";
    console.log(req.body);
    mySqlConnection.query(q,(err,rows)=>{
        if(err){
            res.send(err);
        }
        user=rows[0];
        if(user){
            // const cur_pass=bcrypt.hashSync(req.body.password,process.env.SALT_ROUND);
            const result=bcrypt.compareSync(req.body.password,user.pass);
            if(result){
                req.session.user=req.body.username;
                res.redirect("/");
            }else{
                res.send(password_incorrect);
            }
        }else
            res.send(user_not_found);
    });
});

module.exports = router;
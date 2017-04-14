var express = require("express");
var router = express.Router();
var md5 = require('md5');

var cookieParser = require('cookie-parser');
var session = require('express-session');
 var flash = require('express-flash') 

var authpage = require("../auth");
router.get('/',function(req,res){
	
    res.render("../pages/admin/index");
})

router.get('/login',function(req,res){
    
    res.render("../pages/admin/index");
})

router.get('/dashboard',function(req,res){
    console.log(req.session.user);
    res.render("../pages/admin/dashboard",{userdata:req.session.user});
})

router.get('/logout',function(req,res){
    
    req.session.destroy(function(err){

        res.redirect("/admin/login");
    });
    
})



router.post('/loginpost',function(req,res,checkauth){
    var email = req.body.email;
    var password = md5(req.body.password);
    authpage.checkauth(req,res,email,password);
   
});
module.exports = router;
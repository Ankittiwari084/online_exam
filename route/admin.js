var express = require("express");
var router = express.Router();
var md5 = require('md5');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash') 


function isAuthenticated(req, res, next) {

    // do any checks you want to in here

    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    if (req.session.user)
        return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.redirect('/admin/login');
}


var authpage = require("../auth");
router.get('/',function(req,res){
	
    res.render("../pages/admin/index");
})

router.get('/login',function(req,res){
    
    res.render("../pages/admin/index");
})

router.get('/dashboard',isAuthenticated,function(req,res){
   
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
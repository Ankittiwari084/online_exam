var express = require("express");
var router = express.Router();
var md5 = require('md5');
var authpage = require("../auth");
router.get('/',function(req,res){
	
    res.render("../pages/admin/index");
})

router.get('/login',function(req,res){
    
    res.render("../pages/admin/index");
})

router.get('/dashboard',function(req,res){
    
    res.render("../pages/admin/dashboard");
})



router.post('/loginpost',function(req,res,checkauth){
    var email = req.body.email;
    var password = md5(req.body.password);
    authpage.checkauth(res,email,password);
   
});
module.exports = router;
var express = require("express");
var router = express.Router();

router.get('/',function(req,res){
    res.render("../pages/admin/index");
})

router.post('/loginpost',function(req,res){
    console.log(req.body);
});
module.exports = router;
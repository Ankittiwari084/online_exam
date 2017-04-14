var express = require("express");
var mongojs = require("mongojs");
var db = mongojs("root:root@ds161580.mlab.com:61580/online_exam?authMechanism=SCRAM-SHA-1",["admin"]);
//var db = mongojs("ceevision",["admin"]);




module.exports = {
	checkauth:checkauth,
	
};

function checkauth(req,res,email,password)
{
		db.admin.count({
			$and: [
				{'email':email},{'password':password}
			]
		},function(err,data){
			if(err){
				console.log("erorrrrrrrrrrrrrrr ========");
				console.log(err);
				res.send("Error");
			}
			if(data && data != "[]")
					
			{		
				db.admin.find({
					$and: [
						{'email':email},{'password':password}
					]
				},function(err,data){
					 req.session.user = data;
					 
					res.redirect('/admin/dashboard');
				})
				//res.redirect('/admin/dashboard');
			}else{
				console.log('No user found');
					res.redirect('/admin/login');
			}
		})
}


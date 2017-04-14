var express = require("express");
var mongojs = require("mongojs");
var db = mongojs("ceevision",["admin"]);




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


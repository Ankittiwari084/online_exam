var express = require("express");
var mongojs = require("mongojs");
var db = mongojs("ceevision",["admin"]);

var cookieParser = require('cookie-parser');
var session = require('express-session');


module.exports = {
	checkauth: function(res,email,password)
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
					res.session.logindata = data;
				})
				res.redirect('/admin/dashboard');
			}else{
				console.log('No user found');
					res.redirect('/admin/login');
			}
		})
	}
}
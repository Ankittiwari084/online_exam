var express = require("express");

var mongoose = require('mongoose');
var assert =	require("assert"); 

var admin = require("./models/admin.js");
var flash = require('express-flash');


//var db = mongojs("root:root@ds161580.mlab.com:61580/online_exam?authMechanism=SCRAM-SHA-1",["admin"]);
//var db = mongojs("ceevision",["admin"]);


module.exports = {
	checkauth:checkauth,
	
	
};

function checkauth(req,res,email,password)
{	
		admin.countAdmin(email,password,function(err,user){
			if(err)
			{
				req.flash('info',err);
				res.redirect('/admin/login');
			}else{
				req.session.user = user;
				res.redirect('/admin/dashboard');	
			}
		})
}




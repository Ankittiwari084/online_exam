var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var mongoojs = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash'); 

var admin = require("./route/admin");


//set app object 

var app = express();


// set up login needed middleware.

app.use(cookieParser());
app.use(session({secret: "dhsdfertefbfawdeqwrngfdfgueiwtewfgndsg",cookie: { maxAge: 60000 }}));


// set middleware of flash message.;
  app.use(flash());

 app.use(function(req, res, next){
  res.locals.messages = req.flash();
  next();
});
//set middleware for body parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//set fetch static file 
app.use(express.static('public'));
// set the view engine to ejs
app.set('view engine', 'ejs');



// set middleware.
app.use('/admin',admin);


app.set('port',process.env.PORT || 3000);
app.get('/',function(req,res){
        res.send("THis is working");
       
});
app.listen(app.get('port'),function(){
    console.log("Server is running...");
});
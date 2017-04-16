var mongoose = require("mongoose");

// connection of database.
//var url = "mongodb://localhost:27017/ceevision";
var url  = "mongodb://root:root@ds161580.mlab.com:61580/online_exam"
//connect with database.
mongoose.connect(url);
// make instance of connection.
var db = mongoose.connection;

// check connection is made or not
db.on('open',function(){
	console.log("Databse Connected...");
})


var Schema = mongoose.Schema;
var adminSchema = new Schema({

	firstname:{
		type:String,
		require:true,
	},
	lastname:{
		type:String,
		require:true,
	},
	email:{
		type:String,
		require:true,
	},		
	password:{
		type:String,
		md5:true,
		require:true,
	}	

});
var collectionName = 'admin'
var admin =  module.exports= mongoose.model('admin',adminSchema,collectionName);

module.exports = {
	countAdmin:countAdmin	
}

function countAdmin(email,password,callback)
	{
		admin.count({email:email,password:password},function(err,data){
		console.log("request on admin moel inside countAdmin function");
		if (err) {
			callback(err,"");
		}
		if(data == 1){
				admin.find({email:email,password:password},function(err,respnce){
				if(err){
					callback(err,"");
				}
				callback("",respnce);
			})
		}else{
			callback("Username or password is invalid!","");
		}		
			
		})
	} 
//
var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/comments.db');
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));



//route 

app.get('/', function(req,res){
	
	res.send("Hello world");
});


app.get('/comments',function(req,res){
	
	console.log("Get request received");
	db.all('SELECT * FROM comments',function(err,rows){
		  
		   if(err){
		console.log("Error : " + err);
			}
	else {
		res.send(rows);
	}
		   
	
		   })
});


app.post('/comments', function(req,res) {
	
	console.log("this is post ");
	db.run('INSERT INTO comments VALUES (?,?)',[req.body.name,req.body.comment],function(err){
		
		if(err){
			console.log("Error : " + err);
		}
		
		else {
			res.status(2000).redirect('index.html');
		}
		
		
	});
	
	
});

app.listen(3000,function(){
	
	console.log("hello");
});


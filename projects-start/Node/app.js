//console.log("heelo");
//var events = require('events');
//
//const tutorial = require('./tutorial');
//
//const emitter =  new events.EventEmitter();
//
//emitter.on('call',(num1,num2)=>{
//	console.log(num1+num2);
//});
//
//
//emitter.emit('call',1,2);
//
//
//
//class Person extends events.EventEmitter{
//	constructor(name){
//		super();
//		this._name = name;
//	}
//	
//	get name(){
//		return this._name;
//	}
//	
//	
//}
//
//
//let rishi = new Person('rishi');
//
//rishi.on('name',()=>{
//	console.log('my name is rishi');
//});
//
//rishi.emit('name');








// read line 

//const readline = require('readline');
//
//const rl = readline.createInterface({input:process.stdin,output:process.stdout});
//
//
//let num1 = Math.floor(Math.random()*10)+1;
//let num2 = Math.floor(Math.random()*10)+1;
//
//let answer = num1+num2;
//
//rl.question(`what is ${num1} + ${num2}? \n`,(userInput) => {
//	
//	if(userInput.trim() == answer){
//		//console.log("correct answer");
//		rl.close();
//	}else{
//		rl.setPrompt('Incorrect please try again');
//		rl.prompt();
//		rl.on('line',(userInput)=>{
//			if(userInput.trim() == answer){
//				rl.close();
//			}
//			else{
//				rl.setPrompt(`Incorrect again ${userInput} \n`);
//				rl.prompt();
//			}
//		})
//	}
//	
//});
//
//
//rl.on('close',()=>{
//	console.log("correct answer");
//});




// File operations

const fs = require('fs');

//write file
//fs.writeFile('example.txt',"this is an example",(err)=>{
//	if(err){
//		console.log("error");
//		
//	}
//	
//	else{
//		console.log("file created successfully");
//		fs.readFile('example.txt','utf-8',(err,file)=>{
//			if(err){
//				console.log("Problem in reading the file");
//			}
//			else {
//				console.log(`filre read successfull: ${file}`);
//			}
//		});
//		
//	}
//});

//fs.rename('example.txt','example2.txt',(err)=>{
//	if(err){
//		console.log("errr");
//	}
//	
//	else {
//		console.log("successfly renamed the file");
//	}
//});


//fs.appendFile('example2.txt','some data being appeneded',(err)=>{
//	if(err){
//		console.log('error');
//		
//	}
//	else{
//		console.log('successfuly appened data to file');
//	}
//});


//fs.unlink('example2.txt',(err)=>{
//	if(err){
//		console.log('error');
//		
//	}
//	else{
//		console.log('successfuly unlinked');
//	}
//});


// 	HOW TO WORK WITH FOLDERS


//fs.mkdir('tutorial',(err) =>{
//	if(err){
//		console.log('error');
//		
//	}
//	else{
//		console.log('successfuly made direcotry');
//	}
//});




// HTTP SERVER	

//const http = require('http');
//const server = http.createServer((req,res)=>{
//	
//	
//	
//	res.write('Hello world from node.js');
//	res.end();
//});
//
//
//server.listen('3000');





//serving static files with http and file system modules
//const http = require('http');
////const fs = require('fs');
//
//http.createServer((req,res) => {
//	
//	const readStream  = fs.createReadStream('./index.html');
//	res.writeHead(200,{'Content-type' : 'text/html'});
//	readStream.pipe(res);
//	
//}).listen(3000);
//






// HOW TO CREATE PACKAGE.JSON USING NPM INIT 	

/*

npm init

name the package 
check version
description : tutorial
entry point(to the web application):
test command:
git repository: 

keywords:

author : rishi
license : ISC

*/


//const _ = require('lodash');
//
//let exapmle = _.fill([1,2,3,4,5],"banana",1,4);
//
//console.log(exapmle); 



// EXPRESS WEB FRAMEWORK

const express = require('express');
const app = express();



//app.get('/',(req,res)=>{
//	res.send('Hello Wolrd');
//});
//
//
//app.get('/example',(req,res)=>{
//	res.send('hittting exapmle route');
//});
//
//
//app.listen(3000);
//
//
////query string and route parameters
//
//app.get('/example/:name/:age',(req,res)=>{
//	
//	console.log(req.params);
//	res.send(req.params.name + " : " + req.params.age);
//});



// serving static files with express

const path = require('path');
const bodyParser = require('body-parser');

app.use('public',express.static(path.join(__dirname,'static')));


app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'static','index.html'));
});

app.listen(3000);









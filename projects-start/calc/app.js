//var person = new Object();
//
//
//person["firstname"] = "Tony";
//person["lastname"] = "Alice";
//
//
//console.log(person.firstname);
//
//var c = {
//    name: 'THe c pbject',
//    log: function(){
//        
//        var self = this; 
//        
//        self.name = 'Updaetee';
//        console.log(self);
//        
//        
//        var setname = function(newname){
//            self.name = newname;
//            
//        }
//        
//        setname('updates afain!!!!!!');
//        console.log(self);
//        
//    }
//}
//
//c.log();


function greet(firstname, lastname, language){
	language = language || 'en';
	
	if(language === 'en'){
		console.log('Hello ' + firstname + ' ' + lastname);
		
	}
	
	if(language === 'es'){
		console.log('Hola ' + firstname + ' ' + lastname);
	}
}


function greetEnglish(firstname,lastname){
	greet(firstname,lastname,'en');
}

function greetSpanish(firstname,lastname){
	greet(firstname,lastname,'es');
}
greetEnglish('John','Doe');
greetSpanish('John', 'Doe');


var greeting = function(name){
	return 'hello' + name;
	
}('johnssds');

console.log(greeting);

//closures


//function buildFunction(){
//	var arr = [];
//	
//	for(var i = 0 ; i<3;i++){
//		arr.push(function(){
//			console.log(i);
//		})
//	}
//	return arr
//}
//
//var n1 = buildFunction();
//
//
//n1[0]();
//n1[1]();
//
//n1[2]();


function buildFunction2(){
	var arr = [];
	
	for(var i = 0 ; i<3;i++){
		arr.push(
			
			(function(j){
			return function(){
				console.log(j);
			}
		}(i))
			)
	}
	return arr;
}

var n2 = buildFunction2();


n2[0]();
n2[1]();

n2[2]();


function makeGreeting(language){
	return function(firstname,lastname){
		if(language === 'en'){
			console.log('hello' + firstname + ' ' + lastname);
			
		}
		
		if(language === 'es'){
			console.log('Hola' + firstname + ' ' + lastname);
		}
	}
}


var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');


greetEnglish('John', 'Doe');
greetSpanish('John' , 'Dpoe');

// call back functions 

function tellDone(callBack){
	
	var a = 1000;
	var b = 1200;
	
	callBack();
}


tellDone(function(){
	
	console.log('I a domf e');
});




//call,apply,bind


var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function(){
		var fullname = this.firstname + ' '+ this.lastname;
		return fullname;
	}
}

var logName= function(lang1,lang2){
	console.log('Logged: ' + this.getFullName());
}//can add .bind(person) here


var logPersonName = logName.bind(person);

logPersonName();


logName.call(person,'en','es');
logName.apply(person,['en','es']);

(function(lang1,lang2) {
	console.log(
	'Loffedss: ' + this.getFullName());
	 console.log('Arguments: ' + lang1 + ' ' + lang2);
	
	console.log('----------');
	
}).apply(person, ['es','en']) // apply will be in array formt and call will not be in the array format that is the only difference






function multiply(a,b){
	
	return a*b;
}

var multipleByTwo = multiply.bind(this,2); // copy of function is bind property and now a = 2 . 
console.log(multipleByTwo(4));


var multipleByThree = multiply.bind(this,3); // copy of function is bind property and now a = 2 . 
console.log(multipleByThree(4));


function mapForEach(arr,fn){
	var newArr = [];
	for(var i=0;i<arr.length;i++){
		newArr.push(fn(arr[i]))
	};
	
	return newArr;
	
	
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1,function(item){
					  return item*2;					  });

console.log(arr2);

var arr3 = mapForEach(arr1,function(item){
	return item > 2;
	
});

console.log(arr3);


var checkLimiter = function(limiter,item){
	return item > limiter;
}

var arr4 = mapForEach(arr1,checkLimiter.bind(this,1));






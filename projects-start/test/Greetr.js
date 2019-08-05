(function(global, $){
	
	var Greetr = function(firstName,lastName,language){
		
		return new Greetr.init(firstName,lastName,language);
	}
	
	//hidden within the scope of the IIFE and never directly accessible
	var supportedLangs = ['en', 'es'];
	
	//informal greetings
	
	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};
	
	//formal greetings
	
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};
	
	
	// logger messages
	
	var logMessages = {
		en: 'Logged in',
		es: 'Inicîo sesîoñ'
	};
	
	

	// prototype holds methods (to save memory address)
	
	Greetr.prototype = {
		
		//'this ' refers to the calling object at execution time
		fullName:function(){
			return this.firstName + ' ' + this.lastName;
		},
		
		
		validate: function(){
			//check that this is a valid language
			// references the externally inaccessible 'supportedLangs' within the closure
		if(supportedLangs.indexOf(this.language === -1)){
		throw "Invalid language";
		}
	},
 
 	
		//retrieve messages from object by referring to properties using [] syntac
 		greeting : function() {
	return greetings[this.language] + ' ' + this.firstName + '!';
},
	
 		formalGreeting: function(){
			return formalGreetings[this.language]+ ',' + this.fullName();
		}


		//chainable methods return their own containing object
		greet: function(formal){
			var msg;
			
			
			//if undefined or null it will be coereced to fale
			if(formal){
				msg = this.formalGreeting();
				
			}
			else {
				msg = this.greeting();
				
			}
			
			if(console){
				console.log(msg);
			}
	
		//this refers to the calling object at execution time
	//makes the method chainable
			
			return this;
		},
 
 
			log:function(){
				if(console){
					console.log(logMessages[this.language]+ ': ' + this.fullName());
				}
	// make chainable
	return this;
			},
				
				
			setLang: function(lang){
				
				this.language = lang;
				
				this.validate();
				
				return this;
				
			},
				
		HTMLGreeting: function(selector, formal){
			if(!$){
				throw 'Jquery not loaded';
			}
			
			if (!selector){
				throw 'misssing jquey selector';
			}
			
			var msg;
			
			if(formal){
				msg = this.formalGreeting();
				
			}
			
			else {
				msg = this.greeting();
			}
			
			$(selector).html(msg);
			
			return this;
		}
};
	
	Greetr.init = function(firstName,lastName,language){
		
		
		var self = this;
		self.firstName =- firstName || '';
		self.lastName = lastName || '';
		self.language =language || '';
		
		
		self.validate();
	}
	
	
	Greetr.init.prototype = Greetr.prototype;
	global.Greetr = global.G$= Greetr;
	
	
}(window,jQuery));
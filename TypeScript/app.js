const typeWriter = function(textElement,words,waitTime = 3000){
	
	
	this.textElement = textElement;
	this.words = words;
	this.txt='';
	this.wordIndex = 0;
	this.wait = parseInt(waitTime,10);
	this.type();
	this.isDeleting = false;
	
}


// type methods 
typeWriter.prototype.type = function(){
	
	// current index of the word
	const current = this.wordIndex % this.words.length;
	
	//get full text of the currebnt word 
	const fulltxt = this.words[current];
	
	
	//checkl if deleting
	if(this.isDeleting){
	   //remove char
		this.txt = fulltxt.substring(0,this.txt.length-1);
	   
	   }
	   
	   else {
		   //add char 
		   this.txt = fulltxt.substring(0,this.txt.length+1);
	   
	   }
	
	//insert txt into element 
	this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;
	
	
	//initialtype speed 
	let typeSpeed = 300;
	
	
	if(this.isDeleting){
		typeSpeed /=2;
		
	}
	
	
	//if word is complete
	
	if(!this.isDeleting && this.txt === fulltxt){
		
		typeSpeed = this.wait;
		
		// set delete to true 
		this.isDeleting = true;
		
		
		
	} else if (this.isDeleting && this.txt ===''){
		
		this.isDeleting = false;
		//move to the next word
		
		this.wordIndex++;
		
		//pause before start typing 
		typeSpeed = 500;
		
	}
	
	
	setTimeout(() => this.type(),typeSpeed);
}



// run when the dom loads. Init on dom load

document.addEventListener('DOMContentLoaded',init);


//init app

function init() {
	const txt = document.querySelector('.txt-type');
	const words = JSON.parse(txt.getAttribute('data-words')); 
	const wait = txt.getAttribute('data-wait');
	
	new typeWriter(txt,words,wait);
}






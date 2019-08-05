var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalbutton');


var closeBtn = document.querySelector(".close-btn");


//listen for a click


modalBtn.addEventListener('click',openModal);

closeBtn.addEventListener('click',closeModal);

//listen for outside click

window.addEventListener('click',clickOutSide);


//funtion open modal

function openModal(){
	 modal.style.display = 'block';
}


function closeModal(){
	
	
	modal.style.display = 'none';
}


function clickOutSide(e){
	
	
	if(e.target == modal){
	   
	   	modal.style.display = 'none';
	   
	   
	   }
	
	

}





function greeting(){
	let fullDate = new Date();

let hours = fullDate.getHours();

let mintues = fullDate.getMinutes();

let seconds = fullDate.getSeconds();
	
	if(hours > 12 && hours < 24 ){
		hours = hours -12;
	}
	
	if(hours < 10){
		hours = "0" + hours;
	}
	
	
	if(mintues < 10){
		mintues = "0" + mintues;
	}
	
	if(seconds < 10){
		seconds = "0" + seconds;
	}
	
	

document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML =":" + mintues;

document.getElementById('second').innerHTML = ":" + seconds;
}


setInterval(greeting,100);
function calc(){
	
	var a =  parseInt(document.querySelector("#value1"));
								   
    var b = parseInt(document.querySelector("#value2"));
	
	var op = document.querySelector("#operator").value;
	
	var calculate;
	
	console.log(a + "," + b );
	
	if(op == "add"){
		calculate = a+b;
	}
	else if(op == "sub"){
		calculate = a-b;
		
	}
	else if(op == "mul"){
		calculate = a*b;
		
	}
	else if(op == "div"){
		calculate = a/b;
		
	}
	else if(op == "min"){
		if(a<b){
			calculate =a;
		}
		else{
			calculate = b;
		}
		
	}
	else if(op == "max"){
		if(a>b){
			calculate =a;
		}
		else{
			calculate = b;
		}
		
	}
	
	document.querySelector("#result").innerHTML = calculate;
	
	console.log(calculate);
	
	
}
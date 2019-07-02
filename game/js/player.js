let player;

function Player(classType, health, mana, strength, agility,speed){
	console.log("hello2");
	
	this.classType = classType;
	this.health = health;
	this.mana = mana;
	this.strength = strength;
	this.agility = agility;
	this.speed = speed;
	
}



let PlayerMoves = {
	calcAttack: function(){
		
		// who attacks first
		let getPlayerSpeed = player.speed;
		let getEnemySpeed = enemey.speed;
		
		//player attacks
	
	let playerAttack = function(){
	let calcBaseDamage;
	if(player.mana> 0){
			calcBaseDamage = player.strength * player.mana/1000;
		}
		else{
				calcBaseDamage = player.strength * player.agility / 1000;
		}


		let offSetDamage =  Math.floor(Math.random() * Math.floor(10));

		let calcOutputDamage = calcBaseDamage + offSetDamage;


	//number of hits 

	let numberOfHits = Math.floor(Math.random()*Math.floor(player.agility/10) /2) +1;

	let attackValues = [calcOutputDamage, numberOfHits];
return attackValues;
	}


//Enemy attacks
	
	let enemyAttack = function(){
	let calcBaseDamage;
	if(enemey.mana> 0){
			calcBaseDamage = enemey.strength * enemey.mana/1000;
		}
		else{
				calcBaseDamage = enemey.strength * enemey.agility / 1000;
		}


		let offSetDamage =  Math.floor(Math.random() * Math.floor(10));

		let calcOutputDamage = calcBaseDamage + offSetDamage;


	//number of hits 

	let numberOfHits = Math.floor(Math.random()*Math.floor(enemey.agility/10) /2) +1;

	let attackValues = [calcOutputDamage, numberOfHits];
return attackValues;

}
	
	// get player heath / enemy hea;lth 
	let getPlayerHealth = document.querySelector(".health-player");


	let getEnemyHealth = document.querySelector(".health-enemy");
	

	//initate attacks

	if(getPlayerSpeed >= getEnemySpeed){
	   		let playerAttackValues = playerAttack();
		let totalDamage = playerAttackValues[0] * playerAttackValues[1];
		
		enemey.health = enemey.health - totalDamage;
		alert("You hit " + playerAttackValues[0] + "damage " + playerAttackValues[1] + "times.");
		
		if(enemey.health <= 0 ){
			alert("You win! refresh the browser");
			getPlayerHealth.innerHTML = 'Health ' + player.health;
			
			getEnemyHealth.innerHTML = 'Health : 0';
		} else{
			getEnemyHealth.innerHTML = 'Health: ' + enemey.health;
			
			//Enemy attack values 
			
			let enemyAttackValues = enemyAttack();
			
			
			
			//-----------------------------------
			
			let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
		
		player.health = player.health - totalDamage;
		alert("ENemy hit " + enemyAttackValues[0] + "damage " + enemyAttackValues[1] + "times.");
		
		if(player.health <= 0 ){
			alert("You loose refresh the browser");
			getPlayerHealth.innerHTML ='Health : 0';
			
			getEnemyHealth.innerHTML = 'Health: ' + enemey.health ;
		}else{
			getPlayerHealth.innerHTML = 'health: ' + player.health;
		   }
			
		}
	}
		//------------------------------------
		
		else if( getEnemySpeed >= getPlayerSpeed){
	   		let enemyAttackValues = enemyAttack();
		let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
		
		player.health = player.health - totalDamage;
		alert("Enemy hit " + enemyAttackValues[0] + "damage " + enemyAttackValues[1] + "times.");
		
		if(player.health <= 0 ){
			alert("You loose! refresh the browser");
			getEnemyHealth.innerHTML = 'Health ' + enemey.health;
			
			getPlayerHealth.innerHTML = 'Health : 0';
		} else{
			getPlayerHealth.innerHTML = 'Health: ' + player.health;
			
			//Player attack values 
			
			let playerAttackValues = playerAttack();
			
			
			
			//-----------------------------------
			
			let totalDamage = playerAttackValues[0] * playerAttackValues[1];
		
		enemey.health = enemey.health - totalDamage;
		alert("You hit " + playerAttackValues[0] + "damage " + playerAttackValues[1] + "times.");
		
		if(enemey.health <= 0 ){
			alert("You win! refresh the browser");
			getEnemyHealth.innerHTML ='Health : 0';
			
			getPlayerHealth.innerHTML = 'Health: ' + player.health ;
		}else{
			getEnemyHealth.innerHTML = 'health: ' + enemey.health;
		   }
			
		}
	}
	
}
}
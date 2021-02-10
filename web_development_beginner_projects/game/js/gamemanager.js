let GameManager = {
	setGamerStart:function(classType){
		this.resetPlayer(classType);
		this.setPreFight();
	},
	
	resetPlayer: function(classType){
	
		switch(classType){
			case "Warrior":
				player = new Player(classType, 200, 0, 200, 100, 50);
				break;
			
			case "Rogue":
				player = new Player(classType, 100, 0, 100, 150, 200);
				break;
				
			case "Mage":
				player = new Player(classType, 80, 0, 50, 200, 50);
				break;
				
			case "Hunter":
				player = new Player(classType, 200, 0, 50, 200, 100);
				break;
	
		}
		
		let getInterface = document.querySelector(".interface");
		
		getInterface.innerHTML = '<img src="img/powers/' + classType.toLowerCase() + '.jpg" class="powers"><div><h3>' + classType + '</h3><p class="health-player" > Health: '+ player.health + '</p><p>Mana: '+ player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
		
		
	},
	
	setPreFight: function(){
		let getHeader = document.querySelector(".header");
		
		let getActions = document.querySelector(".actions");
		
		
		let getArena = document.querySelector(".arena");
		
		getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
		
		getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy</a>';
		
		
		
		getArena.style.visibility = "visible";
	},
	
	setFight: function(){
		let  getHeader = document.querySelector(".header");
		
		let getActions = document.querySelector(".actions");
		
		
		let getEnemy = document.querySelector(".enemey123");
		
		//create enemy!
		
		let enemy00 = new Enemey("Goblin",100,0,50,100,100);
		
		let enemy01 = new Enemey("Troll", 200,0,150,80,50);
		
		let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
		
		
		switch(chooseRandomEnemy){
			case 0:
				enemey = enemy00;
				break;
			case 1:
				enemey = enemy01;
				break;
		}
		
		getHeader.innerHTML = '<p>Task: chose your move</p>';
		
		getActions.innerHTML =  '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';
		
		getEnemy.innerHTML = '<img src="img/enemies/' + enemey.enemyType.toLowerCase() + '.jpg" alt="' + enemey.enemyType + '"class=img-avatar><div><h3>'+ enemey.enemyType + '</h3><p class="health-enemy">Health: '+ enemey.health + '</p><p>Mana: ' + enemey.mana + '</p><p>Strength: ' + enemey.agility + '</p><p>Speed: ' + enemey.speed + '</p><p>agility: ' +enemey.agility +'</p></div>';
	}
}




let userScore = 0;
let compuScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");

const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");

const paper_div = document.getElementById("p");

const scisccor_div = document.getElementById("s");


function getComputerChoice(){
	const choices = ['r','p','s']
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}


function convertToWord(letter){
	if(letter == "r") return "Rock";
	if(letter == "p") return "Papers";
	if(letter == "s") return "Scissors";
}



function win(user, computer){
	userScore++;
	userScore_span.innerHTML = userScore + ":";
	computerScore_span.innerHTML = compuScore;
	
	
	const smallUserWord = "user  ".sub();
	const smallCompWord = "comp  ".sub();
	const userChoice_div = document.getElementById(user);
	
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord}  beats ${convertToWord(computer)}${smallCompWord}.You Win!`;
	
	userChoice_div.classList.add('green-glow');
	setTimeout(() =>userChoice_div.classList.remove('green-glow'), 300);

}

function lose(user, computer){
	compuScore++;
	userScore_span.innerHTML = userScore + " :";
	computerScore_span.innerHTML = compuScore;
	
	
	const smallUserWord = "user  ".sub();
	const smallCompWord = "comp  ".sub();
	const userChoice_div = document.getElementById(user);
	
	userChoice_div.classList.add('red-glow');
	setTimeout(() =>userChoice_div.classList.remove('red-glow'), 300);
	
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord}  loses to ${convertToWord(computer)}${smallCompWord}.You Lost!`;
	
}

function draw(user, computer){
	
	userScore_span.innerHTML = userScore + " :";
	computerScore_span.innerHTML = compuScore;
	
	
	const smallUserWord = "user  ".sub();
	const smallCompWord = "comp  ".sub();
	const userChoice_div = document.getElementById(user);
	
	userChoice_div.classList.add('grey-glow');
	setTimeout(() =>userChoice_div.classList.remove('grey-glow'), 300);
	
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord}  equals ${convertToWord(computer)}${smallCompWord}.Its a Draw!`;
	
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			
			break;
			
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,computerChoice);
			
			break;
			
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
			
			break;
	}
}



function main() {
	rock_div.addEventListener('click', () => game("r"));
	paper_div.addEventListener('click', () => game("p"));
	scisccor_div.addEventListener('click', () =>game("s"));
}

main();

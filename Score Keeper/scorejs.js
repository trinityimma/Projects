var player1btn = document.querySelector("#player1");
var player2btn = document.querySelector("#player2");
var resetbtn = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var numInput = document.querySelector("input")
var winningScoreDisplay = document.querySelector("p span")

var player1Score = 0;
var player2Score = 0;
var winningPoint = 5;
var gameOver = false;


player1btn.addEventListener("click", function(){
	if(!gameOver){
		player1Score++;
		if (player1Score == winningPoint) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = player1Score;
	}
	
});

player2btn.addEventListener("click", function(){
	if(!gameOver){
		  player2Score++;
		  if (player2Score == winningPoint) {
		  	p2Display.classList.add("winner");
			gameOver = true;
		}
		  p2Display.textContent = player2Score;
	 }

});

resetbtn.addEventListener("click", function(){
	reset();
});

function reset(){
	player1Score = 0; 
	player2Score = 0;
	p1Display.textContent = player1Score;
	p2Display.textContent = player2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}
numInput.addEventListener("change", function(value){
	winningScoreDisplay.textContent = this.value;
	winningPoint = Number(this.value);
	reset();
})
// var winningPointText = document.querySelector("#winning-score-text");
// if (winningPointText.text) {}
// winningPoint = 0
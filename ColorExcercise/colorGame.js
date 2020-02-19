var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
		// mode buttons for event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}

}

function setUpSquares(){
	// square Listeners
	for (var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// Compare color to clicked square
			if (clickedColor === pickedColor) 
			{
				messageDisplay.textContent = "Correct!";
				resetButton.textContent =  "Play again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else{
				
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	// Generate all new colors
	colors = generateRandomColors(numSquares);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match new color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//change colors of square
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent ="";
}


resetButton.addEventListener("click", function(){
	reset();

})



function changeColors(color){
	// Loop through all the squares
	for (var i = 0; i < squares.length; i++) {

	// Change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
		return colors[random];
}

function generateRandomColors(num){
	// Make an array
	var arr =[];
	// Repeats num times
		for( var i = 0; i < num; i++){
			// Get random color and push int arrar
			arr.push(randomColor());
			
		}
	// return that array
	return arr;
}

function randomColor(){
	// Pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// Pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// Pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
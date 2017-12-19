//anonymous function
window.onload = function() {

	//variable declaration

	var num;
	var box;
	var ctx;
	var turn = 1;
	var filled;
	var symbol;
	var winner;
	var isGameOver = false;

	filled = [false, false, false, false, false, false, false, false, false];
	symbol = ['', '', '', '', '', '', '', '', ''];

	winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

	//new game button

	var button = document.getElementById("new");
	button.addEventListener("click", newGame);

	function newGame() {
		document.location.reload();
	}


}
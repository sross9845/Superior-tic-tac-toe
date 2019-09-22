//Variables
var moves = 0;
var xClick = [];
var oClick = [];
var cells = document.querySelectorAll(".gameSection");
var xName = "X's Turn";
var oName = "O's Turn";
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
//Function to start and add event listeners/reset
function begin(){
	for(i = 0; i < cells.length; i++){
		cells[i].textContent = "";
		cells[i].style.background = `transparent`;
		cells[i].style.display = "";
		cells[i].addEventListener("click", turnClick);
	}
	document.getElementById("reset").addEventListener("click", begin);
    xClick = new Array();
    oClick = new Array();
	moves = 0;
	alert(`This is for Sarah`);
	alert(`I hope you like it`);
	alert(`Rules of Tic-Tac-Toe:`);
	alert(`Player one is X and Player two is O`);
	alert(`Take turns clicking squares until one of the players get three in a row or you tie`);
	alert(`Most importantly, have fun and learn to love the alerts`);
	alert(`It is X's Turn`);
	alert(`O's turn is next`)
	message.style.fontSize = `50px`;
	message.style.color = `#ff2e63`;
	h1.style.color=`#ff2e63`;
}

begin();
//Win Combinations
const winCombos = [
	[`one`, `two`, `three`],
	[`four`, `five`, `six`],
	[`seven`, `eight`, `nine`],
	[`one`, `four`, `seven`],
	[`two`, `five`, `eight`],
	[`three`, `six`, `nine`],
	[`one`, `five`, `nine`],
	[`three`, `five`, `seven`]
];
//Click function / checking who is going to click and if the space has been clicked already
//Wincheck
function turnClick(event){
	if(event.target.textContent.length === 1){
		if (moves % 2 === 0){
			alert(`WOAH WOAH WOAH HEY NOW, DO NOT DO THAT X`);
			alert(`You should know that you can not click the same square in tic-tac-toe come onnnnnnnnnn.`);

		}
		else{
			alert(`WOAH WOAH WOAH HEY NOW, DO NOT DO THAT O`);
			alert(`You should know that you can not click the same square in tic-tac-toe come onnnnnnnnnn.`);

		}
	}
	if (event.target.textContent.length === 0){
		
		if (moves % 2 === 0){
			xClick.push(event.target.id);
			alert(`X clicked a square`);
			document.getElementById(event.target.id).textContent = `X`;
			document.getElementById(event.target.id).style.background = "#ff2e63";
			moves++;
			alert(`It is now O's Turn.`);
			alert(`X will go after O.`);
		}
		else{
			oClick.push(event.target.id);
			alert(`O clicked a square`);
			document.getElementById(event.target.id).textContent = `O`;
			document.getElementById(event.target.id).style.background = `#eaeaea`;
			moves++;
			alert(`It is now X's Turn.`);
			alert(`O will go after X.`);
		}
	}
	winCheck(oClick, xClick, winCombos);}
//Win check function, goes through arrays of clicks and the wincombos to look for matches. Tie function at bottom if 9 moves are hit
function winCheck(oClick, xClick, winCombos){
	for(var i = 0; i < winCombos.length; i++){
		var oWins = 0;
		var xWins = 0;
		for(var j = 0; j < winCombos[i].length; j++){
			if(oClick.includes(winCombos[i][j])){
				oWins++;
			}
            if(oWins === 3){
				setTimeout(function(){begin();}, 2000);
				message.style.fontSize = `200px`;
				for(i = 0; i < cells.length; i++){
						cells[i].textContent = ``;
						cells[i].style.background = `transparent`;
						cells[i].style.display = `none`;
				}
				alert(`O has won!!!!!!`);
				alert(`Wow X you must suck.`);
				alert(`Do you like alerts now?`)
				alert(`Learn to embrace the alerts like Sean "Alert Master" Ross`);
            }
            
			if(xClick.includes(winCombos[i][j])){
				xWins++;
			}	 			
			if(xWins === 3){
				setTimeout(function(){begin();}, 2000);
				for(i = 0; i < cells.length; i++){
					cells[i].textContent = ``;
					cells[i].style.background = `transparent`;
					cells[i].style.display = `none`;
				}
				alert(`X has won!!!!!!`);
				alert(`Wow O you must suck.`);
				alert(`Do you like alerts now?`);
				alert(`Learn to embrace the alerts like Sean "Alert Master" Ross`);
				}
				
			}
			if (moves === 9 && xWins !== 3 && oWins !== 3) {
				setTimeout(function(){begin();},2000);
				for(i = 0; i < cells.length; i++){
						cells[i].textContent = ``;
						cells[i].style.background = `transparent`;
						cells[i].style.display = `none`;
				}
				alert(`No-one has won!!!!!!`);
				alert(`You both must suck.`);
				alert(`Do you like alerts now?`);
				alert(`Learn to embrace the alerts like Sean "Alert Master" Ross`);
			}		
	}
}
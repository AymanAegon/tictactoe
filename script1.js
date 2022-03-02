let c = "X";
var Xs=0;
var Os=0;
var temp=9;
function change(c){
  if(c=='X') c='O';
  else if(c=='O') c='X';
  return c;
}
function play(index){
	const img = document.getElementsByClassName('cell');
	if (img[index].style.backgroundImage === '') {
		img[index].style.backgroundImage = "url('"+c+".PNG')";
		c=change(c);
	
		if (checkWin() != undefined) {
			document.getElementById('winner').innerHTML = checkWin();
			if(checkWin().split('')[0]==="X") document.getElementById('Xscore').innerHTML = ++Xs;
			else if(checkWin().split('')[0]==="O") document.getElementById('Oscore').innerHTML = ++Os;
			console.log(checkWin());
			pause();
			setTimeout(function(){ reset(9); }, 2500);
		}
		temp--;
		if (checkWin()==undefined && temp==0) {
			for (var i = 0; i < 9; i++) {
				img[i].style.border = "2px solid red";
				setTimeout(function(){ reset(9); }, 2500);
				document.getElementById('winner').innerHTML = "Tie";
			}
		}
	}
}
function tracingLines(numCell) {

	let numColumn = Math.sqrt(numCell);
	let index=0;
	if (numColumn > 5) {
		document.getElementById('board').style.height = Number(numColumn*100) + "px";
		document.getElementById('board').style.width = Number(numColumn*100) + "px";
	}
	for (var i = 0; i < numColumn; i++) {
		document.write("<tr>");
		for (var j = 0; j < numColumn; j++) {
			document.write("<td onclick='play("+index+")' class='cell'></td>");
			index++;
		}
		document.write("</tr>");
	}
}
function reset(n) {
	c='X';
	temp=9;
	document.getElementById('winner').innerHTML = '';
	for (var i = 0; i < n; i++) {
		document.getElementsByClassName('cell')[i].style.backgroundImage = '';
		document.getElementsByClassName('cell')[i].style.border = "2px solid black";
	}
}
function resetScore() {
	Xs=0;Os=0;
	document.getElementById('Xscore').innerHTML = Xs;
	document.getElementById('Oscore').innerHTML = Os;
	reset(9);
}
function pause() {
	c='blank';
}
function checkWin() {
	var img = document.getElementsByClassName('cell');
	if(img[0].style.backgroundImage!='' && img[0].style.backgroundImage==img[4].style.backgroundImage && img[4].style.backgroundImage==img[8].style.backgroundImage){
		img[0].style.border = "2px solid red";
		img[4].style.border = "2px solid red";
		img[8].style.border = "2px solid red";
		return img[0].style.backgroundImage.split('')[5]+" wins!!";
	}
	if(img[2].style.backgroundImage!='' && img[2].style.backgroundImage==img[4].style.backgroundImage && img[4].style.backgroundImage==img[6].style.backgroundImage){
		img[2].style.border = "2px solid red";
		img[4].style.border = "2px solid red";
		img[6].style.border = "2px solid red";
		return img[2].style.backgroundImage.split('')[5]+" wins!!";
	}
	for (var i = 0; i < 3; i++) {
		if(img[i+i*2].style.backgroundImage!='' && img[i+i*2].style.backgroundImage==img[i+i*2+1].style.backgroundImage && img[i+i*2+1].style.backgroundImage==img[i+i*2+2].style.backgroundImage){
			img[i+i*2].style.border = "2px solid red";
			img[i+i*2+1].style.border = "2px solid red";
			img[i+i*2+2].style.border = "2px solid red";
			return img[i+i*2].style.backgroundImage.split('')[5]+" wins!!";
		}
	}
	for (var i = 0; i < 3; i++) {
		if(img[i].style.backgroundImage!='' && img[i].style.backgroundImage==img[i+3].style.backgroundImage && img[i+3].style.backgroundImage==img[i+6].style.backgroundImage){
			img[i].style.border = "2px solid red";
			img[i+3].style.border = "2px solid red";
			img[i+6].style.border = "2px solid red";
			return img[i].style.backgroundImage.split('')[5]+" wins!!";
		}
	}
}



tracingLines(9);
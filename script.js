

// STARTING THE GAME
var name = prompt("Hello...What's your goodname??");
if (name=="null") {
	name="there"	
}
document.getElementById("name").innerHTML = name;

var isPlaying = false;
var answer = 0;
var score = 0;
document.getElementById("start").onclick = function(){
	isPlaying = true;
	document.getElementById("start").style.display = "none";
	document.getElementById("time").style.display = "block";
	document.getElementById("reset").style.display = "block";
	startTimer();
	genExpression();
	}

	// RESET THE GAME
document.getElementById("reset").onclick = function(){
	isPlaying = false
	document.getElementById("score").innerHTML = "00";
	location.reload(true);
}

function startTimer(){
var count = 60;
var counter = setInterval(timer,1000);
function timer(){
	count  = count -1;
	if (count>0) {
		document.getElementById("timeCount").innerHTML=count;
		
	}else{
		document.getElementById("timeCount").innerHTML=0;
		timeOver();
	}
	
}
}

function genExpression(){
	var number1 = Math.floor((Math.random()*10)+1);
	var number2 = Math.floor((Math.random()*10)+1);
	document.getElementById("number1").innerHTML= " "+number1+" ";
	document.getElementById("number2").innerHTML= " "+number2+" ";
	answer = number1 * number2;
	genOptions();

}

function genOptions(){
	var opt1 = Math.floor(Math.random()*100);
	var opt2 = Math.floor(Math.random()*100);
	var opt3 = Math.floor(Math.random()*100);
	var rightOpt = (Math.floor(Math.random()*4)+1);

	//RONDOMLY ASSIGNING RIGHT OPTION
	if (rightOpt == 1) {
	document.getElementById("option1").innerHTML = answer;
	document.getElementById("option2").innerHTML = opt1;
	document.getElementById("option3").innerHTML = opt2;
	document.getElementById("option4").innerHTML = opt3;

	}else if (rightOpt == 2) {
	document.getElementById("option2").innerHTML = answer;
	document.getElementById("option1").innerHTML = opt1;
	document.getElementById("option3").innerHTML = opt2;
	document.getElementById("option4").innerHTML = opt3;
	}
	else if (rightOpt == 3) {
	document.getElementById("option3").innerHTML = answer;
	document.getElementById("option1").innerHTML = opt1;
	document.getElementById("option2").innerHTML = opt2;
	document.getElementById("option4").innerHTML = opt3;
	}
	else if (rightOpt == 4) {
	document.getElementById("option4").innerHTML = answer;
	document.getElementById("option1").innerHTML = opt1;
	document.getElementById("option2").innerHTML = opt2;
	document.getElementById("option3").innerHTML = opt3;
	}

}

document.getElementById("option1").onclick = function(){
	if (isPlaying==true) {
	var abc = document.getElementById("option1").innerHTML;
	var right = parseInt(abc);
	if (right == answer) {
		score = score+1;
		document.getElementById("score").innerHTML = score;
		genExpression();
	}
	else{genExpression();}

	}

}
document.getElementById("option2").onclick = function(){
	if (isPlaying==true) {
	var abc = document.getElementById("option2").innerHTML;
	var right = parseInt(abc);
	if (right == answer) {
		score = score+1;
		document.getElementById("score").innerHTML = score;
		genExpression();
	}
	else{genExpression();}

	}

}
document.getElementById("option3").onclick = function(){
	if (isPlaying==true) {
	var abc = document.getElementById("option3").innerHTML;
	var right = parseInt(abc);
	if (right == answer) {
		score = score+1;
		document.getElementById("score").innerHTML = score;
		genExpression();
	}
	else{genExpression();}
	}

}
document.getElementById("option4").onclick = function(){
	if (isPlaying==true) {
	var abc = document.getElementById("option4").innerHTML;
	var right = parseInt(abc);
	if (right == answer) {
		score = score+1;
		document.getElementById("score").innerHTML = score;
		genExpression();
	}
	else{genExpression();}

	}

}

function timeOver(){
	isPlaying=false;
	document.getElementById("timeOver").style.display="block";
	document.getElementById("finalScore").innerHTML=" "+score;


}
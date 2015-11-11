

function gameStart () {
	var answer = "one";
	var guess = prompt("How many punches does it take for One Punch Man to defeat his enemies?")
		if (guess == answer.toLowerCase() || guess == 1 || guess == "One") {
			alert("That's right! Saitama can always beat his enemies with one punch!")
			console.log("Test win")
			gameEnd();
		} 

	else {
		if (guess != answer && guess != 1) {
			alert("Think carefully! Even if you have never read the manga or seen the show, you can still guess this! (Unless my code sucks)")
			console.log("Test lose")
			gameStart();
		}
	}
}

function gameEnd () {
	alert("New episodes every Sunday! Now lets move on to our next question!")
	gameStart2();
}

function gameStart2 () {
	var answer2 = "one";
	var guess2 = prompt("How many people does it take to screw in a lightbuld?")
		if (guess2 == answer2.toLowerCase() || guess2 == 1 || guess2 == "One") {
			alert("I would hope so")
			console.log("Test2 win")
			gameEnd2();
		} 

	else {
		if (guess2 != answer2 && guess2 != 1) {
			alert("Let's just say one!")
			console.log("Test2 lose")
			gameStart2();
		}
	}
}

function gameEnd2 () {
	alert("Let's move on to the next question!")
	gameStart3();
}

function gameStart3 () {
	var answer3 = "mutations";
	var guess3 = prompt("Why is Geralt of Rivia so fresh?")
		if (guess3 == answer3.toLowerCase() || answer3 == "Mutations" || answer3 == "mutations") {
			alert("That's right! Mutations and his natural charisma!")
			console.log("Test3 win")
			gameEnd3();
		} 

	else {
		if (guess3 != answer3) {
			alert("Why he so fresh tho (Hint: Mutations)")
			console.log("Test3 lose")
			gameStart3();
		}
	}
}

function gameEnd3 () {
	alert("Next question!")
	gameStart4();
}

function gameStart4 () {
	var answer4 = "blue";
	var guess4 = prompt("What color is the sky?")
		if (guess4 == answer4.toLowerCase() || guess4 == "Blue") {
			alert("Correct!")
			console.log("Test win")
			gameEnd4();
		} 

	else {
		if (guess4 != answer4) {
			alert("Might want to check your eyes for color blindness")
			console.log("Test lose")
			gameStart4();
		}
	}
}

function gameEnd4 () {
	alert("Lets move on to our next question!")
	gameStart5();
}

function gameStart5 () {
	var answer5 = "yellow";
	var guess5 = prompt("What color is the snow?")
		if (guess5 == answer5.toLowerCase() || guess5 == "Yellow") {
			alert("Just don't eat it.")
			console.log("Test win")
			gameEnd5();
		} 

	else {
		if (guess5 != answer5) {
			alert("Hint: After you relieve yourself.")
			console.log("Test lose")
			gameStart5();
		}
	}
}

function gameEnd5 () {
	alert("That's all folks!")
	alert("Thanks for playing!")
}

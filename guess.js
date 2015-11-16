questions = ["How many punches does it take for One Punch Man to defeat his enemies?", "How many people does it take to screw in a lightbuld?", "Why is Geralt of Rivia so fresh?", "What color is the sky?", "What color is the snow?"];

responses = ["That's right! Saitama can always beat his enemies with one punch!", "I would hope so", "That's right! Mutations and his natural charisma!", "Correct!", "Just don't eat it."];

incorrect = ["Think carefully! Even if you have never read the manga or seen the show, you can still guess this! (Unless my code sucks)", "Let's just say one!", "Why he so fresh tho (Hint: Mutations)", "Might want to check your eyes for color blindness", "Hint: After you relieve yourself."];

var el = document.getElementById('q1')
el.textContent = questions[0];

var el = document.getElementById('q2')
el.textContent = questions[1];

var el = document.getElementById('q3')
el.textContent = questions[2];

var el = document.getElementById('q4')
el.textContent = questions[3];

var el = document.getElementById('q5')
el.textContent = questions[4];

function gameStart () {
	var q1 = prompt(questions[0]);
	q1 = q1.toLowerCase();

		if (q1 === "one" || q1 === "1") {
			alert(responses[0])
			var elQuestion = document.getElementById('a1');
			elQuestion.textContent = q1;
			var textContent = document.getElementById('img1');
			var textContent = img1.innerHTML;
			img1.innerHTML = '<div><img src="http://www.clipartbest.com/cliparts/dT6/okx/dT6okxEbc.png" alt ="burger" height="200" width="200"/></div>';
			console.log("Test win")
			gameEnd();
		} 

	else {
		if (q1 != "one" && q1 != "1") {
			alert(incorrect[0])
			var elQuestion = document.getElementById('wrong1');
			elQuestion.textContent = q1;
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
	var q2 = prompt(questions[1]);
	q2 = q2.toLowerCase();

		if (q2 === "one" || q2 === "1") {
			alert(responses[1])
			var elQuestion = document.getElementById('a2');
			elQuestion.textContent = q2;
			var textContent = document.getElementById('img2');
			var textContent = img2.innerHTML;
			img2.innerHTML = '<div><img src="http://www.clipartbest.com/cliparts/dT6/okx/dT6okxEbc.png" alt ="burger" height="200" width="200"/></div>';
			console.log("Test2 win")
			gameEnd2();
		} 

	else {
		if (q2 != "one" && q2 != "1") {
			alert(incorrect[1])
			var elQuestion = document.getElementById('wrong2');
			elQuestion.textContent = q2;
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
	var q3 = prompt(questions[2]);
	q3 = q3.toLowerCase();

		if (q3 === "he just is" || q3 === "Mutations" || q3 === "mutations") {
			alert(responses[2])
			var elQuestion = document.getElementById('a3');
			elQuestion.textContent = q3;
			var textContent = document.getElementById('img3');
			var textContent = img3.innerHTML;
			img3.innerHTML = '<div><img src="http://www.clipartbest.com/cliparts/dT6/okx/dT6okxEbc.png" alt ="burger" height="200" width="200"/></div>';
			console.log("Test3 win")
			gameEnd3();
		} 

	else {
		if (q3 != "he just is" && q3 != "mutations") {
			alert(incorrect[2])
			var elQuestion = document.getElementById('wrong3');
			elQuestion.textContent = q3;
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
	var q4 = prompt(questions[3])
	q4 = q4.toLowerCase();

		if (q4 === q4.toLowerCase() || q4 === "Blue") {
			alert(responses[3])
			var elQuestion = document.getElementById('a4');
			elQuestion.textContent = q4;
			var textContent = document.getElementById('img4');
			var textContent = img4.innerHTML;
			img4.innerHTML = '<div><img src="http://www.clipartbest.com/cliparts/dT6/okx/dT6okxEbc.png" alt ="burger" height="200" width="200"/></div>';
			console.log("Test win")
			gameEnd4();
		} 

	else {
		if (q4 != "blue") {
			alert(incorrect[3])
			var elQuestion = document.getElementById('wrong4');
			elQuestion.textContent = q4;
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
	var q5 = prompt(questions[4]);
	q5 = q5.toLowerCase();

		if (q5 === q5.toLowerCase() || q5 === "Yellow") {
			alert(responses[4])
			var elQuestion = document.getElementById('a5');
			elQuestion.textContent = q5;
			var textContent = document.getElementById('img5');
			var textContent = img5.innerHTML;
			img5.innerHTML = '<div><img src="http://www.clipartbest.com/cliparts/dT6/okx/dT6okxEbc.png" alt ="burger" height="200" width="200"/></div>';
			console.log("Test win")
			gameEnd5();
		} 

	else {
		if (q5 != "yellow") {
			alert(incorrect[4])
			var elQuestion = document.getElementById('wrong5');
			elQuestion.textContent = q5;
			console.log("Test lose")
			gameStart5();
		}
	}
}

function gameEnd5 () {
	alert("That's all folks!")
	alert("Thanks for playing!")
}

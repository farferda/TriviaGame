var quiz {
	[1, "Capital of USA", "washington"],
	[2, "Color of Sun", "yellow"],
	[3. "Color of Sky", "blue"],
};

var answer;
var response;

for (var i = 0; i < quiz.length; i += 1){
	answer = prompt(quiz[i][1]);
response = answer.toLowerCase()

if (response === quiz[i][2]){
	document.write("<h2>You got question ${quiz[i][0]}   correct</h2>");
	}else{
		document.write("<h2>You got question ${quiz[i][0]} wrong</h2>");
	}
}


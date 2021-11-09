function fizzbuzz4() {
	var first = document.getElementById("first_name").value;
	var mid   = document.getElementById("middle_initial").value;	
	var last  = document.getElementById("last_name").value;

	var howHigh = document.getElementById("count").value;
	var numHigh = parseInt(howHigh);
    
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;
	var number3 = document.getElementById("number3").value;

	var firstDivisor = parseInt(number1);
	var secondDivisor = parseInt(number2);
	var thirdDivisor = parseInt(number3);

	var word1 = document.getElementById("word1").value;
	var word2 = document.getElementById("word2").value;
	var word3 = document.getElementById("word3").value;
	var word4 = document.getElementById("word4").value;


	if (mid !== "") {
		document.getElementById("greeting").innerHTML = "Welcome to Language Learning Club, " + first + " " + mid + ". " + last + "!";
	} else {
		document.getElementById("greeting").innerHTML = "Welcome to Language Learning Club, " + first + " " + last + "!";		
	}

	function checkDiv(num1, num2) {
		if (num1 % num2 === 0) {
			return true;
		} else {
			return false;
		}
	}	
	
	var msg = "";
	var i;
	for (i = 1; i <= numHigh; i++) {
		if (checkDiv(i, firstDivisor) && !checkDiv(i, secondDivisor) && !checkDiv(i, thirdDivisor)) {			
			msg += i + ".&nbsp;" + word1 + "<br>";
		} else if (!checkDiv(i, firstDivisor) && checkDiv(i, secondDivisor) && !checkDiv(i, thirdDivisor)) { 	
			msg += i + ".&nbsp;" + word2 + "<br>";
		} else if (!checkDiv(i, firstDivisor) && !checkDiv(i, secondDivisor) && checkDiv(i, thirdDivisor)) {	
			msg += i + ".&nbsp;" + word3 + "<br>";
		} else if (checkDiv(i, firstDivisor) && checkDiv(i, secondDivisor) && !checkDiv(i, thirdDivisor)) {		
			msg += i + ".&nbsp;" + word1 + " " + word2 + "<br>";
		} else if (checkDiv(i, firstDivisor) && !checkDiv(i, secondDivisor) && checkDiv(i, thirdDivisor)) {		
			msg += i + ".&nbsp;" + word1 + " " + word3 + "<br>";
		} else if (!checkDiv(i, firstDivisor) && checkDiv(i, secondDivisor) && checkDiv(i, thirdDivisor)) {		
			msg += i + ".&nbsp;" + word2 + " " + word3 + "<br>";
		} else if (checkDiv(i, firstDivisor) && checkDiv(i, secondDivisor) && checkDiv(i, thirdDivisor)) {		
			msg += i + ".&nbsp;" + word1 + " " + word2 + " " + word3 + "<br>";
		} else {
			msg += i + ".&nbsp;" + word4 + "<br>";
		}
	
	var writeToPage = document.getElementById("loop");
	writeToPage.innerHTML = msg;
	}
}

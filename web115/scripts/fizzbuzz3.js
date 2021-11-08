function fizzbuzz3() {
	var first = document.getElementById("first_name").value;
	var mid   = document.getElementById("middle_initial").value;	
	var last  = document.getElementById("last_name").value;
	
	
	if (mid !== "") {
		document.getElementById("greeting").innerHTML =  "Welcome to Language Learning Club, "  + first + " " + mid + ". " + last + "!";
	} else {
		document.getElementById("greeting").innerHTML =  "Welcome to Language Learning Club, " + first + " " + last + "!";		
	}
	
	
	var firstDivisor = 3;
	var secondDivisor = 5;
	var thirdDivisor = 7;

	
	function checkDivision(num1, num2) {
		if (num1 % num2 === 0) {
			return true;
		} else {
			return false;
		}
	}	
	
	var msg = "";
	var i;
	for (i = 1; i <= 140; i++) {
		if (checkDivision(i, firstDivisor) && !checkDivision(i, secondDivisor) && !checkDivision(i, thirdDivisor)) {			
			msg += i + ".&nbsp;Lesson A" + "<br>";
		} else if (!checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor) && !checkDivision(i, thirdDivisor)) { 	
			msg += i + ".&nbsp;Lesson B" + "<br>";
		} else if (!checkDivision(i, firstDivisor) && !checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {	
			msg += i + ".&nbsp;Lesson C" + "<br>";
		} else if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor) && !checkDivision(i, thirdDivisor)) {		
			msg += i + ".&nbsp;Lesson A Lesson B" + "<br>";
		} else if (checkDivision(i, firstDivisor) && !checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {		
			msg += i + ".&nbsp;Lesson A Lesson C" + "<br>";
		} else if (!checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {		
			msg += i + ".&nbsp;Lesson B Lesson C" + "<br>";
		} else if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {		
			msg += i + ".&nbsp;Lesson A Lesson B Lesson C" + "<br>";
		} else {
			msg += i + ".&nbsp;Club" + "<br>";
		}
	
	var writeToPage = document.getElementById("loop");
	writeToPage.innerHTML = msg;
	}
}

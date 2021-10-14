function fizzbuzz2() {
	var first = document.getElementById("first_name").value;
	var mid   = document.getElementById("middle_initial").value;	
	var last  = document.getElementById("last_name").value;
	
	// Write out welcome using user input
	if (mid !== "") {
		document.getElementById("greeting").innerHTML = "Welcome to Language Learning Club, " + first + " " + mid + ". " + last + "!";
	} else {
		document.getElementById("greeting").innerHTML = "Welcome to Language Learning Club, " + first + " " + last + "!";		
	}
	
	// Assign numbers for variables
	var firstDivisor = 3;
	var secondDivisor = 5;
	
	// Create function to test for remainder
	function checkDivision(num1, num2) {
		if (num1 % num2 === 0) {
			return true;
		} else {
			return false;
		}
	}

	// Create loop
	var msg = "";
	var i = 0;
	for (i = 1; i <=140; i++) {
		if (checkDivision(i, firstDivisor) && !checkDivision(i, secondDivisor)) {
			msg += i + ".&nbsp;Lesson A" + "<br>";
		} else if (!checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)) {
			msg += i + ".&nbsp;Lesson B" + "<br>";
		} else if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)) {
			msg += i + ".&nbsp;Lesson C" + "<br>";
		} else {
			msg += i + ".&nbsp;Fun Club" + "<br>";
		}
	// Write output to page
	var writeToPage = document.getElementById("loop");
	writeToPage.innerHTML = msg;		
	}
	
}

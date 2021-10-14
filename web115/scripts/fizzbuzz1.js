function fizzbuzz1() {					
	var first = document.getElementById("first_name").value;
	var mid   = document.getElementById("middle_initial").value;	
	var last  = document.getElementById("last_name").value;
			
	// Write out welcome using user input
	if (mid !== "") {
		document.getElementById("greeting").innerHTML = "Welcome to Language Learning Club, " + first + " " + mid + ". " + last + "!";
	} else {
		document.getElementById("greeting").innerHTML = "Welcome to Language Learning Club, " + first + " " + last + "!";		
	}
	
	// Create loop
	var msg = "";
	var i;
	for (i = 1; i <= 140; i++) {
		if (i % 3 == 0 && i % 5 != 0) {
			msg += i + ".&nbsp;Lesson A" + "<br>";
		} else if (i % 3 != 0 && i % 5 == 0) {
			msg += i + ".&nbsp;Lesson B" + "<br>";
		} else if (i % 3 == 0 && i % 5 == 0) {
			msg += i + ".&nbsp;Lesson C" + "<br>";
		} else {
			msg += i + ".&nbsp;Fun Club " + "<br>";
		}
	// Write output to page
	var writeToPage = document.getElementById("loop");
	writeToPage.innerHTML = msg;
	}
}

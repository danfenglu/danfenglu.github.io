function changeGreeting2() {					// This function personalizes the h3 greeting for the page
	var first = document.getElementById("first_name").value;
	var mid   = document.getElementById("middle_initial").value;	// Get user's name
	var last  = document.getElementById("last_name").value;
			
	// Write out welcome using user input
	if (mid !== "") {
		document.getElementById("greeting").innerHTML = "Welcome to Learning Language Club, " + first + " " + mid + ". " + last + "!";
	} else {
		document.getElementById("greeting").innerHTML = "Welcome to Learning Language Club, " + first + " " + last + "!";		
	}
			
	// Prompt user for a number
	var howHigh = prompt("How high do you want to count, " + first + "?");
	var thisHigh = parseInt(howHigh);
		
	// Create loop which prints different message based on whether user's input was even or odd.
	var msg = "";
	var i;
	for (i = 1; i <= thisHigh; i++) {
		if (i % 2 == 0) {
			msg += i + ".&nbsp;The number is even." + "<br>";
		} else {
			msg += i + ".&nbsp;The number is odd." + "<br>";
		}
	// Write output to page
	var writeToPage = document.getElementById("loop");
	writeToPage.innerHTML = msg;
	}
}
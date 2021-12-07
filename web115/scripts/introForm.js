function introForm() {
	
	var firstname = document.getElementById("first_name").value;
	var lastname = document.getElementById("last_name").value;
	var cp = document.getElementById("computer_platform").value;
	var perBack = document.getElementById("personal").value;
	var acaBack = document.getElementById("academic").value;
	var courses= document.getElementById("course").value;
	var share = document.getElementById("share").value;
	
	document.getElementById("name").innerHTML = "Name: " + firstname + " " + lastname;	
	document.getElementById("platform").innerHTML = "Primary Computer Platform: " + cp;
	document.getElementById("personalBackground").innerHTML = "Personal Background: " + perBack;
	document.getElementById("academicBackground").innerHTML = "Academic Background: " + acaBack;
	document.getElementById("courses").innerHTML = "Your courses and why you're taking them: <br>" + courses;
	document.getElementById("Share").innerHTML = "I'd Also Like to Share: " + share;

}

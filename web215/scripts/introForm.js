function introForm() {
	
	var firstname = document.getElementById("first_name").value;
	var lastname = document.getElementById("last_name").value;
	var cp = document.getElementById("computer_platform").value;
	var perBack = document.getElementById("personal").value;
	var acaBack = document.getElementById("academic").value;
	var course= document.getElementById("takingcourse").value;
	var share = document.getElementById("share").value;

	
	document.getElementById("name").innerHTML = "Name: " + firstname + " " + lastname;	
	document.getElementById("platform").innerHTML = "Primary Computer Platform: " + cp;
	document.getElementById("personalBackground").innerHTML = "Personal Background: " + perBack;
	document.getElementById("academicBackground").innerHTML = "Academic Background: " + acaBack;
	document.getElementById("mycourse").innerHTML = "Your courses and why you're taking them: <br>" + course;
	document.getElementById("Share").innerHTML = "I'd Also Like to Share: " + share;
	document.getElementById("Share").innerHTML = "I'd Also Like to Share: " + share;



	if(document.getElementById('hike').checked) {
		document.getElementById("disp").innerHTML
			=  "You prefer " +document.getElementById("hike").value + ".";
		
	}
	else if(document.getElementById('cook').checked) {
		document.getElementById("disp").innerHTML
		= "You prefer " + document.getElementById("cook").value + ".";
			
	}
	else if(document.getElementById('bake').checked) {
		document.getElementById("disp").innerHTML
		= "You prefer " + document.getElementById("bake").value;+ ".";
	
	}
	else {
		document.getElementById("disp").innerHTML
			= "No one selected" + ".";
	}


	if(document.getElementById('red').checked) {
		document.getElementById("choices").innerHTML
			=  "You like " +document.getElementById("red").value + ".";
		
	}
	else if(document.getElementById('carrot').checked) {
		document.getElementById("choices").innerHTML
		= "You like " + document.getElementById("carrot").value + ".";
			
	}
	else if(document.getElementById('icecream').checked) {
		document.getElementById("choices").innerHTML
		= "You like " + document.getElementById("icecream").value + ".";
	
	}
	else {
		document.getElementById("choices").innerHTML
			= "No one selected" + ".";
	}




}

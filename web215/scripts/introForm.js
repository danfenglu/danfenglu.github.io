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


		var ele=[]
           var red = document.getElementById("checkbox1")
            if(red.checked){
                    ele.push(red.value);
             }
             var carrot =  document.getElementById("checkbox2")
              if(carrot.checked){
                    ele.push(carrot.value);
             }
             var ice = document.getElementById("checkbox3")
              if(ice.checked){
                    ele.push(ice.value);
             }
               if(ele.length>0){
                document.getElementById("choices").innerHTML = "You like: " + ele +".";
               }
               else{
               document.getElementById("choices").innerHTML = "You dont like any thing";
               }
        

}

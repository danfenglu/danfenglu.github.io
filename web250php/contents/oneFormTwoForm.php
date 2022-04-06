<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
	<title>Sunshine Garden - WEB250 - M6 Forms</title>
	<link rel = "stylesheet" type = "text/css" href = "styles/default.css" />
</head>
<body>

<div class="oneform">
<h3>  One Form, Two Forms, Red Forms, Green Forms, Two Results, One Page</h3>

<h3>This form will use the post attribute</h3>
  
    <form action="oneFormTwoForm.php" method="post" >
      <label for="fname">First name:</label>
      <input type="text" id="fname" name= "fname" ><br><br>

      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>

	      <label for="fsize">what is the size of your cake?</label>
		  <input type="text" id="fsize" name= "fsize" ><br><br>

		  <label for="fshape">what is the shape of your cake?</label>
		  <input type="text" id="fshape" name="fshape"><br><br>

          <label for="flavour">what is the flavour of your cake?</label>
		  <input type="text" id="flavour" name="flavour"><br><br>

		  <input type="submit" name = "submit1" value="Submit">
      <br><br>
    </form>
  

    <?php
    	 if (isset($_POST["submit1"]))
           {
           $fname = $_POST["fname"];
    			 $lname = $_POST["lname"];
    			 $fsize = $_POST["fsize"];
    			 $fshape = $_POST["fshape"];
           $flavour = $_POST["flavour"];

           echo "Your first name is ". $fname.".<br><br>";
    			 echo "Your last name is ". $lname.".<br><br>";
    			 echo "Your cake size is ". $fsize.".<br><br>";
    			 echo "Your cake shape is ". $fshape.".<br><br>";
            echo "Your cake flavour is ". $flavour.".<br><br>";
    	    }
    	?>

      <hr/>

 
<h3>This form will use the get attribute</h3>

    <form action="oneFormTwoForm.php" method="get" >
      <label for="fname">First name:</label>
      <input type="text" id="fname" name= "fname" ><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
		  <label for="fsize">what is the size of your cake?</label>
		  <input type="text" id="fsize" name= "fsize" ><br><br>
		  <label for="fshape">what is the shape of your cake?</label>
		  <input type="text" id="fshape" name="fshape"><br><br>
          <label for="flavour">what is the flavour of your cake?</label>
		  <input type="text" id="flavour" name="flavour"><br><br>
		  <input type="submit" name = "submit2" value="Submit">
      <br><br>
    </form>
 
    <?php
    		 if (isset($_GET["submit2"]))
           {
           $fname = $_GET["fname"];
    	   $lname = $_GET["lname"];
    	   $fsize = $_GET["fsize"];
    	   $fshape = $_GET["fshape"];
           $flavour = $_GET["flavour"];

           echo "Your first name is ". $fname.".<br><br>";
           echo "Your last name is ". $lname.".<br><br>";
           echo "Your cake size is ". $fsize.".<br><br>";
           echo "Your cake shape is ". $fshape.".<br><br>";
           echo "Your cake flavour is ". $flavour.".<br><br>";
           }
  
    	?>

</div>
</html>
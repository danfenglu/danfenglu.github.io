<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
	<title>Sunshine Garden - Danfeng Lu - web250</title>
	<link rel = "stylesheet" type = "text/css" href = "styles/default.css" />
</head>
<body>
<header>


	
<h1>Sunshine Garden</h1>
<h2>Loved by gardens,trusted by gardeners<h2>

	<a href = "?p=home.php">Home</a> &#x2736;
	<a href = "?p=introduction.php">Introduction</a> &#x2736;
	<a href = "?p=contract.php">Contract</a> &#x2736;
	<a href = "?p=brand.php">Brand</a>




</header>
<hr />
<!-- dynamic content goes here -->

<?php
	$sPage = $_GET["p"] ?? "";
	//echo ("You picked the page: " . $sPage); 
	
	if($sPage == "") {  $sPage = "home.php"; }
	include($sPage);
?>


<hr />

<footer>  
			<nav>
					<a href="https://github.com/danfenglu">Github</a> &#x2736;
					<a href="https://danfenglu.github.io/">Github Pages</a> &#x2736;
					<a href="https://github.com/danfenglu/danfenglu.github.io/tree/main/web250">Github WEB250</a> &#x2736;
					<a href="https://www.freecodecamp.org/danfenglu">Freecodecamp</a> &#x2736;
					<a href="https://www.codecademy.com/profiles/Danfeng88">Codecademy</a> &#x2736;
					<a href="https://jsfiddle.net/user/danfeng88/">JSFiddle</a> &#x2736;
					<a href="https://www.linkedin.com/learning/?setupTimeGoal=false&showCongrats=false&u=76141674">Linkedin Learning</a> 
			</nav>
		
				<p>Page Built by Sunshine Webspace Inc.</p>
			<a href="https://validator.w3.org/check?uri=" id="htmlButton"><img src= "images/html_validate_button.png" alt="Validate HTML!"
				style= "border: 0; width: 90px; height: 30px" /></a>
			<a href="https://jigsaw.w3.org/css-validator/check/referer?uri=" id="validatecss"><img src= "images/css_validate_button.gif" alt="Validate CSS!"
				style= "border: 0; width: 90px; height: 30px" /></a>
			<script>
				document.getElementById("htmlButton").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
				document.getElementById("validatecss").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
			</script>
					 
</footer>
		

</body>
</html>
 <?php
$mysqli = new mysqli('sql102.epizy.com', 'epiz_31064065', 'vMcSwU5CGXos', 'epiz_31064065_cars' );
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
//select a database to work with
$mysqli->select_db("epiz_31064065_cars");
 
?>
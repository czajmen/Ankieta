<?php

include ("class/User.php");

$User = new User($_POST['name'],$_POST['surname'],$_POST['mail'],json_decode($_POST["answers"]));

print_r($User->SaveToDB());

?>
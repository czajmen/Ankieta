<?php

$name = $_POST['name'];
$surname = $_POST['surname'];
$mail = $_POST['mail'];
$answers = json_encode($_POST["answers"]);


var_dump($answers);

$db = new SQLite3('db.sqlite');

$results = $db->query("INSERT INTO Ankieta (id,name,surname,mail,questions)  Values ('','$name','$surname','$mail','$answers')");


?>
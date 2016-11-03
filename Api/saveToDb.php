<?php



var_dump($_POST);

$name = $_POST['name'];
$surname = $_POST['surname'];
$mail = $_POST['mail'];
$answers = $_POST["answers"];

$db = new SQLite3('db.sqlite');

$results = $db->query('INSERT INTO Ankieta (name,surname,mail,questions)  Values ('.$name.','.$surname.','.$mail.','.$answers.')');

$results = $db->query('SELECT * FROM Ankieta');

while ($row = $results->fetchArray()) {
    var_dump($row);
}

var_dump($results);



?>
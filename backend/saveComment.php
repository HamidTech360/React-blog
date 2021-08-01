<?php

include 'connection.php';
error_reporting(E_ERROR);
error_reporting(E_ALL &~ E_WARNING);
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$comment = $data->comment;
$idx = $data->id;
$date = date ("l.d-m-y");

$insert =  "INSERT INTO comment (name, email, comment, date, idx) VALUES('$name', '$email', '$comment', '$date', '$idx')";
$query = mysqli_query($connect, $insert);


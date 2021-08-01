<?php

include 'connection.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$data = [];
$select = "SELECT * FROM comment";
$query = mysqli_query($connect, $select);

if($query){
   
    while($row = mysqli_fetch_assoc($query)){
        $data[] = $row;
    } 
    echo json_encode($data);
}
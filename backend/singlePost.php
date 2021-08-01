<?php

include 'connection.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
$index =  $_POST['id'];


$select = "SELECT * FROM blogs WHERE id = '$index'";
$query = mysqli_query($connect, $select);
if($query){
    $data = [];
    $row = mysqli_fetch_assoc($query);
    $data[] = $row;
    
    echo json_encode($data);
}else{
    echo mysqli_error($connect);
}
<?php

include 'connection.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$data = json_decode(file_get_contents("php://input"));


     
$post = $data->post;
$file = $data->file;
$title = $data->title;
$tmp = $data->fileUrl;
// $date =  date("l-d-m-y");

if(isset($post)){
    
  
    echo $title;
    echo $post;
    $file_dir = 'imgUploads/'.$file;
    $imageFileType = pathinfo($file_dir, PATHINFO_EXTENSION);
    $validExtensions = array('jpg', 'jpeg', 'png');
    $uploadOk = 0;

    if(!in_array(strtolower($imageFileType), $validExtensions)){
        $uploadOk=0;
        // echo $uploadOk;
    }else{
        $uploadOk=1;
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $file_dir)){
            echo 'uploaded';
        }else{
            echo 'not uploaded';
        }
    }

    $insert = "INSERT INTO blogs( title, post, image)VALUES( '$title', '$post', '$file')";
    $inserted = mysqli_query($connect, $insert);

}
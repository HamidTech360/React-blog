<?php 
  require_once 'connection.php';
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
 header("Content-type:application/json");

 $data = json_decode(file_get_contents("php://input"));

$post = $_POST['post'];
$title = $_POST['title'];
$date = date("l-d-m-y");
$response = array();
$upload_dir = 'imgUploads/';


if($_FILES['avatar'])
{
    $avatar_name = $_FILES["avatar"]["name"];
    $avatar_tmp_name = $_FILES["avatar"]["tmp_name"];
    $error = $_FILES["avatar"]["error"];

  
    if($error > 0){
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    }else 
    {
       
        $upload_name = $upload_dir.$avatar_name;
        
    
        if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
            $insert = "INSERT INTO blogs( title, post, image, date)VALUES( '$title', '$post', '$avatar_name', '$date')";
            $inserted = mysqli_query($connect, $insert);
            
            if($inserted){
                $response = array(
                    "status" => "success",
                    "error" => false,
                    "message" => "File uploaded successfully",
                    "post_status" => "saved"
                  );
             }
           
        }else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
    }



    

}else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "No file was sent!"
    );
}

echo json_encode($response);
?>
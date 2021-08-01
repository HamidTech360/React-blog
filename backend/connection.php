<?php
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $db = 'blog';

    $connect = mysqli_connect($host, $username, $password, $db);
    session_start();
// if($connect){
//      echo 'connection successfully established';
// }else{
//     echo 'failed to establish connection';
//     echo mysqli_error($connect);
// }
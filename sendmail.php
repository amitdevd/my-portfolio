<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "contacttodwivedi@gmail.com";

$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Subject: $subject\n";
$body .= "Message: $message\n";

$headers = "From: $email";

if(mail($to,$subject,$body,$headers)){
 echo "Mail Sent Successfully";
}else{
 echo "Mail Failed";
}

?>
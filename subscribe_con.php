<?php

	$email = $_POST['email'];

$headers = "From: ".$email;
$fromemail =  $email;
$subject="Subscribe Us For Updates";
$email_message = 'Please update me through this email for any updates';

$toemail="foodscience@averconferences.com";	

if(mail($toemail, $subject, $email_message, $headers)){
   echo"Thank you for your subcription";
}
else{
   echo"Mail Not sent";
}

   ?>
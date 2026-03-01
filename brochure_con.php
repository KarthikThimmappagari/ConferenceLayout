<?php

	$title = $_POST['title'];
	$first = $_POST['first'];
	$last= $_POST['last'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$country = $_POST['country'];   
	$company = $_POST['company'];
	$query = $_POST['query'];

$headers = "From: ".$email;
$fromemail =  $email;
$subject="Brochure Download";
$email_message = 'Brochure Submission
                   Title:'.$title.'
                   First: '.$first.'
                   Last:'.$last.'
                   Email:'.$email.'
                   Phone:'.$phone.'
                   Country:'.$country.'
                   Company:'.$company.'
                   Query:'.$query;

$toemail="foodscience@averconferences.com";	

if(mail($toemail, $subject, $email_message, $headers)){
   echo "Brochure Submitted Successfully";
}
else{
   echo"Not sent";
}

   ?>
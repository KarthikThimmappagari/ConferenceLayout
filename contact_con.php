<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$tel = $_POST['tel'];
	$msg = $_POST['msg'];   

$headers = "From: ".$email;
$fromemail =  $email;
$subject="Contact Us Message";
$email_message = '<h2>Contact Request</h2>
                    <p><b>Name:</b> '.$name.'</p>
                    <p><b>Email:</b> '.$email.'</p>
                    <p><b>Tel:</b> '.$tel.'</p>
                    <p><b>Msg:</b>'.$msg.'</p>';

$toemail="foodscience@averconferences.com";	

if(mail($toemail, $subject, $email_message, $headers)){
   echo"Thank you,";
}
else{
   echo"Not sent";
}

$sender = "foodscience@averconferences.com";
$headers='';
$headers.="MIME-Version: 1.0 \r\n";
$headers.="Content-type: text/html; charset=\"UTF-8\" \r\n";
$headers.= "From: ".$sender;

$fromemail =  $sender;
$subject="Submitted Contact Us";
$email_message = '<p>Hi '.$name.',</p>
                    <p>Thank you for contacting us. We will get back to you shortly.</p>
                    <p>Regards,</p>
                    <p>Food Science Team.</p>';

$toemail=$email;	

if(mail($toemail, $subject, $email_message, $headers)){
   echo" Your query has been sent.";
}
else{
   echo"Not sent";
}

   ?>
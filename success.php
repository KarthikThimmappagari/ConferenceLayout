<?php
session_start();
require_once 'db/config.php';

// Update payment status if registration_id exists in session
if (isset($_SESSION['registration_id']) && isset($pdo)) {
    try {
        $stmt = $pdo->prepare("UPDATE registrations SET payment_status = 'Success' WHERE id = ?");
        $stmt->execute([$_SESSION['registration_id']]);
    } catch (PDOException $e) {
        error_log("Payment Update Error: " . $e->getMessage());
    }
}

include "mailer.php";

$sender = 'foodscience@averconferences.com';		
$mail = new PHPMailer(true);
$mail->SMTPDebug = 0;
$mail->IsSMTP();
$mail->Host = 'localhost';
$mail->SMTPAuth = false;
$mail->Username = $sender;
$mail->Password = 'FoOd$#SCI2023';

// Rely on session data for reliability
$title = $_SESSION['title'] ?? ($_POST['title'] ?? '');
$institute = $_SESSION['org'] ?? ($_POST['org'] ?? '');
$country = $_SESSION['country'] ?? ($_POST['country'] ?? '');
$CUSTOMER_NAME = $_SESSION['name'] ?? ($_POST['name'] ?? '');
$CUSTOMER_EMAIL = $_SESSION['email'] ?? ($_POST['email'] ?? '');
$CUSTOMER_MOBILE = $_SESSION['phone'] ?? ($_POST['phone'] ?? '');
$PAY_AMT = $_SESSION['final_total'] ?? ($_SESSION['total'] ?? 0);
$regData = $_SESSION['regData'] ?? ($_POST['regData'] ?? '');
$job_title = $_SESSION['job_title'] ?? '';
$city = $_SESSION['city'] ?? '';
$promoCode = $_SESSION['promoCode'] ?? '';

$payMode = 'Razor Pay';
if(isset($_GET['mode'])) {
    $payMode = $_GET['mode'];
} else if(isset($_POST['mode'])) {
    $payMode = $_POST['mode'];
}

try {
    $mail->setFrom($sender, 'Food Science 2026');
    $mail->addAddress($CUSTOMER_EMAIL, $CUSTOMER_NAME);
    $mail->isHTML(true);
    $mail->Subject = 'Registration Successful';
    
    $selected = "";
    $RegDataArr = json_decode($regData, true);
    if (is_array($RegDataArr)) {
        foreach ($RegDataArr as $key => $value) {
            if(is_array($value)) $value = implode(', ', $value);
            $selected .= $key . " : " . $value . "<br/>";
        }
    } else {
        $selected = $regData;
    }

    $mail->Body = "Name: " . $title . " " . $CUSTOMER_NAME . "<br>"
                . "Job Title: " . $job_title . "<br>"
                . "Institute: " . $institute . "<br>"
                . "Mob: " . $CUSTOMER_MOBILE . "<br>"
                . "Email: " . $CUSTOMER_EMAIL . "<br>"
                . "City: " . $city . "<br>"
                . "Country: " . $country . "<br>"
                . "Registration Data: <br>" . $selected . "<br>"
                . "Total Amount: $ " . number_format($PAY_AMT, 2) . "<br>"
                . "Coupon Code: " . ($promoCode ?: 'None') . "<br>"
                . "Payment Mode: " . $payMode . "<br>"
                . "Date: " . date("d-m-Y");
                
    $mail->AltBody = 'Your registration for Food Science 2026 was successful.';
    $mail->send();
    
} catch (Exception $e) {
    // error_log("Mailer Error: " . $mail->ErrorInfo);
}
?>
<?php include'header.php';?>

<section>
	<div class="container-fluid" style="background-color: #dfdfdf;">
		<div class="container"><br><br>
			<h2 style="text-align: center;margin-top: 20px;color: #3385a7;">Payment Completed Successfully!</h2>
			<p style="text-align: center;">You will receive an email confirmation and receipt in 24-48 business hours. Kindly check spam folder if you don't find it in inbox.</p>

			<br><br><br>
		</div>
	</div>
</section>

<?php include'footer.php';?>
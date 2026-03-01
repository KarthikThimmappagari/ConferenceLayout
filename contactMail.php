<?php
	session_start();
	require_once 'db/config.php';
	include "mailer.php";
	extract($_POST);
	
	header("Content-Type: text/plain");
	ob_start(); //start capturing output buffer because we want to change output to html
	
	$sender='foodscience@averconferences.com';		

    if (isset($pdo)) {
        // Save to Database
        try {
            // Check for duplicate submission within the last 10 seconds
            $check = $pdo->prepare("SELECT id FROM registrations WHERE email = ? AND reg_info = ? AND created_at > (NOW() - INTERVAL 10 SECOND) LIMIT 1");
            $check->execute([$email, $regData]);
            $existing = $check->fetch();

            if (!$existing) {
                // Ensure total is numeric
                $total_float = floatval(preg_replace('/[^-0-9.]/', '', $total));
                $discount_float = floatval(preg_replace('/[^-0-9.]/', '', ($discount ?? 0)));
                $promo_str = $_POST['promoCode'] ?? '';
                $job_str = $_POST['job_title'] ?? '';
                $city_str = $_POST['city'] ?? '';
                $billing_str = $_POST['billingAddress'] ?? '';

                $stmt = $pdo->prepare("INSERT INTO registrations (title, name, email, phone, org, job_title, billing_address, city, country, coupon_code, discount_amount, reg_info, total_amount, payment_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                $success = $stmt->execute([
                    $title ?? '', 
                    $name ?? '', 
                    $email ?? '', 
                    $phone ?? '', 
                    $org ?? '', 
                    $job_str, 
                    $billing_str, 
                    $city_str, 
                    $country ?? '', 
                    $promo_str, 
                    $discount_float, 
                    $regData ?? '', 
                    $total_float, 
                    'Pending'
                ]);
                $_SESSION['registration_id'] = $pdo->lastInsertId();
                if (!$success) {
                    error_log("DB Insert Execution Failed");
                }
            } else {
                $_SESSION['registration_id'] = $existing['id'];
                exit("Duplicate detected");
            }
        } catch (PDOException $e) {
            error_log("DB Error: " . $e->getMessage());
        }
    } else {
        error_log("PDO Object not found in contactMail.php");
    }

    $mail = new PHPMailer(true);
    $mail->SMTPDebug = 0; // Set to 0 for production, 2 for debug
    $mail->IsSMTP();
    $mail->Host = 'localhost';
    $mail->SMTPAuth = false;
    $mail->Username   = $sender;                                // SMTP username
    $mail->Password   = 'Av$fdsc@21';                       // SMTP password   

    try {
        
		$to = 'foodscience@averconferences.com';
        $mail->setFrom($sender, 'FoodNutrition');
        $mail->addAddress($to, 'Registration Contact');     // Add a recipient
          $mail->isHTML(true);                                  // Set email format to HTML
          $mail->Subject = 'Customer Registration';
          
          $RegDataArr = json_decode($regData, true);
          $selected = "";
          if ($RegDataArr) {
              foreach ($RegDataArr as $key => $value) {
                if(is_array($value)) $value = implode(', ', $value);
                $selected .= $key . " : " . $value . "<br/>";
              }
          } else {
              $selected = $regData; // Fallback if regular string
          }

          $mail->Body = "Name: ".$title." ".$name."<br>"
                      . "Job Title: ".($_POST['job_title'] ?? 'N/A')."<br>"
                      . "Institute: ".$org."<br>"
                      . "Mob: ".$phone."<br>"
                      . "Email: ".$email."<br>"
                      . "City: ".($_POST['city'] ?? 'N/A')."<br>"
                      . "Country: ".$country."<br>"
                      . "Registration Data: <br>".$selected."<br>"
                      . "Total Amount: $ ".$total."<br>"
                      . "Coupon Code: ".($_POST['promoCode'] ?? 'None')."<br>"
                      . "Date: ".date("d-m-Y")."<br>"
                      . "Billing Address: <br>".($_POST['billingAddress'] ?? 'N/A');
                      
          $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
          $mail->send();
          
      } catch (Exception $e) {
          // Silent error for ajax
      } 
?>



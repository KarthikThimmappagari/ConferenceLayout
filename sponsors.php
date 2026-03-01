<?php
	$message = '';
if(isset($_POST['sponsorshipData'])){
    if (empty($_POST['g-recaptcha-response'])) {
    http_response_code(400);
    echo json_encode(array("status" => false, "msg" => "Please click the reCAPTCHA box."));
    exit;
  }

  $recaptcha_secret = '6LfwWpArAAAAAOFXXWa-aIsf2NObcNPTRXtRiWF6';
  $response = file_get_contents(
    'https://www.google.com/recaptcha/api/siteverify?secret=' .
    urlencode($recaptcha_secret) . '&response=' . urlencode($_POST['g-recaptcha-response'])
  );
  $result = json_decode($response, true);

  if (empty($result['success'])) {
    http_response_code(400);
    echo json_encode(array("status" => false, "msg" => "Robot verification failed. Please try again."));
    exit;
  }
			include "mailer.php";
        	extract($_POST);
        	
        	header("Content-Type: text/plain");
        	header("X-Node: $hostname");
        	ob_start(); //start capturing output buffer because we want to change output to html
        	
        	$sender='foodscience@averconferences.com';		
        		$mail->SMTPDebug = 0;
                $mail = new PHPMailer(true);                                 // Enable verbose debug output
        		$mail->IsSMTP();
        		$mail->Host = 'localhost';
        		$mail->SMTPAuth = false;
        		$mail->Username   = $sender;                                // SMTP username
                $mail->Password   = 'Aver_leaR20';                       // SMTP password
            try {
                
        		$to = 'foodscience@averconferences.com';
                $mail->setFrom($sender, 'Food Science');
                $mail->addAddress($to, 'Become Sponsor submitted');     // Add a recipient
                  $mail->isHTML(true);                                  // Set email format to HTML
                  $mail->Subject = 'Become Sponsor submitted';
        		 
        
                  $mail->Body ="Name: ".$firstname." ".$lastname."<br>"."Company name: ".$companyname."<br>"."Email: ".$email."<br>"."Country name: ".$countryname."<br>"."Job title: ".$jobtitle."<br>"."About us: ".$aboutus."<br>"."Request: ".$request."<br>";
                  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
                  $mail->send();
                  
                  echo json_encode(array("status" => true, "msg" => "Thank you for your request. We will keep in touch with you."));exit;
                 
              } catch (Exception $e) {
                  echo json_encode(array("status" => false, "msg" => "Something went wrong.Error: ".$mail->ErrorInfo));
                  exit;
              } 
		}
?>
<!DOCTYPE html>
<html lang="en">

<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <!-- Required meta tags -->
   
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <link rel="canonical" href="https://foodscience.averconferences.com/sponsors.php" />
   <title>Food Conference Sponsorship Packages | Nutrition Conference Sponsors | Food Nutrition Conference Sponsors | Food Science Modelling | Conference Sponsors | Food Systems | Food Nutrition UAE | Food Technology Congress Sponsor | Food Nutrition Conference USA | Sponsors Food Nutrition Conference | Japan | Asia | Middle east | Paris | France Events | Food Summit Europe</title>
   <meta name=" keywords" content="Food science Conference Sponsor, Food Science Congress Techniques, Conference Sponsors, Sponsors in Conferences, Food science Meetings, middle east Food Technology Congress, Food Technology usa Conference, Food Technology USA, Food Chemicals, Food science USA, Food science Japan, Food science India, germany, italy, netherlands, singapore, diet & nutrition, healthy food"/>
   <meta name="description" content="Food technology conferences 2026 welcomes the sponsors to avail sponsorship opportunities and provides many mutual benefits in the America Conference and meet food scientists and students."/>
   <script src="https://www.google.com/recaptcha/api.js" async defer></script>
<style>

   
   
  @media (min-width: 768px) { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  
   #sponsorshipdiv {
       margin: 0 auto;
   }
   
   #sponsorconferences {
       margin: 0 auto;
   }
  
  #sponsorconferences .hydrid, #sponsorconferences .ttm_single_image-wrapper {
      padding: 0;
  }
      
  }
@media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { /* hi-res laptops and desktops */ }
	     @media (min-width: 320px) and (max-width: 1024px) { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
	        
	        #sponsorshipdiv {
	            padding: 0;
	        }
	        #sponsorshipdiv .ttm_single_image-wrapper {
	            margin: 0;
	            padding: 0;
	        }
	        
	        .table td, .table th {
	            padding: 4px !important;
	        }
	        
	        #sponsorconferences {
	            margin: 0;
	            padding: 0;
	        }
	        
	        #sponsorconferences .hydrid, #sponsorconferences .packages {
	            padding: 0;
	        }
	        
	        #sponsorconferences .ttm_single_image-wrapper {
	            margin: 0;
	            padding: 0;
	        }
	         
	     }
/* only screen and @media (min-width:480px)  { */ 

/*#sponsorshipdiv {*/
/*	            padding: 0;*/
/*	        }*/
	        
/*    #sponsorshipdiv .ttm_single_image-wrapper {*/
/*	            margin: 0;*/
/*	            padding: 0;*/
/*	        }*/
	        
/*	        .table td, .table th {*/
/*	            padding: 4px !important;*/
/*	        }*/
	        
/*	        #sponsorconferences {*/
/*	            margin: 0;*/
/*	            padding: 0;*/
/*	        }*/
	        
/*	        #sponsorconferences .hydrid, #sponsorconferences .packages {*/
/*	            padding: 0;*/
/*	        }*/
	        
/*	        #sponsorconferences .ttm_single_image-wrapper {*/
/*	            margin: 0;*/
/*	            padding: 0;*/
/*	        }*/
/*}*/
	</style>
<?php include'header.php';?>

</div>
	<div class="col-lg-12 col-md-12 col-sm-12">
<div class="service-wrapper">
<div class="section-title text-left mb-3">
<span class="line-style"></span>
<center><h2 class="big-title py-3"> <center></center><strong>Sponsorship Packages</strong></h2><center>
</div>
<style>
							.dasheD{border-bottom: 1px dashed #333;padding: 10px 0 !important; font-size:16px !important;}
							.fa-arrow-circle-right{color:#333 !important;}
							</style>

<div class="sidebar-section">
<div class="location-wrapper mb-30">
<div class="" id="scroller">
<section>
	<div class="container-fluid" >
		<div class="container">
			<p style="text-align: justify;margin-top: 20px;">
				Branding, capturing potential clients, and taking the lead in the industry are all benefits that companies get from sponsoring conferences. They expose their brand to a specific sponsor audience, which helps increase awareness and develop credibility. This sponsoring brand gets to connect with possible clients and decision makers, which helps create valuable business relationships and the generation of leads, which in turn accelerates sales. In addition, sponsoring comes with additional benefits like the possibility to give a talk. This enables the company to demonstrate their industry knowledge and portrays them as a leader in the field. As a result, sponsoring a business strengthens relationships, generates strategic investments and positive returns, and furthers the company’s competitiveness in the industry.
			<br><br>
		</div>
	</div>
</section>
<div class="col-md-10 col-lg-10" id="sponsorshipdiv">
                                        <div class="ttm_single_image-wrapper">
                                            <!--<img class="img-fluid" src="images/Sponsorship_Packages.jpg" alt="Sponsors_Packages">-->
                                            <table class="table table-striped table-bordered">
                                                    <tr>
                                                        <th></th>
                                                        <th>Registration Sponsor</th>
                                                        <th>Diamond Sponsor</th>
                                                        <th>Gold Sponsor</th>
                                                        <th>Silver Sponsor</th>
                                                        <th>Bronze Sponsor</th>
                                                    <tr>
                                                        <td>Amount</td>
                                                        <td>$6999</td>
                                                        <td>11999</td>
                                                        <td>$9999</td>
                                                        <td>5999</td>
                                                        <td>$3999</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Name and logo on website</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Social media promotion</td>
                                                        <td>Yes-Weekly post</td>
                                                        <td>Yes-All Promotional Materials</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Advertisement on conference book</td>
                                                        <td>1 pages</td>
                                                        <td>2 pages</td>
                                                        <td>1 pages</td>
                                                        <td>1 page</td>
                                                        <td>1/2 page</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logo on Backdrop</td>
                                                        <td>Yes-Registration Desk</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logo on Certificate</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>No</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logo on Tag</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>No</td>
                                                        <td>No</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logo on Roll ups</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>No</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email Promotion</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>Yes</td>
                                                        <td>No</td>
                                                        <td>No</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Complementary Conference registration</td>
                                                        <td>3 Tickets</td>
                                                        <td>6 Tickets</td>
                                                        <td>4 Tickets</td>
                                                        <td>3 Tickets</td>
                                                        <td>2 Tickets</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Presentation (PPT)</td>
                                                        <td>10 mins</td>
                                                        <td>20 mins</td>
                                                        <td>15 mins</td>
                                                        <td>10 mins</td>
                                                        <td>10 mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Booth Setup</td>
                                                        <td>Registration Desk</td>
                                                        <td>Shell Scheme or Beamatrix</td>
                                                        <td>Shell Scheme or Beamatrix</td>
                                                        <td>Shell Scheme or Beamatrix</td>
                                                        <td>Tabletop Exhibition Space</td>    
                                                    </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-10 col-lg-10" id="sponsorconferences">
                                    <div class="col-md-6 col-lg-6 hydrid" style="float: left;">
                                        <div class="ttm_single_image-wrapper">
                                            <!--<img class="img-fluid" src="images/Sponsors_Packages.jpg" alt="Sponsors_Packages">-->
                                            <h4>Sponsorship Packages for Hybrid Conferences</h4>
                                            <table class="table table-striped table-bordered">
                                                    <tr>
                                                        <td>Sponsorship amount</td>
                                                        <td>$1999</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Name and logo on website</td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Social media promotion</td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Advertisement on conference</td>
                                                        <td>1 page</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logo on Backdrop</td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logo on Certificate</td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logo on Tag</td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logo on Standee</td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email Promotion</td>
                                                        <td>Yes</td>
                                                    </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 packages" style="float: left;">
                                        <div class="ttm_single_image-wrapper">
                                            <!--<img class="img-fluid" src="images/Sponsors_Packages.jpg" alt="Sponsors_Packages">-->
                                            <h4>Other Packages</h4>
                                            <table class="table table-striped table-bordered">
                                                    <tr>
                                                        <td>Logo on Conference Bag</td>
                                                        <td>$250/20 bags</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Leaflets in conference material</td>
                                                        <td>$200/unlimited</td>
                                                    </tr>
                                            </table>
                                            <h4>Contact for more Sponsorship Packages</h4>
                                            <table class="table table-striped table-bordered">
                                                <tr>
                                                    <td>Cocktail Sponsor</td>
                                                </tr>
                                                <tr>
                                                <td>Welcome Drink Sponsor</td>
                                                </tr>
                                                <tr> 
                                                <td>Awards Sponsor</td>
                                                </tr>
                                                <tr>
                                                    <td>Water Bottle Sponsor</td>
                                                </tr>
                                                <tr>
                                                    <td>Pen & Notepad Sponsor</td>
                                                </tr>
                                                <tr>
                                                    <td>Snacks Sponsor</td>
                                                </tr>
                                                <tr>
                                                    <td>Lunch Sponsor</td>
                                                </tr>    
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="bottom-links-div" style="clear: both;margin: 0 auto;text-align: center;">
                                    </div>
                                    </div>
                                    </div>
    </style>
</div>
	<div class="col-lg-12 col-md-12 col-sm-12">
<div class="service-wrapper">
<div class="section-title text-left mb-3">
<span class="line-style"></span>
<center><h2 class="big-title py-3"> <center></center><strong>Become a Sponsor</strong></h2><center>
</div>
<style>
							.dasheD{border-bottom: 1px dashed #333;padding: 10px 0 !important; font-size:16px !important;}
							.fa-arrow-circle-right{color:#333 !important;}
							</style>

<div class="sidebar-section">
<div class="location-wrapper mb-30">
<div class="" id="scroller">
 <div class="container">
     <div class="row">
         <div class="col-md-10" style="display: block;margin: 0 auto;">
        <form method="post" id="sponsorShipForm" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <div class="form-group">
                <label><strong>Name</strong> <span class="text-danger">(Required)</span></label>
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First" name="firstname" required>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last" name="lastname" required>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label><strong>Email</strong> <span class="text-danger">(Required)</span></label>
                <input type="email" class="form-control" placeholder="Enter your email" name="email" required>
            </div>
            
            <div class="form-group">
                <label><strong>Phone (Prefer WhatsApp Number)</strong> <span class="text-danger">(Required)</span></label>
                <input type="phone" class="form-control" placeholder="Enter your phone number" name="phone" required>
            </div>

            <div class="form-group">
                <label><strong>Company Name</strong> <span class="text-danger">(Required)</span></label>
                <input type="text" class="form-control" placeholder="Enter your company name" name="companyname" required>
            </div>

             <div class="form-group">
                <label><strong>Country Name</strong> <span class="text-danger">(Required)</span></label>
                <input type="text" class="form-control" placeholder="Enter your country name" name="countryname" required>
            </div>

            <div class="form-group">
                <label><strong>Job Title</strong> <span class="text-danger">(Required)</span></label>
                <input type="text" class="form-control" placeholder="Enter your job title" name="jobtitle" required>
            </div>

            <div class="form-group">
                <label><strong>How did you find out about us?</strong> <span class="text-danger">(Required)</span></label>
                <input type="text" class="form-control" placeholder="Let us know" name="aboutus" required>
            </div>
            
            <div class="form-group">
                <label><strong>Tell us more about your request</strong> <span class="text-danger">(Required)</span></label>
                <input type="text" class="form-control" placeholder="Tell us more about your request" name="request" required>
            </div>
            <div class="form-group">
                <label><strong>Captcha</strong> <span class="text-danger">(Required)</span></label>
                <div class="g-recaptcha" data-sitekey="6LfwWpArAAAAAPo82Wq7i2y5UPn0gVJF93zEkdFG"></div>
            </div>
            <input type="hidden" id="sponsorshipData" name="sponsorshipData" value="true" />
            <button type="button" class="btn btn-primary" id="sponsorSubmit" name="sponsorSubmit" style="margin: 0 auto;display: block;">Submit</button>
            <p style="text-align: center;font-size: 14px;" id="msgInfo"><?php echo $message; ?></p>
        </form>
        </div>
        </div>
        </div>
    </div>
<div class="clearfix"></div>
<br><br/>
</div>
</div>
</div>
</div>
</div>

<script>
    $("#sponsorSubmit").on('click', function(){
        $("#msgInfo").show();
       $("#msgInfo").html("");
       $.ajax({
           url: '/sponsors.php',
           type: 'post',
           data: $("#sponsorShipForm").serialize(),
           dataType: 'json',
           success: function(data) {
               $("#sponsorShipForm")[0].reset();
               grecaptcha.reset()
               if(data.status) {
                $("#msgInfo").css({"color": "green"});
                $("#msgInfo").html(data.msg);
               } else {
                $("#msgInfo").css({"color": "red"});   
                $("#msgInfo").html(data.msg);   
               }
                // Hide after 10 seconds (10 000 ms)
              setTimeout(function() {
                $("#msgInfo").fadeOut('slow');
              }, 10000);
           }
       }) 
    });
</script>                                
</div>
</div>
</div>
</div>
</div>

<?php include'footer.php';?>
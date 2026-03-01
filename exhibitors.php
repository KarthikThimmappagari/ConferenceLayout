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
                $mail->addAddress($to, 'Exhibitor submitted');     // Add a recipient
                  $mail->isHTML(true);                                  // Set email format to HTML
                  $mail->Subject = 'Exhibitor submitted';
        		 
        
                  $mail->Body ="Name: ".$firstname." ".$lastname."<br>"."Company name: ".$companyname."<br>"."Country name: ".$countryname."<br>"."Email: ".$email."<br>"."Phone: ".$phone."<br>"."Country: ".$countryname."<br>"."Job title: ".$jobtitle."<br>"."About us: ".$aboutus."<br>"."Request: ".$request."<br>"."Website: ".$website."<br>";
                  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
                  $mail->send();
                  
                  echo json_encode(array("status" => true, "msg" => "Thank you for your request. We will keep in touch with you."));exit;
                 
              } catch (Exception $e) {
                  echo json_encode(array("status" => false, "msg" => "Something went wrong.Error: ".$mail->ErrorInfo));
                  exit;
              } 
		}
?>
<!doctype html>
<html lang="en">

<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <!-- Required meta tags -->
   
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <link rel="canonical" href="https://foodscience.averconferences.com/exhibitors.php" />
   <title>Food Conference Exhibitors | Food Nutrition Conferences | ICFNPT 2026 | Food Science Meetings Exhibitions | Food Nutrition Congress USA | Food Science Meet | Food Technology 2026 Congress | Child Nutrition | Food Nutrition Conference Middle East | International Food Nutrition Conference | Nutraceutical Conference UK | America | Food | Asia | Middle East | 2026 Food Conferences | France 2026 | Paris Events 2026</title>
   <meta name=" keywords" content="Food Science 2026 Conference Exhibitions, food congress usa, food conference france, nutritional congress europe, Food Science Congress Techniques, Industrial Food science Conference, Biotechnology Conference, Pharmacology Conference, Food science Meetings, Food Technology Congress, Food Technology uk Conference, Food Technology UK, Food Chemicals, Food science USA, Food science Japan, Food science India, world food conference, Food Nutrition and Dietary supplement"/>
   <meta name="description" content="Aver Conferences welcomes exhibitors to exhibit their products/services that they are providing and meet the audience at Food Conference in Paris, France from October 1-2, 2026.">
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
<?php include'header.php';
	include 'functions.php';
?>
<section>
	<div class="container-fluid" >
		<div class="container"><br><br>
			<p style="text-align: justify;margin-top: 20px;">
				Exhibiting at the conference presents a unique opportunity to showcase your brand to a highly targeted audience. It enhances visibility, builds credibility, and enables face-to-face engagement with potential clients, partners, and industry leaders. You can demonstrate your products, gather valuable feedback, and generate high-quality leads in a dynamic and focused environment. The conference also offers important networking opportunities, allowing you to stay ahead of industry trends and connect with decision-makers. Whether you’re launching a new product or expanding your reach, exhibiting positions your company as a serious player in the market, all while supporting and growing your industry community.
			<br><br><br>
		</div>
	</div>
<div class="col-sm-6 col-md-6 col-lg-6" style="margin: 0 auto;">
    <div class="exhibitorDiv">
        <table class="table table-striped table-bordered">
            <tr>
                <th>Option 1. Amount & Size</th>
                <td>$4999 & 2M*2M  (Shell Scheme or Beamatrix)</td>
            </tr>
            <tr>
                <th>Option 2. Amount & Size</th>
                <td>$2999 & Tabletop Exhibition Space </td>
            </tr>
            <tr>
                <th>Exhibition Space</th>
                <td>2M*2M</td>
            </tr>
            <tr>
                <th>Name and logo on website</th>
                <td>Yes</td>
            </tr>
            <tr>
                <th>Social media promotion</th>
                <td>Yes</td>
            </tr>
            <tr>
                <th>Advertisement on conference book </th>
                <td>1 Page</td>
            </tr>
            <tr>
                <th>Logo on Backdrop</th>
                <td>Yes</td>
            </tr>
            <tr>
                <th>Complementary Conference registration</th>
                <td>2 Tickets</td>
            </tr>
            <tr>
                <th>10 minutes presentation</th>
                <td>Yes</td>
            </tr>
        </table>
    </div>
</div>
<!--</object>-->
</div>
</div>
</div>
</div>
</div>	
</section>
</div>
	<div class="col-lg-12 col-md-12 col-sm-12">
<div class="service-wrapper">
<div class="section-title text-left mb-3">
<span class="line-style"></span>
<center><h2 class="big-title py-3"> <center></center><strong>Become an Exhibitor</strong></h2><center>
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
                <label><strong>Contact Person Name</strong> <span class="text-danger">(Required)</span></label>
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
                <label><strong>Email Address</strong> <span class="text-danger">(Required)</span></label>
                <input type="email" class="form-control" placeholder="Enter your email" name="email" required>
            </div>
            
            <div class="form-group">
                <label><strong>Phone Number (Prefer WhatsApp Number)</strong> <span class="text-danger">(Required)</span></label>
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
                <label><strong>Website (if any)</strong> <span class="text-danger">(Required)</span></label>
                <input type="text" class="form-control" placeholder="Let us know" name="website" required>
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

<?php include'footer.php';?>
<script>
    $("#sponsorSubmit").on('click', function(){
        $("#msgInfo").show();
       $("#msgInfo").html("");
       $.ajax({
           url: '/exhibitors.php',
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
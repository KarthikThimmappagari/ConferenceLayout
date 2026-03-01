<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <!-- Required meta tags -->
   
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <link rel="canonical" href="https://foodscience.averconferences.com/abstract.php" />
   <title>Food Science Abstracts 2026 | Food Science Meetings France | ICFNPT 2026 | Food Technology Conferences | Food Nutrition Online Meetings | Food Congress UK | Food Science 2025 Conference | Food Nutrition Hybrid Conference | Nutrition Conferences Europe | Food Technology Conferences UAE | International Food Science Conference | UAE | UK | Europe | India | Food Science 2026 France | Paris</title>
   <meta name="keywords" content="Food Science Conferences France, ICFNPT 2026, food science usa, food conference san diego, food & nutrition conferences usa, Food science meetings uk, Food europe Conferences, Food Conference uk, Dietetics Conferences, food scienceist Conferences, food & nutrition Conferences, Food Science congress oceania, Food science & technology congress australia, Food science conferences germany, food science congress japan, usa, uk, europe, online conference on Food science, food science webinar"/>
   <meta name="description" content="Food Technology Conference 2026 welcomes interested participants to submit their research paper, etc to Intenational Conference on Food, Nutrition and processing technologies which is going to be held from October 1-2, 2026 in Paris, France, Europe."/>
<?php include'header.php';?>
<?php
$statusMsg='';
if(isset($_FILES["file"]["name"])){
	$title = $_POST['title'];
	$name = $_POST['name'];
	$email = $_POST['email'];
	$org = $_POST['org'];
	$cat = $_POST['cat'];
	$mode = $_POST['mode'];
	$social = $_POST['social'];
	$session = $_POST['session'];
	$phone = $_POST['phone'];
    $country = $_POST['country'];   

$fromemail =  $email;
$subject="Uploaded file attachment";
$email_message = '<h2>Abstract Submitted</h2>
                    <p><b>Title:</b> '.$title.'</p>
                    <p><b>Name:</b> '.$name.'</p>
                    <p><b>Email:</b> '.$email.'</p>
                    <p><b>Organization:</b> '.$org.'</p>
                    <p><b>Catagory:</b>'.$cat.'</p>
                    <p><b>Mode:</b>'.$mode.'</p>
                    <p><b>Social:</b>'.$social.'</p>
                    <p><b>Session:</b>'.$session.'</p>
                    <p><b>Phone:</b>'.$phone.'</p>
                    <p><b>Country:</b>'.$country.'</p>'
                    ;
$email_message.="Abstract Submission";
$semi_rand = md5(uniqid(time()));
$headers = "From: ".$fromemail;
$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

    $headers .= "\nMIME-Version: 1.0\n" .
    "Content-Type: multipart/mixed;\n" .
    " boundary=\"{$mime_boundary}\"";

if($_FILES["file"]["name"]!= ""){  
	$strFilesName = $_FILES["file"]["name"];  
	$strContent = chunk_split(base64_encode(file_get_contents($_FILES["file"]["tmp_name"])));  
	
	
    $email_message .= "This is a multi-part message in MIME format.\n\n" .
    "--{$mime_boundary}\n" .
    "Content-Type:text/html; charset=\"iso-8859-1\"\n" .
    "Content-Transfer-Encoding: 7bit\n\n" .
    $email_message .= "\n\n";


    $email_message .= "--{$mime_boundary}\n" .
    "Content-Type: application/octet-stream;\n" .
    " name=\"{$strFilesName}\"\n" .
    //"Content-Disposition: attachment;\n" .
    //" filename=\"{$fileatt_name}\"\n" .
    "Content-Transfer-Encoding: base64\n\n" .
    $strContent  .= "\n\n" .
    "--{$mime_boundary}--\n";
}
$toemail="foodscience@averconferences.com";	

if(mail($toemail, $subject, $email_message, $headers)){
   $statusMsg= "Thank you for your submission. Note: You will receive an email confirmation after the submission. The review process takes 2-7 days of abstract's acceptance, modification or rejection. If you do not receive an email within the said time, kindly check your spam/junk folder or contact us. To avoid our emails being seen as junk, please add our 'From' (conference emails) addresses to your Address Book.";
}else{
   $statusMsg= "Not sent";
}
}

 

$fromemail =  "foodscience@averconferences.com";
$subject="Received Abstract Submission";

$semi_rand = md5(uniqid(time()));
$headers = "From: ".$fromemail."";
$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

    $headers .= "\nMIME-Version: 1.0\n" .
    "Content-Type: multipart/mixed;\n" .
    " boundary=\"{$mime_boundary}\"";

if($_FILES["file"]["name"]!= ""){  
	$name = $_POST['name'];
	$email = $_POST['email'];
    $email_message = "Hi " . $name . ",
    
Thank you for submitting the abstract. Our team will review the abstract and get back to you in 2-7 working days. If you didn't submit the abstract with biography and photo, kindly email it to the conference manager.
    
Regards, 
Food Science Conference";
}
$toemail=$email;	

if(mail($toemail, $subject, $email_message, $headers)){
   $sstatusMsg= "Email sent successfully.";
}else{
   $sstatusMsg= "Not sent";
}

   ?>

<!--Icon Bars-->

<div class="icon-bar">
  <a href="https://www.facebook.com/Averconference/" class="facebook"><i class="fab fa-facebook"></i></a> 
  <a href="https://twitter.com/AverConferences?s=08" class="twitter"><i class="fab fa-twitter"></i></a> 
  <a href="https://www.linkedin.com/company/aver-conferences/" class="linkedin"><i class="fab fa-linkedin"></i></a> 
  <a href="https://www.youtube.com/channel/UCDVACIb19QXVFIUMI91gTTQ/" class="Youtube"><i class="fab fa-Youtube"></i></a>
</div>
<style type="text/css">
  .bak{
    background-image:url('img/abs_bak.jpg');
    background-attachment:fixed;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
<section>
	<div class="container-fluid bak">
		<div class="container"><br><br>
		<h2 style="text-align: center;margin-top: 20px;color: #3385a7;margin-bottom: 25px;">Abstract Submission</h2>
			<div class="row">
			<div class="col-md-2"></div>
				<div class="col-md-8" style="background-color: #ccc;padding: 20px;">
				        <!-- Display submission status -->
<?php if(!empty($statusMsg)){ ?>
    <p style="font-weight: bold;color: red;font-size: 18px;text-align:center;padding:20px;"><?php echo $statusMsg; ?></p>
<?php } ?>	
				  <form method="post" action="" enctype="multipart/form-data">
                    <div class="row">
                    	<div class="col-md-6 col-xs-12" style="margin-top: 25px;">
                    	  <select class="form-control" name="title" required=""> 
                    	  	<option value="">Select Title</option>
                    	  	<option value="Dr.">Dr.</option>
                    	  	<option value="Mr.">Mr.</option>
                    	  	<option value="Mrs.">Mrs.</option>
                            <option value="Ms.">Ms.</option>
                          </select>	
                    	</div>
                    	<div class="col-md-6 col-xs-12" style="margin-top: 25px;">
                    		<input type="text" name="name" class="form-control"  placeholder="Your Name *" required="">
                    	</div>
                    	<div class="col-md-6 col-xs-12" style="margin-top: 25px;">
                    	     <input type="email" name="email" class="form-control"  placeholder="Your Email *" required="">	
                    	</div>
                    	<div class="col-md-6 col-xs-12" style="margin-top: 25px;">
                    	  <select class="form-control" name="cat" required=""> 
                    	  	<option value="">Categories</option>
                    	  	<option value="Keynote Presentation">Keynote Presentation</option>
                    	  	<option value="Speaker Presentation">Speaker Presentation</option>
                    	  	<option value="Poster Presentation">Poster Presentation</option>
                    	  	<option value="Student Presentation">Student Presentation</option>
                    	  	<option value="E-poster Presentation">E-poster Presentation</option>
                            <option value="Conducting Symposium">Conducting Symposium</option>
                            <option value="Others">Others</option>
                          </select>
                    	</div>
                    	<div class="col-md-6 col-xs-12" style="margin-top: 25px;">
                    	    <input type="text" name="org" class="form-control"  placeholder="Organization Name *" required="">
                    		</div>
                    	<div class="col-md-6 col-xs-12" style="margin-top: 25px;">
                    	  <select class="form-control" name="mode" required=""> 
                    	  	<option value="">Mode of Participation*</option>
                    	  	<option value="In-person">In-person</option>
                    	  	<option value="Online">Online</option>
                    	  	</select>
                    	</div>
                    	<div class="col-md-6 col-xs-12" style="margin-top: 25px;">
                    		<input type="text" name="social" class="form-control"  placeholder="Social Profile (if any)" >  	
                    	</div>
                        <div class="col-md-6 col-xs-12" style="margin-top: 25px;">
                    	<select class="form-control" name="session" required=""> 
 <option value="">Please Select session</option>
 <option value="Food science and technology">Food science and technology</option>
<option value="Food chemistry and Microbiology">Food chemistry and Microbiology</option>
<option value="Food Nutrition and Dietary supplement">Food Nutrition and Dietary supplement</option>
<option value="Food Fraud and quality">Food Fraud and quality</option>
<option value="Food and Dairy Technology">Food and Dairy Technology</option>
<option value="Healthcare and Nutrition">Healthcare and Nutrition</option>
<option value="Food Quality and Safety Regulations">Food Quality and Safety Regulations</option>
<option value="Functional Food and Food innovation">Functional Food and Food innovation</option>
<option value="Medical Foods and Nutraceuticals">Medical Foods and Nutraceuticals</option>
<option value="Pregnancy and Pre pregnancy nutrition">Pregnancy and Pre pregnancy nutrition</option>
<option value="Food addiction and eating disorder">Food addiction and eating disorder</option>
<option value="Agriculture and plant science">Agriculture and plant science</option>
<option value="Food and Beverages">Food and Beverages</option>
<option value="Diet and Nutrients">Diet and Nutrients</option>
<option value="Prebiotics and Probiotics food">Prebiotics and Probiotics food</option>
<option value="Others">Others</option>
                          </select>
                    	</div>
                    	<div class="col-md-6 col-xs-12" style="margin-top: 25px;">
                    		<input type="text" name="phone" class="form-control"  placeholder="Your Phone*" required="">
                    	</div>
                    	<div class="col-md-6 col-xs-12" style="margin-top: 25px;">
<select id="country" name="country" class="form-control" required="">
    <option value="">Country*</option>
   <option value="Afganistan">Afghanistan</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bonaire">Bonaire</option>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
   <option value="Brunei">Brunei</option>
   <option value="Bulgaria">Bulgaria</option>
   <option value="Burkina Faso">Burkina Faso</option>
   <option value="Burundi">Burundi</option>
   <option value="Cambodia">Cambodia</option>
   <option value="Cameroon">Cameroon</option>
   <option value="Canada">Canada</option>
   <option value="Canary Islands">Canary Islands</option>
   <option value="Cape Verde">Cape Verde</option>
   <option value="Cayman Islands">Cayman Islands</option>
   <option value="Central African Republic">Central African Republic</option>
   <option value="Chad">Chad</option>
   <option value="Channel Islands">Channel Islands</option>
   <option value="Chile">Chile</option>
   <option value="China">China</option>
   <option value="Christmas Island">Christmas Island</option>
   <option value="Cocos Island">Cocos Island</option>
   <option value="Colombia">Colombia</option>
   <option value="Comoros">Comoros</option>
   <option value="Congo">Congo</option>
   <option value="Cook Islands">Cook Islands</option>
   <option value="Costa Rica">Costa Rica</option>
   <option value="Cote DIvoire">Cote DIvoire</option>
   <option value="Croatia">Croatia</option>
   <option value="Cuba">Cuba</option>
   <option value="Curaco">Curacao</option>
   <option value="Cyprus">Cyprus</option>
   <option value="Czech Republic">Czech Republic</option>
   <option value="Denmark">Denmark</option>
   <option value="Djibouti">Djibouti</option>
   <option value="Dominica">Dominica</option>
   <option value="Dominican Republic">Dominican Republic</option>
   <option value="East Timor">East Timor</option>
   <option value="Ecuador">Ecuador</option>
   <option value="Egypt">Egypt</option>
   <option value="El Salvador">El Salvador</option>
   <option value="Equatorial Guinea">Equatorial Guinea</option>
   <option value="Eritrea">Eritrea</option>
   <option value="Estonia">Estonia</option>
   <option value="Ethiopia">Ethiopia</option>
   <option value="Falkland Islands">Falkland Islands</option>
   <option value="Faroe Islands">Faroe Islands</option>
   <option value="Fiji">Fiji</option>
   <option value="Finland">Finland</option>
   <option value="France">France</option>
   <option value="French Guiana">French Guiana</option>
   <option value="French Polynesia">French Polynesia</option>
   <option value="French Southern Ter">French Southern Ter</option>
   <option value="Gabon">Gabon</option>
   <option value="Gambia">Gambia</option>
   <option value="Georgia">Georgia</option>
   <option value="Germany">Germany</option>
   <option value="Ghana">Ghana</option>
   <option value="Gibraltar">Gibraltar</option>
   <option value="Great Britain">Great Britain</option>
   <option value="Greece">Greece</option>
   <option value="Greenland">Greenland</option>
   <option value="Grenada">Grenada</option>
   <option value="Guadeloupe">Guadeloupe</option>
   <option value="Guam">Guam</option>
   <option value="Guatemala">Guatemala</option>
   <option value="Guinea">Guinea</option>
   <option value="Guyana">Guyana</option>
   <option value="Haiti">Haiti</option>
   <option value="Hawaii">Hawaii</option>
   <option value="Honduras">Honduras</option>
   <option value="Hong Kong">Hong Kong</option>
   <option value="Hungary">Hungary</option>
   <option value="Iceland">Iceland</option>
   <option value="Indonesia">Indonesia</option>
   <option value="India">India</option>
   <option value="Iran">Iran</option>
   <option value="Iraq">Iraq</option>
   <option value="Ireland">Ireland</option>
   <option value="Isle of Man">Isle of Man</option>
   <option value="Israel">Israel</option>
   <option value="Italy">Italy</option>
   <option value="Jamaica">Jamaica</option>
   <option value="Japan">Japan</option>
   <option value="Jordan">Jordan</option>
   <option value="Kazakhstan">Kazakhstan</option>
   <option value="Kenya">Kenya</option>
   <option value="Kiribati">Kiribati</option>
   <option value="Korea North">Korea North</option>
   <option value="Korea Sout">Korea South</option>
   <option value="Kuwait">Kuwait</option>
   <option value="Kyrgyzstan">Kyrgyzstan</option>
   <option value="Laos">Laos</option>
   <option value="Latvia">Latvia</option>
   <option value="Lebanon">Lebanon</option>
   <option value="Lesotho">Lesotho</option>
   <option value="Liberia">Liberia</option>
   <option value="Libya">Libya</option>
   <option value="Liechtenstein">Liechtenstein</option>
   <option value="Lithuania">Lithuania</option>
   <option value="Luxembourg">Luxembourg</option>
   <option value="Macau">Macau</option>
   <option value="Macedonia">Macedonia</option>
   <option value="Madagascar">Madagascar</option>
   <option value="Malaysia">Malaysia</option>
   <option value="Malawi">Malawi</option>
   <option value="Maldives">Maldives</option>
   <option value="Mali">Mali</option>
   <option value="Malta">Malta</option>
   <option value="Marshall Islands">Marshall Islands</option>
   <option value="Martinique">Martinique</option>
   <option value="Mauritania">Mauritania</option>
   <option value="Mauritius">Mauritius</option>
   <option value="Mayotte">Mayotte</option>
   <option value="Mexico">Mexico</option>
   <option value="Midway Islands">Midway Islands</option>
   <option value="Moldova">Moldova</option>
   <option value="Monaco">Monaco</option>
   <option value="Mongolia">Mongolia</option>
   <option value="Montserrat">Montserrat</option>
   <option value="Morocco">Morocco</option>
   <option value="Mozambique">Mozambique</option>
   <option value="Myanmar">Myanmar</option>
   <option value="Nambia">Nambia</option>
   <option value="Nauru">Nauru</option>
   <option value="Nepal">Nepal</option>
   <option value="Netherland Antilles">Netherland Antilles</option>
   <option value="Netherlands">Netherlands (Holland, Europe)</option>
   <option value="Nevis">Nevis</option>
   <option value="New Caledonia">New Caledonia</option>
   <option value="New Zealand">New Zealand</option>
   <option value="Nicaragua">Nicaragua</option>
   <option value="Niger">Niger</option>
   <option value="Nigeria">Nigeria</option>
   <option value="Niue">Niue</option>
   <option value="Norfolk Island">Norfolk Island</option>
   <option value="Norway">Norway</option>
   <option value="Oman">Oman</option>
   <option value="Pakistan">Pakistan</option>
   <option value="Palau Island">Palau Island</option>
   <option value="Palestine">Palestine</option>
   <option value="Panama">Panama</option>
   <option value="Papua New Guinea">Papua New Guinea</option>
   <option value="Paraguay">Paraguay</option>
   <option value="Peru">Peru</option>
   <option value="Phillipines">Philippines</option>
   <option value="Pitcairn Island">Pitcairn Island</option>
   <option value="Poland">Poland</option>
   <option value="Portugal">Portugal</option>
   <option value="Puerto Rico">Puerto Rico</option>
   <option value="Qatar">Qatar</option>
   <option value="Republic of Montenegro">Republic of Montenegro</option>
   <option value="Republic of Serbia">Republic of Serbia</option>
   <option value="Reunion">Reunion</option>
   <option value="Romania">Romania</option>
   <option value="Russia">Russia</option>
   <option value="Rwanda">Rwanda</option>
   <option value="St Barthelemy">St Barthelemy</option>
   <option value="St Eustatius">St Eustatius</option>
   <option value="St Helena">St Helena</option>
   <option value="St Kitts-Nevis">St Kitts-Nevis</option>
   <option value="St Lucia">St Lucia</option>
   <option value="St Maarten">St Maarten</option>
   <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
   <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
   <option value="Saipan">Saipan</option>
   <option value="Samoa">Samoa</option>
   <option value="Samoa American">Samoa American</option>
   <option value="San Marino">San Marino</option>
   <option value="Sao Tome & Principe">Sao Tome & Principe</option>
   <option value="Saudi Arabia">Saudi Arabia</option>
   <option value="Senegal">Senegal</option>
   <option value="Seychelles">Seychelles</option>
   <option value="Sierra Leone">Sierra Leone</option>
   <option value="Singapore">Singapore</option>
   <option value="Slovakia">Slovakia</option>
   <option value="Slovenia">Slovenia</option>
   <option value="Solomon Islands">Solomon Islands</option>
   <option value="Somalia">Somalia</option>
   <option value="South Africa">South Africa</option>
   <option value="Spain">Spain</option>
   <option value="Sri Lanka">Sri Lanka</option>
   <option value="Sudan">Sudan</option>
   <option value="Suriname">Suriname</option>
   <option value="Swaziland">Swaziland</option>
   <option value="Sweden">Sweden</option>
   <option value="Switzerland">Switzerland</option>
   <option value="Syria">Syria</option>
   <option value="Tahiti">Tahiti</option>
   <option value="Taiwan">Taiwan</option>
   <option value="Tajikistan">Tajikistan</option>
   <option value="Tanzania">Tanzania</option>
   <option value="Thailand">Thailand</option>
   <option value="Togo">Togo</option>
   <option value="Tokelau">Tokelau</option>
   <option value="Tonga">Tonga</option>
   <option value="Trinidad & Tobago">Trinidad & Tobago</option>
   <option value="Tunisia">Tunisia</option>
   <option value="Turkey">Turkey</option>
   <option value="Turkmenistan">Turkmenistan</option>
   <option value="Turks & Caicos Is">Turks & Caicos Is</option>
   <option value="Tuvalu">Tuvalu</option>
   <option value="Uganda">Uganda</option>
   <option value="United Kingdom">United Kingdom</option>
   <option value="Ukraine">Ukraine</option>
   <option value="United Arab Emirates">United Arab Emirates</option>
   <option value="United States of America">United States of America</option>
   <option value="Uraguay">Uruguay</option>
   <option value="Uzbekistan">Uzbekistan</option>
   <option value="Vanuatu">Vanuatu</option>
   <option value="Vatican City State">Vatican City State</option>
   <option value="Venezuela">Venezuela</option>
   <option value="Vietnam">Vietnam</option>
   <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
   <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
   <option value="Wake Island">Wake Island</option>
   <option value="Wallis & Futana Is">Wallis & Futana Is</option>
   <option value="Yemen">Yemen</option>
   <option value="Zaire">Zaire</option>
   <option value="Zambia">Zambia</option>
   <option value="Zimbabwe">Zimbabwe</option>
</select>
                    	</div>
                    	<div class="col-md-6 col-xs-12" style="margin-top: 25px;">
                    	<label>Upload Abstract *</label>	
                    		<input type="file" name="file" required="" class="form-control">
                    	</div>
                    	<div class="col-md-6 col-xs-12" style="margin-top: 35px;"><br>
                    	   <input type="submit" name="submit" class="btn btn-success" value="Submit">                    	
                    	</div>
                    </div>
                  </form>
				</div>
			<div class="col-md-2">
			</div>
			</div>

			<br>
			<div class="row">
			    <div class="col-md-2"></div>
			    <div class="col-md-8" style="background-color: #ccc;padding: 20px;">
			        <p style="text-align: center;">Sample Abstract Template</p>
			     <p style="text-align: center;"><a href="img/sample-abstract-format.pdf" target="_blank" class="btn btn-primary"><i class="fas fa-file-pdf"></i>&nbsp;&nbsp;Download Here</a></p>
			    </div>
			    <div class="col-md-2"></div>
			</div>
			<br/><br/><br/>
		</div>
	</div>
</section>

<?php include'footer.php';?>
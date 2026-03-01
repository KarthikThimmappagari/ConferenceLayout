<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <!-- Required meta tags -->
   
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <link rel="canonical" href="https://foodscience.averconferences.com/brochure.php" />
   <title>ICFNPT 2026 | Nutrition Congress Brochure | Food Conferences Paris | Dietetics  Conferences Europe | Nutritionists Conference 2026 | Food Microbiology Conferences | Food Nutrition Congress | Food Nutrition 2026 | Food Science Conferences USA | Food Nutrition Europe | Food Science & Nutrition India | Food Science Conference UK | USA | Europe | Russia | Japan | Switzerland | 2026 Conferences | Paris | France | America</title>
   <meta name="keywords" content="Food Science Conferences 2026, ICFNPT 2026, Food Microbiology, nutrition conference, food congress, food meetings oceania, food conference north america, Food technology Conferences italy, Food science Conferences 2026, Food science Europe, Food science Congress, Food science Talks, Food science Research, Organic Food Science Conferences, Food science Faculty, food scientist, food science meetings 2025, food safety, nutrition conferences, dairy technology, nutritional immunology, food biotechnology conference, food borne diseases"/>
   <meta name="description" content="Food & Nutrition Conference brochure will provide you with all the details including abstract submission, guidelines, venue details, registration, Food Science topics"/>

<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <!-- Required meta tags -->

<?php 	
	include'header.php';	
	include 'functions.php';
		if(isset($_POST['submit'])){
			header('location: img/Foodsummit-Brochure.pdf');
		}
?>
	<link rel="stylesheet" href="css/loader.css">
	<style>	
	
		.btn {		
			border-radius: 0px;	
		} 
	</style>
<section>
	<div class="container-fluid" style="background-color:#e3e8eb;">
		<div class="container"><br><br>
          <div class="row">
          		<form method="post" id="broucher" action="">
                    <div class="row">
                         <div class="col-md-10 col-xs-12" style="margin-left:auto;margin-right:auto;">
                            <center><h3 style="font-weight: bold;text-align: center;margin-bottom: 20px;">DOWNLOAD BROCHURE</h3></center>
							<div class="alert alert-success message">
								<strong>Thank You</strong>, For your subscription.
							</div>
							<div class="row">    
								<div class="col-md-4 col-xs-12" style="margin-top: 25px;">
									<input type="text" name="first" class="form-control"  placeholder="First Name *" required="">
								</div>
								<div class="col-md-4 col-xs-12" style="margin-top: 25px;">
									<input type="text" name="last" class="form-control"  placeholder="Last Name *" required="">
								</div>								
								<div class="col-md-4 col-xs-12" style="margin-top: 25px;">
									<input type="email" name="email" class="form-control"  placeholder="Your Email *" required="">
								</div>
								<div class="col-md-4 col-xs-12" style="margin-top: 25px;">
									<input type="text" name="phone" class="form-control"  placeholder="Your Phone No." required="">
								</div>
								<div class="col-md-4 col-xs-12" style="margin-top: 25px;">
									<select id="country" name="country" class="form-control" required="">
										<?php echo countries(); ?>
									</select>
								</div>
								<div class="col-md-4 col-xs-12" style="margin-top: 25px;">
									<input type="text" name="company" class="form-control"  placeholder="Your Company/University" required="">
								</div>
								<div class="col-md-12 col-xs-12" style="margin-top: 25px;">
									<input type="text" name="query" class="form-control"  placeholder="Query" required="">
								</div>
								<div class="col-md-12 col-xs-12" style="margin-top: 25px;text-align:center;"><br>
									<input type="submit" name="submit" class="btn btn-success" value="Submit">									
									<input type="reset" class="btn btn-success" style="margin-left:10px;" value="Clear">
								</div>
							</div>
                        </div>
                    </div>
                </form>
          </div>
			<br><br><br>
		</div>
	</div>
</section>
 <script>
	$(function() {
		$('.message').hide();
	});
	
	$('#broucher').submit(function(e) {
		e.preventDefault();
		var formData = new FormData(this);
		$('.message').show();
		$(':input[type="submit"]').prop('disabled', true);
		$(':input[type="reset"]').prop('disabled', true);
		$('.loader').addClass('loading');
		$.ajax({
			url: 'brochure_con.php',
			type: 'POST',
			data: formData,
			success: function (data) {
				window.location.assign("https://foodscience.averconferences.com/img/Foodsummit-Brochure.pdf");
			},
			cache: false,
			contentType: false,
			processData: false
		});
		
	});
	
	
 </script> 
<?php include'footer.php';?>

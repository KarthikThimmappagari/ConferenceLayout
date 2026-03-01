<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <!-- Required meta tags -->
   
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <link rel="canonical" href="https://foodscience.averconferences.com/contact.php" />
   <title>France Nutraceutical Congress Contact Us | Food Technology Conferences Paris | Food Nutrition Conferences Europe | Nutritionist Conferences USA | Neutraceuticals Conference Japan | Food Nutrition UAE | Applications of Food Nutrition | Food Nutrition Meeting India | Food Nutrition Germany | Food Nutrition Congress Spain | USA | Aver | Food Science UK | Food Conference | Paris | France | Europe | Asia</title>
   <meta name="keywords" content="Food science Conferences, Food Technology Conferences, Medicinal Food science Conference, Food Technology Conference uae, Dietetics Conferences europe, organic foods, artificial food, Food science Symposium, Food science Education, uk Conferences, Organic Food science Meeting, Food science Labs, Food Safety Conference, organic food, natural food, nutraceuticals conference florida, usa, prebiotics, Diet and Nutrients, healthy life, food sicnce orlando, italy, spain"/>
   <meta name="description" content="Interested participants can use the contact us a portal for all types of queries related to the Food science Conference and also get in touch through Facebook and Linkedin."/>

<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <!-- Required meta tags -->


<?php include'header.php';?>
 <script>
   $(document).ready(function() {

   $('#first_form').submit(function(e) {
    e.preventDefault();

      var formData = new FormData(this);

    $.ajax({
        url: 'contact_con.php',
        type: 'POST',
        data: formData,
        success: function (data) {
            alert(data);
            location.reload();
        },
        cache: false,
        contentType: false,
        processData: false
    });
    
  });

});
 </script>
<section>
	<div class="container-fluid" style="background-color: #dfdfdf;">
		<div class="container"><br><br>
          <div class="row">
          	<div class="col-md-6">
          		<h3>Get in Touch</h3>
          		<form method="post" id="first_form">
          			<div style="padding: 20px;">
          				<input type="text" id="name" name="name" class="form-control" placeholder="Name" required="">
          			</div>
          			<div style="padding: 20px;">
          				<input type="email" id="email" name="email" class="form-control" placeholder="Email" required="">
          			</div>
          			<div style="padding: 20px;">
          				<input type="text" id="tel" name="tel" class="form-control" placeholder="Telephone" required="">
          			</div>
          			<div style="padding: 20px;">
          				<textarea class="form-control" id="msg" name="msg" placeholder="Queries" required=""></textarea>
          			</div>
          			<div style="padding: 20px;">
          				<input type="submit" class="btn btn-success" name="">
          			</div>
          		</form>
          	</div>
          	<div class="col-md-6">
          		<h3 style="text-align: center;">CONTACT: 24×7</h3>
          		<p style="padding: 20px;text-align: center;font-size: 18px;">foodscience@averconferences.com</p>
          		<center><img src="img/contact.jpg" class="img-responsive"></center>
          	</div>
          </div>
			<br><br><br>
		</div>
	</div>
</section>

<?php include'footer.php';?>
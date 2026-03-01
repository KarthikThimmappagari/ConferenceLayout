<?php session_start(); ?>

<?php include'header.php';?>
<br><br>
<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use Razorpay\Api\Api;
//require_once 'configDB.php';
require_once 'razorpay-php/Razorpay.php';
$title=$_POST['title'];
$org= $_POST['org'];
$country=$_POST['country'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$PAY_AMT = $_POST['total']*1;
$regData = $_POST['regData'];
$job_title = $_POST['job_title'] ?? '';
$city = $_POST['city'] ?? '';
$promoCode = $_POST['promoCode'] ?? '';
$discount = $_POST['discount'] ?? 0;

$_SESSION['title'] = $title;
$_SESSION['org'] = $org;
$_SESSION['country'] = $country;
$_SESSION['name'] = $name;
$_SESSION['email'] = $email;
$_SESSION['phone'] = $phone;
$_SESSION['job_title'] = $job_title;
$_SESSION['city'] = $city;
$_SESSION['promoCode'] = $promoCode;
$_SESSION['discount'] = $discount;
$_SESSION['total'] = $PAY_AMT;
$_SESSION['regData'] = $regData;
/*
 * To create order to RazorPay
 */

?>

<style type="text/css">
	.paypal-button {
		width: 50% !important;
	}
    .razorpay-payment-button{
      background-color: tomato;
      color: white;
      padding: 10px;
      border: none;
      font-size: 20px;
      font-weight: bold;
    }
	.customer {
		width: 80%;
		background: #dad7d7;
		padding: 15px;
	}
	.seperator{
		display:none;
	}
	.seperator{
		text-align: center; 
		border-bottom: 1px solid #000; 
		line-height: 0.1em;
		margin: 10px 0 20px; 
	} 

	.seperator span { 
		background:#fff; 
		padding:0 10px; 
	}

	@media only screen and (max-width: 520px) {
	  .table-striped tr td, .table-striped tr th {
		  font-size: 13px;
		  padding: .2rem;
		  font-weight: 500;
	  }
	  
	  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
		position: relative;
		width: 100%;
		padding-right: 5px;
		padding-left: 5px;
	}
		.customer {
			width: 100%;
		}
		.customer-table{
			font-size: 15px;
		}
		.customer-table tr td:first-child{
			width:100px;
		}
		.seperator {
			display: block;
		}
	}
</style>
<meta name="viewport" content="width=device-width">

	<div class="container">
		<div class="row">
			<style>
				tr {
					padding: 5px 25px;
				}
			</style>
			<h2 style="text-align: center;margin-top:0px;color: #000000;width:100%;">Review & Pay</h2>
			<div class="col-md-8 col-xs-12" style="margin-left: auto;margin-right: auto;">
			<div class="row">
			<div class="col-md-12 col-xs-12" style="margin-top: 15px;margin-bottom:15px;text-align: -webkit-center !important;">
				<div class="customer" style="">
					<table class="customer-table">
						<tbody>
						<tr>
							<td>Name </td>
							<td>:</td>
							<td class="name"><?php echo $title.' '.$name; ?></td>
						</tr>
						<tr>
							<td>Institution </td>
							<td>:</td>
							<td class="org"><?php echo $org; ?></td>
						</tr>
						<tr>
							<td>Email </td>
							<td>:</td>
							<td class="email"><?php echo $_SESSION['email']; ?></td>
						</tr>
						<tr>
							<td>Phone </td> 
							<td>:</td>
							<td class="phone"><?php echo $phone; ?></td>
						</tr>
						<tr>
							<td>Country </td>
							<td>:</td>
							<td class="country"><?php echo $country; ?></td>
						</tr>
						<tr>
							<td> Total Payment </td>
							<td>: $</td>
							<td class="tot"><?php echo $PAY_AMT; ?></td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="col-md-6 col-xs-12 text-center">
				<img src="img/razorpay-logo.png" width="100px">
				<form action="success.php" method="POST">
					<?php

						$keyId = 'rzp_live_pgUJXzABGIvi5D';
						$secretKey = '898TSDIwyW0EcsNoQgKArJhL';
						$api = new Api($keyId, $secretKey);
						// Apply coupon discount if any
                        $couponDiscount = 0;
                        if ($discount > 0) {
                            $couponDiscount = $PAY_AMT * $discount;
                        }
                        $afterCoupon = $PAY_AMT - $couponDiscount;

						// Apply a 1% discount on the total amount (Existing Flow)
                        $discountAmount = $afterCoupon * 0.01; // 1% discount
                        $finalAmount = $afterCoupon - $discountAmount; // Subtract discount from total amount
                        $_SESSION['final_total'] = $finalAmount;
							$order = $api->order->create(array(
								'receipt' => rand(1000, 9999) . 'ORD',
								'amount' => $finalAmount*100,
								'payment_capture' => 1,
								'currency' => 'USD',
								)
							);
					?>
		            <!-- Display the discount information to the user -->
                    <div>
                        <h4>Price Breakdown</h4>
                        <p><strong>Original Price:</strong> $<?php echo number_format($PAY_AMT, 2); ?></p>
                        <?php if ($couponDiscount > 0): ?>
                        <p><strong>Coupon Discount:</strong> -$<?php echo number_format($couponDiscount, 2); ?> (<?php echo ($discount * 100); ?>%)</p>
                        <?php endif; ?>
                        <p><strong>Processing Discount (1%):</strong> -$<?php echo number_format($discountAmount, 2); ?></p>
                        <p><strong>Final Price:</strong> $<?php echo number_format($finalAmount, 2); ?></p>
                    </div>
					<script
					src="https://checkout.razorpay.com/v1/checkout.js"
					data-key="<?php echo $keyId ?>"  
					data-amount="<?php echo $order->amount ?>" 
					data-currency="USD"
					data-order_id="<?php echo $order->id ?>" 
					data-buttontext="Pay with Razorpay"
					data-name="Aver Conferences"
					data-description="Registration"
					data-image="<?php echo 'https://foodscience.averconferences.com/wp-content/uploads/2019/06/logo-png.png'; ?>"
					data-prefill.name="<?php echo $name; ?>"
					data-prefill.email="<?php echo $email; ?>"
					data-prefill.contact="<?php echo $phone; ?>"
					data-theme.color="#ff6347"
					></script>
					<input type="hidden" name="mode" value="Razor Pay">
					<input type="hidden"  custom="Hidden Element" name="hidden">
				</form>
				<p class="seperator"><span>(OR)</span></p>
			</div>
			  <div class="col-md-6 col-xs-12 text-center">
				<center>
				<script
					src="https://www.paypal.com/sdk/js?client-id=AaQdHitO0D9CjS-_QN2QvphWRbgKEryU4LiRTKzMmNZ8LoCG6-05zyHn4R8L4PvaKREsQ9Abg40F7S6h"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
				</script>
				<style>
				@media screen and (max-width: 400px) {
				 #paypal-button-container {
				 width: 100%;
				 }
				}

				@media screen and (min-width: 400px) {
				 #paypal-button-container {
				 width: 210px;
				 }
				}
				</style>
				<div id="paypal-button-container"></div>

				<script>
				paypal.Button.render({
				 style: {
				 size: 'responsive'
				 }
				}, '#paypal-button-container');
				</script>
				<script>
				  paypal.Buttons({
					createOrder: function(data, actions) {
					  // This function sets up the details of the transaction, including the amount and line item details.
					  return actions.order.create({
						purchase_units: [{
						  amount: {
							value: <?PHP echo $PAY_AMT; ?>
						  }
						}]
					  });
					},
					onApprove: function(data, actions) {
					  // This function captures the funds from the transaction.
					  return actions.order.capture().then(function(details) {
						// This function shows a transaction success message to your buyer.
						window.location.href="success.php?mode=Paypal";
					  });
					}
				  }).render('#paypal-button-container');
				  //This function displays Smart Payment Buttons on your web page.


				</script>
				</center>
			</div>
			</div>
			</div>
		</div>
	</div>
<br><br><br><br>
<?php include'footer.php';?>


<script>
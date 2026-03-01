   <footer class="footer_part">
      <div class="container">
         <div class="row">
            <div class="col-sm-6 col-lg-2">
               <div class="single_footer_part">
                  <a href="index.html" class="footer_logo_iner"> <img src="img/food-2026-conference.png" alt="food-nutrition-science-conference" style="height: 180px;width: 180px;"> </a>
                  
               </div>
            </div>
            <div class="col-sm-6 col-lg-4">
               <div class="single_footer_part">
                  <h4>Contact info </h4>
                  <p>Email 1 : foodscience@averconferences.com</p>
                  <p>Email 2 : communications@averconferences.com</p>
                  </div>
            </div>
            <div class="col-sm-6 col-lg-3">
               <div class="single_footer_part">
                  <h4>Important Link</h4>
                  <ul class="list-unstyled">
                     <li><a href="http://foodscience.averconferences.com/abstract.php"> Abstract Submission</a></li>
                     <li><a href="http://foodscience.averconferences.com/brochure.php">Download Brochure</a></li>
                     <li><a href="http://foodscience.averconferences.com/program.php"> Program</a></li>
                     <li><a href="http://foodscience.averconferences.com/registration.php">Registration</a></li>
                  </ul>
               </div><br><br>
               <h4 style="color: white;">Subscribe Us For Updates</h4>
            </div>
            <div class="col-sm-6 col-lg-3">
               <div class="single_footer_part">
                  <h4>Follow us on Social Media</h4>
                  <p>You will receive conference updates </p>
              <!----  -->
                  <div class="footer_icon">
                    <ul class="list-unstyled">
                       <li><a href="https://www.facebook.com/Averconference/" class="single_social_icon"><i class="fab fa-facebook-f" style="font-size: 25px;"></i></a></li>
                       <li><a href="https://twitter.com/AverConferences?s=08" class="single_social_icon"><img src="img/x-twitter.png" alt="twitter" style="width: 20px;height: 20px;max-width: 100%;margin-top: -10px;" /></a></li>
                       <li><a href="https://www.linkedin.com/company/aver-conferences/" class="single_social_icon"><i class="fab fa-linkedin" style="font-size: 25px;"></i></a></li>
                       <li><a href="https://api.whatsapp.com/send?phone=6302591260" class="single_social_icon"><i class="fab fa-whatsapp" style="font-size: 25px;"></i></a></li>
       <!--                <li><a href="#" class="single_social_icon"><i class="fab fa-blogger"></i></a></li>
                       <li><a href="#" class="single_social_icon"><i class="fab fa-pinterest"></i></a></li>
                       <li><a href="#" class="single_social_icon"><i class="fab fa-flickr"></i></a></li>
                       <li><a href="#" class="single_social_icon"><i class="fab fa-weixin"></i></a></li> -->
                    </ul>
                 </div> 
                  <div id="mc_embed_signup" style="margin-top: 60px;">
                    
                     <form id="first_form" class="subscribe_form relative mail_part" required>
                        <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                           class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '"
                           required="" type="email">
                        <button style="margin-bottom: 3px;" type="submit" name="submit" id="newsletter-submit"
                           class="email_icon newsletter-submit button-contactForm"><i
                              class="far fa-paper-plane"></i></button>
                        <div class="mt-10 info"></div>
                     </form>
                  </div>
               </div>
            </div>
         </div> 
         <hr>
         <div class="row">
            <div class="col-lg-12">
               <div class="copyright_text text-center">
                  <P><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></P>
               </div>
            </div>
         </div>
      </div>
   </footer>
   <!--::footer_part end::-->

   <!-- jquery plugins here-->
   <script src="js/jquery-1.12.1.min.js"></script>
   <!-- popper js -->
   <script src="js/popper.min.js"></script>
   <!-- bootstrap js -->
   <script src="js/bootstrap.min.js"></script>
   <!-- magnific js -->
   <script src="js/jquery.magnific-popup.min.js"></script>
   <!-- carousel js -->
   <script src="js/owl.carousel.min.js"></script>
   <!-- easing js -->
   <script src="js/jquery.easing.min.js"></script>
   <!--masonry js-->
   <script src="js/masonry.pkgd.min.js"></script>
   <script src="js/masonry.pkgd.js"></script>
   <!--form validation js-->

   <!-- counter js -->

   <!-- custom js -->
   <script src="js/custom.js"></script>
 <script>
   $(document).ready(function() {

   $('#first_form').submit(function(e) {
    e.preventDefault();

      var formData = new FormData(this);

    $.ajax({
        url: 'subscribe_con.php',
        type: 'POST',
        data: formData,
        success: function (data) {
            alert(data);
        },
        cache: false,
        contentType: false,
        processData: false
    });
    
  });

});
 </script>
</body>

</html>
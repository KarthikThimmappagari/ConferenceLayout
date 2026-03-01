<?php 
include('admin/DatabaseCon.php');
$get=new DatabaseCon();
$gt=$get->getCon();
$student_id=$_GET['cid'];
$stmt = $gt->prepare("SELECT * FROM student WHERE id='$student_id'");
$resul=$stmt->execute();
$coun = $stmt->rowCount();
$result=$stmt->fetch(PDO::FETCH_ASSOC);
?>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Student Identity </title>

</head>
<body>
<div class="page-container">
    <div class="left-content">
        <div class="mother-grid-inner">
            <!--heder end here-->
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a><i class="fa fa-angle-right"></i>Student Print Id Card</li>
            </ol>
            <!---728x90--->

            <div class="agile-grids">
                <!-- tables -->

                <div class="agile-tables">
                    <div class="w3l-table-info">
                        <h3 class="mb-4">Student Print Id Card
                            <button type="submit" class="btn btn-info pull-right" id="btnPrint" name="Print"><i class="fa fa-print" aria-hidden="true"></i> Print</button>
                        </h3>
                    </div>


                    <div id="print_card">
                        
                        <div class="idHeader">
                            <div><h2 class="assoc_name"><?php
                                    $stmta = $gt->prepare("select * from institute where id=".$result['ass'] );
                                    $resula=$stmta->execute();
                                    $rowa=$stmta->fetch(PDO::FETCH_ASSOC);
                                    echo strtoupper($rowa['name']);?></h2></div>
                            <div><h4 class="affiliatedTo" id="affiliatedToText">Affiliated to : Universal Taekwondo Institute</h4></div>
                            <div class="contact">www.universaltaekwondo.in, Email : utiindia17@rediffmail.com, Mob : 9851890022</div>
                            <span class="identityCard">IDENTITY CARD</span>
                            <img src="http://universaltaekwondo.in/admin/images/kukkiwon-logo_poster.png" class="kukkiwonLogo"/>
                        </div>
                        <div class="stu_details">
                            <h4 class="regNo">Students' Reg. No. : <?php echo strtoupper($result['application_id']); ?></h4>
                            <h4 class="validUpto">Valid Upto : 31st December <?php echo date('Y'); ?></h4>
                            <article class="studentContainer">
                                <div class="studentInfo">
                                    <h3><span class="studentName1">Name :  </span> <span class="studentName">&nbsp;&nbsp;&nbsp;<?php echo strtoupper($result['fstname']); ?> <?php echo strtoupper($result['lstname']); ?></span></h3>
                                    <h3><span class="guardianName">Guardian Name :  </span> <span class="guardianName">&nbsp;&nbsp;&nbsp;<?php echo strtoupper($result['father_nm']); ?></span></h3>
                                    <h3><span class="dob">Date Of Birth :  </span> <span class="dob">&nbsp;&nbsp;&nbsp;<?php echo strtoupper(date('d-m-Y',strtotime($result['dob']))); ?></span></h3>
                                    <h3><span class="sex">Gender :  </span> <span class="sex">&nbsp;&nbsp;&nbsp;<?php echo strtoupper($result['sex']); ?></span></h3>
                                    <h3><span class="belt">Current Belt :  </span> <span class="belt">&nbsp;&nbsp;&nbsp;<?php echo strtoupper($result['belt']); ?></span></h3>
                                </div>
                                <div>
                                    <img width="85px"  alt="student Pic" class="stuPic" src='../<?php echo $result['pic']; ?>'>
                                    <span class="colorBelt">COLOUR BELT</span>
                                </div>
                            </article>
                        </div>
                    </div>



                    <div class='card student_card' id="print_card_old_swapnil" >

                        <div>
                            <h2 class="assoc_name"><?php
                                $stmta = $gt->prepare("select * from institute where id=".$result['ass'] );
                                $resula=$stmta->execute();
                                $rowa=$stmta->fetch(PDO::FETCH_ASSOC);
                                echo strtoupper($rowa['name']);?></h2>
                        </div>
                        <div class="stu_details" ><h4 class="stu_reg"><?php echo strtoupper($result['application_id']); ?></h4><h4 class="stu_reg_year"><?php echo date('Y'); ?></h4></div>
                        <article>
                            <img alt='My Pic' class="pro_img" src='../<?php echo $result['pic']; ?>'>
                            <h2 class="name "><?php echo strtoupper($result['fstname']); ?> <?php echo strtoupper($result['lstname']); ?></h2>
                            <h2 class="fname"><?php echo strtoupper($result['father_nm']); ?></h2>
                            <h2 class="dob"><?php echo strtoupper(date('d-m-Y',strtotime($result['dob']))); ?></h2>
                            <h2 class="sex"><?php echo strtoupper($result['sex']); ?></h2>
                            <h2 class="belt"><?php echo strtoupper($result['belt']); ?></h2>
                        </article>
                    </div>

                    <div class="bg-info clearfix">

                    </div>

                </div>
                <!-- //tables -->
                <div class="agile-tables">
                    <div class="w3l-table-info">
                        <h3 class="mb-4">Print Id Card Back
                            <button type="submit" class="btn btn-info pull-right" id="btnPrint2" name="Print"><i class="fa fa-print" aria-hidden="true"></i> Print</button>
                        </h3>
                    </div>

                    <?php
                    $stmta2 = $gt->prepare("select * from coach where aid=".$result['ass']." and bid=".$result['branch'] );
                    $resula2=$stmta2->execute();
                    $rowa2=$stmta2->fetch(PDO::FETCH_ASSOC);
                    ?>
                    
                    <div class="idBackside" id="idBackside">
                      <img src="http://universaltaekwondo.in/admin/images/g.png" id="blue_chest_guard" />
                      <img src="http://universaltaekwondo.in/admin/images/t.png" id="red_chest_guard" />
                    
                      <div class="idBackHeader" >
                        <div><h4 class="approvedBy" id="approvedByText">Approved by : Universal Taekwondo Institute</h4></div>
                        <h3><span style="font-size:18px;margin-top:3px;float:left;margin-left:-40px;!important;">ADDRESS:</span><span class="address" style="text-align:center;"> <?php echo strtoupper($result['address']); ?> ,</br> <center><?php echo strtoupper($result['dist']); ?> , <?php echo strtoupper($result['pin']); ?></center></span></h3>
                        <div style="text-align: center;">
                          <img src="http://universaltaekwondo.in/admin/images/kukkiwon-logo_poster.png" class="kukkiwonLogo_back"/>
                        </div>
                        <div style="width: 90%; margin-top:30px;"  >
                            <h3>
                            <span  style="font-size:15px;margin-left:16px;font-weight:bolder">CLUB/ACADEMY:</span>&nbsp; 
                            <span class="academy" style="font-size:12px;font-weight:bolder">
                                <?php
                                    $stmtab = $gt->prepare("select * from branch where bid=".$result['branch'] );
                                    $resulab=$stmtab->execute();
                                    $rowab=$stmtab->fetch(PDO::FETCH_ASSOC);
                                    echo strtoupper($rowab['bname']);
                                    ?> 
                            </span>
                             <h3><span style="font-size:15px;"></span><span class="coachAddress"  style="font-size:13px;text-align:center;margin-left:15px;margin-top:5px; ">&nbsp;<?php echo strtoupper($rowa2['address']); ?></span></h3>
                        </h3>
                        <h3><span style="font-size:15px;margin-left:12px;font-weight:bolder">COACH NAME:</span>&nbsp; <span class="coachName"><?php echo strtoupper($rowa2['name']); ?></span></h3>
                       
                        <h3><span style="font-size:15px;margin-left:12px;font-weight:bolder">COACH CONTACT:</span> &nbsp;<span class="coachContactNo"><?php echo strtoupper($rowa2['phone']); ?></span></h3>        
                        </div>
                    
                      </div>
                    </div>
                    
                    <div class='card student_back' id="print_card2" >
                        <article>
                            <h3 class="address_back" style="margin-top:2px;float:left;margin-left:-40px;"><?php echo strtoupper($result['address']); ?> , <?php echo strtoupper($result['dist']); ?> , <?php echo strtoupper($result['pin']); ?></h2>
                            <h3 class="coach_academy">&nbsp;<?php
                                $stmtab = $gt->prepare("select * from branch where bid=".$result['branch'] );
                                $resulab=$stmtab->execute();
                                $rowab=$stmtab->fetch(PDO::FETCH_ASSOC);
                                echo strtoupper($rowab['bname']);
                                ?> </h2>
                                 <h3 class="coach_address">&nbsp;:<?php echo strtoupper($rowa2['address']); ?></h2>
                            <h3 class="coach_name">&nbsp;<?php echo strtoupper($rowa2['name']); ?> </h2>
                           
                            <h3 class="coach_contact">&nbsp;<?php echo strtoupper($rowa2['phone']); ?></h2>


                        </article>
                    </div>

                    <div class="bg-info clearfix">

                    </div>

                </div>
                <!-- //tables -->

            </div>

            <!--COPY rights end here-->
        </div>
    </div>
    <!--/content-inner-->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" >
    <link rel="stylesheet" href="admin/css/id_print.css" type="text/css" />
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

    <script type="text/javascript">
      document.getElementById("btnPrint").addEventListener("click", () => window.print());
      document.getElementById("btnPrint2").addEventListener("click", () => window.print());
    </script>

<?php
    if (isset($_POST["submit"])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $from = 'Website Contact Form'; 
        $to = 'ucsdprojectrishi@gmail.com'; 
        $subject = 'Message from Contact Form ';
        
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";
 
 
// If there are no errors, send the email
     mail ($to, $subject, $body, $from);

 }
    	?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
    <title>UCSD Project Rishi</title>
    <!--  Bootstrap Style -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <!--  Font-Awesome Style -->
    <link href="assets/css/font-awesome.min.css" rel="stylesheet" />
    <!--  Animation Style -->
    <link href="assets/css/animate.css" rel="stylesheet" />
    <!--  Pretty Photo Style -->
    <link href="assets/css/prettyPhoto.css" rel="stylesheet" />
    <!--  Google Font Style -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    <!--  Custom Style -->
    <link href="assets/css/style.css" rel="stylesheet" />
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <div id="pre-div">
        <div id="loader">
        </div>
    </div>
    <!--/. PRELOADER END -->
    <div class="navbar navbar-default navbar-fixed-top move-me ">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <a class="navbar-brand" href="#">
                    <img src="assets/img/logo.png" class="navbar-brand-logo " alt="" />

                </a>
            </div>
            <div class="navbar-collapse collapse move-me">
                <ul class="nav navbar-nav navbar-right">

                    <li >
                        <a href="#home">HOME 

                        </a>

                    </li>
                    <li >
                        <a href="#about">ABOUT

                        </a>

                    </li>

                    <li >
                        <a href="#port-folio">GALLERY
                        </a>

                    </li>

                    <li >
                        <a href="#help">HOW TO HELP
                        </a>

                    </li>

                    <li >
                        <a href="#contact">CONTACT 
                        </a>

                    </li>
                </ul>
            </div>

        </div>
    </div>
    <!--./ NAV BAR END -->
    <div id="home" >
        <div class="overlay">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-9 col-md-9 head-text">
                        <h1 id="divDisp" >Rural India Social and Health Improvement</h1>
                        <span>
                        Project RISHI (Rural India Social and Health Improvement) is a non-profit
                        </span>
                        <span>
                        organization whose mission is to promote the sustainable development
                        </span>
                        <span>
                        and growth of rural Indian communities. In partnership with local
                        </span>
                        <span>
                        community members and social enterprises, we identify issues central
                        </span>
                        <span>
                        to our target communities and provide the resources necessary to
                        </span>
                        <span>
                        implement solutions through extensive field research and on-campus
                        </span>
                        <span>
                        initiatives.
                        </span>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <div class="div-trans text-center">
                            <h3>DONATE TO HELP </h3>
                            <h2>FUND PROJECTS</h2>
                            <div class="col-lg-12 col-md-12 col-sm-12" >
                           	<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                           		<input name="cmd" value="_s-xclick" type="hidden">
                                <div class="form-group">
                                    <input type="text" name="first_name" class="form-control" required="required" placeholder="Name">
                                </div>
                                <div class="form-group">
                                    <input type="text" name = "email" class="form-control" required="required" placeholder="Email address">
                                </div>
                                <div class="form-group">
                                    <input type="text" name = "amount" class="form-control" required="required" placeholder="Amount in $">
                                </div>
                                <div class="form-group">
                                    <button name="hosted_button_id" value="8H3FGB36XNNRQ" type="hidden" class="btn btn-success btn-block btn-lg">DONATE NOW</button>
                                </div>
                            </form>
                             </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>


    </div>
    <!--./ HOME SECTION END -->
    <div id="about" >
        <div class="container">
            <div class="row text-center">
                <div data-wow-delay="0.1s" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 sub-head wow rollIn animated">
                    <h2><strong>ABOUT </strong></h2>
                    <p class="sub-head">The first chapter of Project RISHI was set up at UCLA in 2005. Since then Project RISHI chapters have sprung up UC Berkeley, UC San Diego, UC Davis, UC Irvine, and Northwestern University. The UCSD chapter of Project RISHI was founded in September 2009 by UCSD Alumni Nikhil Nadkarni ('11). We work in rural villages set up by Baba Amte in rural Maharashtra. Since our inception we have had two official trips to India during the summers of 2010 and 2012.</p>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-6 col-md-6">
                    <div class="media wow rotateIn animated" data-wow-delay="0.066s">
                        <div class="pull-left">
                            <i class="fa fa-recycle fa-4x  "></i>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Water Collection & Sanitation</h3>
                            <p >
                                The shortage and cleanliness of water has always been a problem in rural parts of India. In Anandwan, 400 children only had the option to drink water from the river that contained hot and dirty water. So in 2014, we implemented a water purification system that cools and stores water in a tank, providing clean water inside the schools for several hundred blind and deaf children. 
                            </p>

                        </div>
                    </div>
                    <div class="media wow rotateIn animated" data-wow-delay="0.1s">
                        <div class="pull-left">
                            <i class="fa fa-history fa-4x  "></i>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Blind & Deaf Awareness Campaign</h3>
                            <p>
                                In order to decrease the intolerance in India surrounding physical ailments, Project RISHI wants to work with the village school to set up higher awareness for disabled children. In India, many families severely underestimate the capabilities of their children and it is heartbreaking to see how children are ostracized because of a disability out of their control. Our goal is to foster parental involvement and to develop a multimedia scrapbook of artwork and writing from the blind and deaf school in Anandwan.
                            </p>

                        </div>
                    </div>

                </div>
                <!-- <div class="col-lg-4 col-md-4 wow bounceInDown animated" style="padding: 10px;" data-wow-delay="0.6s"   >
                    <div id="carousel-slider" class="carousel slide" data-ride="carousel">

                        <div class="carousel-inner">
                            <div class="item">

                                <img src="assets/img/slider/1.jpg" class="img-thumbnail" alt="">
                            </div>
                            <div class="item">
                                <img src="assets/img/slider/2.jpg" class="img-thumbnail" alt="">
                            </div>
                            <div class="item active">
                                <img src="assets/img/slider/3.jpg" class="img-thumbnail" alt="">
                            </div>
                        </div>
                        
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-slider" data-slide-to="0" class=""></li>
                            <li data-target="#carousel-slider" data-slide-to="1" class=""></li>
                            <li data-target="#carousel-slider" data-slide-to="2" class="active"></li>
                        </ol>

                    </div>
                </div> -->

                <div class="col-lg-6 col-md-6">

                    <div class="media wow rotateIn animated" data-wow-delay="0.13s">
                        <div class="pull-left">
                            <i class="fa fa-star-o fa-4x  "></i>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Swaranandwan Orchestra</h3>
                            <p>
                                This music and dance troupe of Anandwan is made up of disabled residents and leprosy patients. It increases the physical, mental, and emotional health of both its performers and audience through the concept of therapeutic theater. We aim to create an online media channel for them, help subsidize travel and equipment costs for the orchestra to perform internationally, and set them up with a sister orchestra in the United States. In the summer of 2012, UCSD's Project RISHI donated $7000 to their cause.
                            </p>

                        </div>
                    </div>
                    <div class="media wow rotateIn animated" data-wow-delay="0.16s">
                        <div class="pull-left">
                            <i class="fa fa-life-ring fa-4x  "></i>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Health Education Camps</h3>
                            <p>
                                We provide disabled children with the basic health care that they lack, with the guidance of professional doctors. UCSD students have the unique opportunity of participating in hands-on, clinical practice. We are also working on creating a resource center for children that would help sustain any educational lessons taught during our trip.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row pad-top-botm wow flipInX animated" data-wow-delay="0.23s">
                <div class="col-lg-8 col-md-8 col-sm-8 " >

                    <h3><strong>Awards and Oppurtunities</strong></h3>
                    <p>
                        In 2011, Project RISHI was awarded the UCSD Organization of the Year from the UCSD Alumni Association.
UCSD Project RISHI students have also attended the prestigious Clinton Global Initiative University conferences in 2011 - 2014 gaining acceptance to these conferences based on our projects (known as commitments at the conference). This conference provides a great opportuntity for UCSD Project RISHI members to meet other motivated college students like themselves, learn about different types of commitments, network with people interested in similar work, and hear luminaries in their respective fields speak about all aspects of philanthropy.

                    </p>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-4 text-center" >
                    <i class="fa fa-star-o big-icon "></i>


                </div>

            </div>
        </div>
    </div>
    <!--./ ABOUT SECTION END -->
    <div class="donars-section">
        <div class="overlay">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-12 col-md-12 ">
                        <div id="testimonials" class="carousel slide" data-ride="carousel">

                            <ol class="carousel-indicators">
                                <li data-target="#testimonials" data-slide-to="0" class=""></li>
                                <li data-target="#testimonials" data-slide-to="1" class=""></li>
                                <li data-target="#testimonials" data-slide-to="2" class="active"></li>
                            </ol>

                            <div class="carousel-inner">
                                <div class="item">
                                    <div class="container center">
                                        <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">

                                            <h4><i class="fa fa-quote-left"></i>I'm Shivani Patel and am from Bakersfield, CA. I'm currently a sophomore at UCSD and this is my second year being a part of Project Rishi! I'm a human biology major in Revelle College and hope to have a career in the medical field some day. In my free time I love to dance and read. I'm also slightly a shopaholic and it’s a serious problem! <i class="fa fa-quote-right"></i></h4>
                                            <div class="user-img pull-right">
                                                <img src="assets/img/Shivani.jpg" alt="" class="img-circle image-responsive">
                                            </div>
                                            <h5 class="pull-right"><strong class="c-black">Shivani Patel - VP</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="container center">
                                        <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">
                                            <h4><i class="fa fa-quote-left"></i>I'm Shivani Patel and am from Bakersfield, CA. I'm currently a sophomore at UCSD and this is my second year being a part of Project Rishi! I'm a human biology major in Revelle College and hope to have a career in the medical field some day. In my free time I love to dance and read. I'm also slightly a shopaholic and it’s a serious problem!<i class="fa fa-quote-right"></i></h4>
                                            <div class="user-img pull-right">
                                                <img src="assets/img/Shivani.jpg" alt="" class="img-circle image-responsive">
                                            </div>
                                            <h5 class="pull-right"><strong class="c-black">Shivani Patel - VP</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="item active">
                                    <div class="container center">
                                        <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">
                                            <h4><i class="fa fa-quote-left"></i>I'm Shivani Patel and am from Bakersfield, CA. I'm currently a sophomore at UCSD and this is my second year being a part of Project Rishi! I'm a human biology major in Revelle College and hope to have a career in the medical field some day. In my free time I love to dance and read. I'm also slightly a shopaholic and it’s a serious problem!<i class="fa fa-quote-right"></i></h4>
                                            <div class="user-img pull-right">
                                                <img src="assets/img/Shivani.jpg" alt="" class="img-circle image-responsive">
                                            </div>
                                            <h5 class="pull-right"><strong class="c-black">Shivani Patel - VP</strong></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--./ DONARS TESTIMONIALS END -->
    <div id="port-folio" class="pad-top-botm" >
        <div class="container">
            <div class="row text-center ">
                <div data-wow-delay="0.1s" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 wow rollIn animated">
                    <h2><strong>GALLERY </strong></h2>
                    <p class="sub-head">Check out some of our images from over the years here.</p>
                    
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-4 col-md-4 col-sm-4 ">

                    <div class="portfolio-item wow rotateIn animated" data-wow-delay="0.13s">


                        <img src="assets/img/portfolio/g.jpg" class="img-responsive " alt="" />
                        <div class="overlay">
                            <p>
                                PROJECT TITLE HERE
                            </p>
                            <a class="preview  " title="Image Title Here" href="assets/img/portfolio/g.jpg"><i class="fa fa-search-plus fa-5x"></i></a>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 ">

                    <div class="portfolio-item wow rotateIn animated" data-wow-delay="0.16s">


                        <img src="assets/img/portfolio/b.jpg" class="img-responsive " alt="" />
                        <div class="overlay">
                            <p>
                                PROJECT TITLE HERE
                            </p>
                            <a class="preview " title="Image Title Here" href="assets/img/portfolio/b.jpg"><i class="fa fa-search-plus fa-5x"></i></a>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 ">

                    <div class="portfolio-item wow rotateIn animated" data-wow-delay="0.2s">


                        <img src="assets/img/portfolio/c.jpg" class="img-responsive " alt="" />
                        <div class="overlay">
                          <p>                               
                                PROJECT TITLE HERE
                            </p>
                            <a class="preview " title="Image Title Here" href="assets/img/portfolio/c.jpg"><i class="fa fa-search-plus fa-5x"></i></a>

                        </div>
                    </div>
                </div>

            </div>

            <div class="row " style="padding-top: 50px;">
                <div class="col-lg-4 col-md-4 col-sm-4 ">

                    <div class="portfolio-item wow rotateIn animated" data-wow-delay="0.23s">


                        <img src="assets/img/portfolio/d.jpg" class="img-responsive " alt="" />
                        <div class="overlay">
                           <p>
                                PROJECT TITLE HERE
                            </p>
                            <a class="preview  " title="Image Title Here" href="assets/img/portfolio/d.jpg"><i class="fa fa-search-plus fa-5x"></i></a>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 ">

                    <div class="portfolio-item wow rotateIn animated" data-wow-delay="0.26s">


                        <img src="assets/img/portfolio/e.jpg" class="img-responsive " alt="" />
                        <div class="overlay">
                            <p>
                                PROJECT TITLE HERE
                            </p>
                            <a class="preview " title="Image Title Here" href="assets/img/portfolio/e.jpg"><i class="fa fa-search-plus fa-5x"></i></a>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 ">

                    <div class="portfolio-item wow rotateIn animated" data-wow-delay="0.3s">


                        <img src="assets/img/portfolio/h.jpg" class="img-responsive " alt="" />
                        <div class="overlay">
                          <p>
                                PROJECT TITLE HERE
                            </p>
                            <a class="preview " title="Image Title Here" href="assets/img/portfolio/h.jpg"><i class="fa fa-search-plus fa-5x"></i></a>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <!--./ GALLERY/PORTFOLIO SECTION END -->
    <div id="help" >
        <div class="overlay">
            <div class="container">
                <div class="row text-center">
                    <div data-wow-delay="0.1s" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 wow rollIn animated">
                        <h2><strong>HOW YOU CAN HELP ?</strong></h2>
                        <p class="sub-head">There are many ways you can be involved! We have positions open in our Fundraising, Marketing, and Project Planning committees. If you are interested in writing and in global public health, we are looking for more writers for our Blog. You can also sign up to be a volunteer at our events. If you have any questions or concerns, please send us an email! To learn more about these opportunities, come to our GBMs and Project Planning meetings.</p>
                    </div>
                </div>
                <div class="row ">

                    <div class="col-lg-6 col-lg-offset-1  col-md-6 col-md-offset-1">
                        <iframe src="https://player.vimeo.com/video/36895817" class="vedio-style wow rotateIn animated" data-wow-delay="0.13s"></iframe>
                    </div>

                    <div class="col-lg-4 col-md-4" style="padding-top: 50px;">

                        <div class="media wow rotateIn animated" data-wow-delay="0.16s">
                            <div class="pull-left">
                                <i class="fa fa-star-o fa-4x  "></i>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">Come on the Summer Trip</h3>
                                <p>
                                    Travel to India during the summer to get hands-on, invaluable experience in the villages. Carry out the various pre-planned projects, wound-wrap at the leprosy hospital, and much more!
                                </p>

                            </div>
                        </div>
                        <div class="media wow rotateIn animated" data-wow-delay="0.2s">
                            <div class="pull-left">
                                <i class="fa fa-history fa-4x  "></i>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">Donate to the Cause</h3>
                                <p>
                                    Donate to our cause using the form above! This is the most direct way to help with our endeavours.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    </div>
    <!--./ HELP SECTION END -->
    <div id="contact" >
        <div class="container">
            <div class="row text-center">
                <div data-wow-delay="0.1s" class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 wow rollIn animated">
                    <h2><strong>CONTACT US </strong></h2>
                    <p class="sub-head">Please use the form below to contact us with an inquiries that you may have.</p>

                    <p class="sub-head  wow rotateIn animated" data-wow-delay="0.13s"><strong>ADDRESS :</strong> 9500 Gilman Drive, San Diego, CA 92093</p>
                </div>
            </div>
            <div class="row  text-center wow rotateIn animated" data-wow-delay="0.13s">
                <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    <a href="http://www.facebook.com/groups/ucsdprojectrishi/">  <img src="assets/img/Social/facebook.png" alt="" /> </a>
                     <a href="http://twitter.com/SDProjectRishi"> <img src="assets/img/Social/twitter.png" alt="" /></a>
                     <a href="http://www.flickr.com/photos/ucsdprojectrishi"> <img src="assets/img/Social/flickr.png" alt="" /></a>
                    </div>
                </div>
            <div class="row pad-top-botm">
                <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    <form action = "index.php" method="POST">
                        <div class="form-group">
                            <input id = "name" name = "name" type="text" class="form-control wow rotateIn animated" data-wow-delay="0.16s" required="required" placeholder="Your Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
                        </div>
                        <div class="form-group">
                            <input id = "email" name = "email" email = "email" type="text" class="form-control wow rotateIn animated" required="required" data-wow-delay="0.2s" placeholder="Your Email" value="<?php echo htmlspecialchars($_POST['email']); ?>">
                        </div>
                        <div class="form-group">
                            <textarea name="message"  required="required" data-wow-delay="0.23s" class="wow rotateIn animated form-control" style="min-height: 150px;" placeholder="Message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
                        </div>
                        <div class="form-group">
                            <button id ="submit" name = "submit" value="Send" type="submit" class="btn btn-success btn-block btn-lg wow rotateIn animated " data-wow-delay="0.26s">SUBMIT REQUEST</button>
                        </div>

                    </form>
                </div>

            </div>
            
        </div>
    </div>
    <!--./ CONTACT SECTION END -->
    <div id="footser-end">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                 &copy; 2014 UCSD Project RISHI | by <a href="http://www.shivam.info/" style="color:#fff;" target="_blank" >Shivam Sharma</a>
                </div>
            </div>

        </div>
    </div>
    <!--./ FOOTER SECTION END -->
    <!--  Jquery Core Script -->
    <script src="assets/js/jquery-1.10.2.js"></script>
    <!--  Core Bootstrap Script -->
    <script src="assets/js/bootstrap.js"></script>
     <!--  WOW Script -->
    <script src="assets/js/wow.min.js"></script>
    <!--  Scrolling Script -->
    <script src="assets/js/jquery.easing.min.js"></script>
    <!--  PrettyPhoto Script -->
    <script src="assets/js/jquery.prettyPhoto.js"></script>
    <!--  Custom Scripts -->
    <script src="assets/js/custom.js"></script>
   
</body>
</html>

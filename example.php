<html><head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>A simple DIY responsive slideshow made with HTML5, CSS3, and JavaScript</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="http://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:700" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="css/demostyles.css">
        <link rel="stylesheet" href="css/simple-slideshow-styles.css">
    </head>
    <body class=" hasGoogleVoiceExt">
        <!--[if lt IE 8]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

<div class="bss-slides">
    <figure>
        <img src="images/school.jpg" width="100%" />
        <figcaption>Caption goes here</figcaption> 
    </figure>
    <figure>
        <img src="images/gazebo.jpg" width="100%" />
        <figcaption>Caption goes here</figcaption> 
    </figure>
    <figure>
        <img src="images/dragon.jpg" width="100%" />
        <figcaption>Caption goes here</figcaption> 
    </figure>
</div>
<div class="content">
<h2>What is it?</h2>

<p>It's a fairly basic slideshow, written in javascript. This is a dual-purpose project, it's meant to be something you can drop right into your page and use if you so choose, but it's also meant as an example/tutorial script showing how to build a simple DIY slideshow from scratch on your own. <a href="http://themarklee.com/2014/10/05/better-simple-slideshow/">Here is a tutorial/walkthrough</a>.</p>
    
</div> <!-- // content -->   
<footer>Example photos are property of their respective owners, all code is <a href="https://github.com/leemark/better-simple-slideshow/blob/gh-pages/LICENSE">freely licensed for your use</a>. <br>Made especially for you by <a href="http://themarklee.com">Mark Lee</a> aka <a href="http://twitter.com/@therealmarklee">@therealmarklee</a> <br><span>☮ + ♥</span></footer>        
<script src="js/hammer.js"></script><!-- for swipe support on touch interfaces -->
<script src="js/better-simple-slideshow.js"></script>
<script>
var opts = {
    auto : {
        speed : 3500, 
        pauseOnHover : true
    },
    fullScreen : false, 
    swipe : true
};
makeBSS('.bss-slides', opts);

</script>


</body></html>
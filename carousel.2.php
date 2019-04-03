<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <style>

.carousel-control.left, .carousel-control.right {
  background: none !important;
  filter: progid: none !important;
  outline: 0;
 }
.carousel .carousel-control {
  visibility: hidden;
}
.carousel:hover .carousel-control {
  visibility: visible;
}
  </style>
</head>
<body>
​
<div class="container-fluid">
  <div id="myCarousel" class="carousel slide" data-ride="carousel" style="margin-top: -50px">
    <!-- Indicators 
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    -->
​
    <!-- Wrapper for slides -->
    <div class="row">
    <div class="carousel-inner">
      <div class="item active">
        <img src="images/rain.jpg"  style="width:100%;">
      </div>
​
    </div>
​

  </div>
  </div>
</div>
​
</body>
</html>
​

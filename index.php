<?php
$title =  "Amirreza Portfolio" ; 
function app_display($msg) {
echo $msg ; 
}

?>
<html>
<head>
<title><?php app_display($title) ; ?></title>
<link rel="stylesheet" href="styles/template.css"  />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div class="container">
 <div class="header ">
 <?php app_display($title) ; ?>
 
 </div>
 
 <div class="left mobile"></div>
 <div class="right mobile"></div>
 
 </div>
 
   </body>


</html>
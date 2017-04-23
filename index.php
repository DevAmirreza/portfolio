<?php
$title =  "Amirreza Portfolio" ; 
function app_display($msg) {
echo $msg ; 
}

?>
<html>
<head>
<title><?php app_display($title) ; ?></title>
<link rel="stylesheet" href="/styles/template.css"  />
</head>
<body>
 <div class="header">
 <?php app_display($title) ; ?>
 
 </div>
 
 
 
 
   </body>


</html>
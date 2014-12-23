<!DOCTYPE html>
<html>
<head>
	<meta charset=utf-8 />
	<title>Miitit ja miittigalleriat - Pulina.fi</title>
	
	<link href='http://fonts.googleapis.com/css?family=Rochester' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" media="screen" href="style.css" />
	<link rel="Shortcut Icon" href="http://pulina.fi/favicon.ico" type="image/x-icon" />	
	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>

<div id="wrapper">
<h1>Pulinamiittejä?</h1>

<p>No moroos! Tämä on sivu, joka on luotu pelkästään pulinamiittejä varten. Päivittelen tätä sivua lähinnä käsin, joten jos kaipaat muutoksia, huutele kanavalla. Täältä löydät kuvagalleriat ja mahdolliset ilmoittautumiset ja muut miitteihin liittyvät. Ilmoittautumiset tapahtuvat <a href="http://www.doodle.com">Doodlen</a> kautta ja miiteistä sovitaan erikseen <a href="http://pulina.fi">kanavalla</a>.</p>

<p>Rakkain terveisin</p>
<p class="terveiset">Rolle<p>

<?php
$fp = fopen('http://peikko.us/pulinamiitit.php', 'r');
$data = '';
while(!feof($fp)) 
   $data .= fread($fp, 4092); 
fclose($fp); 

echo $data;
?>
</div>
	
</body>
</html>

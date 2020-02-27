<?php

echo '<div class="users">';

$lines = file ('https://peikko.us/irc-nicklist.txt');

// Siirretty ministats.php-tiedostoon.
//
//$count = count($lines);
//
//echo '<span class="users-title-text">Juuri nyt pulisee <strong>'.$count.'</strong> käyttäjä';
//if ($count == 1) { echo ''; } else { echo 'ä'; }
//echo ':</span><br />';

echo '<div class="nicklist" id="pulisijat" style="display:none;">';
foreach ($lines as $line_num => $line) {

$korvattavat = array(
'/\@.*/',
'/\\+.*/',
'/\rolle/',
'/kummitus/',
'/Meteorologi/',
'/\mustikkasoppa/',
'/\j-tek/',
'/Avaruusnuija/',
'/hekez/',
'/.*PassengeR/',
'/.*samwise/',
'/siilis/',
'/Reijo/',
'/Eponyymi/'
); 
$tilalle = array(
"<b style=\"color:#E02F23;\">$0</b>",
"<b style=\"color:#2376E0;\">$0</b>",
'<a href="http://pulina.info/arkisto/author/admin/">rolle</a>',
'<a class="botti" href="http://pulina.info/komennot">kummitus</a>',
'<a href="http://pulina.info/komennot" class="botti">Meteorologi</a>',
'<a href="http://pulina.info/arkisto/author/mustikkasoppa/">mustikkasoppa</a>',
'<a href="http://pulina.info/arkisto/author/j-tek/">j-tek</a>',
'<a href="http://pulina.info/arkisto/author/Avaruusnuija/">Avaruusnuija</a>',
'<a href="http://pulina.info/arkisto/author/hekez/">hekez</a>',
'<a href="http://pulina.info/arkisto/author/PassengeR/">PassengeR</a>',
'<a href="http://pulina.info/arkisto/author/samwise/">samwise</a>',
'<a href="http://pulina.info/arkisto/author/siilis/">siilis</a>',
'<a href="http://pulina.info/arkisto/author/Reijo/">Reijo</a>',
'<a href="http://pulina.info/arkisto/author/Eponyymi/">Eponyymi</a>'
); 
$hieno = preg_replace($korvattavat, $tilalle, $line);

echo  ($hieno)  . ", \n";
}
echo '</div>';
echo '</div>';
?>

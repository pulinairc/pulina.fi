<?php

echo '<div class="scroller">';
$scroller=file('http://peikko.us/lastlog-pulina.php');
foreach ($scroller as $scrolleri)  {
echo nl2br($scrolleri);
}
echo '</div>';
?>

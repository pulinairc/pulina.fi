<?php

echo '<div class="scroller">';
$scroller=file('https://peikko.us/lastlog-pulina.php');
foreach ($scroller as $scrolleri)  {
echo nl2br($scrolleri);
}
echo '</div>';
?>

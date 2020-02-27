<?php
require_once('simplehtmldom/simple_html_dom.php');
echo '<div class="scroller">
<ul>';
$scroller = file_get_html('https://peikko.us/lastlog-pulina-2014.php');
echo $scroller;
echo '
</ul>
</div>';
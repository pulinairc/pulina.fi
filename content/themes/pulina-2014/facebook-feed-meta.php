<?php
// /* =Tarvitsee facebook-feed.php -tiedoston toimiakseen!
// -------------------------------------------------------------- */

        // /* =META
        // -------------------------------------------------------------- */

echo '<p class="facebook-meta">';

// Aika
if($showtime == true) { 
echo '<span class="fb-meta-item">';

                echo ' <span class="fa fa-clock-o"></span> '.aika(abs(strtotime($post['created_time'] . " GMT")), time()) . " sitten. ";

echo '</span>';
}

// Tykkäykset
if($showlikes == true) { 
echo '<span class="fb-meta-item">';
            
            if(isset($post['likes'])) {

                echo ' <span class="fa fa-thumbs-up"></span> '.count($post['likes']['data']).' tykkäsi lukemastaan.
                ';

            } else {
                echo ' <span class="fa fa-thumbs-down"></span> Ei tykkäyksiä.';
            }
echo '</span>';
}

echo '<a href="' . $posturl .  '/' . $postid. '">Käy tykkäämässä.</a>';

// Kommentit
if($showcomments == true) { 
echo '<span class="fb-meta-item">';
            
            if(isset($post['comments'])) {
               
            $kommenttilaskuri = 0;
            foreach($post['comments']['data'] as $comment) {
                $kommenttilaskuri++;
                $kommenttilaskuri += $comment['message']; 
            }

                echo $kommenttilaskuri.' kommentti';
                if($kommenttilaskuri > "1") { echo 'a'; }
                echo '.';

            } else {
                echo 'Ei yhtään kommenttia.'; 
            }
echo '</span>';
}

echo '</p>';
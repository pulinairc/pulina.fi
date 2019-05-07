<?php

/* Works out the time since the entry post, takes a an argument in unix time (seconds) */
function aikaakulunut($original) {
    // array of time period chunks
    $chunks = array(
        array(60 * 60 * 24 * 365 , 'vuosi'),
        array(60 * 60 * 24 * 30 , 'kuukausi'),
        array(60 * 60 * 24 * 7, 'viikko'),
        array(60 * 60 * 24 , 'päivä'),
        array(60 * 60 , 'tunti'),
        array(60 , 'minuutti'),
    );
    
    $today = time(); /* Current unix time  */
    $since = $today - $original;
    
    // $j saves performing the count function each time around the loop
    for ($i = 0, $j = count($chunks); $i < $j; $i++) {
        
        $seconds = $chunks[$i][0];
        $name = $chunks[$i][1];
        
        // finding the biggest chunk (if the chunk fits, break)
        if (($count = floor($since / $seconds)) != 0) {
            // DEBUG print "<!-- It's $name -->\n";
            break;
        }
    }
    
	if ($count > 1 & $name == "päivä") { 
		$print = ($count == 1) ? '1 '.$name : "$count {$name}ä";
	} elseif ($count > 1 & $name == "vuosi") {
		$print = ($count == 1) ? '1 '.$name : "$count vuotta";
	} elseif ($count > 1 & $name == "kuukausi") {
		$print = ($count == 1) ? '1 '.$name : "$count kuukautta";
	} else {
		$print = ($count == 1) ? '1 '.$name : "$count {$name}a";
	}
	
    
    if ($i + 1 < $j) {
        // now getting the second item
        $seconds2 = $chunks[$i + 1][0];
        $name2 = $chunks[$i + 1][1];
        
        // add second item if it's greater than 0
        if (($count2 = floor(($since - ($seconds * $count)) / $seconds2)) != 0) {
            
			if($count2 > 1 & $name2 == "päivä") {
				$print .= ($count2 == 1) ? ', 1 '.$name2 : ", $count2 {$name2}ä";
			} elseif ($count2 > 1 & $name2 == "kuukausi") {
				$print .= ($count2 == 1) ? ', 1 '.$name2 : ", $count2 kuukautta";
			} else {
				$print .= ($count2 == 1) ? ', 1 '.$name2 : ", $count2 {$name2}a";
			}
			
        }
    }
    return $print;
}

//Tue Apr 8 13:11:22 2008
$pulinaluotu = mktime('13','11','22','04','08','08');
echo aikaakulunut($pulinaluotu);

?>

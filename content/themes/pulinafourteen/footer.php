<?php
/**
 * Footer.
 *
 * @package pulinafourteen
 */
?>

				<div class="mukaan">
					<div>
						<p><a href="http://webchat.quakenet.org/?channels=#pulina"><strong>Tästä</strong> pulisemaan <b>heti</b> webchatin kautta! Ilmaista ja helppoa suoraan selaimestasi.</a></p>
					</div>

					<div>
						<a href="<?php echo get_home_url(); ?>/irkkiin#paremmin" class="btn">Haluan irkata oikeaoppisesti</a>
					</div>
				</div>
				
	<footer id="colophon" class="site-footer">

		<p>Kanavalla irkkaavat tekevät Pulinan &mdash; 2008-<?php echo date('Y'); ?> - Sivut tarjoaa <a href="http://rolle.io">rolle</a></p>

	</footer><!-- #colophon -->

</div>

</div>

<?php wp_footer(); ?>

<?php if(is_front_page() || is_home() || is_page('1008') ) { ?>
<?php 
// Paikalla juuri nyt:
$paikalla = file_get_html('https://www.pulina.fi/statsit/index.html');
foreach($paikalla->find('.paikalla') as $numero);

// Käyttäjäpiikki:
$peak = file_get_html('https://peikko.us/peak.db');
$luku = explode('!!!',$peak);
$oikealuku = explode('@',$luku[1]);
$peaknumero = $oikealuku[0];

// Tänään sanoja kertynyt
$raakapojot = file_get_html('https://peikko.us/toptod.save');
$today = date('d-m-Y');
$numerot = preg_replace('/'.addslashes($today).'/',"", $raakapojot); 
$nummerot = preg_replace("/[^0-9]/"," ", $numerot); 
$piste = explode(" ", $nummerot);
$todaystats = array_sum($piste);

// Käyttäjämäärä yhteensä
$filu = file_get_html('https://www.pulina.fi/statsit/index.html');
$bold = $filu->find('b');
$visitors = $bold[0];

// Kanavan ikä päivissä
$luomispaiva=08;
$luomiskuukausi=04;
$luomisvuosi=2008;
$nyt=time();
$kanavaluotu=mktime(0,0,0,$luomiskuukausi,$luomispaiva,$luomisvuosi);
$luomispvm=$nyt-$kanavaluotu;
$channelcreated=$luomispvm / 86400; 
$kanavanikapaivissa=round($channelcreated);

// Rivejä yhteensä
preg_match('/Rivien yhteismäärä: (?P<digit>\d+)/', $filu, $matches);
$pulistumaara = $matches[1];

// Miehiä
$miehet = $filu->find('/html/body/div/table[17]/tbody/tr[2]/td[4]', 0);
$miehet_array = explode(", ", $miehet);
$miehet_maara = count($miehet_array);

// Naisia
$naiset = $filu->find('/html/body/div/table[17]/tbody/tr[3]/td[4]', 0);
$naiset_array = explode(", ", $naiset);
$naiset_maara = count($naiset_array);
?>
<script>
$(document).ready(function() {

$(".progressBar").load('<?php echo get_template_directory_uri(); ?>/inc/tanaan-pulistu.php');
   var refreshId = setInterval(function() {
      $(".progressBar").load('<?php echo get_template_directory_uri(); ?>/inc/tanaan-pulistu.php');
      $(".irclog").load('<?php echo get_template_directory_uri(); ?>/inc/scroller.php');
   }, 10000);
   $.ajaxSetup({ cache: true });
   
   //Chromelle, ettei lataa loputtomiin:
   // setTimeout("window.stop()",30000);

$('.paikalla').animateNumber({
number: '<?php echo strip_tags($numero); ?>',
easing: 'linear',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
1500
)

$('.peak').animateNumber({
number: '<?php echo strip_tags($peaknumero); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
2000
)

$('.kayttajat-yhteensa .numero b').animateNumber({
number: '<?php echo strip_tags($visitors); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
2500
)

$('.kanavan-ika .numero').animateNumber({
number: '<?php echo strip_tags($kanavanikapaivissa); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
3000
)

$('.rivit .numero').animateNumber({
number: '<?php echo strip_tags($pulistumaara); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
3500
)

$('.miehet .numero').animateNumber({
number: '<?php echo strip_tags($miehet_maara); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
4000
)

$('.naiset .numero').animateNumber({
number: '<?php echo strip_tags($naiset_maara); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
4500
)

$('.pulinat').goalProgress({
    goalAmount: 8000,
    currentAmount: <?php echo round($todaystats); ?>,
    textBefore: '',
    textAfter: ''
});

});
</script>
<?php } ?>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-34683312-1', 'auto');
  ga('send', 'pageview');

</script>

</body>
</html>
</div>

<div id="footer"></div>
<div id="credits">Sivusto on <strong><a href="http://rollemaa.org">rollen</a></strong> käsialaa. &copy; 2008-<?php echo date('Y'); ?>

<?php
//if (isset($_COOKIE['wordpressuser_' . COOKIEHASH])) {
get_currentuserinfo() ;
global $user_identity, $user_ID, $user_level, $user_email;
?>

<?php if (is_user_logged_in()){ ?>
<?php if ($user_level == "10") { ?>

&ndash; <a href="<?php echo get_option('home'); ?>/wp-admin/post-new.php">Kirjoita uusi</a> / <a href="<?php echo wp_logout_url(); ?>">Kirjaudu ulos</a>.

<?php } else { ?>
<?php } ?>
<?php } ?>
<?php if (is_user_logged_in()){ ?>
<?php } else { ?>
&ndash; <a href="<?php echo wp_login_url(); ?>">Kirjaudu sisään</a>
<?php } ?>
</div>

<div id="socialweb"><a href="http://www.facebook.com/pages/pulina-IRC-kanava-Quakenetissa/116081701766780" title="Linkki pulinan Facebook-sivulle" id="pulinafb"><span>Pulina Facebookissa</span></a><span>, </span><a href="http://twitter.com/pulinainfo" title="Linkki pulinan Twitter-sivulle" id="pulinatwitter"><span>Pulina Twitterissä</span></a><span>, </span><a href="http://wakoopa.com/teams/pulina" title="Linkki pulinan Wakoopa-sivulle" id="pulinawakoopa"><span>Pulina Wakoopassa</span></a><span>, </span><a href="http://www.last.fm/group/%2523pulina" title="Linkki pulinan Last.fm-sivulle" id="pulinalastfm"><span>Pulina Last.fm:ssä</span></a></div>

<!--FBML:n validointi-->
<script type="text/javascript" src="http://www.pulina.fi/fbObjectValidationV4.js"></script>
<div id="fb-root"></div>

     <script type="text/javascript">
      window.fbAsyncInit = function() {
	FB.init({appId:'116081701766780', status: true, cookie: true, xfbml: true}); 
	}; 
	(function() { 
	var e = document.createElement('script'); e.async = true; 
	e.src = document.location.protocol + 
	'//connect.facebook.net/fi_FI/all.js'; 
	document.getElementById('fb-root').appendChild(e);
	 }());
	</script>

<!-- Start of Woopra Code -->
<script type="text/javascript">
function woopraReady(tracker) {
    tracker.setDomain('pulina.fi');
    tracker.setIdleTimeout(300000);
    tracker.track();
    return false;
}
(function() {
    var wsc = document.createElement('script');
    wsc.src = document.location.protocol+'//static.woopra.com/js/woopra.js';
    wsc.type = 'text/javascript';
    wsc.async = true;
    var ssc = document.getElementsByTagName('script')[0];
    ssc.parentNode.insertBefore(wsc, ssc);
})();
</script>
<!-- End of Woopra Code -->
	
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-34683312-1']);
  _gaq.push(['_setDomainName', 'pulina.fi']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</body>
</html>

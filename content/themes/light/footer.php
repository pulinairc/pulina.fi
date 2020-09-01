<?php
/**
 * Footer.
 *
 * @package light
 */
?>

<footer class="site-footer">
	<div class="col">
		<p>Kanavalla irkkaavat tekevät pulinan.</p>
	</div>
	<div class="col">
		<p>Est 2008. <code>/join #pulina</code></p>
	</div>	
</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</div><!-- #content -->

<script>
$( document ).ready(function() {
$('#toptod').fadeIn();
$("#toptod").load('https://peikko.us/toptod-content.php');
var refreshId = setInterval(function() {
$("#toptod").load('https://peikko.us/toptod-content.php',
  function() {
    $("#content").fadeIn();
}
);}, 1000);
});
</script>

</body>
</html>

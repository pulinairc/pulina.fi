<div class="paluuviitealue">
<?php
 
// TRACKBACKS AND PINGBACKS LAYOUT
if ($comments) : ?>

	<ol class="pingbacklist">

	<?php foreach ($comments as $comment) : ?>

		<?php
		$commentType = get_comment_type();
		if($commentType != 'comment') :
		?>
<?php $i++ ?>
<?php if($i == 1) { ?>
<h2 class="pingback-otsikko">Mainittu muualla:</h2>
<?php } ?>


<li id="comment-<?php comment_ID() ?>" class="trackbackItem">
<?php comment_author_link(); ?>
</li>

		<?php endif;/* end if NOT comment check */ ?>

	<?php endforeach; /* end for each comment */ ?>

	</ol>

<?php 
// END: TRACKBACKS AND PINGBACKS LAYOUT
endif; ?>
</div>

<?php // Do not delete these lines
if ('comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
die ('Älä lataa tätä sivua suoraan osoitteesta, sillä se ei toimi sillä tavalla. Kiitos.');

if (!empty($post->post_password)) { // if there's a password
if ($_COOKIE['wp-postpass_' . COOKIEHASH] != $post->post_password) {  // and it doesn't match the cookie
?>

Tämä artikkeli on suojattu salasanalla. Ole hyvä ja anna salasana lukeaksesi kommentit.

<?php return; } } /* This variable is for alternating comment background */
$oddcomment = 'alt'; ?>

<?php if ($comments) : ?>

<a name="comments" href="#comments"></a>
<ol class="commentlist">
<?php foreach ($comments as $comment) : ?>
	<?php $commentType = get_comment_type(); if($commentType == 'comment') : ?>

<li class="<?php if ($comment->comment_author == "admin" or $comment->comment_author == "j-tek" or $comment->comment_author == "Gocom" or $comment->comment_author == "hekez" or $comment->comment_author == "Rolle" or $comment->comment_author_email == "rolle@rollemaa.org" or $comment->comment_author_email == "roni.laukkarinen@gmail.com") { echo "authorcomment"; } else if ($oddcomment) { echo "odd-comment"; } else { echo "commentinfospace"; } ?>" id="comment-<?php comment_ID() ?>">

<div class="gravatararea" style="background:url('<?php //gravatar("", 30, "http://www.gravatar.com/avatar.php?size=30&default=http://www.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=30"); ?>') no-repeat;"></div>

                        <span class="commentauthor">&lt;<?php comment_author_link() ?>&gt;</span>

                        <div class="commenttext"><?php comment_text() ?></div>

                        <?php if ($comment->comment_approved == '0') : ?>
                        <p class="moderation"><b>Natsipolitiikka päällä:</b> Kommenttisi odottaa ylläpidon (Rollen) hyväksyntää. Rolle ei päästä läpi kommenttia, joka sisältää <i>hänen mielestään</i> turhaa jauhamista, liian negatiivista, provosoivaa tai loukkaavaa tekstiä. Jos jo ensimmäiset sanat aiheuttavat pahaa oloa <u>Rolle ei välttämättä lue viestiäsi ollenkaan</u>, vaan poistaa sen suoraan julkaisemattomana ja lukemattomana.</p>
                        <?php endif; ?>


                        <br /><span class="commentdatespace">
                       <a href="#comment-<?php comment_ID() ?>" title=""><?php echo (get_comment_date('j\. F\t\a Y')); ?> kello <?php comment_time('G:i') ?></a> <?php edit_comment_link('(muokkaa)','',''); ?>
                       </span>
                </li><?php /* Changes every other comment to a different class */
                if ('alt' == $oddcomment) $oddcomment = '';
                else $oddcomment = 'alt'; ?>

<?php endif;/* end if comment check */ ?>

        <?php endforeach; /* end for each comment */ ?>
        </ol>

 <?php else : // this is displayed if there are no comments so far ?>

  <?php if ('open' == $post->comment_status) : ?>
                <!-- If comments are open, but there are no comments. -->

         <?php else : // comments are closed ?>
                <!-- If comments are closed. -->
                <p class="nocomments">Comments are closed.</p>

        <?php endif; ?>
<?php endif; ?>

<?php if ('open' == $post->comment_status) : ?>

<a href="#respond" name="respond"></a>

<?php if ( get_option('comment_registration') && !$user_ID ) : ?>
<p>Sinun täytyy olla <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php the_permalink(); ?>">kirjautuneena sisään</a> lisätäksesi kommentin.</p>
<?php else : ?>

<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">

<div class="box1">

<?php if ( $user_ID ) : ?>

<br /><p class="kirj">Olet kirjautunut käyttäjänä <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><b><?php echo $user_identity; ?></b></a>. <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?action=logout&redirect_to=<?php echo get_settings('siteurl'); ?>/index.php" title="Kirjaudu ulos tällä tunnuksella">Kirjaudu ulos</a>, <i><a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php">muokkaa profiiliasi</a></i>.</p>

<?php else : ?>

<p class="nimi"><label for="author">Nimi/-merkki: <?php if ($req) echo "<b class=\"required\">*</b>"; ?></label></p>
<p class="inputtext"><input type="text" name="author" id="author" value="<?php echo $comment_author; ?>" size="22" tabindex="1" /></p>

<p class="maili"><label for="email">Sähköpostiosoite: <?php if ($req) echo "<b class=\"required\">*</b>"; ?></label></p>
<p class="inputtext"><input type="text" name="email" id="email" value="<?php echo $comment_author_email; ?>" size="22" tabindex="2" /></p>

<p class="wwwsivu"><label for="url">Kotisivu:</label></p>
<p class="inputtext"><input type="text" name="url" id="url" value="<?php echo $comment_author_url; ?>" size="22" tabindex="3" /></p>

<?php endif; ?>

</div>
<div class="box2">

<p class="mielipide"><label for="comment">Mielipiteesi: <?php if ($req) echo "<b class=\"required\">*</b>"; ?></label></p>
<p><textarea name="comment" id="comment" cols="100%" rows="10" tabindex="4"></textarea></p>

<p class="nappi"><input name="submit" type="submit" id="submit" tabindex="5" value=" Anna mennä! " />
<input type="hidden" name="comment_post_ID" value="<?php echo $id; ?>" />
</p>
<?php do_action('comment_form', $post->ID); ?>

</div>
</form>

<br style="clear:both;" />

<?php endif; // If registration required and not logged in ?>
<?php endif; // if you delete this the sky will fall on your head ?>


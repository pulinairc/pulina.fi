<?php
/**
 * Kommentit.
 *
 * @package pulinafourteen
 */

require('comment-callback.php');
require('pingback-callback.php');

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area">
 
  <?php 
    /* Don't forget to check if comments are open 
     * or if there are comments to display.
     */
  ?>

  <?php if ( acme_post_has( 'pings', $post->ID ) ) : ?>

 	<h3><?php _e( 'Paluuviitteet', 'pulinafourteen' ); ?></h3> 	
  <?php endif; ?>
 
		<div class="ping-list">
		<?php
			wp_list_comments(
				array(
					'type'       => 'pings',
					'callback'   => 'acme_pings',
					'avatar_size'=> 64,
					'style'		 => 'div'
				)
			);
		?>
		</div><!-- .ping-list -->

  <h3><?php comments_number('Ei kommentteja. Kommentoi ensimmäisenä?', 'Vasta yksi kommentti. Vastaa kommenttiin?', '% kommenttia. Lisää omasi joukkoon?' );?></h3>

		<div class="comment-list">
		<?php
			wp_list_comments(
				array(
					'type'       => 'comment',
					'callback'   => 'acme_comment',
					'avatar_size'=> 64,
					'style'		 => 'div'
				)
			);
		?>
		</div><!-- .comment-list -->
	
	<?php
		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() && '0' != get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) :
	?>
		<p class="no-comments"><?php _e( 'Kommentointi on suljettu.', 'pulinafourteen' ); ?></p>
	<?php endif; ?>

	<?php 

$args = array(
);

	comment_form($args); ?>

</div><!-- #comments -->
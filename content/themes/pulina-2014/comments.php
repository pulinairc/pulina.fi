<?php
/**
 * Kommentit.
 *
 * @package pulina-2014
 */

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

	<?php if ( have_comments() ) : ?>
		<h2 class="comments-title">
			<?php
				printf( _nx( 'Yksi kommentti', '%1$s kommenttia', get_comments_number(), 'comments title', 'pulina-2014' ),
					number_format_i18n( get_comments_number() ), '<span>' . get_the_title() . '</span>' );
			?>
		</h2>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // are there comments to navigate through ?>
		<nav id="comment-nav-above" class="comment-navigation" role="navigation">
			<h1 class="screen-reader-text"><?php _e( 'Kommenttien selaus', 'pulina-2014' ); ?></h1>
			<div class="nav-previous"><?php previous_comments_link( __( '&larr; Vanhempia kommentteja', 'pulina-2014' ) ); ?></div>
			<div class="nav-next"><?php next_comments_link( __( 'Uudempia kommentteja &rarr;', 'pulina-2014' ) ); ?></div>
		</nav><!-- #comment-nav-above -->
		<?php endif; // check for comment navigation ?>

		<ol class="comment-list">
			<?php
				wp_list_comments( array(
					'style'      => 'ol',
					'short_ping' => true,
				) );
			?>
		</ol><!-- .comment-list -->

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // are there comments to navigate through ?>
		<nav id="comment-nav-below" class="comment-navigation" role="navigation">
			<h1 class="screen-reader-text"><?php _e( 'Kommenttien selaus', 'pulina-2014' ); ?></h1>
			<div class="nav-previous"><?php previous_comments_link( __( '&larr; Vanhempia kommentteja', 'pulina-2014' ) ); ?></div>
			<div class="nav-next"><?php next_comments_link( __( 'Uudempia kommentteja &rarr;', 'pulina-2014' ) ); ?></div>
		</nav><!-- #comment-nav-below -->
		<?php endif; // check for comment navigation ?>

	<?php endif; // have_comments() ?>

	<?php
		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() && '0' != get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) :
	?>
		<p class="no-comments"><?php _e( 'Kommentointi on suljettu.', 'pulina-2014' ); ?></p>
	<?php endif; ?>

	<?php comment_form(); ?>

</div><!-- #comments -->

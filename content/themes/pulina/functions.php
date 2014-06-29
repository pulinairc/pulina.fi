<?php

function comment_count( $count ) {
	if ( ! is_admin() ) {
		global $id;
		$comments_by_type = &separate_comments(get_comments('status=approve&post_id=' . $id));
		return count($comments_by_type['comment']);
	} else {
		return $count;
	}
}
add_action('init', 'remheadlink');
function remheadlink() {
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
}
add_filter('get_comments_number', 'comment_count', 0);
?>

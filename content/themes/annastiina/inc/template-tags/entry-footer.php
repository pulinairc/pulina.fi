<?php
/**
 *  Show categories, tags, comment and edit links after post.
 *
 * @package annastiina
 */

namespace Air_Light;

function entry_footer() {
  echo '<div class="entry-footer">';

  if ( 'post' === get_post_type() && is_singular() ) :
    if ( has_category() ) : ?>
      <div class="entry-categories">
        <p class="cat">
          <?php wp_list_categories( [
            'title_li'  => false,
            'style'     => null,
            'separator' => ' ',
          ] ); ?>
        </p>
      </div>
    <?php	endif;

    $tags_list = get_the_tag_list( '', esc_attr_x( ', ', 'list item separator', 'annastiina' ) );
    if ( $tags_list ) {
      the_tags( '<ul class="tags"><li>', '</li><li>', '</li></ul>' );
    }
  endif;

  echo '</div>';
}

<?php
/**
 * WordPress functions.
 *
 * @package light
 */

/**
 * ACF options page
 */
if( function_exists('acf_add_options_page') ) {

  acf_add_options_page(array(
    'page_title'  => 'Miitit',
    'menu_title'  => 'Miitit',
    'menu_slug'   => 'miittikentat',
    'capability'  => 'edit_posts',
    'redirect'    => false
  ));

}

// Time sitten function
function time2str($ts) {
    if(!ctype_digit($ts)) {
        $ts = strtotime($ts);
    }
    $diff = time() - $ts;
    if($diff == 0) {
        return 'nyt';
    } elseif($diff > 0) {
        $day_diff = floor($diff / 86400);
        if($day_diff == 0) {
            if($diff < 60) return 'juuri nyt';
            if($diff < 120) return '1 minuutti sitten';
            if($diff < 3600) return floor($diff / 60) . ' minuuttia sitten';
            if($diff < 7200) return '1 tunti sitten';
            if($diff < 86400) return floor($diff / 3600) . ' tuntia sitten';
        }
        if($day_diff == 1) { return 'eilen'; }
        if($day_diff < 7) { return $day_diff . ' päivää sitten'; }
        if($day_diff < 31) { return ceil($day_diff / 7) . ' viikkoa sitten'; }
        if($day_diff < 60) { return 'viime kuussa'; }
        return date('F Y', $ts);
    } else {
        $diff = abs($diff);
        $day_diff = floor($diff / 86400);
        if($day_diff == 0) {
            if($diff < 120) { return 'minuutissa'; }
            if($diff < 3600) { return ' ' . floor($diff / 60) . ' minuutissa'; }
            if($diff < 7200) { return 'tunnissa'; }
            if($diff < 86400) { return ' ' . floor($diff / 3600) . ' tunnissa'; }
        }
        if($day_diff == 1) { return 'huomenna'; }
        if($day_diff < 4) { return date('l', $ts); }
        if($day_diff < 7 + (7 - date('w'))) { return 'seuraavalla viikolla'; }
        if(ceil($day_diff / 7) < 4) { return ' ' . ceil($day_diff / 7) . ' viikossa'; }
        if(date('n', $ts) == date('n') + 1) { return 'seuraavassa kuussa'; }
        return date('F Y', $ts);
    }
}

/**
 * Facebook embed shortcode
 */
function facebook_embed_func($atts) {
    extract(shortcode_atts(array(
      'href' => ''
    ), $atts));
   return '<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/fi_FI/sdk.js#xfbml=1&appId=250821831708650&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, \'script\', \'facebook-jssdk\'));</script>
<div class="fb-post" data-href="'.$href .'" data-width="640"></div>
';
}
add_shortcode('facebook_embedded_post', 'facebook_embed_func');

/**
 * Buddypress related
 */
load_plugin_textdomain('theme-my-login', false, WP_LANG_DIR );

/**
 * Log in/out links to navigation
 */
function add_login_logout_link( $items, $args ) {
  if( is_user_logged_in() ) {
    $newitems = $items;
    $newitems .= '<li class="login-logout"><a title="Kirjaudu ulos" href="'. wp_logout_url() .'"><svg width="16px" height="16px" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 896q0 156-61 298t-164 245-245 164-298 61-298-61-245-164-164-245-61-298q0-182 80.5-343t226.5-270q43-32 95.5-25t83.5 50q32 42 24.5 94.5t-49.5 84.5q-98 74-151.5 181t-53.5 228q0 104 40.5 198.5t109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5q0-121-53.5-228t-151.5-181q-42-32-49.5-84.5t24.5-94.5q31-43 84-50t95 25q146 109 226.5 270t80.5 343zm-640-768v640q0 52-38 90t-90 38-90-38-38-90v-640q0-52 38-90t90-38 90 38 38 90z" fill="#d2d2d4" /></svg> Kirjaudu ulos</a></li>';
  }
  else {
    $newitems = $items;
    $newitems .= '
    <li class="login-logout"><a href="'.get_page_link(1049).'"><svg width="16px" height="16px" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M-128 896q0-130 51-248.5t136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5-51 248.5-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5zm1408 512q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5z" fill="#d2d2d4"/></svg> Rekisteröidy</a></li>
    <li class="login-logout"><a title="Kirjaudu sisään" href="'. wp_login_url() .'"><svg width="16px" height="16px" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 896q0 156-61 298t-164 245-245 164-298 61-298-61-245-164-164-245-61-298q0-182 80.5-343t226.5-270q43-32 95.5-25t83.5 50q32 42 24.5 94.5t-49.5 84.5q-98 74-151.5 181t-53.5 228q0 104 40.5 198.5t109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5q0-121-53.5-228t-151.5-181q-42-32-49.5-84.5t24.5-94.5q31-43 84-50t95 25q146 109 226.5 270t80.5 343zm-640-768v640q0 52-38 90t-90 38-90-38-38-90v-640q0-52 38-90t90-38 90 38 38 90z" fill="#d2d2d4" /></svg> Kirjaudu sisään</a></li>';
  }

  return $newitems;
}
add_filter( 'wp_nav_menu_items', 'add_login_logout_link', 10, 2 );

/**
 * Custom pagination
 */
if ( ! function_exists( 'my_pagination' ) ) :
function my_pagination() {
    global $wp_query;

    $big = 999999999; // Need an unlikely integer

    echo paginate_links( array(
        'base'        => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
        'format'      => '?paged=%#%',
        'current'     => max( 1, get_query_var('paged') ),
        'total'       => $wp_query->max_num_pages,
        'prev_text'   => __('&larr; uudempia'),
        'next_text'   => __('vanhempia &rarr;'),
    ) );
}
endif;

/**
 * Custom uploads directory
 */
update_option( 'upload_path', untrailingslashit( str_replace( 'wp', 'media', ABSPATH ) ) );
update_option( 'upload_url_path', untrailingslashit( str_replace( 'wp', 'media', get_site_url() ) ) );
define( 'uploads', ''.'media' );
add_filter( 'option_uploads_use_yearmonth_folders', '__return_false', 100 );

/**
 * Default pages
 */
$etusivu = get_page_by_title( 'Etusivu' );
update_option( 'page_on_front', $etusivu->ID );
update_option( 'show_on_front', 'page' );
$blog   = get_page_by_title( 'Blogi' );
update_option( 'page_for_posts', $blog->ID );

/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 *
 * @param string $title Default title text for current view.
 * @param string $sep Optional separator.
 * @return string The filtered title.
 */
function light_wp_title( $title, $sep ) {
  if ( is_feed() ) {
    return $title;
  }

  global $page, $paged;

  // Add the blog name
  $title .= get_bloginfo( 'name', 'display' );

  // Add the blog description for the home/front page.
  $site_description = get_bloginfo( 'description', 'display' );
  if ( $site_description && ( is_home() || is_front_page() ) ) {
    $title .= " $sep $site_description";
  }

  // Add a page number if necessary:
  if ( $paged >= 2 || $page >= 2 ) {
    $title .= " $sep " . sprintf( __( 'Page %s', 'light' ), max( $paged, $page ) );
  }

  return $title;
}
add_filter( 'wp_title', 'light_wp_title', 10, 2 );

/**
 * Enqueue scripts and styles.
 */
function light_scripts() {

  wp_enqueue_style( 'styles', get_template_directory_uri() . '/css/global.css' );
  wp_enqueue_script( 'jquery-core' );
  wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/all.js', array(), '', true );
  wp_localize_script( 'scripts', 'screenReaderTexts', array(
		'expandMenu'            => esc_html__( 'Avaa', 'light' ),
		'collapseMenu'          => esc_html__( 'Sulje', 'light' ),
		'expandSubMenu'         => '<span class="screen-reader-text">' . esc_html__( 'Open sub menu', 'light' ) . '</span>',
		'collapseSubMenu'       => '<span class="screen-reader-text">' . esc_html__( 'Close sub menu', 'light' ) . '</span>',
	) );
}
add_action( 'wp_enqueue_scripts', 'light_scripts' );

/**
 * Theme supports
 */
add_theme_support( 'post-thumbnails' );
add_theme_support( 'automatic-feed-links' );
load_theme_textdomain( 'light', get_template_directory() . '/languages' );
load_plugin_textdomain('tribe-events-calendar', false, WP_LANG_DIR );
load_plugin_textdomain('tribe-events-calendar-pro', false, WP_LANG_DIR );

/**
 * Editable menus
 */
register_nav_menus( array(
  'primary' => __( 'Primary Menu', 'light' ),
) );

/**
 * Custom comments
 */
 function acme_post_has( $type, $post_id ) {

   $comments = get_comments('status=approve&type=' . $type . '&post_id=' . $post_id );
   $comments = separate_comments( $comments );

   return 0 < count( $comments[ $type ] );
 }

function custom_comments($comment, $args, $depth) {
  $GLOBALS['comment'] = $comment;
    $GLOBALS['comment_depth'] = $depth;
  ?>
    <li id="comment-<?php comment_ID() ?>" <?php comment_class() ?>>
        <div class="comment-author vcard"><?php commenter_link() ?></div>
        <div class="comment-meta"><?php printf(__('<span class="commentposted">Posted on %1$s at %2$s</span>', 'light'),
                    get_comment_date(),
                    get_comment_time(),
                    '#comment-' . get_comment_ID() );
                    edit_comment_link(__('Edit', 'light'), ' <span class="edit-link">', '</span>'); ?>

            <?php // echo the comment reply link
             if($args['type'] == 'all' || get_comment_type() == 'comment') :
                 comment_reply_link(array_merge($args, array(
                     'reply_text' => __('Reply','light'),
                     'login_text' => __('Log in to reply.','light'),
                     'depth' => $depth,
                     'before' => '<span class="comment-reply-link">',
                     'after' => '</span>'
                 )));
            endif;
        ?></div>
  <?php if ($comment->comment_approved == '0') _e("\t\t\t\t\t<span class='unapproved'>Your comment is awaiting moderation.</span>\n", 'light') ?>
          <div class="comment-content">
            <?php comment_text() ?>
        </div>
<?php } // end custom_comments

// Custom callback to list pings
function custom_pings($comment, $args, $depth) {
       $GLOBALS['comment'] = $comment;
        ?>
            <li id="comment-<?php comment_ID() ?>" <?php comment_class() ?>>
                <div class="comment-author"><?php printf(__('By %1$s on %2$s at %3$s', 'light'),
                        get_comment_author_link(),
                        get_comment_date(),
                        get_comment_time() );
                        edit_comment_link(__('Edit', 'light'), ' <span class="meta-sep">|</span> <span class="edit-link">', '</span>'); ?></div>
    <?php if ($comment->comment_approved == '0') _e('\t\t\t\t\t<span class="unapproved">Your trackback is awaiting moderation.</span>\n', 'light') ?>
            <div class="comment-content">
                <?php comment_text() ?>
            </div>
<?php } // end custom_pings

// Produces an avatar image with the hCard-compliant photo class
function commenter_link() {
    $commenter = get_comment_author_link();
    if ( ereg( '<a[^>]* class=[^>]+>', $commenter ) ) {
        $commenter = ereg_replace( '(<a[^>]* class=[\'"]?)', '\\1url ' , $commenter );
    } else {
        $commenter = ereg_replace( '(<a )/', '\\1class="url "' , $commenter );
    }
    $avatar_email = get_comment_author_email();
    $avatar = str_replace( "class='avatar", "class='photo avatar", get_avatar( $avatar_email, 50 ) );
    echo $avatar . ' <span class="fn n">' . $commenter . '</span>';
} // end commenter_link

/**
 * Don't count pingbacks or trackbacks when determining
 * the number of comments on a post.
 */
function comment_count( $count ) {
  global $id;
  $comment_count = 0;
  $comments = get_approved_comments( $id );
  foreach ( $comments as $comment ) {
    if ( $comment->comment_type === '' ) {
      $comment_count++;
    }
  }
  return $comment_count;
}

add_filter( 'get_comments_number', 'comment_count', 0 );

/**
 * Remove WordPress Admin Bar
 *
 * @link http://davidwalsh.name/remove-wordpress-admin-bar-css
 */
add_action('get_header', 'remove_admin_login_header');
function remove_admin_login_header() {
        remove_action('wp_head', '_admin_bar_bump_cb');
}
show_admin_bar(false);

/**
 * Navigation walker
 */
require get_template_directory() . '/nav.php';

/**
 * Search form
 */
function dude_search_form( $form ) {
    $form = '<form role="search" method="get" id="searchform" class="searchform" action="' . home_url( '/' ) . '" >
    <div><label class="screen-reader-text" for="s">' . __( 'Haku:' ) . '</label>
    <input type="text" value="' . get_search_query() . '" name="s" id="s" />
    <input type="submit" id="searchsubmit" value="'. esc_attr__( 'Search' ) .'" />
    </div>
    </form>';

    return $form;
}

add_filter( 'get_search_form', 'dude_search_form' );

/**
 * Advertisement post type
 *
 * @package light
 */

// Register Custom Post Type
function ads() {

  $labels = array(
    'name'                  => _x( 'Mainokset', 'Post Type General Name', 'light' ),
    'singular_name'         => _x( 'Mainos', 'Post Type Singular Name', 'light' ),
    'menu_name'             => __( 'Mainokset', 'light' ),
    'name_admin_bar'        => __( 'Mainokset', 'light' ),
    'archives'              => __( 'Mainos-arkistot', 'light' ),
    'attributes'            => __( 'Mainoksen attribuutit', 'light' ),
    'parent_item_colon'     => __( 'Isäntämainos:', 'light' ),
    'all_items'             => __( 'Kaikki mainokset', 'light' ),
    'add_new_item'          => __( 'Lisää mainos', 'light' ),
    'add_new'               => __( 'Lisää mainos', 'light' ),
    'new_item'              => __( 'Uusi mainos', 'light' ),
    'edit_item'             => __( 'Muokkaa mainosta', 'light' ),
    'update_item'           => __( 'Päivitä mainos', 'light' ),
    'view_item'             => __( 'Katso mainos', 'light' ),
    'view_items'            => __( 'Katso mainoksia', 'light' ),
    'search_items'          => __( 'Etsi mainos', 'light' ),
    'not_found'             => __( 'Ei löydy', 'light' ),
    'not_found_in_trash'    => __( 'Ei löydy roskista', 'light' ),
    'featured_image'        => __( 'Artikkelikuva', 'light' ),
    'set_featured_image'    => __( 'Aseta artikkelikuva', 'light' ),
    'remove_featured_image' => __( 'Poista artikkelikuva', 'light' ),
    'use_featured_image'    => __( 'Käytä artikkelikuvana', 'light' ),
    'insert_into_item'      => __( 'Lisää kohteeseen', 'light' ),
    'uploaded_to_this_item' => __( 'Lisätty kohteeseen', 'light' ),
    'items_list'            => __( 'Mainoslista', 'light' ),
    'items_list_navigation' => __( 'Mainoslistan navigointi', 'light' ),
    'filter_items_list'     => __( 'Suodata listaa', 'light' ),
  );
  $args = array(
    'label'                 => __( 'Mainos', 'light' ),
    'description'           => __( 'Ad slots', 'light' ),
    'labels'                => $labels,
    'supports'              => array( 'title', 'revisions', 'post-formats' ),
    'hierarchical'          => false,
    'public'                => false,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 5,
    'menu_icon'             => 'dashicons-forms',
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => false,
    'exclude_from_search'   => false,
    'publicly_queryable'    => false,
    'capability_type'       => 'page',
  );
  register_post_type( 'ads', $args );

}
add_action( 'init', 'ads', 0 );

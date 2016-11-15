<?php
/**
 * Funktiot ja määreet.
 *
 * @package light
 */

/*
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

/*
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

/*
 * Buddypress related
 */

load_plugin_textdomain('rendez-vous', false, WP_LANG_DIR );
load_plugin_textdomain('theme-my-login', false, WP_LANG_DIR );


function add_login_logout_link($items, $args)
{
  if(is_user_logged_in())
  {
    $newitems = $items;
    $newitems .= '<li class="login-logout"><a title="Kirjaudu ulos" href="'. wp_logout_url() .'"><span class="fa fa-power-off"></span> Kirjaudu ulos</a></li>';
  }
  else
  {
    $newitems = $items;
    $newitems .= '
    <li class="login-logout"><a href="'.get_page_link(1049).'"><span class="fa fa-toggle-on"></span> Rekisteröidy</a></li>
    <li class="login-logout"><a title="Kirjaudu sisään" href="'. wp_login_url() .'"><span class="fa fa-power-off"></span> Kirjaudu sisään</a></li>';
  }
  return $newitems;
}
add_filter('wp_nav_menu_items', 'add_login_logout_link', 10, 2);

/* -----------------------------------------------------------------------------
    Kellonaika viimeksi kirjautunut -kohtaan
----------------------------------------------------------------------------- */

function my_last_login( ) {
return 'j.m.Y, H:i';
}

add_filter('wpll_date_format', 'my_last_login');

/* -----------------------------------------------------------------------------
    Paginaatio
----------------------------------------------------------------------------- */

if ( ! function_exists( 'my_pagination' ) ) :
function my_pagination() {
    global $wp_query;

    $big = 999999999; // need an unlikely integer

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
 * Custom uploads-kansio (media)
 */
update_option( 'upload_path', untrailingslashit( str_replace( 'wp', 'media', ABSPATH ) ) );
update_option( 'upload_url_path', untrailingslashit( str_replace( 'wp', 'media', get_site_url() ) ) );
define( 'uploads', ''.'media' );
add_filter( 'option_uploads_use_yearmonth_folders', '__return_false', 100 );

/**
 * Oletus etusivu
 */
$etusivu = get_page_by_title( 'Etusivu' );
update_option( 'page_on_front', $etusivu->ID );
update_option( 'show_on_front', 'page' );

/**
 * Oletus blogisivu
 */
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

/* -----------------------------------------------------------------------------
    DUDE-scriptit
----------------------------------------------------------------------------- */

add_theme_support( 'automatic-feed-links' );
load_theme_textdomain( 'light', get_template_directory() . '/languages' );
load_plugin_textdomain('tribe-events-calendar', false, WP_LANG_DIR );
load_plugin_textdomain('tribe-events-calendar-pro', false, WP_LANG_DIR );

// JETPACKISSA TULEE OMA jquery mukana btw
if (!is_admin() ) add_action("wp_enqueue_scripts", "oma_jquery", 1);
function oma_jquery() {
   wp_deregister_script('jquery');
   wp_enqueue_script( 'jquery', get_template_directory_uri() . '/js/src/jquery.js', array(), '1.10.2', false );
}

// Kommentoinnit:
function acme_post_has( $type, $post_id ) {
 
  $comments = get_comments('status=approve&type=' . $type . '&post_id=' . $post_id );
  $comments = separate_comments( $comments );
 
  return 0 < count( $comments[ $type ] );
}

// Skriptit ja tyylit:
function light_scripts() {
    wp_enqueue_style( 'layout', get_template_directory_uri() . '/css/layout.css' );
    if(is_front_page() ) :
    wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/all.js', array(), '1.0', false );
    else :
    wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/all.js', array(), '1.0', true );
    endif; 
}
add_action( 'wp_enqueue_scripts', 'light_scripts' );

// Artikkelikuva-tuki:
add_theme_support( 'post-thumbnails' );

// Muokattavien valikoiden tuki.
register_nav_menus( array(
  'primary' => __( 'Primary Menu', 'light' ),
) );

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

// Remove WordPress Admin Bar (http://davidwalsh.name/remove-wordpress-admin-bar-css)
add_action('get_header', 'remove_admin_login_header');
function remove_admin_login_header() {
        remove_action('wp_head', '_admin_bar_bump_cb');
}
show_admin_bar(false);

// Duden bootstrapiin perustuva navwalker:
require get_template_directory() . '/inc/dude-wp-navwalker.php';

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

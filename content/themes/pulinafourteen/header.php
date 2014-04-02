<?php
/**
 * Header, jonka tarkoituksena on näyttää <head> ja siihen asti kun sisältö alkaa.
 *
 * @package pulinafourteen
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="author" content="Roni Laukkarinen, www.dude.fi">

<title><?php wp_title('&#124;', true, 'right'); ?></title>

<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png">
<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/images/icon.png">
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/images/icon-ipad.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/images/icon-retina.png">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


<div id="page" class="hfeed site">

<div class="headerarea">

	<div class="container headercontainer">

		<header class="site-header">

		<div class="columns alpha three">

			<div class="padder">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
			</div>

		</div>

		<div class="columns omega thirteen">
				
				<div class="padder">
				<nav id="site-navigation" class="main-navigation" role="navigation">

<?php 
$menu_to_count = wp_nav_menu(array(
'echo' => false
// ,'theme_location' => 'pulinamenu'
));
$menu_items = substr_count($menu_to_count,'class="page_item ');
$relativewidth = 100/$menu_items;
?>

<ul>
<?php $args = array(
	'authors'      => '',
	'child_of'     => 0,
	'date_format'  => get_option('date_format'),
	'depth'        => 0,
	'echo'         => 0,
	'exclude'      => '',
	'include'      => '',
	'link_after'   => '',
	'link_before'  => '',
	'post_type'    => 'page',
	'post_status'  => 'publish',
	'show_date'    => '',
	'sort_column'  => 'menu_order, post_title',
	'title_li'     => false,
	'walker'       => ''
); ?>
<?php 
    $rollenav = wp_list_pages($args);
    $var1 = '<li';
    $var2 = '<li style="width:'.$relativewidth.'%"';
    $rollenav = str_replace($var1, $var2, $rollenav);
    echo $rollenav;
 ?>
</ul>

				</nav>
				</div>

		</div>

		</header>

	</div>

</div>

	<div id="content" class="site-content">

<?php
defined( 'ABSPATH' ) or die( 'Cheatin\' uh?' );

define( 'WP_ROCKET_ADVANCED_CACHE', true );
$rocket_cache_path = '/var/www/pulina/content/cache/wp-rocket/';
$rocket_config_path = '/var/www/pulina/content/wp-rocket-config/';

if ( file_exists( '/var/www/pulina/content/plugins/wp-rocket/inc/front/process.php' ) ) {
include( '/var/www/pulina/content/plugins/wp-rocket/inc/front/process.php' );
}
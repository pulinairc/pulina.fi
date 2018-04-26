<?php
/**
 * Telegram module
 *
 * This module retrieves data from Telegram.
 *
 * @package light
 */

$telegram_bot_api_url = 'https://api.telegram.org/' . getenv('TELEGRAM_BOTTOKEN') . '/getUpdates?offset=-1&limit=1';

// Fetch data and set up simple cache
$telegram_cachefile = get_theme_file_path( 'inc/cache/telegram.json' );
$telegram_cachetime = 60; // 1 minute

// If cache file does not exist, let's create it
if ( ! file_exists( $telegram_cachefile ) ) {
  touch( $telegram_cachefile );
  copy( $telegram_bot_api_url, $telegram_cachefile );
}

// Set up feed
$json = file_get_contents( $telegram_cachefile );
$data = json_decode( $json, true );

// If file is older than cache time, overwrite file
if ( time() - filemtime( $telegram_cachefile ) > 2 * $telegram_cachetime ) {
  copy( $telegram_bot_api_url, $telegram_cachefile );
}

// Do stuff
foreach ( array_reverse($data['result']) as $result ) :
  // Test data:
  // echo var_dump($result['message']['date']) . '<br /><br />';
  echo time2str( $result['message']['date'] );
endforeach;

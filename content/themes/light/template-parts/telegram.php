<?php
/**
 * Telegram module
 *
 * This module retrieves data from Telegram.
 *
 * @package light
 */

$telegram_bot_api_url = file_get_contents( 'https://api.telegram.org/' . getenv( 'TELEGRAM_BOTTOKEN' ) . '/getUpdates?offset=-1&limit=1' );

$data = json_decode( $telegram_bot_api_url, true );

foreach ( array_reverse( $data['result'] ) as $result ) :
  echo time2str( $result['message']['date'] );
endforeach;

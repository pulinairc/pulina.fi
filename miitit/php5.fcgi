#!/bin/sh
export PHP_FCGI_CHILDREN=1
export PHP_FCGI_MAX_REQUESTS=500
export PHPRC="/home/web_70/sites/pulina.fi/conf/php.ini"
exec /usr/bin/php5-cgi

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>#Pulina Stats</title>
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
<style>

* {
  box-sizing: border-box;
}
html,body {
  font: normal 16px/1.5 "Roboto", "Noto Sans", "Open Sans", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  transition: opacity 0.5s ease-in-out;
  margin: 0;
  background-color: white;
  color: #333;
}
body {
  opacity: 0;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #534e94;
}
main {
  max-width: 630px;
  padding: 15px;
  margin: auto;
  display: block;
}
h1 {
  margin: 50px 0;
}
h1,h2 {
  font-weight: 300;
  text-align: center;
}
h2 {
  margin: 50px 0 50px;
}
h4 {
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  margin-top: -50px;
  margin-bottom: 50px;
  color: #999;
}
hr {
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 50px auto;
}
p {
  color: #999;
  font-weight: 300;
  font-size: 14px;
  margin: auto;
}
header p {
  max-width: 500px;
  font-size: 16px;
  color: #333;
}
header hr {
  max-width: 200px;
}
.activity-numbers {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
.activity-numbers div {
  padding: 10px 0;
  font-size: 30px;
  font-weight: 300;
  flex-grow: 1;
  text-align: center;
}

@media (max-width: 500px) {
  .activity-numbers div {
    min-width: 150px;
    flex: 1 1 0;
  }
}

.activity-numbers span {
  display: block;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}
.activity-numbers small {
  font-size: 18px;
}
text {
  font-size: 12px;
}
.chart rect:hover {
  fill: #00d1fd;
}
.scale-1 {
  fill: #c2d0de;
  border-color: #c2d0de;
}
.scale-2 {
  fill: #8495ab;
  border-color: #8495ab;
}
.scale-3 {
  fill: #4e5f73;
  border-color: #4e5f73;
}
.scale-4 {
  fill: #534e94;
  border-color: #534e94;
}
.scale-5 {
  fill: #825db8;
  border-color: #825db8;
}
.scale-6 {
  fill: #c56edd;
  border-color: #c56edd;
}
.key {
  display: flex;
  position: absolute;
  top: 237px;
}
.key div {
  border-top-width: 4px;
  border-top-style: solid;
  width: 36px;
  font-size: 11px;
  padding: 5px 0 0;
  margin-right: 1px;
}

@media (max-width: 500px) {

  .key div:nth-child(odd) {
    display: none;
  }
}

#charts {
  position: relative;
  height: 275px;
}
#charts,.chart {
  max-width: 600px;
}
.chart {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow-x: auto;
  text-align: center;
}
#charts .hover {
  position: absolute;
  top: 228px;
  right: 0;
  font-size: 14px;
}
#charts .hover .date,#charts .hover .lines {
  text-align: right;
}

@media (max-width: 500px) {
  #charts .hover {
    font-size: 12px;
  }
}

#hourly {
  position: relative;
  height: 170px;
  max-width: 340px;
  margin: 20px auto;
}
#hourly .hover {
  position: absolute;
  top: 135px;
  display: flex;
  width: 100%;
  font-size: 14px;
}
#hourly .lines {
  text-align: right;
  flex-grow: 1;
}
#active-users,#top-users {
  border-spacing: 0;
  width: 100%;
}

#user-hours {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
#user-hours > div {
  min-width: 120px;
  margin: 10px 10px 30px;
}
#user-hours svg {
  margin-top: 10px;
}

table {
  margin-bottom: 10px;
}
td, th {
  text-align: right;  
}
th {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  padding-bottom: 10px;
}
td {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}
td:first-child {
  font-size: 20px;
  font-weight: 300;
  text-align: left;
}
td img {
  width: 45px;
  height: 45px;
  background-color: #ddd;
  border-radius: 4px;
  margin-right: 15px;
  display: inline-block;
}
td img,td svg {
  vertical-align: middle;
}

@media (max-width: 500px) {
  td:first-child {
    font-size: 16px;
    font-weight: 500;
  }
  th:nth-last-child(2),td:nth-last-child(2),th:last-child,td:last-child {
    display: none;
  }
  td img {
    width: 25px;
    height: 25px;
  }
}
#user-hours img {
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 4px;
  vertical-align: middle;
  margin-right: 10px;
}
.stacked-chart {
  display: flex;
  height: 40px;
}
.stacked-chart div {
  box-shadow: inset -1px 0 0 0 white;
}
.stacked-chart div:nth-child(1), 
#activity-percentage li:nth-child(1) .color { background-color: #c56edd }
.stacked-chart div:nth-child(2), 
#activity-percentage li:nth-child(2) .color { background-color: #ad68d0 }
.stacked-chart div:nth-child(3), 
#activity-percentage li:nth-child(3) .color { background-color: #8d60bf }
.stacked-chart div:nth-child(4), 
#activity-percentage li:nth-child(4) .color { background-color: #7458af }
.stacked-chart div:nth-child(5), 
#activity-percentage li:nth-child(5) .color { background-color: #5e509f }
.stacked-chart div:nth-child(6), 
#activity-percentage li:nth-child(6) .color { background-color: #514e90 }
.stacked-chart div:nth-child(7), 
#activity-percentage li:nth-child(7) .color { background-color: #4e527d }
.stacked-chart div:nth-child(8), 
#activity-percentage li:nth-child(8) .color { background-color: #4e5c73 }
.stacked-chart div:nth-child(9), 
#activity-percentage li:nth-child(9) .color { background-color: #5b6e7f }
.stacked-chart div:nth-child(10), 
#activity-percentage li:nth-child(10) .color { background-color: #75869b }
.stacked-chart div:last-child { background-color: #8f9fb4; flex-grow: 1; box-shadow: none; }

#activity-percentage ol {
  padding: 0;
  margin: 50px auto;
  column-count: 2;
}
#activity-percentage li {
  font-size: 16px;
  padding: 5px 0;
  list-style: none;
  line-height: 25px;
}
#activity-percentage strong {
  font-size: 14px;
  font-weight: 500;
  margin-left: 3px;
}
#activity-percentage .color {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  vertical-align: middle;
  margin-right: 8px;
  display: inline-block;
}
#months {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.months-chart {
  overflow-x: auto;
  text-align: right;
}
.months-users {
  flex-shrink: 0;
}
#months ol {
  padding: 26px 0 0;
  margin: 0;
}
#months li {
  list-style: none;
  line-height: 25px;
}
#months img {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 5px;
}
footer:before {
  width: 60px;
  content: '';
  display: inline-block;
  height: 1px;
  margin: 0 0 13px;
  background-color: #333;
}
footer {
  font-size: 12px;
  margin-top: 50px;
}

.users b,
.paikalla {
  font-weight: 300 !important;
}

.stats-bar {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 11px;
  color: #888;
  margin: 0;
  padding: 0;
  opacity :.5;
  transition: all .6s;
}

.stats-bar:hover {
  opacity: 1;
}

.stats-bar a:link,
.stats-bar a:active,
.stats-bar a:visited,
.stats-bar a:focus {
  color: #888;
  text-decoration: underline;
}

body .stats-bar a:hover {
  text-decoration: none;
}
</style>
<noscript>
  <style> body { opacity: 1; } </style>
</noscript>
</head>
<body id="body">

<!-- <p class="stats-bar"><a href="http://peikko.us/statsit/pulina/">pisg</a>, <a href="https://pulina.fi/sss/" style="text-decoration: underline;">superseriousstats</a>, <a href="http://ircstats.nytsoi.net/pulina.html" style="text-decoration: underline;">mIRCStats</a></p> -->

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once( 'simplehtmldom/simple_html_dom.php' );
$stats_url = 'http://peikko.us/statsit/pulina/index.html';
$stats = file_get_html( $stats_url );
$peak_url = 'http://peikko.us/peak.db';
$peak = file_get_html( $peak_url );
$numbers_url = 'http://peikko.us/pulina.html';
$numbers = file_get_html( $numbers_url );

// Viestejä
preg_match('/Rivien yhteismäärä: (?P<digit>\d+)/', $stats, $matches);
$messages = $matches[1];

// Päiviä
preg_match('/Tällä (?P<digit>\d+) päivän ajanjaksolla, kanavalla #pulina kävi yhteensä /', $stats, $matches2);
$days = $matches2[1];

// Käyttäjiä
$bold = $stats->find('div');
$users = $bold[0];
?>

<main role="main">
<header>
  <h1>Pulina - tilastot</h1>
  <p>Tämä sivusto sisältää nopean katsauksen <a href="https://www.pulina.fi">#pulina</a>-kanavan tilastoista. Muita tilastoja: <a href="http://peikko.us/statsit/pulina/">pisg</a>, <a href="https://pulina.fi/sss/">superseriousstats</a>, <a href="http://ircstats.nytsoi.net/pulina.html">mIRCStats</a>.</p>
  <hr>
</header>

<h2>Aktiivisuus - yhteenveto</h2>
<div class="activity-numbers">
  <div><span>Viestejä</span> <?php echo $messages; ?></div>
  <div><span>Paikalla nyt</span> <?php foreach( $numbers->find('.paikalla') as $numero ) echo $numero; ?></div>
  <div class="users"><span>Käyttäjiä</span> <?php $bold = $stats->find('b'); $visitors = $bold[0]; echo $visitors; ?></div>
  <div><span>Päiviä</span> <?php echo $days; ?></div>
</div>

<div id="charts">
  <div class="chart">

<hr>
<h2 style="margin-bottom: 10px !important;">Aktiivisimmat tänään</h2>
<table id="active-users">
  <thead>
  <tr>
    <th></th>
    <th>Sanamäärä</th>
  </tr>
  </thead>
  <tbody>

<?php
// Fetch data and set up simple cache
$toptod_fetch_url = 'http://peikko.us/toptod.html';

// Set up fetchable data
$html = file_get_contents( $toptod_fetch_url );
$items = explode(') ', $html);

// Start
foreach ($items as $key => $item) {
  $list_item = trim($item);

  if ( $list_item === '' || $list_item === ' ' || empty( $list_item ) ) :
  else :

    $get_points = explode('(', $list_item);
    $point_raw = explode(')', $get_points[1]);
    $nick_raw = explode('. ', $get_points[0]);
    $points = $get_points[1];
    $nick = $nick_raw[1];

    // Progress calculation
    $maxpoints = '2000';
    $count_percent_part1 = $points * 100;
    $percent = $count_percent_part1 / $maxpoints;
    $nearest_ten = ceil($percent / 10) * 10;

    // Add: ( ( $nick == 'mustikkasoppa' ) ? 'https://twitter.com/mustikkasoppa' : "" )

    // Ignore bot
    if ( $nick != 'kummitus' ) :
      echo '<tr class="progress progress-' . $nearest_ten . ' percent-' . $percent . '"">
      <td><a href="'. ( ( $nick == 'mustikkasoppa' ) ? 'https://twitter.com/mustikkasoppa' :  ( ( $nick == 'samiy' ) ? 'https://twitter.com/samiylitalo' : ( ( $nick == 'rolle' ) ? 'https://twitter.com/rolle' : "" ) ) ) . '"><img src="'. ( ( $nick == 'mustikkasoppa' ) ? 'https://pbs.twimg.com/profile_images/978120084219670529/-NOTa6ss_400x400.jpg' : ( ( $nick == 'samiy' ) ? 'https://pbs.twimg.com/profile_images/1122114586734399488/GbU40dJE_400x400.png' : ( ( $nick == 'rolle' ) ? 'https://pbs.twimg.com/profile_images/656061105152724992/m2V64UH9_400x400.jpg' : "" ) ) ) . '" alt="">' . $nick . '</a></td>
      <td data="' . $points . '">' . $points . '</td>
    </tr>';
    endif;

  endif;
}
?>  
  </tbody>
</table>

<p style="text-align: left;">Listaan lasketaan tänään aktiivisena olleet. Päivittyy täysin reaaliajassa.</p>

    <h2>Lisää tilastoja tulossa</h2>
    <p>Lisää tilastoja tulossa tälle sivulle kunhan rollen aika antaa myöten... Katso odotellessa nämä: <a href="http://peikko.us/statsit/pulina/">pisg</a>, <a href="https://pulina.fi/sss/">superseriousstats</a>, <a href="http://ircstats.nytsoi.net/pulina.html">mIRCStats</a></p><br /><br />

  </div>
</div>

</main>
<script>
'use strict'

// Scroll chart to the left if it overflows
var element = document.querySelector('#charts .chart')
element.scrollLeft = element.scrollWidth

// var element = document.querySelector('#months .months-chart')
// element.scrollLeft = element.scrollWidth


// myArray.pushArray([1, 2, 3], [4, 5 ,6]) → [1, 2, 3, 4, 5, 6]
Array.prototype.pushArray = function() {
  this.push.apply(this, this.concat.apply([], arguments))
}

// 1234 → 1,234
function addCommas(number) {
  var parts = number.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

function listenAll(selector, event, fn) {
  var list = document.querySelectorAll(selector)
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false)
  }
}

function insertHTML(selector, html) {
  document.querySelector(selector).innerHTML = html
}

function daysHover(event) {
  var lines = event.target.getAttribute('data:lines')
  var date  = event.target.getAttribute('data:date')
  insertHTML('#charts .hover .date', date)
  insertHTML('#charts .hover .lines', addCommas(lines) + ' lines')
}

function weeksHover(event) {
  var lines = event.target.getAttribute('data:lines')
  var first = event.target.getAttribute('data:first')
  var last  = event.target.getAttribute('data:last')
  insertHTML('#charts .hover .date', first + ' – ' + last)
  insertHTML('#charts .hover .lines', addCommas(lines) + ' lines')
}

function hoursHover(event) {
  var lines = event.target.getAttribute('data:lines')
  insertHTML('#hourly .hover .lines', addCommas(lines) + ' lines')
}

// Shift timezone
var svgns = 'http://www.w3.org/2000/svg'

var local_time = new Date()
var local_zone = local_time.getTimezoneOffset()/60

var timezone_label = (local_zone > 0) ? 'GMT–' + local_zone : 'GMT+' + Math.abs(local_zone)
var timezone_labels = document.querySelectorAll('.timezone-label')
for (var timezones of timezone_labels) {
  timezones.innerHTML = timezone_label
}

// Add event listener to ever <th>
function makeSortable(table) {
  var th = table.tHead
  th && (th = th.rows[0]) && (th = th.cells)
  for (var i = 0; i < th.length; i++) {
    (function(i) {
      var dir = 1
      th[i].addEventListener('click', function() {
        sortTable(table, i, (dir = 1 - dir))
      })
    }(i))
  }
}

(function(){
  document.getElementById('body').style.opacity = 1
})()
</script>
</body>
</html>

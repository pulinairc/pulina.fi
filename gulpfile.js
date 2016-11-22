/*

REQUIRED STUFF
==============
*/

var changed     = require('gulp-changed');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var notify      = require('gulp-notify');
var prefix      = require('gulp-autoprefixer');
var minifycss   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');
var cache       = require('gulp-cache');
var concat      = require('gulp-concat');
var header      = require('gulp-header');
var pixrem      = require('gulp-pixrem');
var minifyhtml  = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var util        = require('gulp-util');

/*

FILE PATHS
==========
*/

var themeDir = 'content/themes/light';
var sassSrc = themeDir + '/sass/**/*.{sass,scss}';
var sassFile = themeDir + '/sass/base/global.scss';
var cssDest = themeDir + '/css';
var customjs = themeDir + '/js/scripts.js';
var jsSrc = themeDir + '/js/src';
var jsDest = themeDir + '/js';
var phpSrc = [themeDir + '/**/*.php', !'vendor/**/*.php'];

/*

ERROR HANDLING
==============
*/

var handleError = function(task) {
  return function(err) {

      notify.onError({
        message: task + ' failed, check the logs..'
      })(err);

    util.log(util.colors.bgRed(task + ' error:'), util.colors.red(err));
  };
};

/*

BROWSERSYNC
===========
*/

var devEnvironment = 'pulina.dev'
var hostname = 'localhost'
var localURL = 'http://' + devEnvironment;

gulp.task('browserSync', function () {

    //declare files to watch + look for files in assets directory (from watch task)
    var files = [
    cssDest + '/**/*.{css}',
    jsSrc + '/**/*.js',
    themeDir + '/**/*.php'
    ];

    browserSync.init(files, {
      proxy: localURL,
      host: hostname,
      agent: false,
      browser: "Google Chrome"
    });

});


/*

SASS
====
*/

gulp.task('sass', function() {
  gulp.src(sassFile)

  gulp.src(sassFile)

  .pipe(sass({
    compass: false,
    bundleExec: true,
    sourcemap: false,
    style: 'compressed',
    debugInfo: true,
    lineNumbers: true,
    errLogToConsole: true,
    includePaths: [
      themeDir + '/node_modules/',
      'node_modules/',
      // 'bower_components/',
      // require('node-bourbon').includePaths
    ],
  }))

  .on('error', handleError('styles'))
  .pipe(prefix('last 3 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(pixrem())
  .pipe(minifycss({
    advanced: true,
    keepBreaks: false,
    keepSpecialComments: 0,
    mediaMerging: true,
    sourceMap: true
  }))
  .pipe(gulp.dest(cssDest))
  .pipe(browserSync.stream());

});


/*

SCRIPTS
=======
*/


var currentDate   = util.date(new Date(), 'dd-mm-yyyy HH:ss');
var pkg       = require('./package.json');
var banner      = '/*! <%= pkg.name %> <%= currentDate %> - <%= pkg.author %> */\n';

gulp.task('js', function() {

      gulp.src(
        [
          themeDir + '/js/src/jquery.js',
          themeDir + '/js/src/prism.js',
          themeDir + '/js/src/skrollr.js',
          themeDir + '/js/src/navigation.js',
          themeDir + '/js/src/scripts.js'
        ])
        .pipe(concat('all.js'))
        .pipe(uglify({preserveComments: false, compress: true, mangle: true}).on('error',function(e){console.log('\x07',e.message);return this.end();}))
        .pipe(header(banner, {pkg: pkg, currentDate: currentDate}))
        .pipe(gulp.dest(jsDest));
});


/*

WATCH
=====

Notes:
   - browserSync automatically reloads any files
     that change within the directory it's serving from
*/

gulp.task('setWatch', function() {
  global.isWatching = true;
});

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(sassSrc, ['sass']);
  gulp.watch(jsSrc + '/**/*.js', ['js', browserSync.reload]);
});


/*

BUILD
=====
*/

gulp.task('build', function(cb) {
  runSequence('sass', cb);
});

/*

DEFAULT
=======
*/

gulp.task('default', function(cb) {
    runSequence(
    'images',
    'sass',
    'js',
    'minify-html',
    'browserSync',
    'watch',
    'refresh',
    cb
    );
});

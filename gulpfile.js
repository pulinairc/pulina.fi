var gulp = require('gulp'),
    compass = require('gulp-compass'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    header = require('gulp-header');
    util = require('gulp-util');
    livereload = require('gulp-livereload'),
    currentDate = util.date(new Date(), 'dd-mm-yyyy');
    pkg = require('./package.json');
    banner = '/*! <%= pkg.name %> <%= currentDate %> - <%= pkg.author %> */\n';

// Compass without config.rb:

gulp.task('compass', function() {
  gulp.src('content/themes/pulinafourteen/sass/layout.scss')
  .pipe(compass({
    css: 'content/themes/pulinafourteen/css',
    sass: 'content/themes/pulinafourteen/sass',
    image: 'content/themes/pulinafourteen/images'
      ,require: ['breakpoint', 'sassy-buttons']
      }))
  .on('error', function(err) {
    // Would like to catch the error here
      })
  .pipe(minifycss({keepBreaks:false,keepSpecialComments:0,}))
  .pipe(gulp.dest('content/themes/pulinafourteen/css'))
  .pipe(livereload())
  .pipe(notify({ message: 'Compass complete' }));
    });

gulp.task('scripts', function() {
  //gulp.src('content/themes/pulinafourteen/js/*.js')
  gulp.src(
    [
    'content/themes/pulinafourteen/js/jquery.js',
    'content/themes/pulinafourteen/js/trunk.js',
    'content/themes/pulinafourteen/js/jquery.animateNumber.js',
    'content/themes/pulinafourteen/js/goalProgress.js',
    'content/themes/pulinafourteen/js/scripts.js'
    ])
    .pipe(concat('all.js'))
    .pipe(uglify({preserveComments: false, compress: true, mangle: true}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    .pipe(header(banner, {pkg: pkg, currentDate: currentDate}))
    .pipe(gulp.dest('content/themes/pulinafourteen/js/'))
    .pipe(livereload())
    .pipe(notify({ message: 'scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('content/themes/pulinafourteen/images/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(livereload())
    .pipe(gulp.dest('content/themes/pulinafourteen/images/optimized'));
    });

gulp.task('php', function(){  
    gulp.src('*.php')
    .pipe(livereload())
    .pipe(notify({ message: 'php-file was reloaded' }));
})

gulp.task('html', function(){  
    gulp.src('*.html')
    .pipe(livereload())
    .pipe(notify({ message: 'html-file was reloaded' }));
})

gulp.task('watch', function() {

  livereload.listen();

  gulp.watch('content/themes/pulinafourteen/*.php', ['php']);
  gulp.watch('content/themes/pulinafourteen/inc/*.php', ['php']);
  gulp.watch('content/themes/pulinafourteen/*.html', ['html']);
  gulp.watch('content/themes/pulinafourteen/sass/*.scss', ['compass']);
  gulp.watch('content/themes/pulinafourteen/js/scripts.js', ['scripts']);
  gulp.watch('content/themes/pulinafourteen/images/*', ['images']);

});

gulp.task('default', function() { gulp.start('compass', 'scripts', 'images'); });  

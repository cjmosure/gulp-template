var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var del = require('del');
var gulpFilter = require('gulp-filter');

var jsFiles = [
  'assets/vendor/jquery/dist/jquery.js',
  'assets/vendor/angular/angular.js',
  'assets/vendor/bootstrap-sass/assets/javascripts/bootstrap.js'
];

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('scripts', function() {
  return gulp.src(jsFiles)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  var filter = gulpFilter(['*.css', '!*.map']);
  return gulp.src('assets/sass/app.scss')
    .pipe(plumber())
  	.pipe(sourcemaps.init())
      .pipe(sass({ style: 'expanded' }))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'SASS Compiled' }));
});

gulp.task('watch', function() {
  gulp.watch('assets/sass/**', ['styles']);
});

gulp.task('default', ['styles', 'scripts']);

function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}
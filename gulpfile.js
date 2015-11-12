// Gulp Basics 
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var lazypipe     = require('lazypipe');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var notify       = require('gulp-notify');
var del          = require('del');
var gulpFilter   = require('gulp-filter');
var browserSync  = require('browser-sync').create();

// CSS
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss    = require('gulp-minify-css');
var concatCss    = require('gulp-concat-css');

// Javascript
var uglify       = require('gulp-uglify');

// Asset Builder
var manifest = require('asset-builder')('./assets/manifest.json');
var app = manifest.getDependencyByName('main.js');

// Clean - removes dist folder
gulp.task('clean', function(cb) {
  del([manifest.paths.dist], cb);
});

gulp.task('scripts', function() {
  return gulp.src(app.globs)
    .pipe(concat(app.name))
    .pipe(uglify())
    .pipe(gulp.dest(manifest.paths.dist));
});

gulp.task('styles', function() {
  var filter = gulpFilter(['*.css', '!*.map']);
  return gulp.src('assets/sass/main.scss')
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
  browserSync.init({
    files: ['dist/*'],
    proxy: manifest.config.devUrl
  });
  gulp.watch('assets/sass/**', ['styles']);
});

gulp.task('default', ['styles', 'scripts']);

function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}
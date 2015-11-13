// Gulp Basics 
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var lazypipe     = require('lazypipe');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var notify       = require('gulp-notify');
var gulpFilter   = require('gulp-filter');
var browserSync  = require('browser-sync').create();
var runSequence  = require('run-sequence');
var changed      = require('gulp-changed');

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
var javascripts = manifest.getDependencyByName('main.js');

// CSS processing pipeline
var cssTasks = lazypipe()
  .pipe(plumber)
  .pipe(sourcemaps.init)
  .pipe(sass,{ style: 'expanded' })
  .pipe(autoprefixer, {
    browsers: [
      'last 2 versions',
      'ie 8',
      'ie 9',
      'android 2.3',
      'android 4',
      'opera 12'
    ]
  })
  .pipe(minifyCss, {
    advanced: false,
    rebase: false
  })
  .pipe(sourcemaps.write)
  .pipe(gulp.dest, 'dist')
  .pipe(notify, {message: 'Styles Ready...'});

// Javascript processing pipeline
var jsTasks = lazypipe()
  .pipe(plumber)
  .pipe(concat, javascripts.name)
  .pipe(uglify)
  .pipe(gulp.dest, manifest.paths.dist);

// Clean - removes dist folder
gulp.task('clean', require('del').bind(null, [manifest.paths.dist]));

// Wiredep - inject bower dependencies
gulp.task('wiredep', function() {
  var wiredep = require('wiredep').stream;
  return gulp.src('assets/sass/main.scss')
  //return gulp.src(project.css) can't get variable to work for some weird reason :|
    .pipe(wiredep())
    .pipe(changed('assets/sass', {
      hasChanged: changed.compareSha1Digest
    }))
    .pipe(gulp.dest(manifest.paths.source + 'sass'));
});

// Styles task
gulp.task('styles',['wiredep'], function() {
    gulp.src('assets/sass/main.scss').pipe(cssTasks());
});

// Scripts Task
gulp.task('scripts', function() {
    gulp.src(javascripts.globs).pipe(jsTasks());
});

// Watch
gulp.task('watch', function() {
  browserSync.init({
    files: ['dist/*','*.html'],
    proxy: manifest.config.devUrl
  });
  gulp.watch('assets/sass/**', ['styles']);
  gulp.watch('assets/scripts/**', ['scripts']);
});

// Build task, default
gulp.task('build', function(callback) {
  runSequence('styles','scripts',callback);
});

// For when `gulp` is ran
gulp.task('default',['clean'], function() {
  gulp.start('build');
});

// Optional error handling
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}
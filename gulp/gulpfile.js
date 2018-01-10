var path = "..";
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: "..",
      notify: false
  });
  gulp.watch(path + "/assets/scss/*.scss", ['sass']);
  gulp.watch(path + "/assets/scss/about-us/*.scss", ['sass']);
  gulp.watch(path + "/assets/scss/contact/*.scss", ['sass']);
  gulp.watch(path + "/assets/scss/footer/*.scss", ['sass']);
  gulp.watch(path + "/assets/scss/main/*.scss", ['sass']);
  gulp.watch(path + "/assets/scss/news-and-publications/*.scss", ['sass']);
  gulp.watch(path + "/assets/scss/news-and-publications-details/*.scss", ['sass']);
  gulp.watch(path + "/assets/scss/our-services-market-qualitative/*.scss", ['sass']);
  gulp.watch(path + "/assets/scss/our-services-market-quantitative/*.scss", ['sass']);
  gulp.watch(path + "/assets/scss/our-services-media-intelligence/*.scss", ['sass']);
  gulp.watch(path + "/assets/scss/our-services-page/*.scss", ['sass']);
  gulp.watch(path + "/*.html").on('change', browserSync.reload);
  gulp.watch(path + "/assets/js/vendors/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src(path + "/assets/scss/*.scss")
  .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
  .pipe(rename("main.min.css"))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(path + "/assets/css/"))
  .pipe(browserSync.stream());
});

gulp.task('concat', function() {
  return gulp.src(path + "/assets/js/vendors/*.js")
  .pipe(concat("vendors.js"))
  .pipe(gulp.dest(path + "/assets/js/"));
});

gulp.task('default', ['serve']);

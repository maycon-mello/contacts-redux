require('babel-core/register');

var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var browserify = require('browserify')
var babel = require('gulp-babel')
var mocha = require('gulp-mocha')
var gutil = require('gulp-util');

//

gulp.task('browserify', shell.task([
  'browserify -t babelify ./src/main.js -o ./dist/public/bundle.js',
]));

gulp.task('babel-server', function() {
  return gulp.src('src/server/**/*.js')
          	 .pipe(babel({ presets: ['es2015'] }))
             .pipe(gulp.dest('dist/server'));
});

gulp.task('sass', function() {
  gulp.src('./src/style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/public'));
});

gulp.task('test', function() {
  return gulp.src('./test/**/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}))
        .on('error', gutil.log);;
});

gulp.task('copy', function() {
  gulp.src(['./src/index.html']).pipe(gulp.dest('./dist/public'));
  gulp.src(['./src/vendor/**/*']).pipe(gulp.dest('./dist/public/vendor'));
  gulp.src(['./src/client.js']).pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/server/**/*.js'], ['babel-server']);
  gulp.watch(['./src/**/*.js'], ['browserify', 'copy']);
  gulp.watch('./src/style/**/*.scss', ['sass']);
});

gulp.task('default', ['babel-server', 'browserify', 'copy', 'sass', 'watch'], function () {

});

var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var browserify = require('browserify')
var babel = require('gulp-babel')
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

gulp.task('copy', function() {
  gulp.src(['./src/index.html']).pipe(gulp.dest('./dist/public'));
  gulp.src(['./src/vendor/**/*']).pipe(gulp.dest('./dist/public/vendor'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/server/**/*.js'], ['babel-server']);
  gulp.watch(['./src/**/*.js'], ['browserify']);
  gulp.watch('./src/style/**/*.scss', ['sass']);
});

gulp.task('default', ['babel-server', 'browserify', 'copy', 'sass', 'watch'], function () {

});

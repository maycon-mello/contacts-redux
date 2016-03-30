var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell');
var sass = require('gulp-sass');

gulp.task('browserify', shell.task([
  'browserify -t babelify ./src/main.js -o ./build/public/bundle.js',
]));

gulp.task('sass', function () {
  gulp.src('./src/style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/public'));
});

gulp.task('copy', function () {
  gulp.src(['./src/server/**/*']).pipe(gulp.dest('./build'));
  gulp.src(['./src/index.html']).pipe(gulp.dest('./build/public'));
  gulp.src(['./src/vendor/**/*']).pipe(gulp.dest('./build/public/vendor'));
});

gulp.task('default', ['browserify', 'copy', 'sass'], function () {
    gulp.watch(['./src/**/*.js'], ['browserify', 'copy']);
    gulp.watch('./src/style/**/*.scss', ['sass']);
});

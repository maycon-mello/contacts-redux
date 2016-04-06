require('babel-core/register');

var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel')
var mocha = require('gulp-mocha')
var gutil = require('gulp-util');
var shell = require('gulp-shell');

gulp.task('babel-server', function() {
  return gulp.src('src/server/**/*.js')
          	 .pipe(babel({ presets: ['es2015'] }))
             .pipe(gulp.dest('dist/server'));
});

gulp.task('server', shell.task([
  'nodemon dist/server/server.js',
]));

gulp.task('client', shell.task([
  'node dist/client.js',
]));


gulp.task('copy', function() {
  gulp.src(['./src/index.html']).pipe(gulp.dest('./dist/public'));
  gulp.src(['./src/vendor/**/*']).pipe(gulp.dest('./dist/public/vendor'));
  gulp.src(['./src/client.js']).pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/server/**/*.js'], ['babel-server']);
});

gulp.task('default', ['babel-server', 'copy', 'server', 'client', 'watch'], function () {});

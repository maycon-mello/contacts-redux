require('babel-core/register');

var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel')
var mocha = require('gulp-mocha')
var gutil = require('gulp-util');
var shell = require('gulp-shell');

gulp.task('babel-server', function() {
  return gulp.src('app/remote/**/*.js')
          	 .pipe(babel({ presets: ['es2015'] }))
             .pipe(gulp.dest('build/remote'));
});

gulp.task('server', shell.task([
  'nodemon build/remote/server.js',
]));

gulp.task('webpack', shell.task([
  'node server.js',
]));


gulp.task('copy', function() {
  gulp.src(['./app/index.html']).pipe(gulp.dest('./build/public'));
  gulp.src(['./app/public/**/*']).pipe(gulp.dest('./build/public/'));
  gulp.src(['./app/client.js']).pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
  gulp.watch(['./app/remote/**/*.js'], ['babel-server']);
});

gulp.task('default', ['babel-server', 'copy', 'server', 'webpack', 'watch'], function () {});

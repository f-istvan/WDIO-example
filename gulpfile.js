'use strict';

var gulp = require('gulp');
var webdriver = require('gulp-webdriver');

gulp.task('test', ['test-cucumber']);

gulp.task('test-cucumber', function () {
    return gulp.src('test/wdio.conf.js').pipe(webdriver());
});
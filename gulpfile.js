'use strict';

var gulp = require('gulp'),
    jasmine = require('gulp-jasmine'),
    jshint = require('gulp-jshint'),
    webdriver = require('gulp-webdriver');

gulp.task('beforeBuild', ['test', 'jshint']);

gulp.task('test', ['test-cucumber', 'test-jasmine']);

gulp.task('test-cucumber', function () {
    return gulp.src('test/wdio.conf.js').pipe(webdriver());
});

gulp.task('test-jasmine', function () {
    return gulp.src(['test/specs/*-spec.js']).pipe(jasmine());
});

gulp.task('jshint', function () {
    return gulp.src('source/**/*.js').pipe(jshint()).pipe(jshint.reporter('default'));
});

/*
  Source: https://browsersync.io/docs/gulp
*/

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        files: ["index.html", "js/*.js"],
	server: true
    });
});

gulp.task('default', ['browser-sync']);
